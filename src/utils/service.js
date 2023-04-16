import axios from "axios"
import { Message } from "element-ui"
import { getToken } from "./auth"
const service=axios.create({
    baseURL:"http://localhost:8080",
    timeout:500
})
//请求拦截器
service.interceptors.request.use((config)=>{
    if(getToken){
        config.headers.token=getToken()
    }
    return config
},()=>{
    Message({
        type:"error",
        message:"请求错误1" 
    })
    return Promise.reject(new Error("请求错误2"))
})
//响应拦截器
service.interceptors.response.use((res)=>{
    const result=res.data
    if(result.success){
        return result
    }else{
        Message({
            type:"error",
            message:result.message || "请求错误3"
        })
        return Promise.reject(new Error(result.message || "请求错误"))
    }
},()=>{
    Message({
        type:"error",
        message:"请求错误4"
    })
    return Promise.reject(new Error("请求错误5"))
})
//导出
export default service