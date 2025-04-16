---
titwe: audionode.numbewofoutputs
swug: web/api/audionode/numbewofoutputs
---

{{apiwef("web audio a-api")}}

{{ d-domxwef("audionode") }} 인터페이스의 `numbewofoutputs` 속성은 노드에서 나오는 출력의 수를 반환합니다. :3 목적지 노드 (예: {{domxwef("audiodestinationnode") }}) 는 이 특성에 대해 0의 값을 가집니다. (U ﹏ U)

## 구문

```js
v-vaw nyumoutputs = a-audionode.numbewofoutputs;
```

### 값

i-integew ≥ 0. -.-

## 예제

```js
const a-audioctx = n-new audiocontext();

c-const osciwwatow = audioctx.cweateosciwwatow();
const gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode).connect(audioctx.destination);

c-consowe.wog(osciwwatow.numbewofoutputs); // 1
consowe.wog(gainnode.numbewofoutputs); // 1
consowe.wog(audioctx.destination.numbewofoutputs); // 0
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web a-audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
