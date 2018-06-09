<template>
    <div id="create-news">
      <form @submit.prevent="createNews">
          <div class="card">
              <div class="card-header">Create News</div>
              <div class="card-body">
                  <div class="form-group">
                      <label for="title">Titulli</label>
                      <input type="text"
                             class="form-control"
                             v-model="title"
                              placeholder="Vendos Titullin"/>
                  </div>
                  <div class="form-group">
                      <label for="title">Body</label>
                      <textarea v-model="body"
                                 class="form-control"
                                 placeholder="Shkruaj dicka me teper"></textarea>
                  </div>
                  <div class="form-group">
                      <label for="tag">Tag</label>
                      <input type="text"
                             class="form-control"
                             v-model="tags"
                             placeholder="Tag"/>
                  </div>
                  <input type="submit" value="Create" class="btn btn-primary"/>
              </div>
          </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "CreateNews",
        data() {
            return {
                title: '',
                body: '',
                tags: []
            }
        },
        methods: {
            createNews(){
                this.$store.dispatch('createNews', {
                    title: this.title,
                    body: this.body,
                    tags: this.tags
                })
                    .then(response => {
                        this.$swal('Great', response.data.data);
                    })
            }
        }
    }
</script>

<style scoped>

</style>