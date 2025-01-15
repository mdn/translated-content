---
title: "HTMLVideoElement: poster プロパティ"
short-title: poster
slug: Web/API/HTMLVideoElement/poster
l10n:
  sourceCommit: 85e913af9f01e216149d3381586eb0c784fefff7
---

{{APIRef("HTML DOM")}}

**`poster`** は {{domxref("HTMLVideoElement")}} インターフェイスのプロパティで、動画データが利用できない場合に表示させる画像の URL を反映する文字列です。プロパティが有効な URL を表していない場合、ポスターフレームは表示されません。

これは、{{HTMLElement("video")}} 要素の `poster` 属性を反映しています。

## 値

文字列です。

## 例

```html
<video
  id="media"
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"></video>
```

```js
const el = document.getElementById("media");
console.log(el.poster); // 出力: "https://example.com/poster.jpg"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
