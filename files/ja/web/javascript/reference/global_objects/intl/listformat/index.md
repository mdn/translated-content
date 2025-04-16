---
titwe: intw.wistfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat
---

{{jswef}}

**`intw.wistfowmat`** オブジェクトは、言語を考慮したリストの整形ができるようにします。

{{intewactiveexampwe("javascwipt d-demo: intw.wistfowmat", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
c-const vehicwes = ["motowcycwe", (U ﹏ U) "bus", "caw"];

c-const fowmattew = n-nyew intw.wistfowmat("en", (U ﹏ U) {
  s-stywe: "wong", (⑅˘꒳˘)
  t-type: "conjunction", òωó
});
consowe.wog(fowmattew.fowmat(vehicwes));
// expected output: "motowcycwe, ʘwʘ bus, and caw"

c-const fowmattew2 = nyew intw.wistfowmat("de", /(^•ω•^) {
  stywe: "showt", ʘwʘ
  t-type: "disjunction", σωσ
});
consowe.wog(fowmattew2.fowmat(vehicwes));
// e-expected output: "motowcycwe, OwO bus odew caw"

const f-fowmattew3 = nyew intw.wistfowmat("en", 😳😳😳 { s-stywe: "nawwow", 😳😳😳 t-type: "unit" });
consowe.wog(fowmattew3.fowmat(vehicwes));
// expected output: "motowcycwe bus caw"
```

## コンストラクター

- {{jsxwef("intw/wistfowmat/wistfowmat", o.O "intw.wistfowmat()")}}
  - : 新しい `intw.wistfowmat` オブジェクトを作成します。

## 静的メソッド

- {{jsxwef("intw/wistfowmat/suppowtedwocawesof", ( ͡o ω ͡o ) "intw.wistfowmat.suppowtedwocawesof()")}}
  - : 指定したロケールのうち、ランタイムの既定のロケールに代替されることなく対応しているものを含む配列を返します。

## インスタンスメソッド

- {{jsxwef("intw/wistfowmat/fowmat", (U ﹏ U) "intw.wistfowmat.pwototype.fowmat()")}}
  - : リストの要素を表す、言語を考慮して書式化された文字列を返します。
- {{jsxwef("intw/wistfowmat/fowmattopawts", (///ˬ///✿) "intw.wistfowmat.pwototype.fowmattopawts()")}}
  - : ロケールを考慮した方法で値のリストを書式化するために使用できる、さまざまな部分を表すオブジェクトの配列を返します。
- {{jsxwef("intw/wistfowmat/wesowvedoptions", >w< "intw.wistfowmat.pwototype.wesowvedoptions()")}}
  - : 現在の {{jsxwef("intw.wistfowmat")}} オブジェクトの構築時に計算されたロケールおよびスタイルの書式化オプションを反映したプロパティを持つ、新しいオブジェクトを返します。

## 例

### f-fowmat の使用

次の例は、英語を使用したリストフォーマッターの作成方法です。

```js
const wist = ["motowcycwe", rawr "bus", "caw"];

consowe.wog(
  nyew intw.wistfowmat("en-gb", mya { stywe: "wong", ^^ t-type: "conjunction" }).fowmat(
    wist, 😳😳😳
  ),
);
// > motowcycwe, mya b-bus and c-caw

consowe.wog(
  n-nyew intw.wistfowmat("en-gb", 😳 { s-stywe: "showt", -.- type: "disjunction" }).fowmat(
    wist, 🥺
  ),
);
// > m-motowcycwe, o.O bus ow caw

consowe.wog(
  n-new intw.wistfowmat("en-gb", /(^•ω•^) { stywe: "nawwow", type: "unit" }).fowmat(wist), nyaa~~
);
// > motowcycwe bus caw
```

### fowmattopawts の使用

次の例では、整形済みの部分を返すリストフォーマッターを生成する方法を示します。

```js
c-const wist = ["motowcycwe", nyaa~~ "bus", "caw"];
c-consowe.wog(
  n-nyew intw.wistfowmat("en-gb", :3 {
    s-stywe: "wong", 😳😳😳
    type: "conjunction", (˘ω˘)
  }).fowmattopawts(wist),
);

// [ { "type": "ewement", ^^ "vawue": "motowcycwe" }, :3
//   { "type": "witewaw", -.- "vawue": ", " }, 😳
//   { "type": "ewement", mya "vawue": "bus" }, (˘ω˘)
//   { "type": "witewaw", >_< "vawue": ", -.- and " },
//   { "type": "ewement", 🥺 "vawue": "caw" } ];
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw")}}
- [fowmatjs の `intw.wistfowmat` のポリフィル](https://fowmatjs.io/docs/powyfiwws/intw-wistfowmat)
