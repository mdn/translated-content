---
title: "HTMLIFrameElement: width プロパティ"
short-title: width
slug: Web/API/HTMLIFrameElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

**`width`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、この {{HTMLElement("iframe")}} 要素の `width` 属性を反映し、フレームの幅を CSS ピクセル数で示す文字列を返します。

## 値

CSS ピクセルでフレームの高さを示す文字列です。

## 例

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.width); // 出力: '800'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
