---
title: "SVGAnimatedNumber: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedNumber/animVal
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedNumber")}} インターフェイスの読み取り専用プロパティで、 SVG 要素の実数型属性のアニメーション中の値を表します。

アニメーション可能な SVG 属性の中には、単一の実数を受け入れるものもあります。例えば、 {{SVGElement("circle")}} や {{SVGElement("ellipse")}} 要素の {{SVGAttr("radius")}} 属性や、 {{SVGElement("rect")}} 要素の {{SVGAttr("width")}} および {{SVGAttr("height")}} 属性などで、他にも多数あります。 `animVal` 属性により、アニメーション中にアニメーション可能な実数型属性の現在のアニメーション値にアクセスことができます。

## 値

`number` です。アニメーション属性の現在の値を実数で表したものです。

## 例

この例では、 {{SVGElement("path")}} 要素の内側に、 {{SVGElement("animate")}} 要素が含まれており、パスの {{SVGAttr("pathLength")}} 属性の値をアニメーションさせています。

```html
<path d="M 0,40 h100" pathLength="90" id="path">
  <animate
    attributeName="pathLength"
    values="50; 90; 50;"
    dur="10s"
    repeatCount="indefinite" />
</path>
```

```js
const path = document.querySelector("path");

console.log(path.pathLength.animVal); // 出力: 50
console.log(path.pathLength.baseVal); // 出力: 90
```

`animVal` プロパティを使用すると、 `pathLength` のアニメーション中の現在の値にアクセスできるのに対し、 {{domxref("SVGAnimatedNumber.baseVal")}} は、 {{domxref("SVGGeometryElement.pathLength", "pathLength")}} の（アニメーション中の値ではない）基底値を反映します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
