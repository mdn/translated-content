---
title: "AnalyserNode: getFloatFrequencyData() 메서드"
short-title: getFloatFrequencyData()
slug: Web/API/AnalyserNode/getFloatFrequencyData
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{domxref("AnalyserNode")}} 인터페이스의 **`getFloatFrequencyData()`** 메서드는 전달된 {{domxref("Float32Array")}} 배열 내로 현재 주파수 데이터를 복사합니다. 이 배열은 샘플, 즉 어느 한 시점에 신호의 강도입니다.

배열 내의 각 원소는 특정한 주파수에 대한 데시벨 값을 나타냅니다. 주파수들은 0에서 샘플 레이트의 1/2까지 선형적으로 퍼져 있습니다. 예를 들자면, `48000` Hz 샘플 레이트에 대해서, 배열의 마지막 원소는 `24000` Hz에 대한 데시벨 값을 나타냅니다.

정밀성이 떨어지더라도 성능이 더 중요하다면 {{domxref("AnalyserNode.getByteFrequencyData()")}}를 사용하세요. {{domxref("Uint8Array")}}에서 동작합니다.

## 구문

```js-nolint
getFloatFrequencyData(array)
```

### 매개변수

- `array`
  - : 주파수 영역 데이터가 복사될 {{domxref("Float32Array")}}. 소리가 없는 모든 샘플의 값은 `-Infinity`입니다. 배열의 요소 수가 {{domxref("AnalyserNode.frequencyBinCount")}}보다 더 적으면, 초과한 요소들은 탈락됩니다. 반대로, 배열의 요소 수가 더 크면, 초과한 요소들은 무시됩니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
// Float32Array의 길이가 frequencyBinCount와 같아야 함
const myDataArray = new Float32Array(analyser.frequencyBinCount);
// getFloatFrequencyData()가 반환한 데이터로 Float32Array 채우기
analyser.getFloatFrequencyData(myDataArray);
```

### 스펙트럼 그리기

다음의 예제는 {{domxref("AudioContext")}}를 사용해서 {{domxref("MediaElementAudioSourceNode")}}를 `AnalyserNode`에 연결하는 기본 방법을 보입니다. 오디오가 재생되는 동안, 예제에서는 {{domxref("window.requestAnimationFrame()","requestAnimationFrame()")}}으로 주파수 데이터를 반복해 수집하고, "Winamp 막대그래프 스타일"을 {{htmlelement("canvas")}} 요소에 그립니다.

보다 완전한 응용 예제/정보를 보려면 [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) 데모를 확인하세요. ([app.js의 108-193번째 줄](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193)에서 관련 코드 확인)

```html
<!doctype html>
<body>
  <script>
    const audioCtx = new AudioContext();

    //오디오 소스 생성
    //여기서는 오디오 파일을 사용하지만, 마이크 입력같은 것도 가능
    const audioEle = new Audio();
    audioEle.src = "my-audio.mp3"; //여기에 파일명 입력
    audioEle.autoplay = true;
    audioEle.preload = "auto";
    const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

    //분석 노드 생성
    const analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 256;
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);

    //오디오 노드 네트워크 설정
    audioSourceNode.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);

    //2D 캔버스 생성
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const canvasCtx = canvas.getContext("2d");
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    function draw() {
      //다음 그리기 예약
      requestAnimationFrame(draw);

      //스펙트럼 데이터 가져오기
      analyserNode.getFloatFrequencyData(dataArray);

      //검은색 배경 그리기
      canvasCtx.fillStyle = "rgb(0, 0, 0)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      //스펙트럼 그리기
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let posX = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] + 140) * 2;
        canvasCtx.fillStyle =
          "rgb(" + Math.floor(barHeight + 100) + ", 50, 50)";
        canvasCtx.fillRect(
          posX,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2,
        );
        posX += barWidth + 1;
      }
    }

    draw();
  </script>
</body>
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
