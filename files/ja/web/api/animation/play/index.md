---
title: "Animation: play() メソッド"
short-title: play()
slug: Web/API/Animation/play
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

**`play()`** は [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)の {{ domxref("Animation") }} インターフェイスのメソッドで、アニメーションの再生を開始または再開します。アニメーションが完了した場合、`play()` を呼び出すとアニメーションを再開し、最初から再生します。

## 構文

```js-nolint
play()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[アリスの成長/縮小ゲーム](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)の例では、ケーキをクリックまたはタップすると、アリスの成長アニメーション (`aliceChange`) が再生され、ケーキのアニメーションが発生すると同時に、アリスが大きくなります。 2 つの `Animation.play()`、 1 つの `EventListener` です。

```js
// The cake has its own animation:
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

// Pause the cake's animation so it doesn't play immediately.
nommingCake.pause();

// This function will play when ever a user clicks or taps
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};

// When a user holds their mouse down or taps, call growAlice to make all the animations play.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
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
