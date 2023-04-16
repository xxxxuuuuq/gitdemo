<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="mt">
            <el-row :gutter="16">
                <el-col :span="6">
                    <el-input placeholder="请输入运单号" v-model="params.waybillNo"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入客户名称 " v-model="params.name"></el-input>
                    
                </el-col>
                <el-col :span="6">
                    <el-date-picker
                        v-model="date"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        style="width:100%"
                        >
                    </el-date-picker>
                </el-col>
                <el-col :span="6" class="tr">
                    <el-button type="primary" @click="loadData">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="mt">
            <el-radio-group v-model="params.status" @change="loadData">
                <el-radio-button label="1">全部运单(300)</el-radio-button>
                <el-radio-button label="2">装货中(120)</el-radio-button>
                <el-radio-button label="3">运输中(118)</el-radio-button>
                <el-radio-button label="4">已完成(10078)</el-radio-button>
                <el-radio-button label="5">运单异常(2)</el-radio-button>
            </el-radio-group>
        </el-card>
        <el-card>
            <el-table :data="tableData">
                <el-table-column type="index" width="48" label="序号"></el-table-column>
                <el-table-column prop="date" label="下单时间" width="98"></el-table-column>
                <el-table-column prop="name" label="客户名称"></el-table-column>
                <el-table-column prop="cargo" label="货物名称"></el-table-column>
                <el-table-column prop="count" label="件数" width="50"></el-table-column>
                <el-table-column prop="start" label="起始地"></el-table-column>
                <el-table-column prop="end" label="目的地"></el-table-column>
                <el-table-column prop="price" label="运费" width=70></el-table-column>
                <el-table-column prop="neeRecive" label="需要接货"></el-table-column>
                <el-table-column prop="plateNumber" label="车牌号" width="90"></el-table-column>
                <el-table-column prop="driver" label="司机" width="60"></el-table-column>
                <el-table-column prop="tel" label="司机电话" width="115"></el-table-column>
                <el-table-column prop="percent" label="运输进度">
                    <template slot-scope="scope">
                       <el-progress :percentage="scope.row.percent"></el-progress>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button size=mini @click="detail(scope.row.no)">详情</el-button>
                        <el-button size="mini" type="danger">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="tr mt mb"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
 import breadCrunb from '@/mixins/breadCrunb';
 import moment from "moment"
 import {post} from '@/utils/http';

    export default { 
        mixins: [breadCrunb],
        data(){
            return{
                tableData:[],
                params:{
                    waybillNo:"",
                    name:"",
                    status:"1"
                },
                date:[],
                pageData:{
                    page:1,
                    pageSize:10
                }
            }
        },
        created(){
            this.loadData()
        },
        activated(){
            console.log("激活");
        },
        deactivated(){
            console.log("失活");
        },

        beforeRouteLeave (to,from,next){
        if(to.path=="/waybill/list/detail"){
            from.meta.keepAlive=true
        }else{
            // to.meta.keepAlive=false
            //如果去的不是详情页，就要清除缓存
            let vnode=this.$vnode;
            let parentVnode = vnode && vnode.parent
            if(
            parentVnode&&
            parentVnode.componentInstance&&
            parentVnode.componentInstance.cache
            ){
                var key=
                vnode.key==null
                ?vnode.componentOptions.Ctor.cid+
                (vnode.componentOptions.tag
                ?`::${vnode.componentOptions.tag}`
                :"")
                :vnode.key;
                var cache = parentVnode.componentInstance.cache
                var keys = parentVnode.componentInstance.keys;
                if(cache[key]){
                    this.$destroy()
                    if(keys.length) {
                        var index=keys.indexOf(key)
                        if(index>-1){
                            keys.splice(index,1)
                        }
                    }
                    cache[key] = null

                }
            }
        }
        next( )
       },
        methods:{
           async loadData(){
            // let staetDate =this.date[0]? moment(this.date[0]).format("YYYY-MM-DD"):""
              let staetDate= this.date[0]? moment(this.date[0]).format("YYYY-MM-DD"):""
              let endDate = this.date[1]? moment(this.date[1]).format("YYYY-MM-DD"):""
              const res = await post("/waybillList",{...this.pageData,...this.params,staetDate,endDate})
              this.tableData=res.data.list
            },
            detail(no){
                this.$router.push("/waybill/list/detail?no="+no)
            }
        }

 
    }
</script>

<style lang="less" scoped>

</style>