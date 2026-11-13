---
title: 103 Early Hints
slug: Web/HTTP/Reference/Status/103
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP **`103 Early Hints`** [資訊回應](/zh-TW/docs/Web/HTTP/Reference/Status#資訊回應)可能會在伺服器仍在準備回應時發送，提供有關伺服器預期的最終回應將連接到的站點和資源的提示。這允許瀏覽器在伺服器準備和發送最終回應之前進行[預連接](/zh-TW/docs/Web/HTML/Reference/Attributes/rel/preconnect)到站點或開始[預加載](/zh-TW/docs/Web/HTML/Reference/Attributes/rel/preload)資源。一旦收到早期提示，用戶端便會立刻擷取由其指出的預加載資源。

早期提示回應主要用於 {{HTTPHeader("Link")}} 標頭，指示該標頭要加載的資源。它還可以包含一個 [`Content-Security-Policy`](/zh-TW/docs/Web/HTTP/Guides/CSP) 標頭，在處理早期提示時強制執行。

伺服器可能會發送多個 `103` 回應，例如在重定向後。瀏覽器僅處理第一個早期提示回應，如果請求導致跨源重定向，則必須丟棄此回應。

> [!NOTE]
> 為了相容性與安全性原因，建議僅在 [HTTP/2 或更新版本中發送 HTTP `103 Early Hints` 回應](https://www.rfc-editor.org/rfc/rfc8297#section-3)，除非確知用戶端能正確處理資訊回應。
>
> 由於這個原因，大多數瀏覽器限制在 HTTP/2 或更高版本中提供支持。請參見下面的[瀏覽器相容性](#瀏覽器相容性)。儘管如此，以下範例依照通常的慣例使用了 HTTP/1.1 風格的表示法。

## 語法

```http
103 Early Hints
```

## 範例

### 預連接範例

下面的 `103` 早期提示回應顯示了一個早期提示回應，其中伺服器指示用戶端可能希望對特定來源（`https://cdn.example.com`）進行預連接。就像 HTML [`rel=preconnect`](/zh-TW/docs/Web/HTML/Reference/Attributes/rel/preconnect) 屬性一樣，這是一個提示，表明頁面可能需要目標資源來源的資源，並且瀏覽器可能通過預先啟動到該來源的連接來改善用戶體驗。

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

這個例子預連接到 `https://cdn.example.com` 兩次：

- 第一次連接將用於加載無需 CORS 的資源，例如圖像。
- 第二次連接包括 [`crossorigin`](/zh-TW/docs/Web/HTML/Reference/Attributes/crossorigin) 屬性，將用於加載 [CORS](/zh-TW/docs/Web/HTTP/Guides/CORS) 保護的資源，例如字型。

受 CORS 保護的資源必須通過完全獨立的連接進行提取。如果你只需要從來源獲取一類資源，則只需預先連接一次。

隨後伺服器發送最終回應。這包括跨源字體預加載和從附加來源加載的 `<img>`。

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="preload" href="https://cdn.example.com/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### 預加載範例

下面的 `103` 早期提示回應指示最終回應可能需要樣式表 `style.css`。

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

隨後伺服器發送最終回應。這包括指向樣式表的連接，該連接可能已經從早期提示中被預加載。

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### 包含 CSP 的早期提示回應

以下範例展示了相同的早期提示回應，但包含了 `Content-Security-Policy` 標頭。

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

早期回應將預加載限制在與請求相同的來源上。如果原始憑證匹配，則樣式表將被預加載。

最終回應可能將 CSP 設定為 `none`，如下所示。樣式表已被預加載，但在呈現頁面時將不會被使用。

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!doctype html>
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
- [跨來源資源共享（CORS）](/zh-TW/docs/Web/HTTP/Guides/CORS)
- [內容安全政策（CSP）](/zh-TW/docs/Web/HTTP/Guides/CSP)
- [`rel="preconnect"`](/zh-TW/docs/Web/HTML/Reference/Attributes/rel/preconnect)（{{htmlelement("link")}} 屬性）
- [`rel="preload"`](/zh-TW/docs/Web/HTML/Reference/Attributes/rel/preload)（{{htmlelement("link")}} 屬性）
- [`fetchpriority`](/zh-TW/docs/Web/HTML/Reference/Elements/link#fetchpriority)（{{htmlelement("link")}} 屬性）
- [早期提示更新：Cloudflare、Google 和 Shopify 如何共同努力為每個人建構更快的網際網路](https://blog.cloudflare.com/early-hints-performance/)（來自 Cloudflare 部落格）
