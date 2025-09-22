---
title: デクリメント演算子 (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**デクリメント演算子 (`--`)** は、オペランドをデクリメント（1 を減算）し、演算子が置かれている場所次第で、デクリメントの前または後の値を返します。

{{InteractiveExample("JavaScript デモ: デクリメント演算子 (--)")}}

```js interactive-example
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// 予想される結果: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// 予想される結果: "a:2, b:2"
```

## 構文

```js-nolint
x--
--x
```

## 解説

`--` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。最初に[オペランドを数値の値に変換](/ja/docs/Web/JavaScript/Guide/Data_structures#数値変換)し、その型を検査します。オペランドが長整数になった場合、長整数の減算を実行し、そうでない場合は数値の減算を実行します。

後置演算子として使用した場合（演算子がオペランドの後ろにあった場合、例えば `x--`）、デクリメント演算子は減算を行い、減算前の値を返します。

接頭辞として使用され、演算子がオペランドの前に置かれた場合（例えば `--x`）、減算演算子は減算を行い、減算後の値を返します。

デクリメント演算子は、参照（変数やオブジェクトのプロパティ、つまり有効な[代入対象](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)であるオペランドにのみ適用することができます。 `--x` 自体は値として評価され、参照ではないため、複数のデクリメント演算子を連結することはできません。

```js-nolint example-bad
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## 例

### 後置デクリメント

```js
let x = 3;
const y = x--;
// x は 2、y は 3

let x2 = 3n;
const y2 = x2--;
// x2 は 2n、y2 は 3n
```

### 前置デクリメント

```js
let x = 3;
const y = --x;
// x は 2; y = 2

let x2 = 3n;
const y2 = --x2;
// x2 は 2n; y2 は 2n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子 (`/`)](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
