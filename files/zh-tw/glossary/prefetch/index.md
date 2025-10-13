---
title: 預先取回連結
slug: Glossary/Prefetch
---

### 何謂預先取回連結 ?

預先取回連結（Prefetch）是一項瀏覽器機制；這項機制利用瀏覽器閒置時間，預先下載取回使用者稍後可能造訪的網頁資源。只要網頁告訴瀏覽器哪些資源可以預先取回，當瀏覽完成當下網頁載入工作後，瀏覽器便會在背景預先取回這些資源，並且存入快取之中，然後當使用者造訪預先取回的網頁時，網頁便可以快速地從快取中取出載入。

### 能在 HTTPS 執行預先取回嗎 ?

從 Gecko 1.9.1 (Firefox 3.5), HTTPS 內容也能被預先取回。

### 如何告訴瀏覽器預先取回資源 ?

透過 HTML {{ HTMLElement("link") }} 或 [HTTP](/zh-TW/HTTP) `Link:` 標頭 (header) 便可以告訴瀏覽器哪些資源可以預先取回，範例如下：

利用 Link 元素

```plain
<link rel="prefetch" href="/images/big.jpeg">
```

利用 HTTP `Link:` header:

```plain
Link: </images/big.jpeg>; rel=prefetch
```

利用 meta 元素代表 Link: header :

```plain
<meta http-equiv="Link" content="</images/big.jpeg>; rel=prefetch">
```

`Link:` header 的格式請參閱 [RFC 5988](https://tools.ietf.org/html/rfc5988) section 5。

可以指定多個預先取回資源，當瀏覽器閒置時，就會開始預先取回這些資源，例如:

```plain
<link rel="prefetch alternate stylesheet" title="Designed for Mozilla" href="mozspecific.css">
<link rel="next" href="2.html">
```

### \<a> 元素能被預先取回嗎 ?

不行。目前只有 rel 屬性為 prefetch 的 link 元素 (或標頭) 所標示的資源能被預先取回。

### 預先取回 (Prefetch) 符合標準嗎 ?

預先取回並沒有違反標準規範；事實上 HTML 4.01 允許新定義的 rel 型態 ([see Section 6.12: Link types](https://www.w3.org/TR/html4/types.html#type-links))，只是 Mozilla 現在的機制還在 HTML5 標準化草稿作業中，請見 HTML5 標準: [Link type "prefetch"](https://www.whatwg.org/specs/web-apps/current-work/#link-type-prefetch) .

### 如何判定瀏覽器是否閒置 ?

目前 (Mozilla 1.2) 主要是透過 `nsIWebProgressListener` API，向上層 `nsIWebProgress` 物件 ("@[mozilla.org/docloaderservice;1](http://mozilla.org/docloaderservice;1)") 註冊一個事件處理器；藉由此得知文件開啟和停止通知，所謂的閒置時間就是介於最後一個停止通知和下一個開始通知之間，而最後一個停止通知大約發生在 onLoad 事件觸發，由此瀏覽器開始預先取回各項資源。如果 frame 有指定需要預先取回的資源，那麼當最上層 frame 和其底下所有子 frame 的完成載入後，預先取回作業才會啟動。

### 當預先取回執行中有連結被點擊時會如何 ?

一但有連結點擊或網頁載入觸發，預先取回作業會立刻中止；倘若預先取回作業執行到一半的連結資源恰巧就是被點擊的連結，如果伺服器回應標頭有表明 "Accept-Ranges: bytes" ，那麼剩下的資源就會透過 HTTP byte-range 請求取回。

### 當在背景下載檔案，預先取回作業會佔用頻寬嗎 ?

不一定。Firefox 會先暫停預先取回作業直到背景下載任務結束，但如果是使用其他軟體下載檔案，那麼 Firefox 的預先取回作業並不會停止，未來 Firefox 計畫加入偵測作業系統的網路閒置時間 。

### 預先取回有限制嗎 ?

有。只有 http\:// (and, starting in Gecko 1.9.1 https\://) URLs 能被預先取回，其它如 FTP 則無法。

### Mozilla 會預先取回不同網域的文件嗎 ?

會，因為預先取回並沒有 same-origin (同源政策) 的限制，同源限定並不會加強瀏覽器安全性。

### 預先取回請求帶有 Referer: header 嗎 ?

有，預先取回帶有 HTTP `Referer:` header 表明那份文件發起預先取回請求。

這或許會對追蹤 referer (參照位址) 造成影響，所以預先取回可能不適用於所有資源，不過還是可以利用 `Cache-control: must-revalidate` HTTP 回應標頭，要求 Firefox 造訪預先取回的網頁，這個標頭允許快取，但是取用快取前需要先經過 `If-Modified-Since` 或 `If-None-Match` 宴請求。

### 如何分辨來自一般和預先取回的請求 ?

Firefox 對每一個預先取回請求都會附帶如下標頭:

```plain
X-moz: prefetch
```

請注意這標頭並非標準之一，未來也有可能變更。

### 可以從偏好設定裡關閉預先取回嗎 ?

透過 [about:config](/about:config)，或是在 profile 目錄底下的 prefs.js 檔內加入以下程式碼。

```plain
user_pref("network.prefetch-next", false);
```

### 對頻寬使用量付費的使用者的影響

基本上可以分成兩個層面來看：第一、原本就可以利用 JS/DOM 來進行預先下載；第二、預先取回算是瀏覽器功能，應該要能夠讓使用者關閉。

利用 `<link>` 而非 JS/DOM 的特殊做法來預先取回資源比較好，因為瀏覽器可以做較佳的優先取回排序。另外預設開啟預先取回功能也是希望鼓勵網頁不要採用這類自行撰寫的 JS/DOM 做法。

### 那些瀏覽器支援預先取回 ?

Firefox 和 Netscape 7.01+。 [測試](http://gemal.dk/browserspy/prefetch.php)瀏覽器是否支援預先取回功能。

### 隱私權議題

預先取回會導致被取回網頁的 cookie 也一併被預先取回，例如搜尋 amazon，google 搜尋網頁會預先取回 [www.amazon.com](http://www.amazon.com) 網頁及其 cookie，如果想要阻擋第三方 cookie ，請參閱 [Disabling third party cookies](http://support.mozilla.com/en-US/kb/Disabling%20third%20party%20cookies)。

### 還有... ?What about...?

若是還有其他有關預先取回的問題，請不要客氣直接發問 :-)

#### 延伸閱讀

[Prefetching Hints](http://www.edochan.com/programming/pf.htm)
