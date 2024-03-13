---
title: HTTP 狀態碼
slug: Web/HTTP/Status
---

{{HTTPSidebar}}

HTTP 狀態碼表明一個 [HTTP](/zh-TW/docs/Web/HTTP) 要求是否已經被完成。回應分為五種：

1. 資訊回應 (Informational responses, `100`–`199`),
2. 成功回應 (Successful responses, `200`–`299`),
3. 重定向 (Redirects, `300`–`399`),
4. 用戶端錯誤 (Client errors, `400`–`499`),
5. 伺服器端錯誤 (Server errors, `500`–`599`).

以下的狀態碼定義在 [section 10 of RFC 2616](https://tools.ietf.org/html/rfc2616#section-10) 中。你可以在 [RFC 7231](https://tools.ietf.org/html/rfc7231#section-6.5.1) 查看更新過的規範。

> **備註：** 如果你收到任何不在清單內的回應，那很可能伺服器自行軟體實作的非標準規範。

## 資訊回應

- {{HTTPStatus(100, "100 Continue")}}
  - : 此臨時回應表明，目前為止的一切完好，而用戶端應當繼續完成請求、或是在已完成請求的情況下，忽略此資訊。
- {{HTTPStatus(101, "101 Switching Protocol")}}
  - : 此狀態碼乃為用戶端 {{HTTPHeader("Upgrade")}} 請求標頭發送之回應、且表明伺服器亦切換中。
- {{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV")}})
  - : 此狀態碼表明伺服器收到並處理請求中，但目前未有回應。
- {{HTTPStatus(103, "103 Early Hints")}}
  - : 此狀態碼主要與 {{HTTPHeader("Link")}} 標頭有關：它能讓用戶代理（user agent）能在伺服器準備回應前能 [preloading](/zh-TW/docs/Web/HTML/Preloading_content) 資源。

## 成功回應

- {{HTTPStatus(200, "200 OK")}}
  - : 請求成功。成功的意義依照 HTTP 方法而定：
    GET：資源成功獲取並於訊息主體中發送。
    HEAD：entity 標頭已於訊息主體中。
    POST：已傳送訊息主體中的 resource describing the result of the action。
    TRACE：伺服器已接收到訊息主體內含的請求訊息。
- {{HTTPStatus(201, "201 Created")}}
  - : 請求成功且新的資源成功被創建，通常用於 POST 或一些 PUT 請求後的回應。
- {{HTTPStatus(202, "202 Accepted")}}
  - : 此請求已經被接受但尚未處理。此狀態為非承諾性，代表 HTTP 無法在之後傳送一個非同步的回應告知請求的處理結果。最初目的為外部程序或其他伺服器處理請求的情況，或用於批次處理中。
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : 此回應碼表示回傳的中介資料集與並非與原始伺服器上的有效確定集合完全相同，而是來自本地或第三方的副本。除此情況外，200 OK 回應碼應該被優先使用。
- {{HTTPStatus(204, "204 No Content")}}
  - : There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : This response code is used because of range header sent by the client to separate download into multiple streams.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV")}})
  - : Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://tools.ietf.org/html/rfc3229))
  - : The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

## 重定向訊息

- {{HTTPStatus(300, "300 Multiple Choice")}}
  - : 請求擁有一個以上的回應。用戶代理或使用者應該從中選一。不過，並沒有標準的選擇方案。
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : 此回應碼的意思是，請求資源的 URI 已被改變。有時候，會在回應內給予新的 URI。
- {{HTTPStatus(302, "302 Found")}}
  - : This response code means that URI of requested resource has been changed _temporarily_. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
- {{HTTPStatus(303, "303 See Other")}}
  - : Server sent this response to directing client to get requested resource to another URI with an GET request.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
- `305 Use Proxy` {{deprecated_inline}}
  - : 在舊版本的 HTTP 規範中，表示請求資源必須透過代理存取。基於對代理的頻內設置 (in-band configuration) 相關的安全考量，該狀態碼已棄用。
- `306 unused`
  - : 該狀態碼已不再被使用，僅被保留。該狀態碼曾在先前得的 HTTP 1.1 規範中被使用。
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : 伺服器發送此回應來使客戶端保持請求方法不變向新的地址發出請求。 與 `302 Found` 相同，差別在於客戶端不許變更請求方法。例如，應使用另一個 `POST` 請求來重複發送 `POST` 請求。
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent _must not_ change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.

## 用戶端錯誤回應

- {{HTTPStatus(400, "400 Bad Request")}}
  - : 此回應意味伺服器因為收到無效語法，而無法理解請求。
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : 需要授權以回應請求。它有點像 403，但這裡的授權，是有可能辦到的。
- {{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}
  - : 此回應碼留作未來使用。一開始此碼旨在用於數位交易系統，然而，目前極少被使用，且不存在標準或慣例。
- {{HTTPStatus(403, "403 Forbidden")}}
  - : 用戶端並無訪問權限，例如未被授權，所以伺服器拒絕給予應有的回應。不同於 401，伺服端知道用戶端的身份。
- {{HTTPStatus(404, "404 Not Found")}}
  - : 伺服器找不到請求的資源。因為在網路上它很常出現，這回應碼也許最為人所悉。
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : 伺服器理解此請求方法，但它被禁用或不可用。有兩個強制性方法：`GET` 與 `HEAD`，永遠不該被禁止、也不該回傳此錯誤碼。
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : This response is sent when the web server, after performing [server-driven content negotiation](/zh-TW/docs/HTTP/Content_negotiation#Server-driven_negotiation), doesn't find any content following the criteria given by the user agent.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : 類似於 401，但需要被代理伺服器驗證。.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
- {{HTTPStatus(409, "409 Conflict")}}
  - : 表示請求與伺服器目前狀態衝突
- {{HTTPStatus(410, "410 Gone")}}
  - : 當伺服器已刪除請求的內容時會送出此回應。
- {{HTTPStatus(411, "411 Length Required")}}
  - : 伺服器拒絕該請求，因為 `Content-Length` 頭沒有被定義，然而伺服器要求。
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : The client has indicated preconditions in its headers which the server does not meet.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : 請求的實體資料大小超過了伺服器定義的上限，伺服器會關閉連接或返回一個 `Retry-After` 回應頭。
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : 客戶端的 URI 請求超過伺服器願意解析的長度。
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : 被請求資源的多媒體類型不被伺服器支援，因此該請求被拒絕。
- {{HTTPStatus(416, "416 Requested Range Not Satisfiable")}}
  - : The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : 此回應代表伺服器未能滿足請求標頭的`Expect`欄位所提出的期望回應。
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : The server refuses the attempt to brew coffee with a teapot.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
- {{HTTPStatus(422, "422 Unprocessable Entity")}} ({{Glossary("WebDAV")}})
  - : 請求格式正確，但有部分語意上的錯誤而無法執行請求。
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})
  - : 被訪問的資源被鎖定。
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})
  - : 由於先前的請求失敗導致此請求失敗。
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an {{HTTPHeader("Upgrade")}} header in a 426 response to indicate the required protocol(s).
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : 用戶在給定的時間內 ("rate limiting") 發送了過多的請求。
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : 伺服器不願意處理該請求，因為標頭欄位過大。該請求可能可以在減少請求標頭欄位大小後重新提交。
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : 用戶端請求違法的資源，例如受政府審查的網頁。

## 伺服器端錯誤回應

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : 伺服器端發生未知或無法處理的錯誤。
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : 伺服器不支援請求的方法，僅有`GET`與`HEAD`是伺服器必須支援的方法。
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : 作為閘道的伺服器，在獲取處理請求所需的回應時，得到無效回應。
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the `Retry-After:` HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : 伺服器作為閘道器時無法及時得到回應。
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : 請求使用的 HTTP 版本不被伺服器支援。
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.
- {{HTTPStatus(507, "507 Insufficient Storage")}}
  - : The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : 伺服器處理請求時偵測到無限迴圈。
- {{HTTPStatus(510, "510 Not Extended")}}
  - : 伺服器需要對請求做進一步的擴充才能完成請求。
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : 用戶需要經過認證才能取得網路存取權。

## 瀏覽器相容性

{{Compat}}

## 參見

- [List of HTTP status codes on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA official registry of HTTP status codes](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
- [HTTP Status Codes Cheat Sheet](https://www.exai.com/blog/http-status-codes-cheat-sheet)
- [A Complete Guide and List of HTTP Status Codes](https://kinsta.com/blog/http-status-codes/)
- [httpstatus – 檢查網址重定向路徑、請求標頭與 HTTP 狀態代碼](https://techmoon.xyz/httpstatus/)
