---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
l10n:
  sourceCommit: bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

`MediaRecorderErrorEvent` インターフェイスは、[MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) によって返されるエラーを表します。 発生したエラーを記述する {{domxref("DOMException")}} への参照をカプセル化した {{domxref("Event")}} オブジェクトです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("Event")}} からプロパティを継承します。_

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 発生したエラーに関する情報を含む {{domxref("DOMException")}} です。 読み取り専用です。

## コンストラクター

- {{domxref("MediaRecorderErrorEvent.MediaRecorderErrorEvent", "MediaStreamRecorderEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 指定された引数を使用して新しい `MediaRecorderErrorEvent` イベントオブジェクトを作成して返します。

## メソッド

_親インターフェイスである {{domxref("Event")}} からメソッドを継承しています。_

## 仕様書

この機能は、もはやどの仕様にも属しておらず、標準化の予定もありません。

## ブラウザーの互換性

{{Compat}}
