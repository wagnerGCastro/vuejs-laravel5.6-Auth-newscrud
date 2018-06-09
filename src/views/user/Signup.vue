<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card text-white bg-info mb-3">
                <div class="card-header"><h3>Signup</h3></div>
                <div class="card-body m-2">
                    <form @submit.prevent="register">
                        <div class="form-group row">
                            <label>Name:</label>
                            <input type="name"
                                   v-model="form.name"
                                   class="form-control"
                                   placeholder="Name">
                        </div>
                        <div class="form-group row">
                            <label>Email:</label>
                            <input type="email"
                                   v-model="form.email"
                                   class="form-control"
                                   placeholder="Email Address">
                        </div>
                        <div class="form-group row">
                            <label>Password:</label>
                            <input type="password"
                                   v-model="form.password"
                                   class="form-control"
                                   placeholder="Password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" class="btn btn-primary mr-auto" value="Signup">
                            <router-link class="btn btn-dark right" to="/login">Login</router-link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: ''
                },
                error: null
            }
        },
        methods: {
            register() {
                this.$store.dispatch('register', {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password,
                })
                    .then(response => {
                        this.$router.push('/login');
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>
</style>