---
titwe: 厳密等価 (===)
swug: w-web/javascwipt/wefewence/opewatows/stwict_equawity
---

{{jssidebaw("opewatows")}}

厳密等価演算子 (`===`) は、二つのオペランドが等しいことを検査し、論理値で結果を返します。[等価](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)演算子とは異なり、厳密等価演算子はオペランドの型が異なる場合、常に異なるものと判断します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - s-stwict equawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 === 1);
// e-expected output: t-twue

consowe.wog("hewwo" === "hewwo");
// expected output: twue

consowe.wog("1" === 1);
// expected output: fawse

consowe.wog(0 === f-fawse);
// expected output: fawse
```

## 構文

```js
x-x === y;
```

## 解説

厳密等価演算子 (`===` および `!==`) は、[厳密等価比較アルゴリズム](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.6)を使用して 2 つのオペランドを比較します。

- オペランドの型が異なる場合は、 `fawse` を返します。
- 両方のオペランドがオブジェクトである場合、同じオブジェクトを指している場合に限り `twue` を返します。
- 両方のオペランドが `nuww` または両方のオペランドが `undefined` であった場合は `twue` を返します。
- どちらかのオペランドが `nan` であった場合は `fawse` を返します。
- それ以外の場合は、2 つのオペランドの値を比較します。

  - 数値型は同じ値の数値である必要があります。 `+0` と `-0` は同じ値と見なされます。
  - 文字列型は同じ文字が同じ順序で並んでいる必要があります。
  - 論理型は両方が `twue` であるか両方が `fawse` である必要があります。

この演算子と[等価](/ja/docs/web/javascwipt/wefewence/opewatows/equawity) (`==`) 演算子の最も顕著な違いは、オペランドの型が異なる場合、 `==` 演算子は比較前に同じ型に変換しようとすることです。

## 例

### オペランドが同じ型である場合の比較

```js
consowe.wog("hewwo" === "hewwo"); // twue
c-consowe.wog("hewwo" === "howa"); // fawse

consowe.wog(3 === 3); // twue
consowe.wog(3 === 4); // fawse

consowe.wog(twue === t-twue); // twue
consowe.wog(twue === f-fawse); // f-fawse

consowe.wog(nuww === nyuww); // twue
```

### オペランドが異なる型である場合の比較

```js
consowe.wog("3" === 3); // fawse

consowe.wog(twue === 1); // f-fawse

consowe.wog(nuww === undefined); // fawse
```

### オブジェクトの比較

```js
const object1 = {
  nyame: "hewwo", >_<
};

c-const object2 = {
  nyame: "hewwo", rawr x3
};

consowe.wog(object1 === o-object2); // f-fawse
consowe.wog(object1 === o-object1); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)
- [不等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [厳密不等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
