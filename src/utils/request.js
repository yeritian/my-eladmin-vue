import ElementUI from "element-ui";
import axios from "axios";

//创建axios实例let
let request = axios.create()

request.interceptors.response.use(response=>{
    console.log("拦截请求")
    return response
},
    error=>{
        ElementUI.Message("请求错误"+error)
        return Promise.reject(error)
    }
)

export default request
