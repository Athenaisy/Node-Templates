let axios = require('axios');
const { constants } = require('buffer');
//let httpUrl = 'https://www.dytt8.net/index.htm'
let httpUrl1 = 'https://www.1905.com/vod/list/n_1_a_4/o3p1.html'

function requireFun(url) {

    var actRes = null;
    return new Promise(function (resolve, reject) {
        axios.get(url).then((res) => {
            actRes = res.data
            //  console.log('我在resolve 之前')
            console.log('axios');
            resolve(actRes)
        }).catch((err) => {
            reject(err)
        })
    })
}
// 获取分类里的 电影链接
// 根据电影链接 获取电影的详细信息c
// 获取起始页面所有分类
async function getClassifyUrl() {
    let myData = await requireFun(httpUrl1)
    // if(myData) return  console.log('我在请求中拿到了myData')
    let reg1 = /<span class="search-index-L">类型(.*?)<div class="grid-12x">/igs
    let classify = reg1.exec(myData)
    //  console.log(classify[1]);
    let reg2 = /<a href="(.*?)" onclick="location.href='(.*?)';return false;".*?>(.*?)<\/a>/igs
    let arr = []
    let detail = reg2.exec(classify[1]);
    //console.log(detail);
    while (detail = reg2.exec(classify[1])) {
        let obj = {
            className: detail[3],
            url: detail[2]
        }
        arr.push(obj)
        console.log('分类：',detail[3])
        getMovies(detail[2],detail[3])
    }
    //  console.log(arr)
}
// 根据分类 获取 页面中的电影 链接
async function getMovies(url,moviesType) {
    //  console.log('正在执行 getMOvies')
    let data = await axios.get(url)
        //  console.log('我在resolve 之前')
        let regMoveLink = /<a class="pic-pack-outer" target="_blank" href="(.*?)" .*?"><img/igs
        var res, arrList = [];

        while (res = regMoveLink.exec(data.data)) {
            //console.log('49');
            // 可以改为迭代器 提升性能
            arrList.push(res[1])
            // console.log('49',res);
        }
        console.log('分类：',moviesType);
        console.log(arrList);
    //  console.log('我要拿到电影的链接',data)
   
}
async function parsePage(url){
    let page = await axios.get(url)
}
getClassifyUrl();
