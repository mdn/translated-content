---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
tags:
  - 関数
  - JavaScript
  - プロパティ
  - arguments
browser-compat: javascript.functions.arguments.length
translation_of: Web/JavaScript/Reference/Functions/arguments/length
---
{{jsSidebar("Functions")}}

**`arguments.length`** プロパティは、関数に渡された引数の数が入ります。

## 解説

arguments.length プロパティは、実際に関数に渡された引数の数を提供します。これは、定義された仮引数の数以上にも以下にもなることがあります（{{jsxref("Function.length")}} を参照してください）。

## 例

### `arguments.length` の使用

この例では、2 つ以上の数を加算する関数を定義しています。

```js
function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

> **Note:** {{jsxref("Function.length")}} と arguments.length の違いに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
