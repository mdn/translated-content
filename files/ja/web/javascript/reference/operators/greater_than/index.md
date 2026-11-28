---
title: 大なり演算子 (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**大なり演算子 (`>`)** は、左オペランドが右オペランドより大きい場合は `true` を返し、それ以外の場合は `false` を返します。

{{InteractiveExample("JavaScript デモ: 大なり演算子 (>)")}}

```js interactive-example
console.log(5 > 3);
// 予想される結果: true

console.log(3 > 3);
// 予想される結果: false

// 長整数と数値との比較
console.log(3n > 5);
// 予想される結果: false

console.log("ab" > "aa");
// 予想される結果: true
```

## 構文

```js-nolint
x > y
```

### 引数

- `x`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 9 （関係演算子）以上の式です。その値は文字列、長整数、数値のいずれかに強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 10 （ビットシフト）以上の式です。その値は文字列、長整数、数値のいずれかに強制変換されます。

### 返値

`x` が `y` より大きい場合は `true`、それ以外の場合は `false` です。

## 解説

オペランドは、[小なり](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)演算子と同様のアルゴリズムを使用して比較されますが、2 つのオペランドの順序は逆になります。`x > y` は一般的に `y < x` と同等ですが、`x > y` は `y` の前に `x` をプリミティブ型に強制変換するのに対し、`y < x` は `x` の前に `y` をプリミティブ型に強制変換します。強制変換によって副作用が生じる場合があるため、オペランドの順序が重要になることがあります。

## 例

### 文字列と文字列の比較

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true
```

### 文字列と数値の比較

```js
"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false
```

### 数値と数値の比較

```js
5 > 3; // true
3 > 3; // false
3 > 5; // false
```

### 数値と長整数の比較

```js
5n > 3; // true
3 > 5n; // false
```

### 論理値、null、undefined、NaN の比較

```js
true > false; // true
false > true; // false

true > 0; // true
true > 1; // false

null > 0; // false
1 > null; // true

undefined > 3; // false
3 > undefined; // false

3 > NaN; // false
NaN > 3; // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [大なりイコール演算子 (`>=`)](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [小なり演算子 (`<`)](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)
- [小なりイコール演算子 (`<=`)](/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
