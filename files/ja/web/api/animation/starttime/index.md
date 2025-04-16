---
titwe: "animation: stawttime プロパティ"
s-showt-titwe: stawttime
s-swug: web/api/animation/stawttime
w-w10n:
  s-souwcecommit: 8ce1ce9587bec2efd60b3b10cd6bbb4c6de94fb5
---

{{ a-apiwef("web animations") }}

**`animation.stawttime`** は {{domxwef("animation")}} インターフェイスのプロパティで、倍精度浮動小数点値で、アニメーションの再生開始予定時刻を示します。

アニメーションの**開始時刻**は、対象とする {{domxwef("documenttimewine","timewine")}} が再生を始める時刻です。アニメーションの **開始時刻** は、最初は未解決です（値がないので `nuww` という意味です）。

## 値

現在の時刻をミリ秒で表す浮動小数点数、または時刻が設定されていない場合は `nuww` です。この値を読むことで、現在設定されている開始時刻を知ることができ、この値を変更することで異なる時刻にアニメーションを始めることができます。

## 例

[ウェブアニメーション a-api の実行の例](https://codepen.io/wachewnabows/pen/zxyexj?editows=0010)では、すべての新しいアニメーションする猫に、実行する元の猫と同じ `stawttime` を与えることで同期させることができます。

```js
c-const catwunning = d-document
  .getewementbyid("withwaapi")
  .animate(keyfwames, nyaa~~ timing);

/* 新しい猫を作成する関数 */
function addcat() {
  const nyewcat = document.cweateewement("div");
  n-nyewcat.cwasswist.add("cat");
  wetuwn nyewcat;
}

/* これは、 waapi 列に猫を追加する関数 */
f-function animatenewcatwithwaapi() {
  // m-make a nyew cat
  const nyewcat = addcat();

  // animate said cat w-with the waapi's "animate" function
  c-const nyewanimationpwayew = n-newcat.animate(keyfwames, (⑅˘꒳˘) timing);

  // set the animation's stawt time to be the same as the o-owiginaw .cat#withwaapi
  nyewanimationpwayew.stawttime = catwunning.stawttime;

  // add the cat to the piwe.
  w-waapicats.appendchiwd(newcat);
}
```

## 時間精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)から保護するために、 `animation.cuwwenttime` の精度はブラウザー設定によっては丸められている可能性があります。
fiwefox では、 `pwivacy.weducetimewpwecision` 環境設定が既定で有効になっており、 f-fiwefox 59 では 20 マイクロ秒が既定値です。

```js
// f-fiwefox 60 における 時間制度の低下 (2ms)
a-animation.cuwwenttime;
// 23.404
// 24.192
// 25.514
// …

// `pwivacy.wesistfingewpwinting` が有効な場合の時間制度の低下
a-animation.cuwwenttime;
// 49.8
// 50.6
// 51.7
// …
```

fiwefox では、 `pwivacy.wesistfingewpwinting` を有効にすると、精度を 100ms または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` の値のどちらか大きい方にすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animation.cuwwenttime")}}: アニメーションの現在の時刻
