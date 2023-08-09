---
title: AnalyserNode.maxDecibels
slug: Web/API/AnalyserNode/maxDecibels
---

{{APIRef("Web Audio API")}}

{{domxref("AnalyserNode")}} 인터페이스의 **`maxDecibels`** 속성은 unsigned byte 값으로의 전환에 대해서, FFT 분석 데이터의 스케일링 범위에서의 최대 power 값을 나타내는 double 값입니다 — 기본적으로, 이것은 `getByteFrequencyData()`를 사용할 때 결과의 범위에 대한 최대 값을 명시합니다.

## 구문

```js
var curValue = analyserNode.maxDecibels;
analyserNode.maxDecibels = newValue;
```

### 값

FFT 분석 데이터를 스케일링하는 것에 대한 최대 [데시벨](https://en.wikipedia.org/wiki/Decibel) 값을 나타내는 double인데, `0` dB는 가능한 가장 큰 소리를 나타내고, `-10` dB는 그것의 10번째, 등등입니다. 기본 값은 `-30` dB입니다.

`getByteFrequencyData()`로부터 데이터를 얻을 때, `maxDecibels` 또는 더 높은 진폭을 가진 모든 주파수는 `255`로 반환됩니다.

> **참고:** 만약 `AnalyserNode.minDecibels`보다 더 작거나 같은 값이 설정된다면, `IndexSizeError` 예외가 발생합니다.

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

  var barWidth = (WIDTH / bufferLength) * 2.5;
  var barHeight;
  var x = 0;

  for(var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

    x += barWidth + 1;
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
