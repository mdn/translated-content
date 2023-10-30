---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCSessionDescription`** インターフェイスは、接続 (または接続する予定のもの) の一端と、その構成方法を記述します。それぞれの **`RTCSessionDescription`** は、どのオファー/アンサー交渉プロセスを使用するかを表す記述の {{domxref("RTCSessionDescription.type", "type")}} と、セッションの {{Glossary("SDP")}} 記述子から成ります。

The process of negotiating a connection between two peers involves exchanging `RTCSessionDescription` objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.

## プロパティ

_`RTCSessionDescription` が継承するプロパティは存在しません。_

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : これは `RTCSdpType` の列挙型であり、ディスクリプションの種類を表します。

<!---->

- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : これは、セッションを説明するための {{Glossary("SDP")}} 形式の {{domxref("DOMString")}} です。

## 定数

### RTCSdpType

This enum defines strings that describe the current state of the session description, as used in the {{domxref("RTCSessionDescription.type", "type")}} property. The session description's type will be specified using one of these values.

| 値         | 説明                                                                                                                                                                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `answer`   | The SDP contained in the {{domxref("RTCSessionDescription.sdp", "sdp")}} property is the definitive choice in the exchange. In other words, this session description describes the agreed-upon configuration, and is being sent to finalize negotiation. |
| `offer`    | The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.                                                                |
| `pranswer` | The session description object describes a provisional answer; that is, it's a response to a previous offer or provisional answer.                                                                                                                       |
| `rollback` | This special type with an empty session description is used to roll back to the previous stable state.                                                                                                                                                   |

## メソッド

_`RTCSessionDescription` が継承するメソッドは存在しません。_

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : 新しい `RTCSessionDescription` を返します。この引数は `RTCSessionDescriptionInit` ディクショナリであり (任意の) 2 つの引数を含みます。これらの引数の 1 つまたは全て与えられなかった場合、関連するプロパティは null に設定されます。
- {{domxref("RTCSessionDescription.toJSON()")}}
  - : このオブジェクトの {{Glossary("JSON")}} による表現を生成して返します。生成された JSON は、{{domxref("RTCSessionDescription.type", "type")}} と {{domxref("RTCSessionDescription.sdp", "sdp")}}を含みます。

## 例

```js
signalingChannel.onmessage = function (evt) {
  if (!pc) start(false);

  var message = JSON.parse(evt.data);
  if (message.sdp)
    pc.setRemoteDescription(
      new RTCSessionDescription(message),
      function () {
        // オファーを受け取った場合、このオファーに対して応答する。
        if (pc.remoteDescription.type == "offer")
          pc.createAnswer(localDescCreated, logError);
      },
      logError,
    );
  else
    pc.addIceCandidate(
      new RTCIceCandidate(message.candidate),
      function () {},
      logError,
    );
};
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat("api.RTCSessionDescription")}}

## 関連情報

- [WebRTC](/ja/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} 及び {{domxref("RTCPeerConnection.setRemoteDescription()")}}
