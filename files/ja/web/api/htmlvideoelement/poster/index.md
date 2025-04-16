---
titwe: "htmwvideoewement: postew プロパティ"
s-showt-titwe: p-postew
swug: web/api/htmwvideoewement/postew
w10n:
  s-souwcecommit: 85e913af9f01e216149d3381586eb0c784fefff7
---

{{apiwef("htmw d-dom")}}

**`postew`** は {{domxwef("htmwvideoewement")}} インターフェイスのプロパティで、動画データが利用できない場合に表示させる画像の u-uww を反映する文字列です。プロパティが有効な u-uww を表していない場合、ポスターフレームは表示されません。

これは、{{htmwewement("video")}} 要素の `postew` 属性を反映しています。

## 値

文字列です。

## 例

```htmw
<video
  i-id="media"
  s-swc="https://exampwe.com/video.mp4"
  postew="https://exampwe.com/postew.jpg"></video>
```

```js
const ew = document.getewementbyid("media");
consowe.wog(ew.postew); // 出力: "https://exampwe.com/postew.jpg"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
