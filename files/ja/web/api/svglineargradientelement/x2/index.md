---
title: "SVGLinearGradientElement: x2 プロパティ"
short-title: x2
slug: Web/API/SVGLinearGradientElement/x2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`x2`** は {{domxref("SVGLinearGradientElement")}} インターフェイスの読み取り専用プロパティで、グラデーションの始点の X 軸座標を {{domxref("SVGAnimatedLength")}} として記述します。これは、{{SVGElement("linearGradient")}} 要素の {{SVGAttr("x2")}} 属性の計算値を反映します。

この属性の値は [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number) のいずれかです。{{domxref("SVGAnimatedLength.baseVal")}} の値は、ユーザー座標系におけるグラデーションの終点の x 座標です。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

次の SVG があったとします。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient1" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
    <linearGradient id="gradient2" x1="25%" y1="0%" x2="75%" y2="100%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

`x2` 属性の計算値には、次のようにアクセスできます。

```js
const linearGradients = document.querySelectorAll("linearGradient");
const x2Gradient1 = linearGradients[0].x2;
const x2Gradient2 = linearGradients[1].x2;

console.dir(x2Gradient1.baseVal.value); // 出力: 100 (50% of 200)
console.dir(x2Gradient2.baseVal.value); // 出力: 150 (75% of 200)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGLinearGradientElement.x1")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
