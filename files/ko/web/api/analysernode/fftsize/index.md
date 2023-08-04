---
title: AnalyserNode.fftSize
slug: Web/API/AnalyserNode/fftSize
---

{{APIRef("Web Audio API")}}

{{domxref("AnalyserNode")}} 인터페이스의 **`fftSize`** 속성은 unsigned long 값이고 주파수 영역 데이터를 얻기 위해 [고속 푸리에 변환](https://en.wikipedia.org/wiki/Fast_Fourier_transform)(FFT)을 수행할 때 사용될 샘플에서의 window 사이즈를 나타냅니다.

## 구문

```js
var curValue = analyserNode.fftSize;
analyserNode.fftSize = newValue;
```

### 값

FFT의 window 사이즈를 나타내는 샘플의 수로 주어지는 unsigned 정수입니다. 값이 높을수록 주파수 영역의 자세함이 커지는 결과를 낳으나 시간 영역에서의 자세함은 떨어집니다.

반드시 <math><semantics><msup><mn>2</mn><mn>5</mn></msup><annotation encoding="TeX">2^5</annotation></semantics></math>와 <math><semantics><msup><mn>2</mn><mn>15</mn></msup><annotation encoding="TeX">2^15</annotation></semantics></math> 사이의 2의 제곱이여야만 합니다. 즉 다음 중 하나여야 합니다: `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`, `16384`, 그리고 `32768`. 기본값은 `2048`입니다.

> **참고:** 만약 값이 2의 제곱이 아니거나 이 명시된 범위의 바깥에 있다면, `IndexSizeError`라는 이름의 {{domxref("DOMException")}}이 발생합니다.

## 예제

다음의 예제는 `AnalyserNode`를 생성하기 위한 {{domxref("AudioContext")}}와 그리고 나서 반복적으로 시간 영역의 데이터를 수집하고 현재 오디오 입력의 "오실로스코프 스타일의" 출력을 그리기 위한 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}과 {{htmlelement("canvas")}}의 기본 사용을 보여줍니다. 더 완벽한 응용 예제/정보를 보려면 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)를 참고하세요).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount ;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 현재 오디오 소스의 오실로스코프를 그립니다

function draw() {

      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
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
