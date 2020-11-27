let url = require('url')
console.log(url)

let httpUrl = "https://pan.baidu.com/disk/home?_at_=1606456046622#/all?vmode=list&path=%2FWeb%2F%E6%85%95%E8%AF%BE%E7%BD%91%E6%9C%80%E6%96%B0%E6%94%B6%E8%B4%B9%2F%E6%85%95%E8%AF%BE%E7%BD%91%E2%80%94%E5%AE%9E%E6%88%98%2F%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%2FNode.js%2FNode.js%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%81%E4%B8%9Awed%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8%2F%E7%AC%AC3%E7%AB%A0%20%E7%8E%AF%E5%A2%83%20%26amp%3B%20%E8%B0%83%E8%AF%95"

let obj = url.parse(httpUrl)
console.log(obj)


let targetUrl =  "https://www.cnblogs.com/tianyamoon/p/11176640.html"
httpUrl = './firstDay/node_1.html'
 let sumUrl = url.resolve(targetUrl,httpUrl)
 console.log(sumUrl)