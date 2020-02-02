const nav=require("./nav");
const sidebar =require("./sidebar")
module.exports={
    title:"Mr Chen's blog",
    description:"梳理前端知识点，巩固记忆",
    head:[
        ["link",{rel:"icon",href:"/img/favicon.ico"}]
    ],
    dest:"./dest",//默认在 .vuepress 
    markdown:{
        lineNumbers:false
    },
    themeConfig: {
        nav,
        sidebar,
        sidebarDepth: 2, // 侧边栏显示2级
    }
}