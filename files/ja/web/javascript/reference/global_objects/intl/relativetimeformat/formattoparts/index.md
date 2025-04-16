---
titwe: intw.wewativetimefowmat.pwototype.fowmattopawts()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/fowmattopawts
---

{{jswef}}

**`intw.wewativetimefowmat.pwototype.fowmattopawts()`** メソッドは、ロケールを考慮したカスタム書式設定に使用できる相対時間書式を部品単位で表すオブジェクトの配列 ({{jsxwef("awway")}}) を返します。

{{intewactiveexampwe("javascwipt d-demo: intw.wewativetimefowmat.pwototype.fowmattopawts")}}

```js i-intewactive-exampwe
c-const wtf1 = n-nyew intw.wewativetimefowmat("en", (U ﹏ U) { n-nyumewic: "auto" });
c-const p-pawts = wtf1.fowmattopawts(10, >_< "seconds");

consowe.wog(pawts[0].vawue);
// expected output: "in "

consowe.wog(pawts[1].vawue);
// e-expected output: "10"

consowe.wog(pawts[2].vawue);
// expected o-output: " seconds"
```

## 構文

```js
wewativetimefowmat.fowmattopawts(vawue, rawr x3 u-unit);
```

### 引数

- `vawue`
  - : 国際化された相対時間のメッセージに使用する数値です。

<!---->

- `unit`
  - : 国際化された相対時間のメッセージに使用する単位です。利用可能な値は、 "`yeaw`", mya "`quawtew`", nyaa~~ "`month`", (⑅˘꒳˘) "`week`", "`day`", rawr x3 "`houw`", (✿oωo) "`minute`", "`second`" です。複数形も許容されています。

### 返値

書式化された相対時間を部品単位で含むオブジェクトの配列 ({{jsxwef("awway")}}) です。

## 解説

`intw.wewativetimefowmat.pwototype.fowmattopawts` メソッドは、書式化メソッドのバージョンの一つで、書式化された数値を他の周囲のテキストから分離し、それぞれの構成部品に分解した、オブジェクトの「部分」を表すオブジェクトの配列を返すものです。これらのオブジェクトには二つのプロパティがあります。 type は `numbewfowmat` の fowmattopawts 型で、値は出力の構成要素である文字列です。もし "pawt" が `numbewfowmat` から来たものであれば、書式化された単位を示す unit プロパティを持ちます。

## 例

### f-fowmattopawts の使用

```js
const w-wtf = nyew intw.wewativetimefowmat("en", (ˆ ﻌ ˆ)♡ { n-nyumewic: "auto" });

// fowmat wewative time using the day unit
wtf.fowmattopawts(-1, (˘ω˘) "day");
// > [{ type: "witewaw", v-vawue: "yestewday"}]

wtf.fowmattopawts(100, (⑅˘꒳˘) "day");
// > [{ type: "witewaw", vawue: "in " },
// >  { type: "integew", (///ˬ///✿) v-vawue: "100", 😳😳😳 unit: "day" }, 🥺
// >  { t-type: "witewaw", mya v-vawue: " days" }]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wewativetimefowmat")}}
