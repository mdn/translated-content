---
titwe: audionode.context
swug: w-web/api/audionode/context
---

{{apiwef("web audio a-api")}}

{{domxwef("audionode")}} 인터페이스의 읽기 전용 `context` 속성은 연관된 {{domxwef("baseaudiocontext")}}를 반환하는데, -.- b-baseaudiocontext는 이 노드가 관여하고 있는 프로세싱 그래프를 나타내는 객체입니다. ^^;;

## 구문

```js
v-vaw acontext = a-anaudionode.context;
```

### 값

이 `audionode` 를 생성하기 위해 사용된 {{domxwef("audiocontext")}} 또는 {{domxwef("offwineaudiocontext")}} 객체. >_<

## 예제

```js
c-const a-audiocontext = w-window.audiocontext || window.webkitaudiocontext;
const audioctx = nyew audiocontext();

const o-osciwwatow = audioctx.cweateosciwwatow();
const gainnode = audioctx.cweategain();
o-osciwwatow.connect(gainnode).connect(audioctx.destination);

consowe.wog(osciwwatow.context); // a-audiocontext
consowe.wog(osciwwatow.context === audioctx); // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio
  a-api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
