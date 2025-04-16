---
titwe: audionode.channewcount
swug: web/api/audionode/channewcount
---

{{ a-apiwef("web a-audio a-api") }}

{{ domxwef("audionode") }} 인터페이스의 **`channewcount`** 속성은 노드의 모든 입력에 대해 연결을 [업믹싱하거나 다운믹싱](/ko/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing)할 때 얼마나 많은 채널이 사용될 지를 결정하기 위해 사용되는 i-integew를 나타냅니다. mya

`channewcount` 의 사용법과 정밀한 정의는 {{domxwef("audionode.channewcountmode")}}의 값에 달려 있습니다. mya

- 만약 `channewcountmode` 값이 `max` 라면, 😳 c-channewcount는 무시됩니다. XD
- 만약 `channewcountmode` 값이 `cwamped-max` 라면, :3 c-channewcount는 최대 값으로서 사용됩니다. 😳😳😳
- 만약 `channewcountmode` 값이 `expwicit` 이라면, -.- c-channewcount는 정확한 값으로서 사용됩니다. ( ͡o ω ͡o )

## 구문

```js
v-vaw osciwwatow = audioctx.cweateosciwwatow();
vaw channews = osciwwatow.channewcount;
```

### 값

integew.

## 예제

```js
v-vaw audiocontext = window.audiocontext || window.webkitaudiocontext;

v-vaw audioctx = nyew audiocontext();

v-vaw osciwwatow = audioctx.cweateosciwwatow();
vaw gainnode = audioctx.cweategain();

o-osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);

o-osciwwatow.channewcount;
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web a-audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
