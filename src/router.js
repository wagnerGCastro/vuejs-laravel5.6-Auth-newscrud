import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/user/Login.vue'
import Signup from './views/user/Signup.vue'
import Reset from './views/user/Reset.vue'
import Profile from './views/user/Profile.vue'
import Response from './views/user/Response'
import CreateNews from './components/users/CreateNews'
import ListMyNews from './components/users/ListNews'
import EditNews from './components/users/EditNews'
import Upload from './components/media/Upload'

Vue.use(Router);

export default new Router({
    mode: 'history',
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
      {
          path: '/about',
          name: 'about',
          component: About
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      {
          path: '/signup',
          name: 'signup',
          component: Signup
      },
      {
          path: '/reset',
          name: 'reset',
          component: Reset
      },
      {
          path: '/response',
          name: 'response',
          component: Response
      },
      {
          path: '/profile',
          name: 'profile',
          component: Profile,
          meta: {requiresAuth: true},
          children: [
              {
                  path: 'news',
                  name: 'profile_news',
                  component: CreateNews
              },
              {
                  path: 'news_list',
                  name: 'news_list',
                  component: ListMyNews
              },
              {
                  path: 'edit_news/:news_id',
                  name: 'edit_news',
                  component: EditNews
              },
              {
                  path: 'upload',
                  name: 'upload',
                  component: Upload
              }
          ]
      },
      {
          path: '*',
          redirect: '/'
      }


  ]
})
