import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Tony_User_Module from './store/modules/tony_users'
import tony_news from './store/modules/tony_news'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://blog.test';

export default new Vuex.Store({
    state: {

    },
    getters: {


    },
    mutations: {


    },
    actions: {

    },
    modules: {
        t_u_module: Tony_User_Module,
        t_n_module: tony_news
    }
})

