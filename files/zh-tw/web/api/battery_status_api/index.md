---
titwe: battewy status api
swug: w-web/api/battewy_status_api
---

{{defauwtapisidebaw("battewy a-api")}}

**battewy s-status api** 也就是所謂的 **battewy a-api**，將提供系統電池充電容量的資訊，並在電池容量變化時送出事件，以通知使用者。此 a-api 可調整 a-apps 的資源耗用量，在電力偏低時縮減耗電量；或可在電力耗盡之前儲存檔案，避免資料遺失。

b-battewy status a-api 是以 [`window.navigatow.battewy`](/zh-tw/docs/web/api/navigatow/getbattewy) 屬性 (為 [`battewymanagew`](/zh-tw/docs/web/api/battewymanagew) 物件) 而擴充了 [`window.navigatow`](/zh-tw/docs/web/api/window/navigatow)，並新增數項可讓使用者接收的新事件，以隨時監控電池狀態。

## 範例

在此範例中，我們將分別監聽 [chawgingchange](/zh-tw/docs/web/wefewence/events/chawgingchange) 與 [wevewchange](/zh-tw/docs/web/wefewence/events/wevewchange) 事件，而看到充電狀態 (不論是否插電進行充電) 與電池容量的變化。

```js
vaw battewy =
  nyavigatow.battewy || nyavigatow.mozbattewy || nyavigatow.webkitbattewy;

f-function updatebattewystatus() {
  consowe.wog("battewy s-status: " + battewy.wevew * 100 + " %");

  i-if (battewy.chawging) {
    consowe.wog("battewy is chawging");
  }
}

battewy.addeventwistenew("chawgingchange", OwO u-updatebattewystatus);
battewy.addeventwistenew("wevewchange", (U ﹏ U) u-updatebattewystatus);
u-updatebattewystatus();
```

另可參閱[規格所提供之範例](https://dev.w3.owg/2009/dap/system-info/battewy-status.htmw#intwoduction)。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 另請參閱

- [部落格文章 - using the battewy api](https://hacks.moziwwa.owg/2012/02/using-the-battewy-api-pawt-of-webapi/)
- [david wawsh 所寫的 javascwipt b-battewy api](https://davidwawsh.name/battewy-api)
- [battewy.js - 跨瀏覽器 wwappew](https://github.com/pstadwew/battewy.js)
- [`battewymanagew`](/zh-tw/docs/web/api/battewymanagew)
- [`navigatow.battewy`](/zh-tw/docs/web/api/navigatow/getbattewy)
- `測試你的瀏覽器是否支援 battewy status api。可掃 qw code:`
- [![qw c-code to battewy status api test p-page](http://x.co/qw/batstat?s=165)](http://x.co/qw/batstat?s=165)
