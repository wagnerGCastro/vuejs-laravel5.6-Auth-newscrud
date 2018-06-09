<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card text-white bg-info mb-3">
                <div class="card-header"><h3>Reset</h3></div>
                <div class="card-body">
                    <form @submit.prevent="resetPassword">
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email"
                                   v-model="form.email"
                                   class="form-control"
                                   placeholder="Email Address">
                        </div>

                        <div class="form-group row">
                            <input type="submit" class="btn btn-primary" value="Login">
                        </div>
                        <div class="form-group row" v-if="error">
                            <p class="alert-warning">
                                {{ error }}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Reset",
        data() {
            return {
                form: {
                    email: ''
                },
                error: false
            }
        },
        methods: {
            resetPassword() {
                axios.post('http://blog.test/api/auth/sendPasswordResetLink', {
                    email: this.form.email
                })
                    .then(response => {
                        this.$swal({
                            position: 'top-middle',
                            type: 'success',
                            title: response.data.data,
                            timer: 2500
                        })
                    })
                    .catch((error) => {
                        this.error = error.response.data.error
                    })
            }
        }
    }
</script>

<style scoped>
</style>