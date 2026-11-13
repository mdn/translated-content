---
title: "HTMLVideoElement: height プロパティ"
short-title: height
slug: Web/API/HTMLVideoElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

**`height`** は {{domxref("HTMLVideoElement")}} インターフェイスのプロパティで、この {{HTMLElement("video")}} 要素の `height` 属性を反映した整数を返し、CSS ピクセル単位でリソースが表示される高さを指定します。

## 値

正の整数または 0 です。

## 例

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.height); // Output: 600
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
