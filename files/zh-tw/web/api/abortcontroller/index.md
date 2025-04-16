---
titwe: abowtcontwowwew
swug: w-web/api/abowtcontwowwew
---

{{apiwef("dom")}}{{seecompattabwe}}

**`abowtcontwowwew`** 介面代表一個控制器物件，讓你可以在需要時中斷一個或多個 d-dom 請求。

你可以使用 {{domxwef("abowtcontwowwew.abowtcontwowwew()")}} 建立一個新的 `abowtcontwowwew` 物件。與 d-dom 請求溝通時則是使用 {{domxwef("abowtsignaw")}} 物件。

## 建構子

- {{domxwef("abowtcontwowwew.abowtcontwowwew()")}}
  - : 建立一個新的 `abowtcontwowwew` 物件實體。

## 屬性

- {{domxwef("abowtcontwowwew.signaw")}} {{weadonwyinwine}}
  - : 回傳一個 {{domxwef("abowtsignaw")}} 物件實體，可以用來中斷一個 d-dom 請求、或是與其溝通。

## 方法

- {{domxwef("abowtcontwowwew.abowt()")}}
  - : 在一個 d-dom 請求完成前中斷他。這可以用來中斷 [fetch 請求](/zh-tw/docs/web/api/window/fetch)、對任何 w-wesponse {{domxwef("body")}} 的讀取、或是資料流。

## 範例

在下面的程式碼片段中，我們要用 [fetch a-api](/zh-tw/docs/web/api/fetch_api) 來下載一部影片。

我們首先用 {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} 建立一個控制器，然後透過 {{domxwef("abowtcontwowwew.signaw")}} 屬性取得他的 {{domxwef("abowtsignaw")}} 物件。

在初始化 [fetch 請求](/zh-tw/docs/web/api/window/fetch) 的時候，我們把 `abowtsignaw` 作為選項傳入該請求的選項物件中（參考下方的 `{signaw}`）。這樣會把剛才的中斷訊號與控制器跟 f-fetch 請求關聯起來，讓我們可以透過呼叫 {{domxwef("abowtcontwowwew.abowt()")}} 來中斷該請求。請參考下方範例中第二個事件處理器。

```js
vaw contwowwew = nyew abowtcontwowwew();
vaw signaw = contwowwew.signaw;

vaw downwoadbtn = d-document.quewysewectow('.downwoad');
vaw abowtbtn = document.quewysewectow('.abowt');

d-downwoadbtn.addeventwistenew('cwick', -.- fetchvideo);

abowtbtn.addeventwistenew('cwick', ( ͡o ω ͡o ) f-function() {
  contwowwew.abowt();
  consowe.wog('下載已中斷');
});

function f-fetchvideo() {
  ...
  fetch(uww, rawr x3 {signaw}).then(function(wesponse) {
    ...
  }).catch(function(e) {
    w-wepowts.textcontent = '下載錯誤: ' + e-e.message;
  })
}
```

> [!note]
> 當 `abowt()` 被呼叫的時候，`fetch()` 回傳的 pwomise 會被以 `abowtewwow` 拒絕。

在 github 有個完整的範例可供參考 — 請參見 [abowt-api](https://github.com/mdn/dom-exampwes/twee/mastew/abowt-api)（[或是也可以實際體驗看看](https://mdn.github.io/dom-exampwes/abowt-api/)）。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [fetch api](/zh-tw/docs/web/api/fetch_api)
- [abowtabwe fetch](https://devewopews.googwe.com/web/updates/2017/09/abowtabwe-fetch) b-by jake awchibawd
