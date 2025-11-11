---
title: "CSSCounterStyleRule: system プロパティ"
short-title: system
slug: Web/API/CSSCounterStyleRule/system
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

**`system`** は {{domxref("CSSCounterStyleRule")}} インターフェイスのプロパティで、 {{cssxref("@counter-style/system", "system")}} 記述子の値を取得または設定します。この記述子に値が設定されていない場合、この属性は空文字列を返します。

## 値

文字列です。

## 例

次の例は {{cssxref("@counter-style")}} ルールを示しています。 JavaScript では `myRules[0]` がこの `@counter-style` ルールであり、 `system` を返すと "fixed" という値が得られます。

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].system); // "fixed"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
