module.exports=[ // 导航栏配置
    { text: '首页', link: '/' },
    { 
        text: 'javascript', link:"/javascript/",
        items:[
            {
                text:"数据类型",link:"/javascript/datatype"
            },
            {
                text:"EC5",link:"/javascript/EC5"
            },
            {
                text:"EC6",link:"/javascript/EC6"
            }
        ]
    },
    { 
        text: 'NodeJS', link:"/NodeJS/",
        items:[
            {
                text:"内置函数"
            }
        ]
    },
    { 
        text: 'web server', link:"/webserver/",
        items:[
            {
                text:"linux",link:"/webserver/linux/"
            }
        ]
    },
    { text: '文章笔记', link: '/article/' },
    { text: '开发工具', link: '/tools/' },
    { 
        text: '学习链接', 
        items:[
            {
                text:"github",link:"http://www.baidu.com",
            },
            {
                text:"码云",link:"http://www.baidu.com",
            }
        ]
    },
]