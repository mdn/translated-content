---
title: "SVGAnimatedNumberList: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedNumberList/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedNumberList")}} インターフェイスの読み取り専用プロパティで、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number)の値のリストを受け入れるアニメーション可能な属性のアニメーション中の現在の値を表します。

このプロパティは、 [`<svg>`](/ja/docs/Web/SVG/Reference/Element/svg) 要素の [`viewBox`](/ja/docs/Web/SVG/Reference/Attribute/viewBox) 属性、 [`feColorMatrix`](/ja/docs/Web/SVG/Reference/Element/feColorMatrix) 要素の [`values`](/ja/docs/Web/SVG/Reference/Attribute/values#fecolormatrix) 属性、 {{SVGElement("rect")}}、{{SVGElement("polygon")}}、{{SVGElement("polyline")}} 要素の {{SVGAttr("points")}} 属性を読み取り専用の {{domxref("SVGNumberList")}} として反映し、 {{SVGAttr("points")}} 属性で定義された点の動的に更新されるリストへのアクセスを提供します。

## 値

{{domxref("SVGNumberList")}} オブジェクトで、この属性のアニメーション中の値を表します。このリストには、属性で指定された個々の数値に対応する 1 つ以上の数値が含まれています。

## 例

```js
const rect = document.querySelector("rect");

// アニメーション可能な 'points' 属性を数値で設定する
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// SVGAnimatedNumberList オブジェクトへアクセス
const points = rect.points;

console.dir(points.animVal); // アニメーション中の状態
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedNumber")}}
