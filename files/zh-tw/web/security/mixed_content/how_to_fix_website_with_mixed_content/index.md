---
title: 如何修正含有混合內容的網站
slug: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
---

自 [Firefox 23](/zh-TW/docs/Mozilla/Firefox/Releases/23) 起，Firefox 會預設阻擋[主動型混合內容](/zh-TW/docs/Security/MixedContent#Mixed_active_content)。這項動作是跟在 [IE 9](http://blogs.msdn.com/b/ie/archive/2011/06/23/internet-explorer-9-security-part-4-protecting-consumers-from-malicious-mixed-content.aspx) 和 [Chrome](http://googleonlinesecurity.blogspot.com/2011/06/trying-to-end-mixed-scripting.html) 後實行的。

本頁面會告訴你，身為一個網頁開發者需要知道甚麼。

## 你的網站可能出問題了

如果你的網站由 HTTPS 傳輸，那麼本頁所有由 HTTP 接收的[主動型混合內容](/zh-TW/docs/Security/MixedContent#Mixed_active_content)就會被封鎖。你的網站可能就會讓使用者遇到一些問題（像是 iframes 或擴充套件無法載入…之類的）。至於 [被動型混合內容](/zh-TW/docs/Security/MixedContent#Mixed_passivedisplay_content) 預設是會顯示出來的，可是使用者也可以設定將這類內容擋下來。

值得注意的是，由於阻擋混合內容已經在 Chrome 和 Internet Explorer 中實行了，所以如果你的網站已經在這些瀏覽器中出問題，那麼在 Firefox 也很有可能會發生相同情況。

在任何情況下，要知道網站是否出問題的最好方法，就是下載 [最新的 Firefox Developer Edition](https://www.mozilla.org/zh-TW/firefox/developer/)，然後到網站中的不同頁面打開[網頁主控台](/zh-TW/docs/Tools/Web_Console)（要啟用「安全」訊息）、並檢查是否有任何混合內容的回報。也可以用 [SSL-check](http://www.jitbit.com/sslcheck/) or [Missing Padlock](https://www.missingpadlock.com) 這網路爬蟲、或是桌面桌面， [HTTPSChecker](https://httpschecker.net/how-it-works) 來檢查並抓出不安全的內容、另外還有文字介面的工具 [mcdetect](https://github.com/agis/mcdetect)。如果檢查不到任何有關於混和式內容的東西，就代表你的網站狀態良好：繼續建置你出色的網站吧！

## 如何修復你的網站

避免混合內容阻塞最好的方法，就是使用 HTTPS 而不是 HTTP 來傳輸所有的內容。

**對於你自己的域名，**使用 HTTPS 來傳輸所有內容並修正你的連結。一般而言 HTTPS 版本的內容都已經存在了，只需要在連結後面加上「s」：就是將 http\:// 改成 https\:// 。

但有時候，媒體的路徑可能不正確。按照作業系統的不同，你可以使用線上或離線的工具如 [linkchecker](https://wummel.github.io/linkchecker/) 來解決問題。

**對於其他域名，**盡可能使用該網站的 HTTPS 版本。如果 HTTPS 不能用，試著跟域名擁有者聯絡並詢問他們是否可以使用 HTTPS 傳輸內容。
