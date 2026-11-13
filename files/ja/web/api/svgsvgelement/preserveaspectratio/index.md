---
title: "SVGSVGElement: preserveAspectRatio プロパティ"
short-title: preserveAspectRatio
slug: Web/API/SVGSVGElement/preserveAspectRatio
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

**`preserveAspectRatio`** は {{domxref("SVGSVGElement")}} インターフェイスの読み取り専用プロパティで、指定された要素の {{SVGAttr("preserveAspectRatio")}} 属性を反映します。これは、SVG 要素のコンテンツが指定された空間に収まるよう、アスペクト比を維持しながらどのように変倍されるべきかを定義します。

## 値

{{domxref("SVGAnimatedPreserveAspectRatio")}} オブジェクトです。

## 例

この SVG において、`preserveAspectRatio` プロパティを使用することで、SVG 要素の変倍動作を取得できます。

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  preserveAspectRatio="xMidYMid meet">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

`preserveAspectRatio` 属性にアクセスできます。

```js
const svgElement = document.querySelector("svg");

console.log(svgElement.preserveAspectRatio.baseVal); // 出力: SVGPreserveAspectRatio {align: 1, meetOrSlice: 1}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("preserveAspectRatio")}}
