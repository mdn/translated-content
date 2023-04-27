---
title: BlobEvent
slug: Web/API/BlobEvent
---

{{APIRef("Media Capture and Streams")}}

**`BlobEvent`** インターフェイスは、{{domxref("Blob")}} に関連付けられたイベントを表します。 これらの blob は、一般的にメディアコンテンツと関連付けられますが、必ずしもそうとは限りません。

## コンストラクター

- {{domxref("BlobEvent.BlobEvent", "BlobEvent()")}}
  - : 与えられた引数で `BlobEvent` イベントを生成する。

## プロパティ

_自身の親 {{domxref("Event")}} からのプロパティを継承します。_

- {{domxref("BlobEvent.data")}} {{readonlyInline}}
  - : イベントと関連付けられたデータを表す {{domxref("Blob")}}。 イベントは、特定の {{domxref("Blob")}} で何かが起こることにより、{{domxref("EventTarget")}} 上で発生します。
- {{domxref("BlobEvent.timecode")}} {{readonlyinline}}
  - : `data` 内の最初のチャンクのタイムスタンプと、このレコーダーによって生成された最初の `BlobEvent` 内の最初のチャンクのタイムスタンプとの差を示す {{domxref("DOMHighResTimeStamp")}}。 最初に生成された `BlobEvent` の `timecode` はゼロである必要はないことに注意してください。

## メソッド

固有のメソッドはありません。 _自身の親 {{domxref("Event")}} からのメソッドを継承します。_

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat("api.BlobEvent")}}

## 関連項目

- {{domxref("Event")}} 基本インターフェイス
- [MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API): メディアのチャンクの準備ができるたびに `BlobEvent` オブジェクトを送信します。
- [MediaStream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
