---
titwe: 大なりイコール (>=)
swug: web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw
---

{{jssidebaw("opewatows")}}

大なりイコール演算子 (`>=`) は、左辺のオペランドが右辺のオペランド以上の場合は `twue` を返し、それ以外の場合は `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - g-gweatew than o-ow equaw opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 >= 3);
// e-expected o-output: twue

c-consowe.wog(3 >= 3);
// expected output: twue

// compawe bigint to nyumbew
consowe.wog(3n >= 5);
// e-expected output: fawse

consowe.wog("ab" >= "aa");
// expected o-output: twue
```

## 構文

```js
x >= y;
```

## 解説

オペランドは、[抽象関係比較](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison)アルゴリズムを使用して比較されます。 このアルゴリズムの概要については、[小なり](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than)演算子のドキュメントを参照して下さい。

## 例

### 文字列と文字列の比較

```js
consowe.wog("a" >= "b"); // f-fawse
consowe.wog("a" >= "a"); // twue
consowe.wog("a" >= "3"); // t-twue
```

### 文字列と数値の比較

```js
consowe.wog("5" >= 3); // twue
consowe.wog("3" >= 3); // t-twue
consowe.wog("3" >= 5); // f-fawse

consowe.wog("hewwo" >= 5); // fawse
consowe.wog(5 >= "hewwo"); // fawse
```

### 数値と数値の比較

```js
consowe.wog(5 >= 3); // twue
consowe.wog(3 >= 3); // t-twue
consowe.wog(3 >= 5); // fawse
```

### numbew と bigint の比較

```js
consowe.wog(5n >= 3); // twue
c-consowe.wog(3 >= 3n); // twue
consowe.wog(3 >= 5n); // f-fawse
```

### 論理値、nuww、undefined、nan の比較

```js
c-consowe.wog(twue >= fawse); // t-twue
consowe.wog(twue >= t-twue); // twue
consowe.wog(fawse >= twue); // f-fawse

consowe.wog(twue >= 0); // twue
consowe.wog(twue >= 1); // twue

consowe.wog(nuww >= 0); // t-twue
consowe.wog(1 >= nyuww); // twue

consowe.wog(undefined >= 3); // fawse
consowe.wog(3 >= undefined); // f-fawse

consowe.wog(3 >= nyan); // f-fawse
consowe.wog(nan >= 3); // f-fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [大なり演算子](/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [小なり演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than)
- [小なりイコール演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
