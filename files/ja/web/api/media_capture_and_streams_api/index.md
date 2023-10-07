---
title: メディアキャプチャとストリーム API (メディアストリーム)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: b70c84579e286a8faf5d2da15bd2978893d448c6
---

{{DefaultAPISidebar("Media Capture and Streams")}}

**メディアキャプチャとストリーム** API (Media Capture and Streams API) は、一般的に **メディアストリーム API** (Media Stream API または MediaStream API) と呼ばれ、音声や映像のデータのストリーミングへの対応を提供する [WebRTC](/ja/docs/Web/API/WebRTC_API) に関連した API です。

これは、ストリームとその構成トラックを操作するためのインターフェイスとメソッド、データ形式に関連する制約、データを非同期に使用する際の成功とエラーのコールバック、および処理中に発行されるイベントを提供するものです。

## 基本概念

この API は、音声または映像に関連づけられたデータの流れを表現するための {{domxref("MediaStream")}} オブジェクトの操作を基本としています。例として[メディアストリームの取得](/ja/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#startup_関数)をご覧ください。

`MediaStream` は 0 個以上の {{domxref("MediaStreamTrack")}} によって構成されます。これは様々な音声や映像の**トラック**を表現します。それぞれの `MediaStreamTrack` は、1 つ以上の**チャンネル**を持ちます。このチャンネルはメディアストリームの最小の単位を表現します。例えば、ステレオの音声トラックの*左*と*右*のチャンネルのそれぞれのように、与えられたスピーカーに関連づけられた音声信号です。

`MediaStream` オブジェクトは、1 つの**入力**と 1 つの**出力**を持ちます。 `MediaStream` オブジェクトは、ローカルで呼び出される {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} によって生成され、ユーザーのカメラやマイクの 1 つを入力ソースとして持ちます。ローカルでない `MediaStream` は、 {{HTMLElement("video")}} や {{HTMLElement("audio")}} などのメディア要素や、WebRTC {{domxref("RTCPeerConnection")}} API によって取得できるネットワーク越しに生成されたストリーム、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の {{domxref("MediaStreamAudioDestinationNode")}} によって作成されたストリームとして表現されます。

`MediaStream` オブジェクトの出力は**コンシューマー** (consumer) に接続されます。出力として {{HTMLElement("audio")}} や {{HTMLElement("video")}} などのメディア要素、 WebRTC {{domxref("RTCPeerConnection")}} API、[ウェブオーディオ API](/ja/docs/Web_Audio_API) の {{domxref("MediaStreamAudioSourceNode")}}が使用できます。

## インターフェイス

これらのリファレンス記事では、メディアキャプチャとストリーム API を構成する各インターフェイスについて知っておく必要がある基本的な情報を見つけられます。

- {{domxref("CanvasCaptureMediaStreamTrack")}}
- {{domxref("InputDeviceInfo")}}
- {{domxref("MediaDeviceKind")}}
- {{domxref("MediaDeviceInfo")}}
- {{domxref("MediaDevices")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaTrackCapabilities")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackSettings")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("NavigatorUserMedia")}}
- {{domxref("NavigatorUserMediaError")}}
- {{domxref("OverconstrainedError")}}
- {{domxref("URL")}}

## イベント

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
- {{domxref("MediaStreamTrack/ended_event", "ended")}}
- {{domxref("MediaStreamTrack/mute_event", "mute")}}
- {{domxref("MediaStreamTrack.overconstrained_event", "overconstrained")}}
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
- {{domxref("MediaStreamTrack/unmute_event", "unmute")}}

## ガイドとチュートリアル

[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)の記事では、**制約**と**能力**、メディア設定の概念について説明しています。また、[制約エクササイザ―](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#例_制約エクササイザ―)を記載しており、コンピューターの A/V 入力機器（ウェブカメラやマイクなど）からの音声と映像のトラックに対して異なる制約集合を適用した結果を試してみることができます。

[getUserMedia() による写真の撮影](/ja/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) の記事では、[`getUserMedia()`](/ja/docs/Web/API/MediaDevices/getUserMedia) を使用して、 `getUserMedia()` に対応しているコンピューターや携帯電話のカメラにアクセスし、それで写真を撮る方法を示しています。

## ブラウザー互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API) - API の入門ページ
- {{domxref("mediaDevices.getUserMedia()")}}
- [WebRTC による写真の撮影](/ja/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): `getUserMedia()` を用いたデモとチュートリアル
