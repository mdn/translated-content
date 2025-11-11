---
title: MediaStream
slug: Web/API/MediaStream
l10n:
  sourceCommit: 75d6fc9821feb4288e5bc7580c9d8176264d76ae
---

{{APIRef("Media Capture and Streams")}}

**`MediaStream`** は{{domxref("Media Capture and Streams API", "メディアキャプチャとストリーム API", "", "nocode")}} のインターフェイスで、メディアコンテンツのストリームを表します。ストリームは動画や音声など複数の**トラック**から成ります。それぞれのトラックは {{domxref("MediaStreamTrack")}} のインスタンスとして定義されます。

`MediaStream` オブジェクトを取得するには、コンストラクターを使用するか {{domxref("MediaDevices.getUserMedia()")}}, {{domxref("MediaDevices.getDisplayMedia()")}}, {{domxref("HTMLCanvasElement.captureStream()")}}　などの関数を呼び出すかします。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MediaStream.MediaStream", "MediaStream()")}}
  - : 新しい `MediaStream` オブジェクトを作成して返します。空のストリーム、既存のストリームに基づいたストリーム、 ({{domxref("MediaStreamTrack")}} オブジェクトの配列として指定して) 特定のトラックのリストを含むストリームを作成することができます。

## インスタンスプロパティ

_このインターフェイスは親である {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("MediaStream.active")}} {{ReadOnlyInline}}
  - : 論理値で、 `true` は `MediaStream` がアクティブな時、 `false` はそうでない場合です。
- {{domxref("MediaStream.id")}} {{ReadOnlyInline}}
  - : 文字列で、 36 文字のオブジェクトの汎用一意識別子 ({{Glossary("UUID")}}) を表します。

## インスタンスメソッド

_このインターフェイスは親である {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("MediaStream.addTrack()")}}
  - : 引数で指定された {{domxref("MediaStreamTrack")}} のコピーを格納します。トラックが既に `MediaStream` オブジェクトに追加されていた場合は、何も起こりません。
- {{domxref("MediaStream.clone()")}}
  - : `MediaStream` オブジェクトの複製を返します。ただし、複製は固有の {{domxref("MediaStream.id", "id")}} の値を持ちます。
- {{domxref("MediaStream.getAudioTracks()")}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトのリストで、 `MediaStream` オブジェクトに格納されているものの中で `kind` 属性が `audio` に設定されているものを返します。順序は未定義であり、ブラウザーによって異なるばかりでなく、呼び出し毎に異なる可能性もあります。
- {{domxref("MediaStream.getTrackById()")}}
  - : 引数 `trackid` で与えられた ID を持つトラックを返します。引数が与えられなかった場合や、その ID を持つトラックが存在しなかった場合は、 `null` を返します。複数のトラックが同じ ID を持っている場合は、最初の一つを返します。
- {{domxref("MediaStream.getTracks()")}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトのリストで、 MediaStream オブジェクトに格納されているものをすべて、 `kind` 属性の値に関わらず返します。順序は未定義であり、ブラウザーによって異なるばかりでなく、呼び出し毎に異なる可能性もあります。
- {{domxref("MediaStream.getVideoTracks()")}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトのリストで、 MediaStream オブジェクトに格納されているものの中で kind 属性が video に設定されているものを返します。順序は未定義であり、ブラウザーによって異なるばかりでなく、呼び出し毎に異なる可能性もあります。
- {{domxref("MediaStream.removeTrack()")}}
  - : 引数として与えられた {{domxref("MediaStreamTrack")}} を除去します。トラックが `MediaStream` オブジェクトに含まれていなかった場合は、何もしません。

## イベント

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
  - : 新しい {{domxref("MediaStreamTrack")}} オブジェクトが追加されたときに発行されます。
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトが除去されたときに発行されます。
- {{domxref("MediaStream/active_event", "active")}} {{Non-standard_Inline}}
  - : この MediaStream がアクティブになったときに発行されます。
- {{domxref("MediaStream/inactive_event", "inactive")}} {{Non-standard_Inline}}
  - : この MediaStream がアクティブでなくなったときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- {{domxref("MediaStreamTrack")}}
