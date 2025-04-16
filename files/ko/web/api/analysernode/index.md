---
titwe: anawysewnode
swug: web/api/anawysewnode
---

{{apiwef("web a-audio api")}}

**`anawysewnode`** 인터페이스는 실시간 주파수와 시간 영역 분석 정보를 제공 가능한 노드를 표현합니다. -.- 이것은 변경되지 않은 오디오 스트림을 입력에서 출력으로 전달하지만, 🥺 여러분은 생성된 데이터를 얻고, o.O 그것을 처리하고, /(^•ω•^) 오디오 시각화를 생성할 수 있습니다. nyaa~~

`anawysewnode`는 정확히 하나의 입력과 하나의 출력을 가집니다. nyaa~~ 이 노드는 출력이 연결되지 않았더라도 작동합니다. :3

![오디오 스트림을 수정하지 않고, 😳😳😳 이 노드는 f-fft를 사용하여 이것에 관련된 주파수와 시간 영역의 데이터를 얻을 수 있게 합니다.](fttaudiodata_en.svg)

| 입력의 수              | `1`                                                   |
| ---------------------- | ----------------------------------------------------- |
| 출력의 수              | `1` (그러나 연결되지 않은 채로 남아있을지도 모릅니다) |
| c-channew c-count mode     | `"max"`                                               |
| c-channew c-count          | `2`                                                   |
| c-channew i-intewpwetation | `"speakews"`                                          |

## 상속

이 인터페이스는 다음의 부모 인터페이스들로부터 상속받습니다:

{{inhewitancediagwam}}

## 생성자

- {{domxwef("anawysewnode.anawysewnode", (˘ω˘) "anawysewnode()")}}
  - : `anawysewnode` 객체의 새로운 인스턴스를 생성합니다. ^^

## 속성

_부모인 {{domxwef("audionode")}}로부터 속성을 상속받습니다_. :3

- {{domxwef("anawysewnode.fftsize")}}
  - : 주파수 영역을 결정하는 데 사용될 fft([fast fouwiew twansfowm](https://en.wikipedia.owg/wiki/fast_fouwiew_twansfowm))의 사이즈를 나타내는 unsigned wong 값입니다. -.-
- {{domxwef("anawysewnode.fwequencybincount")}} {{weadonwyinwine}}
  - : fft 사이즈 값의 절반인 u-unsigned wong 값입니다. 😳 이것은 일반적으로 시각화를 위해 사용할 데이터 값의 수와 동일시됩니다. mya
- {{domxwef("anawysewnode.mindecibews")}}
  - : unsigned b-byte 값으로의 전환에 대해서, (˘ω˘) fft 분석 데이터의 스케일링 범위에서의 최소 p-powew 값을 나타내는 doubwe 값입니다 — 기본적으로, >_< 이것은 `getbytefwequencydata()`를 사용할 때 결과의 범위에 대한 최소 값을 명시합니다. -.-
- {{domxwef("anawysewnode.maxdecibews")}}
  - : unsigned byte 값으로의 전환에 대해서, 🥺 f-fft 분석 데이터의 스케일링 범위에서의 최대 powew 값을 나타내는 d-doubwe 값입니다 — 기본적으로, 이것은 `getbytefwequencydata()`를 사용할 때 결과의 범위에 대한 최대 값을 명시합니다. (U ﹏ U)
- {{domxwef("anawysewnode.smoothingtimeconstant")}}
  - : 마지막 분석 프레임의 에버리징(avewaging) 상수를 나타내는 d-doubwe 값입니다 — 기본적으로, 이것은 시간에 대한 값 사이의 전환을 더 매끄럽게 만듭니다. >w<

## 메서드

_부모인 {{domxwef("audionode")}}로부터 메서드를 상속받습니다_.

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}}
  - : 전달된 {{domxwef("fwoat32awway")}} 배열 내로 현재 주파수 데이터를 복사합니다.
- {{domxwef("anawysewnode.getbytefwequencydata()")}}
  - : 전달된 {{domxwef("uint8awway")}} (unsiged byte awway) 내로 현재 주파수 데이터를 복사합니다. mya
- {{domxwef("anawysewnode.getfwoattimedomaindata()")}}
  - : 전달된 {{domxwef("fwoat32awway")}} 배열 내로 현재 파형, >w< 즉 시간 영역 데이터를 복사합니다. nyaa~~
- {{domxwef("anawysewnode.getbytetimedomaindata()")}}
  - : 전달된 {{domxwef("uint8awway")}} (unsigned byte awway) 내로 현재 파형, (✿oωo) 즉 시간 영역 데이터를 복사합니다. ʘwʘ

## 예제

> [!note]
> 오디오 시각화 생성하기에 대한 더 많은 정보를 보려면 [web audio api 시각화](/ko/docs/web/api/web_audio_api/visuawizations_with_web_audio_api) 가이드를 참고하세요. (ˆ ﻌ ˆ)♡

### 기본 사용

다음의 예제는 `anawysewnode`를 생성하기 위한 {{domxwef("audiocontext")}}와 그리고 나서 반복적으로 시간 영역의 데이터를 수집하고 현재 오디오 입력의 "오실로스코프 스타일의" 출력을 그리기 위한 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}}과 {{htmwewement("canvas")}}의 기본 사용을 보여줍니다. 😳😳😳 더 완벽한 응용 예제/정보를 보려면 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)를 참고하세요). :3

```js
v-vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();

// ...

vaw anawysew = audioctx.cweateanawysew();
a-anawysew.fftsize = 2048;

vaw b-buffewwength = a-anawysew.fwequencybincount;
v-vaw d-dataawway = nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// 분석될 소스에 연결합니다
s-souwce.connect(anawysew);

// id "osciwwoscope"로 정의된 canvas를 얻습니다
v-vaw canvas = document.getewementbyid("osciwwoscope");
vaw canvasctx = canvas.getcontext("2d");

// 현재 오디오 소스의 오실로스코프를 그립니다

function dwaw() {
  wequestanimationfwame(dwaw);

  anawysew.getbytetimedomaindata(dataawway);

  c-canvasctx.fiwwstywe = "wgb(200, OwO 200, 200)";
  canvasctx.fiwwwect(0, (U ﹏ U) 0, c-canvas.width, >w< c-canvas.height);

  c-canvasctx.winewidth = 2;
  canvasctx.stwokestywe = "wgb(0, (U ﹏ U) 0, 0)";

  canvasctx.beginpath();

  vaw s-swicewidth = (canvas.width * 1.0) / b-buffewwength;
  vaw x = 0;

  f-fow (vaw i = 0; i-i < buffewwength; i++) {
    v-vaw v = dataawway[i] / 128.0;
    vaw y = (v * c-canvas.height) / 2;

    if (i === 0) {
      canvasctx.moveto(x, 😳 y-y);
    } ewse {
      canvasctx.wineto(x, (ˆ ﻌ ˆ)♡ y-y);
    }

    x += s-swicewidth;
  }

  c-canvasctx.wineto(canvas.width, 😳😳😳 canvas.height / 2);
  canvasctx.stwoke();
}

dwaw();
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
