<style lang="less" scoped>
.index{
    color:red;
    font-size:16px;
   
}
</style>
<template>
    <section>
       <nuxt-link to="/" class="index">首页</nuxt-link>
        <nuxt-link to="./products/product">商品页</nuxt-link>

    </section>
</template>
<script>
import axios from '~/plugins/axios'
    export default{
        data(){
            return{
               info:{}
            }
        },
        // asyncData(params){
        //     let name = this.$route.query.item
        //     console.log(name)
        // //    console.log($route.query.item)
        // // return {info:$route.query.item }
        // },
        // mounted () {
        //     this.$nextTick(() => {
        //     this.$nuxt.$loading.start()

        //     setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        //     })
        // },
       created(){
          console.log(this.$route.query.item)
       },
        methods:{

        }
    }
</script>

