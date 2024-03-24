---
title: "RTCPeerConnection: localDescription プロパティ"
short-title: localDescription
slug: Web/API/RTCPeerConnection/localDescription
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

**`RTCPeerConnection.localDescription`** は読み取り専用プロパティで、接続のローカル側のセッションを説明する {{domxref("RTCSessionDescription")}} を返します。
まだ設定されていない場合は `null` となります。

## 構文

```js-nolint
const sessionDescription = peerConnection.localDescription
```

より基本的なレベルでは、 {{domxref("RTCPeerConnection.pendingLocalDescription")}} のプロパティが `null` でない場合、その値が返されます。
それ以外の場合は、 {{domxref("RTCPeerConnection.currentLocalDescription")}} の値が返されます。
このアルゴリズムの詳細と使用理由については、 WebRTC Connectivity ページの [Pending and current descriptions](/ja/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) を参照してください。

## 例

この例では `localDescription` を見て、{{domxref("RTCSessionDescription")}} オブジェクトの `type` と `sdp` フィールドを含むアラートを表示します。

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.localDescription;
if (sd) {
  alert(`Local session: type='${sd.type}'; sdp description='${sd.sdp}'`);
} else {
  alert("No local session yet.");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("RTCPeerConnection.setLocalDescription()")}},
  {{domxref("RTCPeerConnection.pendingLocalDescription")}},
  {{domxref("RTCPeerConnection.currentLocalDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}},
  {{domxref("RTCPeerConnection.remoteDescription")}},
  {{domxref("RTCPeerConnection.pendingRemoteDescription")}},
  {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
