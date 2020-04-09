// 提取 axios请求,工作中,一般是这样提取出来的
import axios from "axios";

// 这是 信息提示的方法, 因为, 引不到. this.$message   引入这个后, 就要可以直接用 Massage
import { Message } from 'element-ui';

// 创建一个axios副本
var instance = axios.create({
    baseURL: process.env.VUE_APP_URL,   //设置基地址
    withCredentials: true //跨域照样协带cookie
});



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code == 200) {
        // 因为返回数据里面axios帮我们额外的包了一层data但实际我们基本不用，所以我们把它干掉
        return response.data;
    } else {
        // 提示用户错误
        // 出错了我们还有必要返回数据出去吗？
        //抛出一个错误，不要让后面代码执行
        //只要return了一个Promise.reject("error")后面的接口的.then就不会执行了
        Message.error(response.data.message)
        return Promise.reject("error");
    }
    // switch (response.data.code) {
    //     case 200:
    //         return response;
    //     case 201:

    //         Message.error(response.data.message)
    //         // 出错了我们还有必要返回数据出去吗？
    //         //抛出一个错误，不要让后面代码执行
    //         window.console.log("抛错误前处理:", response)
    //         return Promise.reject("error");

    // }

    // return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 下面是自写的:

//添加 响应拦截  错误拦截
// instance.interceptors.request.use(function (response) {

//     if (response.data.code == 200) {
//         // 因为返回数据里面axios帮我们额外的包了一层data但实际我们基本不用，所以我们把它干掉
//         return response.data;
//     } else {
//         // 提示用户错误
//         // 出错了我们还有必要返回数据出去吗？
//         //抛出一个错误，不要让后面代码执行
//         //只要return了一个Promise.reject("error")后面的接口的.then就不会执行了  也不会跑到200那去执行了
//         Message.error(response.data.message)
//         return Promise.reject("error");
//     }
// })


function getPhoneCode(data) {
    //因为参数带不过来,所以只有传了
    // 要用到,副本,不能用其它的
    // return axios({ 写axios是错的
    // url: "process.env.VUE_APP_URL + '/sendsms' ",
    //这种写法是错的, 没有双引号
    return instance({
        url: process.env.VUE_APP_URL + "/sendsms",
        //
        method: "post",
        data: data,
        // withCredentials: true, 副本已经写了,这里不用再写了
    })



}

function register(data) {
    return instance({

        url: "/register",
        method: "post",
        data
        //解构赋值
    })

}
//export default getPhoneCode
// 不用加()   getPhoneCode()

export { getPhoneCode, register }