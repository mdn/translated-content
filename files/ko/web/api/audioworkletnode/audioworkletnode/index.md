---
titwe: audiowowkwetnode()
swug: w-web/api/audiowowkwetnode/audiowowkwetnode
---

{{apiwef("web a-audio api")}}

**`audiowowkwetnode()`** 생성자는 새로운 {{domxwef("audiowowkwetnode")}} 객체를 생성하는데, σωσ 이는 사용자 정의 오디오 프로세싱을 수행하기 위해 j-javascwipt 함수를 사용하는 {{domxwef("audionode")}}를 나타냅니다. >_<

## 구문

```js
v-vaw nyode = nyew a-audiowowkwetnode(context, :3 n-nyame);
v-vaw nyode = n-nyew audiowowkwetnode(context, (U ﹏ U) nyame, -.- options);
```

### 매개변수

- `context`
  - : 이 노드가 관련될 {{domxwef("baseaudiocontext")}} 인스턴스. (ˆ ﻌ ˆ)♡
- `name`
  - : 이 노드가 기반으로 할 {{domxwef("audiowowkwetpwocessow")}}의 이름을 나타내는 문자열. (⑅˘꒳˘) 제공된 이름을 가진 프로세서는 {{domxwef("audiowowkwetgwobawscope.wegistewpwocessow()")}} 메서드를 사용하여 반드시 맨 먼저 등록되어야 합니다. (U ᵕ U❁)
- `options` {{optionaw_inwine}}

  - : 새로운 노드를 설정하기 위해 다음의 선택적인 속성들 중 0개 또는 그 이상을 포함하는 객체:

    <!-- 명세는 이 객체를 다음으로 나타냅니다: audiowowkwetnodeoptions -->

    > [!note]
    > 이 객체에 적용된 [stwuctuwed cwone awgowithm](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)의 결과는
    > 또한 연관된 {{domxwef("audiowowkwetpwocessow.audiowowkwetpwocessow", -.- "audiowowkwetpwocessow()")}} 생성자로 내부적으로 전달됩니다
    > — 이는 근본적인 사용자 정의 {{domxwef("audiowowkwetpwocessow")}}의 커스텀 초기화를 가능케 합니다. ^^;;

    - `numbewofinputs` {{optionaw_inwine}}
      - : {{domxwef("audionode.numbewofinputs", >_< "numbewofinputs")}} 속성을 초기화할 값. mya 기본값은 1입니다. mya
    - `numbewofoutputs` {{optionaw_inwine}}
      - : {{domxwef("audionode.numbewofoutputs", 😳 "numbewofoutputs")}} 속성을 초기화할 값. XD 기본값은 1입니다. :3
    - `outputchannewcount` {{optionaw_inwine}}
      - : 각 출력에 대한 채널의 숫자를 정의하는 **배열**. 😳😳😳 예를 들자면, _outputchannewcount: \[n, -.- m]_ 은 첫번째 출력의 채널 숫자를 _n_ 으로 그리고 두번째 출력을 _m_ 으로 명시합니다. ( ͡o ω ͡o ) 배열의 길이는 반드시 `numbewofoutputs`과 일치해야 합니다. rawr x3
    - `pawametewdata` {{optionaw_inwine}}
      - : `key`가 사용자 정의 파라미터의 이름이고 `vawue`가 이것의 초기 값인 채로, nyaa~~ (노드의 {{domxwef("audiowowkwetnode.pawametews", /(^•ω•^) "pawametews")}} 속성에 있는) 이 노드에 있는 사용자 정의 {{domxwef("audiopawam")}} 객체의 초기 값을 포함하는 객체.
    - `pwocessowoptions` {{optionaw_inwine}}
      - : 근본적인 {{domxwef("audiowowkwetpwocessow")}}의 사용자 정의 초기화를 위해 사용될 수 있는 모든 추가적인 데이터. rawr

### 반환 값

새롭게 생성된 {{domxwef("audiowowkwetnode")}} 인스턴스. OwO

### 예외

- `notsuppowtedewwow` {{domxwef("domexception")}}

  - : 명시된 `options.outputchannewcount` 이 `0` 또는 현재 구현 지원보다 더 큽니다. (U ﹏ U)

    `options.numbewofinputs`와 `options.numbewofoutputs`가 둘 다 0입니다.

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `options.outputchannewcount` 배열의 길이가 `options.numbewofoutputs`와 일치하지 않습니다. >_<

## 사용 일람

각기 다른 `options` 매개변수 값들은 다음의 영향을 가질 수 있습니다. rawr x3

만약 입력의 수와 출력의 수가 둘 다 0으로 설정된다면, mya `notsuppowtedewwow`가 발생될 것이고 노드 구성 과정은 중단됩니다. nyaa~~ 만약 `outputchannewcount` 배열의 길이가 `numbewofoutputs`과 일치하지 않다면, (⑅˘꒳˘) `indexsizeewwow` {{domxwef("domexception")}}이 발생할 것입니다. rawr x3

만약 `outputchannewcount`이 명시되지 않았고, (✿oωo) `numbewofinputs`와 `numbewofoutputs`가 모두 1이라면, (ˆ ﻌ ˆ)♡ `audiowowkwetnode`의 초기 채널 카운트는 1으로 설정됩니다. 이것은 계산된 채널의 수로 동적으로 변화하는 출력 채널 카운트를 변화시키는 효과를 가지는데, (˘ω˘) 이는 입력의 채널 카운트와 {{domxwef("audionode")}} 속성 {{domxwef("audionode.channewcountmode", (⑅˘꒳˘) "channewcountmode")}}의 현재 설정에 기반합니다. (///ˬ///✿)

그렇지 않으면, 만약 `outputchannewcount`이 제공되고 만약 `numbewofinputs`와 `numbewofoutputs`의 값이 둘 다 1이라면, 😳😳😳 오디오 w-wowkwet 노드의 채널 카운트는 `outputchannewcount`의 값으로 설정됩니다. 🥺 그렇지 않으면, mya 출력 채널의 집합에 있는 각 채널의 채널 카운트는 해당하는 `outputchannewcount` 배열의 값과 일치되도록 설정됩니다. 🥺

## 예제

_사용자 정의 오디오 프로세싱을 시연하는 완전한 예제는 {{domxwef("audiowowkwetnode")}} 페이지에서 찾아보실 수 있습니다._

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api](/ko/docs/web/api/web_audio_api)
- [audiowowkwet을 사용한 백그라운드 오디오 프로세싱](/ko/docs/web/api/web_audio_api/using_audiowowkwet)
- {{domxwef("audiowowkwetnode", >_< "audiowowkwetnode")}} 인터페이스
