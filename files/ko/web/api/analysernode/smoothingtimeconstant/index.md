---
title: AnalyserNode.smoothingTimeConstant
slug: Web/API/AnalyserNode/smoothingTimeConstant
---

{{ APIRef("Web Audio API") }}

{{ domxref("AnalyserNode") }} 인터페이스의 **`smoothingTimeConstant`** 속성은 마지막 분석 프레임의 에버리징(averaging) 상수를 나타내는 double 값입니다. 이것은 기본적으로 현재 버퍼와 `AnalyserNode`가 처리한 마지막 버퍼 사이의 평균이고, 더욱 매끄러운 시간에 대한 값 변화의 집합을 결과로 낳습니다.

## 구문

```js
var smoothValue = analyserNode.smoothingTimeConstant;
analyserNode.smoothingTimeConstant = newValue;
```

### 값

`0`에서 `1`까지의 범위 내의 double (`0`은 시간 에버리징이 없음을 의미). 기본값은 `0.8`입니다.

만약 0이 설정된다면, 완료된 에버리징이 없는 것이지만, 1의 값은 "값을 계산하는 동안 이전과 현재 버퍼를 많이 겹치기"를 의미하는데, 이는 근본적으로 {{domxref("AnalyserNode.getFloatFrequencyData")}}/{{domxref("AnalyserNode.getByteFrequencyData")}} 호출에 걸쳐 변화들을 매끄럽게 합니다.

기술적인 측면에서, 우리는 [Blackman window](https://webaudio.github.io/web-audio-api/#blackman-window)를 적용했고 값들을 시간에 대해 매끄럽게 합니다. 기본값은 대부분의 경우에 적합합니다.

> [!NOTE]
> 만약 범위 0-1 바깥의 값이 설정된다면, `INDEX_SIZE_ERR` 예외가 발생합니다.

## 예제

다음의 예제는 `AnalyserNode`를 생성하기 위한 {{domxref("AudioContext")}}와 그리고 나서 반복적으로 주파수 데이터를 수집하고 현재 오디오 입력의 "winamp 막대그래프 스타일의" 출력을 그리기 위한 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}과 {{htmlelement("canvas")}}의 기본 사용을 보여줍니다. 더 완벽한 응용 예제/정보를 보려면 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)를 참고하세요).

만약 여러분이 `smoothingTimeConstant()`이 가진 영향에 대해 궁금하다면, 위의 예제를 복사해서 `analyser.smoothingTimeConstant = 0;`을 대신 설정해 보세요. 값 변화가 더욱 삐걱거리는 것을 인지하실 것입니다.

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;

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
