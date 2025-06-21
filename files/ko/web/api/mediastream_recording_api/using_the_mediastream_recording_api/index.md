---
title: MediaStream Recording API 사용하기
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("MediaStream Recording")}}

[MediaStream Recording API](/ko/docs/Web/API/MediaStream_Recording_API)는 오디오 및/또는 비디오 스트림을 손쉽게 녹화할 수 있도록 해줍니다. {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}와 함께 사용하면 사용자의 입력 장치에서 바로 녹화하여, 그 결과물을 웹 애플리케이션에서 즉시 활용할 수 있습니다.

오디오와 비디오는 개별적으로 또는 함께 녹화할 수 있습니다. 이 글은 해당 API를 제공하는 MediaRecorder 인터페이스의 사용법에 대한 기본 가이드를 제공하는 것을 목적으로 합니다.

## 예제 애플리케이션: 웹 음성 녹음기

![웹 음성 녹음기 샘플 앱의 이미지: 사인파 소리 시각화, 녹음 및 정지 버튼, 그리고 녹음된 트랙을 재생할 수 있는 오디오 주크박스](web-dictaphone.png)

MediaStream Recording API의 기본 사용법을 시연하기 위해, 웹 기반의 음성 녹음기를 제작했습니다. 이 도구는 오디오 일부를 녹음한 후 재생할 수 있으며, Web Audio API를 사용해 기기의 사운드 입력을 시각화합니다. 이번 글에서는 녹음 및 재생 기능에 초점을 맞출 예정입니다.

이 [데모를 실시간으로 확인](https://mdn.github.io/dom-examples/media/web-dictaphone/)하거나 GitHub에서 [소스 코드를 받아볼](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone) 수 있습니다.

## CSS 유용한 기능

이 앱의 HTML은 매우 단순해서 여기서 자세히 다루지 않겠습니다. 하지만 언급할 만한 흥미로운 CSS 요소가 몇 가지 있으므로 아래에서 다룰 예정입니다. CSS에 관심이 없고 바로 JavaScript로 넘어가고 싶다면 [기본 앱 설정](#기본_앱_설정) 섹션으로 건너뛰세요.

### calc()를 사용하여 기기 높이에 상관없이 인터페이스를 뷰포트에 맞게 유지하기

{{cssxref("calc", "calc()")}} 함수는 처음에는 별다른 것 없어 보이지만, "와, 이 기능이 왜 지금까지 없었을까? CSS2 레이아웃이 왜 이렇게 불편했을까?"라는 생각을 하게 만드는 유용한 도구 중 하나입니다. 이 함수는 서로 다른 단위를 혼합하여 CSS 단위의 계산된 값을 산출할 수 있도록 도와줍니다.

예를 들어, 웹 음성 녹음기에서는 세 개의 주요 UI 영역이 수직으로 배치되어 있습니다. 우리는 처음 두 영역(헤더와 컨트롤)에 고정된 높이를 부여하고자 했습니다.

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

하지만 기기 높이에 상관없이 남은 공간을 모두 차지하도록, 녹음 샘플 재생 영역인 세 번째 부분을 구성하고 싶었습니다. 이 경우 Flexbox를 사용할 수도 있겠지만, 이렇게 간단한 레이아웃에는 다소 과한 방법일 수 있습니다. 대신, 세 번째 컨테이너의 높이를 상위 요소의 전체 높이에서 다른 두 영역의 높이와 패딩 값을 뺀 값으로 설정하여 문제를 해결했습니다.

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### 체크박스 해킹을 이용한 표시/숨기기

이 기법은 이미 꽤 잘 문서화되어 있지만, 체크박스의 {{htmlelement("label")}}을 클릭하면 체크/언체크 상태가 전환된다는 점을 활용한 체크박스 해킹을 언급해 보고자 합니다. 웹 음성 녹음기에서는 오른쪽 상단의 물음표 아이콘을 클릭하면 정보 화면이 표시되거나 숨겨지는데, 이때 이 기법이 사용됩니다. 우선, `<label>`에 원하는 스타일을 적용하여 다른 요소들보다 항상 위에 표시되도록 z-index를 충분히 높게 설정해, 포커스 및 클릭이 가능하게 합니다.

```css
label {
  font-family: "NotoColorEmoji";
  font-size: 3rem;
  position: absolute;
  top: 2px;
  right: 3px;
  z-index: 5;
  cursor: pointer;
}
```

그런 다음 실제 체크박스는 UI를 어수선하게 만들지 않기 위해 숨깁니다.

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

다음으로, {{htmlelement("aside")}} 요소로 감싼 정보 화면을 원하는 스타일로 꾸미고, 메인 UI에 영향을 주지 않도록 레이아웃 흐름에서 벗어나도록 고정 위치를 부여합니다. 기본 위치로 이동시키기 위해 변환(transform)을 적용하고, 부드럽게 표시/숨김 효과를 주기 위해 전환(transition)을 설정합니다.

```css
aside {
  position: fixed;
  top: 0;
  left: 0;
  text-shadow: 1px 1px 1px black;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: 0.6s all;
  background-color: #999;
  background-image: linear-gradient(
    to top right,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 50%)
  );
}
```

마지막으로, 체크박스가 선택되었을 때 (label을 클릭하거나 포커스했을 때), 인접한 `<aside>` 요소의 수평 이동 값이 변경되어 부드럽게 화면에 나타나도록 하는 규칙을 작성합니다.

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## 기본 앱 설정

캡처할 미디어 스트림을 얻기 위해 `getUserMedia()`를 사용합니다. 이후 MediaStream Recording API를 활용하여 스트림을 녹화하고, 녹화된 각 스니펫을 생성된 {{htmlelement("audio")}} 요소의 소스로 출력해 재생할 수 있도록 합니다.

녹음 및 중지 버튼과, 생성된 오디오 플레이어들을 담을 {{htmlelement("article")}} 요소를 위한 변수를 선언합니다.

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

마지막으로, 이 섹션의 기본 `getUserMedia` 구조를 설정합니다.

```js
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia(
      // 제약 조건 - 이 앱은 오디오만 필요함
      {
        audio: true,
      },
    )

    // 성공 콜백
    .then((stream) => {})

    // 오류 콜백
    .catch((err) => {
      console.error(`The following getUserMedia error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}
```

전체 코드는 다른 작업을 실행하기 전 `getUserMedia` 지원 여부를 확인하는 테스트로 감싸져 있습니다. 다음으로 `getUserMedia()`를 호출하고 그 내부를 정의합니다.

- **제약 조건**: 음성 녹음기에서는 오직 오디오만 캡처합니다.
- **성공 콜백**: `getUserMedia` 호출이 성공적으로 완료되면 실행되는 코드입니다.
- **오류/실패 콜백**: `getUserMedia` 호출이 어떤 이유로 실패할 때 실행되는 코드입니다.

> [!NOTE]
> 아래의 모든 코드는 `getUserMedia` 성공 콜백 내부에 위치합니다.

## 미디어 스트림 캡처

`getUserMedia`가 미디어 스트림을 성공적으로 생성하면, `MediaRecorder()` 생성자를 사용해 새 MediaRecorder 인스턴스를 만들고 스트림을 직접 전달합니다. 이것이 MediaStream Recording API를 사용하는 진입점이 되며, 스트림은 이제 브라우저의 기본 인코딩 형식으로 {{domxref("Blob")}}에 캡처될 준비가 된 것입니다.

```js
const mediaRecorder = new MediaRecorder(stream);
```

{{domxref("MediaRecorder")}} 인터페이스에는 미디어 스트림 녹화를 제어할 수 있는 다양한 메서드들이 있으며, 웹 음성 녹음기에서는 이 중 두 가지 메서드와 몇 가지 이벤트만을 사용합니다. 우선, 녹음 버튼을 누르면 {{domxref("MediaRecorder.start()")}}를 호출하여 스트림의 녹화를 시작합니다.

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

`MediaRecorder`가 녹화 중일 때, {{domxref("MediaRecorder.state")}} 속성은 "recording" 값을 반환합니다.

녹화가 진행됨에 따라 오디오 데이터를 수집해야 하므로, 이를 위해 {{domxref("mediaRecorder.dataavailable_event", "ondataavailable")}} 이벤트 핸들러를 등록합니다.

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> 브라우저는 필요에 따라 `dataavailable` 이벤트를 발생시키지만, 필요하다면 `start()` 메서드를 호출할 때 시간 간격(timeslice) 값을 포함해(예: `start(10000)`) 이 간격을 제어할 수 있으며, 원하는 시점에 {{domxref("MediaRecorder.requestData()")}}를 호출해 이벤트를 발생시킬 수도 있습니다.

마지막으로, 정지 버튼을 누르면 {{domxref("MediaRecorder.stop()")}} 메서드를 사용하여 녹화를 종료하고, 애플리케이션의 다른 부분에서 사용할 준비가 된 {{domxref("Blob")}}을 완성합니다.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

미디어 스트림이 종료될 때 녹화가 자연스럽게 중단될 수도 있습니다. (예: 노래 트랙을 녹음 중에 트랙이 끝나거나, 사용자가 마이크 공유를 중단하는 경우 등)

## Blob 가져오기 및 활용

녹화가 중지되면 `state` 속성은 "inactive" 값을 반환하며, stop 이벤트가 발생합니다. 이때, {{domxref("mediaRecorder.stop_event", "onstop")}} 이벤트 핸들러를 등록하여 지금까지 수신한 모든 청크로부터 최종적인 blob을 완성합니다.

```js
mediaRecorder.onstop = (e) => {
  console.log("recorder stopped");

  const clipName = prompt("Enter a name for your sound clip");

  const clipContainer = document.createElement("article");
  const clipLabel = document.createElement("p");
  const audio = document.createElement("audio");
  const deleteButton = document.createElement("button");

  clipContainer.classList.add("clip");
  audio.setAttribute("controls", "");
  deleteButton.textContent = "Delete";
  clipLabel.textContent = clipName;

  clipContainer.appendChild(audio);
  clipContainer.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  soundClips.appendChild(clipContainer);

  const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  chunks = [];
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  deleteButton.onclick = (e) => {
    let evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
  };
};
```

위의 코드를 살펴보며 어떤 동작이 일어나는지 확인해 봅시다.

먼저, 사용자에게 클립의 이름을 묻는 프롬프트를 표시합니다.

다음으로, {{htmlelement("article")}} 요소인 클립 컨테이너에 아래와 같은 HTML 구조를 생성하여 삽입합니다.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

그 후, 녹음된 오디오 청크들을 결합해 하나의 {{domxref("Blob")}}을 만들고, `window.URL.createObjectURL(blob)`를 사용해 이를 가리키는 오브젝트 URL을 생성합니다. 그다음, {{HTMLElement("audio")}} 요소의 [`src`](/ko/docs/Web/HTML/Element/audio#src) 속성에 이 오브젝트 URL을 할당하여, 오디오 플레이어의 재생 버튼을 누르면 해당 `Blob`이 재생되도록 합니다.

마지막으로, 삭제 버튼에 `onclick` 핸들러를 설정하여 전체 클립 HTML 구조를 삭제하는 함수를 실행합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Media Capture and Streams API](/ko/docs/Web/API/Media_Capture_and_Streams_API) 랜딩 페이지
- {{domxref("MediaDevices.getUserMedia()")}}
