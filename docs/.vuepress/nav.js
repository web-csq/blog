module.exports=[ // 导航栏配置
    { text: '首页', link: '/' },
    { 
        text: 'javascript', 
        items:[
            {
                text:"基础必备",
                items:[
                    { text:"数据类型/API",link:"javascript/base/datatype/"},
                ]
            },
            {
                text:"核心知识",
                items:[
                    { text:"正则表达式",link:"javascript/core/regexp/"},
                    { text:"OOP",link:"javascript/core/oop/"},
                    { text:"es5",link:"javascript/core/es5/"},
                    { text:"es6",link:"javascript/core/es6/"},
                ]
            },
            {
                text:"高级进阶",
                items:[
                    { text:"vue",link:"javascript/high/vue/"},
                    { text:"angular",link:"javascript/high/angular/"},
                    { text:"react",link:"javascript/high/react/"},
                ]
            }
        ]
    },
    { 
        text: 'NodeJS',
        items:[
            {
                text:"内置模块",
                items:[
                    {
                        text:"path",link:"nodejs/built/path/"
                    },
                    {
                        text:"fs",link:"nodejs/built/fs/"
                    },
                ]
            },
            {
                text:"第三方模块",
                items:[
                    {
                        text:"express",link:"nodejs/third/express/"
                    },
                ]
            },
            {
                text:"包管理",
                items:[
                    {
                        text:"npm",link:"nodejs/package/npm/"
                    },
                    {
                        text:"yarn",link:"nodejs/package/yarn/"
                    },
                ]
            }
        ]
    },
    { 
        text: 'web server',
        items:[
            {
                text:"nginx",link:"webserver/nginx/"
            },
            {
                text:"apache",link:"webserver/apache/"
            }
        ]
    },
    { 
        text: '数据库',
        items:[
            {
                text:"MySql",link:"database/mysql/"
            },
        ]
    },
    { text: '文章笔记', link: 'article/' },
    { text: '开发工具', link: 'tools/' },
    { 
        text: '其他链接', 
        items:[
            {
                text:"github",link:"https://github.com/web-csq",
            },
            {
                text:"码云",link:"https://gitee.com/webcsq",
            },
            {
                text:"知乎",link:"https://www.zhihu.com/people/webcsq",
            }
        ]
    },
]