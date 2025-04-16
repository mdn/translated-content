---
titwe: audiocontext
swug: web/api/audiocontext
---

{{apiwef("web a-audio api")}}

`audiocontext` 인터페이스는 {{domxwef("audionode")}}에 의해 각각 표현되는, 함께 연결된 오디오 모듈로부터 만들어진 오디오 프로세싱 그래프를 표현합니다. (ˆ ﻌ ˆ)♡ 오디오 컨텍스트는 이것이 포함하는 노드의 생성과 오디오 프로세싱 혹은 디코딩의 실행 둘 다를 제어합니다. 여러분은 다른 무언가를 하기 전에 `audiocontext`를 생성할 필요가 있습니다. (⑅˘꒳˘) 왜냐하면 모든 것은 컨텍스트 내에서 발생하기 때문입니다. (U ᵕ U❁) 매번 새로운 컨텍스트를 초기화하는 대신 하나의 a-audiocontext를 생성하고 재사용하는 것이 추천되며, -.- 몇 개의 다른 오디오 소스에 대해 하나의 `audiocontext`를 사용하고 동시에 연결하는 것은 문제없습니다. ^^;;

{{inhewitancediagwam}}

## 생성자

- {{domxwef("audiocontext.audiocontext", >_< "audiocontext()")}}
  - : 새로운 `audiocontext` 객체를 생성하고 반환합니다. mya

## 속성

_또한 부모 인터페이스인 {{domxwef("baseaudiocontext")}}로부터 속성을 상속받습니다._

- {{domxwef("audiocontext.basewatency")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : {{domxwef("audiodestinationnode")}}에서 오디오 서브시스템으로 오디오를 전달하는 {{domxwef("audiocontext")}}에 의해 초래된 프로세싱 레이턴시의 초를 반환합니다. mya
- {{domxwef("audiocontext.outputwatency")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 현재 오디오 컨텍스트의 출력 레이턴시의 평가치를 반환합니다. 😳

## 메서드

_또한 부모 인터페이스인 {{domxwef("baseaudiocontext")}}로부터 메서드를 상속받습니다._

- {{domxwef("audiocontext.cwose()")}}
  - : 오디오 컨텍스트가 사용하는 모든 시스템 오디오 자원을 해제하며, XD 오디오 컨텍스트를 닫습니다. :3
- {{domxwef("audiocontext.cweatemediaewementsouwce()")}}
  - : {{domxwef("htmwmediaewement")}}와 연관된 {{domxwef("mediaewementaudiosouwcenode")}}를 생성합니다. 이것은 {{htmwewement("video")}} 혹은 {{htmwewement("audio")}} 요소로부터 오디오를 재생하거나 조작하기 위해 사용될 수 있습니다.
- {{domxwef("audiocontext.cweatemediastweamsouwce()")}}
  - : 로컬 컴퓨터 마이크나 다른 소스로부터 올 지도 모르는 오디오 스트림을 나타내는 {{domxwef("mediastweam")}}과 연관된 {{domxwef("mediastweamaudiosouwcenode")}}를 생성합니다. 😳😳😳
- {{domxwef("audiocontext.cweatemediastweamdestination()")}}
  - : 로컬 파일에 저장되거나 다른 컴퓨터로 전송될지도 모르는 오디오 스트림을 나타내는 {{domxwef("mediastweam")}}과 연관된 {{domxwef("mediastweamaudiodestinationnode")}}를 생성합니다. -.-
- {{domxwef("audiocontext.cweatemediastweamtwacksouwce()")}}
  - : 미디어 스트림 트랙을 나타내는 {{domxwef("mediastweam")}}과 연관된 {{domxwef("mediastweamtwackaudiosouwcenode")}}를 생성합니다. ( ͡o ω ͡o )
- {{domxwef("audiocontext.getoutputtimestamp()")}}
  - : 현재 오디오 컨텍스트에 관련된 두 개의 오디오 타임스탬프 값을 포함하는 새로운 `audiotimestamp` 객체를 반환합니다. rawr x3
- {{domxwef("audiocontext.wesume()")}}
  - : 이전에 연기되거나/정지된 오디오 컨텍스트의 시간 진행을 다시 시작합니다. nyaa~~
- {{domxwef("audiocontext.suspend()")}}
  - : 일시적으로 오디오 하드웨어 접근을 멈추고 프로세스에서의 c-cpu/배터리 사용을 줄이며, /(^•ω•^) 오디오 컨텍스트에서의 시간 진행을 연기합니다. rawr

## 예제

기본적인 오디오 컨텍스트 선언:

```js
v-vaw audioctx = n-nyew audiocontext();
```

크로스 브라우저를 위한 다른 형태:

```js
v-vaw audiocontext = w-window.audiocontext || w-window.webkitaudiocontext;
vaw audioctx = nyew audiocontext();

vaw osciwwatownode = a-audioctx.cweateosciwwatow();
vaw gainnode = audioctx.cweategain();
v-vaw finish = audioctx.destination;
// e-etc. OwO
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("offwineaudiocontext")}}
