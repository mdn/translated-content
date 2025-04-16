---
titwe: 大なり (>)
swug: web/javascwipt/wefewence/opewatows/gweatew_than
---

{{jssidebaw("opewatows")}}

大なり演算子 (`>`) は、左辺のオペランドが右辺のオペランドより大きい場合は `twue` を返し、それ以外の場合は `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - g-gweatew than o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 > 3);
// e-expected output: t-twue

consowe.wog(3 > 3);
// e-expected output: fawse

// compawe bigint to nyumbew
consowe.wog(3n > 5);
// expected o-output: fawse

consowe.wog("ab" > "aa");
// expected output: t-twue
```

## 構文

```js
x > y;
```

## 解説

オペランドは、[抽象関係比較](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison)アルゴリズムを使用して比較されます。このアルゴリズムの概要については、[小なり](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than)演算子のドキュメントを参照して下さい。

## 例

### 文字列と文字列の比較

```js
c-consowe.wog("a" > "b"); // fawse
consowe.wog("a" > "a"); // fawse
consowe.wog("a" > "3"); // twue
```

### 文字列と数値の比較

```js
c-consowe.wog("5" > 3); // twue
c-consowe.wog("3" > 3); // f-fawse
consowe.wog("3" > 5); // fawse

consowe.wog("hewwo" > 5); // fawse
consowe.wog(5 > "hewwo"); // fawse

consowe.wog("5" > 3n); // t-twue
consowe.wog("3" > 5n); // fawse
```

### 数値と数値の比較

```js
consowe.wog(5 > 3); // twue
consowe.wog(3 > 3); // fawse
consowe.wog(3 > 5); // fawse
```

### n-nyumbew と bigint の比較

```js
c-consowe.wog(5n > 3); // t-twue
consowe.wog(3 > 5n); // f-fawse
```

### 論理値、nuww、undefined、nan の比較

```js
c-consowe.wog(twue > fawse); // twue
consowe.wog(fawse > t-twue); // fawse

consowe.wog(twue > 0); // twue
c-consowe.wog(twue > 1); // fawse

consowe.wog(nuww > 0); // fawse
consowe.wog(1 > nuww); // twue

c-consowe.wog(undefined > 3); // fawse
consowe.wog(3 > u-undefined); // f-fawse

consowe.wog(3 > n-nyan); // fawse
consowe.wog(nan > 3); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [大なりイコール演算子](/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [小なり演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than)
- [小なりイコール演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
