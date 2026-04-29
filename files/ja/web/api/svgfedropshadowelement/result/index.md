---
title: "SVGFEDropShadowElement: result プロパティ"
short-title: result
slug: Web/API/SVGFEDropShadowElement/result
l10n:
  sourceCommit: f318ba7838c55e50366284c1df56fbcb40ea802b
---

{{APIRef("SVG")}}

**`result`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、SVG フィルタープリミティブの割り当てられた名前の文字列を {{domxref("SVGAnimatedString")}} で表します。

これは、{{SVGAttr("result")}} 属性を反映します。この属性の値は、{{cssxref("custom-ident")}} です。指定されている場合、このフィルタープリミティブの処理によって生成されたグラフィックは、同じ {{SVGElement("filter")}} 要素内の後続のフィルタープリミティブにおける {{SVGAttr("in")}} 属性によって参照することができます。

`result` 属性が定義されていない場合、フィルターの `result.baseVal` および `result.animVal` は空文字列となり、`<feDropShadow>` フィルターの出力は、次のフィルタープリミティブが `in` 属性に値を提供していない場合にのみ、そのプリミティブへの暗黙的な入力として再利用可能となります。

## 値

{{domxref("SVGAnimatedString")}} です。

## 例

```js
const feDropShadowElement = document.querySelector("feDropShadow");
const filterName = feDropShadowElement.result;
console.log(filterName.baseVal); // フィルターに割り当てられた名前
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGFEDropShadowElement.in1")}}
- {{cssxref("custom-ident")}} データ型
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} 関数
- CSS {{cssxref("box-shadow")}} プロパティ
- CSS {{cssxref("text-shadow")}} プロパティ
- CSS {{cssxref("blend-mode")}} データ型
- CSS {{cssxref("mix-blend-mode")}} プロパティ
