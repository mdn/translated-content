---
title: "RTCPeerConnection: currentLocalDescription プロパティ"
short-title: currentLocalDescription
slug: Web/API/RTCPeerConnection/currentLocalDescription
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebRTC")}}

**`currentLocalDescription`** は {{domxref("RTCPeerConnection")}} インターフェイスの読み取り専用プロパティで、この {{domxref("RTCPeerConnection")}} が最後にリモートピアーとのネゴシエーションおよび接続を完了して以来、最も最近正常にネゴシエーションされたピア接続のローカル側を説明する {{domxref("RTCSessionDescription")}} オブジェクトを返します。
同時に、その記述が表すオファーまたは回答がまずインスタンス化されて以来、ICE エージェントによってすでに生成されている可能性のある ICE 候補の一覧も含まれています。

`currentLocalDescription` を変更するには、{{domxref("RTCPeerConnection.setLocalDescription()")}} を呼び出します。これにより一連のイベントが開始され、この値が設定されます。
具体的にどのような処理が現れるのか、また変更が必ずしも即座に反映されない理由の詳細については、WebRTC 接続ページの[待機中および現在のディスクリプション](/ja/docs/Web/API/WebRTC_API/Connectivity#待機中および現在のディスクリプション)を参照してください。

> [!NOTE]
> {{domxref("RTCPeerConnection.localDescription")}} とは異なり、この値は接続のローカル側の実際の現在の状態を表します。
> `localDescription` には、接続が現在切り替え中の状態に関するディスクリプションが指定されることがあります。

## 値

接続のローカル側の現在のディスクリプション（設定されている場合）。
正常に設定されていない場合、この値は `null` になります。

## 例

この例では、`currentLocalDescription` を見ていき、{{domxref("RTCSessionDescription")}} オブジェクトの `type` および
`sdp` フィールドを含むアラートを表示させます。

```js
const pc = new RTCPeerConnection();
// …
const sd = pc.currentLocalDescription;
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

> [!NOTE]
> WebRTC 仕様へ `currentLocalDescription` および {{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} が追加されたのは、比較的最近のことです。
> これらに対応していないブラウザーでは、単に {{domxref("RTCPeerConnection.localDescription", "localDescription")}} を使用してください。

## 関連情報

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.localDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
