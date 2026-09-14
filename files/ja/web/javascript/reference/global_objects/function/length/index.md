---
title: "Function: length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`length`** は {{jsxref("Function")}} インスタンスのプロパティで、関数が期待する引数の数を示します。

{{InteractiveExample("JavaScript デモ: Function: length")}}

```js interactive-example
function func1() {}

function func2(a, b) {}

console.log(func1.length);
// 期待される出力結果: 0

console.log(func2.length);
// 期待される出力結果: 2
```

## 値

数値です。

{{js_property_attributes(0, 0, 1)}}

## 解説

{{jsxref("Function")}} オブジェクトの `length` プロパティは、関数が期待する引数の数、つまり形式上の引数の数を示します。

- [既定値](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)のある最初の引数より前の引数だけがカウントされます。
- [分割パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)は単一の引数としてカウントされます。
- [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)は除外されます。

これに対し、 {{jsxref("Functions/arguments/length", "arguments.length")}} は関数のローカルスコープ内で用いられ、関数が実際に受け取った引数の数、つまり実引数の数を参照するのに用いるものです。

{{jsxref("Function")}} コンストラクター自体は、 `Function` オブジェクトです。この `length` データプロパティの値は 1 です。

歴史的な理由により、 `Function.prototype` は自身を呼び出すことができます。 `Function.prototype` の `length` は `0` の値を持ちます。

## 例

### 関数の length の使用

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 etc.

console.log(((...args) => {}).length);
// 0, rest parameter は数に含まれない

console.log(((a, b = 1, c) => {}).length);
// 1, 既定値を持つ引数が最初に登場する前までの
// 引数だけが数に含まれる

console.log((({ a, b }, [c, d]) => {}).length);
// 2, 分割パターンは、それぞれ単一の引数としてカウントされる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function")}}
