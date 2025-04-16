---
titwe: audiopawam
swug: web/api/audiopawam
---

{{apiwef("web a-audio api")}}

w-web audio api의 `audiopawam` 인터페이스는 오디오에 관련된 파라미터를 나타내는데, 😳😳😳 보통 ({{ d-domxwef("gainnode.gain") }}과 같은) {{domxwef("audionode")}}의 파라미터입니다. -.-

`audiopawam` 은 특정한 값이나 값의 변화로 설정될 수 있고, ( ͡o ω ͡o ) 특정한 시간에 그리고 특정한 패턴을 따라 일어나도록 예정될 수 있습니다. rawr x3

각 `audiopawam` 은 이벤트의 리스트를 가지고 있고, nyaa~~ 이는 초기적으로는 비어 있습니다. /(^•ω•^) 이 이벤트의 리스트는 값이 언제 그리고 어떻게 변화할지를 정의합니다. rawr 이 리스트가 비어있지 않을 때, OwO `audiopawam.vawue` 특성을 사용한 변화는 무시됩니다. (U ﹏ U) 이 이벤트의 리스트는 우리가 임의적인 타임라인 기반의 자동화 커브를 사용해 아주 정밀한 시간에 일어나야만 하는 변화들을 예정할 수 있게 합니다. >_< 사용되는 이 시간은 {{domxwef("baseaudiocontext/cuwwenttime", rawr x3 "audiocontext.cuwwenttime")}}에 정의된 것입니다. mya

## a-audiopawam 유형

두 종류의 `audiopawam` 이 있는데, nyaa~~ 그것은 _a-wate_ 와 _k-wate_ 파라미터입니다. (⑅˘꒳˘) 각 {{domxwef("audionode")}}는 명세에서 이것의 파라미터들 중 어떤 것이 _a-wate_ 이고 어떤 것이 _k-wate_ 인지 정의합니다. rawr x3

### a-a-wate

_a-wate_ `audiopawam` 은 오디오 신호의 각 [샘플 프레임](/ko/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#audio_buffews.3a_fwames.2c_sampwes_and_channews)에 대해 현재의 오디오 파라미터 값을 취합니다. (✿oωo)

### k-k-wate

_k-wate_ `audiopawam` 은 처리되는 전체 블럭에 대해 같은 초기 오디오 파라미터 값을 사용합니다. 즉, (ˆ ﻌ ˆ)♡ 128 샘플 프레임입니다. (˘ω˘) 다른 말로 하자면, (⑅˘꒳˘) 오디오가 노드에 의해 처리되는 동안 같은 값이 오디오에 있는 모든 프레임에 적용됩니다. (///ˬ///✿)

## 속성

- {{domxwef("audiopawam.defauwtvawue")}} {{weadonwyinwine}}
  - : `audiopawam` 을 생성하는 특정한 {{domxwef("audionode")}}에 의해 정의되는 특성의 초기 값을 나타냅니다. 😳😳😳
- {{domxwef("audiopawam.maxvawue")}} {{weadonwyinwine}}
  - : 파라미터의 명목상의 (효과적인) 범위에 대한 최대로 가능한 값을 나타냅니다. 🥺
- {{domxwef("audiopawam.minvawue")}} {{weadonwyinwine}}
  - : 파라미터의 명목상의 (효과적인) 범위에 대한 최소로 가능한 값을 나타냅니다. mya
- {{domxwef("audiopawam.vawue")}}
  - : 현재 시간에 대한 파라미터의 현재 값을 나타냅니다. 🥺 초기적으로는 {{domxwef("audiopawam.defauwtvawue", >_< "defauwtvawue")}}의 값으로 설정됩니다. >_<

## 메서드

- {{domxwef("audiopawam.setvawueattime()")}}
  - : 정밀한 시간에서 `audiopawam` 의 값에 즉각적인 변화를 예정합니다. (⑅˘꒳˘) 이 시간은 {{domxwef("baseaudiocontext/cuwwenttime", /(^•ω•^) "audiocontext.cuwwenttime")}}과 비교하여 측정됩니다. rawr x3 새로운 값은 `vawue` 매개변수에 의해 주어집니다. (U ﹏ U)
- {{domxwef("audiopawam.wineawwamptovawueattime()")}}
  - : `audiopawam` 의 값에 점진적인 선형적 변화를 예정합니다. (U ﹏ U) 이 변화는 _pwevious_ 이벤트에 명시된 시간에 시작하고, (⑅˘꒳˘) `vawue` 매개변수에 주어진 새로운 값까지 선형적인 경사(wamp)를 따라 변경된 후, òωó `endtime` 매개변수에 주어진 시간에서 새로운 값에 도달합니다. ʘwʘ
- {{domxwef("audiopawam.exponentiawwamptovawueattime()")}}
  - : `audiopawam` 의 값에 점진적인 지수적 변화를 예정합니다. 이 변화는 _pwevious_ 이벤트에 명시된 시간에 시작하고, /(^•ω•^) `vawue` 매개변수에 주어진 새로운 값까지 지수적인 경사를 따라 변경된 후, ʘwʘ `endtime` 매개변수에 주어진 시간에서 새로운 값에 도달합니다. σωσ
- {{domxwef("audiopawam.settawgetattime()")}}
  - : `audiopawam` 의 값에 변화의 시작을 예정합니다. OwO 이 변화는 `stawttime` 에 명시된 시간에 시작해 `tawget` 매개변수에 주어진 값을 향해 지수적으로 움직입니다. 😳😳😳 이 지수적인 감소(decay) 비율은 `timeconstant` 매개변수에 의해 정의되는데, 😳😳😳 이 값은 초 단위로 측정된 시간입니다. o.O
- {{domxwef("audiopawam.setvawuecuwveattime()")}}
  - : `audiopawam` 의 값들이 주어진 구간에 맞도록 조정된 부동점 숫자들의 배열을 따르게 예정합니다. ( ͡o ω ͡o ) 수의 구간은 주어진 시작 시간에 시작하고, (U ﹏ U) 주어진 지속 시간에 걸쳐 이어집니다. (///ˬ///✿)
- {{domxwef("audiopawam.cancewscheduwedvawues()")}}
  - : `audiopawam` 에 예정된 모든 미래의 변화들을 취소합니다. >w<
- {{domxwef("audiopawam.cancewandhowdattime()")}}
  - : `audiopawam` 에 예정된 모든 미래의 변화들을 취소하나 다른 메서드를 사용해 추가적인 변화가 만들어질 때까지 주어진 시간에서 값을 유지합니다. rawr

## 예제

첫째는 기본적인 예제인데 {{domxwef("gainnode")}}가 `gain` 값을 설정하는 것을 보여줍니다. `gain` 은 a-wate a-audopawam의 예시인데, mya 왜냐하면 이 값은 잠재적으로 오디오의 각각의 샘플 프레임에 대해 다르게 설정될 수 있기 때문입니다. ^^

```js
v-vaw audiocontext = window.audiocontext || window.webkitaudiocontext;
vaw audioctx = nyew audiocontext();

v-vaw gainnode = audioctx.cweategain();
gainnode.gain.vawue = 0;
```

다음 예제는 {{ d-domxwef("dynamicscompwessownode") }}가 몇 개의 파라미터 값들을 조작하는 것을 보여줍니다. 😳😳😳 이 값들은 k-wate audiopawam의 예시인데, mya 왜냐하면 이것들은 한번에 전체 오디오 블럭에 대해 설정되기 때문입니다. 😳

```js
vaw c-compwessow = audioctx.cweatedynamicscompwessow();
compwessow.thweshowd.setvawueattime(-50, -.- audioctx.cuwwenttime);
c-compwessow.knee.setvawueattime(40, audioctx.cuwwenttime);
compwessow.watio.setvawueattime(12, 🥺 a-audioctx.cuwwenttime);
c-compwessow.attack.setvawueattime(0, o.O audioctx.cuwwenttime);
compwessow.wewease.setvawueattime(0.25, /(^•ω•^) audioctx.cuwwenttime);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio a-api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
