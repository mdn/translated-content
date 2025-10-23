---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("MediaStream Recording")}}

**MediaStream Recording API**는 때때로 Media Recording API 또는 MediaRecorder API 라고도 불리며, [Media Capture and Streams API](/ko/docs/Web/API/Media_Capture_and_Streams_API), [WebRTC API](/ko/docs/Web/API/WebRTC_API)와 밀접한 관련이 있습니다. MediaStream Recording API를 사용하면 {{domxref("MediaStream")}}이나 {{domxref("HTMLMediaElement")}} 객체가 생성한 데이터를 분석, 처리, 또는 디스크에 저장할 목적으로 캡처할 수 있습니다. 또한, 사용하기도 상당히 쉽습니다.

## 개념 및 사용 방법

MediaStream Recording API는 단일 주요 인터페이스인 {{domxref("MediaRecorder")}}로 구성되어 있으며, 이 인터페이스가 {{domxref("MediaStream")}}의 데이터를 받아 처리할 수 있도록 전달하는 모든 작업을 수행합니다. 데이터는 `MediaRecorder` 생성 시 설정한 포맷으로 미리 변환되어, {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} 이벤트를 통해 전달됩니다. 이후 필요에 따라 데이터를 추가로 처리하거나 파일로 저장할 수 있습니다.

### 녹화 과정 개요

스트림을 녹화하는 과정은 간단합니다.

1. 미디어 데이터를 소스로 사용할 {{domxref("MediaStream")}} 또는 {{domxref("HTMLMediaElement")}} ({{HTMLElement("audio")}} 또는 {{HTMLElement("video")}} 요소 형태)를 설정합니다.
2. 소스 스트림과 원하는 옵션(예: 컨테이너의 MIME 타입이나 각 트랙의 비트 전송률 등)을 지정하여 {{domxref("MediaRecorder")}} 객체를 생성합니다.
3. {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} 이벤트가 발생할 때 호출될 이벤트 핸들러로 {{domxref("MediaRecorder.dataavailable_event", "ondataavailable")}}을 설정합니다.
4. 소스 미디어가 재생 중이고 녹화를 시작할 준비가 되면, {{domxref("MediaRecorder.start()")}}를 호출하여 녹화를 시작합니다.
5. 준비된 데이터가 있을 때마다 {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} 이벤트 핸들러가 호출되며, 이벤트의 `data` 속성에는 미디어 데이터를 담은 {{domxref("Blob")}} 객체가 포함됩니다. 필요에 따라 `dataavailable` 이벤트를 강제로 발생시켜 최신 데이터를 전달받을 수 있습니다.
6. 소스 미디어의 재생이 중단되면 녹화는 자동으로 종료됩니다.
7. 언제든지 {{domxref("MediaRecorder.stop()")}}을 호출하여 녹화를 중단할 수 있습니다.

> [!NOTE]
> 녹화된 미디어의 일부를 담은 개별 {{domxref("Blob")}}들이 반드시 개별적으로 재생 가능한 것은 아닙니다. 재생 전에 미디어를 다시 조립해야 합니다.

녹화 중 문제가 발생하면 {{domxref("MediaRecorder/error_event", "error")}} 이벤트가 `MediaRecorder`에 전송됩니다. {{domxref("MediaRecorder.error_event", "onerror")}} 이벤트 핸들러를 설정하여 `error` 이벤트를 감지할 수 있습니다.

예를 들어, 여기서는 HTML Canvas를 {{domxref("MediaStream")}}의 소스로 사용하고, 9초 후에 녹화를 중단합니다.

```js
const canvas = document.querySelector("canvas");

// 선택적 초당 프레임 수
const stream = canvas.captureStream(25);
const recordedChunks = [];

console.log(stream);
const options = { mimeType: "video/webm; codecs=vp9" };
const mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // …
  }
}
function download() {
  const blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

// 데모: 9초 후에 다운로드
setTimeout((event) => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### 레코더 상태 확인 및 제어

`MediaRecorder` 객체의 속성을 이용해 녹화 과정의 상태를 확인할 수 있으며, {{domxref("MediaRecorder.pause", "pause()")}}와 {{domxref("MediaRecorder.resume", "resume()")}} 메서드로 소스 미디어의 녹화를 일시 중지하거나 재개할 수 있습니다.

특정 MIME 타입의 지원 여부를 확인하려면 {{domxref("MediaRecorder.isTypeSupported_static", "MediaRecorder.isTypeSupported()")}}를 호출하면 됩니다.

### 사용할 수 있는 입력 장치 살펴보기

카메라 및/또는 마이크 입력을 녹화하려는 경우, `MediaRecorder` 객체를 생성하기 전에 사용할 수 있는 입력 장치를 먼저 확인하는 것이 좋습니다. 이를 위해 {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}}를 호출하여 사용할 수 있는 미디어 장치 목록을 가져올 수 있습니다. 이 목록을 검토하여 잠재적인 입력 소스를 식별하거나 원하는 기준에 따라 필터링할 수 있습니다.

이 코드 스니펫에서는 `enumerateDevices()`를 사용하여 사용할 수 있는 입력 장치를 확인하고, 오디오 입력 장치를 찾은 다음, 해당 장치들을 {{HTMLElement("option")}} 요소로 만들어 입력 소스 선택기를 나타내는 {{HTMLElement("select")}} 요소에 추가합니다.

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    const menu = document.getElementById("input-devices");
    if (device.kind === "audioinput") {
      const item = document.createElement("option");
      item.textContent = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
```

이와 같은 코드를 활용하면 사용자가 선택할 장치 범위를 제한할 수 있습니다.

### 더 알아보기

MediaStream Recording API의 사용법에 대해 더 알아보려면, 오디오 클립 녹화를 위한 API 활용 방법을 보여주는 [MediaStream Recording API 사용하기](/ko/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)를 참고하세요. 두 번째 문서인 [미디어 요소 녹화하기](/ko/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)에서는 {{HTMLElement("audio")}} 또는 {{HTMLElement("video")}} 요소에서 재생 중인 미디어의 데이터를 실시간으로 추출해, 이를 녹화하거나 로컬 디스크에 저장하는 방법을 설명합니다.

## 인터페이스

- {{domxref("BlobEvent")}}
  - : 미디어 데이터의 한 청크가 녹화 완료될 때마다, `dataavailable` 타입의 {{domxref("BlobEvent")}}를 통해 {{domxref("Blob")}} 형태로 사용자에게 전달됩니다.
- {{domxref("MediaRecorder")}}
  - : MediaStream Recording API를 구현하는 주요 인터페이스입니다.
- {{domxref("MediaRecorderErrorEvent")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : MediaStream Recording API에서 발생한 오류를 나타내는 인터페이스입니다. 이 인터페이스의 {{domxref("MediaRecorderErrorEvent.error", "error")}} 속성은 발생한 오류를 명시하는 {{domxref("DOMException")}} 객체입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Media Capture and Streams API (미디어 스트림)](/ko/docs/Web/API/Media_Capture_and_Streams_API) 랜딩 페이지
- {{domxref("MediaDevices.getUserMedia()")}}
- [simpl.info MediaStream 녹화 데모](https://simpl.info/mediarecorder/), [Sam Dutton](https://github.com/samdutton) 제작
- [Chrome 및 Firefox에서 작동하는 HTML5 Media Recorder](https://blog.addpipe.com/mediarecorder-api/)
- Safari와 Edge용 [MediaRecorder 폴리필](https://github.com/ai/audio-recorder-polyfill)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): getUserMedia와 MediaStream를 이용한 HTML 비디오 캡처/재생/다운로드 ([GitHub 소스](https://github.com/chrisjohndigital/TutorRoom))
- [간단한 비디오 녹화 데모](https://codepen.io/anon/pen/gpmPzm)
- [고급 미디어 스트림 녹화 샘플](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): MediaStream Recording API를 활용한 HTML 비디오 언어 연구실 웹 애플리케이션 ([GitHub 소스](https://github.com/chrisjohndigital/OpenLang))
- [Safari Technology Preview 73에서 MediaStream Recorder API 사용 가능](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)
