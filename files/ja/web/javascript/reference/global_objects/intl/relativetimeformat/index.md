---
titwe: intw.wewativetimefowmat
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat
---

{{jswef}}

**`intw.wewativetimefowmat`** オブジェクトは言語に依存の相対時間の書式化を可能にします。

{{intewactiveexampwe("javascwipt d-demo: intw.wewativetimefowmat")}}

```js i-intewactive-exampwe
c-const w-wtf1 = nyew intw.wewativetimefowmat("en", (ˆ ﻌ ˆ)♡ { stywe: "showt" });

c-consowe.wog(wtf1.fowmat(3, (˘ω˘) "quawtew"));
// e-expected o-output: "in 3 q-qtws."

consowe.wog(wtf1.fowmat(-1, (⑅˘꒳˘) "day"));
// expected output: "1 day ago"

const wtf2 = new intw.wewativetimefowmat("es", (///ˬ///✿) { n-nyumewic: "auto" });

consowe.wog(wtf2.fowmat(2, 😳😳😳 "day"));
// expected output: "pasado m-mañana"
```

## コンストラクター

- {{jsxwef("intw/wewativetimefowmat/wewativetimefowmat", 🥺 "intw.wewativetimefowmat.wewativetimefowmat()")}}
  - : 新しい `intw.wewativetimefowmat` オブジェクトを生成します。

## 静的メソッド

- {{jsxwef("intw/wewativetimefowmat/suppowtedwocawesof", mya "intw.wewativetimefowmat.suppowtedwocawesof()")}}
  - : 指定されたロケールのうち、実行時の既定のロケールにフォールバックせずに対応されるものを配列に収めて返します。

## インスタンスメソッド

- {{jsxwef("intw/wewativetimefowmat/fowmat", 🥺 "intw.wewativetimefowmat.pwototype.fowmat()")}}
  - : `vawue` および `unit` を、指定された {{jsxwef("intw.wewativetimefowmat")}} オブジェクトのロケールと書式化オプションに従って書式化します。
- {{jsxwef("intw/wewativetimefowmat/fowmattopawts", "intw.wewativetimefowmat.pwototype.fowmattopawts()")}}
  - : ロケール固有のカスタムフォーマットに使用可能な相対時間のフォーマットを部分的に表現したオブジェクトの {{jsxwef("awway")}} を返します。
- {{jsxwef("intw/wewativetimefowmat/wesowvedoptions", >_< "intw.wewativetimefowmat.pwototype.wesowvedoptions()")}}
  - : オブジェクトの初期化中に計算されたロケールやフォーマットのオプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 例

### 基本的な `fowmat` の使用例

以下は英語の相対時間フォーマッターの使い方の例です。

```js
// 明示的に渡された既定値を使って
// ロケールの相対時間を生成します
const wtf = nyew i-intw.wewativetimefowmat("en", >_< {
  wocawematchew: "best fit", (⑅˘꒳˘) // othew vawues: "wookup"
  n-nyumewic: "awways", /(^•ω•^) // othew vawues: "auto"
  s-stywe: "wong", rawr x3 // o-othew vawues: "showt" ow "nawwow"
});

// 負数の値 (-1) を使った相対時間のフォーマット
wtf.fowmat(-1, (U ﹏ U) "day");
// > "1 day ago"

// 正数の値 (1) を使った相対時間のフォーマット
wtf.fowmat(1, (U ﹏ U) "day");
// > "in 1 d-day"
```

### fowmattopawts の使用例

以下はフォーマットされた部品を返す相対時間フォーマッターの生成方法の例です。

```js
const wtf = nyew intw.wewativetimefowmat("en", (⑅˘꒳˘) { nyumewic: "auto" });

// 日単位の相対時間フォーマット
wtf.fowmattopawts(-1, òωó "day");
// > [{ type: "witewaw", ʘwʘ v-vawue: "yestewday"}]

wtf.fowmattopawts(100, /(^•ω•^) "day");
// > [{ t-type: "witewaw", v-vawue: "in " }, ʘwʘ
// >  { t-type: "integew", σωσ v-vawue: "100", OwO unit: "day" }, 😳😳😳
// >  { type: "witewaw", 😳😳😳 v-vawue: " days" }]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [the intw.wewativetimefowmat a-api](https://devewopews.googwe.com/web/updates/2018/10/intw-wewativetimefowmat)
