<template>
    <div>
        <el-container>
            <el-aside width="200px" class="aside">
                <nav-left></nav-left>
            </el-aside>
            <el-container>
                <el-header class="head">
                  <top-header></top-header>
                </el-header>
                <el-main class="main">
                    <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive"></router-view>

                </el-main>
                <el-footer class="fool">
                    京ICP备7836792678号 京公安网备12455号
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavLeft from '@/components/NavLeft.vue';
import TopHeader from '@/components/TopHeader.vue';
    export default {
        components:{
            NavLeft,TopHeader //注册
        }
    }
</script>

<style lang="less" scoped>
.head{
    // background-color: red;
    line-height: 60px;
    box-shadow: 0 1px 4px rgba(157, 158, 159, 0.3);
}
.aside{
    background:#001529;
    height: 100vh;
}
.main{
    height: 70vh;
    background-color: #e9eef3;
}
.fool{
    text-align: center;
    color: #999;
    font-size: 12px;
    line-height: 60px;
    background-color: #e9eef3;
}
</style>