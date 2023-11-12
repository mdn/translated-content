---
title: ビット論理積 (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

**ビット論理積 (`&`)** 演算子は、両方のオペランドの対応するビットのいずれもが `1` である位置のビットで `1` を返します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html", "shorter")}}

## 構文

```js-nolint
x & y
```

## 解説

演算子 `&` は数値と[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)の 2 種類のオペランドに対してオーバーロードされています。数値の場合、演算子は 32 ビット整数を返します。長整数の場合、演算子は長整数を返します。まず、[両方のオペランドを数値に変換](/ja/docs/Web/JavaScript/Data_structures#数値変換) して、それらの型をテストします。両方のオペランドが長整数になった場合、長整数の AND を実行します。そうでない場合は、両方のオペランドを [32 ビット整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#固定長数値への変換)に変換し、ビット単位の AND を行います。一方のオペランドが長整数になり、もう一方が数値になると {{jsxref("TypeError")}} が発生します。

この演算子は、オペランドのビット表現を [2 の補数](https://ja.wikipedia.org/wiki/2の補数)で演算します。最初のオペランドの各ビットは、2 番目のオペランドの対応するビットとペアになります。第 1 ビットと第 1 ビット、第 2 ビットと第 2 ビットといった具合です。演算子は各ビットのペアに適用され、結果はビットごとに構成されます。

AND演算の真理値表は以下の通りです。

| x   | y   | x AND y |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```plain
     9 (10 進数) = 00000000000000000000000000001001 (2 進数)
    14 (10 進数) = 00000000000000000000000000001110 (2 進数)
                   --------------------------------
14 & 9 (10 進数) = 00000000000000000000000000001000 (2 進数) = 8 (10 進数)
```

32 ビットを超える数値は、最上位ビットが破棄されます。例えば、以下の 32 ビットを超える整数は 32 ビット整数に変換されます。

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

長整数では切り捨ては行われません。概念的には、正の長整数は先頭の `0` ビットが無限にあり、負の長整数は先頭の `1` ビットが無限にあると理解してください。

任意の数値 `x` と `-1` とのビットごとの AND 演算は、32 ビット整数に変換された `x` を返します。代わりに [`Math.trunc()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) を使用してください。

## 例

### ビット論理積の使用

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 & 9;
// 8  (00000000000000000000000000001000)

14n & 9n; // 8n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビット演算子 (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#ビット演算子)
- [ビット論理積代入 (`&=`)](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
