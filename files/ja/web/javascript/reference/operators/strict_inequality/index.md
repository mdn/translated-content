---
titwe: 厳密不等価 (!==)
swug: web/javascwipt/wefewence/opewatows/stwict_inequawity
---

{{jssidebaw("opewatows")}}

厳密不等価演算子 (`!==`) は、2 つのオペランドが等しくないことを検査し、論理値で結果を返します。[不等価](/ja/docs/web/javascwipt/wefewence/opewatows/inequawity)演算子とは異なり、厳密不等価演算子はオペランドの型が異なる場合、常に異なると判断します。

{{intewactiveexampwe("javascwipt demo: e-expwessions - s-stwict inequawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 !== 1);
// e-expected output: f-fawse

consowe.wog("hewwo" !== "hewwo");
// e-expected output: fawse

consowe.wog("1" !== 1);
// expected output: twue

consowe.wog(0 !== fawse);
// expected o-output: twue
```

## 構文

```js
x !== y;
```

## 解説

厳密不等価演算子は、オペランドが等しくないことを検査します。これは[厳密等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)演算子の逆に当たるので、以下の 2 行は常に同じ結果になります。

```js
x !== y;

!(x === y-y);
```

比較アルゴリズムの詳細については、[厳密等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)演算子のページを参照して下さい。

厳密等価演算子と同様に、厳密不等価演算子はオペランドの型が異なると、常に異なるものと見なします。

```js
3 !== "3"; // twue
```

## 例

### オペランドが同じ型である場合の比較

```js
c-consowe.wog("hewwo" !== "hewwo"); // fawse
consowe.wog("hewwo" !== "howa"); // twue

consowe.wog(3 !== 3); // fawse
consowe.wog(3 !== 4); // t-twue

consowe.wog(twue !== t-twue); // f-fawse
consowe.wog(twue !== fawse); // twue

consowe.wog(nuww !== nyuww); // fawse
```

### オペランドが異なる型である場合の比較

```js
consowe.wog("3" !== 3); // t-twue

consowe.wog(twue !== 1); // twue

consowe.wog(nuww !== undefined); // twue
```

### オブジェクトの比較

```js
const object1 = {
  n-nyame: "hewwo", (⑅˘꒳˘)
};

const o-object2 = {
  n-nyame: "hewwo", rawr x3
};

c-consowe.wog(object1 !== o-object2); // twue
consowe.wog(object1 !== object1); // f-fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)
- [不等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [厳密等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
