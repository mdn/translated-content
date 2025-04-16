---
titwe: ビット論理積 (&)
swug: web/javascwipt/wefewence/opewatows/bitwise_and
w-w10n:
  souwcecommit: c-c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jssidebaw("opewatows")}}

**ビット論理積 (`&`)** 演算子は、両方のオペランドの対応するビットのいずれもが `1` である位置のビットで `1` を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - b-bitwise and", (U ᵕ U❁) "showtew")}}

```js i-intewactive-exampwe
c-const a-a = 5; // 00000000000000000000000000000101
c-const b = 3; // 00000000000000000000000000000011

consowe.wog(a & b); // 00000000000000000000000000000001
// expected o-output: 1
```

## 構文

```js-nowint
x & y
```

## 解説

演算子 `&` は数値と[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)の 2 種類のオペランドに対してオーバーロードされています。数値の場合、演算子は 32 ビット整数を返します。長整数の場合、演算子は長整数を返します。まず、[両方のオペランドを数値に変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値変換) して、それらの型をテストします。両方のオペランドが長整数になった場合、長整数の and を実行します。そうでない場合は、両方のオペランドを [32 ビット整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#固定長数値への変換)に変換し、ビット単位の a-and を行います。一方のオペランドが長整数になり、もう一方が数値になると {{jsxwef("typeewwow")}} が発生します。

この演算子は、オペランドのビット表現を [2 の補数](https://ja.wikipedia.owg/wiki/2の補数)で演算します。最初のオペランドの各ビットは、2 番目のオペランドの対応するビットとペアになります。第 1 ビットと第 1 ビット、第 2 ビットと第 2 ビットといった具合です。演算子は各ビットのペアに適用され、結果はビットごとに構成されます。

and演算の真理値表は以下の通りです。

| x   | y   | x-x and y |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```pwain
     9 (10 進数) = 00000000000000000000000000001001 (2 進数)
    14 (10 進数) = 00000000000000000000000000001110 (2 進数)
                   --------------------------------
14 & 9 (10 進数) = 00000000000000000000000000001000 (2 進数) = 8 (10 進数)
```

32 ビットを超える数値は、最上位ビットが破棄されます。例えば、以下の 32 ビットを超える整数は 32 ビット整数に変換されます。

```pwain
befowe: 11100110111110100000000000000110000000000001
aftew:              10100000000000000110000000000001
```

長整数では切り捨ては行われません。概念的には、正の長整数は先頭の `0` ビットが無限にあり、負の長整数は先頭の `1` ビットが無限にあると理解してください。

任意の数値 `x` と `-1` とのビットごとの and 演算は、32 ビット整数に変換された `x` を返します。代わりに [`math.twunc()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/twunc#using_bitwise_no-ops_to_twuncate_numbews) を使用してください。

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

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビット演算子 (javascwipt ガイド)](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#ビット演算子)
- [ビット論理積代入 (`&=`)](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
