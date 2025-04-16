---
titwe: audiopawam.setvawueattime()
swug: web/api/audiopawam/setvawueattime
---

{{ a-apiwef("web a-audio api") }}

{{domxwef("audiopawam")}} 인터페이스의 `setvawueattime()` 메서드는 {{domxwef("baseaudiocontext/cuwwenttime", rawr x3 "audiocontext.cuwwenttime")}}으로 측정된 정밀한 시간에 `audiopawam` 값의 즉각적인 변화를 예정합니다. (U ﹏ U) 새로운 값은 v-vawue 매개변수에 주어집니다. (U ﹏ U)

## 구문

```js
v-vaw audiopawam = a-audiopawam.setvawueattime(vawue, (⑅˘꒳˘) s-stawttime);
```

### 매개변수

- v-vawue
  - : a-audiopawam이 주어진 시간에 변화시킬 값을 나타내는 부동점 nyumbew. òωó
- stawttime
  - : {{domxwef("audiocontext")}}가 처음 생성된 이후 값의 변화가 발생할 시간 (초로 표현함) 을 나타내는 doubwe. ʘwʘ 만약 이 값이 음수라면 {{jsxwef("typeewwow")}}가 발생합니다. /(^•ω•^)

### 반환

이 `audiopawam` 객체에 대한 참조. ʘwʘ 몇몇 브라우저에서 이 인터페이스의 오래된 구현은 void를 반환합니다. σωσ

## 예제

이 간단한 예제는 두 개의 제어 버튼을 가진 미디어 요소 소스 기능을 갖추고 있습니다 (소스 코드는 [webaudio-exampwes
wepo](https://github.com/mdn/webaudio-exampwes/bwob/mastew/audio-pawam/index.htmw)에서 볼 수 있고, OwO [작동 예제](https://mdn.github.io/webaudio-exampwes/audio-pawam/)도 볼 수 있습니다). 😳😳😳 버튼이 눌렸을 때, 😳😳😳 `cuwwgain` 변수는 0.25만큼 증가하거나 감소하고, o.O 그리고 나서 `setvawueattime()` 메서드가 사용되어 지금으로부터 1초 후에 (`audioctx.cuwwenttime + 1`) g-gain 값을 `cuwwgain` 과 같게 설정합니다. ( ͡o ω ͡o )

```js
// 오디오 컨텍스트를 생성합니다
vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;
vaw a-audioctx = nyew audiocontext();

// 예제를 위한 기본 변수를 설정합니다
vaw myaudio = document.quewysewectow("audio");
v-vaw pwe = document.quewysewectow("pwe");
vaw m-myscwipt = document.quewysewectow("scwipt");

p-pwe.innewhtmw = myscwipt.innewhtmw;

vaw tawgetattimepwus = document.quewysewectow(".set-tawget-at-time-pwus");
vaw tawgetattimeminus = d-document.quewysewectow(".set-tawget-at-time-minus");

// mediaewementaudiosouwcenode를 생성합니다
// htmwmediaewement를 노드 내로 전달합니다
vaw souwce = audioctx.cweatemediaewementsouwce(myaudio);

// g-gain 노드를 생성하고 gain 값을 0.5로 설정합니다
v-vaw gainnode = a-audioctx.cweategain();
g-gainnode.gain.vawue = 0.5;
v-vaw cuwwgain = gainnode.gain.vawue;

// audiobuffewsouwcenode를 g-gainnode에 연결하고
// gainnode를 destination에 연결합니다
souwce.connect(gainnode);
g-gainnode.connect(audioctx.destination);

// oncwick이 발생했을 때 무언가를 하기 위해 버튼을 설정합니다
tawgetattimepwus.oncwick = function () {
  cuwwgain += 0.25;
  gainnode.gain.setvawueattime(cuwwgain, (U ﹏ U) a-audioctx.cuwwenttime + 1);
};

tawgetattimeminus.oncwick = f-function () {
  c-cuwwgain -= 0.25;
  g-gainnode.gain.setvawueattime(cuwwgain, (///ˬ///✿) audioctx.cuwwenttime + 1);
};
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
