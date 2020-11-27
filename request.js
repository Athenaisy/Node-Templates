let axios = require('axios')
console.log(axios)
//let httpUrl = 'https://www.dytt8.net/index.htm'
let httpUrl1 = 'https://www.1905.com/vod/list/n_1_a_4/o3p1.html'

function req(url) {
    return axios.get(url).then((res) => {
        return res
     //   console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

// 获取分类里的 电影链接
// 根据电影链接 获取电影的详细信息

// 获取起始页面所有分类
async function getClassUrl() {
   let { res } = await req(httpUrl1)
  
   let reg1 = /<span class="search-index-L">栏目(.*?)<div class="grid-12x">/igs
        // 解析 正文内容
        let classify = reg1.exec(res.data)
        //console.log(classify);
       // console.log(classify)
       let reg2 = /<a href="(.*?)" .*?>(.*?)<\/a>/igs
       let arr = []
       let detail  
       console.log(detail);
      while(detail = reg2.exec(classify)) {
            let obj = {
                className: detail[2],
                url: detail[1]
            }
            arr.push(obj)
            getMovies(detail[1])
       }
  

}
// 根据分类 获取 页面中的电影 链接
async function getMovies(url){
    let { data } = await req(url)
    let regMoveLink = /<a class="pic-pack-outer" target="_blank" href="(.*?)" .*?"><img/
    var res,arrList = [];
    while(res = regMoveLink.exec(data)){
        arrList.push(res[1])
    }
    console.log(arrList);
}
getClassUrl();
