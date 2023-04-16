<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="mt ">
           <el-row >
            <el-col :span="12" class="info" style="text-align: left;">
                <span>运单编号：YGC20389839749230</span>
                <span>创建时间：2023-02-10</span>
                <span>审核员：王狗庆</span>
            </el-col>
            <el-col :span="12" style="text-align: right;">
                <el-button type="primary" @click="back">返回</el-button>
            </el-col>
           </el-row>
        </el-card>
        <el-card class="mt">
            <el-steps :active="2">
                <el-step title="未发货"></el-step>
                <el-step title="运输中" ></el-step>
                <el-step title="已收货"></el-step>
                <el-step title="已完成"></el-step>
            </el-steps>
        </el-card>
        <el-card class="mt box">
          <el-row>
            <h3>基础信息</h3>
            <el-col :span="6">
                <p>客户名称：诺来科技有限公司</p>
                <p>货物名称：口罩</p>
                <p>数量：8（吨）</p>
            </el-col>
            <el-col :span="6">
                <p>是否是易燃易爆物品：不是</p>
                <p>结算方式：现付</p>
                <p>运费：12000元</p>
            </el-col>
            <el-col :span="6">
                <p>发货单据：暂未上报</p>
                <p>接货单据：暂未上报</p>
                <p>所属业务员：王大仙</p>
            </el-col>
            <el-col :span="6">
                <p>客户下单时间：2023-02-12</p>
                <p>是否需要换货：不需要</p>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <h3>运输信息</h3>
            <el-col :span="6">
                <p>车牌号：京A54323</p>
                <p>司机姓名：王五</p>
            </el-col>
            <el-col :span="6">
                <p>司机电话：13587876543</p>
                <p>司机住址：重庆市</p>
            </el-col>
            <el-col :span="6">
                <p>司机身份证号：657564335678994233</p>
                <p>所属公司：天津运输公司</p>
            </el-col>
            <el-col :span="6">
                <p>预计运输时间：8天</p>
                <p>违约金：5000元</p>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <h3>经办人员信息</h3>
            <el-col :span="6">
                <p>业务员：王二嘛</p>
            </el-col>
            <el-col :span="6">
                <p>审核员：李二二</p>
            </el-col>
            <el-col :span="6">
                <p>制单员：何物</p>
            </el-col>
            <el-col :span="6">
                <p>备注：</p>
            </el-col>
          </el-row>
        </el-card>
    </div>
</template>

<script>
import breadCrunb from '@/mixins/breadCrunb';
// http://localhost:8081/orderList
    export default {
        mixins: [breadCrunb],
        methods:{
            back(){
               this.$router.push("/waybill/list") 
            }
        }
 
    }
</script>

<style lang="less" scoped>
.info span{
    line-height: 40px;
    text-align: left;
    margin: 0 8px;
    // padding: 0;
    // margin: 0;
}
.box{
    font-size: 16px;
    h3{
        margin-top: -10px;
        line-height: 60px;
    }
    p{
        line-height: 30px;
    }
}
</style>