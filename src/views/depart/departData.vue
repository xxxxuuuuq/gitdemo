<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb> 
        <el-card class="mt">
            <el-row>
                <el-col :span="18">
                    <el-row :gutter="24">
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="mt" v-show="show">
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-input></el-input>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="2">
                    <el-dropdown>
  <span class="el-dropdown-link" @click="expand">
    {{show?"关闭":"展开"}}<i :class="`el-icon-arrow-${show?'up':'down'} el-icon--right`"></i>
  </span>

</el-dropdown>
                
                </el-col>
                <el-col :span="4" class="tr">
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
        
        </el-card>
        <el-card>
            <el-table
            :data="data"
            style="width: 100%">
            <el-table-column type="index" label="序号" ></el-table-column>
            <el-table-column prop="no" label="运单号" ></el-table-column>
            <el-table-column prop="date" label="下单时间" ></el-table-column>
            <el-table-column prop="name" label="客户名称" ></el-table-column>
            <el-table-column prop="cargo" label="货物名称" ></el-table-column>
            <el-table-column prop="count" label="件数" ></el-table-column>
            <el-table-column prop="start" label="起始地" ></el-table-column>
            <el-table-column prop="end" label="目的地" ></el-table-column>
            <el-table-column prop="price" label="运费" ></el-table-column>
            <el-table-column prop="needRecive" label="需要接货" ></el-table-column>
            <el-table-column prop="plateNumber" label="车牌号" ></el-table-column>
            <el-table-column prop="driver" label="司机" ></el-table-column>
            <el-table-column prop="tel" label="司机电话" ></el-table-column>
            <el-table-column prop="percent" label="运输进度" >
                <template slot-scope="scope">
                    <el-progress :percentage="scope.row.percent"></el-progress>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="操作" >
                <el-button type="primary">详情</el-button>
            </el-table-column>
            </el-table>
        </el-card>
        <el-card>
            <el-pagination
                class="tr mt"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="params.page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import breadCrunb from '@/mixins/breadCrunb';
import {post} from '@/utils/http'
    export default {
        mixins:[breadCrunb],
        data(){
            return{
                total:0,
                show:false,
                data:[],
                params:{
                    page:1,
                    pageSize:10
                }
            }
        }, 
        created(){
            this.tableData()
        },
      
        methods:{
            expand(){
                this.show=!this.show
            },
           async tableData(){
           const res= await post("/depart/data",this.params);
           this.data=res.data.list
           console.log(res);
           console.log(1111);
            },
            handleSizeChange(pageSize){
            this.params.pageSize=pageSize
            this.tableData()
        },
        handleCurrentChange(page){
            this.params.page=page
            this.tableData()
        },
        }
    }
</script> 

<style lang="less" scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>