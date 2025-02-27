---
title: DocumentTimeline
slug: Web/API/DocumentTimeline
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ APIRef("Web Animations") }}

**`DocumentTimeline`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のインターフェイスで、（{{domxref("Document.timeline")}} からアクセスできる）既定の文書タイムラインを含むアニメーションタイムラインを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
  - : 現在の閲覧コンテキストでアクティブな文書に関連付けられた、新しい `DocumentTimeline` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("AnimationTimeline")}} からプロパティを継承しています。_

- {{domxref("AnimationTimeline.currentTime")}}
  - : タイムラインの時刻値をミリ秒で返します。無効な場合は `null` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("Document.timeline")}}
- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
