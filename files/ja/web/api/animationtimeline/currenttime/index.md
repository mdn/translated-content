---
title: "AnimationTimeline: currentTime プロパティ"
short-title: currentTime
slug: Web/API/AnimationTimeline/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Animations") }}

**`currentTime`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("AnimationTimeline")}} インターフェイスの読み取り専用のプロパティで、タイムラインの現在時刻をミリ秒単位で返します。タイムラインがアクティブでない場合は `null` を返します。

## 値

タイムラインの現在時刻をミリ秒で表します。タイムラインがアクティブでない場合は `null` です。

## 時間精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)から保護するために、 `animationTimeline.currentTime` の精度はブラウザー設定によっては丸められている可能性があります。Firefox では、`privacy.reduceTimerPrecision` 環境設定が既定で有効になっており、既定は 2ms です。`privacy.resistFingerprinting` を有効にすることもできます。その場合、精度は 100ms または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のどちらか大きい方になります。

例えば、時間の精度を下げた場合、`animationTimeline.currentTime` の結果は常に 0.002 の倍数になり、`privacy.resistFingerprinting` を有効にした場合は 0.1 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 における時間精度の低下 (2ms)
animationTimeline.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// `privacy.resistFingerprinting` が有効な場合の時間制度の低下
animationTimeline.currentTime;
// Might be:
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

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}} このプロパティを継承
- {{domxref("Document.timeline")}} は、このインターフェイスを継承するタイムラインオブジェクトを返す
