<template>
    <div>
    <mbx-vue></mbx-vue>
    <el-card class="mt">
        <el-row :gutter="20">
            <el-col :span="6"><el-input  v-model="input" placeholder="客户名称"></el-input></el-col>
            <el-col :span="6"><el-input  v-model="input" placeholder="创建时间"></el-input></el-col>
            <el-col :span="6"><el-input  v-model="input" placeholder="账单状态"></el-input></el-col>
            <el-col :span="6" class="tr">
                <el-button type="primary">重置</el-button>
                <el-button type="primary">搜索 </el-button>
            </el-col>
        </el-row>
    </el-card>
    <el-card>
        
    </el-card>
    </div>
</template>

<script>
import mbxVue from "@/components/mbxVue.vue"
    export default {
        components:{
            mbxVue
        }
    }
</script>

<style lang="less" scoped>

</style>