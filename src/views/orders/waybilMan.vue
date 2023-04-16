<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- <el-card class="mt">
           <el-row >
            <el-col :span="6">
                <el-input
                placeholder="请输入订单号或者客户名称"
                v-model="searchValue"
                class="input-with-select ">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            </el-col>

           <el-col :span="6" :offset="12" style="text-align: right;">
            <el-button>新建订单</el-button>
            <el-button disabled>审核</el-button>
            <el-button disabled>修改</el-button>
            <el-button disabled>作废</el-button>
          

            </el-col>
           </el-row>
        </el-card>

        <el-card class="mt">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="订单号"  width="180"></el-table-column>
                <el-table-column prop="status" label="订单状态" width="180"></el-table-column>
                <el-table-column prop="date" label="下单时间"></el-table-column>
                <el-table-column prop="name" label="客户名称"  width="180"></el-table-column>
                <el-table-column prop="start" label="起始城市" width="180"></el-table-column>
                <el-table-column prop="end" label="目的城市"></el-table-column>
                <el-table-column prop="cargo" label="货物名称"  width="180"></el-table-column>
                <el-table-column prop="count" label="件数" width="180"></el-table-column>
                <el-table-column prop="unit" label="单位"></el-table-column>
                <el-table-column prop="price" label="运费"></el-table-column>
                <el-table-column prop="from" label="订单来源"  width="180"></el-table-column>
                <el-table-column prop="pay" label="是否支付" width="180"></el-table-column>
                <el-table-column prop="" label="操作"></el-table-column>
            </el-table>
        </el-card> -->
    </div>
</template>

<script>
import breadCrunb from '@/mixins/breadCrunb';
// http://localhost:8081/orderList
    export default {
        mixins: [breadCrunb],
 
    }
</script>

<style lang="less" scoped>

</style>