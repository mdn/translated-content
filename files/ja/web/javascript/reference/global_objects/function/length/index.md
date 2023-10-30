---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
---

{{JSRef}}

**`length`** プロパティは、関数が期待する引数の数を示します。

{{EmbedInteractiveExample("pages/js/function-length.html")}}{{js_property_attributes(0,0,1)}}

## 解説

`length` は function オブジェクトのプロパティであり、関数が期待する引数の数、つまり形式上の引数の数を示します。この数に{{jsxref("rest_parameters", "残余引数", "", 1)}}は含まれず、既定値を持つ引数が最初に登場する前までしか含みません。これに対し、 {{jsxref("Functions_and_function_scope/arguments/length", "arguments.length")}} は関数のローカルスコープ内で用いられ、関数が実際に受け取った引数の数、つまり実引数の数を参照するのに用いるものです。

### Function コンストラクターのデータプロパティ

{{jsxref("Function")}} コンストラクター自体は、{{jsxref("Function")}} オブジェクトです。この `length` データプロパティの値は 1 です。プロパティの属性は、 Writable: `false`、Enumerable: `false`、Configurable: `true` です。

### Function プロトタイプのオブジェクトのプロパティ

{{jsxref("Function")}} プロトタイプオブジェクトの length プロパティの値は 0 です。

## 例

### 関数の length の使用

```js
console.log(Function.length); /* 1 */

console.log(function () {}.length); /* 0 */
console.log(function (a) {}.length); /* 1 */
console.log(function (a, b) {}.length); /* 2 etc. */

console.log(function (...args) {}.length);
// 0, rest parameter は数に含まれない

console.log(function (a, b = 1, c) {}.length);
// 1, 既定値を持つ引数が最初に登場する前までの
// 引数だけが数に含まれる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Function.length")}}

## 関連情報

- {{jsxref("Function")}}
