---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
---

{{APIRef("Web Audio API")}}

`OfflineAudioContext` 인터페이스는 함께 연결된 {{domxref("AudioNode")}}들로부터 만들어진 오디오 프로세싱 그래프를 나타내는 {{domxref("AudioContext")}} 인터페이스입니다. 표준 {{domxref("AudioContext")}}와는 대조적으로, `OfflineAudioContext`는 오디오를 장치 하드웨어로 렌더링하지 않습니다; 대신, 이것은 가능한 한 빨리 오디오를 생성하고, 그 결과를 {{domxref("AudioBuffer")}}에 출력합니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("OfflineAudioContext.OfflineAudioContext()")}}
  - : 새로운 `OfflineAudioContext` 인스턴스를 생성합니다.

## 속성

_또한 부모 인터페이스인 {{domxref("BaseAudioContext")}}로부터 속성을 상속받습니다._

- {{domxref('OfflineAudioContext.length')}} {{readonlyinline}}
  - : 샘플 프레임의 버퍼 사이즈를 나타내는 정수.

### 이벤트 처리기

- {{domxref("OfflineAudioContext.oncomplete")}}
  - : {{domxref("OfflineAudioContext.startRendering()")}}의 이벤트 기반 버전이 사용된 이후, 프로세싱이 종료되었을 때, 즉 ({{domxref("OfflineAudioCompletionEvent")}} 유형의) {{event("complete")}} 이벤트가 발생되었을 때 호출되는 [이벤트 처리기](/ko/docs/Web/Events/Event_handlers)입니다.

## 메서드

_또한 부모 인터페이스인 {{domxref("BaseAudioContext")}}로부터 메서드를 상속받습니다._

- {{domxref("OfflineAudioContext.suspend()")}}
  - : 특정한 시간에서의 오디오 컨텍스트의 시간 진행의 연기를 스케쥴링하고 프로미스를 반환합니다.
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : 현재 연결과 현재 스케쥴링된 변화를 고려하며 오디오 렌더링을 시작합니다. 이 문서는 이벤트 기반 버전과 프로미스 기반 버전 모두를 다룹니다.

### 더 이상 사용되지 않는 메서드

- {{domxref("OfflineAudioContext.resume()")}}
  - : 이전에 연기된 오디오 컨텍스트에서의 시간 진행을 재개합니다.

> **참고:** `resume()` 메서드는 여전히 사용 가능합니다 — 이것은 이제 {{domxref("BaseAudioContext")}} 인터페이스에 정의되었고 ({{domxref("AudioContext.resume")}}을 참조하세요) 따라서 {{domxref("AudioContext")}}와 {{domxref("OfflineAudioContext")}} 인터페이스 모두에서 접근 가능합니다.

## 이벤트

[`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)를 사용하거나 이벤트 수신기를 이 인터페이스의 `oneventname` 속성에 부여함으로써 이 이벤트들을 수신하세요.

- [`complete`](/ko/docs/Web/API/OfflineAudioContext/complete_event)
  - : 오프라인 오디오 컨텍스트의 렌더링이 완료되었을 때 발생됩니다.
    또한 [`oncomplete`](/ko/docs/Web/API/OfflineAudioContext/oncomplete) 이벤트 처리기 속성을 사용하여 이용 가능합니다.

## 예제

이 간단한 예제에서, 우리는 {{domxref("AudioContext")}}와 `OfflineAudioContext` 객체 모두를 선언합니다. 우리는 `AudioContext`을 XHR({{domxref("BaseAudioContext.decodeAudioData")}})을 통해 오디오 트랙을 로드하기 위해 사용하고, 그리고 나서 `OfflineAudioContext`를 오디오를 {{domxref("AudioBufferSourceNode")}}에 렌더링하고 트랙을 재생하기 위해 사용합니다. 오프라인 오디오 그래프가 준비된 후, 여러분은 {{domxref("OfflineAudioContext.startRendering")}}을 사용하여 {{domxref("AudioBuffer")}}에 이것을 렌더링할 필요가 있습니다.

`startRendering()` 프로미스가 이행할 때, 렌더링은 완료되었고 `AudioBuffer` 출력은 프로미스에서 반환됩니다.

이 시점에서 우리는 다른 오디오 컨텍스트를 생성하고, 그것의 내부에 {{domxref("AudioBufferSourceNode")}}를 생성하고, 그리고 이것의 버퍼를 `AudioBuffer` 프로미스와 같게 설정합니다. 이것은 그리고 나서 간단한 표준 오디오 그래프의 일부로 재생됩니다.

> **참고:** 작동하는 예제를 보려면 [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) GitHub 레포지토리를 참고하세요 ([소스 코드](https://github.com/mdn/webaudio-examples/tree/master/offline-audio-context-promise)도 보세요.)

```js
// 온라인과 오프라인 오디오 컨텍스트를 정의합니다

var audioCtx = new AudioContext();
var offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// 오디오 트랙을 로딩하기 위해 XHR를 사용하고,
// 이것을 디코딩하기 위해 decodeAudioData를 사용하고 렌더링하기 위해 OfflineAudioContext를 사용합니다

function getData() {
  request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = function () {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function (buffer) {
      myBuffer = buffer;
      source.buffer = myBuffer;
      source.connect(offlineCtx.destination);
      source.start();
      //source.loop = true;
      offlineCtx
        .startRendering()
        .then(function (renderedBuffer) {
          console.log("Rendering completed successfully");
          var song = audioCtx.createBufferSource();
          song.buffer = renderedBuffer;

          song.connect(audioCtx.destination);

          play.onclick = function () {
            song.start();
          };
        })
        .catch(function (err) {
          console.log("Rendering failed: " + err);
          // 참고: 이 프로미스는 OfflineAudioContext에서 startRendering이 두 번째로 호출되었을 때 거부되어야만 합니다
        });
    });
  };

  request.send();
}

// 프로세스를 시작하기 위해 getData를 실행합니다

getData();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
