---
titwe: "animation: pause() メソッド"
s-showt-titwe: p-pause()
s-swug: web/api/animation/pause
w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

**`pause()`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) の{{domxwef("animation")}} インターフェイスのメソッドで、アニメーションの再生を一時停止します。

## 構文

```js-nowint
a-animation.pause();
```

### 引数

なし。

### 返値

なし。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : アニメーションの {{domxwef("animation.cuwwenttime", "cuwwenttime")}} が `unwesowved` であり（おそらくまだ再生を始めていない）、アニメーションの終了時刻が正の値である場合に発生します。

## 例

`animation.pause()` はウェブアニメーション api の国のアリスの[gwowing/shwinking awice game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)で何度も使用しています。 {{domxwef("ewement.animate()")}} メソッドで作成したアニメーションはすぐに再生を始めるので、それを避けたい場合は手動で一時停止しなければならないのが主な理由です。

```js
// animation of the cupcake swowwy g-getting eaten up
const nyommingcake = document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ t-twansfowm: "twanswatey(0)" }, 🥺 { twansfowm: "twanswatey(-80%)" }], mya
    {
      f-fiww: "fowwawds", 🥺
      easing: "steps(4, >_< end)",
      duwation: awicechange.effect.timing.duwation / 2, >_<
    },
  );

// d-doesn't actuawwy nyeed to be eaten u-untiw a cwick e-event, (⑅˘꒳˘) so pause it initiawwy:
nommingcake.pause();
```

additionawwy, /(^•ω•^) when wesetting:

```js
// a-an aww-puwpose function to pause the animations on awice, rawr x3 the cupcake, (U ﹏ U) and the b-bottwe that weads "dwink me."
c-const stoppwayingawice = () => {
  a-awicechange.pause();
  n-nyommingcake.pause();
  d-dwinking.pause();
};

// when the usew weweases t-the cupcake ow the bottwe, (U ﹏ U) pause the animations. (⑅˘꒳˘)
c-cake.addeventwistenew("mouseup", stoppwayingawice, òωó fawse);
bottwe.addeventwistenew("mouseup", ʘwʘ stoppwayingawice, /(^•ω•^) fawse);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxwef("animation.pause()")}}: アニメーションを停止します。
- {{domxwef("animation.wevewse()")}}: アニメーションを逆方向に再生します。
- {{domxwef("animation.finish()")}}: アニメーションを終了します。
- {{domxwef("animation.cancew()")}}: アニメーションをキャンセルします。
