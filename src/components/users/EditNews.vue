<template>
    <div id="edit-news">
        <form @submit.prevent="updateNews">
            <div class="card">
                <div class="card-header">Update {{ getMyNewById.title }}</div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="title">Titulli</label>
                        <input type="text"
                               class="form-control"
                               v-model="news.title"
                               placeholder="Vendos Titullin"/>
                    </div>
                    <div class="form-group">
                        <label for="title">Body</label>
                        <textarea v-model="news.body"
                                  class="form-control"
                                  placeholder="Shkruaj dicka me teper"></textarea>
                    </div>
                    <input type="submit" value="Create" class="btn btn-primary"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "EditNews",
        data() {
            return {
                news: {
                    id: '',
                    title: '',
                    body: ''
                }

            }
        },
        computed: {
          getMyNewById(){
              return this.news = this.$store.getters.news
          }
        },
        created() {
            this.$store.dispatch('getNews', this.$route.params.news_id)
        },
        methods: {
            updateNews(){
                this.$store.dispatch('updateNews',this.news)
            }
        }
    }
</script>

<style scoped>

</style>