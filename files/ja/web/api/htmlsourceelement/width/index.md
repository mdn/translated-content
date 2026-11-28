---
title: "HTMLSourceElement: width プロパティ"
short-title: width
slug: Web/API/HTMLSourceElement/width
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

**`width`** は {{domxref("HTMLSourceElement")}} インターフェイスのプロパティで、画像リソースの幅を CSS ピクセルで示す 0 以上の数値です。

現在の {{HTMLElement("source")}} 要素の親が {{HTMLElement("picture")}} 要素の場合にのみ、このプロパティは効果があります。

このプロパティは、{{HTMLElement("source")}} 要素の `width` 属性を反映します。

## 値

画像リソースの幅を CSS ピクセルで示す 0 以上の数値です。

## 例

```html
<picture id="img">
  <source
    srcset="landscape.png"
    media="(width >= 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(width >= 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(width >= 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="ブラウザーがこれらのソースに対応していない場合に使用する画像"
    width="500"
    height="400" />
</picture>
```

```js
const img = document.getElementById("img");
const sources = img.querySelectorAll("source");
console.log(Array.from(sources).map((el) => el.width)); // 出力結果: [1000, 800, 600]
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
- {{domxref("HTMLVideoElement.width")}}
