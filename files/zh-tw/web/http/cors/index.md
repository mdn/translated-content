---
title: 跨來源資源共用（CORS）
slug: Web/HTTP/CORS
---

{{HTTPSidebar}}

跨來源資源共用（Cross-Origin Resource Sharing ({{Glossary("CORS")}})）是一種使用額外 {{Glossary("HTTP")}} 標頭令目前瀏覽網站的{{Glossary("user agent","使用者代理")}}取得存取其他來源（網域）伺服器特定資源權限的機制。當使用者代理請求一個不是目前文件來源——例如來自於不同網域（domain）、通訊協定（protocol）或通訊埠（port）的資源時，會建立一個**跨來源 HTTP 請求（cross-origin HTTP request）**。

舉個跨來源請求的例子：`http://domain-a.com` HTML 頁面裡面一個 [`<img>` 標籤的 `src` 屬性](/zh-TW/docs/Web/HTML/Element/Img#Attributes)載入來自 `http://domain-b.com/image.jpg` 的圖片。現今網路上許多頁面所載入的資源，如 CSS 樣式表、圖片影像、以及指令碼（script）都來自與所在位置分離的網域，如內容傳遞網路（content delivery networks, CDN）。

基於安全性考量，程式碼所發出的跨來源 HTTP 請求會受到限制。例如，{{domxref("XMLHttpRequest")}} 及 {{domxref("Fetch_API", "Fetch")}} 都遵守[同源政策（same-origin policy）](/zh-TW/docs/Web/Security/Same-origin_policy)。這代表網路應用程式所使用的 API 除非使用 CORS 標頭，否則只能請求與應用程式相同網域的 HTTP 資源。

![](cors_principle.png)

跨來源資源共用（Cross-Origin Resource Sharing，簡稱 {{Glossary("CORS")}}）機制提供了網頁伺服器跨網域的存取控制，增加跨網域資料傳輸的安全性。現代瀏覽器支援在 API 容器（如 {{domxref("XMLHttpRequest")}} 或 {{domxref("Fetch_API", "Fetch")}}）中使用 CORS 以降低跨來源 HTTP 請求的風險。

## 誰應該閱讀這篇文章？

認真講，所有人。

進一步來說，本文內容主要和網站管理員、伺服器端開發者和前端網頁開發者有關。現代瀏覽器會處理客戶端的跨來源共用元件，包括標頭和政策施定。關於伺服器部分請參閱[跨來源](/zh-TW/docs/Web/HTTP/Server-Side_Access_Control)共用[：從伺服器觀點出發（以 PHP 為範例）](/zh-TW/docs/Web/HTTP/Server-Side_Access_Control)的補充說明。

## 哪些請求會使用 CORS？

[跨來源資源](http://www.w3.org/TR/cors/)共用[標準](http://www.w3.org/TR/cors/)可用來開啟以下跨站 HTTP 請求：

- 使用 `XMLHttpRequest` 或 `Fetch API` 進行跨站請求，如前所述。
- 網頁字體（跨網域 CSS 的 `@font-face` 的字體用途），[所以伺服器可以佈署 TrueType 字體，並限制只讓信任的網站跨站載入](http://www.webfonts.info/wiki/index.php?title=%40font-face_support_in_Firefox)。
- [WebGL 紋理](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)。
- 以 [`drawImage`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/drawImage) 繪製到 Canvas 畫布上的圖形／影片之影格。
- CSS 樣式表（讓 [CSSOM](/zh-TW/docs/Web/CSS/CSSOM_view) 存取）。
- 指令碼（for unmuted exceptions）。

本文主要討論跨來源資源共用與相關必要的 HTTP 標頭。

## 功能總覽

跨來源資源共用標準的運作方式是藉由加入新的 [HTTP 標頭](/zh-TW/docs/Web/HTTP/Headers)讓伺服器能夠描述來源資訊以提供予瀏覽器讀取。另外，針對會造成副作用的 HTTP 請求方法（特別是 {{HTTPMethod("GET")}} 以外的 HTTP 方法，或搭配某些 [MIME types](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 的 {{HTTPMethod("POST")}} 方法），規範要求瀏覽器必須要請求傳送「預檢（preflight）」請求，以 HTTP 的 {{HTTPMethod("OPTIONS")}} 方法之請求從伺服器取得其支援的方法。當伺服器許可後，再傳送 HTTP 請求方法送出實際的請求。伺服器也可以通知客戶端是否要連同安全性資料（包括 [Cookies](/zh-TW/docs/Web/HTTP/Cookies) 和 HTTP 認證（Authentication）資料）一併隨請求送出。

之後的小節，我們將討論使用情境和相關的 HTTP 標頭。

## 存取控制情境範例

我們將在此展示三種情境，來說明跨來源資源共用如何運作。所有的範例都使用 {{domxref("XMLHttpRequest")}} 物件，`XMLHttpRequest` 可以讓任何支援的瀏覽器進行跨站請求。

本節的 JavaScript 程式碼片段（以及處理跨站請求的伺服器端程式運作實體）可以在 <http://arunranga.com/examples/access-control/> 看到，並可以運行在支援跨站 {{domxref("XMLHttpRequest")}} 請求的瀏覽器上。

對於伺服器端的跨來源資源共用討論（包含 PHP 範例）可參考[伺服器端存取控制](/zh-TW/docs/Web/HTTP/Server-Side_Access_Control)。

### 簡單請求

部分請求不會觸發 [CORS 預檢](#Preflighted_requests)。這類請求在本文中被稱作「簡單請求（simple requests）」，雖然 [Fetch](https://fetch.spec.whatwg.org/) 規範（其定義了 CORS）中並不使用這個述語。一個不觸發 [CORS 預檢](#Preflighted_requests)的請求——所謂的「簡單請求（simple requests）」——其滿足以下所有條件：

- 僅允許下列 HTTP 方法：

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- 除了 user agent 自動設定的標頭（例如 {{HTTPHeader("Connection")}}、{{HTTPHeader("User-Agent")}}，或是[任何請求規範［Fetch spec］中定義的「禁止使用的標頭名稱［forbidden header name］」](https://fetch.spec.whatwg.org/#forbidden-header-name)中的標頭）之外，僅可手動設定[這些於請求規格（Fetch spec）中定義為「CORS 安全列表請求標頭（CORS-safelisted request-header）」](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)的標頭，它們為：

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}}（但請注意下方的額外要求）
  - {{HTTPHeader("Last-Event-ID")}}
  - [`DPR`](http://httpwg.org/http-extensions/client-hints.html#dpr)
  - [`Save-Data`](http://httpwg.org/http-extensions/client-hints.html#save-data)
  - [`Viewport-Width`](http://httpwg.org/http-extensions/client-hints.html#viewport-width)
  - [`Width`](http://httpwg.org/http-extensions/client-hints.html#width)

- 僅允許以下 {{HTTPHeader("Content-Type")}} 標頭值：

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- 沒有事件監聽器被註冊到任何用來發出請求的 {{domxref("XMLHttpRequestUpload")}} 物件（經由 {{domxref("XMLHttpRequest.upload")}} 屬性取得）上。
- 請求中沒有 {{domxref("ReadableStream")}} 物件被用於上傳。

> **備註：** 雖然這些都是網頁目前已經可以送出的跨站請求，但除非伺服器回傳適當標頭，否則不會有資料回傳，因此不允許跨站請求的網站無須擔心會受到新的 HTTP 存取控制影響。

> **備註：** WebKit Nightly 與 Safari Technology Preview 對 {{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Language")}} 及 {{HTTPHeader("Content-Language")}} 標頭值加入了額外的限制。假如這三個標頭中有任一個擁有「非標準」值，WebKit／Safari 就不會將該請求視為「簡單請求」。WebKit／Safari 並沒有於文件中定義何者為「非標準」值，只有在以下 WebKit bugs 中討論：[Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://bugs.webkit.org/show_bug.cgi?id=165178)、[Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://bugs.webkit.org/show_bug.cgi?id=165566) 和 [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://bugs.webkit.org/show_bug.cgi?id=166363)。其它的瀏覽器沒有實作這些額外的限制，因為這並不是規範中的一部分。

例如，假設 `http://foo.example` 網域上的網頁內容想要呼叫 `http://bar.other` 網域內的內容，以下程式碼可能會在 foo.example 上執行：

```js
var invocation = new XMLHttpRequest();
var url = "http://bar.other/resources/public-data/";

function callOtherDomain() {
  if (invocation) {
    invocation.open("GET", url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

這將會在客戶端與伺服器端之間發起一個簡單的資料交換，並使用 CORS 相關標頭來處理權限：

![](simple-req.png)

我們來看看這個例子中瀏覽器將會送出什麼到伺服器，而伺服器又會如何回應：

```plain
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[XML Data]
```

第 1 - 10 行是送出的標頭。第 10 行之主要 HTTP 請求標頭中的 {{HTTPHeader("Origin")}} 標頭，它標示出請求是來自 `http://foo.example` 網域上的內容。

第 13 - 22 行是 `http://bar.other` 網域伺服器回傳的 HTTP 回應。第 16 行伺服器回傳了一個 {{HTTPHeader("Access-Control-Allow-Origin")}} 標頭，從 {{HTTPHeader("Origin")}} 標頭與 {{HTTPHeader("Access-Control-Allow-Origin")}} 標頭中可以看到存取控制協定最簡單的用途。這個例子中，伺服器回傳 `Access-Control-Allow-Origin: *` 表示允許**任何**網域跨站存取資源，倘若 `http://bar.other` 的資源擁有者只准許來自 `http://foo.example` 的存取資源請求，那麼將會回傳：

```plain
Access-Control-Allow-Origin: http://foo.example
```

如此一來，來源並非 `http://foo.example` 網域（由第 10 行請求標頭中的 ORIGIN 標頭確認）便無法以跨站的方式存取資源。`Access-Control-Allow-Origin` 標頭必須包含請求當中的 `Origin` 標頭值。

### 預檢請求

不同於上面討論「[簡單請求](#簡單請求)」的例子，「預檢（preflighted）」請求會先以 HTTP 的 OPTIONS 方法送出請求到另一個網域，確認後續實際（actual）請求是否可安全送出，由於跨站請求可能會攜帶使用者資料，所以要先進行預檢請求。

準確來說，如果滿足以下**任一項條件**時會發出預檢請求：

- **假如**請求方法為以下其中之一：

  - {{HTTPMethod("PUT")}}
  - {{HTTPMethod("DELETE")}}
  - {{HTTPMethod("CONNECT")}}
  - {{HTTPMethod("OPTIONS")}}
  - {{HTTPMethod("TRACE")}}
  - {{HTTPMethod("PATCH")}}

- **或是假如**除了 user agent 自動設定的標頭（例如 {{HTTPHeader("Connection")}}、{{HTTPHeader("User-Agent")}}，或是[任何請求規範［Fetch spec］中定義的「禁止使用的標頭名稱［forbidden header name］」](https://fetch.spec.whatwg.org/#forbidden-header-name)中的標頭）之外，請求中包含了任何除了[這些於請求規格（Fetch spec）中定義為「CORS 安全列表請求標頭（CORS-safelisted request-header）」](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)以外的標頭，具體如下：

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}}（但請注意下方的額外要求）
  - {{HTTPHeader("Last-Event-ID")}}
  - [`DPR`](http://httpwg.org/http-extensions/client-hints.html#dpr)
  - [`Save-Data`](http://httpwg.org/http-extensions/client-hints.html#save-data)
  - [`Viewport-Width`](http://httpwg.org/http-extensions/client-hints.html#viewport-width)
  - [`Width`](http://httpwg.org/http-extensions/client-hints.html#width)

- **或是假如** {{HTTPHeader("Content-Type")}} 標頭有除了下方所列出以外的值：

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- **或是假如**一或多個事件監聽器被註冊到一個用來發出請求的 {{domxref("XMLHttpRequestUpload")}} 物件上。
- **或是假如**請求中有一個 {{domxref("ReadableStream")}} 物件被於上傳。

> **備註：** WebKit Nightly 與 Safari Technology Preview 對 {{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Language")}} 及 {{HTTPHeader("Content-Language")}} 標頭值加入了額外的限制。假如這三個標頭中有任一個擁有「非標準」值，WebKit／Safari 便會傳送預檢請求。WebKit／Safari 並沒有於文件中定義何者為「非標準」值，只有在以下 WebKit bugs 中討論：[Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://bugs.webkit.org/show_bug.cgi?id=165178)、[Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://bugs.webkit.org/show_bug.cgi?id=165566) 和 [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://bugs.webkit.org/show_bug.cgi?id=166363)。其它的瀏覽器沒有實作這些額外的限制，因為這並不是規範中的一部分。

下面是一段會引起預檢請求的範例：

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = handler;
      invocation.send(body);
    }
}

......
```

在這個例子中，第 3 行建立了一段 XML 內容資料並於第 8 行使用 `POST` 請求送出。而在第 9 行，設定了一個自定義的（非標準）之 HTTP 請求標頭（`X-PINGOTHER: pingpong`）。此標頭並非 HTTP/1.1 通訊協定的一部分，但廣泛的使用於 Web 應用程式。而因為請求的 Content-type 為 `application/xml`，且設定了自定義標頭，故此請求為預檢請求。

![](preflight_correct.png)

我們來看看客戶端與伺服器端之間完整的交換資訊。第一次的交換為*預檢請求／回應*：

```plain
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

一旦預檢請求完成，真正的請求才會被送出：

```plain
POST /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: http://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: http://foo.example
Pragma: no-cache
Cache-Control: no-cache

<?xml version="1.0"?><person><name>Arun</name></person>


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Some GZIP'd payload]
```

第 1 - 12 行屬於 {{HTTPMethod("OPTIONS")}} 方法的預檢請求，瀏覽器依據前面的 JavaScript 程式碼決定送出預檢請求，好讓伺服器回應是否允許後續送出實際（actual）請求。OPTIONS 是一個 HTTP/1.1 方法，這個方法用來確認來自伺服器進一步的資訊，重複執行不會造成任何影響，為一{{Glossary("safe", "安全")}}方法，不會造成資源更動。除了 OPTIONS 方法，有另外兩個送出的請求標頭（分別在第 10 及 11 行）：

```plain
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

{{HTTPHeader("Access-Control-Request-Method")}} 標頭會告訴伺服器之後送出的實際（actual）請求會是 `POST` 方法。{{HTTPHeader("Access-Control-Request-Headers")}} 標頭則是通知伺服器實際（actual）請求會帶有一個自定義的 `X-PINGOTHER` 標頭。在這些資訊下，接著伺服器將會確定是否接受請求。

第 14 - 26 行屬於伺服器的回應，它說明了伺服器接受 `POST` 請求方法和 `X-PINGOTHER` 標頭。另外讓我們特別來看看 17 - 20 行：

```plain
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

伺服器回應中的 `Access-Control-Allow-Methods` 標頭表示伺服器可以接受 `POST`、`GET` 和 `OPTIONS` 方法。請注意此標頭和 {{HTTPHeader("Allow")}} 十分相似，但它只在存取控制範圍下才有意義。

伺服器也回傳了 `Access-Control-Allow-Headers` 標頭及其值「`X-PINGOTHER, Content-Type`」，表示伺服器允許在實際（actual）請求中使用以上這兩個標頭。與 `Access-Control-Allow-Methods` 相同，`Access-Control-Allow-Headers` 也是用逗號分隔可接受的標頭名稱。

最後，{{HTTPHeader("Access-Control-Max-Age")}} 提供了本次預檢請求回應所可以快取的秒數。在此範例中，86400 秒即為 24 小時。請留意每一個瀏覽器都有[預設的最大值](/zh-TW/docs/Web/HTTP/Headers/Access-Control-Max-Age)，當 `Access-Control-Max-Age` 較預設值大時會優先採用預設值。

#### 預檢請求和重新導向

目前大多瀏覽器不支援預檢請求時的重新導向，如果預檢請求進行中發生重新導向，目前大多的瀏覽器會回報類似以下的錯誤訊息。

> The request was redirected to 'https\://example.com/foo', which is disallowed for cross-origin requests that require preflight

> Request requires preflight, which is disallowed to follow cross-origin redirect

CORS 通訊協定最初要求此預檢請求重新導向的行為，但[在隨後的修訂中即改為不要求使用](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2)。然而，大多數的瀏覽器尚未實作此變動，且仍舊依照原本的行為要求。

因此直到瀏覽器趕上規範之前，你可以使用下列一或兩種方法來解決這個限制：

- 變更伺服器端的行為以避免預檢以及／或是避免重新導向——假如你對被請求的伺服擁有控制權
- 變更請求為[簡單請求](/zh-TW/docs/Web/HTTP/Access_control_CORS#Simple_requests)，讓預檢不會發生

但若難以實施以上方法，仍有其他可行的方式：

1. 建立一個[簡單請求](#Simple_requests)來測定（使用 Fetch API 的 [Response.url](/zh-TW/docs/Web/API/Response/url) 或 [XHR.responseURL](/zh-TW/docs/Web/API/XMLHttpRequest/responseURL) 來測定預檢請求最終真正導向的 URL）。
2. 建立另一個請求（「真正的」請求）傳送至第一步自 [Response.url](/zh-TW/docs/Web/API/Response/url) 或 [XHR.responseURL](/zh-TW/docs/Web/API/XMLHttpRequest/responseURL) 所獲得的 URL。

然而，假如請求是由於存在 `Authorization` 標頭而觸發預檢，便無法利用以上的步驟來解除限制。並且直到你對被請求的伺服擁有控制權前，沒有其他方式能夠解決。

### 附帶身分驗證的請求

{{domxref("XMLHttpRequest")}} 或 [Fetch](/zh-TW/docs/Web/API/Fetch_API) 在 CORS 中最有趣的功能為傳送基於 [HTTP cookies](/zh-TW/docs/Web/HTTP/Cookies) 和 HTTP 認證（Authentication）資訊的「身分驗證（credentialed）」請求。預設情況下，在跨站 {{domxref("XMLHttpRequest")}} 或 [Fetch](/zh-TW/docs/Web/API/Fetch_API) 呼叫時，瀏覽器**不會**送出身分驗證。必須要於 {{domxref("XMLHttpRequest")}} 物件中或是在呼叫 {{domxref("Request")}} 建構式時設置一個特定的旗標。

在這個範例中，一個來自 `http://foo.example` 的內容發出了一個簡單的 GET 去請求一個 `http://bar.other` 的資源，且該站會設定 Cookies。foo.example 的內容可能包含類似的 JavaScript：

```js
var invocation = new XMLHttpRequest();
var url = "http://bar.other/resources/credentialed-content/";

function callOtherDomain() {
  if (invocation) {
    invocation.open("GET", url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

第 7 行秀出了一個於 {{domxref("XMLHttpRequest")}} 中為了要搭配 Cookies 進行呼叫而必須設置的布林值旗標——`withCredentials`。在預設情況下，請求呼叫是不會有 Cookies 的。由於這是一個簡單 `GET` 請求，並不會進行預檢，但瀏覽器將會**拒絕**任何沒有 {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` 標頭值的回應，並且**不讓**呼叫的網站內容存取該回應。

![](cred-req-updated.png)

下面是一個簡單的客戶端與伺服器端之間的交換資訊：

```plain
GET /resources/access-control-with-credentials/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/credential.html
Origin: http://foo.example
Cookie: pageAccess=2


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2.0.61 (Unix) PHP/4.4.7 mod_ssl/2.0.61 OpenSSL/0.9.7e mod_fastcgi/2.4.2 DAV/2 SVN/1.4.2
X-Powered-By: PHP/5.2.6
Access-Control-Allow-Origin: http://foo.example
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

雖然第 11 行包含了預定要給予 `http://bar.other` 來取得資源內容的 Cookie，但假如 bar.other 沒有於回應中帶有 {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` 標頭值（第 19 行），則回應將會被乎略且不提供給網站內容使用。

#### 身分驗證請求與萬用字元

在回應一個身分驗證請求時，伺服器**必須**於 `Access-Control-Allow-Origin` 標頭值中指定一個來源，而不是使用「`*`」萬用字元（wildcard）。

上方範例的請求標頭中包含了一個 `Cookie` 標頭，若 `Access-Control-Allow-Origin` 標頭為「\*」，則請求將會失敗。範例中的 `Access-Control-Allow-Origin` 標頭值為「`http://foo.example`」（一個實際的來源）而不是「\*」萬用字元，所以身分驗證證明內容被回傳予呼叫的網站內容中。

請注意上面範例中的 `Set-Cookie` 回應標頭也設定了另一個 cookie。萬一失敗，會拋出一個錯誤（取決於所使用的 API）。

#### 第三方 cookies

請注意，在 CORS 回應中設定的 cookies 受制於一般的第三方 cookie 政策。在上面的範例中，頁面載入自 `foo.example`，但第 22 行的 cookie 為 `bar.other` 所傳送，因此如果使用者將其瀏覽器設定為拒絕所有第三方 cookies，則 cookies 不會被保存。

## HTTP 回應標頭

這個小節列出了伺服器回傳予取存控制請求之由跨來源資源共用規範所定義的 HTTP 回應標頭。上一節已提供了這些行為的概述。

### Access-Control-Allow-Origin

一個回應的資源可能擁有一個 {{HTTPHeader("Access-Control-Allow-Origin")}} 標頭，如以下的語法：

```plain
Access-Control-Allow-Origin: <origin> | *
```

`origin` 參數指定了一個可以存取資源的 URI。瀏覽器必定會執行此檢查。對一個**不帶有**身分驗證的請求，伺服器可以指定一個「\*」作為萬用字元（wildcard），從而允許任何來源存取資源。

舉例來說，要允許 `http://mozilla.org` 存取資源，你可以指定：

```plain
Access-Control-Allow-Origin: http://mozilla.org
```

如果伺服器指定了一個來源主機而不是「\*」，那也可能於不同回應的標頭中包含不同之來源，來向客戶端表示伺服器的回應會因請求標頭之 `Origin` 值而有所不同。

### Access-Control-Expose-Headers

{{HTTPHeader("Access-Control-Expose-Headers")}} 標頭表示伺服器允許瀏覽器存取回應標頭的白名單，如：

```plain
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

這允許了瀏覽器能夠存取回應當中的 `X-My-Custom-Header` 以及 `X-Another-Custom-Header` 標頭。

### Access-Control-Max-Age

{{HTTPHeader("Access-Control-Max-Age")}} 標頭表示了預檢請求的結果可以被快取多長的時間，請參考上面的範例。

```plain
Access-Control-Max-Age: <delta-seconds>
```

`delta-seconds` 參數代表預檢請求之結果可以被快取的秒數。

### Access-Control-Allow-Credentials

{{HTTPHeader("Access-Control-Allow-Credentials")}} 標頭表示了當請求的 `credentials` 旗標為真時，是否要回應該請求。當用在預檢請求的回應中，那就是指示後續的實際請求可否附帶身分驗證。請注意，由於簡單的 `GET` 請求沒有預檢，所以如果一個簡單請求帶有身分驗證，同時假設此標頭沒有與資源一併回傳，則回應會被瀏覽器所忽略並且不會回傳予呼叫的網站內容。

```plain
Access-Control-Allow-Credentials: true
```

[驗證請求](#Requests_with_credentials)在上面的討論當中。

### Access-Control-Allow-Methods

{{HTTPHeader("Access-Control-Allow-Methods")}} 標頭表示存取資源所允許的方法，用來回應預檢請求。上面已討論請求之預檢的條件。

```plain
Access-Control-Allow-Methods: <method>[, <method>]*
```

一個[預檢請求的範例已在上面提供](#Preflighted_requests)，其中包含了一個回傳此標頭予瀏覽器的例子。

### Access-Control-Allow-Headers

{{HTTPHeader("Access-Control-Allow-Headers")}} 標頭用在回傳予預檢請求的回應當中，以指定哪些 HTTP 標頭可以於實際請求中使用。

```plain
Access-Control-Allow-Headers: <field-name>[, <field-name>]*
```

## HTTP 請求標頭

這個小節列出了當客戶端為了跨來源資源共用而傳送 HTTP 請求時可能會使用到的標頭。請注意這些標頭為對伺服器呼叫時手動設定，開發者使用跨站 {{domxref("XMLHttpRequest")}} 時則不須於程式中設定任何的跨來源資源共用請求標頭。

### Origin

{{HTTPHeader("Origin")}} 標頭表示了跨站存取請求或預檢請求的來源。

```plain
Origin: <origin>
```

其值為一個告訴目標伺服器之請求傳送來源的 URI。並不含有任何路徑資訊，僅有伺服器名稱。

> **備註：** `origin` 標頭可設定為空字串；這對不是真實位置的情況來說相當有用，例如來源為一個 `data` URL 時。

請注意在任何存取控制請求中，{{HTTPHeader("Origin")}} 標頭**永遠**都要送出。

### Access-Control-Request-Method

{{HTTPHeader("Access-Control-Request-Method")}} 標頭用在發出的預檢請求中，告訴伺服器後續實際（actual）請求所用的 HTTP 方法。

```plain
Access-Control-Request-Method: <method>
```

此標頭的相關範例可參考[上方說明](#Preflighted_requests)。

### Access-Control-Request-Headers

{{HTTPHeader("Access-Control-Request-Headers")}} 標頭用在發出的預檢請求中，告訴伺服器端後續實際（actual）請求所帶的 HTTP 標頭。

```plain
Access-Control-Request-Headers: <field-name>[, <field-name>]*
```

此標頭的相關範例可參考[上方說明](#Preflighted_requests)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

### 相容性備註

- IE8 和 IE9 支援 CORS 透過 XDomainRequest 物件，IE10 開始則完全正常支援。
- Firefox 3.5 引進支援跨站 XMLHttpRequests 與 Web Fonts，較舊版本上某些請求會受到限制。Firefox 7 引進支援 WebGL 紋理的跨站 HTTP 請求，而 Firefox 9 新增支援使用 `drawImage` 方法將圖形繪製於 canvas 中。

## 參見

- [Code Samples Showing `XMLHttpRequest` and Cross-Origin Resource Sharing](http://arunranga.com/examples/access-control/)
- [Client-Side & Server-Side (Java) sample for Cross-Origin Resource Sharing (CORS)](https://github.com/jackblackevo/cors-jsonp-sample)
- [Cross-Origin Resource Sharing From a Server-Side Perspective (PHP, etc.)](/zh-TW/docs/Web/HTTP/Server-Side_Access_Control)
- [Cross-Origin Resource Sharing specification](http://www.w3.org/TR/cors/)
- {{domxref("XMLHttpRequest")}}
- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
- [Using CORS with All (Modern) Browsers](http://www.kendoui.com/blogs/teamblog/posts/11-10-03/using_cors_with_all_modern_browsers.aspx)
- [Using CORS - HTML5 Rocks](http://www.html5rocks.com/en/tutorials/cors/)
