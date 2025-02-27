---
title: "Animation: pause() メソッド"
short-title: pause()
slug: Web/API/Animation/pause
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`pause()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の{{domxref("Animation")}} インターフェイスのメソッドで、アニメーションの再生を一時停止します。

## 構文

```js-nolint
animation.pause();
```

### 引数

なし。

### 返値

なし。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : アニメーションの {{domxref("Animation.currentTime", "currentTime")}} が `unresolved` であり（おそらくまだ再生を始めていない）、アニメーションの終了時刻が正の値である場合に発生します。

## 例

`Animation.pause()` はウェブアニメーション API の国のアリスの[Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)で何度も使用しています。 {{domxref("Element.animate()")}} メソッドで作成したアニメーションはすぐに再生を始めるので、それを避けたい場合は手動で一時停止しなければならないのが主な理由です。

```js
// animation of the cupcake slowly getting eaten up
const nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );

// doesn't actually need to be eaten until a click event, so pause it initially:
nommingCake.pause();
```

Additionally, when resetting:

```js
// An all-purpose function to pause the animations on Alice, the cupcake, and the bottle that reads "drink me."
const stopPlayingAlice = () => {
  aliceChange.pause();
  nommingCake.pause();
  drinking.pause();
};

// When the user releases the cupcake or the bottle, pause the animations.
cake.addEventListener("mouseup", stopPlayingAlice, false);
bottle.addEventListener("mouseup", stopPlayingAlice, false);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxref("Animation.pause()")}}: アニメーションを停止します。
- {{domxref("Animation.reverse()")}}: アニメーションを逆方向に再生します。
- {{domxref("Animation.finish()")}}: アニメーションを終了します。
- {{domxref("Animation.cancel()")}}: アニメーションをキャンセルします。
