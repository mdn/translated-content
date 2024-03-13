---
title: AnalyserNode.frequencyBinCount
slug: Web/API/AnalyserNode/frequencyBinCount
---

{{APIRef("Web Audio API")}}

{{domxref("AnalyserNode")}} 인터페이스의 **`frequencyBinCount`** 읽기 전용 속성은 {{domxref("AnalyserNode.fftSize")}} 값의 절반인 unsigned 정수입니다. 이것은 일반적으로 시각화를 위해 사용할 데이터 값의 수와 동일시됩니다.

## 구문

```js
var arrayLength = analyserNode.frequencyBinCount;
```

### 값

{{domxref("AnalyserNode.getByteFrequencyData()")}}와 {{domxref("AnalyserNode.getFloatFrequencyData()")}}가 제공된 `TypedArray`내로 복사하는 값의 수와 동일한 unsigned 정수.

[고속 푸리에 변환](https://en.wikipedia.org/wiki/Fast_Fourier_transform)이 정의된 방법에 관계된 기술적인 이유로, 이것은 언제나 {{domxref("AnalyserNode.fftSize")}} 값의 절반입니다. 그러므로, 이것은 다음 중 하나입니다: `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, 그리고 `16384`.

## 예제

다음의 예제는 `AnalyserNode`를 생성하기 위한 {{domxref("AudioContext")}}와 그리고 나서 반복적으로 주파수 데이터를 수집하고 현재 오디오 입력의 "winamp 막대그래프 스타일의" 출력을 그리기 위한 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}과 {{htmlelement("canvas")}}의 기본 사용을 보여줍니다. 더 완벽한 응용 예제/정보를 보려면 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)를 참고하세요).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;

  ...

analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  var barWidth = (WIDTH / bufferLength) * 2.5 - 1;
  var barHeight;
  var x = 0;

  for(var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

    x += barWidth;
  }
};

draw();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
