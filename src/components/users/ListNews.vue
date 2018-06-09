<template>
    <div id="listMyNews">
        <ul class="list-group">
            <router-link tag="a" class="list-group-item list-group-item-action" v-for="list in myListNews" :to="{name: 'edit_news', params:{news_id: list.id}}">{{ list.title }}</router-link>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListNews",
        computed: {
           myListNews() {
               return this.$store.getters.myListNews
           }

        },
        created() {
            this.$store.dispatch('getMyListNews')
        }
    }
</script>

<style scoped>

</style>