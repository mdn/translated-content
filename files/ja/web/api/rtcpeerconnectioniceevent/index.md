---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnectionIceEvent`** インタフェースは、通常 {{domxref("RTCPeerConnection")}}の ICE 候補に関連して発生するイベントを表現します。イベントのタイプは{{event("icecandidate")}}です。

## プロパティ

_{{domxref("RTCPeerConnectionIceEvent")}} は {{domxref("Event")}} であり, {{domxref("Event")}}のプロパティも実装されています。_

- {{domxref("RTCPeerConnectionIceEvent.candidate")}} {{readOnlyInline}}
  - : このイベントに関連した候補を含む{{domxref("RTCIceCandidate")}}です。

## コンストラクタ

- {{domxref("RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent()", "RTCPeerConnectionIceEvent()")}}
  - : 新しい RTCPeerConnectionIceEvent を返します。このコンストラクタは 2 つの引数を持ち、最初の引数はイベントのタイプを表す{{domxref("DOMString")}}であり、二つ目の引数は、{{domxref("RTCIceCandidate")}}を含むディクショナリです。

## メソッド

_{{domxref("RTCPeerConnectionIceEvent")}} は {{domxref("Event")}}であり、このイベントは{{domxref("Event")}}のプロパティも実装します。具体的な _{{domxref("</em>RTCPeerConnectionIceEvent<em>")}}_ メソッドはありません。_

## 例

```js
pc.onicecandidate = function( ev ) {
                      alert("The ICE candidate (transport address: '" +
                            ev.candidate.candidate +
                            "') has been added to this connection.");
                   }
```

## 仕様

| Specification                                                                                                                    | Status                           | Comment             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{ SpecName('WebRTC 1.0', '#idl-def-RTCPeerConnectionIceEvent', 'RTCPeerConnectionIceEvent') }} | {{Spec2('WebRTC 1.0')}} | Initial definition. |

## ブラウザ互換性

{{Compat("api.RTCPeerConnectionIceEvent")}}

## その他の記事

- [WebRTC](/ja/docs/Web/Guide/API/WebRTC)
- このイベントの通常ターゲット: {{domxref("RTCPeerConnection")}}.
