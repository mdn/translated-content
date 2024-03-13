---
title: RTCPeerConnection.canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
---

{{APIRef("WebRTC")}}

**{{domxref("RTCPeerConnection")}}** は読み取り専用のプロパティで、リモートピアーが[トリクル ICE 候補](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice)を受け入れることができるかどうかを示す論理値を返します。

**ICE トリクリング**とは、最初の提案や回答がすでに相手に送られた後も、候補を送り続けるプロセスのことです。

このプロパティは {{domxref("RTCPeerConnection.setRemoteDescription()")}} を呼び出した後にのみ設定されます。理想的には、シグナルプロトコルがトリクルサポートを検出する方法を提供し、このプロパティに依存する必要がないようにすることです。　WebRTC ブラウザーは、常にトリクル ICE に対応しています。トリクリングに対応していない場合、または指示することができない場合は、このプロパティの偽値をチェックし、 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} の値が `"completed"` に変わるまで待ってから最初の提案を作成し送信することができます。そうすることで、提案にすべての候補が含まれるようになります。

## 値

論理値で、リモートピアーがトリクル ICE 候補を受け入れることができる場合は `true`、受け入れることができない場合は `false` となります。リモートピアーが確立されていない場合、この値は `null` となります。

> **メモ:** このプロパティの値は、ローカルピアーが {{domxref("RTCPeerConnection.setRemoteDescription()") }}を呼び出した時点で決定されます。
> ICE　エージェントがリモートピアーがトリクル ICE 候補に対応しているかどうかを判断するために、指定された説明が使用されます。

## 例

```js
const pc = new RTCPeerConnection();

function waitToCompleteIceGathering(pc) {
  return new Promise((resolve) => {
    pc.addEventListener(
      "icegatheringstatechange",
      (e) =>
        e.target.iceGatheringState === "complete" &&
        resolve(pc.localDescription),
    );
  });
}

// The following code might be used to handle an offer from a peer when
// it isn't known whether it supports trickle ICE.
async function newPeer(remoteOffer) {
  await pc.setRemoteDescription(remoteOffer);
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  if (pc.canTrickleIceCandidates) return pc.localDescription;
  const answer = await waitToCompleteIceGathering(pc);
  sendAnswerToPeer(answer); //To peer via signaling channel
}
// Handle error with try/catch

pc.addEventListener(
  "icecandidate",
  (e) => pc.canTrickleIceCandidates && sendCandidateToPeer(e.candidate),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [WebRTC セッションの寿命](/ja/docs/Web/API/WebRTC_API/Session_lifetime)
