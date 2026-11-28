---
title: ビット論理和代入演算子 (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

ビット論理和代入演算子 (`|=`) は、両方のオペランドの二進表現を使用し、それらに対してビット単位の OR 演算を実行して、結果を変数に代入します。

{{InteractiveExample("JavaScript デモ: ビット論理和代入演算子 (|=)")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
// 予想される結果: 7
```

## 構文

```js-nolint
x |= y
```

### 引数

- `x`
  - : 有効な代入対象です。例えば、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)などが該当します。現在の値は[符号付き 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)または[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#長整数への強制変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。その値は[符号付き 32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)または[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt#長整数への強制変換)に強制変換されます。

### 返値

元の `x` の値を使って [`x | y`](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) を計算した結果の数値または長整数です。

## 解説

`x |= y` は `x = x | y` と同等である（ただし、式 `x` は一度だけ評価されます）。

## 例

### ビット論理和代入の使用

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [ビット論理和演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [論理 OR 代入 (`||=`)](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
