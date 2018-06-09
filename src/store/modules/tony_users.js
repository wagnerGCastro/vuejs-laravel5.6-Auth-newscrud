import axios from 'axios'
const state = {
        token: localStorage.getItem('access_token') || null,
        expiration: localStorage.getItem('expiration') || null,
        user: {
            name: '',
            email: '',
            role: ''
        },
        passwordResetEmail: null
    };
const mutations = {
        retrieveToken(state, {token, expiration}) {
            state.token = token;
            state.expiration = expiration + Date.now();
        },
        logout(state) {
            state.token = null,
                state.expiration = null,
                state.user.name = '',
                state.user.email = ''
        },
        setUser(state, data) {
            state.user.name = data.name;
            state.user.email = data.email;
            state.user.role = data.role
        }
    };
const actions = {
        logout(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('/api/auth/logout')
                        .then(response => {
                            localStorage.removeItem('access_token')
                            localStorage.removeItem('expiration')
                            context.commit('logout')
                            resolve(response)
                        })
                        .catch(error => {
                            localStorage.removeItem('access_token')
                            localStorage.removeItem('expiration')
                            context.commit('logout')
                            reject(error)
                        })
                })
            }
        },
        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {
                axios.post('/api/auth/login', {
                    email: credentials.email,
                    password: credentials.password
                })
                    .then(response => {
                        const token = response.data.access_token
                        const expiration = response.data.expires_in + Date.now()

                        localStorage.setItem('access_token', token)
                        localStorage.setItem('expiration', expiration)
                        context.commit('retrieveToken', {token, expiration})
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })

        },
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/api/auth/signup', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                })
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        getUser(context) {
            return new Promise((res, rej) => {
                if (context.getters.loggedIn){
                    axios.post('/api/auth/me')
                        .then(response => {
                            context.commit('setUser', response.data)
                            res(response)
                        })
                        .catch(err => {
                            rej(err)
                        })
                }
            })


        },
        changePassword(context ,data) {
            return new Promise((resolve, reject) => {
                axios.post('/api/auth/resetPassword', data)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })

        }
    };
const getters = {
        loggedIn(state) {
            return state.token !== null && state.expiration !== null
        },
        user(state) {
            return state.user
        },
        token(state) {
            return state.token
        },
        userAdmin(state) {
            return state.user.role === 'administrator' && state.user.role !== null
        }
    };

export default {
    state,
    mutations,
    actions,
    getters
}