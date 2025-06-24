---
title: "RTCTrackEvent: RTCTrackEvent() コンストラクター"
short-title: RTCTrackEvent()
slug: Web/API/RTCTrackEvent/RTCTrackEvent
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("WebRTC")}}

**`RTCTrackEvent()`** コンストラクターは、{{domxref("RTCPeerConnection")}} に追加された予定を記述するように構成された、新しい {{domxref("RTCTrackEvent")}} オブジェクトを作成して返します。

通常、 `RTCTrackEvent` オブジェクトは WebRTC によって作成され、必要に応じて `RTCPeerConnection` の {{domxref("RTCPeerConnection.track_event", "ontrack")}} イベントハンドラーに配信されるため、このコンストラクターを使用する必要はありません。

## 構文

```js-nolint
new RTCTrackEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字と小文字が区別され、ブラウザーでは常に `track` に設定されます。
- `options`
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `receiver`
      - : このトラックのメディアを受信するために使用される {{domxref("RTCRtpReceiver")}} です。
    - `streams` {{optional_inline}}
      - : イベントに対応するトラックを構成する各ストリームを表す {{domxref("MediaStream")}} オブジェクトの配列です。
        既定では、空の配列になります。
    - `track`
      - : このイベントが結び付けられている {{domxref("MediaStreamTrack")}} です。
    - `transceiver`
      - : このイベントに関連付けられた {{domxref("RTCRtpTransceiver")}} です。

### 返値

`RTCPeerConnection` に追加されたトラックを表す新しい {{domxref("RTCTrackEvent")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
