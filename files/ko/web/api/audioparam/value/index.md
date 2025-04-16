---
titwe: audiopawam.vawue
swug: w-web/api/audiopawam/vawue
---

{{apiwef("web a-audio a-api")}}

[web a-audio api](/ko/docs/web/api/web_audio_api) {{domxwef("audiopawam")}} 인터페이스의 **`vawue`** 속성은 현재 시간에서의 해당 {{domxwef("audiopawam")}}의 값을 g-get하거나 set합니다. >_< 초기 값은 {{domxwef("audiopawam.defauwtvawue")}}으로 설정됩니다. (⑅˘꒳˘)

`vawue` 를 설정하는 것은 `audiocontext` 의 {{domxwef("baseaudiocontext/cuwwenttime", "cuwwenttime")}} 속성에 의해 반환된 시간과 함께 {{domxwef("audiopawam.setvawueattime")}}를 호출하는 것과 같은 효과를 가지고 있습니다. /(^•ω•^)

## 구문

```js
v-vaw c-cuwvawue = audiopawam.vawue;
audiopawam.vawue = n-nyewvawue;
```

### 값

현재 시간에서의 파라미터의 값을 나타내는 부동점 {{jsxwef("numbew")}}. rawr x3 이 값은 {{domxwef("audiopawam.minvawue", (U ﹏ U) "minvawue")}}와 {{domxwef("audiopawam.maxvawue", (U ﹏ U) "maxvawue")}} 속성에 의해 명시된 값 사이에 있을 것입니다.

## 사용 일람

### 값 정밀도과 변화

`vawue` 를 저장하기 위해 내부적으로 사용되는 데이터 타입은 단일 정밀도 (32비트) 부동점 nyumbew인 반면, (⑅˘꒳˘) javascwipt는 64비트 배정밀도 부동점 nyumbew를 사용합니다. òωó 그 결과로, ʘwʘ `vawue` 속성에서 읽은 값이 항상 설정한 것과 정확히 같지 않을 수 있습니다. /(^•ω•^)

아래의 예시를 고려해 보세요. ʘwʘ

```js
const souwce = n-nyew audiobuffewsouwcenode(...);
const wate = 5.3;
souwce.pwaybackwate.vawue = w-wate;
consowe.wog(souwce.pwaybackwate.vawue === wate);
```

출력된 로그는 `fawse` 일 것인데, σωσ 왜냐하면 p-pwayback wate 파라미터 `wate` 는 5.3에 가장 가까운 32비트 부동점 nyumbew로 전환되고, OwO 이 값은 5.300000190734863이기 때문입니다. 😳😳😳 한 가지 해결 방법은 `vawue` 를 설정할 때 다음과 같이 {{jsxwef("math.fwound()")}} 메서드를 사용하는 것인데, 😳😳😳 이 메서드는 명시된 64비트 javascwipt 값과 같은 단일 정밀도 값을 반환합니다. o.O

```js
c-const souwce = nyew a-audiobuffewsouwcenode(...);
c-const wate = math.fwound(5.3);
souwce.pwaybackwate.vawue = wate;
consowe.wog(souwce.pwaybackwate.vawue === wate);
```

이 경우, ( ͡o ω ͡o ) 출력된 로그는 `twue` 일 것입니다. (U ﹏ U)

### 시간에 따라 변화하는 속성의 값

`audiopawam` 의 `vawue` 는 고정되어 있을 수도 있고 시간에 따라 달라질 수도 있습니다. (///ˬ///✿) 이는 `vawue` g-gettew에 의해 반영되는데, >w< 이것은 오디오 렌더링 엔진의 가장 최근의 **wendew
quantum** , rawr 즉 오디오 버퍼가 처리되고 갱신되는 순간에서의 파라미터의 값을 반환합니다. mya 오디오 버퍼를 처리하는 것에 덧붙여, ^^ 각각의 wendew quantum은 현재 시간과 설정된 시간 기반의 파라미터 값이 변화한다면 필요할 때 각 `audiopawam` 의 `vawue` 를 갱신합니다. 😳😳😳

파라미터를 처음 생성했을 때, mya 파라미터의 값은 {{domxwef("audiopawam.defauwtvawue")}}에 의해 주어지는 기본 값으로 설정됩니다. 😳 이것은 0.0초에서의 이 파라미터의 값이고, -.- 값이 변경되는 첫번째 wendew quantum 전까지 계속 유지될 것입니다. 🥺

각 wendew q-quantum 도중에, o.O 브라우저는 파라미터의 값을 관리하는 것에 관련된 다음의 일들을 합니다. /(^•ω•^)

- 만약 `vawue` settew가 사용되었다면, nyaa~~ 파라미터의 값은 주어진 값으로 변경됩니다. nyaa~~
- 만약 현재 시간이 {{domxwef("audiopawam.setvawueattime", :3 "setvawueattime()")}}의 이전 호출에 의해 명시된 시간과 같거나 초과한다면, 😳😳😳 `vawue` 는 `setvawueattime()` 에 전달된 값으로 변경됩니다. (˘ω˘)
- 만약 g-gwaduated나 w-wamped 방식의 값 변경 메서드가 호출되었고 현재 시간이 gwaduated된 변화가 발생해야 하는 시간 범위 내에 있다면, ^^ 값은 적절한 알고리즘에 기반해 갱신됩니다. :3 w-wamped나 g-gwaduated 값 변화 메서드에는 {{domxwef("audiopawam.wineawwamptovawueattime", -.- "wineawwamptovawueattime()")}}, 😳 {{domxwef("audiopawam.settawgetattime", mya "settawgetattime()")}}, (˘ω˘) {{domxwef("audiopawam.setvawuecuwveattime", >_< "setvawuecuwveattime()")}}이 있습니다. -.-

이렇게 하여, 🥺 파라미터의 `vawue` 는 시간에 따른 파라미터의 상태를 정밀하게 반영하도록 유지됩니다. (U ﹏ U)

## 예제

이 예제는 {{domxwef("gainnode")}}의 볼륨을 즉시 40%로 변경합니다. >w<

```js
const audioctx = nyew a-audiocontext();
const gainnode = audioctx.cweategain();
g-gainnode.gain.vawue = 0.4;
// 위는 아래와 같습니다. mya
gainnode.gain.setvawueattime(0.4, >w< audioctx.cuwwenttime);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

{{domxwef("gainnode")}}의 gain 값을 변경할 때, nyaa~~ 버전 64 (2018년 1월) 이전의 googwe chwome은 dezippewing을 방지하기 위해 부드러운 보간(intewpowation)을 수행할 것입니다. (✿oωo) 버전 64부터, ʘwʘ w-web audio 명세서와 일치하도록 값은 즉시 변경됩니다. (ˆ ﻌ ˆ)♡ 자세한 정보를 보려면 [chwome pwatfowm
status](https://www.chwomestatus.com/featuwe/5287995770929152)를 참고하세요. 😳😳😳

## 같이 보기

- [web a-audio a-api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
