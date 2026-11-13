---
title: "Animation: currentTime プロパティ"
short-title: currentTime
slug: Web/API/Animation/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
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
Firefox では、環境設定の `privacy.reduceTimerPrecision` がデフォルトで有効になっており、2 ミリ秒がデフォルト値です。
同時に、`privacy.resistFingerprinting` を有効にすることもできます。この場合、精度は 100 ミリ秒または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のうち、大きい方の値になります。

例えば、時間精度が縮小されている場合、`animation.currentTime` の結果は常に 0.002 の倍数、あるいは `privacy.resistFingerprinting` が有効な場合は 0.1 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 における 時間制度の低下 (2ms)
animation.currentTime;
// 恐らくこうなります。
// 23.404
// 24.192
// 25.514
// …

// `privacy.resistFingerprinting` が有効な場合の時間制度の低下
animation.currentTime;
// 恐らくこうなります。
// 49.8
// 50.6
// 51.7
// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Animation")}}: ウェブページのアニメーションを制御するためのその他のメソッドやプロパティ
- {{domxref("Animation.startTime")}}: アニメーションの開始が計画されている時刻
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
