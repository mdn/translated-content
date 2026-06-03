---
title: "SVGFEDisplacementMapElement: result プロパティ"
short-title: result
slug: Web/API/SVGFEDisplacementMapElement/result
l10n:
  sourceCommit: b85296a36664e26537fc181c65521d0aa8679fa6
---

{{APIRef("SVG")}}

**`result`** は {{domxref("SVGFEDisplacementMapElement")}} インターフェイスの読み取り専用プロパティで、SVG フィルタープリミティブの割り当てられた名前の文字列を {{domxref("SVGAnimatedString")}} で表します。

これは、{{SVGElement("feDisplacementMap")}} 要素の {{SVGAttr("result")}} 属性を反映します。この属性の値は、{{cssxref("custom-ident")}} です。指定されている場合、このフィルタープリミティブの処理によって生成されたグラフィックは、同じ {{SVGElement("filter")}} 要素内の後続のフィルタープリミティブにおける {{SVGAttr("in")}} 属性によって参照することができます。

`result` 属性が定義されていない場合、フィルターの `result.baseVal` および `result.animVal` は空文字列となり、`<feDisplacementMap>` フィルターの出力は、次のフィルタープリミティブが `in` 属性に値を提供していない場合にのみ、そのプリミティブへの暗黙的な入力として再利用可能となります。

## 値

{{domxref("SVGAnimatedString")}} です。

## 例

```js
const feDisplacementMapElement = document.querySelector("feDisplacementMap");
const filterName = feDisplacementMapElement.result;
console.log(filterName.baseVal); // フィルターに割り当てられた名前
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGFEDisplacementMapElement.in1")}}
- {{cssxref("custom-ident")}} データ型
- {{domxref("SVGFEImageElement")}} API と {{SVGElement("feImage")}} 要素
- {{domxref("SVGFETurbulenceElement")}} API と {{SVGElement("feTurbulence")}} 要素
- CSS {{cssxref("blend-mode")}} データ型
- CSS {{cssxref("mix-blend-mode")}} プロパティ
