---
title: 除算演算子 (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**除算演算子 (`/`)** は、左のオペランドを被除数とし、右のオペランドを除数としたオペランド同士の除算結果を生成します。

{{InteractiveExample("JavaScript デモ: 除算演算子 (/)")}}

```js interactive-example
console.log(12 / 2);
// 予想される結果: 6

console.log(3 / 2);
// 予想される結果: 1.5

console.log(6 / "3");
// 予想される結果: 2

console.log(2 / 0);
// 予想される結果: Infinity
```

## 構文

```js-nolint
x / y
```

### 引数

- `x`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 12 （乗算）以上の式です。その値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。
- `y`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 13 （べき乗）以上の式です。その値は[数値または長整数](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)に強制変換されます。

### 返値

`x` を `y` で割った商を表す数値または長整数です。長整数の除算では、商は 0 方向に切り捨てられます。

## 解説

`/` 演算子は、数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。まず[両オペランドを数値に強制変換し](/ja/docs/Web/JavaScript/Guide/Data_structures#数値への強制変換)、それらの型を検査します。両オペランドが長整数になった場合、長整数の除算を実行します。そうでない場合は数値の除算を実行します。一方のオペランドが長整数になり、もう一方が数値になった場合は、{{jsxref("TypeError")}} が発生します。

数値の除算の結果は（丸め誤差を除けば）一般に数学上の計算と一致し、`Infinity` との演算も含まれます（例えば、`Infinity` を有限の正の数で割っても `Infinity` です）。結果の符号は、両方のオペランドの符号が同じ場合は正で、異なる場合は負です（`0` と `-0` の符号は異なります）。特殊なケースをいくつか示します。

- いずれかのオペランドが `NaN` の場合、結果は `NaN` です。
- 両方のオペランドが `Infinity` または `-Infinity` の場合、結果は `NaN` です。
- 両方のオペランドが `0` または `-0` の場合、結果は `NaN` です。
- `y` のみが `0` または `-0` の場合、`x` と `y` の符号に応じて結果は `Infinity` または `-Infinity` になります（この場合、0 は限りなく小さい値として解釈されます）。

長整数の除算では、結果は両オペランドの商を 0 方向に切り捨てた値となり、余りは破棄されます。除数 `y` が `0n` の場合、{{jsxref("RangeError")}} が発生します。これは、数値を 0 で割ると `Infinity`、`-Infinity`、または `NaN` が返る一方、長整数には無限大の概念が存在しないためです。

## 例

### 基本的な除算

```js
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity （0.0 === 0 のため）
2.0 / -0.0; // -Infinity
0 / 0; // NaN
```

長整数以外の値は数値に強制変換されます。

```js
5 / "2"; // 2.5
5 / "foo"; // NaN
```

### 長整数を使用した除算

```js
1n / 2n; // 0n
5n / 3n; // 1n
-1n / 3n; // 0n
1n / -3n; // 0n

2n / 0n; // RangeError: BigInt division by zero
```

除算で長整数と数値のオペランドを混在させることはできません。

```js example-bad
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

長整数と長整数以外で除算を行うには、どちらかのオペランドを変換してください。

```js
2n / BigInt(2); // 1n
Number(2n) / 2; // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [乗算演算子 (`*`)](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子 (`%`)](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子 (`**`)](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子 (`++`)](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [単項プラス演算子 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)
