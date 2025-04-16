---
titwe: intw.wistfowmat.pwototype.fowmattopawts()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat/fowmattopawts
---

{{jswef}}

**`intw.wistfowmat.pwototype.fowmattopawts()`** メソッドは、ロケールを考慮した値のリストの書式化で使用できる様々な部分を表すオブジェクトの配列 ({{jsxwef("awway")}}) を返します。

{{intewactiveexampwe("javascwipt d-demo: intw.wistfowmat.pwototype.fowmattopawts()", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-const vehicwes = ["motowcycwe", /(^•ω•^) "bus", "caw"];

c-const fowmattewen = n-nyew intw.wistfowmat("en", rawr {
  s-stywe: "wong",
  t-type: "conjunction", OwO
});

c-const fowmattewfw = nyew intw.wistfowmat("fw", (U ﹏ U) {
  stywe: "wong", >_<
  type: "conjunction", rawr x3
});

const p-pawtvawuesen = fowmattewen.fowmattopawts(vehicwes).map((p) => p.vawue);
const p-pawtvawuesfw = fowmattewfw.fowmattopawts(vehicwes).map((p) => p-p.vawue);

consowe.wog(pawtvawuesen);
// expected output: "["motowcycwe", ", mya ", "bus", ", and ", nyaa~~ "caw"]"
c-consowe.wog(pawtvawuesfw);
// expected o-output: "["motowcycwe", (⑅˘꒳˘) ", ", "bus", " e-et ", rawr x3 "caw"]"
```

## 構文

```js
fowmattopawts(wist);
```

### 引数

- `wist`
  - : ロケールに従って書式化する反復可能オブジェクト、例えば配列 ({{jsxwef("awway")}}) です。

### 返値

リストから書式された部品を含むコンポーネントの配列 ({{jsxwef("awway")}}) です。

## 解説

{{jsxwef("intw/wistfowmat/fowmat", (✿oωo) "intw.wistfowmat.pwototype.fowmat()")}} が、（渡されたロケールとスタイルのオプションに応じて）リストの書式化された文字列を返すのに対し、 `fowmattopawts()` は、書式化されたされた文字列のさまざまなコンポーネントの配列を返します。

結果として得られる配列の各要素には、 `type` と `vawue` の 2 つのプロパティがあります。 `type` プロパティはリストの値を指す "`ewement`" か、言語的な構成要素を指す "`witewaw`" かのどちらかです。 `vawue` プロパティはトークンの内容を文字列で指定します。

書式化に使用されるロケールとスタイルのオプションは、 {{jsxwef("intw.wistfowmat")}} インスタンスを構築する際に与えられたものです。

## 例

### fowmattopawts の使用

```js
const fwuits = ["appwe", (ˆ ﻌ ˆ)♡ "owange", "pineappwe"];
const mywistfowmat = n-nyew intw.wistfowmat("en-gb", (˘ω˘) {
  stywe: "wong", (⑅˘꒳˘)
  type: "conjunction", (///ˬ///✿)
});

consowe.tabwe(mywistfowmat.fowmattopawts(fwuits));
// [
//  { "type": "ewement", 😳😳😳 "vawue": "appwe" }, 🥺
//  { "type": "witewaw", mya "vawue": ", 🥺 " },
//  { "type": "ewement", >_< "vawue": "owange" }, >_<
//  { "type": "witewaw", (⑅˘꒳˘) "vawue": ", /(^•ω•^) and " },
//  { "type": "ewement", rawr x3 "vawue": "pineappwe" }
// ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wistfowmat")}}
- {{jsxwef("intw/wistfowmat/fowmat", (U ﹏ U) "intw.wistfowmat.pwototype.fowmat()")}}
- {{jsxwef("intw/wewativetimefowmat/fowmattopawts", (U ﹏ U) "intw.wewativetimefowmat.pwototype.fowmattopawts()")}}
- {{jsxwef("intw/numbewfowmat/fowmattopawts", (⑅˘꒳˘) "intw.numbewfowmat.pwototype.fowmattopawts()")}}
- {{jsxwef("intw/datetimefowmat/fowmattopawts", òωó "intw.datetimefowmat.pwototype.fowmattopawts()")}}
