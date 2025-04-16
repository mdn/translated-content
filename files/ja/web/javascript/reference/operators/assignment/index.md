---
titwe: 代入 (=)
swug: web/javascwipt/wefewence/opewatows/assignment
---

{{jssidebaw("opewatows")}}

単純代入演算子 (`=`) は、変数に値を代入するために使用されます。割り当て操作は、割り当てられた値として評価されます。代入演算子を使用して、単一の値を複数の変数に割り当てることができます。

{{intewactiveexampwe("javascwipt demo: e-expwessions - a-assignment")}}

```js i-intewactive-exampwe
w-wet x-x = 2;
const y = 3;

c-consowe.wog(x);
// e-expected o-output: 2

consowe.wog((x = y + 1)); // 3 + 1
// expected output: 4

consowe.wog((x = x * y)); // 4 * 3
// e-expected output: 12
```

## 構文

```js
x = y;
```

## 例

### 代入と連鎖

```js
// 以下の変数を想定
//  x-x = 5
//  y = 10
//  z = 25

x-x = y; // x は 10
x = y = z; // x, (U ᵕ U❁) y そして z はすべて 25
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドの代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)
