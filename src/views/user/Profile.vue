<template>
    <div id="profile" class="container mt-3">
        <div class="row">
            <div class="col-sm-12 col-md-4">
                <div class="card text-info">
                    <div class="card-header"><h4>Welcome: {{ username.name }}</h4></div>
                </div>
                <div class="nav">
                    <ul>
                        <router-link tag="li" class="nav-link" :to="{name: 'upload'}"><a href="">Upload</a> </router-link>

                        <li class="nav-link" v-if="isAdmin">Admin</li>
                        <router-link :to="{ name: 'profile_news'}">News</router-link>
                        <router-link :to="{ name: 'news_list'}">My News</router-link>
                    </ul>
                </div>
            </div>
            <div class="col-sm-12 col-md-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Upload from "../../components/media/Upload";
    export default {
        name: "Profile",
        components: {Upload},
        computed: {
           username() {
               return this.$store.getters.user;
           },
           isAdmin(){
             return this.$store.getters.userAdmin;
           }
        },
        created() {
                this.$store.dispatch('getUser')
        }
    }
</script>

<style scoped>

</style>