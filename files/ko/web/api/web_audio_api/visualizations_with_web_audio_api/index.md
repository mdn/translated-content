---
title: Web Audio API로 시각화하기
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
---

Web Audio API의 가장 흥미로운 기능 중 하나는 주파수, 파형, 그리고 다른 데이터들을 오디오 소스로부터 추출할 수 있는 능력인데, 이는 그리고 나서 시각화하는 데 사용될 수 있습니다. 이 글은 어떻게 시각화를 하는지 설명하고, 기초적인 사용 방법을 두 개 제공합니다.

> **참고:** 모든 코드의 작동 예제를 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) 데모에서 찾을 수 있습니다.

## 기본 개념

오디오 소스에서 데이터를 추출하려면, 여러분은 {{ domxref("AnalyserNode") }}가 필요한데, 이는 {{ domxref("BaseAudioContext.createAnalyser") }}를 사용하여 생성됩니다. 예를 들자면:

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
```

그리고 나서 이 노드는 소스와 목적지 사이의 어떤 지점에서 여러분의 오디오 소스에 연결되는데, 예를 들자면:

```js
source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> **참고:** 입력이 소스에 직접적으로든 혹은 다른 노드를 경유하든 연결되어 있는 한, 여러분은 analyser의 출력을 다른 노드에 이것이 작동하도록 연결할 필요가 없습니다.

analyser 노드는 그리고 나서, 여러분이 {{ domxref("AnalyserNode.fftSize") }} 속성 값에 명시한 것에 따라, 고속 푸리에 변환 (fft) 을 사용하여 특정한 주파수 도메인에 있는 오디오 데이터를 캡쳐합니다. (만약 값이 명시되어 있지 않으면, 기본값은 2048입니다.)

> **참고:** 여러분은 또한 {{ domxref("AnalyserNode.minDecibels") }}과 {{ domxref("AnalyserNode.maxDecibels") }}을 사용하여 fft 데이터 스케일링 범위에 대해 최소와 최대 power 값을 명시할 수 있고, {{ domxref("AnalyserNode.smoothingTimeConstant") }}를 사용하여 각각 다른 데이터 averaging 상수를 명시할 수 있습니다. 이것들을 어떻게 사용하는지에 대해서는 각 페이지를 읽어 보세요.

데이터를 캡쳐하기 위해서는, 여러분은 주파수 데이터를 캡쳐하기 위해 {{ domxref("AnalyserNode.getFloatFrequencyData()") }}와 {{ domxref("AnalyserNode.getByteFrequencyData()") }} 메서드를 사용할 필요가 있고, 파형 데이터를 캡쳐하기 위해서는 {{ domxref("AnalyserNode.getByteTimeDomainData()") }}와 {{ domxref("AnalyserNode.getFloatTimeDomainData()") }}를 사용할 필요가 있습니다.

이 메서드들은 데이터를 명시된 배열에 복사하므로, 여러분은 메서드를 호출하기 전에 데이터를 받기 위한 새로운 배열을 만들 필요가 있습니다. 첫번째 메서드는 32비트 부동 숫자를 만들고, 두번째와 세번째는 8비트 unsigned 정수를 만들기 때문에, 표준 JavaScript 배열은 이를 수행할 수 없습니다 — 여러분이 어떤 데이터를 다루느냐에 따라, {{ domxref("Float32Array") }}나 {{ domxref("Uint8Array") }}배열을 사용할 필요가 있습니다.

그래서 예를 들자면, 우리가 2048의 fft 사이즈를 다루고 있다고 해 봅시다. 우리는 fft의 절반인 {{ domxref("AnalyserNode.frequencyBinCount") }} 값을 반환하고, 그리고 나서 Uint8Array의 길이 인자로서 frequencyBinCount와 함께 Uint8Array()을 호출합니다 — 이것은 얼마나 많은 데이터 포인트를 우리가 그 fft 사이즈에 대해 수집할 것인지를 나타냅니다.

```js
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```

실제로 데이터를 얻고 배열에 복사하기 위해서, 우리는 그리고 나서 우리가 원하는 데이터 수집 메서드를 그것의 인자로서 전달된 배열과 함께 호출합니다. 예를 들자면:

```js
analyser.getByteTimeDomainData(dataArray);
```

우리는 이제 시간으로 그 순간에 대해 배열 속에 캡쳐된 오디오 데이터를 가지고 있고, 우리가 원하는 대로 시각화를 진행할 수 있는데, 예를 들자면 이것을 HTML5 {{ htmlelement("canvas") }}에 그려볼 수 있습니다.

몇몇 구체적인 예제를 살펴봅시다.

## 파형/오실로스코프 생성하기

오실로스코프 시각화를 만들기 위해서는 ([Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167) 내의 원본 코드에 대해 [Soledad Penadés](https://soledadpenades.com/)께 인사를 보냅니다), 우리는 우선 버퍼를 설정하기 위해 이전 섹션에서 설명된 표준 패턴을 따라야 합니다.

```js
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```

다음으로, 우리는 새로운 시각화 디스플레이를 준비하기 위해 캔버스 위에 이전에 그려진 것을 지웁니다.

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

우리는 이제 `draw()` 함수를 정의합니다:

```js
function draw() {
```

여기서, 우리는 드로잉 함수가 한 번 시작되면 계속 반복되도록 `requestAnimationFrame()`을 사용합니다.

```js
var drawVisual = requestAnimationFrame(draw);
```

다음으로, 우리는 시간 도메인 데이터를 배열에 복사합니다.

```js
analyser.getByteTimeDomainData(dataArray);
```

다음으로, 시작하기 위해 캔버스를 단색으로 채웁니다.

```js
canvasCtx.fillStyle = "rgb(200, 200, 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

우리가 그릴 파동에 대해 선의 굵기와 색상을 설정하고, 경로를 그리기 시작합니다.

```js
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0, 0, 0)";
canvasCtx.beginPath();
```

캔버스 너비를 (앞서 정의된 바와 같이 FrequencyBinCount와 동일한) 배열 길이로 나눔으로써 그려질 선의 각 부분의 너비를 결정하고, 선의 각 부분을 그리기 위해 이동할 위치를 정의하기 위해 x 변수를 정의합니다.

```js
var sliceWidth = (WIDTH * 1.0) / bufferLength;
var x = 0;
```

이제 배열로부터의 데이터 포인트 값에 기반한 특정한 높이에서의 버퍼의 각 부분에 대해 파동의 작은 부분의 위치를 정의하고, 다음 파동 부분이 그려질 지점까지 선을 이동하는 반복문을 실행합니다.

```js
for (var i = 0; i < bufferLength; i++) {
  var v = dataArray[i] / 128.0;
  var y = (v * HEIGHT) / 2;

  if (i === 0) {
    canvasCtx.moveTo(x, y);
  } else {
    canvasCtx.lineTo(x, y);
  }

  x += sliceWidth;
}
```

마지막으로, 우리는 캔버스의 우측 중앙에서 선을 끝내고, 우리가 정의한 획을 그립니다:

```js
      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };
```

코드의 이 섹션의 마지막에서, 우리는 전체 과정을 시작하기 위해 `draw()` 함수를 호출합니다:

```js
draw();
```

이것은 초당 수 차례 갱신되는 멋진 파형 디스플레이를 보여줍니다:

![오디오 신호의 파형을 보여주는 검은색 오실로스코프 선](wave.png)

## 주파수 막대 그래프 생성하기

제작할 또 다른 멋진 작은 사운드 시각화는 Winamp 스타일의 주파수 막대 그래프 중 하나입니다. 우리는 Voice-change-O-matic에서 이용 가능한 하나를 가지고 있습니다; 어떻게 이것이 완성되었는지를 살펴봅시다.

우선, 우리는 analyser와 데이터 배열을 다시 준비하고, `clearRect()`로 현재 캔버스 디스플레이를 지웁니다. 이전과 다른 유일한 점은 fft 사이즈를 더욱 작게 설정했다는 것입니다. 이것은 그래프에서 각각의 바가 얇은 가닥보다는 실제로 막대기처럼 보이기에 충분히 크도록 하기 위함입니다.

```js
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

다음으로, 우리는 표시된 데이터가 계속 업데이트되도록 `requestAnimationFrame()`으로 반복을 다시 설정하고, 각 애니메이션 프레임의 디스플레이를 지우며, `draw()` 함수를 시작시킵니다.

```js
    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

이제 우리는 `barWidth`를 막대기의 수 (버퍼 길이)로 나눠진 캔버스의 폭과 동일하게 설정합니다. 그러나, 우리는 또한 그 폭에 2.5를 곱하는데, 왜냐하면 우리가 매일 듣는 소리들의 대부분은 특정한 낮은 주파수 범위에 있으므로 대부분의 주파수들은 어떤 오디오도 가지고 있지 않은 채로 되돌아오기 때문입니다. 우리는 수많은 비어있는 막대기들을 표시하기 원하지 않으므로, 우리는 뚜렷한 높이에 자주 표시될 막대기들을 옮겨 그것들이 캔버스 디스플레이를 채우도록 합니다.

우리는 또한 `barHeight` 변수와, 현재 막대기를 그리기 위해 스크린이 얼마나 멀리 가로질러 떨어져 있는지를 기록하기 위해 `x` 변수를 설정합니다.

```js
var barWidth = (WIDTH / bufferLength) * 2.5;
var barHeight;
var x = 0;
```

이전과 같이, 우리는 이제 for 반복문을 시작해 `dataArray`의 각 값을 순회합니다. 각 값에 대해, 우리는 `barHeight`를 배열 값과 같게 만들고, 채울 색깔을 `barHeight`에 기반해 설정하고 (높을수록 밝습니다), 막대기를 캔버스를 `x` 픽셀 가로지른 곳에 그리는데, 이는 폭이 `barWidth`이고 높이는 `barHeight/2`입니다. (우리는 결국 막대기들이 캔버스에 더 잘 맞도록 각 막대기들을 반절로 자르기로 결정했습니다)

설명을 필요로 하는 하나의 값은 우리가 각 막대기를 그리는 수직 오프셋 위치인 `HEIGHT-barHeight/2`입니다. 제가 이것을 한 이유는, 만약 우리가 수직 위치를 0으로 설정했다면 각 막대기가 캔버스의 위에서부터 아래로 튀어나왔을 텐데, 제가 원한 것은 이게 아니라 막대기들이 아래에서부터 위로 튀어나오기를 원했기 때문입니다. 그러므로, 우리는 대신 매번 수직 위치를 캔버스의 높이 마이너스 `barHeight/2`를 하여, 각 막대기가 캔버스의 아래 도중에서부터, 아래에서 캔버스의 밑을 향해 그려질 것입니다.

```js
      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
      }
    };
```

다시, 코드의 마지막에서 우리는 전체 과정을 움직이게 만들기 위해 draw() 함수를 호출합니다.

```js
draw();
```

이 코드는 다음과 같은 결과를 보여줍니다:

![오디오 신호의 각각 다른 주파수들의 강도를 보여주는 막대 그래프의 일련의 붉은 색 막대들](bar-graph.png)

> **참고:** 이 글에서 언급된 예제들은 {{ domxref("AnalyserNode.getByteFrequencyData()") }} 와 {{ domxref("AnalyserNode.getByteTimeDomainData()") }}의 사용을 보여주었습니다. {{ domxref("AnalyserNode.getFloatFrequencyData()") }} 와 {{ domxref("AnalyserNode.getFloatTimeDomainData()") }}를 보여주는 작동 예제에 대해서는, [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) 데모 ([소스 코드](https://github.com/mdn/voice-change-o-matic-float-data) 도 확인할 수 있습니다) 를 참고하세요 — 이것은 unsigned 바이트 데이터가 아니라, Float 데이터를 사용한다는 것을 제외하면, 이것은 정확히 원래 [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/)와 똑같습니다.
