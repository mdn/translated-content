---
title: "SVGAnimatedNumberList: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedNumberList/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedNumberList")}} インターフェイスの読み取り専用プロパティで、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number)の値のリストを受け入れるアニメーション可能な属性の（アニメーション前の）基底値を表します。

このプロパティは、 [`<svg>`](/ja/docs/Web/SVG/Reference/Element/svg) 要素の [`viewBox`](/ja/docs/Web/SVG/Reference/Attribute/viewBox) 属性、 [`feColorMatrix`](/ja/docs/Web/SVG/Reference/Element/feColorMatrix) 要素の [`values`](/ja/docs/Web/SVG/Reference/Attribute/values#fecolormatrix) 属性、 {{SVGElement("rect")}}、{{SVGElement("polygon")}}、{{SVGElement("polyline")}} 要素の {{SVGAttr("points")}} 属性を読み取り専用の {{domxref("SVGNumberList")}} として反映し、 {{SVGAttr("points")}} 属性で定義された点の静的なリストへのアクセスを提供します。

## 値

{{domxref("SVGNumberList")}} オブジェクトで、この属性の基底値を表します。このリストには、属性で指定された個々の数値に対応する 1 つ以上の数値が含まれています。

## 例

```js
const rect = document.querySelector("rect");

// アニメーション可能な 'points' 属性を数値で設定する
rect.setAttribute("points", "10,10 20,10 20,20 10,20");

// SVGAnimatedNumberList オブジェクトへアクセス
const points = rect.points;

// 基底値を変更
points.baseVal = [10, 15, 25, 30];

// 反映された属性値を検証
console.log(rect.getAttribute("points")); // 出力: "10,15 25,30"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedNumber")}}
