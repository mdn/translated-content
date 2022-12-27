---
title: MediaStreamConstraints
slug: conflicting/Web/API/MediaDevices/getUserMedia
original_slug: Web/API/MediaStreamConstraints
---

{{APIRef("Media Capture and Streams")}}**`MediaStreamConstraints`**のオブジェクトは、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}を呼び出した時に返される{{domxref("MediaStream")}}に含まれるトラックの種類が何であるかを知るため、また、これらのトラック設定の制約を確立するために使用されます。制約がどのようにして動作するのかについての詳細は、[Capabilities, constraints, and settings](/ja/docs/Web/API/Media_Streams_API/Constraints) (英語)をお読みください。

## プロパティ

以下のプロパティの組み合わせ(全ては必要ありません)がこのオブジェクトに存在するのでしょう。

### トラック制約

- {{domxref("MediaStreamConstraints.video", "video")}}
  - : ビデオトラックを必須とするかどうかを示す Boolean の値または、返される{{domxref("MediaStream")}}に含まれるビデオトラックの制約を示すための{{domxref("MediaTrackConstraints")}}オブジェクトのどちらかです。制約が与えられている場合は、ビデオトラックは要求されることになります。
- {{domxref("MediaStreamConstraints.audio", "audio")}}
  - : オーディオトラックを必須とするかどうかを示す Boolean の値または、返される{{domxref("MediaStream")}}に含まれるオーディオトラックの制約を示すための{{domxref("MediaTrackConstraints")}}オブジェクトのどちらかです。制約が与えられている場合は、オーディオトラックは要求されることになります。

### セキュリティ

- {{domxref("MediaStreamConstraints.peerIdentity", "peerIdentity")}}
  - : {{domxref("DOMString")}}は、ストリームへアクセスしているピアを識別します。このプロパティが指定されている場合は、特定のピアだけがこのストリームを受信して使用することができます。この方法で隔離されたストリームは、メディア要素(({{HTMLElement("audio")}}または{{HTMLElement("video")}}))でのみ再生可能です。{{Glossary("CORS")}}クロスオリジン規則の影響下にある場合、このコンテンツはその規則の下に保護されます。

## ブラウザ互換性

{{Compat("api.MediaStreamConstraints")}}

## 関連項目

- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
