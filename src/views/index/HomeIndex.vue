<template>
    <div>
        <el-row :gutter="24" style="margin-bottom:20px" class="total">
            <el-col :span="6">
                <el-card shadow="always" class="in">
                    <div class="fl">
                        <p>本月进件</p>
                        <p style="font-weight: bold;">65888</p>
                        <p>+20.12%
                            <span style="font-size: 12px;">与上月同比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico fr"></i>
                    <div class="cb"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="allin">
                    <div class="fl">
                        <p>本月进件</p>
                        <p style="font-weight: bold;">65888</p>
                        <p>+20.12%
                            <span style="font-size: 12px;">与上月同比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico fr"></i>
                    <div class="cb"></div>
                </el-card>

            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="allout">
                    <div class="fl">
                        <p>本月进件</p>
                        <p style="font-weight: bold;">65888</p>
                        <p>+20.12%
                            <span style="font-size: 12px;">与上月同比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico fr"></i>
                    <div class="cb"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="out">
                    <div class="fl">
                        <p>本月放贷</p>
                        <p style="font-weight: bold;">65888</p>
                        <p>+20.12%
                            <span style="font-size: 12px;">与上月同比</span>
                        </p>
                    </div>
                    <i class="el-icon-money ico fr"></i>
                    <div class="cb"></div>
                </el-card>

            </el-col>
        </el-row>

        <el-row :gutter="24">
            <el-col :span="18">
                <el-card>
                    <div slot="header">进件统计分析</div>
                    <div style="height: 240px;" ref="analysis"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <div slot="header">进件统计分析</div>
                    <div  style="height: 240px;" ref="percent"></div>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="24" class="mt">
            <el-col :span="12">
                <el-card>
                    <el-timeline>
                        <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                        </el-timeline-item>  <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-calendar v-model="value">
                </el-calendar>
            </el-col>
        </el-row>

        
    </div>
</template>

<script>
//数据可视化
/*
    1.准备一个容器（挂载点，用来显示图表）
    2.配置图表配置项（关键步骤）
    3.调用方法，生成图标（setOption）
 */
import { get } from '@/utils/http';
import * as echarts from 'echarts';
    export default {
        // created(){
            // this.drawLine()   //页面开始创建就加载
        // }
        data(){
            return{
                date:new Date()
            }
        },
        mounted(){
            this.drawLine()
            this.drawPie()
        },
        methods:{
           async drawLine(){
            const  {data} = await get("line")
            let keys = [];
            let values = []
            for(let key in data){
                keys.push(key);
                values.push(data[key])
            }
            // console.log(keys,values);
            //1.准备一个容器（挂载点，用来显示图表）
                // var myChart = echarts.init(document.getElementById('main'));
                var myChart = echarts.init(this.$refs.analysis);
            //2.配置图表配置项（关键步骤）
                const option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap:false,
                        data:keys
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                        data: values,
                        type: 'line',
                        smooth:true,
                        areaStyle:{
                            color:{
                                type:'linear',
                                x:0,
                                y:0,
                                x2:0,
                                y2:1,
                                colorStops:[
                                    {
                                    offset:0,
                                    color:"#4f88ff"
                                },{
                                    offset:1,
                                    color:"white"//100%处的颜色
                                }
                            ],
                            global:false
                            }
                           
                         
                        }
                        }
                    ]
                    };
                //调用方法，生成图表
                myChart.setOption(option)
                        },
                    drawPie(){

                    var myChart = echarts.init(this.$refs.percent);
                 
                    const option = {
                        tooltip: {
                            trigger: 'item'
                        },
                        
                        series: [
                            {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 2
                            },
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                show: true,
                                fontSize: 15,
                                fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: 
                            [
                                { value: 1048, name: 'Search Engine' },
                                { value: 735, name: 'Direct' },
                                { value: 580, name: 'Email' },
                                { value: 484, name: 'Union Ads' },
                                { value: 300, name: 'Video Ads' }
                            ]
                            }
                        ]
                        };
                        myChart.setOption(option)
                    }
                    }
                }
</script>

<style lang="less" scoped>
.ico{
    font-size: 90px;
    color: rgba(255, 255, 255, 0.3);
}
.in{
    background: #4f88ff;
}
.total{
    p{
    line-height: 30px;
    color: rgb(255, 255, 255);
    font-size: 16px;
}
}

.allin{
    background: #f49b3b;
}
.allout{
    background: #5d0476;
}
.out{
    background: #ea4329;
}
.time p{
    color: #666666;
}


</style>