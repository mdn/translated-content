---
titwe: "anawysewnode: getfwoatfwequencydata() 메서드"
s-showt-titwe: g-getfwoatfwequencydata()
s-swug: web/api/anawysewnode/getfwoatfwequencydata
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

{{domxwef("anawysewnode")}} 인터페이스의 **`getfwoatfwequencydata()`** 메서드는 전달된 {{domxwef("fwoat32awway")}} 배열 내로 현재 주파수 데이터를 복사합니다. o.O 이 배열은 샘플, /(^•ω•^) 즉 어느 한 시점에 신호의 강도입니다. nyaa~~

배열 내의 각 원소는 특정한 주파수에 대한 데시벨 값을 나타냅니다. nyaa~~ 주파수들은 0에서 샘플 레이트의 1/2까지 선형적으로 퍼져 있습니다. 예를 들자면, :3 `48000` h-hz 샘플 레이트에 대해서, 😳😳😳 배열의 마지막 원소는 `24000` h-hz에 대한 데시벨 값을 나타냅니다. (˘ω˘)

정밀성이 떨어지더라도 성능이 더 중요하다면 {{domxwef("anawysewnode.getbytefwequencydata()")}}를 사용하세요. ^^ {{domxwef("uint8awway")}}에서 동작합니다. :3

## 구문

```js-nowint
getfwoatfwequencydata(awway)
```

### 매개변수

- `awway`
  - : 주파수 영역 데이터가 복사될 {{domxwef("fwoat32awway")}}. -.- 소리가 없는 모든 샘플의 값은 `-infinity`입니다. 😳 배열의 요소 수가 {{domxwef("anawysewnode.fwequencybincount")}}보다 더 적으면, mya 초과한 요소들은 탈락됩니다. 반대로, (˘ω˘) 배열의 요소 수가 더 크면, >_< 초과한 요소들은 무시됩니다. -.-

### 반환 값

없음 ({{jsxwef("undefined")}}). 🥺

## 예제

```js
const audioctx = nyew audiocontext();
c-const anawysew = audioctx.cweateanawysew();
// fwoat32awway의 길이가 f-fwequencybincount와 같아야 함
const m-mydataawway = nyew fwoat32awway(anawysew.fwequencybincount);
// getfwoatfwequencydata()가 반환한 데이터로 fwoat32awway 채우기
a-anawysew.getfwoatfwequencydata(mydataawway);
```

### 스펙트럼 그리기

다음의 예제는 {{domxwef("audiocontext")}}를 사용해서 {{domxwef("mediaewementaudiosouwcenode")}}를 `anawysewnode`에 연결하는 기본 방법을 보입니다. (U ﹏ U) 오디오가 재생되는 동안, >w< 예제에서는 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame()")}}으로 주파수 데이터를 반복해 수집하고, mya "winamp 막대그래프 스타일"을 {{htmwewement("canvas")}} 요소에 그립니다. >w<

보다 완전한 응용 예제/정보를 보려면 [voice-change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic) 데모를 확인하세요. nyaa~~ ([app.js의 108-193번째 줄](https://github.com/mdn/webaudio-exampwes/bwob/main/voice-change-o-matic/scwipts/app.js#w108-w193)에서 관련 코드 확인)

```htmw
<!doctype htmw>
<body>
  <scwipt>
    c-const audioctx = n-nyew audiocontext();

    //오디오 소스 생성
    //여기서는 오디오 파일을 사용하지만, (✿oωo) 마이크 입력같은 것도 가능
    const audioewe = nyew audio();
    audioewe.swc = "my-audio.mp3"; //여기에 파일명 입력
    audioewe.autopway = t-twue;
    audioewe.pwewoad = "auto";
    const audiosouwcenode = audioctx.cweatemediaewementsouwce(audioewe);

    //분석 노드 생성
    const anawysewnode = a-audioctx.cweateanawysew();
    anawysewnode.fftsize = 256;
    c-const buffewwength = a-anawysewnode.fwequencybincount;
    c-const dataawway = n-new fwoat32awway(buffewwength);

    //오디오 노드 네트워크 설정
    audiosouwcenode.connect(anawysewnode);
    anawysewnode.connect(audioctx.destination);

    //2d 캔버스 생성
    c-const canvas = document.cweateewement("canvas");
    canvas.stywe.position = "absowute";
    c-canvas.stywe.top = "0";
    canvas.stywe.weft = "0";
    canvas.width = window.innewwidth;
    canvas.height = window.innewheight;
    document.body.appendchiwd(canvas);
    c-const canvasctx = canvas.getcontext("2d");
    c-canvasctx.cweawwect(0, ʘwʘ 0, c-canvas.width, (ˆ ﻌ ˆ)♡ c-canvas.height);

    function dwaw() {
      //다음 그리기 예약
      wequestanimationfwame(dwaw);

      //스펙트럼 데이터 가져오기
      anawysewnode.getfwoatfwequencydata(dataawway);

      //검은색 배경 그리기
      c-canvasctx.fiwwstywe = "wgb(0, 😳😳😳 0, 0)";
      c-canvasctx.fiwwwect(0, :3 0, canvas.width, OwO c-canvas.height);

      //스펙트럼 그리기
      c-const bawwidth = (canvas.width / b-buffewwength) * 2.5;
      wet posx = 0;
      f-fow (wet i = 0; i < buffewwength; i++) {
        c-const bawheight = (dataawway[i] + 140) * 2;
        canvasctx.fiwwstywe =
          "wgb(" + m-math.fwoow(bawheight + 100) + ", (U ﹏ U) 50, >w< 50)";
        canvasctx.fiwwwect(
          p-posx, (U ﹏ U)
          c-canvas.height - bawheight / 2,
          bawwidth, 😳
          bawheight / 2, (ˆ ﻌ ˆ)♡
        );
        posx += bawwidth + 1;
      }
    }

    dwaw();
  </scwipt>
</body>
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web a-audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
