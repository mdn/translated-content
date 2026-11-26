---
title: "MediaTrackConstraints: deviceId プロパティ"
short-title: deviceId
slug: Web/API/MediaTrackConstraints/deviceId
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`deviceId`** プロパティは、要求または必須の制約を記述する [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、制約可能プロパティ [`deviceId`](/ja/docs/Web/API/MediaStreamTrack/getSettings#deviceid) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`deviceId`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#deviceid) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

{{Glossary("RTP")}} にはこの情報が含まれていないため、[WebRTC](/ja/docs/Web/API/WebRTC_API) の {{domxref("RTCPeerConnection")}} に関連付けられているトラックには、このプロパティは含まれません。

## 値

[`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) に基づくオブジェクトで、受け入れ可能な値、理想的な値、または必須の値 (`exact`)、あるいはそれらの組み合わせとして、機器 ID を 1 つ以上指定します。
これらの ID は、メディアコンテンツのソースとして受け入れ可能なものです。

機器 ID はオリジンごとに一意で、同じオリジンではブラウジングセッションをまたいでも同じ値になることが保証されています。
ただし、`deviceId` の値はトラックのコンテンツのソースによって決まり、仕様書では特定の形式が必須とされていません（何らかの GUID が推奨されています）。
つまり、特定のトラックが返す `deviceId` の値は 1 つだけです。
これは、{{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}} を呼び出したときに返されます。

このため、{{domxref("MediaStreamTrack.applyConstraints()")}} の呼び出しで `deviceId` を使用しても意味がありません。
指定できる値は 1 つだけだからです。
ただし、`deviceId` を記録しておけば、同じソースを取得するために、複数回の {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} の呼び出しでそれを使用できます。

> [!NOTE]
> 機器 ID がブラウジングセッションをまたいでも同じになるという規則には、例外があります。
> プライベートブラウジングモードでは異なる ID が使用され、セッションごとにその ID が変わります。

## 例

[制約エクササイザー](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#例_制約エクササイザー)の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack")}}
