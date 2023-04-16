<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import breadCrunb from '@/mixins/breadCrunb';
    export default {
        mixins: [breadCrunb],
    }
</script>

<style lang="less" scoped>

</style>