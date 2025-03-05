---
title: HTMLMediaElement.srcObject
slug: Web/API/HTMLMediaElement/srcObject
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 인터페이스의 **`srcObject`** 속성은
{{domxref("HTMLMediaElement")}}와 관련된 미디어 소스 역할을 하는 객체를
설정하거나 반환합니다.

srcObject 객체는 {{domxref("MediaStream")}}, a {{domxref("MediaSource")}}, a
{{domxref("Blob")}} 또는 {{domxref("File")}}(`Blob`을 상속)일 수 있습니다.

> [!NOTE]
> 2020년 3월 현재 Safari만이 `srcObject`를 완벽하게 지원합니다. 즉, `MediaSource`, `MediaStream`, `Blob`, 그리고 `File` 객체를 값으로 사용합니다. 다른 브라우저는 `MediaStream` 객체를 지원합니다. 다른 브라우저들이 지원할 때까지 {{domxref("URL.createObjectURL()")}}을 사용하여 URL을 생성하고 이를 {{domxref("HTMLMediaElement.src")}}에 할당하는 것을 고려하세요(예제는 아래에 있습니다). 또한 버전 108부터 Chromium은 해당 객체의 {{domxref("MediaSourceHandle")}} 인스턴스(워커에서 전송됨)를 `srcObject`에 할당하여 전용 워커 `MediaSource` 객체 연결을 지원합니다.

## 값

{{domxref('MediaStream')}}, {{domxref('MediaSource')}}, {{domxref('Blob')}} 또는
{{domxref('File')}} 객체(실제로 지원되는 내용은 호환성 표를 참고하세요).

## 사용 일람

이전 버전의 미디어 소스 명세는 {{domxref("URL.createObjectURL", "createObjectURL()")}}을
사용하여 객체 URL을 만든 다음 {{domxref("HTMLMediaElement.src", "src")}}를 해당 URL로
설정합니다. 이제 `srcObject`를 {{domxref("MediaStream")}}으로 직접 설정할 수 있습니다.

## 예제

### 기본 예제

이 예제에서 {{domxref("MediaStream")}}은 새로 생성된 {{HTMLElement("video")}} 요소에
할당됩니다.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
video.srcObject = mediaStream;
```

이 예제에서 {{domxref('MediaSource')}}는 새로 생성된 {{HTMLElement("video")}} 요소에
할당됩니다.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
video.srcObject = mediaSource;
```

### src 속성에 대한 폴백 지원

아래 예제는 `srcObject`가 지원되지 않는 경우 객체 URL을 만들고 이를 `src`에
할당해야 하는 이전 브라우저 버전을 지원합니다.

먼저 카메라의 {{domxref("MediaStream")}}이 새로 생성된 {{HTMLElement("video")}}
요소에 할당되고 이전 브라우저에 대한 폴백이 있습니다.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
if ("srcObject" in video) {
  video.srcObject = mediaStream;
} else {
  // 사라질 예정이므로 새 브라우저에서는 사용하지 마세요.
  video.src = URL.createObjectURL(mediaStream);
}
```

둘째, 새로운 {{domxref('MediaSource')}}가 새로 생성된 {{HTMLElement("video")}}
요소에 할당되며 이전 브라우저 및 아직 {{domxref('MediaSource')}}의 직접 할당을
지원하지 않는 브라우저에 대한 폴백이 있습니다.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
// 이전 브라우저는 srcObject가 없을수 있습니다.
if ("srcObject" in video) {
  try {
    video.srcObject = mediaSource;
  } catch (err) {
    if (err.name !== "TypeError") {
      throw err;
    }
    // 만약 srcObject가 있더라도 MediaStream만 지원하는 경우가 있을 수 있습니다.
    video.src = URL.createObjectURL(mediaSource);
  }
} else {
  video.src = URL.createObjectURL(mediaSource);
}
```

### 워커에서 `MediaSource`를 구성하고 재생을 위해 메인 스레드(main thread)에 전달하기

{{domxref("MediaSource.handle")}} 속성은 전용 워커 내에서 액세스 할 수 있으며 결과 값 {{domxref("MediaSourceHandle")}} 객체는 {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} 호출을 통해 워커를 생성한 스레드(이 경우 메인 스레드)로 전송됩니다.

```js
// 내부 전용 워커
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// 워커를 만든 컨텍스트로 핸들을 전송합니다
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // SourceBuffers를 생성하고 가져온(fetched) 미디어로 채우기 전에
  // MediaSource에서 sourceopen을 기다리세요(await). MediaSource는
  // HTMLMediaElement에 연결되고 readyState가 "open"이 될 때까지
  // SourceBuffers 생성을 수락하지 않습니다.
});
```

메인 스레드에서 {{domxref("Worker.message_event", "message")}} 이벤트 핸들러를 통해 핸들을 수신하고 {{domxref("HTMLMediaElement.srcObject")}} 속성을 통해 {{htmlelement("video")}}에 첨부하고 비디오를 {{domxref("HTMLMediaElement.play()", "play")}}합니다.

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> **참고:** {{domxref("MediaSourceHandle")}}는 공유 워커 또는 서비스 워커를 통해 성공적으로 전송할 수 없습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
