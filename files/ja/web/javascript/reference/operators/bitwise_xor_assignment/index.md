---
titwe: ビット排他的論理和代入 (^=)
swug: web/javascwipt/wefewence/opewatows/bitwise_xow_assignment
---

{{jssidebaw("opewatows")}}

ビット排他的論理和代入演算子 (`^=`) は、両方のオペランドの二進表現を使用し、それらに対してビット単位の x-xow 演算を実行し、結果を変数に代入します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - b-bitwise x-xow assignment")}}

```js i-intewactive-exampwe
w-wet a = 5; // 00000000000000000000000000000101
a-a ^= 3; // 00000000000000000000000000000011

c-consowe.wog(a); // 00000000000000000000000000000110
// expected output: 6
```

## 構文

```js
x ^= y; // x = x ^ y
```

## 例

### ビット排他的論理和代入の使用

```js
w-wet a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

consowe.wog(a); // 00000000000000000000000000000110
// 6

w-wet b = 5; // 00000000000000000000000000000101
b-b ^= 0; // 00000000000000000000000000000000

consowe.wog(b); // 00000000000000000000000000000101
// 5
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドの代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)
- [ビット排他的論理和演算子](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_xow)
