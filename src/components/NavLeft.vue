<template>
    <div style="overflow: hidden;">
        <h1 class="title">邦达国际物流平台</h1>
        <el-menu 
            :router="true"
            background-color="#001529"
            text-color="rgb(255, 255, 255)"
            >
            <menus-vue   v-for="(item,index) in menuData" :menu="item" :key="index"></menus-vue>
        </el-menu>

    </div>
</template>

<script>
    import { get} from '@/utils/http';
    import MenusVue from"./MenusVue.vue"
    export default {
        data(){
          return{
            menuData:[]
          }
        },
        created(){
            this.getMenu()
        },
         methods:{
             //获取菜单项
            // getMenu(){
            //     get("/menu")
            // }
                async getMenu(){
                  let{data} = await get("/menu")
                    this.menuData=data
                }
            },
            components:{
                MenusVue
            }
        }
    
</script>

<style lang="less" scoped>
.title{
    color:rgb(255, 255, 255) ;
    text-align: center;
    line-height: 50px;
}
</style>