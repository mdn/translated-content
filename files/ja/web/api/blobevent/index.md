---
title: BlobEvent
slug: Web/API/BlobEvent
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef("MediaStream Recording")}}

**`BlobEvent`** インターフェイスは、{{domxref("Blob")}} に関連付けられたイベントを表します。 これらの blob は、一般的にメディアコンテンツと関連付けられますが、必ずしもそうとは限りません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("BlobEvent.BlobEvent", "BlobEvent()")}}
  - : 与えられた引数で `BlobEvent` イベントを生成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} からの継承したプロパティがあります。_

- {{domxref("BlobEvent.data")}} {{ReadOnlyInline}}
  - : イベントと関連付けられたデータを表す {{domxref("Blob")}}。 イベントは、特定の {{domxref("Blob")}} で何かが起こることにより、{{domxref("EventTarget")}} 上で発生します。
- {{domxref("BlobEvent.timecode")}} {{ReadOnlyInline}}
  - : `data` 内の最初のチャンクのタイムスタンプと、このレコーダーによって生成された最初の `BlobEvent` 内の最初のチャンクのタイムスタンプとの差を示す {{domxref("DOMHighResTimeStamp")}} です。生成されたばかりの `BlobEvent` の `timecode` はゼロとは限らないことに注意してください。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("Event")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Event")}} 基本インターフェイス
- [メディアストリーム収録 API](/ja/docs/Web/API/MediaStream_Recording_API): メディアのチャンクの準備ができるたびに `BlobEvent` オブジェクトを送信します。
- [メディアストリーム収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
