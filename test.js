let result = `<ul class="f15 nav_smile clearfix_smile">
<li class="fl ele_nav nav_mcategory_54">
    <a class="btn_ele_nav" href="https://www.1905.com/news/" title="首页">首页</a>
</li>
<li class="fl ele_nav nav_mcategory_220">
    <a class="btn_ele_nav" href="https://www.1905.com/news/zixun/" title="电影">电影资讯</a>
</li>
<li class="fl ele_nav nav_mcategory_985">
    <a class="btn_ele_nav" href="https://www.1905.com/news/cehua/" title="1905原创">1905原创</a>
</li>
<li class="fl ele_nav nav_mcategory_1103">
    <a class="btn_ele_nav" href="https://www.1905.com/news/yg/" title="预告片">预告片</a>
</li>
<li class="fl ele_nav nav_mcategory_1106">
    <a class="btn_ele_nav" href="https://www.1905.com/news/zxzixun/" title="明星资讯">明星资讯</a>
</li>
<li class="fl ele_nav nav_mcategory_870">
    <a class="btn_ele_nav" href="https://www.1905.com/newgallery/list/c773.html" title="图片">图集</a>
</li>
<li class="fl ele_nav nav_mcategory_70001">
    <a class="btn_ele_nav" href="https://www.1905.com/special/index-p-typeid-1.html" title="专题">专题</a>
</li>
</ul>`
let reg2 = /  <a class="btn_ele_nav" href="(.*?)" title="(.*?)">(.*?)<\/a>/igs
console.log(typeof(reg2))
        let res = reg2.exec(result)
        console.log(res);