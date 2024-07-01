---
title: async function 式
slug: Web/JavaScript/Reference/Operators/async_function
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Operators")}}

**`async function`** キーワードは、式の中で非同期関数を定義するために使用できます。

非同期関数は、[`async function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function)または[アロー構文](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用して定義することもできます。

## 構文

```js-nolint
async function (param0) {
  statements
}
async function (param0, param1) {
  statements
}
async function (param0, param1, /* …, */ paramN) {
  statements
}

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> **メモ:** [式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)は `async function` キーワードを使用することができません。[`async function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function)との混同を防ぐためです。`async function` キーワードは文を受け付けることができないコンテキストで現れた場合のみ、式の始まりになります。

### 引数

- `name` {{optional_inline}}
  - : 関数名です。関数が*無名*の場合は省略可能です。名前は関数の本体内のみのローカルです。
- `paramN` {{optional_inline}}
  - : 関数に渡される引数名です。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#function_parameters)を参照してください。
- `statements` {{optional_inline}}
  - : 関数本体を構成する文です。

## 解説

`async function` 式は [`async function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function)とよく似ており、構文もほとんど同じです。async `function` 式と `async function` 宣言の主な違いは、`async function` 式が*関数名*を省略して*無名*関数を生成することができる点です。`async function` 式は、定義後直ちに実行される [IIFE](/ja/docs/Glossary/IIFE)（即時実行関数式）として使用することもでき、[最上位の await](/ja/docs/Web/JavaScript/Guide/Modules#最上位の_await) を模倣することができます。詳細は[関数](/ja/docs/Web/JavaScript/Reference/Functions)の章を見てください。

## 例

### シンプルな例

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// 変数に代入された非同期関数式
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // 4 秒後に 60 を表示
});

// IIFE として使用される非同期関数式
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // 2 秒後に 60 を表示
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}
