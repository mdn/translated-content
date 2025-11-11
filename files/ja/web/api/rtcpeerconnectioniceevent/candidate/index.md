---
title: RTCPeerConnectionIceEvent.candidate
slug: Web/API/RTCPeerConnectionIceEvent/candidate
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("WebRTC")}}

**`candidate`** は {{domxref("RTCPeerConnectionIceEvent")}} インターフェイスの読み取り専用のプロパティで、そのイベントに関連付けられた {{domxref("RTCIceCandidate")}} を返します。

## 値

受信した ICE の候補を表す {{domxref("RTCIceCandidate")}} オブジェクト、 またはこのネゴシエーションセッションの候補がないことを表す `null` です。

## 例

```js
pc.onicecandidate = (ev) => {
  alert(
    `The ICE candidate (transport address: '${ev.candidate.candidate}') has been added to this connection.`,
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
- {{domxref("RTCPeerConnection")}}
