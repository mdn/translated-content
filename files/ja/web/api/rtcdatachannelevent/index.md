---
title: RTCDataChannelEvent
slug: Web/API/RTCDataChannelEvent
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("WebRTC")}}

**`RTCDataChannelEvent`** インターフェイスは、特定の {{domxref("RTCPeerConnection")}} に関連するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("RTCDataChannelEvent.RTCDataChannelEvent", "RTCDataChannelEvent()")}}
  - : 新しい `RTCDataChannelEvent` を作成します。

## インスタンスプロパティ

_{{domxref("Event")}} のプロパティを継承しています。。_

- {{DOMxRef("RTCDataChannelEvent.channel", "channel")}} {{ReadOnlyInline}}
  - : このイベントに関連付けられた {{domxref("RTCDataChannel")}} を返します。

## 例

この例では、 `datachannel` イベントハンドラーを設定して、データチャンネルの参照を保存し、監視する必要があるイベントのハンドラーを設定しています。 {{domxref("RTCDataChannelEvent.channel", "channel")}} プロパティは、他にもピアへの接続を表す {{domxref("RTCDataChannel")}} を提供しています。

```js
pc.ondatachannel = (event) => {
  inboundDataChannel = event.channel;
  inboundDataChannel.onmessage = handleIncomingMessage;
  inboundDataChannel.onopen = handleChannelOpen;
  inboundDataChannel.onclose = handleChannelClose;
};
```

データチャンネルを使用する、より完全な別の例は、[単純な RTCDataChannel の例](/ja/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- [単純な RTCDataChannel の例](/ja/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}} （{{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} イベントのターゲットインターフェイス）
