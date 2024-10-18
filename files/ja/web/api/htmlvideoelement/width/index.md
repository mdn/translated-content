---
title: "HTMLVideoElement: width プロパティ"
short-title: width
slug: Web/API/HTMLVideoElement/width
l10n:
  sourceCommit: 33b0a16f58b83a24a682b469e58f6b78713d0258
---

{{APIRef("HTML DOM")}}

**`width`** は {{domxref("HTMLVideoElement")}} インターフェイスのプロパティで、この {{HTMLElement("video")}} 要素の `width` 属性を反映した整数を返し、CSS ピクセル単位でリソースが表示される幅を指定します。

## 値

正の整数または 0 です。

## 例

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.width); // Output: 800
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
