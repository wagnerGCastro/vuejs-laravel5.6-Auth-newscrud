import axios from 'axios'
import store from '../../store'
const state = {
    news: {
        id: '',
        title: '',
        body: '',
        tags: ''
    },

    myListNews: []
};
const getters = {
   myListNews(state) {
       return state.myListNews
   },
    news(state) {
      return state.news
    }
};
const mutations = {
    retrieveMyListNews(state, data) {
        state.myListNews = data
    },
    news(state, data){
        state.news.id = data.id,
        state.news.title = data.title,
        state.news.body = data.body,
        state.news.tags = data.tags
    }
};
const actions = {
    createNews(context, data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/profile/news', {
                title: data.title,
                body: data.body,
                tags: data.tags
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    getMyListNews(context) {
            axios.get('/api/profile/news')
                .then(response => {
                    context.commit('retrieveMyListNews', response.data)

                })
                .catch(error => {
                    console.log(error)
                })
    },
    getNews(context, news_id) {
        axios.get('/api/profile/news/' + news_id)
            .then(response => {
                context.commit('news', response.data)
            })
    },
    updateNews(context, news) {
        axios.put('/api/profile/news/' + news.id, {
            title: news.title,
            body: news.body
        })
            .then(response => {
                context.commit('news', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}