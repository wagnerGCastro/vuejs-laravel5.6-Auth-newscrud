<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card text-white bg-info mb-3">
                <div class="card-header"><h3>Login</h3></div>
                <div class="card-body m-2">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email"
                                   v-model="form.email"
                                   class="form-control"
                                   placeholder="Email Address">
                        </div>
                        <div class="form-group row">
                            <label for="password">Password:</label>
                            <input type="password"
                                   v-model="form.password"
                                   class="form-control"
                                   placeholder="Password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" class="btn btn-primary mr-auto" value="Login">
                            <router-link to="/signup" class="btn btn-dark">Signup</router-link>
                        </div>
                        <div class="form-group" v-if="error">
                            <p class="error">
                                {{ error }}
                            </p>
                        </div>
                        <span><router-link class="text-danger" :to="{name: 'reset'}">Forrget Password</router-link> </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                error: null
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch('retrieveToken', {
                    email: this.form.email,
                    password: this.form.password
                })
                    .then(response => {
                        this.$swal('Good Job', response.data.data),
                            this.$store.dispatch('getUser');
                        this.$router.push({name: 'profile'})
                    })
            }
        }
    }
</script>

<style scoped>
</style>