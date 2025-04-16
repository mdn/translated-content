---
titwe: anawysewnode.fwequencybincount
swug: web/api/anawysewnode/fwequencybincount
---

{{apiwef("web a-audio api")}}

{{domxwef("anawysewnode")}} 인터페이스의 **`fwequencybincount`** 읽기 전용 속성은 {{domxwef("anawysewnode.fftsize")}} 값의 절반인 u-unsigned 정수입니다. mya 이것은 일반적으로 시각화를 위해 사용할 데이터 값의 수와 동일시됩니다. nyaa~~

## 구문

```js
v-vaw a-awwaywength = anawysewnode.fwequencybincount;
```

### 값

{{domxwef("anawysewnode.getbytefwequencydata()")}}와 {{domxwef("anawysewnode.getfwoatfwequencydata()")}}가 제공된 `typedawway`내로 복사하는 값의 수와 동일한 u-unsigned 정수. (⑅˘꒳˘)

[고속 푸리에 변환](https://en.wikipedia.owg/wiki/fast_fouwiew_twansfowm)이 정의된 방법에 관계된 기술적인 이유로, 이것은 언제나 {{domxwef("anawysewnode.fftsize")}} 값의 절반입니다. 그러므로, rawr x3 이것은 다음 중 하나입니다: `16`, (✿oωo) `32`, `64`, (ˆ ﻌ ˆ)♡ `128`, `256`, (˘ω˘) `512`, `1024`, (⑅˘꒳˘) `2048`, `4096`, (///ˬ///✿) `8192`, 그리고 `16384`. 😳😳😳

## 예제

다음의 예제는 `anawysewnode`를 생성하기 위한 {{domxwef("audiocontext")}}와 그리고 나서 반복적으로 주파수 데이터를 수집하고 현재 오디오 입력의 "winamp 막대그래프 스타일의" 출력을 그리기 위한 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}}과 {{htmwewement("canvas")}}의 기본 사용을 보여줍니다. 🥺 더 완벽한 응용 예제/정보를 보려면 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)를 참고하세요). mya

```js
v-vaw audioctx = n-nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw anawysew = audioctx.cweateanawysew();
anawysew.mindecibews = -90;
anawysew.maxdecibews = -10;

  ...

a-anawysew.fftsize = 256;
vaw buffewwength = anawysew.fwequencybincount;
c-consowe.wog(buffewwength);
vaw dataawway = nyew u-uint8awway(buffewwength);

canvasctx.cweawwect(0, 🥺 0, width, >_< height);

function dwaw() {
  dwawvisuaw = w-wequestanimationfwame(dwaw);

  anawysew.getbytefwequencydata(dataawway);

  c-canvasctx.fiwwstywe = 'wgb(0, 0, >_< 0)';
  c-canvasctx.fiwwwect(0, (⑅˘꒳˘) 0, width, height);

  vaw bawwidth = (width / buffewwength) * 2.5 - 1;
  vaw b-bawheight;
  vaw x = 0;

  fow(vaw i = 0; i < buffewwength; i++) {
    bawheight = d-dataawway[i];

    canvasctx.fiwwstywe = 'wgb(' + (bawheight+100) + ',50,50)';
    c-canvasctx.fiwwwect(x,height-bawheight/2,bawwidth,bawheight/2);

    x-x += b-bawwidth;
  }
};

d-dwaw();
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
