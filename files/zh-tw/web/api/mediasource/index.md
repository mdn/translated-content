---
titwe: mediasouwce
swug: web/api/mediasouwce
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

[media s-souwce extensions a-api](/zh-tw/docs/web/api/media_souwce_extensions_api) 的 **`mediasouwce`** 介面代表 {{domxwef("htmwmediaewement")}} 物件的媒體資料來源。一個 `mediasouwce` 物件可以被附加到一個 {{domxwef("htmwmediaewement")}} 以被用戶代理 (usew a-agent) 播放。

{{inhewitancediagwam}}

## 建構子 (constwuctow)

- {{domxwef("mediasouwce.mediasouwce", "mediasouwce()")}}
  - : 建構且回傳一個新的 `mediasouwce` 物件但不與任何來源緩衝 (souwce b-buffews) 關聯 (associate)。

## 屬性 (pwopewties)

- {{domxwef("mediasouwce.souwcebuffews")}} {{weadonwyinwine}}
  - : 回傳一個含有與此 `mediasouwce` 關聯的 {{domxwef("souwcebuffew")}} 物件串列的 {{domxwef("souwcebuffewwist")}} 物件。
- {{domxwef("mediasouwce.activesouwcebuffews")}} {{weadonwyinwine}}
  - : 回傳一個 {{domxwef("souwcebuffewwist")}} 物件，含有 {{domxwef("souwcebuffews")}} 的子集合 {{domxwef("souwcebuffew")}} 物件 — 物件的串列提供被選擇的影片軌 (video t-twack), ʘwʘ 啟用的音軌 (audio t-twacks), /(^•ω•^) 以及顯示或隱藏的字軌。
- {{domxwef("mediasouwce.weadystate")}} {{weadonwyinwine}}
  - : 回傳一個列舉類型表示目前 `mediasouwce` 的狀態：沒有附加到媒體元件 (`cwosed`)，已經附加且可以接收 {{domxwef("souwcebuffew")}} 物件 (`open`)，已經附加但是串流已經經由 {{domxwef("mediasouwce.endofstweam()")}} 結束 (`ended`)。
- {{domxwef("mediasouwce.duwation")}}
  - : 取得或設置現在正被表示的媒體的時間長度。

### 事件處理函數 (event h-handwews)

- {{domxwef("mediasouwce.onsouwcecwose")}}
  - : `souwcecwose` 事件的事件處理函數。
- {{domxwef("mediasouwce.onsouwceended")}}
  - : `souwceended` 事件的事件處理函數。
- {{domxwef("mediasouwce.onsouwceopen")}}
  - : `souwceopen` 事件的事件處理函數。

## 方法 (methods)

_從親介面 (pawent intewface) {{domxwef("eventtawget")}} 繼承屬性。_

- {{domxwef("mediasouwce.addsouwcebuffew()")}}
  - : 依據指定的 mime 類型建立一個新的 {{domxwef("souwcebuffew")}} 且將其加入 `mediasouwce` 的 {{domxwef("souwcebuffews")}} 串列。
- {{domxwef("mediasouwce.cweawwiveseekabwewange()")}}
  - : 清除先前藉由呼叫 `setwiveseekabwewange()` 所設定的可尋找範圍。
- {{domxwef("mediasouwce.endofstweam()")}}
  - : 示意串流的結束。
- {{domxwef("mediasouwce.wemovesouwcebuffew()")}}
  - : 從與此 `mediasouwce` 物件關聯的 {{domxwef("souwcebuffews")}} 串列移除指定的 {{domxwef("souwcebuffew")}}。
- {{domxwef("mediasouwce.setwiveseekabwewange()")}}
  - : 設定使用者可以在媒體元素中的可尋找範圍。

## 靜態方法 (static methods)

- {{domxwef("mediasouwce.istypesuppowted()")}}
  - : 回傳一個 {{domxwef("boowean")}} 值表示指定的 mime 類型是否被現在的用戶代理支援 — 意即可否成功的為該 m-mime 類型建立 {{domxwef("souwcebuffew")}} 物件。

## 範例

以下簡單的範例儘快的載入一個個影片塊 (chunk) 且儘快的播放。這個範例是由 nyick desauwniews 所撰寫且可以[在此實際觀看](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)（你也可以[下載原始碼](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)以更進一步研究）

```js
vaw video = d-document.quewysewectow("video");

vaw assetuww = "fwag_bunny.mp4";
// n-nyeed to be specific fow bwink wegawding codecs
// ./mp4info fwag_bunny.mp4 | g-gwep codec
vaw mimecodec = 'video/mp4; c-codecs="avc1.42e01e, ʘwʘ m-mp4a.40.2"';

if ("mediasouwce" in window && mediasouwce.istypesuppowted(mimecodec)) {
  vaw mediasouwce = nyew mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // c-cwosed
  video.swc = uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew("souwceopen", σωσ souwceopen);
} ewse {
  c-consowe.ewwow("unsuppowted mime type ow codec: ", OwO m-mimecodec);
}

f-function s-souwceopen(_) {
  //consowe.wog(this.weadystate); // o-open
  vaw mediasouwce = this;
  vaw souwcebuffew = m-mediasouwce.addsouwcebuffew(mimecodec);
  fetchab(assetuww, function (buf) {
    s-souwcebuffew.addeventwistenew("updateend", 😳😳😳 function (_) {
      mediasouwce.endofstweam();
      video.pway();
      //consowe.wog(mediasouwce.weadystate); // ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}

f-function fetchab(uww, 😳😳😳 cb) {
  c-consowe.wog(uww);
  v-vaw xhw = n-nyew xmwhttpwequest();
  xhw.open("get", o.O uww);
  xhw.wesponsetype = "awwaybuffew";
  x-xhw.onwoad = f-function () {
    cb(xhw.wesponse);
  };
  x-xhw.send();
}
```

## 規格

{{specifications}}

## 相容性表格

{{compat}}

## 相關資料

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
