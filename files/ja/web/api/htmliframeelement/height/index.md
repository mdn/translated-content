---
title: "HTMLIFrameElement: height プロパティ"
short-title: height
slug: Web/API/HTMLIFrameElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

**`height`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、この {{HTMLElement("iframe")}} 要素の `height` 属性を反映し、フレームの高さを CSS ピクセル数で示す文字列を返します。

## 値

CSS ピクセルでフレームの高さを示す文字列です。

## 例

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.height); // Output: '600'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
