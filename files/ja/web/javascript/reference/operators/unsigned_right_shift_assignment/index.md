---
title: 符号なし右シフト代入演算子 (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**符号なし右シフト代入演算子 (`>>>=`)** は、2 つのオペランドで[符号なし右シフト](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)を実行し、その結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 符号なし右シフト代入演算子 (>>>=)")}}

```js interactive-example
let a = 5; //  00000000000000000000000000000101

a >>>= 2; //  00000000000000000000000000000001
console.log(a);
// 予想される結果: 1

let b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
console.log(b);
// 予想される結果: 1073741822
```

## 構文

```js-nolint
x >>>= y
```

### 引数

- `x`
  - : [識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)などの有効な代入対象です。現在の値は[符号なし 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2（代入）以上の式です。その値は[符号なし 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)に強制変換されます。シフト量は下位 5 ビットで決まります。

### 返値

元の `x` の値で `x >>> y` を評価した結果の符号なし 32 ビット整数です。

## 解説

`x >>>= y` は `x = x >>> y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### 符号なし右シフト代入の使用

```js
let a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)

let c = 5n;
c >>>= 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [代入演算子（JavaScript ガイド）](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [符号なし右シフト演算子 (`>>>`)](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
