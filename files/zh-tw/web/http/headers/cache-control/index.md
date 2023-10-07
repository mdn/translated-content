---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
---

{{HTTPSidebar}}

**`Cache-Control`** 標頭中的*指令*用來控制 HTTP 請求、回應的[快取](/zh-TW/docs/Web/HTTP/Caching)行為。HTTP 請求跟回應可以擁有不同的快取控制指令。

| Header type                                     | {{Glossary("General header")}} |
| ----------------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}}           | no                             |
| {{Glossary("CORS-safelisted response header")}} | yes                            |

## 語法

快取指令必須遵守這些規則：

- 大小寫沒差（但儘量用小寫）
- 指令之間用逗號（,）分開
- Some directives have an optional argument, which can be either a _token_ or a _quoted-string_. (See spec for definitions)

### 請求用指令

可以在 HTTP 請求中使用的標準 `Cache-Control` 指令

```http
Cache-Control: max-age=<秒數>
Cache-Control: max-stale[=<秒數>]
Cache-Control: min-fresh=<秒數>
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: only-if-cached
```

### 回應用指令

可以在 HTTP 回應中使用的標準 `Cache-Control` 指令

```http
Cache-Control: must-revalidate
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: public
Cache-Control: private
Cache-Control: proxy-revalidate
Cache-Control: max-age=<秒數>
Cache-Control: s-maxage=<秒數>
```

### 擴充 Cache-Control 指令

這些擴充的 `Cache-Control` 指令不是 HTTP 快取的核心標準。使用前請檢查[相容性](#browser_compatibility)，客戶端會直接忽略不支援的指令。

```http
Cache-Control: immutable
Cache-Control: stale-while-revalidate=<秒數>
Cache-Control: stale-if-error=<秒數>
```

## 指令

### 可快取性

這些指令定義 HTTP 請求/回應是否可以做快取、儲存在哪，以及使用前是否要跟後端伺服器做驗證

- `public`
  - : 此回應可以被*任何快取軟體*儲存起來，即使它本身通常是不可快取的。
- `private`
  - : 此回應只可以被*瀏覽器*儲存起來，即使它本身通常是不可快取的。**如果你真的不要任何快取軟體儲存你的回應，可以使用 `no-store` 。**_這個指令不是用來防止快取軟體儲存回應的。_
- `no-cache`
  - : 此回應可以被*任何快取軟體*儲存起來，即使它本身通常是不可快取的。不過，在使用儲存起來的 HTTP 回應之前，*必須*必須向後端伺服器做驗證，因此你不能拿 `no-cache` 跟 `immutable` 一起使用。**如果你真的不要任何快取軟體儲存你的回應，可以使用 `no-store` 。**_這個指令不是用來防止快取軟體儲存回應的。_
- `no-store`
  - : 此回應**不能**被*任何快取軟體*儲存起來。當然它無法防止 _先前儲存起來_ 的回應被回傳。客戶端可以用 `max-age=0` 來清除快取，並強制向後端伺服器做驗證。（其他指令跟 `no-store` 一起使用都無效）

### 過期

- `max-age=<秒數>`
  - : 快取有效的最大時間。跟 `Expires` 不一樣，這個指令是相對於請求當下的時間。
- `s-maxage=<秒數>`
  - : 覆寫 `max-age` 或者 `Expires` 標頭，不過只對共用快取軟體生效（比如 nginx）。私有快取會無視這個指令。
- `max-stale[=<秒數>]`
  - : 表示客戶端可以接受過期回應。可以宣告客戶端最多能接受過期多久。
- `min-fresh=<秒數>`
  - : 表示客戶端想要有效時間*至少*在指定秒數以上的回應。
- `stale-while-revalidate=<秒數>` {{Experimental_Inline}}
  - : 表示客戶端可以接受過期回應，但同時在背景檢查最新版本。*秒數*用來控制客戶端最多能接受過期多久。何時過期取決於 `max-age` 的值。想了解更多細節請到 "[Keeping things fresh with `stale-while-revalidate`](https://web.dev/stale-while-revalidate)" 。
- `stale-if-error=<秒數>` {{Experimental_Inline}}
  - : 表示客戶端會執行驗證，若驗證錯誤了就直接使用過期回應。*秒數*用來控制客戶端最多能接受過期多久。

### 驗證與重新讀取

- `must-revalidate`
  - : 表示一旦過期，必須向後端伺服器做[驗證](/zh-TW/docs/Web/HTTP/Caching#cache_validation)。
- `proxy-revalidate`
  - : 跟 `must-revalidate` 類似，不過只對共用快取軟體生效（比如 nginx）。私有快取會無視這個指令。
- `immutable`
  - : 表示回應內容**不會改變** 。這個資源*不會過期*，因此即使使用者手動重新整理頁面，客戶端也不會用驗證標頭 （比如 `If-None-Match` 或 `If-Modified-Since`）。 Clients that aren't aware of this extension must ignore them as per the HTTP specification. 在 Firefox 中， `immutable` 只有在使用 `https://` 時會生效。想知道更多資訊，可以閱讀[這篇文章](https://bitsup.blogspot.de/2016/05/cache-control-immutable.html)。

### 其他

- `no-transform`
  - : 位於中間的快取軟體或代理軟體不能修改回應內容、{{HTTPHeader("Content-Encoding")}}、{{HTTPHeader("Content-Range")}}、{{HTTPHeader("Content-Type")}}。因此它可能造成某些代理軟體或瀏覽器的功能失效，比如說 [Google's Web Light](https://support.google.com/webmasters/answer/6211428)可以替很慢的網路事先壓縮圖片。
- `only-if-cached`
  - : 由*客戶端*設定，表示不想經由網路得到回應。所以快取軟體可能會回傳先前儲存的回應，或者是 {{HTTPStatus("504")}} 狀態碼。使用驗證標頭如 `If-None-Match` 是沒有意義的。由伺服器在 HTTP 回應中設定 `only-if-cached` 指令也沒有意義。

## 範例

### 防止被快取

想要禁止快取一個資源，你可以在回應中設定這個標頭：

- Good

  - : `Cache-Control: no-store`

    > **這個:** `no-store` 指令使得回應再也不會被儲存，但它無法防止使用先前儲存、而且仍有效的快取。多設定 `max-age=0` 可以強制執行驗證（也就會清除既有快取）。

- Bad
  - : `Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate,pre-check=0,post-check=0`

### 快取靜態檔案

對於那些不會更新的檔案，你可以在回應中使用下列這個激進的標頭。比如說用在圖片、CSS 檔案，以及 JavaScript 檔案。附帶一提，也可以看看 `Expires` 標頭。

```plain
Cache-Control: public, max-age=604800, immutable
```

### 必須執行驗證

`no-cache`、`max-age=0, must-revalidate` 是同樣的意思。
表示客戶端可以儲存資源，但使用它前必須做驗證。這表示每次都會發生 HTTP 請求，不過只要沒過期就不用下載完整內容

```plain
Cache-Control: no-cache
```

```plain
Cache-Control: max-age=0, must-revalidate
```

**附帶一提**： 這個設定可以在伺服器掛掉的時候使用過期資源

<pre class="brush: http">Cache-Control: max-age=0</pre>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Caching FAQ](/zh-TW/docs/Web/HTTP/Caching)
- [Caching Tutorial for Web Authors and Webmasters](https://www.mnot.net/cache_docs/)
- Guide: _[`Cache-Control` for civilians](https://csswizardry.com/2019/03/cache-control-for-civilians)_
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}
