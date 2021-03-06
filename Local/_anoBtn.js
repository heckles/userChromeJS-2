/**********************************************************************************
 *此處為按鈕設置
 *************************************************************************************/
var anobtnset = {
	//※AnotherButton29+.uc.js按鈕寫於腳本內 不適用此處設定
	//※必須設置	按鈕與哪個id相鄰，alltabs-button，back-button等
	intags: "tabbrowser-tabs",
	//※AnotherButton29+.uc.js按鈕寫於腳本內 不適用此處設定
	//※必須設置	按鈕與目標id關系，之前（before）或者之後(after)
	orientation: "before",
	//※AnotherButton29+.uc.js按鈕圖標寫於腳本內 不適用此處設定
	//※必須設置	按鈕圖標
	image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABmElEQVRIic3Vz2ddURAH8I+IqqonKqqioiKLyiKqIqKqqqoi3iKL6qKriKguKp56qioekUVVFhEVVfef7eLMbY/z7i8N1S/jcmfm+z0zd+Zc/gMsYQs7hW1hdB3iFTzDBhYb/Dewiae4O5R0NZ47eNgTuxgxLzCLZyfWcRqBS/FuIcT2NFcxwj6+osIEtyJvDvsRNMVB2BRXmWATFrCNi8g/llo3h8MIKO207UQFlnEeOWcaKj5pEajwOSrq6/NmlrOeOzY6yGu7xKMege2sipe5o609tX3R/R1qvMpyDmVt6mpPhaMB5KXAhTRRnQI/cB/3BpAv43WR+7uCc80CPyNxCHb9GdUK33LntEWgCvEnWMNYmqgj3C4ExkXeJHfudQg0VXUgta7GzRDN48a5wEoP6VWU/wEPipOPoj2XRc5qEedjh8BMsTiBO+EryU8aYq1F+V2VfJLa+Rxv8b0lrnUh3/QIDLH3beSkuT2+BvlMtlxdIn1XR5NNzI9uJx5LV3Uf8Zn0U/pr1Av2Tpq0ibQHu+ZH9t/jF5XwjtYY3gV/AAAAAElFTkSuQmCC",

	//菜單彈出方向，不設置就默認,參考 https://developer.mozilla.org/en-US/docs/XUL/PopupGuide/Positioning
	position: "",
};
/**********************************************************************************
 *child:[  ]內為當前菜單的下一級菜單配置,支持多級
 *text 為運行參數，如果無需參數，直接刪除text屬性
 *exec 為打開路徑，可以是任意文件和文件夾，支持相對路徑，相對於配置文件夾；
 *相對路徑【文件夾】直接「\\」開頭
 *oncommand 可以用function(){}；
 *小書籤可以用oncommand:function(){
	gBrowser.loadURI("javascript:內容")
 }；
 *-------------------------------
 *除了以上屬性外，可以自定義添加其他屬性，如果快捷鍵accesskey等
 *-------------------------------
 *{}, 為分隔條
 *-------------------------------
 *如果設置了id屬性，會嘗試獲取此id並移動，如果在瀏覽器中沒有找到此id，則創建此id
 *************************************************************************************/
//下面添加菜單
var anomenu = [
{
    label: "google 捷徑",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVQ4jaXTPUvDQBgH8HyzkiCVdlBcFD+CDgUn0bU5rUMRS6mD4BuCVgfFKmitCl0s+FKhvoEgVvsyWKuRS9JLcvm7tcplSHW44e6e5/c8x91JAaKFZJXWFELRzZBVWgsQLST9JfknInlt9ExRJLMMqSOG67ID7gLb5xbG100h1hNIFyzM51gbu61wnN7Znl14Al+GC7LTas9nMi20bPgHPnUXmatOxbE1E89v3D8wd8DAbGBiw0R/XMfupY3RJcM/oBCKkUUDiUMGF/h1HN+AQiiC0xSa4aL04mBgVvcPTKZNbBYspHIMy3mGJnXx+s4xmBARAVg4Ybh4ctAb66wNJXSUGxx7RfEqBaDa5EgdMSEwmWXIlnwA+Qcb5QbHcLLTbjBGcfboILLq4yX2xXVsFSzUP1zcVzmOb2zsF21EVsRkhVD89zPVJTmqhWWV1rsGVFqRo1r4G6iM33AbQTj+AAAAAElFTkSuQmCC",
    child: [
        {
            label: "雲端硬碟",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfElEQVQ4ja2TP0vDUBTF8xH6EQJ2EJQmzUNEK5gmLoJDoZ0EoYMgCEKF0r63mAjN2FYQFHXo1KUiD7R54CARBItW6FRwyyfQgAaKdrhOrWmT/hG8cMffOZdzuBz33yNSzCcuNqHbVIdWcRxLDk0UQAxb8xc7UKPrPpHvZ6Uy3v0Gy4gRiFT3IFpIwvvjmk+k05DlkQISwzZiBKI0C2EtBUfVjYAr1FYwXCcZxAj0NqylIKylArJQ4etJ0YeCy4QkkzhegdniFsxoSavbVK2gQDsNmfecni97YcQIzJ1uA48TfKch80FXdJsK7dc2DCNGQGL5cs+AFiPluzME7asleLtfHQwUMWz5YJM4Is30O6/ofIiWBIeWBKAlAW5PJHipLoJtxmzOB9cxiAfnsLD7AMvZNiiGO3Ljhmtzkol1r4BYIVPBiuGCbHykBxqQrnMgZS+nguOGa/+2YOI0YgSE40OI5V4nwn137wi1/daKPtlZMVyIFz6tsT/xl/kByqC9TCzMcYYAAAAASUVORK5CYII=",
            oncommand: 'gBrowser.selectedTab = gBrowser.addTab("https://drive.google.com/drive/#my-drive");',
        },
        {
            label: "百度雲 網盤",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jZ3MS0hUURwG8NOmVjGLFtGm9i1aGESRUItWs1CoICiKIMhtybSwKOhND1KooCGhF9j15kRBFDHgjIJiUmSOIyaak/mayTNzz/ucEL4Wl5ujbszFb/P9v+9PfN+PSSk9a61zzmE1rLVOSuml0+kYEUJ41lqshRDCI8YYt9YHxhhHjLFYjiuL9vwfXOxewNWeBWQn3IpOhBhjUE1rg2tdBodeWZz56HD6ncPhDos3w0t7EaJ1OIrkpxVqH5VxJ8uhtQaTGqc6GOqeVaC1xvI+CcOQmp5Bv9+JeKIbqS/lf/n5tyXUNBfRN2kQiMW+1hpEKQ2lNFKDAkeelzBUfxKVfQcw0dCI/GgR2e8MBz2OeJtEvE3i2GuJgSmJaEeUUsj94tj5YA5HX5Yw1dmL33dbUKjZi6b6G9h+bwa1ySK8rwypbwz7H5cQf1oEFxJKKRApFe53lbDlyjj6xyuQUkJKib66E9h9NoNt138gPbyYt2TD7sBPBikViBASD7OzWJ/Io+NzEUJIzFc49iQy2HAujye9YRbJTVbQ4E2iSDmEkOGDwhzDpgt5bGwawvEXE9hxewSkMYfL76cghFiiUBJo/cRBAxE+4FyAc4GeMYpdrQWsuzmGzc3juJWZBecc0T3yYXAeWy+NYHQ6AOcChDHuqgtBwMHYymG16M4Yd4RS6jEWjv4XpeV2kkwmY5RSLwiYW+0wCJijlHq+78f+AjFijgdXSBqcAAAAAElFTkSuQmCC",
            oncommand: 'gBrowser.selectedTab = gBrowser.addTab("http://pan.baidu.com/disk/home#from=share_pan_logo");',
        },
        {
            label: "Chrome 同步功能",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmUlEQVRIie2UX4hVdRDHP7aCSD0IFiQUiAixlPgQK2UFCz2I0IMJF4MkVERy95yZ38VApYL7FPsS+lAroi8FhdxXCWHRRDH8c/ec38xhLyGGFJRpoELESrB6ejiLud2zXnF79AsHDvOb+c7vOzO/gSdYEMLpZSTFGj70Vwinl/1/xM3sLdTOITaDejn73UXsBDr55sLINd83S3aVtPgEzd4hxE3Vf3ENsRmC739M8jiCeonYURrtpT3nH/nTqH+LeknIdzDSXU1SrKHRfaY/+fazz6H+J+LfQbloXr9WazFi3z9QuhL1vxH/8uGJ1JLqZtngIygdQuw4SbaFkG0m9SOIzSDxBzZeWVIfJP4N4j/1JZ8PIW5C/B5psbf3cKS7mmA/o3auNrjRHiDJNpAWe5FilN3Za7V+aqeqHsYJmsWqyrjzwguI/YHaDUK+ozcoDpHa5f/UvEQ9o2kvz1WRDRLix4jfQuw3dk2uALGjqE2zu/NSr+xscLbxv6C2lZFLL7JrcgWh2Ib476jfRPKU1Nb1xInfQeM4aHGNYF/XShY7gfrNf+U+SHJ+JeK3qsHoDNeU6xhiV6ky+YEehz2TzyJ+jyR+Vpt8NH8btel5EwQ/iNo0iOWEaDTaA7VEj4NGewBxJ7WLkNj2qmlxfM4MN4tVaD6G5mMk2YZaopC/juZjfPDj8vu2jVeWIHYI9ZI0vl8Z1Q9USew2YjlSvEroDM/afq1dGwDiJxG/TqM9QIgBsRy12xV58flc56TzBmKHkDhBOrWW0Bmu3oaXJPmnc9ZHq7W4UuclWjQrNfEwEifQOI7E9f3ruK37PI32UjR+VT2eokvwg6TxC9Sm7i/FVvlUf7J+GPX3UD+D2l/V5NgpRu3dhRM/AfAPBn5mlyAaA2EAAAAASUVORK5CYII=",
            oncommand: 'gBrowser.selectedTab = gBrowser.addTab("https://www.google.com/settings/chrome/sync");',
        },
        {
            label: "Gmail",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVQ4jdWSMWvCQBTH/UhuSim9Fgol56qb4CidXbp0EUo3oUOdRQTFwYgotBZRSjOoIUWC8YZWTmPOfIu/U47I1ZCxPnjDce/34717l0j8i+CUYFvMY28b8AWLzL1tYFvMg1OCIwGnBJusBjFonYTFoIVNVgOnBN+3F6ogyF2lrMC7Slnef16n0E4nVYH79CCLgpHCLf9qVxjeF9BOJ/8W+ILBq78iPFLQsnN3if5jCV29ES3wBYMY9yTIKYGZuYH+8oyu3ognCL/2OJeBXqtKOLaAraawzAmMr7cjOJbAMidgq6k82wsjnsBzHcxnI/D1Qlnj+sdCv9eMFsxnI3iuc/Ijee4SH+8dVXDecQBlqMOL/ah0bgAAAABJRU5ErkJggg==",
            oncommand: 'gBrowser.selectedTab = gBrowser.addTab("https://mail.google.com/mail/u/0/?hl=zh-TW&pli=1#inbox");',
        },
        {
            label: "YouTube",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPElEQVRYhe3Wz0tUURjG8Xc195xz77n3nmv2AyIoccToT2jlPxCEIC7aiLjIoBa1cCm0bBSxCZ1EDKQGBCMoFGsSHXVm0EUuxkJIEUajceEsxmBAeFokA2rmK4XTYh747M75nu0hqq66/2UZI++lAzuRDtRSOlBLGaM2MoGNf8KojXI3UONpI28eeDwVqPF0YOMspYwdJyKieU82LwQ2KmHek800a+x40tiohFljx2nGl5kZo1ARvsxQwsjcR6PANXP5PPvsSRJG5mjKl3vvjQJH4lINfmxtorj2Fdn7nUhc8Fn3jjPlyz2a9BW4EjfCKJVKZcVvW1jpeoQPVy6yG4fRO1+B7XoYxWLxgN3dXRQ2c1h++AATtT6/tY/e+ApsjfXY2dn5rUKhgO+fV5C608rv+Qo07iuwNdYjn8//0fb2Nr68HMXrGs1q0pgnwdZQh1wud6LkyDDGAofVpLgnwdZQh/X19WN9WphH5PYtdNkhvGI2adSTYAtfw+rq6hHLi4uItreh07MR0YLf8yTohSfBFr6KbDZbtjg3h6ftbbhbG+CxY2HkNK19NKxFadiV4Bg85yM1PY3k5ASetLagw7XRbVuIMe8foUWJYq7YeO5KcAy6Eh2Bh3YZQrcjEGPeO07MFWs0oEVywJXgip7i7Im0SFJUW0PPXIFKiGpriPod0dSvBSrCEU1ERNSnrUifFjhbVuTAvzDihFp6tPW2V4ulMkfke7XAX/nVKDd7tDURcUItZ/PVrq46xn4C/yowaRwJnAkAAAAASUVORK5CYII=",
            oncommand: 'gBrowser.selectedTab = gBrowser.addTab("https://www.youtube.com/");',
        },
        {
            label: "Google 地圖",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC4klEQVQ4jZ2T3W9TdRjHf//F4cbE+YaxvYIrTDQuU+LLhYneiR1yQ+jBizVwQ0xqE4IXQAgZOes6cUHWTTPp2zmup4d14thKCIKkp9Cm6wt0zK1dxyiYRV3L7+NF240Qr/wmn8vn8+T5Pc9PCCGElfnhhWRmQklmYltcL8eU6+WkIjrJf/xB01ac5D96vymej6araMZz6F3c5N97l7TiwFac2IqT7FtvoxkqQgghEldiP//19wZSyv9kvhgl59hFWnHS3/MS9g4n2Z270HSVa3MawpzRLYBS1e50dlOq2kigsHiXIUPd6mwrTtKKg7Ti4KjHzeh3AYQ5E7WklATMATRdZagzgpSSJxsNNEMldXMMe4dza4zBvne2BVPJ8GUpJYH4AJrREegqT59K1hp1NENlbmGS2vg30lacnOvr5ajH/awg1BaYnu3HM1RarRa3Fn5F01Vq9VBrYy3GjVd3bxVb0e+Z0iOIqelL1marRb1RI2AOMGJ6WKyVyVVuoxkqSytjrSfrk5QLcfRPPuXsSS+35wzupIy2IGpOxIYMlXTpKg9WCjSbTcoP7qIZKqWKv9lYG6VSDJO+kSA0fJpMyiA7HyM3G2kLwmYw1t391bTO5maTynIBO3Oq+bCm0Vj1s177luVykPytMHfmouRmQ+R++aktiJjB6PbxuOlmrV5iejb8j8tnkcv+yHp1iEerw6wujnL/93EWkhMdQXx8imeyVDjE48c1AGr1dc4F53H5LFw+iyupCCsVP49W/TysjnQFwbimu9EMlT+Kh1i+d4RQ/OKfmfwSAKnfFvj86wSuLj6L85O6zNqB9iVeMi5ENL1dvFQ8KP0XBze+8F3m4IkZipUqAC5vHJfPot+boN+b4DNvgn3eBOfHwgghRM/JwN5rlv5h+qvjrhnHXs+FN3oPD7/edziwf+CU7vry+PRrverIy28eOPvKngNnXtyz/4x6bBD12CBCiJ7uh+z5n4h/AWy0oXdRPD+0AAAAAElFTkSuQmCC",
            oncommand: 'gBrowser.selectedTab = gBrowser.addTab("http://maps.google.com.tw/?hl=zh-TW");',
        },
        {
            label: "Google Play",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVQ4ja3Q20uTcRzH8f0J/gd1E10UMYjS0uGTaCaZreMKK5ezq0pWOwQRuCLqoiSIFdGg1bS5LHlibTmn9dN5nG7zsNFwRUvKWCk8iGgE0rsLyQ6YaPS5f7/g+1WpVCqVWpaz1LKcpfrXrbogy+vtslLW2WTTCufKoTVXn4m113zkub1UxZ4oxpFG/YqAdfZmseFOM2pHgFKfD1vqEVfeeNLX027tsoCNrqDY9LCVzZ42ch6/oLzzOY6PDdzPuGmYcAt5ok5aEtgivxS5XoHG305+Swfb2kKcHAngn6onOF2PmKkjPOmUsRlXLwpIrSFRIEIUhjrZ3tPFjv5uSqI9nH8XJDbnIjHjZNZRA7Xn4K7FidP4+6OL+7tESbSHnUO97Er0UZYMo33dz963A9S+9/PFVQN2K9yzgscKXrNCm+nnf3Yn+4Q2NR/sH4twcDyKLhPj+FgfHRUmJisrwG2FpxYIWiBkVug2qheAAx8iQpeJcXhykHJliKPTw5z4HKFFf5Fkvp4xaQ9Tp3UgzArdZhvijxOOTA+JY7PD6L/GqZyLUz0+gFd/g6jmDK/yDaSlfXySipz0/uWJhm9xYSCBgQRnU2F8xXZCeZcY0JiIa6pEUjq0eLgAMA8YUxEai+oIbL2JyL0sevPM0pLhr0D16CAPCr00ZbvS/pxb+mWFP3ZqdES+XdCuuLJ9xhWF/2PfAX/EWbPD0jBCAAAAAElFTkSuQmCC",
            oncommand: 'gBrowser.selectedTab = gBrowser.addTab("https://play.google.com/?hl=zh-TW&tab=w8");',
        },
    ]
},
{
    label: "系統資料夾",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB5ElEQVQ4jXWSvW4TQRSFv7XXxhYRKEg4SFgoUigoqRASBUU6XoMnoKBEPAEdz0ALJaKhQNDwIyJKRBAiQog4cbx2vDuz94di7Y03gStNMaN7vjln7iQsKhw8d4nfcXVMBDcHTzBT3BRbrCS9QH/9FmuDuwlAugRI3KV78Tqtzm3y8QvC8SHj8YRrN7Zpd7qc9M0Y/3hX71usVtLG5D3nL9/n0uZDUjvi684bwmyEu2IaSEiQYv8/gOUtxUugjWqJxMB47wtWFlg5R8tjzK3urSPgpzGKSombYCqVUAOmAbd/AMy1PjQT3ApUSswipi0kZrhUgNXeOsKSaiaYRExnqAquEdeIhgwJGVJktNsp+9+eedOBSi3WMuDsVmcaME2QIsO0wCSQpsbk9+umAzOtxVIWzI8+VACJmEQkTJAwReKU7vBx7bjhYCmWmCMxx1TwpYM4xTViWlaR3ZsAVWmIJeSVK424ttDouFVTqQB2KoJIQywxx8wwXYxSckwK3IQHHydnAdWnORFrWYA7uOAm9c0Ao9G8jrACkIZYy6Ix3tV6OnxEpzdovkG3v0U2+oyqgSc12+ih9AjeA3fcnW5/wPrVbeAJyWn6wc9XfvjrLZM/nwi2wZXNewy37tw8t7axc8YK8BeuuK2XrQ1BowAAAABJRU5ErkJggg==",
    child: [
        {
            label: "Download",
            exec: 'E:\\Download',
        },
        {
            label: "FFDownload",
            exec: 'E:\\FFDownload',
        },
        {
            label: "TDDownload",
            exec: 'E:\\TDDownload',
        },
    ]
},
{
    label: "截圖",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABdUlEQVRIie3TPWhUQRTF8d8etVCCiDZ2ktiIWKmgEPEjCCKptRcLMWCnpFSwsVQr0woixMIUVloIqYKdRMRCsBI/CrHRRFyjxY4wPtbsrqtgkQsX3sy95/zfvHeHtfgHsRFjJUexblCDvThecmejdhIfW63W95+JV9jVr/nBhngJm0ptEst1vep7g929zCeS3GmKk9xIch1fuplXkHdJriW5imNN88NYWc1gkMQKxmvApaown2Q2ySyedRG3sYBHWFwFcrEGTJfNp42TjaBdiR7rTE8d43jZBTDdDdBOcjfJTJIZPKwE89iA4BQu40jRb8frnoAe33V/MX/QGIIrxWPqjwF4W/pOlPWczqQs4hu2YccwgBel70xZn4Ukt8p6DzYPA/isc+HGsIwPuI+vOjd5PQ4M+w8ulN7TeF/2nmNfOc3tYQGfcKjSjFTP5/oa0z4gS0lu4mh580nc+03vL4CpfgCDJM7XgK148hfNF7DFWvwX8QNSpf7wsUOiiAAAAABJRU5ErkJggg==",
    child: [
        {
            label: "頁面所有區域截圖",
            oncommand: 'captureAll.init();',
        },
        {
            label: "頁面可見區域截圖",
            oncommand: 'capturePage.init();',
        },
        {
            label: "瀏覽器界面截圖",
            oncommand: 'captureBrower.init();',
        },
        {
            label: "擷取選擇範圍",
            oncommand: 'WebScreenShotByClipping.init();',
        },
        {
            label: "擷取捕獲元素範圍",
            oncommand: 'WebScreenShotByClick.init();',
        },
    ]
},
{
    label: "變更視窗尺寸",
    image: "data:;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAIxAAAQQBBAEFAAAAAAAAAAAAAQIDBAURABIhQQYiIzEyof/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHhEBAQABAwUAAAAAAAAAAAAAARECAANhBCEjQfD/2gAMAwEAAhEDEQA/ANRirmKZj2L0VT0V14JHuDc6d2Ckc5ycHrSi4pamPTSno8UR57CEOKSh9Sy0SrjPOOjqVXZUw8di19jMcjyWHFLBQhe5te9RBBAI+D+6O20hJsJTVbLkPxnyjKlE5eOB9hgZ9WetNeTczncjzEuo2bHT7NJk5B7FFHikfrr/2Q==",
    child: [
		{
			label: "800x600  4:3",
			oncommand: "resizeTo(800,600);",
		},
		{
			label: "1024x768  4:3",
			oncommand: "resizeTo(1024,768);",
		},
		{
			label: "1280x1024  4:3",
			oncommand: "resizeTo(1280,1024);",
		},
		{},
		{
			label: "1280x800  16:10",
			oncommand: "resizeTo(1280,800);",
		},
		{
			label: "1440x900  16:10",
			oncommand: "resizeTo(1440,900);",
		},
		{
			label: "1680x1050  16:10",
			oncommand: "resizeTo(1680,1050);",
		},
		{},
		{
			label: "\u8996\u7A97\u5360\u7528\u87A2\u5E55\u5DE6\u534A\u90E8", //視窗占用螢幕左半部
			oncommand: "resizeTo(screen.availWidth / 2, screen.availHeight, moveTo(0, 0));",
		},
		{
			label: "\u8996\u7A97\u5360\u7528\u87A2\u5E55\u53F3\u534A\u90E8", //視窗占用螢幕右半部
			oncommand: "resizeTo(screen.availWidth / 2, screen.availHeight, moveTo(screen.availWidth / 1, 1));",
		},
    ]
},
{
    label: "備份Firefox",
    image: "data:image/png;base64,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",
    tooltiptext: "左鍵：備份\n中鍵：編輯BackupProfiles.bat\n右鍵：打開備份資料夾",
    oncommand: function() {
		var file = Services.dirsvc.get('UChrm', Ci.nsILocalFile);
		file.appendRelativePath("Local\\BackupProfiles\\BackupProfiles.bat");
		file.launch();
	},
    onclick: function (event) {
            switch (event.button) {
            case 1:
				var editor = gPrefService.getCharPref("view_source.editor.path");
				var appfile = Cc['@mozilla.org/file/local;1'].createInstance(Ci.nsILocalFile);
				appfile.initWithPath(editor);
				var process = Cc['@mozilla.org/process/util;1'].createInstance(Ci.nsIProcess);
				process.init(appfile);
				process.run(false, [Services.dirsvc.get("UChrm", Ci.nsILocalFile).path + "\\Local\\BackupProfiles\\BackupProfiles.bat"], 1);
                break;
            case 2:
				event.preventDefault(); 
				var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
				file.initWithPath("D:\\FirefoxBackup");
				file.launch();
                break;
            }
        }
}, 
{
    label: "外部程序",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFNUlEQVRIibXTWUwUZwDA8fU+eqg1adID2rqAWsshAgK7CBSBxUUoXqmW1ltUBORwmdkFg7oziGe00rS2VSvWpGlFVJBzl2V3YVmu9URt+tBXd5u+NE1IH/z3YQUWj7ZJ20l+D/N9X+af75sZheL/voxGyWU0SkOSJPPYI0mSHxmN0tAwSZKHJEkekuXKIVmuHLk3GqU/niRJ8qP9+w/cGglIkvzI/MP3PMiLodtq4nfnLkzWJiq/y+bmzdvcvTPIvcH73Bt8wODgfe7cvsuNG7fo73Ph7O7F0eXEbuvC0t5BW6uJxsYmjh499tuYQEtLK2azBWuHnU67g25HDz3OPvp6Bxjov4HLdZMbrlu4Bm7S3++it6d/9OH2LjosNkwmM83NLTTUNyBJMiMBUdQjinoKC4soKdmDTleKIIjo9QYMhjLKysopL9/7lLKycgyGMkRRjyCI6HSllJTsobCwiPz8grGBBclVzEk6xdsJJ/CPO4JfrIxf7EH8VFX4qQ7hrz6Mv/qIV9xR/NVHR+9Vh/FTHfKuja3kzRiZrLV5TwRSjxOgOUNd0wB3Dxbws/k6v7kq+fXBJc42VWBz1eN2e/C4PXg8HjyeX3x4x91uD263m4cP3Qyfiijqf/IGNCcI0tZw+nwLHRbrf0YU9ShEUU+I9gTzMi8yN+Nbr+XDLhCUPqyGIG0NgdrzBC47T2DaeQLSviFAc46A1HMoU86iTDmDMvlrlGnnmJNSja607HEg/STzV3zH3OUXSBOtrK7qH7HmUD+rqwZYfWiAjAM9JBu6yDT2sKqqj5UH+1hZ2UeW3EtKWRdL9V0s1XeiLjDxztITPjvIOMmCNd8TlH6BFF0HWXIvK+Q+r0qvjAM9JAmdLKvoJkvuJUvyWr7fSbKhi/cFO+8LdhJL7ajyTCg1p30CmZ8SvLaWIG0NScXtZBzo8TL2kmnsJX2fk8RSO8n6TjKNPSPz2opuEkvtJOhsJOhsxOtsxO+xEbOrDWXaVz6BD04R+vEVApedJaHQhLbCiXafk/R9TrQV3SwpsZKgs6Gt6B6h2etgyR4bcSVWr2IvdbGVxTtaUKZ+7hNYUU3YhnoC006zJK8ZTbkDzV4HqeUO1MVWVEUdpBi60Ox1oCl3eM+5qAPVY7GFwyzE7rYQub2ZOSnVPoGV1Sza0khAajWqnQ0k6ztJNnSiLrIQnW8mqdROisE7lqCzEVPQPkZ0QTvR+e1E55uJzjcTsa3piZe86jMicppRJh8jJucqSaU2VAVmona2EVdkIUmwkyTYWVLcweJdpmfLbWNxbhtRuW2Eb74+NhCcdZzFua3MSaokakst6gIzETnNxOS1kaizkqizot7dTuSOFiJ3tBLlI3JHq3d8+6iFG+tHj0gQxFs+vzZhH10kfPN1InOaiC+2EF9sITq3lYhtTX9r0dYmFm1tJGz91dEdPL7GKxSKF0VRz/wVZwjf2IC6wEzc7naicpoJ39RA+Obrf29TA+GbGli4sQH/eHlMQKFQKCaJop55mV8QvbMVVb6JiC2NhK2/Rtj6ayzcMKz+Gbxzw2vD1l/l9aiSpwIKUdTz3qovid7ZQtgnVwnJriM0u47Q7CuEfvwPZF8hNLuOkOy65wfezTpFyEeXCf7wEsFra73W1RKy7vJfCl53eXT92trnB6a9Mo9ps+YydVYQU2cGMHWGkikz3mHKy28x+SU/Jr/4BpNeeI1J019l4rTZTJwykwmTX2L8xOmMmzCFceMnohg3jtlz1zwdEAT9j75f1L8hCOKQIAg1fwI51/z+rcXaowAAAABJRU5ErkJggg==",
    child: [
        {
            label: "我的電腦",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChElEQVQ4ja2SPWgTARiGP4o4SrUWWkU6OIiKg4II4s+giAqCk4iDg+BQ6qJUoYgIVfxph1Ys/tBorpekpL0kXhoTvDQkVZrkLmlyuWujbU2tdKldO3R9HGqFqKMvfNP78cD7fa/I/9SPH8tMu87vcd0KrlOhUilj2yVsu0S5PEWpVGRqqkC1WqUOMO06KIrye1RVxe/3E4mE0XWdWGyMRCKOYXxgqmiRSMT/DRAJI1smka3zSPMqTwNf6Xy5yM0X32l/vsTl7iWKRYtYbOzfgIbGILLdQHZXkNYlQu+n8YerBGMzRAyXAf9nigWTaFRHZmdnSafTlEolXLeCqqrsPhBkc7OG7PyE7Khyv6/Gk9df6X5Vo/ftPHf6ahQKeSKRMBKJRDh1+ixdXXdxXQefz8fxMyEadw0hW8NIS5rLHV/ofDhL+70atx584+rtBQqFPJqmIcOZ15xdFbo/XcNxbEZGRjh8MkDbPi8N23xI8xiHztlc6ZjhwvV5Lt1Y4NiVL5hmlkAggESjURzHIRQK4Tg2oZDGrj2DtO33sKlpEGkK0rg3y9GLNgfPz3DkYo2WE0Xy+Ul8Ph+i6zqO46BpGpVKeT2XPEI29yLyGJFepOkN0mIgrUmkNYO0vcM0swwNDdUDNspil+sLY1l5LCuHZeUwzSymmSWfn1x/+UYETdNYXPzGx48TZDJpUqlxDOMDiUSc0dFRgsEgw8PD+P1+VFVFURRyudz6FzKZzPpB/tDa2hrJpEFPTw9er5eVlZW/dmRiYoKBgQF0Xa8zl5eXsSyTXG6SZNJA00ZRFIW5ubl6SH//M7q67tLf/6zOSKXGSaXGicff4/EM4vEMoijeX1X/j/oJtgkk7jUiT9AAAAAASUVORK5CYII=",
            text: "::{20D04FE0-3AEA-1069-A2D8-08002B30309D}",
            exec: "C:\\Windows\\explorer.exe",
        },
        {
            label: "小算盤",
            exec: 'C:\\WINDOWS\\system32\\calc.exe',
        },
        {
            label: "記事本",
            exec: 'C:\\WINDOWS\\system32\\notepad.exe',
        },
        {
            label: "啟動 Internet Explorer",
            exec: 'C:\\Program Files\\Internet Explorer\\iexplore.exe',
        },
        {
            label: "Internet Explorer 打開此頁",
            text: "%u",
            exec: 'C:\\Program Files\\Internet Explorer\\iexplore.exe',
        },
        {
            label: "用便攜Notepad2編輯user.js",
            text: "\\user.js" , 
            exec: "\\Chrome\\Local\\Notepad2\\Notepad2.exe" , 
        },
        {
            label: "便攜Notepad2",
            exec: "\\Chrome\\Local\\Notepad2\\Notepad2.exe" , 
        },
        {
            label: "用便攜Notepad2編輯prefs.js",
            text: "\\prefs.js" , 
            exec: "\\Chrome\\Local\\Notepad2\\Notepad2.exe" , 
        },
        {
            label: "用便攜Notepad2編輯userChrome.js",
            text: "\\Chrome\\userChrome.js" , 
            exec: "\\Chrome\\Local\\Notepad2\\Notepad2.exe" , 
        },
        {
            label: "用便攜Notepad2編輯userChrome.js",
            text: "\\Chrome\\userChrome.css" , 
            exec: "\\Chrome\\Local\\Notepad2\\Notepad2.exe" , 
        },
        {},
        {
            label: "Goagent",
            exec: "\\Chrome\\Local\\goagent\\local\\goagent.exe" , 
        },
        {
            label: "UltraSurf無界瀏覽",
            exec: "\\Chrome\\Local\\UltraSurf\\u1404.exe" , 
        },
        {
            label: "Freegate自由門",
            exec: "\\Chrome\\Local\\Freegate\\fg742p.exe" , 
        },
    ]
},
{},
{
    label: "AnotherButton重載/編輯",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABO0lEQVRIib2WYbGDMBCEKwEJSNj5zkClIAEJOKgEJCChEpCAhEro+5N04Eho0r5yM/yBy+3tsrnkcqkMYJF0rV1XHWb2NLMnMEpq/q2wpAbozGwyszkCBbAH0H0NAgzAY10889wltZ+waH33BUCqBilkEaXrnQq3InYpJsAC9IFpfD95MwBj+DYfggBDAmTjrpy9g1nW64acZI2XDBhTeZkmRy9rMjdYeCNXzT4JjS6uRrdLTFDv9+WOA+id9FMKaGOCT/aFM0vaFN4EtSDFdc4EOk26c8xwmr1LN2zMPRg/xxs2JPsRtKMu6boeQ6HB0a3Lj6AY0RSejaRm/R+BDugzk/54qIaCLXBzTHMFk0dHtWMlyczuJQCRyTcn7VugcAAO1QA+wv/w0s1mNgHdL25DL3f9/G7n7V0af9jEflS+F9XNAAAAAElFTkSuQmCC",
    tooltiptext: "左鍵：重載 ；右鍵：編輯",
    oncommand: "setTimeout(function(){ anobtn.reload(true); }, 10);",
    onclick: "if (event.button == 2) { event.preventDefault(); closeMenus(event.currentTarget);anobtn.edit(anobtn.file); };",
} ]