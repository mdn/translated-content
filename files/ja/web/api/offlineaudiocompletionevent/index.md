---
title: OfflineAudioCompletionEvent
slug: Web/API/OfflineAudioCompletionEvent
l10n:
  sourceCommit: db72d5612ada1d40cde0de191389dde2fe062c23
---

{{APIRef("Web Audio API")}}

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の `OfflineAudioCompletionEvent` このインターフェイスは、 {{domxref("OfflineAudioContext")}} の処理が終了した際に発生するイベントを表します。 {{domxref("OfflineAudioContext/complete_event", "complete")}} イベントがこのインターフェイスで使用されます。

> [!NOTE]
> このインターフェイスは非推奨とされています。過去の経緯からまだ対応していますが、ブラウザーがプロミス版の {{domxref("OfflineAudioContext.startRendering")}} に対応してくると、このインターフェイスはまもなく廃止され、必要なくなる予定です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("OfflineAudioCompletionEvent.OfflineAudioCompletionEvent", "OfflineAudioCompletionEvent()")}}
  - : 新しい `OfflineAudioCompletionEvent` オブジェクトインスタンスを生成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref("OfflineAudioCompletionEvent.renderedBuffer")}} {{ReadOnlyInline}}
  - : {{domxref("AudioBuffer")}} で、 {{domxref("OfflineAudioContext")}} の処理結果が入ります。

## インスタンスメソッド

_親である {{domxref("Event")}} からメソッドを継承しています_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
