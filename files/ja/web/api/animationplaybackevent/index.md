---
title: AnimationPlaybackEvent
slug: Web/API/AnimationPlaybackEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

AnimationPlaybackEvent は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のインターフェイスで、アニメーションイベントを表します。

アニメーションの再生時、これらはアニメーションイベントを通して {{domxref("Animation.playState", "playState")}} の変化を報告します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("AnimationPlaybackEvent.AnimationPlaybackEvent", "AnimationPlaybackEvent()")}}
  - : 新しい `AnimationPlaybackEvent` オブジェクトインスタンスを構築します。

## インスタンスプロパティ

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : イベントを生成したアニメーションの現在時刻。
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : イベントを生成したアニメーションのタイムラインの時刻値。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.playState")}}
