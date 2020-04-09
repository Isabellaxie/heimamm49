// 提取 axios请求,工作中,一般是这样提取出来的
import axios from "axios";
function getPhoneCode(data) {
    //因为参数带不过来,所以只有传了
    return axios({
        // url: "process.env.VUE_APP_URL + '/sendsms' ",
        //这种写法是错的, 没有双引号
        url: process.env.VUE_APP_URL + "/sendsms",
        //
        method: "post",
        data: data,
        withCredentials: true,
    })



}
export default getPhoneCode
// 不用加()   getPhoneCode()