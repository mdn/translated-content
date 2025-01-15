---
title: "Document: timeline プロパティ"
short-title: timeline
slug: Web/API/Document/timeline
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("Web Animations") }}

`timeline` は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、現在の文書の既定のタイムラインを表します。このタイムラインは {{domxref("DocumentTimeline")}} の特別なインスタンスです。

このタイムラインはそれぞれの `document` に固有のもので、{{domxref("Document.open()")}} の呼び出しを含む `document` の存続期間中維持されます。

このタイムラインは {{domxref("Performance.timeOrigin")}} からの時刻をミリ秒単位で表します。
基準時刻以前はタイムラインはアクティブではなく、 {{domxref("AnimationTimeline.currentTime", "currentTime")}} は `null` になります。

> [!NOTE]
> アクティブでない文書（{{domxref("Window")}}、{{htmlelement("iframe")}}、{{htmlelement("frame")}} に関連付けられていない {{domxref("Document")}}）に関連付けられている文書タイムラインもアクティブではないと見なされます。

## 値

{{domxref("DocumentTimeline")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("DocumentTimeline")}}
