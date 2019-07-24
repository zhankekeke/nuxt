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
         <Table :columns="columns1" :data="data1"></Table>
          <Page :total="dataCount" :current="pageNumber" :page-size ="pageSize"  size="small" @on-change="changePage" @on-page-size-change="pageNum" show-total show-elevator show-sizer />
         
    </section>
</template>
<script>
let testData ={
    "dataLists":[
         {
                         id:1,
                        name:'张三',
                        sex:0,
                        phoneNumber: "123456789023",
                       createDate:'2018-17-9',
                       roleNames:'已授予角色',

                    }, {
                         id:2,
                        name:'张三',
                        sex:0,
                        phoneNumber: "123456789023",
                       createDate:'2018-17-9',
                       roleNames:'已授予角色',

                    },
                     {
                         id:3,
                        name:'张三q',
                        sex:0,
                        phoneNumber: "123456789023",
                       createDate:'2018-17-9',
                       roleNames:'已授予角色',

                    },
                     {
                         id:4,
                        name:'张三w',
                        sex:0,
                        phoneNumber: "123456789023",
                       createDate:'2018-17-9',
                       roleNames:'已授予角色',

                    },
                     {
                         id:5,
                        name:'张三s',
                        sex:0,
                        phoneNumber: "123456789023",
                       createDate:'2018-17-9',
                       roleNames:'已授予角色',

                    }
    ]
}
import axios from '~/plugins/axios'
    export default{
        data(){
            return{
               info:{},
               data2:[],
               pageSize:2,
               pageNumber:1,
               //当前页
               page:1,
               //
               indexStartNum:1,
               dataCount:0,
                columns1: [
                    {  
                       // type:'index',
                        title: '编号',
                        width: 60,
                        align: 'center',
                        render: (h, params) => {
                            return h('span', params.index + (this.page - 1) * this.pageSize + 1);
                        }
                    },
                    {
                        title: '用户名称',
                        key: 'name',
                        align: 'center',
                    },
                    {
                        title: '性别',
                        key: 'sex',
                        align: 'center',
                        render: (h, params) => {
                            var a;
                            if (params.row.sex == 0) {
                                a = "男";
                            }
                            if (params.row.sex == 1) {
                                a = "女";
                            }
                            return h("span", {}, a);
                        }
                    },
                    {
                        title: '手机号',
                        key: 'phoneNumber',
                        align: 'center',
                    },
                    // {
                    //     title: '所属公司',
                    //     key: 'enterpriseName',
                    //     align: 'center',
                    // },
                    {
                        title: '已授权角色',
                        key: 'roleNames',
                        align: 'center',
                        ellipsis: true,
                        render: (h, params) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }
                            }, params.row.roleNames)
                        }
                    },
                    {
                        title: '注册时间',
                        key: 'createDate',
                        align: 'center',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        width: 200,
                        render: (h, params) => {
                            return h('div', [
                                h('a', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: "5px",
                                        color: "#059BFA"
                                    },
                                    on: {
                                        click: () => {
                                            this.$_allot_$(params.row)
                                        }
                                    }
                                }, '角色授予'),
                            ]);
                        }
                    }
                ],
                data1: [
                    
                ]
            }
        },
       
       created(){
           this.handleTable()
         // console.log(this.$route.query.item)
        // console.log(this.data1.length)
        
        // if(this.dataCount<this.pageSize){

        // }
       },
       
        methods:{
            //封转获取数据
            handleTable(){
                //保存所有数据 
               this.data2 = testData.dataLists
               //页面总数据
               this.dataCount =this.data2.length
               if(this.data2.length < this.pageSize){
                   this.data1 = this.data2
               }else{
                   this.data1 = this.data2.slice(0,this.pageSize)
               }
            

            },
            //页码改变
          $_allot_$(row){
            this.$router.push({
                path:'/products/product',
                query:{
                  row:row
                }
            })
          },
           changePage(index){
            //console.log(index)
            //当前显示的条数
             this.pageNumber = index
             let start = (index-1) * this.pageSize
             //console.log(start)
             let end = index*this.pageSize
             this.data1 = this.data2.slice(start,end)
           },
           //每页显示几条，选项卡
           pageNum(index){
              let start = (this.page - 1)*index
              console.log(start)
              let end = this.page*index
              console.log(end)
              this.data1 = this.data2.slice(start,end)
              
              //console.log(this.data1)
              //当前展示的条数
              this.pageSize = index
           }  
        }
    }
</script>

