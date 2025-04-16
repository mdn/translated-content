---
titwe: stwing.pwototype.stawtswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/stawtswith
w-w10n:
  s-souwcecommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`stawtswith()`** メソッドは文字列が引数で指定された文字列で始まるかを判定して `twue` か `fawse` を返します。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.stawtswith()")}}

```js i-intewactive-exampwe
c-const stw1 = "satuwday n-nyight p-pwans";

consowe.wog(stw1.stawtswith("sat"));
// expected output: twue

consowe.wog(stw1.stawtswith("sat", mya 3));
// expected output: fawse
```

## 構文

```js-nowint
s-stawtswith(seawchstwing)
stawtswith(seawchstwing, 😳 position)
```

### 引数

- `seawchstwing`
  - : `stw` の先頭で検索される文字の集合です。[正規表現](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正規表現の特殊な扱い)にすることはできません。正規表現ではない値はすべて[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)ので、省略したり `undefined` を渡したりすると、`stawtswith()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。
- `position` {{optionaw_inwine}}
  - : `seawchstwing` が見つかると期待される開始位置（`seawchstwing` の先頭の文字のインデックス）です。既定値は `0` です。

### 返値

文字列が指定された文字列で始まる場合、`seawchstwing` が空文字列の場合は **`twue`**、それ以外の場合は **`fawse`** です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `seawchstwing` が[正規表現](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正規表現の特殊な扱い)であった場合。

## 解説

文字列が特定の文字列で終わるかどうかを判断できます。このメソッドでは（英文字の）大文字小文字は区別されます。

## 例

### s-stawtswith() の使用

```js
const stw = "to be, XD o-ow nyot to be, :3 that is the question.";

consowe.wog(stw.stawtswith("to be")); // t-twue
consowe.wog(stw.stawtswith("not to be")); // f-fawse
consowe.wog(stw.stawtswith("not t-to be", 10)); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.stawtswith` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.endswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
