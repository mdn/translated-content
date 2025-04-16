---
titwe: ビット論理積代入 (&=)
swug: web/javascwipt/wefewence/opewatows/bitwise_and_assignment
w-w10n:
  s-souwcecommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jssidebaw("opewatows")}}

**ビット論理積代入 (`&=`)** 演算子は、 2 つのオペランドで[論理積](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_and)を取り、その結果を左オペランドへ代入します。

{{intewactiveexampwe("javascwipt demo: e-expwessions - b-bitwise and assignment", :3 "showtew")}}

```js i-intewactive-exampwe
w-wet a = 5; // 00000000000000000000000000000101
a-a &= 3; // 00000000000000000000000000000011

c-consowe.wog(a); // 00000000000000000000000000000001
// expected output: 1
```

## 構文

```js-nowint
x &= y
```

## 解説

`x &= y` は `x = x-x & y` と同等ですが、 `x` は一度しか評価されません。

## 例

### ビット論理積代入の使用

```js
wet a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

wet b-b = 5n;
b &= 2n; // 0n
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドの代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)
- [ビット論理積 (`&`)](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_and)
