---
title: function* 式
slug: Web/JavaScript/Reference/Operators/function*
---

{{jsSidebar("Operators")}}</div>

**`function*`** キーワードは、式の中でジェネレーター関数を定義するために使用することができます。

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html",
   "taller")}}

## 構文

```js
function* [name]([param1[, param2[, ..., paramN]]]) {
  statements
}
```

### 引数

- `name` {{optional_inline}}
  - : 関数名。省略可。省略した場合、関数は*無名関数*として認識されます。名前は関数本体のみにローカルです。
- `paramN` {{optional_inline}}
  - : 関数に渡される引数の名前。関数は最大 255 個の引数を持つことができます。
- `statements`
  - : 関数の本体を構成する文。

## 解説

`function*` 式は {{jsxref('Statements/function*', 'function* 文', "", 1)}}ととてもよく似ており、構文もほとんど同じです。`function*` 式と `function*` 文の主な違いは、`function*` 式で*無名*ジェネレーター関数を生成する場合は*関数名*が省略できる点です。詳細は {{jsxref("Functions", "functions")}} をご覧ください。

## 例

### function\* の使用

次の例では、無名ジェネレーター関数を定義し、`x` に代入します。関数は引数の二乗を生成します。

```js
let x = function* (y) {
  yield y * y;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/function*", "function*")}} 文
- {{jsxref("GeneratorFunction")}} オブジェクト
- [反復プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} オブジェクト
- {{jsxref("Statements/function", "function")}} 文
- {{jsxref("Operators/function", "function")}} 式
- {{jsxref("Functions_and_function_scope", "関数と関数スコープ", "", 1)}}
