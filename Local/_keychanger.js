/*
keys['r'] = function() {
				XULBrowserWindow.statusTextField.label = "重新載入";
				UCL.rebuild();
				USL.rebuild();
				ucjsMouseGestures.reload(true);
				addMenu.rebuild(true);
				uAutoPagerize.loadSetting(true);
				uAutoPagerize.loadSetting_CN();
				refererChanger.reload(true);
				KeyChanger.makeKeyset(true);
				ZoomManager.setZoomForBrowser(getBrowser(), 1.25);
			};
keys[2] = "XULBrowserWindow.statusTextField.label = 'Gmail'; gBrowser.selectedTab = gBrowser.addTab('https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dwm&scc=1&ltmpl=default&ltmplcache=2');";
keys['a'] = "XULBrowserWindow.statusTextField.label = 'Adblock Plus 條件偏好設定'; gBrowser.selectedTab = gBrowser.addTab('chrome://adblockplus/content/ui/filters.xul');";
keys['s'] = function() {
				XULBrowserWindow.statusTextField.label = '定位到searchbar並清除關鍵字';
				document.getElementById('searchbar').focus();
				MGs.FindReset();
			};
keys['d'] = "XULBrowserWindow.statusTextField.label = '切換 dTa 單鍵下載選擇器'; dTaTurboSelect.Toggle();";
keys['f'] = function() {
				XULBrowserWindow.statusTextField.label = "開啟並定位到findbar";
				gFindBar.open();
				gFindBar.toggleHighlight(1);
				gFindBar.getElement('highlight').setAttribute("checked", "true");
				gFindBar._findField.focus();
				gFindBar._findField.value = '';
			};
keys['u'] = function() {
				XULBrowserWindow.statusTextField.label = '定位到urlbar並清除關鍵字';
				document.getElementById('urlbar').focus();
				document.getElementById('urlbar').value = '';
			};
*/
//尋找文字前次出現的位置
keys['F4'] = function() {
				gFindBar.getElement("find-previous").click();
			};
//頁面尋找剪貼簿文字
keys['F+Alt'] = function() {
				var Init_Find = true;
				var Highlight = gFindBar.getElement("highlight");
				function HighlightText() {
    				if (Init_Find) {
        				Init_Find = false;
        				Highlight.setAttribute('checked', true);
    				}
    				if (Highlight.checked && gFindBar._findField.
        				value!=gFindBar._lastHighlightString) {
        				Highlight.click(); Highlight.click();
    				}
				}
				var Clipboard = readFromClipboard();
				gFindBar._findField.value = readFromClipboard();
				$& HighlightText();
				setTimeout(function(){gFindBar.close();}, 10000);
				//gFindBar.close();
			};
//頁面尋找選取文字否則開啟並定位到findbar或關閉findbar
keys['F+Ctrl'] = function() {
				var Init_Find = true;
				var Highlight = gFindBar.getElement("highlight");
				function HighlightText() {
    				if (Init_Find) {
        				Init_Find = false;
        				Highlight.setAttribute('checked', true);
    				}
    				if (Highlight.checked && gFindBar._findField.
        				value!=gFindBar._lastHighlightString) {
        				Highlight.click(); Highlight.click();
    				}
				}
				var select = content.getSelection().toString();
				if (select) {
					gFindBar._findField.value = select;
					$& HighlightText();
					setTimeout(function(){gFindBar.close();}, 10000);
					//gFindBar.close();
					content.document.getSelection().removeAllRanges();
				} else if (gFindBar.hidden) {
					gFindBar._findField.value = "";
					gFindBar.open();
					gFindBar.toggleHighlight(1);
					$& HighlightText();
					gFindBar._findField.focus();
					setTimeout(function(){gFindBar.close();}, 180000);
					/*
					XULBrowserWindow.statusTextField.label = "開啟並定位到findbar";
					setTimeout('XULBrowserWindow.statusTextField.label = ""',1500);
					*/
				} else {
					gFindBar.close();
				}
			};
//重新啟動並清除緩存
keys['r+ctrl+alt'] = function() {
				Services.appinfo.invalidateCachesOnRestart()||Application.restart();
			};
//定位到urlbar
keys['enter+ctrl'] = function() {
				openLocation();
			};
//複製以及取消選取文字
keys['c+ctrl'] = function() {
				goDoCommand('cmd_copy');
				setTimeout('content.document.getSelection().removeAllRanges();',100);
			};
//google站內搜索關鍵字
keys['f+ctrl+alt'] = function() {
				var _document=document.commandDispatcher.focusedWindow.document;
				var p=prompt('請輸入想要在當前域內搜尋的關鍵字('+_document.location.hostname+'):','');
				if(p)_document.location.href='https://www.google.com/search?q=site:'+_document.location.href.split('/')[2]+' '+encodeURIComponent(p);
			};
//不使用代理
keys['Alt+1'] = function() {
				gPrefService.setIntPref("network.proxy.type", 0);
				XULBrowserWindow.statusTextField.label = "不使用代理";
				setTimeout('XULBrowserWindow.statusTextField.label = ""',1500);
			};
//全局代理切換為proxy.hinet.net : 80
keys['Alt+2'] = function() {
				gPrefService.setIntPref("network.proxy.type", 1);
				gPrefService.setCharPref("network.proxy.http", "proxy.hinet.net");
				gPrefService.setIntPref("network.proxy.http_port", 80);
				XULBrowserWindow.statusTextField.label = "全局代理切換為proxy.hinet.net : 80";
				setTimeout('XULBrowserWindow.statusTextField.label = ""',1500);
				BrowserReloadSkipCache();
			};
//PAC自動代理 Unblock Youku
keys['Alt+3'] = function() {
				gPrefService.setIntPref("network.proxy.type", 2);
				//gPrefService.setCharPref("network.proxy.autoconfig_url", "https://github.com/whuhacker/Unblock-Youku-Firefox/raw/master/data/proxy.pac");
				gPrefService.setCharPref("network.proxy.autoconfig_url", "http://yo.uku.im/proxy.pac");
				XULBrowserWindow.statusTextField.label = "PAC自動代理 Unblock Youku";
				setTimeout('XULBrowserWindow.statusTextField.label = ""',1500);
				BrowserReloadSkipCache();
			};
