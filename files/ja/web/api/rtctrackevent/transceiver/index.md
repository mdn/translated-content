---
title: "RTCTrackEvent: transceiver プロパティ"
short-title: transceiver
slug: Web/API/RTCTrackEvent/transceiver
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

WebRTC API の {{domxref("RTCTrackEvent")}} インターフェイスの読み取り専用の **`transceiver`** プロパティは、イベントの {{domxref("RTCTrackEvent.track", "track")}} に関連付けられた {{domxref("RTCRtpTransceiver")}} を示します。

このトランシーバーは、トラックの {{domxref("RTCTrackEvent.receiver", "receiver")}} を {{domxref("RTCRtpSender")}} と結びつけます。

## 値

{{domxref("RTCRtpTransceiver")}} は、 `receiver` と送信者、およびそれ以外の、この `RTCTrackEvent` に関連付けられた {{domxref("RTCTrackEvent.track", "track")}} で使用される単一の双方向 {{Glossary("RTP", "SRTP")}} ストリームを確立するプロパティをペアにします。

> [!NOTE]
> この {{domxref("RTCRtpReceiver")}} の {{domxref("RTCRtpTransceiver.receiver", "receiver")}} プロパティが参照する `RTCRtpReceiver` は、常に {{domxref("RTCTrackEvent")}} の {{domxref("RTCTrackEvent.receiver", "receiver")}} プロパティと同じになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
