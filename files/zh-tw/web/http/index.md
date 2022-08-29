---
title: HTTP
slug: Web/HTTP
---
{{HTTPSidebar}}

**超文本傳輸協定* (HTTP)*** 是一種用來傳輸超媒體文件 (像是 HTML 文件) 的[應用層](http://en.wikipedia.org/wiki/Application_Layer)協定，被設計來讓瀏覽器和伺服器進行溝通，但也可做其他用途。HTTP 遵循標準[客戶端—伺服器](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)模式，由客戶端連線以發送請求，然後等待接收回應。HTTP 是一種[無狀態協定](https://en.wikipedia.org/wiki/Stateless_protocol)，意思是伺服器不會保存任兩個請求間的任何資料 (狀態)。儘管作為 TCP/IP 的應用層，HTTP 亦可應用於其他可靠的[傳輸層](http://en.wikipedia.org/wiki/Transport_Layer) (例如 [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol))，只要不會無聲無息地遺失訊息即可。

## 教學

學習如何使用 HTTP 的指南和教程。

- [HTTP 的概觀](/zh-TW/docs/Web/HTTP/Overview)
  - : 基本特性：它能做什麼與它的用途
- [HTTP Cache](/zh-TW/docs/Web/HTTP/Caching)
  - : Cache 對網站速度很重要。 此文章描敘不同的方法使用 HTTP Header 控制它。
- [HTTP Cookies](/zh-TW/docs/Web/HTTP/Cookies)
  - : [RFC 6265](http://tools.ietf.org/html/rfc6265) 定義了 cookies 的工作方式，當 HTTP 請求一個服務時，一個伺服器可以發送一個`Set-Cookie`的 HTTP header 回應。客戶端將以 header 的方式回傳 cookie 值給每個請求的同 一個伺服器，Cookie 也會在某些時間進行更新，或是限制一個實體網域或路徑。
- [HTTP Access Control (CORS)](/zh-TW/docs/Web/HTTP/Access_control_CORS)
  - : **Cross-site HTTP requests** 是來自不同網域的資源請求。舉個例子，一個 HTML 網頁從網域 A (`http://domaina.example/`) 從網域 B(`http://domainb.foo/image.jpg`)請求一個圖片，經由`img`元件。現今的網頁通常會讀取跨站資源，包括 CSS 樣式表、圖片、腳本與其他資源。CORS 允許網頁開發人員的網站響應跨站讀取。
- [HTTP 的演化](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP 早期版本變化的簡要說明，到現在的 HTTP/2 與其他版本。
- [網頁安全方針](https://wiki.mozilla.org/Security/Guidelines/Web_Security)
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
  - : HTTP message headers are used to describe a resource, or the behavior of the server or the client. Custom proprietary headers can be added using the `X-` prefix; others in an [IANA registry](http://www.iana.org/assignments/message-headers/perm-headers.html), whose original content was defined in [RFC 4229](http://tools.ietf.org/html/rfc4229). IANA also maintains a [registry of proposed new HTTP message headers](http://www.iana.org/assignments/message-headers/prov-headers.html).
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
  - : 透過 HTTP 有幾種不同操作方法：{{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, and also less common requests like {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}}, or {{HTTPMethod("TRACE")}}.
- [HTTP 狀態回應碼](/zh-TW/docs/Web/HTTP/Response_codes)
  - : HTTP response codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes: informational responses, successful responses, redirections, client errors, and servers errors.
- [CSP directives](/zh-TW/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : The {{HTTPHeader("Content-Security-Policy")}} response header fields allows web site administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints.

## 工具與資源

Helpful tools and resources for understanding and debugging HTTP.

- [Firefox Developer Tools](/zh-TW/docs/Tools)
  - : [Network monitor](/zh-TW/docs/Tools/Network_Monitor)
- [Mozilla Observatory](https://observatory.mozilla.org/)
  - : A project designed to help developers, system administrators, and security professionals configure their sites safely and securely.
- [RedBot](https://redbot.org/)
  - : Tools to check your cache-related headers
- [How Browsers Work](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
  - : A very comprehensive article on browser internals and request flow through HTTP protocol. A MUST-READ for any web developer.
