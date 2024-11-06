---
title: "Animation: timeline プロパティ"
short-title: timeline
slug: Web/API/Animation/timeline
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`Animation.timeline`** は {{domxref("Animation")}} インターフェイスのプロパティで、このアニメーションに関連付けられた {{domxref("AnimationTimeline", "timeline")}} を返したり設定したりします。タイムラインは同期を目的とした時刻値の元であり、{{domxref("AnimationTimeline")}}ベースのオブジェクトです。既定値では、アニメーションのタイムラインと {{domxref("Document")}} のタイムラインは同じです。

## 値

アニメーションのタイミングソースとして使用する{{domxref("AnimationTimeline", "タイムラインオブジェクト", "", 1)}}、または既定値では `null` であり、 {{domxref("Document")}} のタイムラインを使用することを表します。

## 例

ここでは、アニメーションのタイムラインを文書のタイムラインと同じに設定します（ちなみに、これはすべてのアニメーションの既定値です）：

```js
animation.timeline = document.timeline;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("AnimationTimeline")}}: すべてのタイムラインが継承する親オブジェクト
- {{domxref("DocumentTimeline")}}: 現在利用できる唯一のタイムラインオブジェクト
- {{domxref("Document.timeline")}}: すべてのアニメーションに割り当てる既定値
