---
title: 左シフト代入演算子 (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**左シフト代入演算子 (`<<=`)** は、 2 つのオペランドで[左シフト](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)を実行し、その結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 左シフト代入演算子 (<<=)", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// 予想される結果: 20
```

## 構文

```js-nolint
x <<= y
```

### 引数

- `x`
  - : 有効な代入対象です。例えば、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)などがあります。現在の値は[符号付き 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)または[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#長整数への強制変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。その値は[符号なし 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)または[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#長整数への強制変換)に強制変換されます。数値の場合、シフト量は下位 5 ビットで決まります。長整数の場合、負のシフト量はシフト方向を反転させます。

### 返値

元の値の `x` に対して [`x << y`](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift) を実行して得られる数値または長整数です。

## 解説

`x <<= y` は `x = x << y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### 左シフト代入演算子の使用

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [代入演算子（JavaScript ガイド）](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [左シフト演算子 (`<<`)](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)
