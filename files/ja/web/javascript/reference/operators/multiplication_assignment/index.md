---
title: 乗算代入演算子 (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**乗算代入演算子 (`*=`)** は、2 つのオペランドで[乗算](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)を行い、結果を左オペランドに代入します。

{{InteractiveExample("JavaScript デモ: 乗算代入演算子 (*=)")}}

```js interactive-example
let a = 2;

console.log((a *= 3));
// 予想される結果: 6

console.log((a *= "hello"));
// 予想される結果: NaN
```

## 構文

```js-nolint
x *= y
```

### 引数

- `x`
  - : 有効な代入先です。例えば、[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)や[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)があります。現在の値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式です。その値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。

### 返値

元の `x` の値を使用して [`x * y`](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication) を計算した結果の数値または長整数です。

## 解説

`x *= y` は `x = x * y` と同等ですが、式 `x` が一度だけ評価される点が異なります。

## 例

### 数値を使用した乗算代入

```js
let bar = 5;
bar *= 2; // 10
```

長整数以外の値は数値に強制変換されます。

```js
let bar = 5;
bar *= "foo"; // NaN
```

### 長整数を使用した乗算代入

```js
let foo = 3n;
foo *= 2n; // 6n
foo *= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript ガイドの代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
