---
title: "SVGElement: attributeStyleMap プロパティ"
short-title: attributeStyleMap
slug: Web/API/SVGElement/attributeStyleMap
l10n:
  sourceCommit: 2eacf352ffb5d8a3233c13e4bf5949578b847759
---

{{APIRef("CSSOM")}}

**`attributeStyleMap`** は {{domxref("SVGElement")}} インターフェイスの読み取り専用のプロパティで、生きた {{domxref("StylePropertyMap")}} を返します。これには、要素のインライン スタイル属性で定義されているか、スクリプト経由で {{domxref("SVGElement")}} インターフェイスの {{domxref("SVGElement.style", "style")}} プロパティを使用して割り当てられた、要素のスタイルプロパティのリストが入ります。

一括指定プロパティは展開されます。`border-top: 1px solid black` を設定すると、代わりに個別指定プロパティ ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}) が設定されます。

{{domxref("SVGElement.style", "style")}} プロパティと `attributeStyleMap` プロパティの主な違いは、`style` プロパティが {{domxref("CSSStyleDeclaration")}} オブジェクトを返すのに対し、`attributeStyleMap` プロパティは {{domxref("StylePropertyMap")}} オブジェクトを返すことです。

このプロパティ自身は書き込みできませんが、`style` プロパティを通じて返す {{domxref("CSSStyleDeclaration")}} オブジェクトと同様に、このプロパティが返す {{domxref("StylePropertyMap")}} オブジェクトを通じてインラインスタイルを読み書きすることができます。

## 値

生きた {{domxref("StylePropertyMap")}} オブジェクトです。

## 例

次のコードは `style` 属性と `attributeStyleMap` プロパティの関係を示しています。

```html
<div style="white-space: pre-line;">
  <svg
    width="50"
    height="50"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    style="white-space: pre-line;">
    <circle
      cx="100"
      cy="100"
      r="50"
      id="el"
      style="border-top: 1px solid blue; color: red;" />
  </svg>
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

- {{domxref("SVGElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- {{domxref("MathMLElement.attributeStyleMap")}}
