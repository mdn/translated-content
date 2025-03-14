---
title: AnalyserNode.getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
---

{{ APIRef("Mountain View APIRef Project") }}

{{ domxref("AnalyserNode") }} 인터페이스의 **`getByteTimeDomainData()`** 메서드는 전달된 {{domxref("Uint8Array")}} (unsigned byte array) 내로 현재 파형, 즉 시간 영역 데이터를 복사합니다.

만약 배열이 {{domxref("AnalyserNode.fftSize")}}보다 더 적은 요소를 가지고 있다면, 초과한 요소는 탈락됩니다. 만약 이것이 필요한 것보다 더 많은 요소를 가지고 있다면, 초과한 요소는 무시됩니다.

## 구문

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
const dataArray = new Uint8Array(analyser.fftSize); // Uint8Array는 fftSize와 같은 길이여야만 합니다
analyser.getByteTimeDomainData(dataArray); // getByteTimeDomainData()로부터 반환된 데이터로 Uint8Array를 채웁니다
```

### 매개변수

- `array`
  - : 시간 영역 데이터가 복사될 {{domxref("Uint8Array")}}.
    만약 배열이 {{domxref("AnalyserNode.fftSize")}}보다 더 적은 요소를 가지고 있다면, 초과한 요소는 탈락됩니다. 만약 이것이 필요한 것보다 더 많은 요소를 가지고 있다면, 초과한 요소는 무시됩니다.

### 반환 값

**`void`** | 없음

## 예제

다음의 예제는 `AnalyserNode`를 생성하기 위한 {{domxref("AudioContext")}}와 그리고 나서 반복적으로 시간 영역 데이터를 수집하고 현재 오디오 입력의 "오실로스코프 스타일의" 출력을 그리기 위한 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}과 {{htmlelement("canvas")}}의 기본 사용을 보여줍니다. 더 완벽한 응용 예제/정보를 보려면 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)를 참고하세요).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
const bufferLength = analyser.fftSize;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 현재 오디오 소스의 오실로스코프를 그립니다
function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

  const sliceWidth = WIDTH * 1.0 / bufferLength;
  let x = 0;

  canvasCtx.beginPath();
  for(var i = 0; i < bufferLength; i++) {
    const v = dataArray[i]/128.0;
    const y = v * HEIGHT/2;

    if(i === 0)
      canvasCtx.moveTo(x, y);
    else
      canvasCtx.lineTo(x, y);

    x += sliceWidth;
  }

  canvasCtx.lineTo(WIDTH, HEIGHT/2);
  canvasCtx.stroke();
};

draw();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
