rules = [
	{
		name: "about:haoutil", // 规则名称
		from: "about:haoutil", // 需要重定向的地址
		to: "https://haoutil.googlecode.com", // 目标地址
		wildcard: false, // 可选，true 表示 from 是通配符
		regex: false, // 可选，true 表示 from 是正则表达式
		resp: false // 可选，true 表示替换 response body
	},
	{
		name: "反Google搜索验证码",
		from: /^https?:\/\/ipv4\.google\.com\/sorry\/IndexRedirect\?continue=https?:\/\/www\.google\.com(?:\.hk|)\/search\?(.*q=.*)&q=.*/i,
		to: "https://www.google.com/ncr#$1",
		regex: true
	},
	{
		name: "wap百度手機版轉PC版",
		from: /^https?:\/\/(.*)\.baidu\.com\/wap\/(link|shareview)/i,
		to: "http://$1.baidu.com/share/link",
		regex: true
	},
	{
		name: "hdwallpapers直接連結圖片",
		from: /^http:\/\/www\.hdwallpapers\.in\/(.*)-wallpapers\.html/i,
		to: "http://www.hdwallpapers.in/download/$1-1920x1200.jpg",
		regex: true
	},
	{
		name: "userscripts.org",
		from: "http*://userscripts.org/*",
		to: "http://userscripts-mirror.org/$2",
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
		from: /(.*)\/archiver\/\??tid\-(\d+)(\-page\-(\d+))?\.html$/,
		to: "$1/viewthread.php?tid=$2",
		regex: true
	},
	{
		name: "2ch 顯示全部貼文",
		from: "http://*.2ch.net/*l50",
		to: "http://$1.2ch.net/$2",
		wildcard: true,
	},
	{
		name: "sohu 跳轉",
		from: "http://so.tv.sohu.com/redirect?kisId=*&url=*.html*",
		to: "$2.html",
		wildcard: true,
	},
	{
		name: "海芋",
		from: "http://0zz.cc/redir.php?url=*",
		to: "$1",
		wildcard: true,
	},
	{
		name: "微剋多資訊",
		from: "http://www.microduo.tw/plugin.php?id=dxksst_link:link&dxksst=*",
		to: "$1",
		wildcard: true,
	},
	{
		name: "greasyfork",
		from: /^https?:\/\/greasyfork\.org\/(en|zh-CN)/i,
		to: "https://greasyfork.org/zh-TW",
		regex: true
	},
	{
		name: "硬是要學",
		from: "http://www.soft4fun.net/scan/redir.php?url=*",
		to: "$1",
		wildcard: true,
	},
	{
		name: "mozest",
		from: "https://g.mozest.com/",
		to: "http://g.mozest.com/",
		wildcard: true,
	},
];