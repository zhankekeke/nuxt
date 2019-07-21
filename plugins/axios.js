import * as axios from 'axios'
let options ={}
if(process.server) {
    //基准域名抽取出来
    options.baseURL =`https://api.myjson.com/`
    //options.baseURL = `https://${process.env.HOST || 'api.myjson.com/'}:${process.env.PORT ||8888}`
}
export default axios.create(options)