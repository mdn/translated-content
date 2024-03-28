---
title: 103 Early Hints
slug: Web/HTTP/Status/103
---

{{HTTPSidebar}}

HTTP **`103 Early Hints`** [資訊回應](/zh-TW/docs/Web/HTTP/Status#information_responses)可能在伺服器仍在準備回應時傳送，並包含有關伺服器預期最終回應將連結的網站和資源的提示。
讓瀏覽器可以在伺服器準備並傳送最終回應之前，[預先連接](/zh-TW/docs/Web/HTML/Attributes/rel/preconnect)網站或開始[預先載入](/zh-TW/docs/Web/HTML/Attributes/rel/preload)資源。

提前提示回應主要用於 {{HTTPHeader("Link", "連結")}} 標頭，指示了要載入的資源。
它可能也會包含在處理提前提示時強制執行的 [`Content-Security-Policy`](/zh-TW/docs/Web/HTTP/CSP) 標頭。

伺服器可能會傳送多個 `103` 回應，例如在重新導向後。
瀏覽器僅會處理首個提前提示回應，如果要求導致跨源重新導向，則必須丟棄此回應。
提前提示的預先載入資源實際上是預先加入到 `Document` 的 head 元素中，然後才是最終回應中載入的資源。

> **附註：** 由於相容性原因，[建議](https://www.rfc-editor.org/rfc/rfc8297#section-3)僅在 HTTP/2 以上版本上傳送 HTTP `103 Early Hints` 回應，除非已知客戶端能正確處理資訊回應。
>
> 大多數瀏覽器因此限制支援到 HTTP/2 以上版本。請參閱下方的[瀏覽器相容性](#browser_compatibility)。
>
> 儘管如此，以下的範例依照慣例仍使用了 HTTP/1.1 樣式的表示法。

## 語法

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

接著伺服器會傳送最終回應。
包含了可能已經從提前提示中預先載入的樣式表連結。

```http
200 OK
Content-Type: text/html

<!DOCTYPE html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### 帶 CSP 的提前提示回應

以下是跟上一段一樣的提前提示，但包含了 `Content-Security-Policy` 標頭。

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

提前回應限制了只能預先載入與請求相同的來源。
如果來源相符，樣式表將會預先載入。

最終回應可能會將 CSP 設置為 `none`，如下所示。
樣式表已經預先載入，但在轉譯頁面時不會使用。

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!DOCTYPE html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Link")}}
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) from the CloudFlare blog
