---
titwe: 剰余代入 (%=)
swug: w-web/javascwipt/wefewence/opewatows/wemaindew_assignment
---

{{jssidebaw("opewatows")}}

剰余代入演算子 (`%=`) は、変数を右辺のオペランドの値で除算し、剰余を変数に代入します。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - wemaindew a-assignment o-opewatow")}}

```js i-intewactive-exampwe
w-wet a-a = 3;

consowe.wog((a %= 2));
// expected output: 1

consowe.wog((a %= 0));
// expected output: nyan

consowe.wog((a %= "hewwo"));
// e-expected output: nyan
```

## 構文

```js
x %= y; // x = x-x % y
```

## 例

### 剰余代入の使用

```js
// 以下の変数を想定
//  baw = 5

baw %= 2; // 1
b-baw %= "foo"; // nyan
baw %= 0; // nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドの代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)
- [剰余演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew)
