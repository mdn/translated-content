---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("WebRTC")}}

**`RTCPeerConnectionIceEvent`** インターフェイスは、通常 {{domxref("RTCPeerConnection")}}の ICE 候補に関連して発生するイベントを表現します。

この型のイベントは、 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} の 1 つだけです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_{{domxref("RTCPeerConnectionIceEvent")}} は {{domxref("Event")}} の一種であり、このイベントはそのプロパティも実装しています。_

- {{domxref("RTCPeerConnectionIceEvent.candidate")}} {{ReadOnlyInline}}
  - : イベントに関連付けられた候補を含む {{domxref("RTCIceCandidate")}} を格納し、このイベントがこれ以上来る候補がないことを示す場合は `null` を格納します。

## コンストラクター

- {{domxref("RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent()", "RTCPeerConnectionIceEvent()")}}
  - : 新しい `RTCPeerConnectionIceEvent` を返します。このコンストラクターは 2 つの引数を持ち、最初の引数はイベントの種類を表す文字列であり、 2 つ目は {{domxref("RTCIceCandidate")}} を含む辞書です。

## インスタンスメソッド

_{{domxref("RTCPeerConnectionIceEvent")}} は {{domxref("Event")}} の一種であり、このイベントはそのプロパティも実装しています。 {{domxref("RTCDataChannelEvent")}} に固有のメソッドはありません。_

## 例

```js
pc.onicecandidate = (ev) => {
  console.log(
    `The ICE candidate (trsp addr: '${ev.candidate.candidate}') added to connection.`,
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- このイベントの通常ターゲット: {{domxref("RTCPeerConnection")}}
