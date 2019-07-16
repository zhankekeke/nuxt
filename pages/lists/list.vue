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
    export default{
        data(){
            return{

            }
        },
        // mounted () {
        //     this.$nextTick(() => {
        //     this.$nuxt.$loading.start()

        //     setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        //     })
        // },
        methods:{

        }
    }
</script>

