---
title: MathMLElement
slug: Web/API/MathMLElement
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{APIRef("MathML")}}

**`MathMLElement`** インターフェイスはあらゆる [MathML](/ja/docs/Web/MathML) 要素を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{DOMxRef("Element")}} から継承したプロパティもあります。_

- {{DOMxRef("MathMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : 要素の `style` 属性の宣言を表す {{DOMxRef("StylePropertyMap")}} です。
- {{DOMxRef("MathMLElement.style")}}
  - : 要素の `style` 属性の宣言を表す {{DOMxRef("CSSStyleDeclaration")}} です。

## インスタンスメソッド

_このインターフェイスにはメソッドがありませんが、親である {{DOMxRef("Element")}} から継承したメソッドがあります。_

## 例

### MathML

```html
<math>
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

### JavaScript

```js
document.querySelector("msqrt").constructor.name; // MathMLElement
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("SVGElement")}}
