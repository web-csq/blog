const nav=require("./nav");
const sidebar =require("./sidebar");
module.exports={
    title:"Mr Chen's Blog",
    description:"梳理前端知识点，巩固记忆",
    head:[
        ["link",{rel:"icon",href:"/img/favicon.ico"}],
        ["link",{rel:"stylesheet",href:"/css/style.css"}],
        ["script",{charset:"utf-8",src:"/js/main.js"}]
    ],
    dest:"./dist",//默认在 .vuepress 
    base:"/blog/",
    markdown:{
        lineNumbers:false
    },
    themeConfig: {
        nav,
        sidebar,
       
    }
}