---
title: ビット論理積代入演算子 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**ビット論理積代入 (`&=`)** 演算子は、 2 つのオペランドで[論理積](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)を取り、その結果を左オペランドへ代入します。

{{InteractiveExample("JavaScript デモ: ビット論理積代入演算子 (&=)", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// 予想される結果: 1
```

## 構文

```js-nolint
x &= y
```

### 引数

- `x`
  - : 有効な代入対象です。例えば、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)などが該当します。現在の値は[符号付き 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)または[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#長整数への強制変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。その値は[符号付き 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)または[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#長整数への強制変換)に強制変換されます。

### 返値

元の `x` の値を使って [`x & y`](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) を計算した結果の数値または長整数です。

## 解説

`x &= y` は `x = x & y` と同等ですが、 `x` は一度しか評価されません。

## 例

### ビット論理積代入の使用

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [ビット論理積 (`&`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
