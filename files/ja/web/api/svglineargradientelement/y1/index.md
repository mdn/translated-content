---
title: "SVGLinearGradientElement: y1 プロパティ"
short-title: y1
slug: Web/API/SVGLinearGradientElement/y1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`y1`** は {{domxref("SVGLinearGradientElement")}} インターフェイスの読み取り専用プロパティで、グラデーションの始点の Y 軸座標を {{domxref("SVGAnimatedLength")}} として記述します。これは、{{SVGElement("linearGradient")}} 要素の {{SVGAttr("y1")}} 属性の計算値を反映します。

この属性の値は [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number) のいずれかです。{{domxref("SVGAnimatedLength.baseVal")}} の値は、ユーザー座標系におけるグラデーションの始点の y 座標です。

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

`y1` 属性の計算値には、次のようにアクセスできます。

```js
const linearGradients = document.querySelectorAll("linearGradient");
const y1Gradient1 = linearGradients[0].y1;
const y1Gradient2 = linearGradients[1].y1;

console.dir(y1Gradient1.baseVal.value); // 出力: 0 (0% of 200)
console.dir(y1Gradient2.baseVal.value); // 出力: 0 (0% of 200)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGLinearGradientElement.y2")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
