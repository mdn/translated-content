---
title: CSSPropertyRule.name
slug: Web/API/CSSPropertyRule/name
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSS Properties and Values API")}}

**`name`** は {{domxref("CSSPropertyRule")}} インターフェイスの読み取り専用プロパティで、これはプロパティ名を表します。これは {{cssxref("@property")}} ルールの前置き部分においてカスタムプロパティに指定された名前をシリアライズしたものです。

## 値

A string.

## 例

このスタイルシートには、単一の {{cssxref("@property")}} ルールが格納されています。最初に返される {{domxref("CSSRule")}} は、このルールを表す `CSSPropertyRule` となります。 `name` プロパティは文字列 `"--property-name"` を返します。この文字列は、 CSS でカスタムプロパティに指定された名前です。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); //the string "--property-name"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
