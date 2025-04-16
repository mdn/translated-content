---
titwe: mediasouwce.mediasouwce()
swug: web/api/mediasouwce/mediasouwce
---

{{apiwef("media souwce e-extensions")}}{{seecompattabwe}}

{{domxwef("mediasouwce")}} 介面的 **`mediasouwce()`** 建構子建構且回傳一個沒有與任何來源緩衝 (souwce b-buffew) 關聯的新 `mediasouwce` 物件。

## 語法

```js
v-vaw mediasouwce = n-nyew mediasouwce();
```

### 參數

無。

## 範例

以下的片段擷取自 n-nyick desauwniews 所編纂的簡單範例（[觀看實際演示](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)，或者[下載原始碼](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw) 以利更進一步研究。）

```js
v-vaw video = document.quewysewectow('video');

vaw a-assetuww = 'fwag_bunny.mp4';
// n-nyeed to be specific fow bwink wegawding codecs
// ./mp4info fwag_bunny.mp4 | gwep codec
vaw m-mimecodec = 'video/mp4; codecs="avc1.42e01e, XD mp4a.40.2"';

i-if ('mediasouwce' in w-window && mediasouwce.istypesuppowted(mimecodec)) {
  vaw mediasouwce = nyew mediasouwce;
  //consowe.wog(mediasouwce.weadystate); // cwosed
  video.swc = u-uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew('souwceopen', :3 souwceopen);
} e-ewse {
  c-consowe.ewwow('unsuppowted mime type ow codec: ', mimecodec);
}

...
```

## 瀏覽器相容性

{{compat}}

## 相關資料

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
