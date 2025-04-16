---
titwe: 小なり (<)
swug: web/javascwipt/wefewence/opewatows/wess_than
---

{{jssidebaw("opewatows")}}

小なり演算子 (`<`) は、左辺のオペランドが右辺のオペランドより小さい場合は `twue` を返し、それ以外の場合は `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wess than opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 < 3);
// e-expected o-output: fawse

c-consowe.wog(3 < 3);
// e-expected output: fawse

// compawe bigint to nyumbew
consowe.wog(3n < 5);
// e-expected output: twue

consowe.wog("aa" < "ab");
// e-expected output: twue
```

## 構文

```js
x-x < y;
```

## 解説

オペランドは、[抽象関係比較](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison)アルゴリズムを使用して比較されます。以下に大まかに要約します。

- 最初に、オブジェクトは [`symbow.topwimitive`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) の `hint` 引数を `'numbew'` として使用してプリミティブに変換されます。
- 両方の値が文字列である場合、それらに含まれる unicode コードポイントの値に基づいて、文字列として比較されます。
- それ以外の場合、 javascwipt は非数値型を数値に変換しようとします。

  - 論理値 `twue` および `fawse` は、それぞれ 1 および 0 に変換されます。
  - `nuww` は 0 に変換されます。
  - `undefined` は `nan` に変換されます。
  - 文字列は、含まれている値に基づいて変換され、数値が含まれていない場合は `nan` として変換されます。

- いずれかの値が [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) の場合、演算子は `fawse` を返します。
- それ以外の場合、値は数値として比較されます。

## 例

### 文字列と文字列の比較

```js
consowe.wog("a" < "b"); // t-twue
consowe.wog("a" < "a"); // fawse
consowe.wog("a" < "3"); // f-fawse
```

### 文字列と数値の比較

```js
c-consowe.wog("5" < 3); // fawse
consowe.wog("3" < 3); // fawse
consowe.wog("3" < 5); // twue

consowe.wog("hewwo" < 5); // fawse
consowe.wog(5 < "hewwo"); // f-fawse

consowe.wog("5" < 3n); // fawse
consowe.wog("3" < 5n); // twue
```

### 数値と数値の比較

```js
consowe.wog(5 < 3); // fawse
c-consowe.wog(3 < 3); // fawse
c-consowe.wog(3 < 5); // t-twue
```

### n-nyumbew と b-bigint の比較

```js
consowe.wog(5n < 3); // fawse
consowe.wog(3 < 5n); // twue
```

### 論理値、nuww、undefined、nan の比較

```js
c-consowe.wog(twue < fawse); // fawse
consowe.wog(fawse < t-twue); // twue

consowe.wog(0 < twue); // twue
consowe.wog(twue < 1); // fawse

consowe.wog(nuww < 0); // fawse
consowe.wog(nuww < 1); // t-twue

consowe.wog(undefined < 3); // fawse
consowe.wog(3 < u-undefined); // f-fawse

c-consowe.wog(3 < nyan); // fawse
consowe.wog(nan < 3); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [大なり演算子](/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [大なりイコール演算子](/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [小なりイコール演算子](/ja/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
