---
title: "RTCPeerConnection: iceGatheringState プロパティ"
short-title: iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

**`iceGatheringState`** は {{domxref("RTCPeerConnection")}} インターフェイスの読み取り専用プロパティで、この接続の ICE 集合状態全体を説明する文字列を返します。
これにより、例えば、ICE 候補の集合が完了したタイミングを検知することができます。

このプロパティの値が変更されたことを検知するには、{{domxref("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}} 型のイベントを監視します。

なお、**`iceGatheringState`** は、全接続におけるすべての {{domxref("RTCRtpSender")}} と {{domxref("RTCRtpReceiver")}} が使用する {{domxref("RTCIceTransport")}} をすべて含む、接続全体の収集状態を表します。
この状態に対し、{{domxref("RTCIceTransport.gatheringState")}} は、単一のトランスポートの収集状態を表します。

## 値

取りうる値は次の通りです。

- `new`
  - : このピア接続は作成されたばかりで、まだネットワーク通信をしていません。
- `gathering`
  - : ICE のエージェントは現在、そのつながりに関する候補を収集しています。
- `complete`
  - : ICE のエージェントは候補の選定を完了しています。
    新しいインターフェースの追加や新しい ICE サーバーの追加など、新たな候補を収集要求される場合、その状態は `gathering` に戻り、それらの候補を収集します。

## 例

```js
const pc = new RTCPeerConnection();
const state = pc.iceGatheringState;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
