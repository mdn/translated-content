---
title: 大なり演算子 (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
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

## 解説

オペランドは、[小なり](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)演算子と同様のアルゴリズムを使用して比較されますが、 2 つのオペランドがが逆になります。 `x > y` は一般的に `y < x` と同等ですが、`x > y` は `y` の前に `x` をプリミティブ型に強制変換するのに対し、`y < x` は `x` の前に `y` をプリミティブ型に強制変換します。変換には副作用が持つことがあるため、オペランドの順序が重要になる場合があります。

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
