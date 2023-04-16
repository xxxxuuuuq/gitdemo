<template>
    <div class="wrap">
       <el-row type="flex" justify="center" align="middle">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h2>邦达物流后台管理系统</h2>
                </div>
                <div >
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model.trim="ruleForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model.trim="ruleForm.password" type="password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="width: 100%;" @click="login" :loading="loading">登录</el-button>
                        </el-form-item>
                    </el-form>    
                </div>
            </el-card>
       </el-row>
    </div>
</template>
<script>
// import axios from "axios"
import{post}from"@/utils/http"
import{setToken}from"@/utils/auth"
import { mapMutations } from "vuex"
    export default {
        data(){
            return{
                loading:false,
                ruleForm:{
                    username:"",
                    password:""
                },
                rules:{
                     username:[
                        {required:true,message:"用户名不能为空",trigger:'blur'},
                        {pattern:/^\w{4,8}$/,message:"用户名要求4-8位数字字母组合",trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:"密码不能为空",trigger:'blur'},
                        {pattern:/^\d{6,8}$/,message:"密码要求6-8位数字组合",trigger:'blur'}
                    ]
                },
            } 
        },
        methods:{
            ...mapMutations(["setRole"]),

            login(){
                this.loading=true
                this.$refs.ruleForm.validate((valid)=>{
                    if(valid){
                    //登录逻辑
                    post("/login",this.ruleForm).then(res=>{
                        //增加路由表(动态添加的路由 刷新就丢失)
                        // this.$router.addRoute()


                        this.loading=false
                        setToken(res.token)
                        this.setRole(res.role)

                        
                        // console.log("role",this.$store.state.role);

                        sessionStorage.setItem("nickname",res.nickname)
                        this.$router.push("/")
                        console.log(JSON.stringify(this.ruleForm));
                        // serialize()
                        // serializeArray()
                        // console.log(res);
                        // $.param()
                    }).catch((error)=>{
                        this.loading=false
                        console.log(error);
                    })

                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
@bgColor:#5696ff;
.wrap{
    .box-card{
    width: 500px;
    // margin-top: 200px;
    h2{
        text-align: center;
        color: @bgColor;

    }
}
}   


</style>