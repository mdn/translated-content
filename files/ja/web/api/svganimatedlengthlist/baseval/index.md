---
title: "SVGAnimatedLengthList: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedLengthList/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedLengthList")}} インターフェイスの読み取り専用プロパティで、[`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number)の値のリストを受け入れる、アニメーション可能な属性のアニメーション前の基底値を表します。

一部の SVG 属性、例えば [`<tspan>`](/ja/docs/Web/SVG/Reference/Element/tspan) や [`<text>`](/ja/docs/Web/SVG/Reference/Element/text) 要素の `x`、`y`、`dx`、`dy` などの属性は、長さ、パーセント値、数値のリストを値として受け入れます。このプロパティは、アニメーションしていない状態における属性値を、生きた {{domxref("SVGLengthList")}} オブジェクトとして反映します。

## 値

{{domxref("SVGLengthList")}} オブジェクトで、この属性の基底値を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)
- [`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)
- [`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number)
- {{domxref("SVGLengthList")}}
