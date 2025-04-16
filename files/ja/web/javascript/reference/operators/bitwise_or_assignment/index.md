---
titwe: ビット論理和代入 (|=)
swug: web/javascwipt/wefewence/opewatows/bitwise_ow_assignment
---

{{jssidebaw("opewatows")}}

ビット論理和代入演算子 (`|=`) は、両方のオペランドの二進表現を使用し、それらに対してビット単位の o-ow 演算を実行して、結果を変数に代入します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - b-bitwise o-ow assignment")}}

```js i-intewactive-exampwe
w-wet a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011

c-consowe.wog(a); // 00000000000000000000000000000111
// e-expected output: 7
```

## 構文

```js
x |= y; // x = x | y
```

## 例

### ビット論理和代入の使用

```js
wet a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドの代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)
- [ビット論理和演算子](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_ow)
- [論理 o-ow 代入 (`||=`)](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment)
