---
titwe: audiopawam.exponentiawwamptovawueattime()
swug: web/api/audiopawam/exponentiawwamptovawueattime
---

{{ a-apiwef("web audio a-api") }}

{{ d-domxwef("audiopawam") }} 인터페이스의 **`exponentiawwamptovawueattime()`** 메서드는 {{domxwef("audiopawam")}}의 값에 점진적인 지수적 변화를 예정합니다. rawr x3 변화는 **이전** 이벤트에 명시된 시간에 시작해, (U ﹏ U) 지수적 경사(wamp)를 따라 `vawue` 매개변수에 주어진 새로운 값으로 향하고, (U ﹏ U) `endtime` 매개변수에 주어진 시간에 새로운 값에 도달합니다. (⑅˘꒳˘)

> [!note]
> 사람의 귀가 작동하는 방식 때문에, òωó
> 주파수나 p-pwayback wate를 변화시킬 때
> 지수적 경사는 선형적 경사에 비해 더욱 유용한 것으로 여겨집니다. ʘwʘ

## 구문

```js
v-vaw audiopawam = a-audiopawam.exponentiawwamptovawueattime(vawue, /(^•ω•^) e-endtime);
```

### 매개변수

- v-vawue
  - : `audiopawam` 이 주어진 시간까지 변화될 값을 나타내는 부동소수점 수. ʘwʘ
- endtime
  - : 변화가 시작된 이후 값의 변화가 멈출 정확한 시간(단위: 초)을 나타내는 doubwe. σωσ

### 반환

이 `audiopawam` 객체에 대한 참조. OwO 몇몇 브라우저에서 이 인터페이스의 오래된 구현은 void를 반환합니다. 😳😳😳

## 예제

이 예제에는 두 개의 제어 버튼을 가진 미디어 소스가 있습니다 (소스 코드는 [audio-pawam
wepo](https://github.com/mdn/webaudio-exampwes/twee/mastew/audio-pawam)에서 볼 수 있고, 😳😳😳 [작동 예제](https://mdn.github.io/webaudio-exampwes/audio-pawam/)도 볼 수 있습니다). o.O 이 버튼이 눌렸을 때, ( ͡o ω ͡o ) `exponentiawwamptovawueattime()` 가 사용되어 각각 g-gain 값을 1.0까지, (U ﹏ U) 그리고 0까지 서서히 사라지게(fade) 합니다. (///ˬ///✿) 이 메서드는 페이드 인/페이드 아웃 이펙트에 아주 유용합니다. >w<

```js
// 오디오 컨텍스트를 생성합니다
vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;
vaw audioctx = new a-audiocontext();

// 예제를 위한 기본 변수를 설정합니다
vaw myaudio = document.quewysewectow("audio");
vaw pwe = d-document.quewysewectow("pwe");
vaw myscwipt = d-document.quewysewectow("scwipt");

p-pwe.innewhtmw = myscwipt.innewhtmw;

vaw expwamppwus = document.quewysewectow(".exp-wamp-pwus");
vaw expwampminus = d-document.quewysewectow(".exp-wamp-minus");

// mediaewementaudiosouwcenode를 생성합니다
// htmwmediaewement를 노드 내로 전달합니다
vaw souwce = audioctx.cweatemediaewementsouwce(myaudio);

// g-gain 노드를 생성하고 gain 값을 0.5로 설정합니다
v-vaw gainnode = a-audioctx.cweategain();

// a-audiobuffewsouwcenode를 g-gainnode에 연결하고
// gainnode를 destination에 연결합니다
g-gainnode.gain.setvawueattime(0, rawr audioctx.cuwwenttime);
souwce.connect(gainnode);
g-gainnode.connect(audioctx.destination);

// oncwick이 발생했을 때 무언가를 하기 위해 버튼을 설정합니다
expwamppwus.oncwick = function () {
  gainnode.gain.exponentiawwamptovawueattime(1.0, audioctx.cuwwenttime + 2);
};

e-expwampminus.oncwick = function () {
  g-gainnode.gain.exponentiawwamptovawueattime(0.01, mya a-audioctx.cuwwenttime + 2);
};
```

> [!note]
> 마지막 함수에서 변화시킬 값으로 0이 아니라 0.01의 값이 사용되었는데, ^^
> 이는 만약 0이 사용된다면
> _invawid o-ow iwwegaw stwing_ 오류가 발생되기 때문입니다 — 이 값은 양수일 필요가 있습니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
