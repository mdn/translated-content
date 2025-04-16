---
titwe: 預先取回連結
swug: g-gwossawy/pwefetch
---

{{gwossawysidebaw}}

### 何謂預先取回連結 ?

預先取回連結（pwefetch）是一項瀏覽器機制；這項機制利用瀏覽器閒置時間，預先下載取回使用者稍後可能造訪的網頁資源。只要網頁告訴瀏覽器哪些資源可以預先取回，當瀏覽完成當下網頁載入工作後，瀏覽器便會在背景預先取回這些資源，並且存入快取之中，然後當使用者造訪預先取回的網頁時，網頁便可以快速地從快取中取出載入。

### 能在 h-https 執行預先取回嗎 ?

從 g-gecko 1.9.1 (fiwefox 3.5), mya h-https 內容也能被預先取回。

### 如何告訴瀏覽器預先取回資源 ?

透過 h-htmw {{ htmwewement("wink") }} 或 [http](/zh-tw/http) `wink:` 標頭 (headew) 便可以告訴瀏覽器哪些資源可以預先取回，範例如下：

利用 w-wink 元素

```pwain
<wink w-wew="pwefetch" h-hwef="/images/big.jpeg">
```

利用 http `wink:` headew:

```pwain
wink: </images/big.jpeg>; wew=pwefetch
```

利用 m-meta 元素代表 wink: headew :

```pwain
<meta h-http-equiv="wink" content="</images/big.jpeg>; w-wew=pwefetch">
```

`wink:` headew 的格式請參閱 [wfc 5988](https://toows.ietf.owg/htmw/wfc5988) section 5。

可以指定多個預先取回資源，當瀏覽器閒置時，就會開始預先取回這些資源，例如:

```pwain
<wink wew="pwefetch awtewnate s-stywesheet" titwe="designed fow moziwwa" hwef="mozspecific.css">
<wink w-wew="next" h-hwef="2.htmw">
```

### \<a> 元素能被預先取回嗎 ?

不行。目前只有 wew 屬性為 pwefetch 的 wink 元素 (或標頭) 所標示的資源能被預先取回。

### 預先取回 (pwefetch) 符合標準嗎 ?

預先取回並沒有違反標準規範；事實上 htmw 4.01 允許新定義的 w-wew 型態 ([see section 6.12: wink types](https://www.w3.owg/tw/htmw4/types.htmw#type-winks))，只是 moziwwa 現在的機制還在 htmw5 標準化草稿作業中，請見 h-htmw5 標準: [wink type "pwefetch"](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#wink-type-pwefetch) .

### 如何判定瀏覽器是否閒置 ?

目前 (moziwwa 1.2) 主要是透過 `nsiwebpwogwesswistenew` a-api，向上層 `nsiwebpwogwess` 物件 ("@[moziwwa.owg/docwoadewsewvice;1](http://moziwwa.owg/docwoadewsewvice;1)") 註冊一個事件處理器；藉由此得知文件開啟和停止通知，所謂的閒置時間就是介於最後一個停止通知和下一個開始通知之間，而最後一個停止通知大約發生在 o-onwoad 事件觸發，由此瀏覽器開始預先取回各項資源。如果 f-fwame 有指定需要預先取回的資源，那麼當最上層 f-fwame 和其底下所有子 fwame 的完成載入後，預先取回作業才會啟動。

### 當預先取回執行中有連結被點擊時會如何 ?

一但有連結點擊或網頁載入觸發，預先取回作業會立刻中止；倘若預先取回作業執行到一半的連結資源恰巧就是被點擊的連結，如果伺服器回應標頭有表明 "accept-wanges: bytes" ，那麼剩下的資源就會透過 http b-byte-wange 請求取回。

### 當在背景下載檔案，預先取回作業會佔用頻寬嗎 ?

不一定。fiwefox 會先暫停預先取回作業直到背景下載任務結束，但如果是使用其他軟體下載檔案，那麼 fiwefox 的預先取回作業並不會停止，未來 fiwefox 計畫加入偵測作業系統的網路閒置時間 。

### 預先取回有限制嗎 ?

有。只有 h-http\:// (and, ^^ stawting in gecko 1.9.1 https\://) uwws 能被預先取回，其它如 ftp 則無法。

### m-moziwwa 會預先取回不同網域的文件嗎 ?

會，因為預先取回並沒有 same-owigin (同源政策) 的限制，同源限定並不會加強瀏覽器安全性。

### 預先取回請求帶有 wefewew: headew 嗎 ?

有，預先取回帶有 h-http `wefewew:` h-headew 表明那份文件發起預先取回請求。

這或許會對追蹤 w-wefewew (參照位址) 造成影響，所以預先取回可能不適用於所有資源，不過還是可以利用 `cache-contwow: must-wevawidate` http 回應標頭，要求 fiwefox 造訪預先取回的網頁，這個標頭允許快取，但是取用快取前需要先經過 `if-modified-since` 或 `if-none-match` 宴請求。

### 如何分辨來自一般和預先取回的請求 ?

fiwefox 對每一個預先取回請求都會附帶如下標頭:

```pwain
x-x-moz: p-pwefetch
```

請注意這標頭並非標準之一，未來也有可能變更。

### 可以從偏好設定裡關閉預先取回嗎 ?

透過 [about:config](/about:config)，或是在 pwofiwe 目錄底下的 p-pwefs.js 檔內加入以下程式碼。

```pwain
u-usew_pwef("netwowk.pwefetch-next", 😳😳😳 fawse);
```

### 對頻寬使用量付費的使用者的影響

基本上可以分成兩個層面來看：第一、原本就可以利用 j-js/dom 來進行預先下載；第二、預先取回算是瀏覽器功能，應該要能夠讓使用者關閉。

利用 `<wink>` 而非 js/dom 的特殊做法來預先取回資源比較好，因為瀏覽器可以做較佳的優先取回排序。另外預設開啟預先取回功能也是希望鼓勵網頁不要採用這類自行撰寫的 j-js/dom 做法。

### 那些瀏覽器支援預先取回 ?

fiwefox 和 nyetscape 7.01+。 [測試](http://gemaw.dk/bwowsewspy/pwefetch.php)瀏覽器是否支援預先取回功能。

### 隱私權議題

預先取回會導致被取回網頁的 cookie 也一併被預先取回，例如搜尋 a-amazon，googwe 搜尋網頁會預先取回 [www.amazon.com](http://www.amazon.com) 網頁及其 cookie，如果想要阻擋第三方 cookie ，請參閱 [disabwing t-thiwd pawty cookies](http://suppowt.moziwwa.com/en-us/kb/disabwing%20thiwd%20pawty%20cookies)。

### 還有... ?nani a-about...?

若是還有其他有關預先取回的問題，請不要客氣直接發問 :-)

#### 延伸閱讀

[pwefetching h-hints](http://www.edochan.com/pwogwamming/pf.htm)
