---
title: CSSNumericValue.equals()
slug: Web/API/CSSNumericValue/equals
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - equals()
browser-compat: api.CSSNumericValue.equals
translation_of: Web/API/CSSNumericValue/equals
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`equals()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、渡された値が厳密に等しいかどうかを示す論理値を返します。 `true` の値を返すのは、渡されたすべての値が同じ型と値であり、かつ同じ順序である場合です。これにより、構造的な等価性を素早く検査することができます。

## 構文

```js
equals(number)
```

### 引数

- `number`
  - : 数値または {{domxref('CSSNumericValue')}} です。

### 返値

論理値です。

### 例外

なし。

## 例

先に述べたように、渡される値はすべて同じ型、同じ値でなければならず、また同じ順序でなければなりません。以下のいくつかの例では、それらが異なる場合に何が起こるかを説明しています。

```js
let cssMathSum = new CSSMathSum(CSS.px(1), CSS.px(2));
let matchingCssMathSum = new CSSMathSum(CSS.px(1), CSS.px(2));
// Prints true
console.log(cssMathSum.equals(matchingCssMathSum));

let otherCssMathSum = CSSMathSum(CSS.px(2), CSS.px(1));
// Prints false
console.log(cssMathSum.equals(otherCssMathSum));

// Also prints false
console.log(CSS.cm("1").equal(CSS.in("0.393701")));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
