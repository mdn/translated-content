---
title: "SVGAnimatedNumber: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedNumber/baseVal
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedNumber")}} インターフェイスの読み取り専用プロパティで、 SVG 要素のアニメーション可能な実数型属性の（アニメーション中ではない）基底値を表します。

アニメーション可能な SVG 属性の中には、単一の実数を受け入れるものもあります。例えば、 {{SVGElement("circle")}} や {{SVGElement("ellipse")}} 要素の {{SVGAttr("radius")}} 属性や、 {{SVGElement("rect")}} 要素の {{SVGAttr("width")}} および {{SVGAttr("height")}} 属性などで、他にも多数あります。 `baseVal` プロパティは、実数型属性の基底値（アニメーションしていない値）を反映し、更新します。

## 値

`number` です。アニメーション属性の基底値を実数で表したものです。

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

console.log(path.pathLength.baseVal); // 出力: 90
path.pathLength.baseVal = 50; // 値を更新
console.log(path.pathLength.baseVal); // 出力: 90
```

`baseVal` は `pathLength` 属性の値を反映します。また、 `baseVal` プロパティを使用すると、アニメーション中の `pathLength` の（アニメーション中ではない）基底値にアクセスすることができます。

アニメーション中の {{domxref("SVGGeometryElement.pathLength", "pathLength")}} 値の現在の値にアクセスするには、 {{domxref("SVGAnimatedNumber.animVal")}} プロパティを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
