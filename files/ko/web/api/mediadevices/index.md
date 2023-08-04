---
title: MediaDevices
slug: Web/API/MediaDevices
---

{{APIRef("Media Capture and Streams")}}

**`MediaDevices`** 인터페이스는 카메라, 마이크, 공유 화면 등 현재 연결된 미디어 입력 장치로의 접근 방법을 제공하는 인터페이스입니다. 다르게 말하자면, 미디어 데이터를 제공하는 모든 하드웨어로 접근할 수 있는 방법입니다.

## 속성

부모 인터페이스인 {{domxref("EventTarget")}}의 속성을 상속합니다.

## 이벤트

- [`devicechange`](/ko/docs/Web/API/MediaDevices/devicechange_event)
  - : 사용자 컴퓨터에 미디어 입출력 장치가 추가되거나 제거됐을 때 발생합니다.
    [`ondevicechange`](/ko/docs/Web/API/MediaDevices/ondevicechange) 속성으로도 사용할 수 있습니다.

## 메서드

부모 인터페이스인 {{domxref("EventTarget")}}의 메서드를 상속합니다.

<dl><dt>{{ domxref("MediaDevices.enumerateDevices", "enumerateDevices()") }}</dt><dd>시스템에서 사용 가능한 미디어 입출력 장치의 정보를 담은 배열을 가져옵니다.</dd><dt>{{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}</dt><dd>{{domxref("MediaStreamTrack")}} 인터페이스가 지원하는 제약을 나타내는 {{domxref("MediaTrackSupportedConstraints")}} 호환 객체를 반환합니다.</dd><dd class="hidden">See [Capabilities and constraints](/ko/docs/Web/API/Media_Streams_API#capabilities_and_constraints) to learn more about constraints and how to use them.</dd><dt>{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}</dt><dd>{{domxref("MediaStream")}}으로 캡처해 공유나 녹화 용도로 사용할 화면 혹은 화면의 일부(창)를 선택하도록 사용자에게 요청합니다. <code>MediaStream</code>으로 이행하는 {{jsxref("Promise")}}를 반환합니다.</dd><dt>{{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}</dt><dd>사용자에게 권한을 요청한 후, 시스템의 카메라와 오디오 각각 혹은 모두 활성화하여, 장치의 입력 데이터를 비디오/오디오 트랙으로 포함한 {{domxref("MediaStream")}}을 반환합니다.</dd></dl>

## 예제

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
    stream.onremovetrack = function () {
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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 인터페이스가 속한 [Media Capture and Streams API](/ko/docs/Web/API/Media_Streams_API)
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} 메서드를 정의하는 [Screen Capture API](/ko/docs/Web/API/Screen_Capture_API)
- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
- 장치에 접근할 때 사용할 `MediaDevices` 객체의 참조를 반환하는 {{domxref("Navigator.mediaDevices")}}
