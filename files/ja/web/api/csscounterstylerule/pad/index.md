---
title: "CSSCounterStyleRule: pad プロパティ"
short-title: pad
slug: Web/API/CSSCounterStyleRule/pad
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

**`pad`** は {{domxref("CSSCounterStyleRule")}} インターフェイスのプロパティで、 {{cssxref("@counter-style/pad","pad")}} 記述子の値を取得または設定します。この記述子に値が設定されていない場合、この属性は空文字列を返します。

## 値

文字列です。

## 例

次の例は {{cssxref("@counter-style")}} ルールを示しています。 JavaScript では `myRules[0]` がこの `@counter-style` ルールであり、 `pad` を返すと "0" という値が得られます。

```css
@counter-style box-corner {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].pad); // "0"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
