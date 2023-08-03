---
title: CSSPropertyRule.inherits
slug: Web/API/CSSPropertyRule/inherits
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSS Properties and Values API")}}

**`inherits`** は {{domxref("CSSPropertyRule")}} インターフェイスの読み取り専用プロパティで、 {{cssxref("@property")}} ルールで表現されているカスタムプロパティ登録の継承フラグ、つまり、そのプロパティが既定値では継承されるかどうかを記述した論理値を返します。

## 値

論理値です。

## 例

このスタイルシートには、単一の {{cssxref("@property")}} ルールが格納されています。最初に返される {{domxref("CSSRule")}} は、このルールを表す `CSSPropertyRule` となります。 `inherits` プロパティは論理値 `false` を返します。これは CSS の `inherits` プロパティの値です。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].inherits); //returns false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
