---
title: AnalyserNode.getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
---

{{ APIRef("Web Audio API") }}

{{ domxref("AnalyserNode") }} 인터페이스의 **`getByteFrequencyData()`** 메서드는 전달된 {{domxref("Uint8Array")}} (unsigned byte array) 내로 현재 주파수 데이터를 복사합니다.

주파수 데이터는 0에서 255 스케일의 정수로 구성되어 있습니다.

배열 내의 각 원소는 특정한 주파수에 대한 데시벨 값을 나타냅니다. 주파수들은 0에서 샘플 레이트의 1/2까지 선형적으로 퍼져 있습니다. 예를 들자면, `48000` 샘플 레이트에 대해서, 배열의 마지막 원소는 `24000` Hz에 대한 데시벨 값을 나타냅니다.

만약 배열이 {{domxref("AnalyserNode.frequencyBinCount")}}보다 더 적은 요소를 가지고 있다면, 초과한 요소는 탈락됩니다. 만약 이것이 필요한 것보다 더 많은 요소를 가지고 있다면, 초과한 요소는 무시됩니다.

## 구문

```js
var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var dataArray = new Uint8Array(analyser.frequencyBinCount); // Uint8Array는 frequencyBinCount와 같은 길이여야만 합니다

void analyser.getByteFrequencyData(dataArray); // getByteFrequencyData()로부터 반환된 데이터로 Uint8Array를 채웁니다
```

### 매개변수

- `array`
  - : 주파수 영역 데이터가 복사될 {{domxref("Uint8Array")}}. 소리가 없는 모든 샘플에 대해서, 값은 `-Infinity`입니다.
    만약 배열이 {{domxref("AnalyserNode.frequencyBinCount")}}보다 더 적은 요소를 가지고 있다면, 초과한 요소는 탈락됩니다. 만약 이것이 필요한 것보다 더 많은 요소를 가지고 있다면, 초과한 요소는 무시됩니다.

### 반환 값

없음.

## 예제

다음의 예제는 `AnalyserNode`를 생성하기 위한 {{domxref("AudioContext")}}와 그리고 나서 반복적으로 주파수 데이터를 수집하고 현재 오디오 입력의 "winamp 막대그래프 스타일의" 출력을 그리기 위한 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}과 {{htmlelement("canvas")}}의 기본 사용을 보여줍니다. 더 완벽한 응용 예제/정보를 보려면 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)를 참고하세요).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

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
