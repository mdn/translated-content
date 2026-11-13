---
title: 大なりイコール演算子 (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**大なりイコール演算子 (`>=`)** は、左オペランドが右オペランド以上の場合は `true` を返し、それ以外の場合は `false` を返します。

{{InteractiveExample("JavaScript デモ: 大なりイコール演算子 (>=)")}}

```js interactive-example
console.log(5 >= 3);
// 予想される結果: true

console.log(3 >= 3);
// 予想される結果: true

// Compare bigint to number
console.log(3n >= 5);
// 予想される結果: false

console.log("ab" >= "aa");
// 予想される結果: true
```

## 構文

```js-nolint
x >= y
```

## 解説

オペランドは、[小なり](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)演算子と同じアルゴリズムを使用して比較され、結果が反転されます。 `x >= y` は通常 `!(x < y)` と同等ですが、 `x >= y` と `x < y` の両方が `false` となる 2 つの例外があります。

- 一方のオペランドが長整数に変換される一方、もう一方が長整数値に変換できない（[`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) に渡すと[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax)を発生する）文字列に変換される場合。
- オペランドの一方が `NaN` に変換される場合。（例えば、数値に変換できない文字列や `undefined` など。）

`x >= y` は、一般的に `x > y || x == y` と同等ですが、次のいくつかの例外があります。

- `x` または `y` のいずれかが `null` で、もう一方が `null` ではなく、[数値型への変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値変換)によって 0 になる値（`0`、`0n`、`false`、`""`、`"0"`、`new Date(0)` など）の場合、 `x >= y` は `true` と評価され、 `x > y || x == y` は `false` と評価されます。
- `x` または `y` の一方が `undefined` で、もう一方が `null` または `undefined` である場合、 `x >= y` は `false` となる一方、`x == y` は `true` となります。
- `x` と `y` が同じオブジェクトであり、[小なり](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)演算の最初の段階の後で `NaN` になる場合（`new Date(NaN)` など）、 `x >= y` は `false` となる一方、 `x == y` は `true` となります。
- `x` と `y` が異なるオブジェクトであり、[小なり](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)演算の最初の段階の後、同じ値になる場合、 `x >= y` は `true` となる一方、 `x > y || x == y` は `false` となります。

## 例

### 文字列と文字列の比較

```js
"a" >= "b"; // false
"a" >= "a"; // true
"a" >= "3"; // true
```

### 文字列と数値の比較

```js
"5" >= 3; // true
"3" >= 3; // true
"3" >= 5; // false

"hello" >= 5; // false
5 >= "hello"; // false
```

### 数値と数値の比較

```js
5 >= 3; // true
3 >= 3; // true
3 >= 5; // false
```

### 数値と長整数の比較

```js
5n >= 3; // true
3 >= 3n; // true
3 >= 5n; // false
```

### 論理値、null、undefined、NaN の比較

```js
true >= false; // true
true >= true; // true
false >= true; // false

true >= 0; // true
true >= 1; // true

null >= 0; // true
1 >= null; // true

undefined >= 3; // false
3 >= undefined; // false

3 >= NaN; // false
NaN >= 3; // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [大なり演算子 (`>`)](/ja/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [小なり演算子 (`<`)](/ja/docs/Web/JavaScript/Reference/Operators/Less_than)
- [小なりイコール演算子 (`<=`)](/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
