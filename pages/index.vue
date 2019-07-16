<template>
  <section class="container">
    <div>
      <loading/>
      <h1 class="title">
        nuxt
      </h1>
      <loading/>
      <div class="links">
       <nuxt-link to="/lists/list" >go to</nuxt-link>
      </div>
      <el-button type="primary" @click="button()">主要按钮</el-button>
      <Button type="success">Success</Button>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Loading from '~/components/loading.vue'
export default {
   components: {
    AppLogo,
    Loading
  },
  loading:false,
   mounted(){
     setTimeout(() => {
      // Extend loader for an additional 5s
      this.$nuxt.$loading.finish()
    }, 1000)
   },
 
  data(){
    return{

    }
  },
  methods:{
   button(){
      this.$nuxt.$loading.start()
     //console.log(111)
      setTimeout(() => {
         this.$router.push('./lists/list')
      }, 1000)
    
   }
  }

}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

