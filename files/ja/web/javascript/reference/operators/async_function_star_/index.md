---
title: async function* 式
slug: Web/JavaScript/Reference/Operators/async_function*
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Operators")}}

**`async function*`** キーワードは、式の内部で非同期ジェネレーター関数を定義するために使用できます。

また、 [`async function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function*) を使って非同期ジェネレーター関数を定義することもできます。

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## 構文

```js-nolint
async function* (param0) {
  statements
}
async function* (param0, param1) {
  statements
}
async function* (param0, param1, /* …, */ paramN) {
  statements
}

async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> **メモ:** [式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement) は、 [`async function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)との曖昧さを避けるために、キーワード `async function` で始めることはできません。 `async function` キーワードは、文を受け付けないコンテキストに現れたときのみ、式を開始します。

### 引数

- `name` {{optional_inline}}
  - : 関数名。省略可能で、その場合関数は無名となります。この名前は関数本体に対してのみローカルです。
- `paramN` {{optional_inline}}
  - : 関数の正式な引数の名前です。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#function_parameters)を参照してください。
- `statements` {{optional_inline}}
  - : 関数本体を構成する文です。

## 解説

`async function*` 式は [`async function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function*) ととても似ており、ほとんど同じ構文を持っています。 `async function*` 式と `async function*` 宣言の主な違いは関数名で、 `async function*` 式では無名関数を作成するために省略することができます。 `async function*` 式は定義されるとすぐに実行される [IIFE](/ja/docs/Glossary/IIFE) (Immediately Invoked Function Expression) として使うことができ、アドホックな[非同期反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)を作成することができます。詳しくは[関数](/ja/docs/Web/JavaScript/Reference/Functions)の章も参照してください。

## 例

### async function\* の使用

次の例では、無名の非同期ジェネレーター関数を定義し、それを `x` に代入しています。この関数は引数の2乗を返します。

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6)
  .next()
  .then((res) => console.log(res.value)); // 36
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("AsyncGeneratorFunction")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Functions", "Functions", "", 1)}}
