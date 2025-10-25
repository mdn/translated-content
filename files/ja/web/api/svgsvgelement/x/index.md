---
title: "SVGSVGElement: x プロパティ"
short-title: x
slug: Web/API/SVGSVGElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`x`** は {{domxref("SVGSVGElement")}} インターフェイスの読み取り専用プロパティで、その SVG の位置の水平座標を {{domxref("SVGAnimatedLength")}} として記述します。{{SVGElement("svg")}} が別の `<svg>` 内にネストされている場合、水平座標はユーザー座標系の長さであり、ユーザー座標系の原点から x 軸に沿って指定された距離です。その構文は [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) と同じです。

これは {{SVGElement("svg")}} 要素の {{SVGAttr("x")}} 幾何属性を反映します。デフォルト値は `0` です。 `x` 属性はもっとも外側の `<svg>` 要素では効果がありません。何かにネストされている場合のみ効果があります。 CSS の {{cssxref("x")}} プロパティは、 `<svg>` 要素の `x` 属性よりも優先されますので、この値は要素の外見を反映していないことがあります。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const svg = document.querySelector("svg");
const leftPosition = svg.x;
console.dir(leftPosition.baseVal.value); // `x` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGSVGElement.y")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
