---
title: Number() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
tags:
  - コンストラクター
  - JavaScript
  - Number
  - リファレンス
  - ポリフィル
browser-compat: javascript.builtins.Number.Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number/Number
---
{{JSRef}}

**`Number()` コンストラクター**は、 {{jsxref("Number")}} オブジェクトを生成します。

## 構文

```js
new Number(value)
```

## 引数

- `value`
  - : 作成するオブジェクトの数値です。

## 例

### Number オブジェクトの生成

```js
const a = new Number('123'); // a === 123 は false
const b = Number('123');     // b === 123 は true
a instanceof Number;         // は true
b instanceof Number;         // は false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 現在の `Number` の動作のポリフィル (2 進数と 8 進数のリテラルの対応あり) は [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- {{jsxref("NaN")}}
- {{jsxref("Math")}} グローバルオブジェクト
- 可変精度の整数: {{jsxref("BigInt")}}
