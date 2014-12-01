rules = [

        {
            name: "wap百度手機版轉PC版",
            from: /^https?:\/\/pan\.baidu\.com\/wap\//i,
            to: "http://pan.baidu.com/pcloud/",
            regex: true
        },
        {
            name: "hdwallpapers直接連結圖片",
            from: /^http:\/\/www\.hdwallpapers\.in\/(.*)-wallpapers\.html/i,
            to: "http://www.hdwallpapers.in/download/$1-1920x1200.jpg",
            regex: true
        },
        {
            name: "about:haoutil",                  // 规则名称
            from: "about:haoutil",                  // 需要重定向的地址
            to: "https://haoutil.googlecode.com",   // 目标地址
            wildcard: false,                        // 可选，true 表示 from 是通配符
            regex: false,                           // 可选，true 表示 from 是正则表达式
            resp: false                             // 可选，true 表示替换 response body
        },
        {
            name: "userscripts.org",
            from: "http://userscripts.org/*",
            to: "http://userscripts-mirror.org/$1",
            wildcard: true,
        },
        {
            name: "ref.gamer.com.tw",
            from: "http://ref.gamer.com.tw/redir.php?url=*",
            to: "$1",
            wildcard: true,
        },
        {
            name: "noMoreArchiver",
            from: "http://*/archiver/?tid-*.html",
            to: "http://$1/viewthread.php?tid=$2",
            wildcard: true,
        },
        {
            name: "noMoreArchiver",
            from: "http://*/archiver/tid-*.html",
            to: "http://$1/viewthread.php?tid=$2",
            wildcard: true,
        },
        {
            name: "2ch 顯示全部貼文",
            from: "http://*.2ch.net/*l50",
            to: "http://$1.2ch.net/$2",
            wildcard: true,
        },
];