---
title: 미디어 요소 녹화하기
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
l10n:
  sourceCommit: ed19ad8c789e0d621841033aecd535c5474d1ea5
---

{{DefaultAPISidebar("MediaStream Recording")}}

MediaStream Recording API 사용하기 문서에서는 하드웨어 장치로 생성된 {{domxref("MediaStream")}}(즉, {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}로 반환된 스트림)을 캡처하기 위해 {{domxref("MediaRecorder")}} 인터페이스를 사용하는 방법을 다룹니다. 한편, 녹화할 `MediaStream`의 소스로 HTML 미디어 요소(예: {{HTMLElement("audio")}} 또는 {{HTMLElement("video")}})를 사용할 수도 있습니다. 이 문서에서는 그런 예제를 살펴봅니다.

## 미디어 요소 녹화 예제

### HTML

```html hidden
<p>
  Click the "Start Recording" button to begin video recording for a few seconds.
  You can stop recording by clicking the "Stop Recording" button. The "Download"
  button will download the received data (although it's in a raw, unwrapped form
  that isn't very useful).
</p>
<br />
```

먼저 HTML의 주요 부분을 살펴보겠습니다. 이 외에도 약간의 코드가 더 있지만, 이는 앱의 핵심 동작과는 관계없는 정보 제공 용도에 불과합니다.

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

두 개의 열로 구성된 메인 인터페이스를 보여줍니다. 왼쪽에는 시작 버튼과 {{HTMLElement("video")}} 요소가 배치되어 있는데, 이 요소는 사용자 카메라에서 촬영하는 영상을 미리 보여줍니다. 스트림이 카메라에서 도착하는 즉시 영상이 표시되도록 [`autoplay`](/ko/docs/Web/HTML/Reference/Elements/video#autoplay) 속성을 사용하며, [`muted`](/ko/docs/Web/HTML/Reference/Elements/video#muted) 속성을 지정해 사용자의 마이크 소리가 스피커로 출력되어 피드백 루프가 발생하지 않도록 합니다.

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button">Download</a>
</div>
```

오른쪽에는 중지 버튼과 녹화된 영상을 재생할 `<video>` 요소가 있습니다. 재생 패널에는 autoplay 속성이 없어서 미디어가 도착하자마자 자동 재생되지 않으며, [`controls`](/ko/docs/Web/HTML/Reference/Elements/video#controls) 속성이 지정되어 있어 사용자가 재생, 일시 정지 등 다양한 조작을 할 수 있습니다.

재생 요소 아래에는 녹화된 비디오를 다운로드할 수 있는 버튼이 있습니다.

```html hidden
<div class="bottom">
  <pre id="log"></pre>
</div>
```

```css hidden
body {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

video {
  margin-top: 2px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  display: block;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  text-decoration: none;
}

h2 {
  margin-bottom: 4px;
}

.left {
  margin-right: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.right {
  margin-left: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.bottom {
  clear: both;
  padding-top: 10px;
}
```

이제 자바스크립트 코드를 살펴보겠습니다. 결국 여기서 대부분의 동작이 이루어지니까요!

### 전역 변수 설정

필요한 몇 가지 전역 변수를 먼저 선언합니다.

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

대부분은 작업할 요소들을 참조하는 변수들입니다. 마지막 변수인 `recordingTimeMS`는 5000밀리초(5초)로 설정되어 있는데, 이는 녹화할 비디오의 길이를 지정합니다.

### 유틸리티 함수

다음으로, 이후에 사용할 몇 가지 유틸리티 함수를 생성합니다.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

`log()` 함수는 텍스트 문자열을 {{HTMLElement("div")}}에 출력하여 사용자에게 정보를 전달하는 데 사용됩니다. 깔끔하진 않지만, 우리 목적에는 충분히 효과적입니다.

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

`wait()` 함수는 지정한 밀리초가 경과한 후 이행되는 새 {{jsxref("Promise")}}를 반환합니다. 이 함수는 [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 사용해 {{domxref("Window.setTimeout", "setTimeout()")}}을 호출하고, 프로미스가 성공적으로 완료될 때 호출되는 이행 콜백 함수를 타임아웃 핸들러로 지정합니다. 이를 통해 타임아웃을 사용할 때도 프로미스 문법을 활용할 수 있어, 이후 프로미스 체이닝을 할 때 매우 유용합니다.

### 미디어 녹화 시작

`startRecording()` 함수는 녹화 과정을 시작하는 역할을 합니다.

```js
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.start();
  log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = (event) => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(() => {
    if (recorder.state === "recording") {
      recorder.stop();
    }
  });

  return Promise.all([stopped, recorded]).then(() => data);
}
```

`startRecording()` 함수는 두 개의 입력 매개변수를 받습니다. 녹음할 {{domxref("MediaStream")}}과 밀리초 단위의 녹음할 시간입니다. 항상 지정된 시간 내에서만 미디어를 녹음하며, 만약 그 시간보다 먼저 미디어가 중단되면 {{domxref("MediaRecorder")}}가 자동으로 녹음을 멈춥니다.

- 먼저 입력된 `stream`의 녹화를 처리할 `MediaRecorder`를 생성합니다.
- `data`는 초기에 빈 배열이며, {{domxref("MediaRecorder.dataavailable_event", "ondataavailable")}} 이벤트 핸들러에 의해 제공된 미디어 데이터의 {{domxref("Blob")}}들을 저장합니다.
- `ondataavailable` 할당은 {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} 이벤트의 핸들러를 설정합니다. 수신된 이벤트의 `data` 속성은 미디어 데이터를 담고 있는 {{domxref("Blob")}}이며, 이 핸들러는 해당 `Blob`을 `data` 배열에 추가합니다.
- {{domxref("MediaRecorder.start", "recorder.start()")}}를 호출하여 녹화를 시작하고, 레코더의 현재 상태와 녹화할 시간(초 단위)을 로그에 출력합니다.
- `stopped`라는 새로운 {{jsxref("Promise")}}를 생성하는데, 이는 `MediaRecorder`의 {{domxref("MediaRecorder.stop_event", "onstop")}} 이벤트 핸들러가 호출되면 이행되고, {{domxref("MediaRecorder.error_event", "onerror")}} 이벤트 핸들러가 호출되면 거부됩니다. 거부 핸들러는 발생한 오류의 이름을 입력값으로 받습니다.
- 또 다른 `Promise`인 `recorded`를 생성하는데, 이 프로미스는 지정된 밀리초가 경과하면 이행되며, 이행 시 녹화중인 경우 `MediaRecorder`를 정지합니다.
- 마지막으로, {{jsxref("Promise.all")}}을 사용하여 두 개의 `Promise`(`stopped`와 `recorded`)가 모두 이행되면 이행되는 새로운 프로미스를 생성합니다. 이 프로미스가 이행되면, 배열 형태의 데이터가 `startRecording()` 함수의 호출자에게 반환됩니다.

### 입력 스트림 중지

`stop()` 함수는 입력 미디어의 재생을 중지시킵니다.

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

이는 {{domxref("MediaStream.getTracks()")}}를 호출한 뒤, {{jsxref("Array.forEach", "forEach()")}}를 사용해 스트림의 각 트랙에 대해 {{domxref("MediaStreamTrack.stop()")}}을 호출함으로써 작동합니다.

### 입력 스트림 가져오기 및 레코더 설정

이제 이 예제에서 가장 복잡한 부분인, 시작 버튼 클릭에 대한 이벤트 핸들러 코드를 살펴보겠습니다.

```js
startButton.addEventListener(
  "click",
  () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        preview.srcObject = stream;
        downloadButton.href = stream;
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream;
        return new Promise((resolve) => (preview.onplaying = resolve));
      })
      .then(() => startRecording(preview.captureStream(), recordingTimeMS))
      .then((recordedChunks) => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        recording.src = URL.createObjectURL(recordedBlob);
        downloadButton.href = recording.src;
        downloadButton.download = "RecordedVideo.webm";

        log(
          `Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`,
        );
      })
      .catch((error) => {
        if (error.name === "NotFoundError") {
          log("Camera or microphone not found. Can't record.");
        } else {
          log(error);
        }
      });
  },
  false,
);
```

{{domxref("Element/click_event", "click")}} 이벤트가 발생하면, 다음과 같이 진행됩니다.

- {{domxref("MediaDevices.getUserMedia")}}를 호출하여 비디오와 오디오 트랙이 모두 포함된 새로운 {{domxref("MediaStream")}}을 요청합니다. 이것이 우리가 녹화할 스트림입니다.
- `getUserMedia()`가 반환한 프로미스가 이행되면 {{HTMLElement("video")}} 요소의 {{domxref("HTMLMediaElement.srcObject","srcObject")}} 속성이 입력 스트림으로 설정되어, 사용자의 카메라에서 캡처되는 영상이 미리보기 상자에 표시됩니다. `<video>` 요소가 음소거되어 있으므로 오디오는 재생되지 않습니다. 이후 "Download" 버튼의 링크도 해당 스트림을 참조하도록 설정됩니다. 그리고 Firefox에서는 {{domxref("HTMLMediaElement.captureStream()")}} 메서드에 접두어가 붙어 있기 때문에, `preview.captureStream()`이 `preview.mozCaptureStream()`을 호출하도록 조정합니다. 마지막으로, 미리보기 오디오가 재생되기 시작하면 이행되는 새로운 {{jsxref("Promise")}}가 생성되어 반환됩니다.
- 미리보기 비디오가 재생되기 시작하면, 녹화할 미디어가 준비되었음을 알 수 있으므로, 앞서 생성한 [`startRecording()`](#미디어_녹화_시작) 함수를 호출합니다. 이때 미리보기 비디오 스트림(녹화할 소스 미디어)과 녹화할 시간(밀리초 단위)을 나타내는 `recordingTimeMS`를 인자로 전달합니다. 앞서 언급한 대로, `startRecording()` 함수는 녹화가 완료되면 녹화된 미디어 데이터 청크를 담은 {{domxref("Blob")}} 객체 배열을 인자로 받아 이행 핸들러를 실행하는 {{jsxref("Promise")}}를 반환합니다.
- 녹화 과정의 이행 핸들러는 `recordedChunks`라는 변수에 담긴 미디어 데이터 `Blob` 배열을 입력값으로 받습니다. 먼저, {{domxref("Blob.Blob", "Blob()")}} 생성자가 객체 배열을 하나의 객체로 이어 붙인다는 점을 활용하여, 이 청크들을 MIME 타입이 `"video/webm"`인 {{domxref("Blob")}}으로 병합합니다. 그다음, {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}을 사용해 blob을 참조하는 URL을 생성하고, 이 URL을 녹화된 비디오 재생 요소의 [`src`](/ko/docs/Web/HTML/Reference/Elements/video#src) 속성과 다운로드 버튼의 링크 대상으로 지정합니다.

  그런 다음 다운로드 버튼의 [`download`](/ko/docs/Web/HTML/Reference/Elements/a#download) 속성이 설정됩니다. `download` 속성은 불리언 값도 될 수 있지만, 문자열로 설정하여 다운로드되는 파일의 이름으로 사용할 수도 있습니다. 따라서 다운로드 링크의 `download` 속성을 "RecordedVideo.webm"으로 지정하면, 버튼을 클릭했을 때 그 내용이 녹화된 비디오인 `"RecordedVideo.webm"` 파일이 다운로드되도록 브라우저에 지시하는 것입니다.

- 녹화된 미디어의 크기와 형식은 두 비디오와 다운로드 버튼 아래의 로그 영역에 출력됩니다.
- 모든 `Promise`의 `catch()`는 우리의 `log()` 함수를 호출하여 오류를 로그 영역에 출력합니다.

### 정지 버튼 처리

마지막으로, {{domxref("EventTarget.addEventListener", "addEventListener()")}}를 사용해 정지 버튼의 {{domxref("Element/click_event", "click")}} 이벤트에 대한 핸들러를 추가하는 코드입니다.

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

이는 앞서 다룬 [`stop()`](#입력_스트림_중지) 함수를 호출합니다.

### 결과

전체 HTML과 위에 나타내지 않은 CSS와 함께 구성하면, 다음과 같이 보이고 작동합니다.

{{ EmbedLiveSample('Example_of_recording_a_media_element', 600, 440) }}

전체 데모를 {{LiveSampleLink("Example_of_recording_a_media_element", "여기에서 확인")}}할 수 있으며, 브라우저의 개발자 도구를 사용해 페이지의 모든 코드를 살펴볼 수 있습니다. 설명에 필수적이지 않아 위에서 생략된 부분도 포함되어 있으니 참고하세요.

## 같이 보기

- [Media Capture and Streams API](/ko/docs/Web/API/Media_Capture_and_Streams_API) 랜딩 페이지
- {{domxref("MediaDevices.getUserMedia()")}}
