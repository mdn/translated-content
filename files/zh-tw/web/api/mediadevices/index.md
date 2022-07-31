---
title: MediaDevices
slug: Web/API/MediaDevices
tags:
  - API
  - Audio
  - Conference
  - Devices
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Reference
  - Screen Capture
  - Screen Capture API
  - Sharing
  - Video
  - WebRTC
browser-compat: api.MediaDevices
---

{{APIRef("Media Capture and Streams")}}

<code>MediaDevices</code>介面可以存取連接的媒體輸入設備，像是相機、麥克風，以及螢幕分享。它可以存取任何硬體資源的媒體數據。

{{InheritanceDiagram}}

## 屬性

_繼承父類{{domxref("EventTarget")}}的屬性。_

## 方法

_繼承父類{{domxref("EventTarget")}}的方法。_

- {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}
  - : 取得一系列關於系統中可用的媒體輸入和媒體輸出設備的資訊。
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : 返回一個符合{{domxref("MediaTrackSupportedConstraints")}}的物件，該物件標示出{{domxref("MediaStreamTrack")}}介面支援哪些可約束的屬性。請參考{{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API", "Capabilities and constraints")}}瞭解更多關於`constraints`的資訊。
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : 出現提示視窗讓使用者選擇要捕捉整個螢幕或是部分(例如一個視窗)的畫面做為{{domxref("MediaStream")}}，用於分享或錄製。返回值為一個解析為`MediaStream` 的 promise。
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : 透過提示視窗獲得使用者的許可後，打開系統上的相機和/或麥克風麥克風，並返回一包含視訊輸入軌道和/或音訊輸入軌道的{{domxref("MediaStream")}}。
- {{domxref("MediaDevices.selectAudioOutput", "selectAudioOutput()")}}
  - : 出現提示視窗讓使用者選擇特定的音訊輸出設備。

## 事件

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : 在媒體輸入或媒體輸出設備連接上使用者的系統裝置，或是從使用者的系統裝置移除時觸發。

## 範例

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

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 參見

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API): The API this interface is part of.
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API): The API defining the {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} method.
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Returns a reference to a `MediaDevices` object that can be used to access devices.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML5 video capture and playback using `MediaDevices` and the MediaStream Recording API ([source on GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 video language lab web application using `MediaDevices` and the MediaStream Recording API for video recording ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))
