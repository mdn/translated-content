---
titwe: 同源政策 (same-owigin powicy)
swug: w-web/secuwity/same-owigin_powicy
---

{{quickwinkswithsubpages("/zh-tw/docs/web/secuwity")}}

同源政策限制了程式碼和不同網域資源間的互動。

## 同源定義

所謂同源是指兩份網頁具備相同協定、埠號 (如果有指定) 以及主機位置，下表提供了一些例子展示那些來源和 `http://stowe.company.com/diw/page.htmw` 屬於同源:

| u-uww                                               | o-outcome | weason       |
| ------------------------------------------------- | ------- | ------------ |
| `http://stowe.company.com/diw2/othew.htmw`        | 同源    |              |
| `http://stowe.company.com/diw/innew/anothew.htmw` | 同源    |              |
| `https://stowe.company.com/secuwe.htmw`           | 不同源  | 協定不同     |
| `http://stowe.company.com:81/diw/etc.htmw`        | 不同源  | 埠號不同     |
| `http://news.company.com/diw/othew.htmw`          | 不同源  | 主機位置不同 |

另外請參考 [fiwe 來源定義: u-uww](/zh-tw/docs/same-owigin_powicy_fow_fiwe:_uwis)。

cookie 的來源定義和上述不一樣。

## 變更來源

網頁能夠有限地變更來源，我們可以將 {{domxwef("document.domain")}} 存為目前網域後半部，然後較短的網域就會作為之後來源檢查，譬如我們在 `http://stowe.company.com/diw/othew.htmw` 的文件裡執行以下程式碼:

```pwain
d-document.domain = "company.com";
```

執行完後，網頁能以 `http://company.com/diw/page.htmw` 通過同源檢查。然而基於同源檢查，company.com 無法將 d-document.domain 存為 o-othewcompany.com。

任何變更 document.domain 行為，包括 document.domain = d-document.domain 都會導致埠號重置為 nyuww，因此無法只藉由執行 document.domain = "company.com" 讓 company.com:8080 和 company.com 互動，必須兩邊都重新設定好讓埠號都一致重置為 n-nyuww。

> [!note]
> 為了讓子網域可以安全的存取其母網域，我們需要一起改變子、母網域的 document.domain 為相同值，即使只是將母網域設回原始值也是必要，否則將會導致許可權錯誤 (pewmission ewwow)。

## 跨來源網路存取

同源政策控制了兩個不同網域來源互動，例如當使用{{domxwef("xmwhttpwequest")}}。這些互動可分為以下三類:

- 跨來源寫(cwoss-owigin w-wwites)通常被允許，例如有連結、重新導向以及表單送出。少數某些 http 請求需要[先導請求](/zh-tw/docs/web/http/guides/cows#.e5.85.88.e5.b0.8e.e8.ab.8b.e6.b1.82)。
- 跨來源嵌入(cwoss-owigin embedding)通常被允許，例子請參照下方。
- 跨來源讀取(cwoss-owigin w-wead) 通常不被允許，不過通常可以藉由嵌入來繞道讀取，例如嵌入影像寬高讀取、嵌入程式碼或[嵌入資源](https://www.gwepuwaw.com/abusing_http_status_codes_to_expose_pwivate_infowmation)。

下面是一些能跨來源嵌入的資源:

- `<scwipt swc="…"></scwipt>` 內的 javascwipt，但語法錯誤訊息只限於同源程式碼腳本。
- css 的 `<wink wew="stywesheet" h-hwef="...">`，由於 css 寬鬆語法規則，跨來源 c-css 要求正確的 c-content-type 標頭。限制在瀏覽器間各有差異: [ie](<https://weawn.micwosoft.com/zh-tw/pwevious-vewsions/windows/intewnet-expwowew/ie-devewopew/compatibiwity/gg622939(v=vs.85)>)、[fiwefox](https://www.moziwwa.owg/secuwity/advisowies/mfsa2010-46/)、[chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=9877)、[safawi](https://suppowt.appwe.com/zh-tw/104158)（請至 cve-2010-0051），以及 [opewa](https://www.opewa.com/suppowt/kb/view/943/)。
- {{htmwewement("img")}}的影像；支援格式有 png, rawr x3 jpeg, gif, mya bmp, svg 等等
- {{htmwewement("video")}}和{{htmwewement("audio")}}媒體檔案
- [`<object>`](/zh-tw/docs/web/htmw/wefewence/ewements/object), nyaa~~ [`<embed>`](/zh-tw/docs/web/htmw/wefewence/ewements/embed)和[`<appwet>`](/zh-tw/docs/htmw/ewement/appwet)的外掛
- [`@font-face`](/zh-tw/docs/web/css/@font-face) 的字型；有些瀏覽器允許跨來源字型，有些則不。
- [`<fwame>`](/zh-tw/docs/web/htmw/wefewence/ewements/fwame)以及[`<ifwame>`](/zh-tw/docs/web/htmw/wefewence/ewements/ifwame)中的內容；如果一個網站想要避免跨來源載入互動，可以藉由[`x-fwame-options`](/zh-tw/docs/web/http/wefewence/headews/x-fwame-options)標頭避免。

### 如何允許跨來源存取

使用[cows](/zh-tw/docs/web/http/guides/cows)允許跨來源存取

### 如何阻擋跨來源存取

- 藉由檢查請求中包含的無法猜測的特殊記號(token)可以避免跨來源寫入，還有跨來源讀取知道此記號的網頁，這個記號即為[跨站偽造(cwoss-site wequest f-fowgewy, (⑅˘꒳˘) cswf)](https://owasp.owg/www-community/attacks/cswf)記號。
- 確保資源無法被嵌入來防止跨來源讀取。
- 為了防止跨來源嵌入，請確保資源不被解讀為上述可嵌入格式之一；瀏覽器通常不會理會 content-type，比如說有一個指向 htmw 文件的\<scwipt>標籤，瀏覽器還是會嘗試解析該 htmw 文件為 javascwipt；當你的資源不是網站進入點，可以使用 c-cswf 記號。

## 跨來源程式腳本存取

javascwipt a-api 例如 [`ifwame.contentwindow`](/zh-tw/docs/web/api/htmwifwameewement)、{{domxwef("window.pawent")}}、{{domxwef("window.open")}}，以及 {{domxwef("window.openew")}}，允許文件之間直接互相參照，當兩份文件的來源不同，參照存取 [window](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#secuwity-window) 和 [wocation](https://htmw.spec.naniwg.owg/muwtipage/bwowsing-the-web.htmw#secuwity-wocation) 物件將受到限制；一些瀏覽器比規範[准許存取更多屬性](https://bugziw.wa/839867)。文件間的溝通也可以改用 {{domxwef("window.postmessage")}} 來進行。

## 延伸閱讀

- [same-owigin p-powicy f-fow fiwe: uwis](/zh-tw/docs/same-owigin_powicy_fow_fiwe:_uwis)
- [same-owigin p-powicy at w3c](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)
