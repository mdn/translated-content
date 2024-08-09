---
title: "MathMLElement: attributeStyleMap プロパティ"
short-title: attributeStyleMap
slug: Web/API/MathMLElement/attributeStyleMap
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{APIRef("CSSOM")}}

**`attributeStyleMap`** は {{domxref("MathMLElement")}} インターフェイスの読み取り専用プロパティで、生きた {{domxref("StylePropertyMap")}} オブジェクトを返します。これは、要素のインラインの `style` 属性で定義されているか、スクリプトを介して {{domxref("MathMLElement")}} インターフェイスの {{domxref("MathMLElement.style", "style")}} プロパティを使用して割り当てられている、要素のスタイルプロパティのリストです。

一括指定プロパティは展開されます。`border-top: 1px solid black` を設定すると、個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) が代わりに設定されます。

{{domxref("MathMLElement.style", "style")}} プロパティと `attributeStyleMap` プロパティの主な違いは、`style` プロパティが {{domxref("CSSStyleDeclaration")}} オブジェクトを返すのに対し、`attributeStyleMap` プロパティは {{domxref("StylePropertyMap")}} オブジェクトを返すことです。

自分自身を書き込むことはできませんが、{{domxref("StylePropertyMap")}} オブジェクトを通してインラインスタイルを読み書きすることができます。これは `style` プロパティから返される {{domxref("CSSStyleDeclaration")}} オブジェクトと同様です。

## 値

生きた {{domxref("StylePropertyMap")}} オブジェクトです。

## 例

以下は `style` 属性と `attributeStyleMap` プロパティの関係を示すコードです。

```html
<div style="white-space: pre-line;">
  <math>
    <mrow>
      <mi>f</mi>
      <mo stretchy="false">(</mo>
      <mi id="el" style="border-top: 1px solid blue; color: red;">x</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mi>x</mi>
    </mrow>
  </math>
  <div id="output"></div>
</div>
```

```css
#el {
  font-size: 16px;
}
```

```js
const element = document.getElementById("el");
const output = document.getElementById("output");

for (const property of element.attributeStyleMap) {
  output.textContent += `${property[0]} = ${property[1][0].toString()}\n`;
}
```

{{EmbedLiveSample("Examples", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MathMLElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- {{domxref("SVGElement.attributeStyleMap")}}
