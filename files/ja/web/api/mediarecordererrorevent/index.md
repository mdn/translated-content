---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
---

{{APIRef("MediaStream Recording")}}

`MediaRecorderErrorEvent` インターフェイスは、[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) によって返されるエラーを表します。 発生したエラーを記述する {{domxref("DOMException")}} への参照をカプセル化した {{domxref("Event")}} オブジェクトです。

## プロパティ

_親インタフェースである {{domxref("Event")}} からプロパティを継承します。_

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : 発生したエラーに関する情報を含む {{domxref("DOMException")}}。 読み取り専用

## コンストラクタ

- {{domxref("MediaRecorderErrorEvent.MediaRecorderErrorEvent", "MediaStreamRecorderEvent()")}}
  - : 指定されたパラメータを使用して新しい `MediaRecorderErrorEvent` イベントオブジェクトを作成して返します。

## メソッド

_親インタフェースである {{domxref("Event")}} からメソッドを継承します。_

## 仕様

| 仕様                                                                                                                                             | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{ SpecName('MediaStream Recording', 'MediaRecorder.html#errorevent-section', 'MediaRecorderErrorEvent') }} | {{ Spec2('MediaStream Recording') }} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorderErrorEvent")}}
