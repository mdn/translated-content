---
title: "RTCPeerConnection: connectionState プロパティ"
short-title: connectionState
slug: Web/API/RTCPeerConnection/connectionState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

**`connectionState`** は {{domxref("RTCPeerConnection")}} インターフェイスの読み取り専用プロパティで、ピア接続の現在の状態を示す `new`、`connecting`、`connected`、`disconnected`、`failed`、`closed` のいずれかの文字列値を返します。

この状態は、本質的に、その接続で使用されているすべての ICE トランスポート（タイプが {{domxref("RTCIceTransport")}} または {{domxref("RTCDtlsTransport")}} であるもの）の集合状態を表します。

このプロパティの値が変更されると、{{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}} イベントが {{domxref("RTCPeerConnection")}} インスタンスに送信されます。

## 値

接続の現在の状態を表す文字列です。この値は、以下のいずれかになります。

- `new`
  - : 接続の {{Glossary("ICE")}} トランスポート（{{domxref("RTCIceTransport")}} または {{domxref("RTCDtlsTransport")}} オブジェクト）のうち、少なくとも 1 つが `new` 状態であり、かつそれらのいずれも  `connecting`、`checking`、`failed`、`disconnected` のいずれでもない場合、あるいは接続のすべてのトランスポートが `closed` 状態にある場合です。
- `connecting`
  - : 現在、1 つ以上の {{Glossary("ICE")}} トランスポートが接続を確立しようとしています。
    つまり、それらの {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} が `checking` または `connected` のいずれかであり、かつ `failed` 状態にあるトランスポートが存在していません。
- `connected`
  - : その接続で使用されているすべての {{Glossary("ICE")}} トランスポートは、使用中（`connected` または `completed` 状態）か、閉じられた（`closed` 状態）かのいずれかです。
    さらに、少なくとも 1 つの転送が `connected` または `completed` の状態である。
- `disconnected`
  - : その接続の {{Glossary("ICE")}} トランスポートのうち、少なくとも 1 つが `disconnected` 状態であり、それ以外にも他のトランスポートはいずれも `failed`、`connecting`、`checking` のいずれかの状態になっていない。
- `failed`
  - : その接続の {{Glossary("ICE")}} トランスポートのうち、1 つ以上が `failed` 状態になっています。
- `closed`
  - : {{DOMxRef("RTCPeerConnection")}} が閉じられています。

## 例

```js
const peerConnection = new RTCPeerConnection(configuration);

// …

const connectionState = peerConnection.connectionState;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC セッションの寿命](/ja/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
- {{domxref("RTCIceTransport.state")}}
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
