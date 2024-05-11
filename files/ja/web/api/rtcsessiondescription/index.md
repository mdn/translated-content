---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

**`RTCSessionDescription`** インターフェイスは、接続 (または接続する予定のもの) の一端と、その構成方法を記述します。それぞれの `RTCSessionDescription` は、どのオファー/アンサー交渉プロセスを使用するかを表す記述の {{domxref("RTCSessionDescription.type", "type")}} と、セッションの {{Glossary("SDP")}} 記述子から成ります。

2 つのピア間で接続を交渉するプロセスでは、 `RTCSessionDescription` オブジェクトをやり取りします。それぞれの説明は、説明の送り手が対応している接続構成オプションの組み合わせを提案します。 2 つのピア間で接続の構成が合意されると、交渉は完全に完了します。

## プロパティ

_`RTCSessionDescription` は何もプロパティを継承していません。_

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : 列挙型であり、ディスクリプションの種類を表します。
- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : 文字列で、セッションを説明するための {{Glossary("SDP")}} が入ります。

## インスタンスメソッド

_`RTCSessionDescription` は何もメソッドを継承していません。_

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : 新しい `RTCSessionDescription` を返します。この引数は `RTCSessionDescriptionInit` 辞書であり (任意の) 2 つの引数を含みます。
- {{domxref("RTCSessionDescription.toJSON()")}}
  - : このオブジェクトの {{Glossary("JSON")}} による表現を生成して返します。生成された JSON は、{{domxref("RTCSessionDescription.type", "type")}} と {{domxref("RTCSessionDescription.sdp", "sdp")}} を含みます。

## 例

```js
signalingChannel.onmessage = (evt) => {
  if (!pc) start(false);

  const message = JSON.parse(evt.data);
  if (message.sdp) {
    pc.setRemoteDescription(
      new RTCSessionDescription(message),
      () => {
        // オファーを受け取った場合、このオファーに対して応答する。
        if (pc.remoteDescription.type === "offer") {
          pc.createAnswer(localDescCreated, logError);
        }
      },
      logError,
    );
  } else {
    pc.addIceCandidate(
      new RTCIceCandidate(message.candidate),
      () => {},
      logError,
    );
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} 及び {{domxref("RTCPeerConnection.setRemoteDescription()")}}
