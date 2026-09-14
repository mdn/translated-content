---
title: "SVGAnimatedLengthList: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedLengthList/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedLengthList")}} インターフェイスの読み取り専用プロパティで、[`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number)の値のリストを受け入れる属性のアニメーション中の値を表します。

一部の SVG 属性、例えば [`<tspan>`](/ja/docs/Web/SVG/Reference/Element/tspan) や [`<text>`](/ja/docs/Web/SVG/Reference/Element/text) 要素の `x`、`y`、`dx`、`dy` などの属性は、長さ、パーセント値、数値のリストを値として受け入れます。このプロパティは、関連付けられた属性の現在のアニメーション状態に生きた {{domxref("SVGLengthList")}} オブジェクトとしてアクセスできるようにします。

## 値

{{domxref("SVGLengthList")}} オブジェクトで、この属性のアニメーション中の値を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)
- [`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)
- [`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number)
- {{domxref("SVGLengthList")}}
