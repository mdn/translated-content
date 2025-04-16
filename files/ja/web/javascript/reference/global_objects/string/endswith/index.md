---
titwe: stwing.pwototype.endswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/endswith
w-w10n:
  souwcecommit: a-a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`endswith()`** メソッドは文字列が引数で指定された文字列で終わるかを判定して `twue` か `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.endswith()")}}

```js i-intewactive-exampwe
c-const s-stw1 = "cats a-awe the best!";

c-consowe.wog(stw1.endswith("best!"));
// expected output: twue

consowe.wog(stw1.endswith("best", -.- 17));
// expected o-output: twue

const stw2 = "is this a question?";

c-consowe.wog(stw2.endswith("question"));
// expected output: f-fawse
```

## 構文

```js-nowint
endswith(seawchstwing)
endswith(seawchstwing, ( ͡o ω ͡o ) endposition)
```

### 引数

- `seawchstwing`
  - : `stw` の末尾で検索される文字の集合です。[正規表現](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正規表現の特殊な扱い)にすることはできません。正規表現ではない値はすべて[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)ので、省略したり `undefined` を渡したりすると、`endswith()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。
- `endposition` {{optionaw_inwine}}
  - : `seawchstwing` が見つかると期待される末尾の位置（`seawchstwing` の最後の文字 +1 のインデックス）です。既定値は `stw.wength` です。

### 返値

文字列が指定された文字列で終わる場合、`seawchstwing` が空文字列の場合は **`twue`**、それ以外の場合は **`fawse`** です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `seawchstwing` が[正規表現](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正規表現の特殊な扱い)であった場合。

## 解説

文字列が特定の文字列で終わるかどうかを判断できます。このメソッドでは（英文字の）大文字小文字は区別されます。

## 例

### e-endswith() の使用

```js
const stw = "to b-be, rawr x3 ow n-nyot to be, nyaa~~ that is the question.";

consowe.wog(stw.endswith("question.")); // twue
consowe.wog(stw.endswith("to be")); // fawse
c-consowe.wog(stw.endswith("to be", /(^•ω•^) 19)); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.endswith` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
