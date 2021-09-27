---
title: ビット否定 (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
tags:
  - ビット演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
browser-compat: javascript.operators.bitwise_not
translation_of: Web/JavaScript/Reference/Operators/Bitwise_NOT
---
{{jsSidebar("Operators")}}

ビット否定演算子 (`~`) は、オペランドの各ビットを反転します。他のビット演算子と同様、オペランドを 32 ビット符号付き整数に変換します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## 構文

```js
~a
```

## 解説

オペランドは 32 ビットの整数値に変換され、ビット (ゼロまたは 1) の並びによって表現されます。32 ビットを超える数値は最上位のビットが破棄されます。例えば、次の 32 ビットを超える整数は 32 ビット整数に変換されます。

```js
変換前: 11100110111110100000000000000110000000000001
変換後:             10100000000000000110000000000001
```

オペランドの各ビットが反転されて結果になります。

`NOT` 演算の真理値表は次のようになります。

| a   | NOT a |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```js
 9 (10 進数) = 00000000000000000000000000001001 (2 進数)
               --------------------------------
~9 (10 進数) = 11111111111111111111111111110110 (2 進数) = -10 (10 進数)
```

32 ビット符号付き整数のオペランドは、[2 の補数](https://ja.wikipedia.org/wiki/2%E3%81%AE%E8%A3%9C%E6%95%B0)によって反転されます。すなわち、最上位ビットが負の数であることを表します。

ある数 `x` のビット否定 は `-(x + 1)` になります。例えば、`~-5` は `4` になります。

数値に 32 ビット表現を使用するため `~-1` および `~4294967295` (2^32 - 1) はいずれも `0` になることに注意してください。

## 例

### ビット否定の使用

```js
~0;  // -1
~-1; // 0
~1;  // -2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビット演算子 (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
