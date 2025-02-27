---
title: HTTP
slug: Web/HTTP
---

{{HTTPSidebar}}

**_超文本傳輸協定 (HTTP)_** 是一種用來傳輸超媒體文件（像是 HTML 文件）的[應用層](https://zh.wikipedia.org/wiki/应用层)協定，被設計來讓瀏覽器和伺服器進行溝通，但也可做其他用途。HTTP 遵循標準[客戶端—伺服器](https://zh.wikipedia.org/wiki/客户端-服务器架构)模式，由客戶端連線以發送請求，然後等待接收回應。HTTP 是一種[無狀態協定](https://zh.wikipedia.org/wiki/无状态协议)，意思是伺服器不會保存任兩個請求間的任何資料 (狀態)。儘管作為 TCP/IP 的應用層，HTTP 亦可應用於其他可靠的[傳輸層](https://zh.wikipedia.org/wiki/传输层)（例如 [UDP](https://zh.wikipedia.org/wiki/用户数据报协议)），只要不會無聲無息地遺失訊息即可。

## 教學

學習如何使用 HTTP 的指南和教程。

- [HTTP 的概觀](/zh-TW/docs/Web/HTTP/Overview)
  - : 基本特性：它能做什麼與它的用途
- [HTTP Cache](/zh-TW/docs/Web/HTTP/Caching)
  - : Cache 對網站速度很重要。 此文章描敘不同的方法使用 HTTP Header 控制它。
- [HTTP Cookies](/zh-TW/docs/Web/HTTP/Cookies)
  - : [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265) 定義了 cookies 的工作方式，當 HTTP 請求一個服務時，一個伺服器可以發送一個`Set-Cookie`的 HTTP header 回應。客戶端將以 header 的方式回傳 cookie 值給每個請求的同 一個伺服器，Cookie 也會在某些時間進行更新，或是限制一個實體網域或路徑。
- [HTTP Access Control (CORS)](/zh-TW/docs/Web/HTTP/CORS)
  - : **Cross-site HTTP requests** 是來自不同網域的資源請求。舉個例子，一個 HTML 網頁從網域 A (`http://domaina.example/`) 從網域 B(`http://domainb.foo/image.jpg`)請求一個圖片，經由`img`元件。現今的網頁通常會讀取跨站資源，包括 CSS 樣式表、圖片、腳本與其他資源。CORS 允許網頁開發人員的網站響應跨站讀取。
- [HTTP 的演化](/zh-TW/docs/Web/HTTP/Evolution_of_HTTP)
  - : HTTP 早期版本變化的簡要說明，到現在的 HTTP/2 與其他版本。
- [網頁安全方針](https://infosec.mozilla.org/guidelines/web_security)
  - : 一些技巧幫助運作團隊開發安全的網頁。
- [HTTP 訊息](/zh-TW/docs/Web/HTTP/Messages)
  - : 描述 HTTP/1 與 HTTP/2 不同類別與結構。
- [一個典型 HTTP 對話](/zh-TW/docs/Web/HTTP/Session)
  - : 顯示並解釋 HTTP 的通常對話流程。
- [HTTP/1.x 的連接管理](/zh-TW/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : 描述在 HTTP/1.x 中可用的三種連接管理。

## 參考

詳細的 HTTP 參考文件。

- [HTTP Headers](/zh-TW/docs/Web/HTTP/Headers)
  - : HTTP 訊息檔頭（header）用於描述資源、伺服器或用戶端的行為。可以透過 `X-` 前綴以增加自定義的專有項目。其他的項目可以在 [IANA registry](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers) 中找到，其原始定義在 [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229)。IANA 同時也維護 [新 HTTP 訊息檔頭的提案登記（registry of proposed new HTTP message headers）](https://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headers)。
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
  - : 透過 HTTP 有幾種不同操作方法：{{HTTPMethod("GET")}}、{{HTTPMethod("POST")}}，或是較少見的請求方法，如 {{HTTPMethod("OPTIONS")}}、{{HTTPMethod("DELETE")}}、或 {{HTTPMethod("TRACE")}}。
- [HTTP 狀態回應碼](/zh-TW/docs/Web/HTTP/Status)
  - : HTTP 狀態碼用來表示特定的 HTTP 請求是否已成功完成。回應分為五類：資訊回應、成功回應、重定向、用戶端錯誤、以及伺服器錯誤。
- [CSP 指令](/zh-TW/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : {{HTTPHeader("Content-Security-Policy")}} 回應檔頭讓網站管理員控制哪些頁面上的資源能被用戶端程式（user agent）載入。除了少數特例外，此政策主要關於指定來源伺服器和腳本程式的端點（endpoints）。

## 工具與資源

有助了解與測試 HTTP 的工具和資源。

- [Firefox 開發者工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [網路監視器（Network Monitor）](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [Mozilla Observatory](https://observatory.mozilla.org/)
  - : 旨在幫助開發者、系統管理員和安全專業人員安全地配置網站的專案。
- [RedBot](https://redbot.org/)
  - : 用於檢查與暫存相關的 HTTP 檔頭的工具。
- [瀏覽器的運作方式](https://web.dev/articles/howbrowserswork)
  - : 關於瀏覽器內部實作及 HTTP 通訊協定請求流程的一篇非常詳盡的文章。可以說是所有 Web 開發者都**必讀**的內容。
