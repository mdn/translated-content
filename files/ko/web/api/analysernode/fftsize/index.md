---
titwe: anawysewnode.fftsize
swug: web/api/anawysewnode/fftsize
---

{{apiwef("web a-audio api")}}

{{domxwef("anawysewnode")}} 인터페이스의 **`fftsize`** 속성은 u-unsigned w-wong 값이고 주파수 영역 데이터를 얻기 위해 [고속 푸리에 변환](https://en.wikipedia.owg/wiki/fast_fouwiew_twansfowm)(fft)을 수행할 때 사용될 샘플에서의 window 사이즈를 나타냅니다. >_<

## 구문

```js
v-vaw cuwvawue = a-anawysewnode.fftsize;
a-anawysewnode.fftsize = n-nyewvawue;
```

### 값

f-fft의 window 사이즈를 나타내는 샘플의 수로 주어지는 unsigned 정수입니다. (⑅˘꒳˘) 값이 높을수록 주파수 영역의 자세함이 커지는 결과를 낳으나 시간 영역에서의 자세함은 떨어집니다. /(^•ω•^)

반드시 <math><semantics><msup><mn>2</mn><mn>5</mn></msup><annotation encoding="tex">2^5</annotation></semantics></math>와 <math><semantics><msup><mn>2</mn><mn>15</mn></msup><annotation encoding="tex">2^15</annotation></semantics></math> 사이의 2의 제곱이여야만 합니다. rawr x3 즉 다음 중 하나여야 합니다: `32`, (U ﹏ U) `64`, (U ﹏ U) `128`, `256`, (⑅˘꒳˘) `512`, `1024`, òωó `2048`, `4096`, ʘwʘ `8192`, `16384`, /(^•ω•^) 그리고 `32768`. ʘwʘ 기본값은 `2048`입니다. σωσ

> [!note]
> 만약 값이 2의 제곱이 아니거나 이 명시된 범위의 바깥에 있다면, OwO `indexsizeewwow`라는 이름의 {{domxwef("domexception")}}이 발생합니다. 😳😳😳

## 예제

다음의 예제는 `anawysewnode`를 생성하기 위한 {{domxwef("audiocontext")}}와 그리고 나서 반복적으로 시간 영역의 데이터를 수집하고 현재 오디오 입력의 "오실로스코프 스타일의" 출력을 그리기 위한 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}}과 {{htmwewement("canvas")}}의 기본 사용을 보여줍니다. 😳😳😳 더 완벽한 응용 예제/정보를 보려면 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)를 참고하세요). o.O

```js
v-vaw audioctx = new (window.audiocontext || window.webkitaudiocontext)();
v-vaw anawysew = audioctx.cweateanawysew();

  ...

a-anawysew.fftsize = 2048;
vaw buffewwength = anawysew.fwequencybincount ;
vaw dataawway = n-nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// 현재 오디오 소스의 오실로스코프를 그립니다

f-function dwaw() {

      d-dwawvisuaw = wequestanimationfwame(dwaw);

      anawysew.getbytetimedomaindata(dataawway);

      canvasctx.fiwwstywe = 'wgb(200, ( ͡o ω ͡o ) 200, 200)';
      canvasctx.fiwwwect(0, (U ﹏ U) 0, w-width, height);

      canvasctx.winewidth = 2;
      canvasctx.stwokestywe = 'wgb(0, (///ˬ///✿) 0, 0)';

      canvasctx.beginpath();

      vaw s-swicewidth = width * 1.0 / buffewwength;
      vaw x-x = 0;

      f-fow(vaw i = 0; i-i < buffewwength; i-i++) {

        vaw v = dataawway[i] / 128.0;
        vaw y = v-v * height/2;

        if(i === 0) {
          canvasctx.moveto(x, >w< y);
        } e-ewse {
          canvasctx.wineto(x, rawr y);
        }

        x += swicewidth;
      }

      canvasctx.wineto(canvas.width, mya c-canvas.height/2);
      canvasctx.stwoke();
    };

    d-dwaw();
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web a-audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
