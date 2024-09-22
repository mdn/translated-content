---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: b2875dbaa70efb5850084b9802803b439db325f5
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

**`MediaDevices`** は{{domxref("Media Capture and Streams API", "メディアキャプチャとストリーム API", "", "nocode")}} のインターフェイスで、カメラやマイク、さらに画面共有などの接続されたメディア入力機器へのアクセスを提供します。要するに、メディアデータのソースであるハードウェアにアクセスすることができるようになります。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("EventTarget")}} のプロパティを継承しています。_

## インスタンスメソッド

_親インターフェイスである {{domxref("EventTarget")}} のメソッドを継承しています。_

- {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}
  - : システム上で使用できる入出力メディア機器についての情報を持つ配列を取得します。
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : {{domxref("MediaTrackSupportedConstraints")}} に適合するオブジェクトを返します。このオブジェクトは {{domxref("MediaStreamTrack")}} インターフェイスで対応している制約可能なプロパティを表します。制約に関する詳細や使い方については、[メディアストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints) を参照してください。
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : 共有または録画の目的で {{domxref("MediaStream")}} としてキャプチャする、画面または画面の一部 (ウィンドウなど) をユーザーに選択させます。 `MediaStream` で解決する Promise を返します。
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : ユーザーの許可に基づいて、システム上のカメラや画面共有機能、マイクを起動して、入力と共に映像トラックや音声トラックを含む {{domxref("MediaStream")}} を提供します。
- {{domxref("MediaDevices.selectAudioOutput", "selectAudioOutput()") }} {{Experimental_Inline}}
  - : ユーザーに対して、固有の音声出力機器を選択するよう尋ねます。

## イベント

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : メディアの入力または出力機器がユーザーのコンピューターに接続されたり取り外されたりしたときに発生します。

## 例

```js
// Put variables in global scope to make them available to the browser console.
const video = document.querySelector("video");
const constraints = {
  audio: false,
  video: true,
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    const videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    stream.onremovetrack = () => {
      console.log("Stream ended");
    };
    video.srcObject = stream;
  })
  .catch((error) => {
    if (error.name === "OverconstrainedError") {
      console.error(
        `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`,
      );
    } else if (error.name === "NotAllowedError") {
      console.error(
        "You need to grant this page permission to access your camera and microphone.",
      );
    } else {
      console.error(`getUserMedia error: ${error.name}`, error);
    }
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API): このインターフェイスが所属する API。
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API): {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} メソッドを定義している API。
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: 機器にアクセスするために使用することができる `MediaDevices` への参照を返します。
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML5 による動画キャプチャおよび再生で、 `MediaDevices` および MediaStream 収録 API を使用しています。
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML による動画言語研究ウェブアプリケーションで、 `MediaDevices` および MediaStream 収録 API を録画に使用しています。
