---
title: RTCTrackEvent
slug: Web/API/RTCTrackEvent
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

[WebRTC API](/ja/docs/Web/API/WebRTC_API) の **`RTCTrackEvent`** インターフェイスは、 {{domxref("RTCPeerConnection.track_event", "track")}} イベントを表します。これは新しい {{domxref("MediaStreamTrack")}} が {{domxref("RTCRtpReceiver")}} に {{domxref("RTCPeerConnection")}} の一部として追加されたときに送られます。

対象は、トラックが追加される `RTCPeerConnection` オブジェクトです。

このイベントは WebRTC レイヤーからウェブサイトまたはアプリケーションに送信されるため、通常、`RTCTrackEvent` を自分でインスタンス化する必要はありません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("RTCTrackEvent.RTCTrackEvent", "RTCTrackEvent()")}}
  - : 新しい `RTCTrackEvent` オブジェクトを作成して返します。新しいトラックイベントは通常、 WebRTC インフラストラクチャによって作成され、接続の {{domxref("RTCPeerConnection.track_event", "ontrack")}} イベントハンドラーに送信されるため、自分で作成する必要はほとんどありません。

## インスタンスプロパティ

_`RTCTrackEvent` は {{domxref("Event")}} から派生しているため、そちらのプロパティも使用できます。_

- {{domxref("RTCTrackEvent.receiver", "receiver")}} {{ReadOnlyInline}}
  - : `RTCPeerConnection` に追加されたトラックで使用される {{domxref("RTCRtpReceiver")}} です。
- {{domxref("RTCTrackEvent.streams", "streams")}} {{ReadOnlyInline}} {{optional_inline}}
  - : {{domxref("MediaStream")}} オブジェクトの配列で、各オブジェクトは、追加する {{domxref("RTCTrackEvent.track", "track")}} が属するメディアストリームの 1 つを表します。 既定では、配列は空で、ストリームのないトラックを示します。
- {{domxref("RTCTrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : この接続に追加された {{domxref("MediaStreamTrack")}} です。
- {{domxref("RTCTrackEvent.transceiver", "transceiver")}} {{ReadOnlyInline}}
  - : 新しいトラックで使用される {{domxref("RTCRtpTransceiver")}} です。

## トラックイベントの種類

トラックイベントは 1 種類のみです。

### `track`

{{domxref("RTCPeerConnection.track_event", "track")}} イベントは、新しいトラックが接続に追加されたときに {{domxref("RTCPeerConnection")}} に送信されます。 `track` イベントが `RTCPeerConnection` の {{domxref("RTCPeerConnection.track_event", "ontrack")}} ハンドラーに配信される時点で、新しいメディアは特定の {{domxref("RTCRtpReceiver")}} （イベントの {{domxref("RTCTrackEvent.receiver", "receiver")}} プロパティで指定）に対するネゴシエーションを完了しています。

さらに、受信者の {{domxref("RTCRtpReceiver.track", "track")}} で指定された {{domxref("MediaStreamTrack")}} は、イベントの {{domxref("RTCTrackEvent.track", "track")}} で指定されたものと同じであり、そのトラックは、関連付けられたすべてのリモート {{domxref("MediaStream")}} オブジェクトに追加されています。

新しいトラックが利用可能になったときに通知を受ける `track` イベントリスナーを追加することができます。これにより、例えば、 {{domxref("EventTarget.addEventListener", "RTCPeerConnection.addEventListener()")}} または `ontrack` イベントハンドラープロパティを使用して、そのメディアを {{HTMLElement("video")}} 要素に添付することができます。

> [!NOTE]
> 新しい着信トラックが接続に追加されたときに `track` イベントを受け取り、 {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} を呼び出して接続の遠端にトラックを追加すると、リモートピアーで `track` イベントが起動されることを覚えておくとよいでしょう。

## 例

この単純な例では、 {{domxref("RTCPeerConnection.track_event", "track")}} イベントのイベントリスナーを作成し、ID が `video-box` である {{HTMLElement("video")}} 要素の {{domxref("HTMLMediaElement.srcObject", "srcObject")}} を、イベントの {{domxref("RTCTrackEvent.streams", "streams")}} 配列に渡されたリスト内の最初のストリームに設定します。

```js
peerConnection.addEventListener(
  "track",
  (e) => {
    let videoElement = document.getElementById("video-box");
    videoElement.srcObject = e.streams[0];
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
