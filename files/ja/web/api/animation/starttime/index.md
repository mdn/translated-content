---
title: "Animation: startTime プロパティ"
short-title: startTime
slug: Web/API/Animation/startTime
l10n:
  sourceCommit: 8ce1ce9587bec2efd60b3b10cd6bbb4c6de94fb5
---

{{ APIRef("Web Animations") }}

**`Animation.startTime`** は {{domxref("Animation")}} インターフェイスのプロパティで、倍精度浮動小数点値で、アニメーションの再生開始予定時刻を示します。

アニメーションの**開始時刻**は、対象とする {{domxref("DocumentTimeline","timeline")}} が再生を始める時刻です。アニメーションの **開始時刻** は、最初は未解決です（値がないので `null` という意味です）。

## 値

現在の時刻をミリ秒で表す浮動小数点数、または時刻が設定されていない場合は `null` です。この値を読むことで、現在設定されている開始時刻を知ることができ、この値を変更することで異なる時刻にアニメーションを始めることができます。

## 例

[ウェブアニメーション API の実行の例](https://codepen.io/rachelnabors/pen/zxYexJ?editors=0010)では、すべての新しいアニメーションする猫に、実行する元の猫と同じ `startTime` を与えることで同期させることができます。

```js
const catRunning = document
  .getElementById("withWAAPI")
  .animate(keyframes, timing);

/* 新しい猫を作成する関数 */
function addCat() {
  const newCat = document.createElement("div");
  newCat.classList.add("cat");
  return newCat;
}

/* これは、 WAAPI 列に猫を追加する関数 */
function animateNewCatWithWAAPI() {
  // make a new cat
  const newCat = addCat();

  // animate said cat with the WAAPI's "animate" function
  const newAnimationPlayer = newCat.animate(keyframes, timing);

  // set the animation's start time to be the same as the original .cat#withWAAPI
  newAnimationPlayer.startTime = catRunning.startTime;

  // Add the cat to the pile.
  WAAPICats.appendChild(newCat);
}
```

## 時間精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)から保護するために、 `animation.currentTime` の精度はブラウザー設定によっては丸められている可能性があります。
Firefox では、 `privacy.reduceTimerPrecision` 環境設定が既定で有効になっており、 Firefox 59 では 20 マイクロ秒が既定値です。

```js
// Firefox 60 における 時間制度の低下 (2ms)
animation.currentTime;
// 23.404
// 24.192
// 25.514
// …

// `privacy.resistFingerprinting` が有効な場合の時間制度の低下
animation.currentTime;
// 49.8
// 50.6
// 51.7
// …
```

Firefox では、 `privacy.resistFingerprinting` を有効にすると、精度を 100ms または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のどちらか大きい方にすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.currentTime")}}: アニメーションの現在の時刻
