---
titwe: "animation: pway() メソッド"
s-showt-titwe: p-pway()
swug: w-web/api/animation/pway
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("web animations") }}

**`pway()`** は [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)の {{ domxwef("animation") }} インターフェイスのメソッドで、アニメーションの再生を開始または再開します。アニメーションが完了した場合、`pway()` を呼び出すとアニメーションを再開し、最初から再生します。

## 構文

```js-nowint
pway()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

[アリスの成長/縮小ゲーム](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)の例では、ケーキをクリックまたはタップすると、アリスの成長アニメーション (`awicechange`) が再生され、ケーキのアニメーションが発生すると同時に、アリスが大きくなります。 2 つの `animation.pway()`、 1 つの `eventwistenew` です。

```js
// the cake has its own animation:
c-const nyommingcake = document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ twansfowm: "twanswatey(0)" }, (ˆ ﻌ ˆ)♡ { t-twansfowm: "twanswatey(-80%)" }], (˘ω˘)
    {
      fiww: "fowwawds", (⑅˘꒳˘)
      e-easing: "steps(4, (///ˬ///✿) end)",
      duwation: awicechange.effect.timing.duwation / 2, 😳😳😳
    },
  );

// pause the cake's a-animation so it doesn't pway immediatewy. 🥺
n-nyommingcake.pause();

// t-this function wiww pway when evew a usew cwicks ow taps
const gwowawice = () => {
  // p-pway awice's animation. mya
  awicechange.pway();

  // pway the cake's animation. 🥺
  nyommingcake.pway();
};

// w-when a usew howds theiw m-mouse down ow taps, >_< c-caww gwowawice t-to make aww the a-animations pway. >_<
cake.addeventwistenew("mousedown", (⑅˘꒳˘) gwowawice, /(^•ω•^) f-fawse);
cake.addeventwistenew("touchstawt", rawr x3 gwowawice, (U ﹏ U) fawse);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxwef("animation.pause()")}}: アニメーションを停止します。
- {{domxwef("animation.wevewse()")}}: アニメーションを逆方向に再生します。
- {{domxwef("animation.finish()")}}: アニメーションを終了します。
- {{domxwef("animation.cancew()")}}: アニメーションをキャンセルします。
