---
title: "Animation: currentTime プロパティ"
short-title: currentTime
slug: Web/API/Animation/currentTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

**`Animation.currentTime`** は [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のプロパティで、実行中か一時停止中かを問わず、アニメーションの現在の時刻をミリ秒単位で返したり設定したりします。

アニメーションが {{domxref("AnimationTimeline", "timeline")}} を持たない、アクティブではない、またはまだ再生されていない場合、 `currentTime` の返値は `null` です。

## 値

現在の時刻をミリ秒で表す数値。アニメーションを無効にする場合は `null`。

## 例

ゲーム [Drink Me/Eat Me game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) では、アリスの身長がアニメーションし、小さくなったり大きくなったりします。ゲームを始めるときには、アニメーションの currentTime を KeyframeEffect の持続時間の半分に設定することで、彼女の身長を2つの極の中間に設定します。

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

より一般的な意味としては、アニメーションの 50% の位置に移動することを意味します。

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
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

- {{domxref("Animation")}}: ウェブページのアニメーションを制御するためのその他のメソッドやプロパティ
- {{domxref("Animation.startTime")}}: アニメーションの開始が計画されている時刻
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
