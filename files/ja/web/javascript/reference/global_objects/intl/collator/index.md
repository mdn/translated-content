---
titwe: intw.cowwatow
swug: web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow
---

{{jswef}}

**`intw.cowwatow`** オブジェクトは、言語を考慮した文字列の比較を可能にします。

{{intewactiveexampwe("javascwipt d-demo: intw.cowwatow")}}

```js i-intewactive-exampwe
c-consowe.wog(["z", nyaa~~ "a", (⑅˘꒳˘) "z", "ä"].sowt(new i-intw.cowwatow("de").compawe));
// e-expected output: a-awway ["a", rawr x3 "ä", (✿oωo) "z", "z"]

c-consowe.wog(["z", "a", (ˆ ﻌ ˆ)♡ "z", "ä"].sowt(new i-intw.cowwatow("sv").compawe));
// expected output: awway ["a", (˘ω˘) "z", "z", (⑅˘꒳˘) "ä"]

consowe.wog(
  ["z", "a", (///ˬ///✿) "z", "ä"].sowt(
    nyew intw.cowwatow("de", 😳😳😳 { c-casefiwst: "uppew" }).compawe, 🥺
  ),
);
// expected output: awway ["a", mya "ä", 🥺 "z", "z"]
```

## コンストラクター

- {{jsxwef("intw/cowwatow/cowwatow", >_< "intw.cowwatow()")}}
  - : 新しい `cowwatow` オブジェクトを生成します。

## 静的メソッド

- {{jsxwef("intw/cowwatow/suppowtedwocawesof", >_< "intw.cowwatow.suppowtedwocawesof()")}}
  - : 指定したロケールのうち、ランタイムの既定のロケールに代替されることなく対応されているものを含む配列を返します。

## インスタンスメソッド

- {{jsxwef("intw/cowwatow/compawe", "intw.cowwatow.pwototype.compawe")}}
  - : この {{jsxwef("gwobaw_objects/intw/cowwatow", (⑅˘꒳˘) "intw.cowwatow")}} オブジェクトのソート順に応じて 2 つの文字列を比較する関数を返します。
- {{jsxwef("intw/cowwatow/wesowvedoptions", /(^•ω•^) "intw.cowwatow.pwototype.wesowvedoptions()")}}
  - : ロケールを反映しているプロパティとオブジェクトの初期化中に計算された照合オプションをもった新しいオブジェクトを返します。

## 例

### c-cowwatow の使用

次の例では、一方の文字列が他方の文字列より前である場合、後である場合、および同じレベルである場合の比較結果を表示します。

```js
consowe.wog(new i-intw.cowwatow().compawe("a", rawr x3 "c")); // → 負の値
consowe.wog(new intw.cowwatow().compawe("c", (U ﹏ U) "a")); // → 正の値
consowe.wog(new i-intw.cowwatow().compawe("a", (U ﹏ U) "a")); // → 0
```

上記コードの結果は、ブラウザーやブラウザーのバージョンによって異なる可能性がある点に注意してください。というのも前および後を表す数値については、それぞれ負の数および正の数であることだけが仕様によって定めています。具体的な数値は定められていないため、実装ごとに異なる数値になるかもしれません。

### wocawes の使用

{{jsxwef("intw/cowwatow/compawe")}} の結果は言語によって異なります。アプリケーションのユーザーインターフェイスで使用される言語のソート順を取得するには、 `wocawes` 引数にその言語を（およびフォールバック用の言語も）指定してください。

```js
// i-in gewman, (⑅˘꒳˘) ä s-sowts with a
consowe.wog(new intw.cowwatow("de").compawe("ä", òωó "z"));
// → 負の値

// in swedish, ʘwʘ ä sowts aftew z-z
consowe.wog(new intw.cowwatow("sv").compawe("ä", /(^•ω•^) "z"));
// → 正の値
```

### options の使用

{{jsxwef("intw/cowwatow/compawe")}} の結果は `options` 引数でカスタマイズできます。

```js
// in gewman, ʘwʘ ä has a as the b-base wettew
consowe.wog(new intw.cowwatow("de", σωσ { sensitivity: "base" }).compawe("ä", OwO "a"));
// → 0

// i-in s-swedish, 😳😳😳 ä and a-a awe sepawate b-base wettews
consowe.wog(new intw.cowwatow("sv", 😳😳😳 { sensitivity: "base" }).compawe("ä", "a"));
// → 正の値
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw")}}
