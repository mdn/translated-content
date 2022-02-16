---
title: 非同期関数式
slug: Web/JavaScript/Reference/Operators/async_function
tags:
  - 関数
  - JavaScript
  - 言語機能
  - 演算子
  - Primary Expression
browser-compat: javascript.operators.async_function
translation_of: Web/JavaScript/Reference/Operators/async_function
---
{{jsSidebar("Operators")}}

**`async function`** キーワードは、式の中で `async` 関数を定義するために使用できます。

非同期関数は、 [async function 文](/ja/docs/Web/JavaScript/Reference/Statements/async_function)を使用して定義することもできます。

## 構文

```js
async function [name]([param1[, param2[, ..., paramN]]]) {
  statements
}
```

ES2015 では、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用することもできます。

### 引数

- `name`
  - : 関数名です。関数が*無名*の場合は省略可能です。名前は関数の本体内のみのローカルです。
- `paramN`
  - : 関数に渡される引数名です。
- `statements`
  - : 関数本体を構成する文です。

## 解説

`async function` 式は {{jsxref('Statements/async_function', 'async function 文')}}とよく似ており、構文もほとんど同じです。async `function` 式と async `function` 文の主な違いは、`async function` 式が*関数名*を省略して*無名*関数を生成することができる点です。 `async function` 式は、定義後直ちに実行される [IIFE](/ja/docs/Glossary/IIFE) (即時実行関数式) として使用することもできます。詳細は[関数](/ja/docs/Web/JavaScript/Reference/Functions)の章を見てください。

## 例

### シンプルな例

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

const add = async function(x) { // 変数に代入された非同期関数式
  let a = await resolveAfter2Seconds(20);
  let b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then(v => {
  console.log(v);  // 4 秒後に 60 を表示
});

(async function(x) { // IIFE として使用される非同期関数式
  let p_a = resolveAfter2Seconds(20);
  let p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // 2 秒後に 60 を表示
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}} オブジェクト
- {{jsxref("Operators/await", "await")}}
