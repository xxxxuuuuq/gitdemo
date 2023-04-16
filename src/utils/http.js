//封装get 和post 请求
import service from "./service";
export function get(url,params){
    const config={
        method:"get",
        url:url
    }
    if(params){
        config.params=params
    }
    return service(config) //promise

}
export function post(url,params){
    const config={
        method:"post",
        url
    }
    if(params){
        config.data=params
    }
    return service(config) //promise

}