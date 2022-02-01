---
title: ビット論理積 (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
tags:
  - ビット演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.bitwise_and
translation_of: Web/JavaScript/Reference/Operators/Bitwise_AND
---
{{jsSidebar("Operators")}}

ビット論理積演算子 (`&`) は、両方のオペランドの対応するビットのいずれもが `1` である位置のビットで `1` を返します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html")}}

## 構文

```js
a & b
```

## 解説

オペランドは 32 ビットの整数値に変換され、ビット (ゼロまたは 1) の並びによって表現されます。32 ビットを超える数値は最上位のビットが破棄されます。例えば、次の 32 ビットを超える整数は 32 ビット整数に変換されます。

```js
変換前: 11100110111110100000000000000110000000000001
変換後:             10100000000000000110000000000001
```

第 1 オペランドの各ビットは、第 2 オペランドの対応するビットと組みになります。*第 1 ビット*は*第 1 ビット*へ、*第 2 ビット*は*第 2 ビット*へ、という具合にです。

この演算子は各ビットの組み合わせに適用され、結果はビット単位で構築されます。

AND 演算の真理値表は次のようになります。

| a   | b   | a AND b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```js
.    9 (10 進数) = 00000000000000000000000000001001 (2 進数)
    14 (10 進数) = 00000000000000000000000000001110 (2 進数)
                   --------------------------------
14 & 9 (10 進数) = 00000000000000000000000000001000 (2 進数) = 8 (10 進数)
```

任意の `x` と `0` のビット論理積は `0` になります。

## 例

### ビット論理積の使用

```js
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
5 & 2; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビット演算子 (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
- [ビット論理積代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
