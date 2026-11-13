---
title: 単項プラス演算子 (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**単項プラス演算子 (`+`)** は、オペランドの前に置かれ、そのオペランドを評価し、それが数値以外の場合は[数値へ変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)しようとします。

{{InteractiveExample("JavaScript デモ: 単項プラス演算子 (+)", "taller")}}

```js interactive-example
const x = 1;
const y = -1;

console.log(+x);
// 予想される結果: 1

console.log(+y);
// 予想される結果: -1

console.log(+"");
// 予想される結果: 0

console.log(+true);
// 予想される結果: 1

console.log(+false);
// 予想される結果: 0

console.log(+"hello");
// 予想される結果: NaN
```

## 構文

```js-nolint
+x
```

## 解説

単項マイナス (`-`) も非数値を数値に変換できますが、単項プラスは数値に対して他の演算を行わないため、非数値を数値に変換する最も高速で好ましい方法です。

単項プラス演算子は、数値を期待するほとんどの組み込みメソッドで使用される通常の[数値の型変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)と全く同じ段階を踏みます。整数や浮動小数点の文字列表現、および非文字列値である `true`、`false`、`null` を変換することができます。 10 進数および 16 進数（`0x`接頭辞付き）形式の整数に対応しています。負の数値も対応しています（ただし 16 進数は除く）。特定の値を解釈できない場合、{{jsxref("NaN")}} と評価されます。数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の両方で動作する他の算術演算子とは異なり、長整数値に対して `+` 演算子を使用すると {{jsxref("TypeError")}} が発生します。

## 例

### 数値での使い方

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### 数値以外での使い方

```js-nolint
+true  // 1
+false // 0
+null  // 0
+[]    // 0
+function (val) { return val; } // NaN
+1n    // TypeError: Cannot convert BigInt value to number が発生
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
- [デクリメント演算子 (`--`)](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子 (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
