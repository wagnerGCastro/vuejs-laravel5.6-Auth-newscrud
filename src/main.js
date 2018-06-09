import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import swalPlugin from './plugins/sweetalert2'
import interceptor from './store/interceptors'


Vue.config.productionTip = false;
Vue.use(swalPlugin);
interceptor();

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'todo',
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
