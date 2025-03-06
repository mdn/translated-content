---
title: 跨來源資源共享（CORS）
slug: Web/HTTP/CORS
l10n:
  sourceCommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{HTTPSidebar}}

**跨來源資源共享**（{{Glossary("CORS")}}）是一種基於 {{Glossary("HTTP")}} 標頭的機制，允許伺服器指示瀏覽器允許從除其自身以外的任何{{glossary("origin", "來源")}}（域名、協定或通訊埠）加載資源。CORS 還依賴於瀏覽器向承載跨來源資源的伺服器發出「預檢」請求，以檢查伺服器是否允許實際請求。在預檢請求中，瀏覽器會發送標頭，指示將在實際請求中使用的 HTTP 方法和標頭。

一個跨來源請求的範例：從 `https://domain-a.com` 提供的前端 JavaScript 代碼使用 {{domxref("fetch()")}} 請求 `https://domain-b.com/data.json`。

出於安全原因，瀏覽器限制從腳本發起的跨來源 HTTP 請求。例如，`fetch()` 和 {{domxref("XMLHttpRequest")}} 遵循[同源政策](/zh-TW/docs/Web/Security/Same-origin_policy)。這意味著，使用這些 API 的 Web 應用程序只能請求與加載該應用程序的相同來源的資源，除非來自其他來源的回應包含正確的 CORS 標頭。

![CORS 機制示意圖](cors_principle.png)

CORS 機制支持瀏覽器和伺服器之間的安全跨來源請求和數據傳輸。瀏覽器在 `fetch()` 或 `XMLHttpRequest` 等 API 中使用 CORS 來降低跨來源 HTTP 請求的風險。

## 什麼請求使用 CORS？

這個[跨來源共享標準](https://fetch.spec.whatwg.org/#http-cors-protocol)可以啟用以下跨來源 HTTP 請求：

- 上述的 `fetch()` 或 `XMLHttpRequest` 的調用。
- Web 字體（在 CSS 中使用 `@font-face` 進行跨域字體使用），[以便伺服器可以部署僅允許跨來源加載並由被允許的網站使用的 TrueType 字體。](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL 紋理](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)。
- 使用 {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} 繪製到畫布上的圖像/影片幀。
- [從圖像生成的 CSS 形狀。](/zh-TW/docs/Web/CSS/CSS_shapes/Shapes_from_images)

這是一篇關於跨來源資源共享的通用文章，包含對必要 HTTP 標頭的討論。

## 功能概述

跨來源資源共享標準通過新增 [HTTP 標頭](/zh-TW/docs/Web/HTTP/Headers)來工作，這些標頭讓伺服器描述哪些來源被允許從 Web 瀏覽器讀取該訊息。此外，對於可能對伺服器數據產生副作用的 HTTP 請求方法（特別是 {{HTTPMethod("GET")}} 以外的 HTTP 方法，或具有特定 [MIME 類型](/zh-TW/docs/Web/HTTP/MIME_types)的 {{HTTPMethod("POST")}} 方法），規範要求瀏覽器「預檢」該請求，通過 HTTP {{HTTPMethod("OPTIONS")}} 請求方法向伺服器詢問支持的方法，然後在獲得伺服器「批准」後發送實際請求。伺服器還可以通知用戶端是否應該與請求一起發送「憑證」（例如 [Cookie](/zh-TW/docs/Web/HTTP/Cookies) 和 [HTTP 身份驗證](/zh-TW/docs/Web/HTTP/Authentication)）。

CORS 失敗會導致錯誤，但出於安全原因，關於錯誤的具體訊息對 JavaScript 是不可用的。代碼只知道發生了錯誤。確定具體錯誤的唯一方法是查看瀏覽器的控制台以獲取詳細訊息。

後續部分討論場景，並提供所使用的 HTTP 標頭的詳細說明。

## 訪問控制場景範例

我們展示了三個範例，說明跨來源資源共享的工作原理。所有這些範例都使用 {{domxref("fetch()")}}，它可以在任何支持的瀏覽器中發起跨來源請求。

### 簡單請求

某些請求不會觸發 {{Glossary("Preflight_request","CORS 預檢請求")}}。這些請求被稱為*簡單請求*，這個術語來自過時的 [CORS 規範](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology)，儘管現在定義 CORS 的 [Fetch 規範](https://fetch.spec.whatwg.org/)並未使用該術語。

這個概念的動機在於，來自 HTML 4.0 的 {{HTMLElement("form")}} 元素（早於跨站點 {{domxref("fetch()")}} 和 {{domxref("XMLHttpRequest")}}）可以向任何來源提交簡單請求，因此編寫伺服器的人必須已經防範{{Glossary("CSRF", "跨站請求偽造")}}（CSRF）。基於這個假設，伺服器不必通過回應預檢請求來選擇接收任何看起來像表單提交的請求，因為 CSRF 的威脅不會比表單提交更糟糕。然而，伺服器仍然必須通過使用 {{HTTPHeader("Access-Control-Allow-Origin")}} 來選擇*共享*回應與腳本。

*簡單請求*是指**符合以下所有條件的請求**：

- 使用以下允許的方法之一：

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- 除了由用戶代理自動設置的標頭（例如 {{HTTPHeader("Connection")}}、{{HTTPHeader("User-Agent")}} 或 [Fetch 規範中定義為*禁止標頭名稱*的其他標頭](https://fetch.spec.whatwg.org/#forbidden-header-name)）之外，唯一允許手動設置的標頭是 [Fetch 規範定義的 CORS 安全列表請求標頭](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)，這些標頭是：

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}}（請注意下方附加要求）
  - {{HTTPHeader("Range")}}（僅限於具有[簡單範圍標頭值](https://fetch.spec.whatwg.org/#simple-range-header-value) 的情況。例如，`bytes=256-` 或 `bytes=127-255`）

- {{HTTPHeader("Content-Type")}} 標頭中指定的唯一允許的類型／子類型組合是：

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- 如果請求是使用 {{domxref("XMLHttpRequest")}} 對象發出的，則在通過 {{domxref("XMLHttpRequest.upload")}} 屬性返回的對象上未註冊任何事件監聽器（即給定一個 {{domxref("XMLHttpRequest")}} 實例 `xhr`，沒有代碼調用 `xhr.upload.addEventListener()` 來添加事件監聽器以監控上傳）。
- 請求中不使用 {{domxref("ReadableStream")}} 對象。

> [!NOTE]
> WebKit Nightly 和 Safari Technology Preview 對 {{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Language")}} 和 {{HTTPHeader("Content-Language")}} 標頭中的值施加了額外的限制。如果這些標頭中的任何一個具有「非標準」值，WebKit/Safari 不會認為該請求是「簡單請求」。WebKit/Safari 認為「非標準」的值未在文檔中說明，除了以下 WebKit bug：
>
> - [對於非標準的 CORS 安全列表請求標頭 Accept、Accept-Language 和 Content-Language 要求進行預檢](https://webkit.org/b/165178)
> - [允許在簡單 CORS 請求中 Accept、Accept-Language 和 Content-Language 標頭中包含逗號](https://webkit.org/b/165566)
> - [在簡單 CORS 請求中對 Accept 標頭值使用黑名單模型](https://webkit.org/b/166363)
>
> 沒有其他瀏覽器實施這些額外的限制，因為它們不屬於該規範。

例如，假設 `https://foo.example` 上的 Web 內容希望從 `https://bar.other` 獲取 JSON 內容。以下代碼可能會在 `foo.example` 上部署的 JavaScript 中使用：

```js
const fetchPromise = fetch("https://bar.other");

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

這個操作使用 CORS 標頭在用戶端和伺服器之間進行簡單的交換，以處理權限：

![簡單 CORS GET 請求圖解](simple-req.png)

讓我們看看瀏覽器在這種情況下會發送給伺服器的內容：

```http
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
```

請求標頭中值得注意的是 {{HTTPHeader("Origin")}}，它表明請求來自 `https://foo.example`。

現在讓我們看看伺服器如何回應：

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[…XML 資料…]
```

在回應中，伺服器返回了一個帶有 `Access-Control-Allow-Origin: *` 的 {{HTTPHeader("Access-Control-Allow-Origin")}} 標頭，這意味著該資源可以被**任何**來源訪問。

```http
Access-Control-Allow-Origin: *
```

這種 {{HTTPHeader("Origin")}} 和 {{HTTPHeader("Access-Control-Allow-Origin")}} 標頭的模式是訪問控制協定的最簡單使用。如果 `https://bar.other` 的資源擁有者希望將資源的訪問限制為*僅*來自 `https://foo.example` 的請求（即除了 `https://foo.example` 之外的任何域名都不能以跨來源方式訪問資源），他們將發送：

```http
Access-Control-Allow-Origin: https://foo.example
```

> [!NOTE]
> 當回應[帶有憑證的請求](#requests_with_credentials)時，伺服器**必須**在 `Access-Control-Allow-Origin` 標頭的值中指定一個來源，而不是指定「`*`」通配符。

### 預檢請求

與[簡單請求](#簡單請求)不同，對於「預檢」請求，瀏覽器首先使用 {{HTTPMethod("OPTIONS")}} 方法向另一個來源的資源發送 HTTP 請求，以確定實際請求是否安全可發送。這類跨來源請求會進行預檢，因為它們可能對用戶數據產生影響。

下面是一個將會進行預檢的請求範例：

```js
const fetchPromise = fetch("https://bar.other/doc", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "text/xml",
    "X-PINGOTHER": "pingpong",
  },
  body: "<person><name>Arun</name></person>",
});

fetchPromise.then((response) => {
  console.log(response.status);
});
```

上面的範例創建了一個 XML 主體，並使用 `POST` 方法發送請求。同時，設置了一個非標準的 HTTP `X-PINGOTHER` 請求標頭。這樣的標頭不屬於 HTTP/1.1，但對於 web 應用程序來說通常是有用的。由於請求使用了 `text/xml` 的 `Content-Type`，並且設置了自定義標頭，這個請求需要進行預檢。

![進行預檢請求的圖解](preflight_correct.png)

> [!NOTE]
> 如下所述，實際的 `POST` 請求不包括 `Access-Control-Request-*` 標頭。它們僅在 `OPTIONS` 請求中需要。

讓我們看看用戶端和伺服器之間的完整交換。第一個交換是*預檢請求／回應*：

```http
OPTIONS /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother

HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

上述的第 1 至 10 行代表了使用 {{HTTPMethod("OPTIONS")}} 方法的預檢請求。瀏覽器根據上面 JavaScript 代碼片段使用的請求參數來確定需要發送這個請求，這樣伺服器就可以回應是否接受使用實際的請求參數發送請求。OPTIONS 是一個 HTTP/1.1 方法，用於從伺服器獲取更多訊息，是一個{{Glossary("Safe/HTTP", "安全")}}方法，意味著它不能用於更改資源。請注意，除了 OPTIONS 請求外，還發送了兩個其他請求標頭（分別是第 9 和第 10 行）：

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

{{HTTPHeader("Access-Control-Request-Method")}} 標頭作為預檢請求的一部分通知伺服器，當實際請求發送時，將使用 `POST` 請求方法。{{HTTPHeader("Access-Control-Request-Headers")}} 標頭通知伺服器，當實際請求發送時，將使用 `X-PINGOTHER` 和 `Content-Type` 自定義標頭。現在伺服器有機會確定是否可以在這些條件下接受請求。

上述的第 12 至 21 行是伺服器返回的回應，指示請求方法（`POST`）和請求標頭（`X-PINGOTHER`）是可接受的。讓我們仔細看一下第 15 至 18 行：

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

伺服器以 `Access-Control-Allow-Origin: https://foo.example` 回應，僅限於請求來源域。它還回應了 `Access-Control-Allow-Methods`，表示 `POST` 和 `GET` 是查詢所需資源的有效方法（此標頭類似於 {{HTTPHeader("Allow")}} 回應標頭，但在訪問控制的上下文中嚴格使用）。

伺服器還發送了帶有值「`X-PINGOTHER, Content-Type`」的 `Access-Control-Allow-Headers`，確認這些是允許與實際請求一起使用的標頭。像 `Access-Control-Allow-Methods` 一樣，`Access-Control-Allow-Headers` 是一個以逗號分隔的可接受標頭列表。

最後，{{HTTPHeader("Access-Control-Max-Age")}} 給出了預檢請求的回應可以在不發送另一個預檢請求的情況下緩存的秒數值。默認值為 5 秒。在本例中，最大年齡是 86400 秒（= 24 小時）。請注意，每個瀏覽器都有一個[最大內部值](/zh-TW/docs/Web/HTTP/Headers/Access-Control-Max-Age)，當 `Access-Control-Max-Age` 超過該值時，該值優先。

一旦預檢請求完成，真正的請求就會被發送：

```http
POST /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: https://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: https://foo.example
Pragma: no-cache
Cache-Control: no-cache

<person><name>Arun</name></person>

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Some XML payload]
```

#### 預檢請求和重定向

目前並非所有瀏覽器都支援在預檢請求後跟隨重定向。如果在此類請求之後發生了重定向，一些瀏覽器目前會報告類似以下的錯誤訊息：

> 該請求已被重定向到 `https://example.com/foo`，這對於需要預檢的跨源請求是不允許的。
> 請求需要預檢，不允許跟隨跨源重定向。

CORS 協定最初要求該行為，但[後來已更改為不再需要](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2)。然而，並非所有瀏覽器都實施了這一變更，因此仍然展示了最初要求的行為。

在瀏覽器跟上規範之前，你可以通過執行以下一項或兩項工作來解決此限制：

- 更改伺服器端的行為，以避免預檢和／或避免重定向
- 更改請求，使其成為一個[簡單請求](#簡單請求)，不引起預檢

如果這不可行，那麼另一種方法是：

1. 發送一個[簡單請求](#簡單請求)（使用 {{domxref("Response.url")}} 進行 Fetch API，或 {{domxref("XMLHttpRequest.responseURL")}}）來確定真正的預檢請求將到達的 URL。
2. 使用你在第一步中從 `Response.url` 或 `XMLHttpRequest.responseURL` 獲取的 URL 發送另一個請求（真正的請求）。

然而，如果該請求由於請求中存在 `Authorization` 標頭而觸發預檢，則你將無法使用上述步驟來解決此限制。除非你控制請求的伺服器，否則你將無法解決這個問題。

### 具有憑證的請求

> [!NOTE]
> 當對不同域進行帶憑證的請求時，仍將適用第三方 Cookie 政策。無論伺服器和用戶端的任何設置如本章所述，該政策始終會強制執行。

由 {{domxref("fetch()")}} 或 {{domxref("XMLHttpRequest")}} 和 CORS 公開的最有趣的功能是能夠發出「帶憑證」的請求，這些請求會考慮到 [HTTP cookies](/zh-TW/docs/Web/HTTP/Cookies) 和 HTTP 認證訊息。默認情況下，在跨源 `fetch()` 或 `XMLHttpRequest` 調用中，瀏覽器將*不*發送憑證。

要求 `fetch()` 請求包括憑證，請在 {{domxref("Request.Request()", "Request()")}} 構造函數中的 `credentials` 選項設置為 `"include"`。

要求 `XMLHttpRequest` 請求包括憑證，請將 {{domxref("XMLHttpRequest.withCredentials")}} 屬性設置為 `true`。

在此範例中，最初從 `https://foo.example` 載入的內容會向 `https://bar.other` 上的資源發出一個簡單的 GET 請求，該資源設置了 Cookies。foo.example 上的內容可能包含以下 JavaScript 代碼：

```js
const url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));
```

此代碼創建了一個 {{domxref("Request")}} 對象，並在構造函數中將 `credentials` 選項設置為 `"include"`，然後將此請求傳遞給 `fetch()`。由於這是一個簡單的 `GET` 請求，它不會被預檢，但瀏覽器將**拒絕**任何沒有 {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` 標頭的回應，並且**不會**使回應可用於調用的 Web 內容。

![帶有 Access-Control-Allow-Credentials 的簡單 GET 請求的示意圖](cred-req-updated.png)

這是用戶端和伺服器之間的一個樣本交換：

```http
GET /resources/credentialed-content/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: https://foo.example/examples/credential.html
Origin: https://foo.example
Cookie: pageAccess=2

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

[text/plain payload]
```

雖然第10行包含了為 `https://bar.other` 的內容準備的 Cookie，如果 `bar.other` 沒有回應 {{HTTPHeader("Access-Control-Allow-Credentials")}}: true`（第16行），則該回應將被忽略，不會提供給網頁內容。

#### 預檢請求與憑證

CORS 預檢請求絕不能包含憑證。預檢請求的*回應*必須指定 `Access-Control-Allow-Credentials: true` 以指示實際請求可以攜帶憑證。

> [!NOTE]
> 一些企業身份驗證服務要求在預檢請求中發送 TLS 用戶端憑證，這違反了[Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials) 規範。
>
> Firefox 87 允許通過將偏好設置 `network.cors_preflight.allow_client_cert` 設為 `true` 來啟用這種不合規行為（[Firefox bug 1511151](https://bugzil.la/1511151)）。基於 Chromium 的瀏覽器目前在 CORS 預檢請求中總是發送 TLS 用戶端憑證（[Chrome bug 775438](https://crbug.com/775438)）。

#### 憑證請求與通配符

在回應憑證請求時：

- 伺服器**不得**在 `Access-Control-Allow-Origin` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的來源，例如：`Access-Control-Allow-Origin: https://example.com`

- 伺服器**不得**在 `Access-Control-Allow-Headers` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的標頭名稱列表，例如：`Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`

- 伺服器**不得**在 `Access-Control-Allow-Methods` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的方法名稱列表，例如：`Access-Control-Allow-Methods: POST, GET`

- 伺服器**不得**在 `Access-Control-Expose-Headers` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的標頭名稱列表，例如：`Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

如果請求包含憑證（最常見的是 `Cookie` 頭）並且回應包含 `Access-Control-Allow-Origin: *` 頭（即使用通配符），瀏覽器將阻止訪問該回應，並在開發者工具控制台報告CORS錯誤。

但是，如果請求確實包含憑證（如 `Cookie` 頭）並且回應包含實際來源而不是通配符（例如，`Access-Control-Allow-Origin: https://example.com`），則瀏覽器將允許從指定來源訪問該回應。

還請注意，如果回應中的任何 `Set-Cookie` 回應標頭的 `Access-Control-Allow-Origin` 值是「`*`」通配符而不是實際來源，則該回應標頭將不會設置 cookie。

#### 第三方 Cookie

請注意，CORS 回應中設置的 Cookie 受到正常的第三方 Cookie 政策的約束。在上述範例中，頁面從 `foo.example` 加載，但第 19 行的 Cookie 是由 `bar.other` 發送的，如果用戶的瀏覽器配置為拒絕所有第三方 Cookie，則該 Cookie 將不會被保存。

在正常的第三方 Cookie 政策下，請求中的 Cookie（第 10 行）也可能被屏蔽。因此，強制執行的 Cookie 政策可能會使本章節中描述的功能無效，有效地阻止你進行攜帶憑證的請求。

關於 [SameSite](/zh-TW/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 屬性的 Cookie 政策將適用。

## HTTP 回應標頭

本節列出了根據跨來源資源共享規範定義的伺服器返回的訪問控制請求的 HTTP 回應標頭。上一節概述了這些在實際操作中的情況。

### Access-Control-Allow-Origin

返回的資源可能具有一個 {{HTTPHeader("Access-Control-Allow-Origin")}} 標頭，語法如下：

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` 指定單個來源，告訴瀏覽器允許該來源訪問資源；或者對於**不帶憑證**的請求，「`*`」通配符告訴瀏覽器允許任何來源訪問資源。

例如，要允許來自來源 `https://mozilla.org` 的代碼訪問資源，可以指定：

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

如果伺服器指定單個來源（這可能根據請求來源動態更改，作為允許名單的一部分）而不是「`*`」通配符，那麼伺服器還應在 {{HTTPHeader("Vary")}} 回應標頭中包含 `Origin`，以指示用戶端伺服器回應將根據 {{HTTPHeader("Origin")}} 請求標頭的值而有所不同。

### Access-Control-Expose-Headers

{{HTTPHeader("Access-Control-Expose-Headers")}} 標頭將指定的標頭添加到允許列表中，這些標頭可以被瀏覽器中的 JavaScript（如 {{domxref("Response.headers")}}）訪問。

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

例如，以下內容：

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

……將允許 `X-My-Custom-Header` 和 `X-Another-Custom-Header` 標頭暴露給瀏覽器。

### Access-Control-Max-Age

{{HTTPHeader("Access-Control-Max-Age")}} 標頭指示預檢請求的結果可以緩存多長時間。有關預檢請求的範例，請參見上面的範例。

```http
Access-Control-Max-Age: <delta-seconds>
```

`delta-seconds` 參數指示結果可以緩存的秒數。

### Access-Control-Allow-Credentials

{{HTTPHeader("Access-Control-Allow-Credentials")}} 標頭指示當 `credentials` 標誌為 true 時，請求的回應是否可以暴露。當作為對預檢請求的回應的一部分使用時，這指示實際請求是否可以使用憑證來進行。請注意，簡單的 `GET` 請求不需要預檢，因此如果對資源的請求使用了憑證，如果該頭未隨資源一起返回，則瀏覽器將忽略回應並不將其返回給網頁內容。

```http
Access-Control-Allow-Credentials: true
```

上面討論了[帶憑證的請求](#帶憑證的請求)。

### Access-Control-Allow-Methods

{{HTTPHeader("Access-Control-Allow-Methods")}} 標頭指定訪問資源時允許的方法。這在回應預檢請求時使用。請求需要預檢的條件在上面已經討論過。

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

上面給出了{{Glossary("preflight request", "預檢請求")}}的範例，包括向瀏覽器發送該頭的範例。

### Access-Control-Allow-Headers

{{HTTPHeader("Access-Control-Allow-Headers")}} 標頭用於回應{{Glossary("preflight request", "預檢請求")}}，指示在實際請求中可以使用哪些HTTP標頭。這個標頭是伺服器端對瀏覽器的 {{HTTPHeader("Access-Control-Request-Headers")}} 標頭的回應。

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## HTTP 請求標頭

本節列出了用戶端在發出 HTTP 請求時可以使用的標頭，以利用跨來源共享功能。請注意，這些標頭在調用伺服器時會為你設置。開發者在進行跨來源請求時無需以編程方式設置任何跨來源共享請求標頭。

### Origin

{{HTTPHeader("Origin")}} 標頭指示跨來源訪問請求或預檢請求的來源。

```http
Origin: <origin>
```

來源是一個 URL，指示發起請求的伺服器。它不包含任何路徑訊息，只有伺服器名稱。

> **備註：** `origin` 值可以是 `null`。

請注意，在任何訪問控制請求中，{{HTTPHeader("Origin")}} 標頭**始終**會被發送。

### Access-Control-Request-Method

{{HTTPHeader("Access-Control-Request-Method")}} 用於發出預檢請求時通知伺服器在實際請求中將使用的 HTTP 方法。

```http
Access-Control-Request-Method: <method>
```

此用法的範例可以[在上面找到](#預檢請求)。

### Access-Control-Request-Headers

{{HTTPHeader("Access-Control-Request-Headers")}} 標頭在發出預檢請求時使用，以通知伺服器在實際請求中將使用哪些 HTTP 標頭（例如，通過將它們作為 [`headers`](/zh-TW/docs/Web/API/Request/Request#headers) 選項傳遞給 {{domxref("Request.Request()", "Request()")}} 構造函數）。這個瀏覽器端的標頭將由對應的伺服器端標頭 {{HTTPHeader("Access-Control-Allow-Headers")}} 回應。

```http
Access-Control-Request-Headers: <field-name>[,<field-name>]*
```

此用法的範例可以[在上面找到](#預檢請求)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [CORS 錯誤](/zh-TW/docs/Web/HTTP/CORS/Errors)
- [啟用 CORS：我想為我的伺服器添加 CORS 支持](https://enable-cors.org/server.html)
- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
- {{domxref("XMLHttpRequest")}}
- [Will it CORS?](https://httptoolkit.com/will-it-cors/)——一個互動式的 CORS 解釋器和生成器
- [如何在沒有 CORS 的情況下運行 Chrome 瀏覽器](https://alfilatov.com/posts/run-chrome-without-cors/)
- [在所有（現代）瀏覽器中使用 CORS](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Stack Overflow 回答，包含處理常見問題的「操作方法」訊息](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - 如何避免 CORS 預檢
  - 如何使用 CORS 代理來繞過*「沒有Access-Control-Allow-Origin頭」*
  - 如何修復*「Access-Control-Allow-Origin頭不能是通配符」*
