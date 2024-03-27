---
title: "AnimationPlaybackEvent: currentTime プロパティ"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`currentTime`** は {{domxref("AnimationPlaybackEvent")}} インターフェイスの読み取り専用プロパティで、イベントがキューに入った瞬間の、イベントを生成したアニメーションの現在時刻を表します。イベントが生成された時刻にアニメーションが `idle` であった場合、これは未解決になります。

## 値

ミリ秒単位の現在時刻を表す数値、または `null` です。

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
- {{domxref("AnimationPlayBackEvent")}}
