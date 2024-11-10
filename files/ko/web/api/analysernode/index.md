---
title: AnalyserNode
slug: Web/API/AnalyserNode
---

{{APIRef("Web Audio API")}}

**`AnalyserNode`** 인터페이스는 실시간 주파수와 시간 영역 분석 정보를 제공 가능한 노드를 표현합니다. 이것은 변경되지 않은 오디오 스트림을 입력에서 출력으로 전달하지만, 여러분은 생성된 데이터를 얻고, 그것을 처리하고, 오디오 시각화를 생성할 수 있습니다.

`AnalyserNode`는 정확히 하나의 입력과 하나의 출력을 가집니다. 이 노드는 출력이 연결되지 않았더라도 작동합니다.

![오디오 스트림을 수정하지 않고, 이 노드는 FFT를 사용하여 이것에 관련된 주파수와 시간 영역의 데이터를 얻을 수 있게 합니다.](fttaudiodata_en.svg)

| 입력의 수              | `1`                                                   |
| ---------------------- | ----------------------------------------------------- |
| 출력의 수              | `1` (그러나 연결되지 않은 채로 남아있을지도 모릅니다) |
| Channel count mode     | `"max"`                                               |
| Channel count          | `2`                                                   |
| Channel interpretation | `"speakers"`                                          |

## 상속

이 인터페이스는 다음의 부모 인터페이스들로부터 상속받습니다:

{{InheritanceDiagram}}

## 생성자

- {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}}
  - : `AnalyserNode` 객체의 새로운 인스턴스를 생성합니다.

## 속성

_부모인 {{domxref("AudioNode")}}로부터 속성을 상속받습니다_.

- {{domxref("AnalyserNode.fftSize")}}
  - : 주파수 영역을 결정하는 데 사용될 FFT([Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform))의 사이즈를 나타내는 unsigned long 값입니다.
- {{domxref("AnalyserNode.frequencyBinCount")}} {{readonlyInline}}
  - : FFT 사이즈 값의 절반인 unsigned long 값입니다. 이것은 일반적으로 시각화를 위해 사용할 데이터 값의 수와 동일시됩니다.
- {{domxref("AnalyserNode.minDecibels")}}
  - : unsigned byte 값으로의 전환에 대해서, FFT 분석 데이터의 스케일링 범위에서의 최소 power 값을 나타내는 double 값입니다 — 기본적으로, 이것은 `getByteFrequencyData()`를 사용할 때 결과의 범위에 대한 최소 값을 명시합니다.
- {{domxref("AnalyserNode.maxDecibels")}}
  - : unsigned byte 값으로의 전환에 대해서, FFT 분석 데이터의 스케일링 범위에서의 최대 power 값을 나타내는 double 값입니다 — 기본적으로, 이것은 `getByteFrequencyData()`를 사용할 때 결과의 범위에 대한 최대 값을 명시합니다.
- {{domxref("AnalyserNode.smoothingTimeConstant")}}
  - : 마지막 분석 프레임의 에버리징(averaging) 상수를 나타내는 double 값입니다 — 기본적으로, 이것은 시간에 대한 값 사이의 전환을 더 매끄럽게 만듭니다.

## 메서드

_부모인 {{domxref("AudioNode")}}로부터 메서드를 상속받습니다_.

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : 전달된 {{domxref("Float32Array")}} 배열 내로 현재 주파수 데이터를 복사합니다.
- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : 전달된 {{domxref("Uint8Array")}} (unsiged byte array) 내로 현재 주파수 데이터를 복사합니다.
- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : 전달된 {{domxref("Float32Array")}} 배열 내로 현재 파형, 즉 시간 영역 데이터를 복사합니다.
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : 전달된 {{domxref("Uint8Array")}} (unsigned byte array) 내로 현재 파형, 즉 시간 영역 데이터를 복사합니다.

## 예제

> [!NOTE]
> 오디오 시각화 생성하기에 대한 더 많은 정보를 보려면 [Web Audio API 시각화](/ko/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) 가이드를 참고하세요.

### 기본 사용

다음의 예제는 `AnalyserNode`를 생성하기 위한 {{domxref("AudioContext")}}와 그리고 나서 반복적으로 시간 영역의 데이터를 수집하고 현재 오디오 입력의 "오실로스코프 스타일의" 출력을 그리기 위한 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}과 {{htmlelement("canvas")}}의 기본 사용을 보여줍니다. 더 완벽한 응용 예제/정보를 보려면 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)를 참고하세요).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// ...

var analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 분석될 소스에 연결합니다
source.connect(analyser);

// ID "oscilloscope"로 정의된 canvas를 얻습니다
var canvas = document.getElementById("oscilloscope");
var canvasCtx = canvas.getContext("2d");

// 현재 오디오 소스의 오실로스코프를 그립니다

function draw() {
  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200, 200, 200)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  canvasCtx.beginPath();

  var sliceWidth = (canvas.width * 1.0) / bufferLength;
  var x = 0;

  for (var i = 0; i < bufferLength; i++) {
    var v = dataArray[i] / 128.0;
    var y = (v * canvas.height) / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
}

draw();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
