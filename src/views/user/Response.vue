<template>
    <div class="login row justify-content-center mt-3">
        <div class="col-md-4">
            <div class="card text-white bg-info mb-3">
                <div class="card-header">Reset Password</div>
                <div class="card-body m-3">
                    <form @submit.prevent="changePassword">
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email"
                                   v-model="form.email"
                                   class="form-control"
                                   placeholder="Email Address">
                            <span class="alert-warning" v-if="error.email">{{ error.email[0] }}</span>
                        </div>
                        <div class="form-group row">
                            <label for="password">Password:</label>
                            <input type="password"
                                   v-model="form.password"
                                   class="form-control"
                                   placeholder="Password">
                            <span class="alert-warning" v-if="error.password">{{ error.password[0] }}</span>
                        </div>
                        <div class="form-group row">
                            <label for="password_confirmation">Confirm Password:</label>
                            <input type="password"
                                   v-model="form.password_confirmation"
                                   class="form-control"
                                   placeholder="Password">
                            <span class="alert-warning" v-if="error.password_confirmation">{{ error.password_confirmation[0] }}</span>
                        </div>
                        <div class="form-group row">
                            <button type="submit"
                                    class="btn btn-primary">Change password</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div class="text-danger">{{ error422 }}</div>
    </div>
</template>

<script>
    export default {
        name: "Response",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    password_confirmation:  '',
                    resetToken: null
                },
                error: [],
                error422: ''
            }
        },
        methods: {
            changePassword() {
                this.$store.dispatch('changePassword', {
                    email: this.form.email,
                    password: this.form.password,
                    password_confirmation: this.form.password_confirmation,
                    resetToken: this.form.resetToken
                })
                    .then(response => {
                        this.$swal({
                            type: 'success',
                            title: 'Password changed Successfulley',
                            position: 'center',
                            timer: 1500
                        })
                            this.$router.push({name: 'login'}, 1500)


                    })
                    .catch(error => {
                        if (error.status = 422){
                            this.$swal({
                                position: 'center',
                                title: error.response.data.error,
                                type:'error',
                                 timer: 1500});
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 1500)

                        }
                        this.error = error.response.data.errors
                    })
            }
        },
        created() {
            this.form.resetToken = this.$route.query.token
        }
    }
</script>

<style scoped>
</style>