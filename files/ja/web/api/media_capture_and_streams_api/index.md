---
title: Media Capture and Streams API (Media Streams)
slug: Web/API/Media_Capture_and_Streams_API
original_slug: Web/API/Media_Streams_API
---

{{DefaultAPISidebar("Media Capture and Streams")}}

**Media Capture and Streams** API は一般的に*Media Stream API*や*Stream API*と呼ばれる[WebRTC](/ja/docs/WebRTC)に関連した API です。この API では、オーディオやビデオデータのストリーム、これらを操作するためのメソッド、データタイプに関連づけられた制約、データを非同期に利用する際の成功と失敗のコールバック、これらの処理を行なっている最中に発生するイベントなどをサポートします。

## 基本概念

この API は、オーディオまたはビデオに関連づけられたデータの流れを表現するための{{domxref("MediaStream")}}オブジェクトの操作を基本としています。例として[Get the video](/ja/docs/WebRTC/taking_webcam_photos#Get_the_video)(英語)をご覧ください。

`MediaStream`は 0 個以上の{{domxref("MediaStreamTrack")}}によって構成されます。`MediaStreamTrack`は様々なオーディオやビデオの**トラック**を表現します。それぞれの`MediaStreamTrack`は、1 つ以上の**チャンネル**を持ちます。このチャンネルはメディアストリームの最小の単位を表現します。例えば、ステレオのオーディオトラックの*left*と*right*のチャンネルのそれぞれのように、与えられたスピーカーに関連づけられたオーディオ信号です。

`MediaStream`オブジェクトは、1 つの**入力**と 1 つの**出力**を持ちます。`MediaStream`オブジェクトは、ローカルで呼び出される{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}によって生成され、ユーザーのカメラやマイクの 1 つを入力ソースとして持ちます。ローカルでない`MediaStream`は、{{HTMLElement("video")}}や{{HTMLElement("audio")}}などのメディア要素や、WebRTC {{domxref("RTCPeerConnection")}} API によって取得できるネットワーク越しに生成されたストリーム、[Web Audio API](/ja/docs/Web_Audio_API) {{domxref("MediaStreamAudioSourceNode")}}によって作成されたストリームとして表現されます。`MediaStream`オブジェクトの出力は**コンシューマ**(consumer)に接続されます。出力として{{HTMLElement("audio")}}や{{HTMLElement("video")}}などのメディア要素、WebRTC {{domxref("RTCPeerConnection")}} API、[Web Audio API](/ja/docs/Web_Audio_API) {{domxref("MediaStreamAudioDestinationNode")}}が使用できます。

## リファレンス

- {{event("addtrack")}} (event)
- {{domxref("AudioStreamTrack")}}
- {{domxref("BlobEvent")}}
- {{event("ended")}} (event)
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamConstraints")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaTrackCapabilities")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackSettings")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{event("muted")}} (event)
- {{domxref("NavigatorUserMedia")}}
- {{domxref("NavigatorUserMediaError")}}
- {{event("overconstrained")}} (event)
- {{event("removetrack")}} (event)
- {{event("started")}} (event)
- {{event("unmuted")}} (event)
- {{domxref("URL")}}
- {{domxref("VideoStreamTrack")}}

## ガイドとチュートリアル

{{LandingPageListSubpages}}

## ブラウザ互換性

{{Compat("api.MediaStream")}}

## 関連項目

- [WebRTC](/ja/docs/WebRTC) - API の入門ページ
- {{domxref("mediaDevices.getUserMedia()")}}
- [Taking webcam photos](/ja/docs/WebRTC/taking_webcam_photos): `getUserMedia()`を用いたデモとチュートリアル
