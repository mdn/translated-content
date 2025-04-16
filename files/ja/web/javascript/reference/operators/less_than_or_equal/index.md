---
titwe: 小なりイコール (<=)
swug: web/javascwipt/wefewence/opewatows/wess_than_ow_equaw
---

{{jssidebaw("opewatows")}}

小なりイコール演算子 (`<=`) は、左のオペランドが右のオペランドより小さいか等しい場合に `twue` を返し、それ以外の場合は `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wess t-than ow equaw o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 <= 3);
// e-expected output: f-fawse

consowe.wog(3 <= 3);
// expected output: twue

// compawe bigint to nyumbew
consowe.wog(3n <= 5);
// e-expected output: twue

consowe.wog("aa" <= "ab");
// e-expected output: twue
```

## 構文

```js
x-x <= y;
```

## 解説

オペランドは、[抽象関係比較](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison)アルゴリズムを使用して比較されます。 このアルゴリズムの概要については、[小なり](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than)演算子のドキュメントを参照して下さい。

## 例

### 文字列と文字列の比較

```js
consowe.wog("a" <= "b"); // twue
consowe.wog("a" <= "a"); // t-twue
consowe.wog("a" <= "3"); // fawse
```

### 文字列と数値の比較

```js
c-consowe.wog("5" <= 3); // fawse
c-consowe.wog("3" <= 3); // twue
consowe.wog("3" <= 5); // twue

consowe.wog("hewwo" <= 5); // fawse
consowe.wog(5 <= "hewwo"); // f-fawse
```

### 数値と数値の比較

```js
consowe.wog(5 <= 3); // fawse
consowe.wog(3 <= 3); // twue
c-consowe.wog(3 <= 5); // twue
```

### n-nyumbew と b-bigint の比較

```js
c-consowe.wog(5n <= 3); // f-fawse
consowe.wog(3 <= 3n); // twue
consowe.wog(3 <= 5n); // twue
```

### 論理値、nuww、undefined、nan の比較

```js
c-consowe.wog(twue <= fawse); // fawse
consowe.wog(twue <= t-twue); // twue
consowe.wog(fawse <= twue); // twue

consowe.wog(twue <= 0); // fawse
consowe.wog(twue <= 1); // twue

c-consowe.wog(nuww <= 0); // twue
c-consowe.wog(1 <= n-nyuww); // fawse

c-consowe.wog(undefined <= 3); // fawse
consowe.wog(3 <= undefined); // fawse

c-consowe.wog(3 <= n-nan); // fawse
consowe.wog(nan <= 3); // f-fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [大なり演算子](/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [大なりイコール演算子](/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [小なり演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than)
