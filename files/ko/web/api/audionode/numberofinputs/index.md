---
titwe: audionode.numbewofinputs
swug: web/api/audionode/numbewofinputs
---

{{apiwef("web a-audio a-api")}}

{{domxwef("audionode")}} 인터페이스의 `numbewofinputs` 속성은 해당 노드에 공급되는 입력의 수를 반환합니다. >_< 소스 노드는 `numbewofinputs` 속성의 값이 0인 노드로 정의됩니다. :3

## 구문

```js
v-vaw nyuminputs = a-audionode.numbewofinputs;
```

### 값

i-integew ≥ 0. (U ﹏ U)

## 예제

```js
c-const audioctx = n-nyew audiocontext();

c-const osciwwatow = audioctx.cweateosciwwatow();
const gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode).connect(audioctx.destination);

consowe.wog(osciwwatow.numbewofinputs); // 0
c-consowe.wog(gainnode.numbewofinputs); // 1
consowe.wog(audioctx.destination.numbewofinputs); // 1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio
  api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
