<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="mt">
           <el-row >
            <el-col :span="6">
                <el-input
                placeholder="请输入订单号或者客户名称"
                v-model="params.keyword"
                class="input-with-select ">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            </el-col>

           <el-col :span="6" :offset="12" style="text-align: right;">
            <el-button  class="mr" @click="visible=true">新建订单</el-button>
            <el-button :disabled="!select.length" @click="operate(1)">审核</el-button>
            <el-button :disabled="!select.length" @click="operate(2)">修改</el-button>
            <el-button :disabled="!select.length" @click="operate(3)">作废</el-button>
            </el-col>
           </el-row>
        </el-card>
        <el-card class="mt">
            <el-table :data="tableData" style="width: 100%"
               v-loading="loading"
               element-loading-text="拼命加载中..."
               element-loading-spinner="el-icon-loading"
               @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" ></el-table-column>

                <el-table-column prop="id" label="订单号"  width=""></el-table-column>

                <el-table-column type="index"  label="序号"></el-table-column>

                <el-table-column prop="status" label="订单状态" width="">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status ==1">待审核</span>
                        <span v-else-if="scope.row.status ==2">已审核</span>
                        <span v-else-if="scope.row.status ==3">审核通过</span>
                        <span v-else>审核拒绝</span>
                    </template>
                </el-table-column>
                  
                <el-table-column prop="date" label="下单时间"></el-table-column>
                <el-table-column prop="name" label="客户名称"  width=""></el-table-column>
                <el-table-column prop="start" label="起始城市" width=""></el-table-column>
                <el-table-column prop="end" label="目的城市"></el-table-column>
                <el-table-column prop="cargo" label="货物名称"  width=""></el-table-column>
                <el-table-column prop="count" label="件数" width=""></el-table-column>
                <el-table-column prop="unit" label="单位"></el-table-column>
                <el-table-column prop="price" label="运费"></el-table-column>
                <el-table-column prop="from" label="订单来源"  width=""></el-table-column>
                <el-table-column prop="pay" label="是否支付" width="">
                    <template slot-scope="scope"> 
                        {{ scope.row.pay==1?"已支付":"未支付" }}
                    </template>
                </el-table-column>
                <el-table-column  label="操作" fixed="right" width="150px">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="deletes(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="mt fr mb"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="params.page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total=total>
            </el-pagination>
        </el-card>
        <orders-modal :visible="visible" @hide="visible=false" @reload="loadDate"></orders-modal>
    </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrunb";
import{post}from"@/utils/http"
import ordersModal from"./ordersModal.vue"
import { mapMutations } from "vuex";

    export default {

      mixins:[breadCrumb],

      data(){
            return{
                visible:false,
                total:0,
                loading:false,
                tableData: [],
                params:{
                    keyword:"",
                    page:1,
                    pageSize:10
               },
               select:""
            }
       },
       created(){
            this.loadDate()
       },
    
       methods:{
        //    loadData(){
        //         post("/arderList",{...this.pageData,keyword:this.keyword}).then
        //    } 
        async loadDate(){
            this.loading=true
            const res=await post("/orderList",this.params);
            this.tableData=res.data.list
            this.loading=false
            this.total=res.data.total
        },
        handleSizeChange(pageSize){
            this.params.pageSize=pageSize
            this.loadDate()
        },
        handleCurrentChange(page){
            this.params.page=page
            this.loadDate()
        },
        handleSelectionChange(selection){
            this.select=selection
            console.log(this.select);
        },
        operate(type){
            console.log(type);
            let nos=this.select.map(item=>item.id)
            this.$notify({
                title:"成功",
                message:nos,
                type:"success"
            })
        },
      
        deletes(id){
            post("/delete",{id}).then(()=>{
                this.$message({
                    message:"操作成功",
                    type:"success"
                });
                this.loadDate()
                console.log(id);
            })
        },
        ...mapMutations(["setRow"]),
        edit(row){
            this.setRow(row)
            console.log(this.$store.state.row);
            this.visible=true
        },
       },
       components:{
        ordersModal
       }
    }
</script>

<style lang="less" scoped>

</style>