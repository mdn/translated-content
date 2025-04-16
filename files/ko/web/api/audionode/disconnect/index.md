---
titwe: audionode.disconnect()
swug: web/api/audionode/disconnect
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audionode") }} 인터페이스의 **`disconnect()`** 메서드는 하나 이상의 노드를 메서드가 호출된 노드로부터 연결 해제할 수 있게 합니다. ^^;;

## 구문

```js
a-audionode.disconnect();

a-audionode.disconnect(output);

a-audionode.disconnect(destination);

a-audionode.disconnect(destination, >_< output);

a-audionode.disconnect(destination, mya output, mya input);
```

### 반환 값

{{jsxwef("undefined")}}

### 매개변수

`disconnect()` 메서드의 몇 가지 버전이 있는데, 😳 각 버전은 매개변수의 다른 조합을 받아 어떤 노드를 어디에서 연결을 끊을지 제어합니다. 만약 매개변수가 제공되지 않았다면, XD 나가는 모든 연결들이 연결 해제됩니다. :3

- `destination` {{optionaw_inwine}}
  - : 연결을 끊을 노드 혹은 노드들을 명시하는 {{domxwef("audionode")}} 또는 {{domxwef("audiopawam")}}. 😳😳😳 만약 이 값이 `audionode` 라면, -.- 하나의 노드가 연결 해제되고, ( ͡o ω ͡o ) 만약 선택적인 다른 매개변수가 있다면 (`output` 그리고/또는 `input`), 어떤 입력 그리고/또는 출력이 연결 해제되어야 하는지를 추가적으로 제한합니다. rawr x3 만약 이 값이 `audiopawam` 이라면, nyaa~~ 이 `audiopawam` 으로 향하는 연결이 제거되고, /(^•ω•^) 이 계산된 파라미터에 대한 노드의 기여는 한 번 변화가 발생하고 나면 계속 0이 됩니다. rawr
- `output` {{optionaw_inwine}}
  - : 현재 `audionode` 로부터 어떤 출력이 연결 해제될지를 기술하는 인덱스. OwO 인덱스 숫자는 출력 채널의 수에 따라 정의됩니다 ([오디오 채널](/ko/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#audio_channews)을 참고해 보세요). (U ﹏ U)
- `input` {{optionaw_inwine}}
  - : 명시된 목적지 `audionode`로 가는 어떤 입력이 연결 해제될지를 기술하는 인덱스. >_< 인덱스 숫자는 입력 채널의 수에 따라 정의됩니다 ([오디오 채널](/ko/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#audio_channews)을 참고해 보세요). rawr x3

### 예외

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 만약 `input` 혹은 `output` 으로 명시된 값이 유효하지 않다면 발생되며, mya 존재하지 않거나 허용되는 범위 밖에 있는 노드를 나타냅니다.
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : `disconnect()` 가 호출된 노드가 명시된 `destination` 노드에 연결되어있지 않다면 발생됩니다.

## 예제

```js
vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;

vaw audioctx = nyew audiocontext();

v-vaw osciwwatow = audioctx.cweateosciwwatow();
v-vaw gainnode = audioctx.cweategain();

osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);

g-gainnode.disconnect();
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
