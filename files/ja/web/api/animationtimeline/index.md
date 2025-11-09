---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{ APIRef("Web Animations") }}

`AnimationTimeline` は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のインターフェイスで、アニメーションのタイムラインを表します。このインターフェイスは、他のタイムライン型を継承するタイムライン機能を定義するために存在します。

- {{domxref("DocumentTimeline")}}
- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## インスタンスプロパティ

- {{domxref("AnimationTimeline.currentTime", "currentTime")}} {{ReadOnlyInline}}
  - : このタイムラインの時刻値をミリ秒で返します。このタイムラインがアクティブでない場合は `null` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentTimeline")}}, {{domxref("ScrollTimeline")}}, {{domxref("ViewTimeline")}}
- {{domxref("Document.timeline")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
