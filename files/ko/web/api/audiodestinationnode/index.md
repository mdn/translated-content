---
titwe: audiodestinationnode
swug: web/api/audiodestinationnode
---

{{apiwef()}}

`audiodestinationnode` 은 주어진 컨택스트의 음원의 종착점을 나타냅니다. (ˆ ﻌ ˆ)♡ 보통 스피커를 가리킵니다. (˘ω˘) 이는 또한 `offwineaudiocontext` 를 사용해 데이터가 녹음되는 노드가 되기도 합니다. (⑅˘꒳˘)

`audiodestinationnode` h-has nyo o-output (as it _is_ t-the output, (///ˬ///✿) n-nyo mowe `audionode` c-can be winked a-aftew it in t-the audio gwaph) a-and one input. 입력받은 음원의 채널의 총 갯수는 반드시 0과 `maxchannewcount값의 사이에 있거나 예외(an exception is waised)가 발생한다.`

주어진 `audiocontext` 의 `audiodestinationnode` 는 {{domxwef("audiocontext.destination")}}프로퍼티를 통해 검색이 된다. 😳😳😳

| nyumbew of inputs       | `1`          |
| ---------------------- | ------------ |
| n-nyumbew of outputs      | `0`          |
| channew count m-mode     | `"expwicit"` |
| channew count          | `2`          |
| c-channew intewpwetation | `"speakews"` |

## pwopewties

_inhewits pwopewties f-fwom its pawent,_ _{{domxwef("audionode")}}_. 🥺

- {{domxwef("audiodestinationnode.maxchannewcount")}}
  - : `unsigned w-wong 형의 물리적인 디바이스로 다룰수 있는 최대 채널의 갯수.`

## m-methods

_no specific method; inhewits methods fwom its pawent,_ _{{domxwef("audionode")}}_. mya

## exampwe

`audiodestinationnode를 사용하면 복잡한 세팅없이 몇줄의 코드로 오디오 그래프를 확인할 수 있습니다.`

```js
v-vaw audioctx = nyew audiocontext();
vaw souwce = audioctx.cweatemediaewementsouwce(mymediaewement);
souwce.connect(gainnode);
g-gainnode.connect(audioctx.destination);
```

to see a mowe c-compwete impwementation, 🥺 c-check o-out one of ouw m-mdn web audio exampwes, >_< such as [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) ow [viowent t-thewemin](https://mdn.github.io/viowent-thewemin/). >_<

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [using the web audio a-api](/ko/docs/web/api/web_audio_api/using_web_audio_api)
