---
title: 103 Early Hints
slug: Web/HTTP/Status/103
page-type: http-status-code
browser-compat: http.status.103
---

{{HTTPSidebar}}

The HTTP **`103 Early Hints`** [information response](/en-US/docs/Web/HTTP/Status#information_responses) may be sent by a server while it is still preparing a response, with hints about the sites and resources that the server is expecting the final response will link.
This allows a browser to [preconnect](/en-US/docs/Web/HTML/Attributes/rel/preconnect) to sites or start [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload) resources even before the server has prepared and sent that final response.

HTTP **`103 Early Hints`** [資訊回應](/zh-TW/docs/Web/HTTP/Status#information_responses)可能在伺服器仍在準備回應時傳送，並包含有關伺服器預期最終回應將連結的網站和資源的提示。
讓瀏覽器可以在伺服器準備並傳送最終回應之前，[預先連接](/zh-TW/docs/Web/HTML/Attributes/rel/preconnect)網站或開始[預先載入](/zh-TW/docs/Web/HTML/Attributes/rel/preload)資源。

提前提示回應主要用於 {{HTTPHeader("Link")}} 標頭，指示了要載入的資源。
它可能也會包含在處理提前提示時強制執行的 [`Content-Security-Policy`](/zh-TW/docs/Web/HTTP/CSP) 標頭。

A server might send multiple `103` responses, for example, following a redirect.
Browsers only process the first early hint response, and this response must be discarded if the request results in a cross-origin redirect.
Preloaded resources from the early hint are effectively pre-pended to the `Document`'s head element, and then followed by the resources loaded in the final response.

伺服器可能會傳送多個 `103` 回應，例如在重新導向後。
瀏覽器僅會處理首個提前提示回應，如果要求導致跨源重新導向，則必須丟棄此回應。
提前提示的預先載入資源實際上是預先加入到 `Document` 的 head 元素中，然後是最終回應中載入的資源。

> **Note:** For compatibility reasons [it is recommended](https://www.rfc-editor.org/rfc/rfc8297#section-3) to only send HTTP `103 Early Hints` responses over HTTP/2 or later, unless the client is known to handle informational responses correctly.
>
> Most browsers limit support to HTTP/2 or later for this reason. See [browser compatibility](#browser_compatibility) below.
>
> Despite this, the examples below use HTTP/1.1-style notation as per usual convention.

## Syntax

```http
103 Early Hints
```

## 範例

### 預先連接範例

以下的 `103` 提前提示回應顯示了伺服器指示客戶端可以預先連接到特定來源 (`https://cdn.example.com`) 的情況。
如同 HTML 的 [`rel=preconnect`](/zh-TW/docs/Web/HTML/Attributes/rel/preconnect) 屬性，這在提示頁面可能需要來自目標資源來源的資源，並且瀏覽器可能可以預先啟動到該來源的連線來提升使用者體驗。

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

此範例會預先連接 `https://cdn.example.com` 兩次：

- 首次連線將用於載入無需 CORS 的資源，例如圖片。
- 第二次連線包含了 [`crossorigin`](/zh-TW/docs/Web/HTML/Attributes/crossorigin) 屬性，將用於載入受 [CORS](/zh-TW/docs/Web/HTTP/CORS) 保護的資源，例如字型。


受 CORS 保護的資源必須透過完全獨立的連線來擷取。如果你只需要從來源擷取一種類型的資源，則只需要預先連接一次。

接著伺服器會傳送最終回應。
包含一個預先載入的跨來源字型和從額外來源載入的 `<img>`。

```http
200 OK
Content-Type: text/html

<!DOCTYPE html>
...
<link rel="preload" href="https://cdn.example.com/fonts/myfont.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### 預先載入範例

以下的 `103` 提前提示表示最終回應可能會需要樣式表 `style.css`。

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Subsequently the server sends the final response.
This includes a link to the stylesheet, which may already have been preloaded from the early hint.

接著伺服器會傳送最終回應。
包含了樣式表連結，這個樣式表可能已經從提前提示中預先載入。

```http
200 OK
Content-Type: text/html

<!DOCTYPE html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Early hint response with CSP

The following example shows the same early hint response but with a `Content-Security-Policy` header included.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

The early response restricts preloading to the same origin as the request.
The stylesheet will preload if the origin matches.

The final response might set the CSP to `none`, as shown below.
The stylesheet has already preloaded, but will not be used when rendering the page.

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!DOCTYPE html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 參見

- {{HTTPHeader("Link")}}
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) from the CloudFlare blog
