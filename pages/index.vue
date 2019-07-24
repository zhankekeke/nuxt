
<template>
  <section class="container">
    <div>
      <loading/>
       <ul>
        <li v-for="(item,index) in info" :key="index" @click="go(item)"> {{item.name}}</li>  
       </ul>
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
//import axios from 'axios'
import axios from '~/plugins/axios'

export default {
   components: {
    AppLogo,
    Loading
  },
  data(){
    return{
  info:[],
  infos:[]
    }
  },
  loading:false,
   mounted(){
     setTimeout(() => {
      // Extend loader for an additional 5s
      this.$nuxt.$loading.finish()
    }, 1000)
   },
 asyncData ({params}){
   return  axios({
     method:'get',
     url:'bins/zbgmt',
     data:{}
   }).then(res=>{
     //debugger;
     if(res.status === 200){
       console.log(res.data)
      return {info:res.data}

     }
   }).catch(()=>{

   })
    //return { info: data.data }
    
     },
  methods:{
   async go(item){
     console.log(item)
     console.log(9999)
      let data = {}
      //debugger;
      await axios({
       methods:'get',
       url:`https://api.myjson.com/bins/172b7p`,
       data:{},
       headers:{"Content-type": "application/json"}
     }).then((res)=>{
      data = res.data
       console.log(data)

     })
     // let data ={}
      //  data = await axios.get('bins/172b7p')
    this.$router.push({
      path:'/lists/list',
      query:{
        item:item
      }
    })
   }
  }

}
</script>

<style lang="less" scoped>
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

