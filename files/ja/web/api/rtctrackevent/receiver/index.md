---
title: "RTCTrackEvent: receiver プロパティ"
short-title: receiver
slug: Web/API/RTCTrackEvent/receiver
l10n:
  sourceCommit: 7782020d48b20a95fab6767f574cddda8ff59b86
---

{{APIRef("WebRTC")}}

**`receiver`** は {{domxref("RTCTrackEvent")}} インターフェイスの読み取り専用プロパティで、イベントが参照する {{domxref("RTCTrackEvent.track", "track")}} のメディアを含むデータを受信するために使用される {{domxref("RTCRtpReceiver")}} を示します。

## 値

{{domxref("RTCRtpReceiver")}} で、 `receiver` を送信者とペアにし、 `RTCTrackEvent` に関連付けられたトラックで使用される単一の双方向 {{Glossary("RTP", "SRTP")}} ストリームを確立するその他のプロパティを格納しています。

> [!NOTE]
> {{domxref("RTCTrackEvent.transceiver", "transceiver")}} には、それ自身で {{domxref("RTCRtpTransceiver.receiver", "receiver")}} プロパティが含まれます。これは、常にこれと同じ {{domxref("RTCRtpReceiver")}} になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
