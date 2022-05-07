---
title: MediaDevices
slug: Web/API/MediaDevices
tags:
  - API
  - Audio
  - Conference
  - Devices
  - インターフェイス
  - メディア
  - メディアキャプチャとストリーム API
  - メディアストリーム API
  - MediaDevices
  - リファレンス
  - 画面キャプチャ
  - 画面キャプチャ API
  - Sharing
  - Video
  - WebRTC
browser-compat: api.MediaDevices
translation_of: Web/API/MediaDevices
---
{{APIRef("Media Capture and Streams")}}

**`MediaDevices`** インターフェイスは、カメラやマイク、さらに画面共有などの接続されたメディア入力機器へのアクセスを提供します。要するに、メディアデータのソースであるハードウェアにアクセスすることができるようになります。

{{InheritanceDiagram}}

## プロパティ

_親インターフェイスである {{domxref("EventTarget")}} のプロパティを継承しています。_

## メソッド

_親インターフェイスである {{domxref("EventTarget")}} のメソッドを継承しています。_

- {{ domxref("MediaDevices.enumerateDevices", "enumerateDevices()") }}
  - : システム上で使用できる入出力メディア機器についての情報を持つ配列を取得します。
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : {{domxref("MediaTrackSupportedConstraints")}} に適合するオブジェクトを返します。このオブジェクトは {{domxref("MediaStreamTrack")}} インターフェイスで対応している制約可能なプロパティを表します。制約に関する詳細や使い方については、 {{SectionOnPage("/ja/docs/Web/API/Media_Streams_API", "Capabilities and constraints")}}を参照してください。
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : 共有または録画の目的で {{domxref("MediaStream")}} としてキャプチャする、画面または画面の一部 (ウィンドウなど) をユーザーに選択させます。 `MediaStream` で解決する Promise を返します。
- {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}
  - : ユーザーの許可に基づいて、システム上のカメラや画面共有機能、マイクを起動して、入力と共にビデオトラックやオーディオトラックを含む {{domxref("MediaStream")}} を提供します。

## イベント

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : メディアの入力または出力機器がユーザーのコンピューターに接続されたり取り外されたりしたときに発生します。

## 例

```js
'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var constraints = window.constraints = {
  audio: false,
  video: true
};
var errorElement = document.querySelector('#errorMsg');

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  var videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.onremovetrack = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
})
.catch(function(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
        constraints.video.height.exact + ' px is not supported by your device.');
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg('getUserMedia error: ' + error.name, error);
});

function errorMsg(msg, error) {
  errorElement.innerHTML += '<p>' + msg + '</p>';
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Media Capture and Streams API](/ja/docs/Web/API/Media_Streams_API): このインターフェイスが所属する API。
- [Screen Capture API](/ja/docs/Web/API/Screen_Capture_API): {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} メソッドを定義している API。
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: 機器にアクセスするために使用することができる `MediaDevices` への参照を返します。
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML5 による動画キャプチャおよび再生で、 `MediaDevices` および MediaStream Recording API を使用しています ([GitHub 上のソース](https://github.com/chrisjohndigital/CameraCaptureJS))
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 による動画言語研究ウェブアプリケーションで、 `MediaDevices` および MediaStream Recording API を録画に使用しています ([GitHub 上のソース](https://github.com/chrisjohndigital/OpenLang))。
