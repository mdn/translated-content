---
title: "RTCPeerConnection: iceConnectionState プロパティ"
short-title: iceConnectionState
slug: Web/API/RTCPeerConnection/iceConnectionState
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

**`iceConnectionState`** は {{domxref("RTCPeerConnection")}} インターフェイスの読み取り専用プロパティで、{{domxref("RTCPeerConnection")}} に関連付けられた {{Glossary("ICE")}} エージェントの状態を表す文字列、`new`、`checking`、`connected`、`completed`、`failed`、`disconnected`、`closed` のいずれかを返します。

これは、ICE エージェントの現在の状態と、ICE サーバー（すなわち、{{Glossary("STUN")}} または {{Glossary("TURN")}} サーバー）との接続状況について説明しています。

この値が変更されたかどうかは、{{DOMxRef("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} イベントを監視することで検出できます。

## 値

ICE エージェントの現在の状態とその接続状況。値は、以下の文字列のいずれかになります。

- `new`
  - : ICE エージェントは、アドレスを収集しているか、{{domxref("RTCPeerConnection.addIceCandidate()")}} への呼び出しを通じてリモート候補が指定されるの待っています（あるいはその両方です）。
- `checking`
  - : ICE エージェントは、1 つ以上のリモート候補を指定され、ローカル候補とリモート候補のペアを相互に調べ、互換性のある組み合わせを探そうとしていますが、まだピア接続をすることができるペアは見つかっていません。
    候補の募集が同時にまだ続いている可能性があります。
- `connected`
  - : 接続のすべての要素について、ローカルおよびリモートの候補間の有効な組み合わせを探し、接続が確立されました。
    情報収集がまだ進行中である可能性もあれば、ICE のエージェントが、より有益な接点を使用するために、候補者同士を調べて続けている可能性もある。
- `completed`
  - : ICE のエージェントは候補の収集を完了し、すべてのペアを相互に調べ、すべての要素について関連性を探した。
- `failed`
  - : ICE 候補は、すべての候補ペアを相互に調べましたが、接続のすべての要素について互換性のある組み合わせを探すことができませんでした。
    とはいえ、ICE のエージェントが一部の要素について適合する接続箇所を実際に探した可能性はある。
- `disconnected`
  - : {{domxref("RTCPeerConnection")}} の要素のうち、少なくとも 1 つについて、要素が引き続き接続されていることを確実に実現するチェックに失敗しました。
    この検査は `failed` よりも厳格度の低い検査であり、信頼性の低いネットワーク環境や一時的な接続切断の際などに、断続的に開始し、同様に自然に解消されることがあります。
    問題が解決すると、接続は `connected` 状態に戻ることがあります。
- `closed`
  - : この {{domxref("RTCPeerConnection")}} の ICE エージェントはシャットダウンしたため、リクエストの処理ができなくなりました。

## 例

```js
const pc = new RTCPeerConnection();
const state = pc.iceConnectionState;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection")}}
