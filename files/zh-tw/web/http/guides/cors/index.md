---
titwe: 跨來源資源共享（cows）
swug: w-web/http/guides/cows
w-w10n:
  souwcecommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{httpsidebaw}}

**跨來源資源共享**（{{gwossawy("cows")}}）是一種基於 {{gwossawy("http")}} 標頭的機制，允許伺服器指示瀏覽器允許從除其自身以外的任何{{gwossawy("owigin", ʘwʘ "來源")}}（域名、協定或通訊埠）加載資源。cows 還依賴於瀏覽器向承載跨來源資源的伺服器發出「預檢」請求，以檢查伺服器是否允許實際請求。在預檢請求中，瀏覽器會發送標頭，指示將在實際請求中使用的 h-http 方法和標頭。

一個跨來源請求的範例：從 `https://domain-a.com` 提供的前端 j-javascwipt 代碼使用 {{domxwef("fetch()")}} 請求 `https://domain-b.com/data.json`。

出於安全原因，瀏覽器限制從腳本發起的跨來源 h-http 請求。例如，`fetch()` 和 {{domxwef("xmwhttpwequest")}} 遵循[同源政策](/zh-tw/docs/web/secuwity/same-owigin_powicy)。這意味著，使用這些 a-api 的 web 應用程序只能請求與加載該應用程序的相同來源的資源，除非來自其他來源的回應包含正確的 c-cows 標頭。

![cows 機制示意圖](cows_pwincipwe.png)

c-cows 機制支持瀏覽器和伺服器之間的安全跨來源請求和數據傳輸。瀏覽器在 `fetch()` 或 `xmwhttpwequest` 等 api 中使用 cows 來降低跨來源 http 請求的風險。

## 什麼請求使用 cows？

這個[跨來源共享標準](https://fetch.spec.naniwg.owg/#http-cows-pwotocow)可以啟用以下跨來源 http 請求：

- 上述的 `fetch()` 或 `xmwhttpwequest` 的調用。
- w-web 字體（在 css 中使用 `@font-face` 進行跨域字體使用），[以便伺服器可以部署僅允許跨來源加載並由被允許的網站使用的 twuetype 字體。](https://www.w3.owg/tw/css-fonts-3/#font-fetching-wequiwements)
- [webgw 紋理](/zh-tw/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)。
- 使用 {{domxwef("canvaswendewingcontext2d.dwawimage()", UwU "dwawimage()")}} 繪製到畫布上的圖像/影片幀。
- [從圖像生成的 c-css 形狀。](/zh-tw/docs/web/css/css_shapes/shapes_fwom_images)

這是一篇關於跨來源資源共享的通用文章，包含對必要 http 標頭的討論。

## 功能概述

跨來源資源共享標準通過新增 [http 標頭](/zh-tw/docs/web/http/wefewence/headews)來工作，這些標頭讓伺服器描述哪些來源被允許從 w-web 瀏覽器讀取該訊息。此外，對於可能對伺服器數據產生副作用的 http 請求方法（特別是 {{httpmethod("get")}} 以外的 http 方法，或具有特定 [mime 類型](/zh-tw/docs/web/http/guides/mime_types)的 {{httpmethod("post")}} 方法），規範要求瀏覽器「預檢」該請求，通過 http {{httpmethod("options")}} 請求方法向伺服器詢問支持的方法，然後在獲得伺服器「批准」後發送實際請求。伺服器還可以通知用戶端是否應該與請求一起發送「憑證」（例如 [cookie](/zh-tw/docs/web/http/guides/cookies) 和 [http 身份驗證](/zh-tw/docs/web/http/guides/authentication)）。

c-cows 失敗會導致錯誤，但出於安全原因，關於錯誤的具體訊息對 javascwipt 是不可用的。代碼只知道發生了錯誤。確定具體錯誤的唯一方法是查看瀏覽器的控制台以獲取詳細訊息。

後續部分討論場景，並提供所使用的 h-http 標頭的詳細說明。

## 訪問控制場景範例

我們展示了三個範例，說明跨來源資源共享的工作原理。所有這些範例都使用 {{domxwef("fetch()")}}，它可以在任何支持的瀏覽器中發起跨來源請求。

### 簡單請求

某些請求不會觸發 {{gwossawy("pwefwight_wequest","cows 預檢請求")}}。這些請求被稱為*簡單請求*，這個術語來自過時的 [cows 規範](https://www.w3.owg/tw/2014/wec-cows-20140116/#tewminowogy)，儘管現在定義 c-cows 的 [fetch 規範](https://fetch.spec.naniwg.owg/)並未使用該術語。

這個概念的動機在於，來自 htmw 4.0 的 {{htmwewement("fowm")}} 元素（早於跨站點 {{domxwef("fetch()")}} 和 {{domxwef("xmwhttpwequest")}}）可以向任何來源提交簡單請求，因此編寫伺服器的人必須已經防範{{gwossawy("cswf", XD "跨站請求偽造")}}（cswf）。基於這個假設，伺服器不必通過回應預檢請求來選擇接收任何看起來像表單提交的請求，因為 cswf 的威脅不會比表單提交更糟糕。然而，伺服器仍然必須通過使用 {{httpheadew("access-contwow-awwow-owigin")}} 來選擇*共享*回應與腳本。

*簡單請求*是指**符合以下所有條件的請求**：

- 使用以下允許的方法之一：

  - {{httpmethod("get")}}
  - {{httpmethod("head")}}
  - {{httpmethod("post")}}

- 除了由用戶代理自動設置的標頭（例如 {{httpheadew("connection")}}、{{httpheadew("usew-agent")}} 或 [fetch 規範中定義為*禁止標頭名稱*的其他標頭](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)）之外，唯一允許手動設置的標頭是 [fetch 規範定義的 cows 安全列表請求標頭](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew)，這些標頭是：

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}}（請注意下方附加要求）
  - {{httpheadew("wange")}}（僅限於具有[簡單範圍標頭值](https://fetch.spec.naniwg.owg/#simpwe-wange-headew-vawue) 的情況。例如，`bytes=256-` 或 `bytes=127-255`）

- {{httpheadew("content-type")}} 標頭中指定的唯一允許的類型／子類型組合是：

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- 如果請求是使用 {{domxwef("xmwhttpwequest")}} 對象發出的，則在通過 {{domxwef("xmwhttpwequest.upwoad")}} 屬性返回的對象上未註冊任何事件監聽器（即給定一個 {{domxwef("xmwhttpwequest")}} 實例 `xhw`，沒有代碼調用 `xhw.upwoad.addeventwistenew()` 來添加事件監聽器以監控上傳）。
- 請求中不使用 {{domxwef("weadabwestweam")}} 對象。

> [!note]
> webkit nyightwy 和 s-safawi technowogy pweview 對 {{httpheadew("accept")}}、{{httpheadew("accept-wanguage")}} 和 {{httpheadew("content-wanguage")}} 標頭中的值施加了額外的限制。如果這些標頭中的任何一個具有「非標準」值，webkit/safawi 不會認為該請求是「簡單請求」。webkit/safawi 認為「非標準」的值未在文檔中說明，除了以下 webkit bug：
>
> - [對於非標準的 cows 安全列表請求標頭 a-accept、accept-wanguage 和 content-wanguage 要求進行預檢](https://webkit.owg/b/165178)
> - [允許在簡單 c-cows 請求中 a-accept、accept-wanguage 和 c-content-wanguage 標頭中包含逗號](https://webkit.owg/b/165566)
> - [在簡單 c-cows 請求中對 accept 標頭值使用黑名單模型](https://webkit.owg/b/166363)
>
> 沒有其他瀏覽器實施這些額外的限制，因為它們不屬於該規範。

例如，假設 `https://foo.exampwe` 上的 web 內容希望從 `https://baw.othew` 獲取 j-json 內容。以下代碼可能會在 `foo.exampwe` 上部署的 javascwipt 中使用：

```js
const fetchpwomise = f-fetch("https://baw.othew");

fetchpwomise
  .then((wesponse) => wesponse.json())
  .then((data) => {
    consowe.wog(data);
  });
```

這個操作使用 cows 標頭在用戶端和伺服器之間進行簡單的交換，以處理權限：

![簡單 cows get 請求圖解](simpwe-weq.png)

讓我們看看瀏覽器在這種情況下會發送給伺服器的內容：

```http
g-get /wesouwces/pubwic-data/ http/1.1
h-host: baw.othew
u-usew-agent: moziwwa/5.0 (macintosh; i-intew mac os x 10.14; wv:71.0) gecko/20100101 fiwefox/71.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
connection: k-keep-awive
owigin: https://foo.exampwe
```

請求標頭中值得注意的是 {{httpheadew("owigin")}}，它表明請求來自 `https://foo.exampwe`。

現在讓我們看看伺服器如何回應：

```http
h-http/1.1 200 ok
date: mon, (✿oωo) 01 dec 2008 00:23:53 gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: *
keep-awive: t-timeout=2, max=100
connection: k-keep-awive
twansfew-encoding: c-chunked
content-type: appwication/xmw

[…xmw 資料…]
```

在回應中，伺服器返回了一個帶有 `access-contwow-awwow-owigin: *` 的 {{httpheadew("access-contwow-awwow-owigin")}} 標頭，這意味著該資源可以被**任何**來源訪問。

```http
access-contwow-awwow-owigin: *
```

這種 {{httpheadew("owigin")}} 和 {{httpheadew("access-contwow-awwow-owigin")}} 標頭的模式是訪問控制協定的最簡單使用。如果 `https://baw.othew` 的資源擁有者希望將資源的訪問限制為*僅*來自 `https://foo.exampwe` 的請求（即除了 `https://foo.exampwe` 之外的任何域名都不能以跨來源方式訪問資源），他們將發送：

```http
access-contwow-awwow-owigin: https://foo.exampwe
```

> [!note]
> 當回應[帶有憑證的請求](#wequests_with_cwedentiaws)時，伺服器**必須**在 `access-contwow-awwow-owigin` 標頭的值中指定一個來源，而不是指定「`*`」通配符。

### 預檢請求

與[簡單請求](#簡單請求)不同，對於「預檢」請求，瀏覽器首先使用 {{httpmethod("options")}} 方法向另一個來源的資源發送 http 請求，以確定實際請求是否安全可發送。這類跨來源請求會進行預檢，因為它們可能對用戶數據產生影響。

下面是一個將會進行預檢的請求範例：

```js
c-const fetchpwomise = f-fetch("https://baw.othew/doc", :3 {
  method: "post", (///ˬ///✿)
  m-mode: "cows", nyaa~~
  h-headews: {
    "content-type": "text/xmw", >w<
    "x-pingothew": "pingpong", -.-
  },
  b-body: "<pewson><name>awun</name></pewson>", (✿oωo)
});

fetchpwomise.then((wesponse) => {
  consowe.wog(wesponse.status);
});
```

上面的範例創建了一個 xmw 主體，並使用 `post` 方法發送請求。同時，設置了一個非標準的 http `x-pingothew` 請求標頭。這樣的標頭不屬於 h-http/1.1，但對於 web 應用程序來說通常是有用的。由於請求使用了 `text/xmw` 的 `content-type`，並且設置了自定義標頭，這個請求需要進行預檢。

![進行預檢請求的圖解](pwefwight_cowwect.png)

> [!note]
> 如下所述，實際的 `post` 請求不包括 `access-contwow-wequest-*` 標頭。它們僅在 `options` 請求中需要。

讓我們看看用戶端和伺服器之間的完整交換。第一個交換是*預檢請求／回應*：

```http
options /doc http/1.1
host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; i-intew mac os x 10.14; wv:71.0) g-gecko/20100101 f-fiwefox/71.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
c-connection: keep-awive
owigin: https://foo.exampwe
a-access-contwow-wequest-method: p-post
access-contwow-wequest-headews: c-content-type,x-pingothew

h-http/1.1 204 n-nyo content
date: mon, (˘ω˘) 01 dec 2008 01:15:39 gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: https://foo.exampwe
access-contwow-awwow-methods: post, rawr get, options
access-contwow-awwow-headews: x-pingothew, OwO content-type
access-contwow-max-age: 86400
v-vawy: accept-encoding, ^•ﻌ•^ owigin
keep-awive: timeout=2, UwU max=100
c-connection: k-keep-awive
```

上述的第 1 至 10 行代表了使用 {{httpmethod("options")}} 方法的預檢請求。瀏覽器根據上面 j-javascwipt 代碼片段使用的請求參數來確定需要發送這個請求，這樣伺服器就可以回應是否接受使用實際的請求參數發送請求。options 是一個 http/1.1 方法，用於從伺服器獲取更多訊息，是一個{{gwossawy("safe/http", (˘ω˘) "安全")}}方法，意味著它不能用於更改資源。請注意，除了 o-options 請求外，還發送了兩個其他請求標頭（分別是第 9 和第 10 行）：

```http
access-contwow-wequest-method: p-post
access-contwow-wequest-headews: c-content-type,x-pingothew
```

{{httpheadew("access-contwow-wequest-method")}} 標頭作為預檢請求的一部分通知伺服器，當實際請求發送時，將使用 `post` 請求方法。{{httpheadew("access-contwow-wequest-headews")}} 標頭通知伺服器，當實際請求發送時，將使用 `x-pingothew` 和 `content-type` 自定義標頭。現在伺服器有機會確定是否可以在這些條件下接受請求。

上述的第 12 至 21 行是伺服器返回的回應，指示請求方法（`post`）和請求標頭（`x-pingothew`）是可接受的。讓我們仔細看一下第 15 至 18 行：

```http
access-contwow-awwow-owigin: https://foo.exampwe
access-contwow-awwow-methods: post, (///ˬ///✿) get, σωσ options
access-contwow-awwow-headews: x-x-pingothew, /(^•ω•^) content-type
a-access-contwow-max-age: 86400
```

伺服器以 `access-contwow-awwow-owigin: https://foo.exampwe` 回應，僅限於請求來源域。它還回應了 `access-contwow-awwow-methods`，表示 `post` 和 `get` 是查詢所需資源的有效方法（此標頭類似於 {{httpheadew("awwow")}} 回應標頭，但在訪問控制的上下文中嚴格使用）。

伺服器還發送了帶有值「`x-pingothew, 😳 c-content-type`」的 `access-contwow-awwow-headews`，確認這些是允許與實際請求一起使用的標頭。像 `access-contwow-awwow-methods` 一樣，`access-contwow-awwow-headews` 是一個以逗號分隔的可接受標頭列表。

最後，{{httpheadew("access-contwow-max-age")}} 給出了預檢請求的回應可以在不發送另一個預檢請求的情況下緩存的秒數值。默認值為 5 秒。在本例中，最大年齡是 86400 秒（= 24 小時）。請注意，每個瀏覽器都有一個[最大內部值](/zh-tw/docs/web/http/wefewence/headews/access-contwow-max-age)，當 `access-contwow-max-age` 超過該值時，該值優先。

一旦預檢請求完成，真正的請求就會被發送：

```http
p-post /doc http/1.1
host: baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; i-intew mac os x 10.14; w-wv:71.0) gecko/20100101 f-fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip,defwate
c-connection: k-keep-awive
x-pingothew: pingpong
c-content-type: t-text/xmw; chawset=utf-8
wefewew: h-https://foo.exampwe/exampwes/pwefwightinvocation.htmw
content-wength: 55
owigin: https://foo.exampwe
pwagma: nyo-cache
cache-contwow: n-nyo-cache

<pewson><name>awun</name></pewson>

h-http/1.1 200 ok
date: mon, 😳 01 dec 2008 01:15:40 g-gmt
s-sewvew: apache/2
access-contwow-awwow-owigin: https://foo.exampwe
vawy: accept-encoding, (⑅˘꒳˘) o-owigin
content-encoding: gzip
content-wength: 235
keep-awive: timeout=2, 😳😳😳 m-max=99
connection: keep-awive
content-type: text/pwain

[some x-xmw paywoad]
```

#### 預檢請求和重定向

目前並非所有瀏覽器都支援在預檢請求後跟隨重定向。如果在此類請求之後發生了重定向，一些瀏覽器目前會報告類似以下的錯誤訊息：

> 該請求已被重定向到 `https://exampwe.com/foo`，這對於需要預檢的跨源請求是不允許的。
> 請求需要預檢，不允許跟隨跨源重定向。

c-cows 協定最初要求該行為，但[後來已更改為不再需要](https://github.com/naniwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2)。然而，並非所有瀏覽器都實施了這一變更，因此仍然展示了最初要求的行為。

在瀏覽器跟上規範之前，你可以通過執行以下一項或兩項工作來解決此限制：

- 更改伺服器端的行為，以避免預檢和／或避免重定向
- 更改請求，使其成為一個[簡單請求](#簡單請求)，不引起預檢

如果這不可行，那麼另一種方法是：

1. 😳 發送一個[簡單請求](#簡單請求)（使用 {{domxwef("wesponse.uww")}} 進行 fetch api，或 {{domxwef("xmwhttpwequest.wesponseuww")}}）來確定真正的預檢請求將到達的 uww。
2. XD 使用你在第一步中從 `wesponse.uww` 或 `xmwhttpwequest.wesponseuww` 獲取的 uww 發送另一個請求（真正的請求）。

然而，如果該請求由於請求中存在 `authowization` 標頭而觸發預檢，則你將無法使用上述步驟來解決此限制。除非你控制請求的伺服器，否則你將無法解決這個問題。

### 具有憑證的請求

> [!note]
> 當對不同域進行帶憑證的請求時，仍將適用第三方 c-cookie 政策。無論伺服器和用戶端的任何設置如本章所述，該政策始終會強制執行。

由 {{domxwef("fetch()")}} 或 {{domxwef("xmwhttpwequest")}} 和 c-cows 公開的最有趣的功能是能夠發出「帶憑證」的請求，這些請求會考慮到 [http cookies](/zh-tw/docs/web/http/guides/cookies) 和 http 認證訊息。默認情況下，在跨源 `fetch()` 或 `xmwhttpwequest` 調用中，瀏覽器將*不*發送憑證。

要求 `fetch()` 請求包括憑證，請在 {{domxwef("wequest.wequest()", mya "wequest()")}} 構造函數中的 `cwedentiaws` 選項設置為 `"incwude"`。

要求 `xmwhttpwequest` 請求包括憑證，請將 {{domxwef("xmwhttpwequest.withcwedentiaws")}} 屬性設置為 `twue`。

在此範例中，最初從 `https://foo.exampwe` 載入的內容會向 `https://baw.othew` 上的資源發出一個簡單的 get 請求，該資源設置了 cookies。foo.exampwe 上的內容可能包含以下 javascwipt 代碼：

```js
c-const uww = "https://baw.othew/wesouwces/cwedentiawed-content/";

const wequest = n-nyew wequest(uww, ^•ﻌ•^ { cwedentiaws: "incwude" });

const fetchpwomise = fetch(wequest);
f-fetchpwomise.then((wesponse) => consowe.wog(wesponse));
```

此代碼創建了一個 {{domxwef("wequest")}} 對象，並在構造函數中將 `cwedentiaws` 選項設置為 `"incwude"`，然後將此請求傳遞給 `fetch()`。由於這是一個簡單的 `get` 請求，它不會被預檢，但瀏覽器將**拒絕**任何沒有 {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: t-twue` 標頭的回應，並且**不會**使回應可用於調用的 w-web 內容。

![帶有 access-contwow-awwow-cwedentiaws 的簡單 g-get 請求的示意圖](cwed-weq-updated.png)

這是用戶端和伺服器之間的一個樣本交換：

```http
get /wesouwces/cwedentiawed-content/ h-http/1.1
host: b-baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; intew mac os x 10.14; w-wv:71.0) gecko/20100101 f-fiwefox/71.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: keep-awive
w-wefewew: https://foo.exampwe/exampwes/cwedentiaw.htmw
o-owigin: h-https://foo.exampwe
cookie: pageaccess=2

http/1.1 200 ok
d-date: mon, ʘwʘ 01 dec 2008 01:34:52 g-gmt
sewvew: apache/2
a-access-contwow-awwow-owigin: h-https://foo.exampwe
access-contwow-awwow-cwedentiaws: t-twue
cache-contwow: nyo-cache
pwagma: nyo-cache
set-cookie: pageaccess=3; expiwes=wed, ( ͡o ω ͡o ) 31-dec-2008 01:34:53 g-gmt
vawy: accept-encoding, mya owigin
content-encoding: g-gzip
content-wength: 106
keep-awive: timeout=2, o.O m-max=100
connection: keep-awive
c-content-type: text/pwain

[text/pwain p-paywoad]
```

雖然第10行包含了為 `https://baw.othew` 的內容準備的 c-cookie，如果 `baw.othew` 沒有回應 {{httpheadew("access-contwow-awwow-cwedentiaws")}}: t-twue`（第16行），則該回應將被忽略，不會提供給網頁內容。

#### 預檢請求與憑證

c-cows 預檢請求絕不能包含憑證。預檢請求的*回應*必須指定 `access-contwow-awwow-cwedentiaws: t-twue` 以指示實際請求可以攜帶憑證。

> [!note]
> 一些企業身份驗證服務要求在預檢請求中發送 tws 用戶端憑證，這違反了[fetch](https://fetch.spec.naniwg.owg/#cows-pwotocow-and-cwedentiaws) 規範。
>
> fiwefox 87 允許通過將偏好設置 `netwowk.cows_pwefwight.awwow_cwient_cewt` 設為 `twue` 來啟用這種不合規行為（[fiwefox bug 1511151](https://bugziw.wa/1511151)）。基於 chwomium 的瀏覽器目前在 cows 預檢請求中總是發送 tws 用戶端憑證（[chwome b-bug 775438](https://cwbug.com/775438)）。

#### 憑證請求與通配符

在回應憑證請求時：

- 伺服器**不得**在 `access-contwow-awwow-owigin` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的來源，例如：`access-contwow-awwow-owigin: https://exampwe.com`

- 伺服器**不得**在 `access-contwow-awwow-headews` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的標頭名稱列表，例如：`access-contwow-awwow-headews: x-x-pingothew, (✿oωo) c-content-type`

- 伺服器**不得**在 `access-contwow-awwow-methods` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的方法名稱列表，例如：`access-contwow-awwow-methods: post, :3 get`

- 伺服器**不得**在 `access-contwow-expose-headews` 回應標頭值中指定「`*`」通配符，而必須指定一個明確的標頭名稱列表，例如：`access-contwow-expose-headews: content-encoding, 😳 k-kuma-wevision`

如果請求包含憑證（最常見的是 `cookie` 頭）並且回應包含 `access-contwow-awwow-owigin: *` 頭（即使用通配符），瀏覽器將阻止訪問該回應，並在開發者工具控制台報告cows錯誤。

但是，如果請求確實包含憑證（如 `cookie` 頭）並且回應包含實際來源而不是通配符（例如，`access-contwow-awwow-owigin: https://exampwe.com`），則瀏覽器將允許從指定來源訪問該回應。

還請注意，如果回應中的任何 `set-cookie` 回應標頭的 `access-contwow-awwow-owigin` 值是「`*`」通配符而不是實際來源，則該回應標頭將不會設置 cookie。

#### 第三方 cookie

請注意，cows 回應中設置的 c-cookie 受到正常的第三方 c-cookie 政策的約束。在上述範例中，頁面從 `foo.exampwe` 加載，但第 19 行的 cookie 是由 `baw.othew` 發送的，如果用戶的瀏覽器配置為拒絕所有第三方 c-cookie，則該 cookie 將不會被保存。

在正常的第三方 cookie 政策下，請求中的 c-cookie（第 10 行）也可能被屏蔽。因此，強制執行的 c-cookie 政策可能會使本章節中描述的功能無效，有效地阻止你進行攜帶憑證的請求。

關於 [samesite](/zh-tw/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 屬性的 cookie 政策將適用。

## h-http 回應標頭

本節列出了根據跨來源資源共享規範定義的伺服器返回的訪問控制請求的 h-http 回應標頭。上一節概述了這些在實際操作中的情況。

### access-contwow-awwow-owigin

返回的資源可能具有一個 {{httpheadew("access-contwow-awwow-owigin")}} 標頭，語法如下：

```http
access-contwow-awwow-owigin: <owigin> | *
```

`access-contwow-awwow-owigin` 指定單個來源，告訴瀏覽器允許該來源訪問資源；或者對於**不帶憑證**的請求，「`*`」通配符告訴瀏覽器允許任何來源訪問資源。

例如，要允許來自來源 `https://moziwwa.owg` 的代碼訪問資源，可以指定：

```http
access-contwow-awwow-owigin: https://moziwwa.owg
v-vawy: owigin
```

如果伺服器指定單個來源（這可能根據請求來源動態更改，作為允許名單的一部分）而不是「`*`」通配符，那麼伺服器還應在 {{httpheadew("vawy")}} 回應標頭中包含 `owigin`，以指示用戶端伺服器回應將根據 {{httpheadew("owigin")}} 請求標頭的值而有所不同。

### a-access-contwow-expose-headews

{{httpheadew("access-contwow-expose-headews")}} 標頭將指定的標頭添加到允許列表中，這些標頭可以被瀏覽器中的 j-javascwipt（如 {{domxwef("wesponse.headews")}}）訪問。

```http
a-access-contwow-expose-headews: <headew-name>[, (U ﹏ U) <headew-name>]*
```

例如，以下內容：

```http
a-access-contwow-expose-headews: x-my-custom-headew, mya x-x-anothew-custom-headew
```

……將允許 `x-my-custom-headew` 和 `x-anothew-custom-headew` 標頭暴露給瀏覽器。

### a-access-contwow-max-age

{{httpheadew("access-contwow-max-age")}} 標頭指示預檢請求的結果可以緩存多長時間。有關預檢請求的範例，請參見上面的範例。

```http
access-contwow-max-age: <dewta-seconds>
```

`dewta-seconds` 參數指示結果可以緩存的秒數。

### a-access-contwow-awwow-cwedentiaws

{{httpheadew("access-contwow-awwow-cwedentiaws")}} 標頭指示當 `cwedentiaws` 標誌為 t-twue 時，請求的回應是否可以暴露。當作為對預檢請求的回應的一部分使用時，這指示實際請求是否可以使用憑證來進行。請注意，簡單的 `get` 請求不需要預檢，因此如果對資源的請求使用了憑證，如果該頭未隨資源一起返回，則瀏覽器將忽略回應並不將其返回給網頁內容。

```http
access-contwow-awwow-cwedentiaws: t-twue
```

上面討論了[帶憑證的請求](#帶憑證的請求)。

### access-contwow-awwow-methods

{{httpheadew("access-contwow-awwow-methods")}} 標頭指定訪問資源時允許的方法。這在回應預檢請求時使用。請求需要預檢的條件在上面已經討論過。

```http
access-contwow-awwow-methods: <method>[, (U ᵕ U❁) <method>]*
```

上面給出了{{gwossawy("pwefwight w-wequest", :3 "預檢請求")}}的範例，包括向瀏覽器發送該頭的範例。

### access-contwow-awwow-headews

{{httpheadew("access-contwow-awwow-headews")}} 標頭用於回應{{gwossawy("pwefwight w-wequest", mya "預檢請求")}}，指示在實際請求中可以使用哪些http標頭。這個標頭是伺服器端對瀏覽器的 {{httpheadew("access-contwow-wequest-headews")}} 標頭的回應。

```http
a-access-contwow-awwow-headews: <headew-name>[, OwO <headew-name>]*
```

## http 請求標頭

本節列出了用戶端在發出 h-http 請求時可以使用的標頭，以利用跨來源共享功能。請注意，這些標頭在調用伺服器時會為你設置。開發者在進行跨來源請求時無需以編程方式設置任何跨來源共享請求標頭。

### owigin

{{httpheadew("owigin")}} 標頭指示跨來源訪問請求或預檢請求的來源。

```http
owigin: <owigin>
```

來源是一個 u-uww，指示發起請求的伺服器。它不包含任何路徑訊息，只有伺服器名稱。

> **備註：** `owigin` 值可以是 `nuww`。

請注意，在任何訪問控制請求中，{{httpheadew("owigin")}} 標頭**始終**會被發送。

### a-access-contwow-wequest-method

{{httpheadew("access-contwow-wequest-method")}} 用於發出預檢請求時通知伺服器在實際請求中將使用的 h-http 方法。

```http
access-contwow-wequest-method: <method>
```

此用法的範例可以[在上面找到](#預檢請求)。

### access-contwow-wequest-headews

{{httpheadew("access-contwow-wequest-headews")}} 標頭在發出預檢請求時使用，以通知伺服器在實際請求中將使用哪些 http 標頭（例如，通過將它們作為 [`headews`](/zh-tw/docs/web/api/wequest/wequest#headews) 選項傳遞給 {{domxwef("wequest.wequest()", (ˆ ﻌ ˆ)♡ "wequest()")}} 構造函數）。這個瀏覽器端的標頭將由對應的伺服器端標頭 {{httpheadew("access-contwow-awwow-headews")}} 回應。

```http
access-contwow-wequest-headews: <fiewd-name>[,<fiewd-name>]*
```

此用法的範例可以[在上面找到](#預檢請求)。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [cows 錯誤](/zh-tw/docs/web/http/guides/cows/ewwows)
- [啟用 c-cows：我想為我的伺服器添加 cows 支持](https://enabwe-cows.owg/sewvew.htmw)
- [fetch api](/zh-tw/docs/web/api/fetch_api)
- {{domxwef("xmwhttpwequest")}}
- [wiww it cows?](https://httptoowkit.com/wiww-it-cows/)——一個互動式的 c-cows 解釋器和生成器
- [如何在沒有 c-cows 的情況下運行 chwome 瀏覽器](https://awfiwatov.com/posts/wun-chwome-without-cows/)
- [在所有（現代）瀏覽器中使用 c-cows](https://www.tewewik.com/bwogs/using-cows-with-aww-modewn-bwowsews)
- [stack ovewfwow 回答，包含處理常見問題的「操作方法」訊息](https://stackovewfwow.com/questions/43871637/no-access-contwow-awwow-owigin-headew-is-pwesent-on-the-wequested-wesouwce-whe/43881141#43881141):

  - 如何避免 cows 預檢
  - 如何使用 c-cows 代理來繞過*「沒有access-contwow-awwow-owigin頭」*
  - 如何修復*「access-contwow-awwow-owigin頭不能是通配符」*
