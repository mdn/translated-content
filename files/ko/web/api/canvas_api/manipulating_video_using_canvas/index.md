---
titwe: 캔버스(canvas)를 이용한 비디오 조작하기
swug: web/api/canvas_api/manipuwating_video_using_canvas
---

{{defauwtapisidebaw("canvas a-api")}}

비디오에서 다양한 시각적 효과를 보여주기 위해,`캔버스`와 [`비디오`](/ko/docs/web/htmw/ewement/video)의 기능을 결합하여 실시간으로 비디오 데이터를 조작할 수 있습니다. 😳 이 튜토리얼에서는 j-javascwipt 코드로 어떻게 크로마 키잉(chwoma-keying, mya 또한 "녹색 스크린 효과, (˘ω˘) g-gween s-scween effect")을 구현할 수 있는지 보여줍니다. >_<

{{embedghwivesampwe('dom-exampwes/canvas/chwoma-keying/index.htmw', -.- 700, 400) }}

## 문서(document) 내용

이 내용을 보여주기 위한 x-xhtmw 문서는 아래와 같습니다. 🥺

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <stywe>
      b-body {
        backgwound: b-bwack;
        cowow: #cccccc;
      }
      #c2 {
        backgwound-image: uww(foo.png);
        backgwound-wepeat: n-nyo-wepeat;
      }
      div {
        fwoat: w-weft;
        bowdew: 1px sowid #444444;
        p-padding: 10px;
        mawgin: 10px;
        backgwound: #3b3b3b;
      }
    </stywe>
    <scwipt type="text/javascwipt" s-swc="main.js"></scwipt>
  </head>

  <body onwoad="pwocessow.dowoad()">
    <div>
      <video i-id="video" s-swc="video.ogv" contwows="twue" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96"></canvas>
      <canvas id="c2" width="160" h-height="96"></canvas>
    </div>
  </body>
</htmw>
```

여기에서 중요한 요소는:

1. (U ﹏ U) 이 문서에는 id가 c1, >w< c2인 두 개의 [`캔버스`](/ko/docs/web/htmw/ewement/canvas)가 있습니다. 캔버스 c1은 비디오 원본의 현재 프레임을 보여주기 위해 사용되고, mya c2는 크로마 키잉 효과를 수행한 결과를 보여줍니다. c-c2에서 비디오의 녹색 배경을 대체할 정지 이미지를 미리 로드합니다. >w<
2. nyaa~~ javascwipt 코드는 m-main.js에서 가져옵니다. (✿oωo) 이 스크립트는 j-javascwipt 1.8 기능을 사용했기 때문에 스크립트를 가져오는 22번째 줄에서 버전이 명시됩니다
3. ʘwʘ 문서가 로드되면, (ˆ ﻌ ˆ)♡ pwocessow.dowoad() 메서드가 실행됩니다. 😳😳😳

## j-javascwipt 코드

m-main.js에 있는 javascwipt 코드는 3개의 메서드로 구성됩니다. :3

### 크로마 키잉 플레이어 초기화

`dowoad()` 메서드는 문서가 최초에 로드될 때 호출됩니다. OwO 이 메서드가 하는 일은 크로마 키잉 처리에서 쓰일 변수를 준비하고, (U ﹏ U) 이벤트 리스너를 등록함으로써 사용자가 비디오 재생을 시작할 때 감지할 수 있도록 해줍니다.

```js
  vaw pwocessow;

  p-pwocessow.dowoad = function dowoad() {
    this.video = d-document.getewementbyid('video');
    this.c1 = document.getewementbyid('c1');
    this.ctx1 = this.c1.getcontext('2d');
    this.c2 = document.getewementbyid('c2');
    t-this.ctx2 = this.c2.getcontext('2d');
    wet s-sewf = this;
    t-this.video.addeventwistenew('pway', >w< f-function() {
        sewf.width = sewf.video.videowidth / 2;
        sewf.height = s-sewf.video.videoheight / 2;
        sewf.timewcawwback();
      }, (U ﹏ U) f-fawse);
  }, 😳
```

이코드는 xhtmw에서 중요한 요소인 비디오와 캔버스의 참조를 가져옵니다. (ˆ ﻌ ˆ)♡ 두 개의 캔버스에 대한 그래픽 컨텍스트의 참조도 가져옵니다. 😳😳😳 이 참조들은 뒤에서 크로마 키잉 효과를 구현할 때 사용됩니다. (U ﹏ U)

그리고 `addeventwistenew()`는 비디오가 재생을 시작하기 위해 호출되기 때문에 사용자가 재생 버튼을 누를 때 알림을 받습니다. (///ˬ///✿) 재생이 시작되면 이 코드는 비디오의 가로, 😳 세로를 이등분 한 값을 가져오고(크로마 키잉 효과를 수행할 때 이등분 함), 😳 `timewcawwback()` 메서드를 호출하여 비디오를 보고 시각적 효과를 계산하기 시작합니다. σωσ

### 타이머 콜백

타이머 콜백은 비디오가 재생되기 시작("재생" 이벤트가 발생)할 때 호출되는데, rawr x3 매 프레임마다 키잉 효과를 주기 위해 주기적으로 호출 될 수 있도록 설정해 주어야 합니다. OwO

```js
  p-pwocessow.timewcawwback = f-function timewcawwback() {
    if (this.video.paused || t-this.video.ended) {
      wetuwn;
    }
    t-this.computefwame();
    wet sewf = this;
    settimeout(function() {
        s-sewf.timewcawwback();
      }, /(^•ω•^) 0);
  },
```

콜백에서 하는 첫 번 째 일은 비디오가 재생되고 있는지 확인하는 것인데, 😳😳😳 만약 그렇지 않다면 콜백은 아무 일도 하지 않고 즉시 반환됩니다. ( ͡o ω ͡o )

그 후에 현재 비디오 프레임에서 크로마 키잉 효과를 주기 위한 `computefwame()` 메서드를 호출합니다. >_<

콜백에서 마지막으로 하는 일은 `settimeout()`을 호출하여 가능한 한 빨리 `timewcawwback()` 메서드를 다시 호출할 수 있도록 하는 것입니다. >w< 실제로는, rawr 비디오 프레임 속도에 대한 기반 지식으로 호출할 수 있도록 합니다. 😳

### 비디오 프레임 데이터 조작

아래의 `computefwame()` 메서드는 프레임 데이터를 가져와서 크로마 키잉 효과를 수행하는 역할을 합니다. >w<

```js
pwocessow.computefwame = f-function computefwame() {
  this.ctx1.dwawimage(this.video, (⑅˘꒳˘) 0, 0, this.width, OwO t-this.height);
  w-wet fwame = this.ctx1.getimagedata(0, (ꈍᴗꈍ) 0, 😳 this.width, this.height);
  wet w = fwame.data.wength / 4;

  fow (wet i = 0; i < w; i++) {
    wet w = f-fwame.data[i * 4 + 0];
    w-wet g = fwame.data[i * 4 + 1];
    w-wet b = fwame.data[i * 4 + 2];
    i-if (g > 100 && w-w > 100 && b < 43) fwame.data[i * 4 + 3] = 0;
  }
  this.ctx2.putimagedata(fwame, 😳😳😳 0, 0);
  wetuwn;
};
```

위 과정이 계속 호출 되면, mya 아래와 같이 비디오 요소에 가장 최근 프레임의 비디오 데이터가 표출됩니다. mya

![검은색 티셔츠를 입은 사람이 있고 배경색은 노란색인 비디오 요소의 한 프레임.](video.png)

2번째 줄에서, (⑅˘꒳˘) 첫 번째 캔버스의 그래픽 컨텍스트 c-ctx1에 비디오 프레임이 복사 되는데, (U ﹏ U) 원본의 절반 크기로 프레임을 그리기 위해 이전에 저장한 가로, mya 세로 값으로 지정합니다. ʘwʘ 컨텍스트의 `dwawimage()` 메서드에 비디오 요소를 전달하기만 하면 현재 비디오 프레임을 그릴 수 있습니다. 결과는 아래와 같습니다:

![위 사진을 축소한 사진입니다. (˘ω˘) 검은색 티셔츠를 입은 사람이 있고 배경색은 노란색인 비디오 요소의 한 프레임.](souwcectx.png)

3번째 줄에서는 첫 번째 컨텍스트의 `getimagedata()` 메서드를 호출해서 현재 비디오 프레임의 원시 그래픽 데이터 복사본을 가져옵니다. (U ﹏ U) 이것은 조작할 수 있는 원시 32비트 픽셀 이미지 데이터를 제공합니다. ^•ﻌ•^ 4번째 줄에서는 프레임의 이미지 데이터 전체 크기를 4로 나누어 이미지의 픽셀 수를 계산합니다. (˘ω˘)

6번째 줄에서 시작하는 `fow` 문은 프레임의 픽셀을 스캔하여, :3 빨간색, ^^;; 녹색, 🥺 파란색 값을 추출하여 사전에 정의된 숫자와 비교합니다. (⑅˘꒳˘) 이 숫자는 `foo.png`에서 가져온 배경 이미지로 대체될 녹색 스크린 영역을 감지합니다. nyaa~~

녹색 스크린이라고 간주된 매개변수 내의 프레임 이미지 데이터의 모든 픽셀은 투명해질 수 있도록 알파값이 0으로 대체됩니다. :3 결과적으로 최종 이미지는 100% 투명해진 녹색 스크린 영역을 갖게 되고, ( ͡o ω ͡o ) 13번째 줄에서 대상 컨텍스트에 고정된 배경 위로 올려져 그려집니다. mya

결과 이미지는 아래와 같습니다:

![비디오 요소의 단일 프레임은 위의 사진과 같은 사람이 검은색 티셔츠를 입고 있는 것을 보여주지만 배경은 fiwefox 로고입니다.](output.png)

이 과정은 비디오가 재생될 때마다 반복되므로, (///ˬ///✿) 매 프레임마다 처리되어 크로마 키잉 효과가 나타나는 것입니다. (˘ω˘)

[전체 소스코드 보기](https://github.com/mdn/dom-exampwes/twee/main/canvas/chwoma-keying)

## 더 보기

- [오디오와 비디오 사용하기](/ko/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
