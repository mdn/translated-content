---
title: RTCDataChannelEvent
slug: Web/API/RTCDataChannelEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCDataChannelEvent`** インタフェースは{{domxref("RTCPeerConnection")}}へ{{domxref("RTCDataChannel")}}をアタッチしている時に発生するイベントを表現します。イベントタイプは、{{event("datachannel")}}です。

## プロパティ

_{{domxref("RTCDataChannelEvent")}} は {{domxref("Event")}}であり、このイベントは {{domxref("Event")}}のプロパティも実装します。_

- {{domxref("RTCDataChannelEvent.channel")}} {{readOnlyInline}}
  - : このイベントに関連付けられたデータチャンネルを含む{{domxref("RTCDataChannel")}}を含みます。

## コンストラクタ

- {{domxref("RTCDataChannelEvent.RTCDataChannelEvent()", "RTCDataChannelEvent()")}}
  - : `新しいRTCDataChannelEvent`を返します。このコンストラクタは 2 つの引数を持ち、最初の引数は、イベントタイプを表す {{domxref("DOMString")}} で、2 つ目の引数は{{domxref("RTCDataChannel")}}を含むディクショナリです。

## メソッド

_{{domxref("RTCDataChannelEvent")}} は {{domxref("Event")}}であり、このイベントは {{domxref("Event")}}のプロパティも実装します。具体的な {{domxref("RTCDataChannelEvent")}} メソッドはありません。_

## 例

```js
pc.ondatachannel = function( ev ) {
                      alert("The data channel " +
                            ev.channel.label +
                            " has been added to this connection.");
                   }
```

## 仕様

| Specification                                                                                                    | Status                           | Comment             |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{ SpecName('WebRTC 1.0', '#idl-def-RTCDataChannelEvent', 'RTCDataChannelEvent') }} | {{Spec2('WebRTC 1.0')}} | Initial definition. |

## ブラウザ互換性

{{Compat("api.RTCDataChannelEvent")}}

## See also

- [WebRTC](/ja/docs/Web/Guide/API/WebRTC)
- このイベントの通常ターゲット: {{domxref("RTCPeerConnection")}}.
