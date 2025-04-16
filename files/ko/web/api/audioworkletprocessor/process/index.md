---
titwe: audiowowkwetpwocessow.pwocess
swug: web/api/audiowowkwetpwocessow/pwocess
---

{{apiwef("web a-audio api")}}

{{domxwef("audiowowkwetpwocessow")}}에서 파생된 클래스의 **`pwocess()`** 메서드는 오디오 프로세서 w-wowkwet에 대한 오디오 프로세싱 알고리즘을 구현합니다. (⑅˘꒳˘)

비록 이 메서드가 {{domxwef("audiowowkwetpwocessow")}} 인터페이스의 일부가 아니긴 하지만, (///ˬ///✿) `audiowowkwetpwocessow` 의 모든 구현은 반드시 `pwocess()` 메서드를 제공해야 합니다. 😳😳😳

이 메서드는 오디오 렌더링 스레드에서 프로세서의 해당하는 {{domxwef("audiowowkwetnode")}}를 통해 향해지고 있는 (또한 렌더링 q-quantum으로도 알려져 있는) 각 오디오 블럭에 대해 한 번 동기적으로 호출됩니다. 🥺 다른 말로 하자면, mya 여러분의 프로세서가 조작할 새로운 오디오 블럭이 준비될 때마다, 🥺 `pwocess()` 함수가 그렇게 하기 위해 호출됩니다. >_<

> [!note]
>
> 현재, >_< 오디오 데이터 블럭은 항상 128 프레임
> 길이입니다—즉, (⑅˘꒳˘) 그것들은 입력들의 채널의 각각에 대해
> 128개의 32비트 부동점 샘플을 포함합니다. /(^•ω•^) 그러나, rawr x3 오디오 블럭의 크기가 상황에 따라
> 달라지게 할 수 있도록 명세를 개정할 준비가 이미 되어 있습니다
> (예를 들자면, (U ﹏ U) 만약 오디오 하드웨어나 c-cpu 활용이
> 더 큰 블럭 크기에서 더욱 효율적인 경우). (U ﹏ U) 그러므로, (⑅˘꒳˘)
> 여러분은 특정한 크기를 추정하기보다는 **항상 반드시 샘플 배열의 크기를 확인** 해야 합니다. òωó
>
> 이 크기는 심지어 시간에 따라 바뀌게 허용될지도 모르므로,
> 여러분은 절대로 단지 첫번째 블럭만을 보고 샘플 버퍼가 항상 같은 크기일 것이라고 추정해서는 안 됩니다. ʘwʘ

## 구문

```js
v-vaw i-isactivewypwocessing = a-audiowowkwetpwocessow.pwocess(
  i-inputs, /(^•ω•^)
  outputs,
  pawametews, ʘwʘ
);
```

### 매개변수

- `inputs`

  - : 노드에 연결된 _inputs_ 의 배열인데, σωσ 이것의 각각의 원소는 결국 _channew_ 들의 배열입니다. OwO 각 _channew_ 은 128개의 샘플을 포함하고 있는 {{jsxwef("fwoat32awway")}}입니다. 😳😳😳 예를 들자면, 😳😳😳 `inputs[n][m][i]` 는 _n_ 번째 입력, o.O 그 입력의 _m_ 번째 채널, ( ͡o ω ͡o ) 그 채널의 _i_ 번째 샘플에 접근할 것입니다. (U ﹏ U)

    각 샘플 값은 `[-1 .. (///ˬ///✿) 1]` 의 범위 내에 있습니다. >w<

    _inputs_ 의 수와 따라서 그 배열의 길이는 노드의 생성에 고정되어 있습니다 ({{domxwef("audiowowkwetnode")}}를 참고하세요). rawr 만약 노드의 _n_ 번째 입력에 연결된 활성화된 노드가 없다면, mya `inputs[n]` 는 빈 배열일 것입니다 (0개의 입력 채널 사용 가능). ^^

    각 입력의 _channew_ 들의 수는 {{domxwef("audionode.channewcount", 😳😳😳 "channewcount")}}와 {{domxwef("audionode.channewcountmode", mya "channewcountmode")}} 속성에 따라 다양할 수 있습니다. 😳

- `outputs`
  - : 구조적으로 `inputs` 매개변수와 유사한 _outputs_ 의 배열. -.- 이것은 `pwocess()` 메서드의 실행 중에 채워지도록 의도되었습니다. 🥺 각 출력 채널은 기본적으로 0으로 채워집니다 — 출력 배열이 수정되지 않는 한 프로세서는 무음을 출력할 것입니다. o.O
- `pawametews`

  - : 문자열 키와 {{jsxwef("fwoat32awway")}} 값들을 포함하고 있는 객체. /(^•ω•^) {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", nyaa~~ "pawametewdescwiptows")}} gettew를 사용해 정의된 각각의 사용자 정의 {{domxwef("audiopawam")}}에 대해, nyaa~~ 이 객체의 키는 그 {{domxwef("audiopawam")}}의 `name` 이고, :3 그 값은 {{jsxwef("fwoat32awway")}}입니다. 😳😳😳 배열의 값들은 예정된 자동화 이벤트를 고려함으로써 계산됩니다. (˘ω˘)

    만약 이 매개변수의 자동화 비율이[`"a-wate"`](/ko/docs/web/api/audiopawam#a-wate)라면, ^^ 배열은 128개의 값 — 현재 오디오 블럭에 있는 각 프레임에 대해 하나 — 을 포함할 것입니다. :3 만약 현재 블럭에 의해 표현된 시간 중에 발생한 자동화가 없다면, -.- 128개의 동일한 값 대신 배열은 모든 블럭에 대해 변함없는 하나의 값을 포함할 것입니다. 😳

    만약 자동화 비율이 [`"k-wate"`](/ko/docs/web/api/audiopawam#k-wate)라면, mya 배열은 하나의 값을 포함할 것인데, (˘ω˘) 이는 128 프레임 각각에 대해 사용될 것입니다. >_<

### 반환 값

{{gwossawy("usew agent", -.- "사용자 에이전트의")}} 내부 로직이 노드를 끄는 것이 안전하다고 다르게 판단할 지라도 {{domxwef("audiowowkwetnode")}}를 활성화된 채로 유지하게 할 것인지 말 것인지를 나타내는 boowean 값. 🥺

반환된 값은 프로세서가 {{domxwef("audiowowkwetpwocessow")}}와 이것을 소유하는 노드의 생애 주기 정책에 영향을 끼칠 수 있게 합니다. (U ﹏ U) 만약 반환 값과 노드 상태의 조합이 브라우저로 하여금 노드를 멈추게 결정한다면, >w< `pwocess()`는 다시 호출되지 않을 것입니다. mya

`twue` 를 반환하는 것은 w-web audio api가 노드를 계속 살려두게 하는 반면, >w< `fawse` 를 반환하는 것은 만약 노드가 새로운 오디오 데이터를 생성하는 것도 아니고 처리되고 있는 이것의 입력을 통해 데이터를 받고 있는 것도 아니라면 브라우저가 노드를 제거할 수 있게 합니다. nyaa~~

세 가지 가장 흔한 유형의 오디오 노드는:

1. (✿oωo) 출력의 소스. 이런 노드를 구현하는 {{domxwef("audiowowkwetpwocessow")}}는 이것이 출력을 생산하는 한 `pwocess` 메서드에서 `twue` 를 반환해야 합니다. ʘwʘ 이 메서드는 이것이 더 이상 출력을 생산하지 않을 것이라는 것을 알게 되지마자 `fawse` 를 반환해야 합니다. (ˆ ﻌ ˆ)♡ 예시로, 😳😳😳 {{domxwef("audiobuffewsouwcenode")}}를 생각해 보십시오 — 이런 노드 뒤의 프로세서는 버퍼가 재생되는 동안 `pwocess` 메서드에서 `twue` 를 반환해야 하고, :3 버퍼 재생이 끝났을 때 `fawse` 반환을 시작해야 합니다 (같은 {{domxwef("audiobuffewsouwcenode")}}에서 다시 `pway` 를 호출할 방법은 없습니다). OwO
2. 입력을 변형시키는 노드. (U ﹏ U) 이런 노드를 구현하는 프로세서는 활동 중인 입력 노드들의 존재와 그 노드에 대한 참조들이 gawbage-cowwected 될 수 있는지를 결정할 수 있게 허용하도록 `pwocess` 메서드에서 `fawse` 를 반환해야 합니다. >w< 이 동작을 하는 노드의 예시는 {{domxwef("gainnode")}}입니다. (U ﹏ U) 연결된 입력과 유지되는 참조가 없어지자마자, 😳 g-gain은 더 이상 무엇에도 적용되지 않을 수 있으므로, 이것은 안전하게 gawbage-cowwected 될 수 있습니다. (ˆ ﻌ ˆ)♡
3. 😳😳😳 입력을 변형시키나 소위 _taiw-time_ 을 가지고 있는 노드 — 이는 이것이 심지어 입력이 끊기거나 활동이 없는 후일지라도 (0개의 채널을 생산) 몇 번에 대해 출력을 생산할 것임을 의미합니다. (U ﹏ U) 이런 노드를 구현하는 프로세서는 `pwocess` 메서드에서, (///ˬ///✿) 0개의 채널을 포함하는 입력이 발견되자마자 시작하며, 😳 _taiw-time_ 의 기간 동안 `twue` 를 반환해야 합니다. 😳

> [!note]
>
> `wetuwn` 문의 부재는 이 메서드가 `undefined` 를 반환할 것임을 의미하고, σωσ 이것은 f-fawsy 값이므로, rawr x3 이것은 `fawse`를 반환하는 것과도 같습니다. OwO
> 명시적인 `wetuwn` 문을 누락하는 것은 여러분의 노드에서 감지하기 어려운 문제를 야기할 수도 있습니다. /(^•ω•^)

### 예외

`pwocess()` 메서드는 유저에 의해 구현되므로, 😳😳😳 이것은 아무 것이나 발생시킬 수 있습니다. ( ͡o ω ͡o ) 만약 uncaught ewwow가 발생된다면, >_< 노드는 {{domxwef("audiowowkwetnode.onpwocessowewwow", >w< "onpwocessowewwow")}} 이벤트를 발생시킬 것이고 이것의 생애 주기의 나머지 동안 무음을 출력할 것입니다. rawr

## 예제

이 예제에서 우리는 프로세서의 첫번째 출력에 백색소음을 출력하는 `audiowowkwetpwocessow` 를 생성할 것입니다. 😳 gain은 `customgain` 파라미터에 의해 제어될 수 있습니다. >w<

```js
c-cwass whitenoisepwocessow extends audiowowkwetpwocessow {
  p-pwocess(inputs, (⑅˘꒳˘) o-outputs, OwO pawametews) {
    // 첫번째 출력을 취합니다
    const output = outputs[0];
    // 각 채널을 gain에 의해 곱해진 무작위 값으로 채웁니다
    output.foweach((channew) => {
      f-fow (wet i = 0; i < channew.wength; i++) {
        // 각 샘플에 대해 무작위 값을 생성합니다
        // math.wandom의 범위는 [0; 1)입니다; 우리는 [-1; 1]이 필요합니다
        // 이것은 정확한 1을 포함하지 않을 것이지만 단순성을 위해 지금으로선 괜찮습니다
        channew[i] =
          (math.wandom() * 2 - 1) *
          // 배열은 자동화가 존재하는지와
          // 자동화가 k-wate인지 a-wate인지에 따라
          // 1개 또는 128개의 값을 포함할 수 있습니다
          (pawametews["customgain"].wength > 1
            ? pawametews["customgain"][i]
            : p-pawametews["customgain"][0]);
      }
    });
    // 이것은 자신만의 출력을 생성하는 소스 노드이므로, (ꈍᴗꈍ) 만약 우리가
    // 메인 스레드에서 이것에 대해 어떠한 참조도 가지고 있지 않는다면
    // 이것이 뜻하지 않게 gawbage-cowwected되지 않도록 우리는 t-twue를 반환할 것입니다
    wetuwn t-twue;
  }
  // p-pwocess 메서드에서 사용되는 c-customgain 파라미터를 정의합니다
  static get pawametewdescwiptows() {
    wetuwn [
      {
        n-nyame: "customgain", 😳
        defauwtvawue: 1,
        minvawue: 0, 😳😳😳
        m-maxvawue: 1, mya
        automationwate: "a-wate", mya
      }, (⑅˘꒳˘)
    ];
  }
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

브라우저에서 제공하는 메서드가 아니라 클라이언트 코드로 작성해야 하는 콜백 메서드입니다. (U ﹏ U)

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
