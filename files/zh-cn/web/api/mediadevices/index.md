---
title: MediaDevices
slug: Web/API/MediaDevices
---

{{APIRef("Media Capture and Streams")}}

**`MediaDevices`** 接口提供访问连接媒体输入的设备，如照相机和麦克风，以及屏幕共享等。它可以使你取得任何硬件资源的媒体数据。

## 属性

_从父类{{domxref("EventTarget")}}中继承的属性。_

## 事件

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : 当媒体输入或输出设备连接到用户计算机或从用户计算机移除时触发。

## 方法

_从其父项继承方法 {{domxref("EventTarget")}}。_

- {{ domxref("MediaDevices.enumerateDevices()") }}
  - : 获取有关系统中可用的媒体输入和输出设备的一系列信息。
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : 返回一个符合 {{domxref("MediaTrackSupportedConstraints")}} 的对象。该对象指明了 {{domxref("MediaStreamTrack")}} 接口支持的可约束的属性。查看 [Media Streams API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Constraints) 以了解更多相关信息。
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : 提示用户选择显示器或显示器的一部分（例如窗口）以捕获为{{domxref("MediaStream")}} 以便共享或记录。返回解析为 MediaStream 的 Promise。
- {{ domxref("MediaDevices.getUserMedia()") }}
  - : 在用户通过提示允许的情况下，打开系统上的相机或屏幕共享和/或麦克风，并提供 {{domxref("MediaStream")}} 包含视频轨道和/或音频轨道的输入。

## 示例

```js
"use strict";

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector("video");
var constraints = (window.constraints = {
  audio: false,
  video: true,
});
var errorElement = document.querySelector("#errorMsg");

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    var videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log("Using video device: " + videoTracks[0].label);
    stream.onended = function () {
      console.log("Stream ended");
    };
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
  })
  .catch(function (error) {
    if (error.name === "ConstraintNotSatisfiedError") {
      errorMsg(
        "The resolution " +
          constraints.video.width.exact +
          "x" +
          constraints.video.width.exact +
          " px is not supported by your device.",
      );
    } else if (error.name === "PermissionDeniedError") {
      errorMsg(
        "Permissions have not been granted to use your camera and " +
          "microphone, you need to allow the page access to your devices in " +
          "order for the demo to work.",
      );
    }
    errorMsg("getUserMedia error: " + error.name, error);
  });

function errorMsg(msg, error) {
  errorElement.innerHTML += "<p>" + msg + "</p>";
  if (typeof error !== "undefined") {
    console.error(error);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Media Capture and Streams API](/zh-CN/docs/Web/API/Media_Streams_API): The API this interface is part of.
- [Screen Capture API](/zh-CN/docs/Web/API/Screen_Capture_API): The API defining the {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} method.
- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Returns a reference to a `MediaDevices` object that can be used to access devices.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML5 video capture and playback using `MediaDevices` and the MediaStream Recording API ([source on GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 video language lab web application using `MediaDevices` and the MediaStream Recording API for video recording ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))
