---
title: 캔버스(canvas)를 이용한 비디오 조작하기
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
---

{{DefaultAPISidebar("Canvas API")}}

비디오에서 다양한 시각적 효과를 보여주기 위해,`캔버스`와 [`비디오`](/ko/docs/Web/HTML/Element/Video)의 기능을 결합하여 실시간으로 비디오 데이터를 조작할 수 있습니다. 이 튜토리얼에서는 자바스크립트 코드로 어떻게 크로마 키잉(chroma-keying, 또한 "녹색 스크린 효과, green screen effect")을 구현할 수 있는지 보여줍니다.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## 문서(document) 내용

이 내용을 보여주기 위한 XHTML 문서는 아래와 같습니다.

```html
<!doctype html>
<html>
  <head>
    <style>
      body {
        background: black;
        color: #cccccc;
      }
      #c2 {
        background-image: url(foo.png);
        background-repeat: no-repeat;
      }
      div {
        float: left;
        border: 1px solid #444444;
        padding: 10px;
        margin: 10px;
        background: #3b3b3b;
      }
    </style>
    <script type="text/javascript" src="main.js"></script>
  </head>

  <body onload="processor.doLoad()">
    <div>
      <video id="video" src="video.ogv" controls="true" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96"></canvas>
      <canvas id="c2" width="160" height="96"></canvas>
    </div>
  </body>
</html>
```

여기에서 중요한 요소는:

1. 이 문서에는 ID가 c1, c2인 두 개의 [`캔버스`](/ko/docs/Web/HTML/Element/canvas)가 있습니다. 캔버스 c1은 비디오 원본의 현재 프레임을 보여주기 위해 사용되고, c2는 크로마 키잉 효과를 수행한 결과를 보여줍니다. c2에서 비디오의 녹색 배경을 대체할 정지 이미지를 미리 로드합니다.
2. 자바스크립트 코드는 main.js에서 가져옵니다. 이 스크립트는 자바스크립트 1.8 기능을 사용했기 때문에 스크립트를 가져오는 22번째 줄에서 버전이 명시됩니다
3. 문서가 로드되면, processor.doLoad() 메서드가 실행됩니다.

## 자바스크립트 코드

main.js에 있는 자바스크립트 코드는 3개의 메서드로 구성됩니다.

### 크로마 키잉 플레이어 초기화

`doLoad()` 메서드는 문서가 최초에 로드될 때 호출됩니다. 이 메서드가 하는 일은 크로마 키잉 처리에서 쓰일 변수를 준비하고, 이벤트 리스너를 등록함으로써 사용자가 비디오 재생을 시작할 때 감지할 수 있도록 해줍니다.

```js
  var processor;

  processor.doLoad = function doLoad() {
    this.video = document.getElementById('video');
    this.c1 = document.getElementById('c1');
    this.ctx1 = this.c1.getContext('2d');
    this.c2 = document.getElementById('c2');
    this.ctx2 = this.c2.getContext('2d');
    let self = this;
    this.video.addEventListener('play', function() {
        self.width = self.video.videoWidth / 2;
        self.height = self.video.videoHeight / 2;
        self.timerCallback();
      }, false);
  },
```

이코드는 XHTML에서 중요한 요소인 비디오와 캔버스의 참조를 가져옵니다. 두 개의 캔버스에 대한 그래픽 컨텍스트의 참조도 가져옵니다. 이 참조들은 뒤에서 크로마 키잉 효과를 구현할 때 사용됩니다.

그리고 `addEventListener()`는 비디오가 재생을 시작하기 위해 호출되기 때문에 사용자가 재생 버튼을 누를 때 알림을 받습니다. 재생이 시작되면 이 코드는 비디오의 가로, 세로를 이등분 한 값을 가져오고(크로마 키잉 효과를 수행할 때 이등분 함), `timerCallback()` 메서드를 호출하여 비디오를 보고 시각적 효과를 계산하기 시작합니다.

### 타이머 콜백

타이머 콜백은 비디오가 재생되기 시작("재생" 이벤트가 발생)할 때 호출되는데, 매 프레임마다 키잉 효과를 주기 위해 주기적으로 호출 될 수 있도록 설정해 주어야 합니다.

```js
  processor.timerCallback = function timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    let self = this;
    setTimeout(function() {
        self.timerCallback();
      }, 0);
  },
```

콜백에서 하는 첫 번 째 일은 비디오가 재생되고 있는지 확인하는 것인데, 만약 그렇지 않다면 콜백은 아무 일도 하지 않고 즉시 반환됩니다.

그 후에 현재 비디오 프레임에서 크로마 키잉 효과를 주기 위한 `computeFrame()` 메서드를 호출합니다.

콜백에서 마지막으로 하는 일은 `setTimeout()`을 호출하여 가능한 한 빨리 `timerCallback()` 메서드를 다시 호출할 수 있도록 하는 것입니다. 실제로는, 비디오 프레임 속도에 대한 기반 지식으로 호출할 수 있도록 합니다.

### 비디오 프레임 데이터 조작

아래의 `computeFrame()` 메서드는 프레임 데이터를 가져와서 크로마 키잉 효과를 수행하는 역할을 합니다.

```js
processor.computeFrame = function computeFrame() {
  this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
  let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
  let l = frame.data.length / 4;

  for (let i = 0; i < l; i++) {
    let r = frame.data[i * 4 + 0];
    let g = frame.data[i * 4 + 1];
    let b = frame.data[i * 4 + 2];
    if (g > 100 && r > 100 && b < 43) frame.data[i * 4 + 3] = 0;
  }
  this.ctx2.putImageData(frame, 0, 0);
  return;
};
```

위 과정이 계속 호출 되면, 아래와 같이 비디오 요소에 가장 최근 프레임의 비디오 데이터가 표출됩니다.

![검은색 티셔츠를 입은 사람이 있고 배경색은 노란색인 비디오 요소의 한 프레임.](video.png)

2번째 줄에서, 첫 번째 캔버스의 그래픽 컨텍스트 ctx1에 비디오 프레임이 복사 되는데, 원본의 절반 크기로 프레임을 그리기 위해 이전에 저장한 가로, 세로 값으로 지정합니다. 컨텍스트의 `drawImage()` 메서드에 비디오 요소를 전달하기만 하면 현재 비디오 프레임을 그릴 수 있습니다. 결과는 아래와 같습니다:

![위 사진을 축소한 사진입니다. 검은색 티셔츠를 입은 사람이 있고 배경색은 노란색인 비디오 요소의 한 프레임.](sourcectx.png)

3번째 줄에서는 첫 번째 컨텍스트의 `getImageData()` 메서드를 호출해서 현재 비디오 프레임의 원시 그래픽 데이터 복사본을 가져옵니다. 이것은 조작할 수 있는 원시 32비트 픽셀 이미지 데이터를 제공합니다. 4번째 줄에서는 프레임의 이미지 데이터 전체 크기를 4로 나누어 이미지의 픽셀 수를 계산합니다.

6번째 줄에서 시작하는 `for` 문은 프레임의 픽셀을 스캔하여, 빨간색, 녹색, 파란색 값을 추출하여 사전에 정의된 숫자와 비교합니다. 이 숫자는 `foo.png`에서 가져온 배경 이미지로 대체될 녹색 스크린 영역을 감지합니다.

녹색 스크린이라고 간주된 매개변수 내의 프레임 이미지 데이터의 모든 픽셀은 투명해질 수 있도록 알파값이 0으로 대체됩니다. 결과적으로 최종 이미지는 100% 투명해진 녹색 스크린 영역을 갖게 되고, 13번째 줄에서 대상 컨텍스트에 고정된 배경 위로 올려져 그려집니다.

결과 이미지는 아래와 같습니다:

![비디오 요소의 단일 프레임은 위의 사진과 같은 사람이 검은색 티셔츠를 입고 있는 것을 보여주지만 배경은 Firefox 로고입니다.](output.png)

이 과정은 비디오가 재생될 때마다 반복되므로, 매 프레임마다 처리되어 크로마 키잉 효과가 나타나는 것입니다.

[전체 소스코드 보기](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying)

## 더 보기

- [오디오와 비디오 사용하기](/ko/docs/Web/Guide/HTML/Using_HTML5_audio_and_video)
