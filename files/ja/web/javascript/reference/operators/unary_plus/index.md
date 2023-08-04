---
title: 単項プラス (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
---

{{jsSidebar("Operators")}}

<p>単項プラス演算子 (`+`) は、オペランドの前に置かれ、そのオペランドを評価し、それが数値以外の場合は数値に変換します。</p>

{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}

## 構文

```js
+x;
```

## 解説

単項マイナス (`-`) も非数値を数値に変換できますが、単項プラスは数値に対して他の演算を行わないため、非数値を数値に変換する最も高速で好ましい方法です。これは、整数や浮動小数点の文字列表現や、非文字列値である `true`、`false`、`null` を変換することができます。10 進数と 16 進数 (接頭辞 0x) の両形式の整数と負の数 (ただし 16 進数を除く) に対応しています。BigInt 値に対してこの演算子を使用すると TypeError が発生します。特定の値を解析できない場合は、{{jsxref("NaN")}} と評価されます。</p>

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

```js
+true; // 1
+false; // 0
+null; // 0
+function(val){ return val }; // NaN
+1n; // BigInt 値は数値に変換できないためエラーになります
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [加算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Addition)
- [減算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Division)
- [乗算演算子](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [剰余演算子](/ja/docs/Web/JavaScript/Reference/Operators/Remainder)
- [べき乗演算子](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [インクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Increment)
- [デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators/Decrement)
- [単項マイナス演算子](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
