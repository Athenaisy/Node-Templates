let path  = require("path")
let fs = require("fs")

console.log(path)

let strPath = "http://www.xinhuanet.com/titlepic/112679/1126792992_1606443384841_title0h.jpg";
// 获取路径信息的扩展名
let info = path.extname(strPath)
console.log(info) // .jpg

let arr = ['/sxt','qianduan','zhongji']
let info1 = path.resolve(...arr)
//console.log(info1);

// 获取当前 目录的完整路径

console.log(__dirname);
let info2 = path.join(__dirname,'sxt','qianduan','zhongji')
console.log(info2)

// 解析出请求目录 
let str = "http://www.ruanyifeng.com/blog/2012/webBlog/random.html"
// 解析出请求目录 

let arrParse = str.split('/')
console.log(arrParse);
 arr = arrParse.slice(arrParse.length-2,arrParse.length)
console.log('28',arr)

let filePath = path.join(__dirname,...arr)
console.log('31',filePath)
fs.readFile(filePath,{encoding: 'utf-8'},function (err, data){
    if(err){
        console.log(err)
    }else{
       // console.log(data)
    }
})

// 获取当前执行文件的目录
console.log('41',__dirname);

console.log(path.extname(__filename))  // .js

 // 解析路径， 可以将路径信息直接解析出来 ，解析出根路径， 目录  扩展名，文件名称

 console.log('47',path.parse(__filename))