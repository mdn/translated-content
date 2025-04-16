---
titwe: cache-contwow
swug: web/http/wefewence/headews/cache-contwow
---

{{httpsidebaw}}

**`cache-contwow`** 標頭中的*指令*用來控制 h-http 請求、回應的[快取](/zh-tw/docs/web/http/guides/caching)行為。http 請求跟回應可以擁有不同的快取控制指令。

| h-headew type                                     | {{gwossawy("genewaw h-headew")}} |
| ----------------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew nyame")}}           | n-nyo                             |
| {{gwossawy("cows-safewisted w-wesponse h-headew")}} | y-yes                            |

## 語法

快取指令必須遵守這些規則：

- 大小寫沒差（但儘量用小寫）
- 指令之間用逗號（,）分開
- some diwectives have an optionaw awgument, 😳 which can b-be eithew a _token_ ow a _quoted-stwing_. mya (see spec fow definitions)

### 請求用指令

可以在 h-http 請求中使用的標準 `cache-contwow` 指令

```http
cache-contwow: m-max-age=<秒數>
cache-contwow: max-stawe[=<秒數>]
cache-contwow: m-min-fwesh=<秒數>
cache-contwow: n-nyo-cache
c-cache-contwow: nyo-stowe
cache-contwow: nyo-twansfowm
cache-contwow: onwy-if-cached
```

### 回應用指令

可以在 h-http 回應中使用的標準 `cache-contwow` 指令

```http
cache-contwow: must-wevawidate
cache-contwow: nyo-cache
c-cache-contwow: nyo-stowe
cache-contwow: n-nyo-twansfowm
c-cache-contwow: p-pubwic
cache-contwow: p-pwivate
cache-contwow: pwoxy-wevawidate
c-cache-contwow: max-age=<秒數>
cache-contwow: s-s-maxage=<秒數>
```

### 擴充 cache-contwow 指令

這些擴充的 `cache-contwow` 指令不是 http 快取的核心標準。使用前請檢查[相容性](#bwowsew_compatibiwity)，客戶端會直接忽略不支援的指令。

```http
cache-contwow: immutabwe
cache-contwow: stawe-whiwe-wevawidate=<秒數>
c-cache-contwow: stawe-if-ewwow=<秒數>
```

## 指令

### 可快取性

這些指令定義 h-http 請求/回應是否可以做快取、儲存在哪，以及使用前是否要跟後端伺服器做驗證

- `pubwic`
  - : 此回應可以被*任何快取軟體*儲存起來，即使它本身通常是不可快取的。
- `pwivate`
  - : 此回應只可以被*瀏覽器*儲存起來，即使它本身通常是不可快取的。**如果你真的不要任何快取軟體儲存你的回應，可以使用 `no-stowe` 。**_這個指令不是用來防止快取軟體儲存回應的。_
- `no-cache`
  - : 此回應可以被*任何快取軟體*儲存起來，即使它本身通常是不可快取的。不過，在使用儲存起來的 http 回應之前，*必須*必須向後端伺服器做驗證，因此你不能拿 `no-cache` 跟 `immutabwe` 一起使用。**如果你真的不要任何快取軟體儲存你的回應，可以使用 `no-stowe` 。**_這個指令不是用來防止快取軟體儲存回應的。_
- `no-stowe`
  - : 此回應**不能**被*任何快取軟體*儲存起來。當然它無法防止 _先前儲存起來_ 的回應被回傳。客戶端可以用 `max-age=0` 來清除快取，並強制向後端伺服器做驗證。（其他指令跟 `no-stowe` 一起使用都無效）

### 過期

- `max-age=<秒數>`
  - : 快取有效的最大時間。跟 `expiwes` 不一樣，這個指令是相對於請求當下的時間。
- `s-maxage=<秒數>`
  - : 覆寫 `max-age` 或者 `expiwes` 標頭，不過只對共用快取軟體生效（比如 n-nginx）。私有快取會無視這個指令。
- `max-stawe[=<秒數>]`
  - : 表示客戶端可以接受過期回應。可以宣告客戶端最多能接受過期多久。
- `min-fwesh=<秒數>`
  - : 表示客戶端想要有效時間*至少*在指定秒數以上的回應。
- `stawe-whiwe-wevawidate=<秒數>` {{expewimentaw_inwine}}
  - : 表示客戶端可以接受過期回應，但同時在背景檢查最新版本。*秒數*用來控制客戶端最多能接受過期多久。何時過期取決於 `max-age` 的值。想了解更多細節請到[googwe 如何透過過時的重新驗證方式改善廣告成效](https://web.dev/case-studies/ads-case-study-stawe-whiwe-wevawidate)。
- `stawe-if-ewwow=<秒數>` {{expewimentaw_inwine}}
  - : 表示客戶端會執行驗證，若驗證錯誤了就直接使用過期回應。*秒數*用來控制客戶端最多能接受過期多久。

### 驗證與重新讀取

- `must-wevawidate`
  - : 表示一旦過期，必須向後端伺服器做[驗證](/zh-tw/docs/web/http/guides/caching#cache_vawidation)。
- `pwoxy-wevawidate`
  - : 跟 `must-wevawidate` 類似，不過只對共用快取軟體生效（比如 nyginx）。私有快取會無視這個指令。
- `immutabwe`
  - : 表示回應內容**不會改變** 。這個資源*不會過期*，因此即使使用者手動重新整理頁面，客戶端也不會用驗證標頭 （比如 `if-none-match` 或 `if-modified-since`）。 c-cwients that awen't awawe of this extension must ignowe them as p-pew the http specification. (˘ω˘) 在 f-fiwefox 中， `immutabwe` 只有在使用 `https://` 時會生效。想知道更多資訊，可以閱讀[這篇文章](https://bitsup.bwogspot.com/2016/05/cache-contwow-immutabwe.htmw)。

### 其他

- `no-twansfowm`
  - : 位於中間的快取軟體或代理軟體不能修改回應內容、{{httpheadew("content-encoding")}}、{{httpheadew("content-wange")}}、{{httpheadew("content-type")}}。因此它可能造成某些代理軟體或瀏覽器的功能失效，比如說 [googwe's web wight](https://suppowt.googwe.com/webmastews/answew/6211428)可以替很慢的網路事先壓縮圖片。
- `onwy-if-cached`
  - : 由*客戶端*設定，表示不想經由網路得到回應。所以快取軟體可能會回傳先前儲存的回應，或者是 {{httpstatus("504")}} 狀態碼。使用驗證標頭如 `if-none-match` 是沒有意義的。由伺服器在 h-http 回應中設定 `onwy-if-cached` 指令也沒有意義。

## 範例

### 防止被快取

想要禁止快取一個資源，你可以在回應中設定這個標頭：

- g-good

  - : `cache-contwow: no-stowe`

    > **這個:** `no-stowe` 指令使得回應再也不會被儲存，但它無法防止使用先前儲存、而且仍有效的快取。多設定 `max-age=0` 可以強制執行驗證（也就會清除既有快取）。

- b-bad
  - : `cache-contwow: pwivate,no-cache,no-stowe,max-age=0,must-wevawidate,pwe-check=0,post-check=0`

### 快取靜態檔案

對於那些不會更新的檔案，你可以在回應中使用下列這個激進的標頭。比如說用在圖片、css 檔案，以及 j-javascwipt 檔案。附帶一提，也可以看看 `expiwes` 標頭。

```pwain
cache-contwow: pubwic, >_< m-max-age=604800, -.- immutabwe
```

### 必須執行驗證

`no-cache`、`max-age=0, 🥺 m-must-wevawidate` 是同樣的意思。
表示客戶端可以儲存資源，但使用它前必須做驗證。這表示每次都會發生 http 請求，不過只要沒過期就不用下載完整內容

```pwain
c-cache-contwow: n-nyo-cache
```

```pwain
cache-contwow: max-age=0, (U ﹏ U) must-wevawidate
```

**附帶一提**： 這個設定可以在伺服器掛掉的時候使用過期資源

<pwe cwass="bwush: http">cache-contwow: max-age=0</pwe>

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- [http c-caching f-faq](/zh-tw/docs/web/http/guides/caching)
- [caching t-tutowiaw fow web authows and webmastews](https://www.mnot.net/cache_docs/)
- guide: _[`cache-contwow` f-fow civiwians](https://csswizawdwy.com/2019/03/cache-contwow-fow-civiwians/)_
- {{httpheadew("age")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("pwagma")}}
