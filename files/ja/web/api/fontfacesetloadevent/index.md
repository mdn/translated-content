---
title: FontFaceSetLoadEvent
slug: Web/API/FontFaceSetLoadEvent
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("CSS Font Loading API")}}

**`FontFaceSetLoadEvent`** は [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) のインターフェイスで、フォントフェイスの読み込みを始めてから {{domxref("FontFaceSet")}} で発生するイベントを表します。

イベントはフォントの読み込みが開始されたとき ([`loading`](/ja/docs/Web/API/FontFaceSet/loading_event))、読み込みが完全に完了したとき ([`loadingdone`](/ja/docs/Web/API/FontFaceSet/loadingdone_event))、またはフォントの読み込みエラーがあったとき ([`loadingerror`](/ja/docs/Web/API/FontFaceSet/loadingerror_event)) に発行されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FontFaceSetLoadEvent.FontFaceSetLoadEvent","FontFaceSetLoadEvent()")}}
  - : 新しい `FontFaceSetLoadEvent` object.

## インスタンスプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("FontFaceSetLoadEvent.fontfaces")}} {{ReadOnlyInline}}
  - : {{domxref("FontFace")}} インスタンスの配列を返します。
    イベントに応じて、配列には読み込み中 (`loading`) の、読み込みに成功 (`loadingdone`) した、読み込みに失敗 (`loadingerror`) したフォントフェイスが格納されます。

## インスタンスメソッド

_親である {{domxref("Event")}} から継承したメソッドがあります_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.fonts")}}
- {{domxref("WorkerGlobalScope.fonts")}}
