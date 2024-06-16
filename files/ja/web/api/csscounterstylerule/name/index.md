---
title: "CSSCounterStyleRule: name プロパティ"
short-title: name
slug: Web/API/CSSCounterStyleRule/name
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

**`name`** は {{domxref("CSSCounterStyleRule")}} インターフェイスのプロパティで、関連付けられたルールの `name` として定義された {{CSSxRef("&lt;custom-ident&gt;")}} を取得または設定します。

## 値

文字列です。

## 例

次の例は {{cssxref("@counter-style")}} ルールを示しています。 JavaScript では `myRules[0]` がこの `@counter-style` ルールであり、 `name` を返すとカスタム識別子 "box-corner" という値が得られます。

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  fallback: disc;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); // "box-corner"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
