---
title: HTTP 回應狀態碼
slug: Web/HTTP/Status
l10n:
  sourceCommit: e39a9f516b1a994590c9bdf622b60244739060ad
---

{{HTTPSidebar}}

HTTP 回應狀態碼表示特定的 [HTTP](/zh-TW/docs/Web/HTTP) 請求是否已成功完成。回應分為五類：

1. [資訊回應](#資訊回應)（`100`——`199`）
2. [成功回應](#成功回應)（`200`——`299`）
3. [重新導向訊息](#重新導向訊息)（`300`——`399`）
4. [用戶端錯誤回應](#用戶端錯誤回應)（`400`——`499`）
5. [伺服器錯誤回應](#伺服器錯誤回應)（`500`——`599`）

以下的狀態碼由 [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) 定義。

> [!NOTE]
> 如果你收到的回應不在[此列表](#資訊回應)中，那麼它是一個非標準回應，可能是伺服器軟體的自定義回應。

## 資訊回應

- {{HTTPStatus(100, "100 Continue")}}
  - : 這個臨時回應表示用戶端應該繼續請求，或者如果請求已經完成，則忽略該回應。
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : 這個代碼是作為對來自用戶端的 {{HTTPHeader("Upgrade")}} 請求標頭的回應，並指示伺服器正在切換到的協議。
- {{HTTPStatus(102, "102 Processing")}}（{{Glossary("WebDAV")}}）
  - : 這個代碼表示伺服器已收到並正在處理請求，但還沒有可用的回應。
- {{HTTPStatus(103, "103 Early Hints")}}
  - : 這個狀態碼主要用於與 {{HTTPHeader("Link")}} 標頭一起使用，讓用戶代理在伺服器準備回應或者頁面需要從中獲取資源的原始來源時，開始[預加載](/zh-TW/docs/Web/HTML/Attributes/rel/preload)資源或者[預連接](/zh-TW/docs/Web/HTML/Attributes/rel/preconnect)。

## 成功回應

- {{HTTPStatus(200, "200 OK")}}

  - : 請求成功。「成功」的結果含義取決於 HTTP 方法：

    - `GET`：資源已被檢索並在訊息主體中傳送。
    - `HEAD`：回應中包含表示標頭，但沒有任何訊息主體。
    - `PUT` 或 `POST`：描述操作結果的資源在訊息主體中傳送。
    - `TRACE`：訊息主體包含了伺服器接收到的請求訊息。

- {{HTTPStatus(201, "201 Created")}}
  - : 請求成功，並因此創建了一個新的資源。這通常是在 `POST` 請求或某些 `PUT` 請求之後發送的回應。
- {{HTTPStatus(202, "202 Accepted")}}
  - : 已接收請求，但尚未對其進行處理。由於在 HTTP 中沒有後續發送表示請求結果的非同步回應的方法，因此此回應是非承諾性的。它適用於另一個處理請求的進程或伺服器，或用於批處理。
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : 此回應代碼表示返回的元資料與原始伺服器提供的資料不完全相同，而是從本地或第三方副本收集的。這主要用於另一個資源的鏡像或備份。除了這種特定情況外，`200 OK` 回應優先於此狀態。
- {{HTTPStatus(204, "204 No Content")}}
  - : 沒有內容可發送給此請求，但標頭可能很有用。用戶端可以使用新的標頭更新此資源的快取標頭。
- {{HTTPStatus(205, "205 Reset Content")}}
  - : 告訴用戶端重置發送此請求的文件。
- {{HTTPStatus(206, "206 Partial Content")}}
  - : 當從用戶端發送的 `Range` 標頭請求部分資源時，使用此回應代碼。
- {{HTTPStatus(207, "207 Multi-Status")}}（{{Glossary("WebDAV")}}）
  - : 傳達有關多個資源的資訊，適用於可能適用多個狀態碼的情況。
- {{HTTPStatus(208, "208 Already Reported")}}（{{Glossary("WebDAV")}}）
  - : 在 `<dav:propstat>` 回應元素中使用，以避免反復列舉對同一集合的多個綁定的內部成員。
- {{HTTPStatus(226, "226 IM Used")}}（[HTTP 增量編碼](https://datatracker.ietf.org/doc/html/rfc3229)）
  - : 伺服器已滿足對資源的 `GET` 請求，並且回應是對當前實例應用的一個或多個實例操作的結果的表示。

## 重新導向訊息

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : 該請求有多個可能的回應。用戶代理或用戶應該選擇其中一個。（沒有標準的選擇回應的方法，但建議使用 HTML 鏈接到這些可能性，以便用戶可以進行選擇。）
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : 所請求的資源的 URL 已永久更改。新的 URL 在回應中給出。
- {{HTTPStatus(302, "302 Found")}}
  - : 此回應代碼表示所請求的資源的 URI 已*暫時*更改。將來可能對 URI 進行進一步更改。因此，用戶端應在以後的請求中使用相同的 URI。
- {{HTTPStatus(303, "303 See Other")}}
  - : 伺服器發送此回應以指示用戶端使用 GET 請求在另一個 URI 獲取所請求的資源。
- {{HTTPStatus(304, "304 Not Modified")}}
  - : 這用於緩存目的。它告訴用戶端回應未被修改，因此用戶端可以繼續使用回應的相同緩存版本。
- `305 Use Proxy` {{deprecated_inline}}
  - : 在 HTTP 規範的先前版本中定義，表示必須通過代理訪問所請求的回應。由於關於代理的帶內設定的安全問題，它已被棄用。
- `306 unused`
  - : 此回應代碼不再使用；它只是保留的。它曾在 HTTP/1.1 規範的先前版本中使用過。
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : 伺服器發送此回應以指示用戶端使用在先前請求中使用的相同方法，在另一個 URI 獲取所請求的資源。這與 `302 Found` HTTP 回應代碼具有相同的語義，唯一的區別在於用戶代理*不能*改變使用的 HTTP 方法：如果在第一個請求中使用了 `POST`，則在第二個請求中必須使用 `POST`。
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : 這意味著資源現在永久位於另一個 URI，由 `Location:` HTTP 回應標頭指定。這與 `301 Moved Permanently` HTTP 回應代碼具有相同的語義，唯一的區別在於用戶代理*不能*改變使用的 HTTP 方法：如果在第一個請求中使用了 `POST`，則在第二個請求中必須使用 `POST`。

## 用戶端錯誤回應

- {{HTTPStatus(400, "400 Bad Request")}}
  - : 由於被認為是用戶端錯誤的原因（例如，錯誤的請求語法、無效的請求訊息框架或欺騙性的請求路由），伺服器無法或不會處理該請求。
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : 儘管 HTTP 標準指定為「未授權」，但從語義上講，此回應意味著「未經身份驗證」。也就是說，用戶端必須進行身份驗證才能獲取所請求的回應。
- {{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}
  - : 此回應代碼保留供將來使用。最初創建此代碼的目的是用於數位支付系統，但此狀態碼極少使用，且沒有標準約定存在。
- {{HTTPStatus(403, "403 Forbidden")}}
  - : 用戶端沒有訪問內容的權限；即未經授權，因此伺服器拒絕提供所請求的資源。與 `401 Unauthorized` 不同，伺服器已知道用戶端的身份。
- {{HTTPStatus(404, "404 Not Found")}}
  - : 伺服器找不到所請求的資源。在瀏覽器中，這意味著 URL 不被識別。在 API 中，這也可能表示端點是有效的，但資源本身不存在。伺服器可能會發送此回應代碼，而不是 `403 Forbidden`，以隱藏未經授權的用戶端的資源存在。
    由於其在網路上的頻繁出現，此回應代碼可能是最為人熟知的。
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : 伺服器知道請求方法，但不支援目標資源。例如，API 可能不允許調用 `DELETE` 來刪除資源。
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : 當網路伺服器在[伺服器驅動的內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation#server-driven_negotiation)後，找不到符合用戶代理給定標準的內容時，就會發送此回應。
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : 這與 `401 Unauthorized` 類似，但需要代理進行驗證。
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : 一些伺服器在閒置連接時發送此回應，即使用戶端之前沒有發送任何請求。這意味著伺服器希望關閉此未使用的連接。由於一些瀏覽器（如 Chrome、Firefox 27+ 或 IE9）使用 HTTP 預連接機制加快瀏覽速度，因此此回應用得更多。還要注意，一些伺服器僅關閉連接而不發送此消息。
- {{HTTPStatus(409, "409 Conflict")}}
  - : 當請求與伺服器的當前狀態存在衝突時，就會發送此回應。
- {{HTTPStatus(410, "410 Gone")}}
  - : 當所請求的內容已永久從伺服器中刪除且沒有轉發地址時，就會發送此回應。用戶端應該刪除其緩存和指向資源的鏈接。HTTP 規範打算將此狀態碼用於「有限時間的促銷服務」。API 不應感到有必要使用此狀態碼來指示已刪除的資源。
- {{HTTPStatus(411, "411 Length Required")}}
  - : 伺服器拒絕了請求，因為未定義 `Content-Length` 標頭欄位，而伺服器需要它。
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : 用戶端在其標頭中指示了伺服器未達到的前提條件。
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : 請求實體大於伺服器定義的限制。伺服器可能會關閉連接或返回 `Retry-After` 標頭欄位。
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : 用戶端所請求的 URI 長度超過伺服器願意解釋的範圍。
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : 所請求資料的媒體格式不受伺服器支援，因此伺服器拒絕該請求。
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : 請求中 `Range` 標頭欄位指定的範圍無法滿足。可能是目標 URI 的資料大小超出了範圍。
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : 此回應代碼意味著伺服器無法滿足 `Expect` 請求標頭欄位指示的期望。
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : 伺服器拒絕使用茶壺沖泡咖啡的嘗試。
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : 所發送的請求是針對無法產生回應的伺服器的。這可以由未配置為產生包含在請求 URI 中的方案和權限組合的回應的伺服器發送。
- {{HTTPStatus(422, "422 Unprocessable Content")}}（{{Glossary("WebDAV")}}）
  - : 請求格式良好，但由於語義錯誤而無法遵循。
- {{HTTPStatus(423, "423 Locked")}}（{{Glossary("WebDAV")}}）
  - : 正在訪問的資源被鎖定。
- {{HTTPStatus(424, "424 Failed Dependency")}}（{{Glossary("WebDAV")}}）
  - : 由於之前的請求失敗，請求失敗。
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : 表示伺服器不願冒險處理可能被重播的請求。
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : 伺服器拒絕使用當前協議執行請求，但在用戶端升級到不同協議後可能會願意這樣做。伺服器在 426 回應中使用 {{HTTPHeader("Upgrade")}} 標頭來指示所需的協議。
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : 原始伺服器需要請求具有條件。此回應旨在防止「丟失更新」問題，即當用戶端 `GET` 資源的狀態、修改它並將其 `PUT` 回伺服器時，同時第三方已在伺服器上修改了狀態，導致衝突。
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : 用戶在給定時間內發送了過多的請求（「速率限制」）。
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : 伺服器不願處理該請求，因為其標頭欄位太大。減小請求標頭欄位的大小後，可以重新提交請求。
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : 用戶代理請求無法合法提供的資源，例如被政府審查的網頁。

## 伺服器錯誤回應

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : 伺服器遇到一個它不知道如何處理的情況。
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : 伺服器不支援請求方法，無法處理。伺服器需要支援的唯一方法（因此不應返回此代碼）是 `GET` 和 `HEAD`。
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : 此錯誤回應表示，伺服器在作為閘道器以獲取處理請求所需的回應時，收到了無效的回應。
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : 伺服器尚未準備好處理該請求。常見原因是伺服器正在進行維護或負載過重。需要注意的是，除了此回應外，還應該發送一個用戶友好的頁面來解釋問題。此回應應該用於暫時的情況，並且如果可能，`Retry-After` HTTP 標頭應包含服務恢復之前的估計時間。網站管理員還必須注意與此回應一起發送的與緩存相關的標頭，因為這些暫時的狀態回應通常不應該被緩存。
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : 當伺服器充當閘道器且無法及時獲得回應時，將提供此錯誤回應。
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : 請求中使用的 HTTP 版本不受伺服器支援。
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : 伺服器存在內部配置錯誤：所選擇的變體資源被配置為自行參與透明內容協商，因此不是協商過程中的適當端點。
- {{HTTPStatus(507, "507 Insufficient Storage")}}（{{Glossary("WebDAV")}}）
  - : 由於伺服器無法存儲成功完成請求所需的表示，因此無法對資源執行該方法。
- {{HTTPStatus(508, "508 Loop Detected")}}（{{Glossary("WebDAV")}}）
  - : 伺服器在處理請求時檢測到無限循環。
- {{HTTPStatus(510, "510 Not Extended")}}
  - : 需要對請求進行進一步擴展，以便伺服器能夠完成它。
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : 表示用戶端需要進行身份驗證以獲取網路訪問。

## 瀏覽器相容性

{{Compat}}

## 參見

- [維基百科：HTTP 狀態碼列表](https://zh.wikipedia.org/wiki/HTTP状态码)
- [IANA 官方的 HTTP 狀態碼註冊](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
