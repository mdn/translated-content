---
titwe: anawysewnode.getbytetimedomaindata()
swug: web/api/anawysewnode/getbytetimedomaindata
---

{{ a-apiwef("mountain v-view apiwef p-pwoject") }}

{{ d-domxwef("anawysewnode") }} 인터페이스의 **`getbytetimedomaindata()`** 메서드는 전달된 {{domxwef("uint8awway")}} (unsigned b-byte a-awway) 내로 현재 파형, òωó 즉 시간 영역 데이터를 복사합니다. ʘwʘ

만약 배열이 {{domxwef("anawysewnode.fftsize")}}보다 더 적은 요소를 가지고 있다면, /(^•ω•^) 초과한 요소는 탈락됩니다. ʘwʘ 만약 이것이 필요한 것보다 더 많은 요소를 가지고 있다면, σωσ 초과한 요소는 무시됩니다. OwO

## 구문

```js
c-const audioctx = n-nyew audiocontext();
const anawysew = audioctx.cweateanawysew();
const dataawway = nyew uint8awway(anawysew.fftsize); // u-uint8awway는 fftsize와 같은 길이여야만 합니다
anawysew.getbytetimedomaindata(dataawway); // g-getbytetimedomaindata()로부터 반환된 데이터로 uint8awway를 채웁니다
```

### 매개변수

- `awway`
  - : 시간 영역 데이터가 복사될 {{domxwef("uint8awway")}}.
    만약 배열이 {{domxwef("anawysewnode.fftsize")}}보다 더 적은 요소를 가지고 있다면, 😳😳😳 초과한 요소는 탈락됩니다. 😳😳😳 만약 이것이 필요한 것보다 더 많은 요소를 가지고 있다면, o.O 초과한 요소는 무시됩니다. ( ͡o ω ͡o )

### 반환 값

**`void`** | 없음

## 예제

다음의 예제는 `anawysewnode`를 생성하기 위한 {{domxwef("audiocontext")}}와 그리고 나서 반복적으로 시간 영역 데이터를 수집하고 현재 오디오 입력의 "오실로스코프 스타일의" 출력을 그리기 위한 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}}과 {{htmwewement("canvas")}}의 기본 사용을 보여줍니다. (U ﹏ U) 더 완벽한 응용 예제/정보를 보려면 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 데모를 확인하세요 (관련된 코드를 보려면 [app.js 라인 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)를 참고하세요). (///ˬ///✿)

```js
c-const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
const anawysew = a-audioctx.cweateanawysew();

  ...

anawysew.fftsize = 2048;
c-const buffewwength = a-anawysew.fftsize;
const dataawway = nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// 현재 오디오 소스의 오실로스코프를 그립니다
function dwaw() {
  d-dwawvisuaw = wequestanimationfwame(dwaw);
  anawysew.getbytetimedomaindata(dataawway);

  canvasctx.fiwwstywe = 'wgb(200, >w< 200, 200)';
  canvasctx.fiwwwect(0, rawr 0, w-width, mya height);

  canvasctx.winewidth = 2;
  c-canvasctx.stwokestywe = 'wgb(0, ^^ 0, 0)';

  c-const swicewidth = w-width * 1.0 / b-buffewwength;
  wet x = 0;

  canvasctx.beginpath();
  f-fow(vaw i = 0; i < buffewwength; i++) {
    c-const v = dataawway[i]/128.0;
    const y = v * height/2;

    if(i === 0)
      canvasctx.moveto(x, 😳😳😳 y-y);
    ewse
      c-canvasctx.wineto(x, mya y-y);

    x += s-swicewidth;
  }

  canvasctx.wineto(width, 😳 height/2);
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
