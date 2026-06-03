---
title: function* 式
slug: Web/JavaScript/Reference/Operators/function*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`function*`** キーワードは、式の中でジェネレーター関数を定義するために使用することができます。

また、ジェネレーター関数は[`function*`宣言](/ja/docs/Web/JavaScript/Reference/Statements/function*)を使用して定義することもできます。

{{InteractiveExample("JavaScript デモ: function* 式", "taller")}}

```js interactive-example
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// 予想される結果: "abc"
```

## 構文

```js-nolint
function* (param0) {
  statements
}
function* (param0, param1) {
  statements
}
function* (param0, param1, /* …, */ paramN) {
  statements
}

function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> [式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)は、[`function*`宣言](/ja/docs/Web/JavaScript/Reference/Statements/function*)との曖昧さを避けるため、キーワード `function` で始めることはできません。`function` キーワードが式を始めるのは、文を受け入れないコンテキストで現れる場合のみです。

### 引数

- `name` {{optional_inline}}
  - : 関数名。省略可。省略した場合、関数は*無名関数*として認識されます。名前は関数本体のみにローカルです。
- `paramN` {{optional_inline}}
  - : 関数の形式引数の名前。 引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#関数の引数)を参照してください。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文。

## 解説

`function*` 式は [`function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function*)ととてもよく似ており、構文もほとんど同じです。`function*` 式と `function*` 文の主な違いは、`function*` 式で無名ジェネレーター関数を生成する場合は関数名が省略できる点です。 `function*` 式は、定義すると直ちに実行する [IIFE](/ja/docs/Glossary/IIFE) （即時実行関数式）として使用できるため、その場で作成する[反復可能イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)を実現することができます。詳細は[関数](/ja/docs/Web/JavaScript/Reference/Functions)に関する章も参照してください。

## 例

### function\* 式の使用

次の例では、無名ジェネレーター関数を定義し、`x` に代入します。この関数は引数の二乗を生成します。

```js
const x = function* (y) {
  yield y * y;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function*", "function*")}} 文
- {{jsxref("GeneratorFunction")}} オブジェクト
- [反復プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
