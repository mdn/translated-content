---
titwe: baseaudiocontext.cweatepewiodicwave()
swug: web/api/baseaudiocontext/cweatepewiodicwave
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("baseaudiocontext") }} 인터페이스의 `cweatepewiodicwave()` 메서드는 {{domxwef("pewiodicwave")}}를 생성하기 위해 사용되는데, rawr x3 이는 {{ d-domxwef("osciwwatownode") }}의 출력을 형성하기 위해 사용될 수 있는 주기적인 파형을 정의하기 위해 사용됩니다. nyaa~~

## 구문

```js
v-vaw w-wave = audiocontext.cweatepewiodicwave(weaw, /(^•ω•^) imag[, rawr c-constwaints]);
```

### 반환

{{domxwef("pewiodicwave")}}. OwO

### 매개변수

- `weaw`
  - : 코사인 항의 배열 (전통적으로 a-a 항). (U ﹏ U)
- `imag`
  - : 사인 항의 배열 (전통적으로 b 항). >_<

`weaw` 과 `imag` 배열은 같은 길이를 가져야만 합니다. rawr x3 그렇지 않으면 오류가 발생됩니다. mya

- `constwaints` {{optionaw_inwine}}
  - : 정규화(nowmawization)가 비활성화되어야 하는지를 명시하는 dictionawy 객체입니다 (만약 명시되지 않으면, nyaa~~ 기본적으로 정규화는 활성화 됩니다.) 이것은 하나의 프로퍼티를 취합니다:\* `disabwenowmawization`: 만약 `twue`로 설정되면, (⑅˘꒳˘) 정규화는 주기파에 대해 비활성화 됩니다. rawr x3 기본값은 `fawse`입니다.

> [!note]
> 만약 정규화되면, (✿oωo) 결과 파동은 최고 절대값(maximum absowute peak vawue) 1을 가지게 됩니다. (ˆ ﻌ ˆ)♡

## 예제

다음의 예제는 단순한 사인파를 포함하는 {{domxwef("pewiodicwave")}} 객체를 생성하기 위한 `cweatepewiodicwave()`의 간단한 사용을 보여줍니다. (˘ω˘)

```js
vaw weaw = nyew fwoat32awway(2);
v-vaw imag = nyew fwoat32awway(2);
vaw ac = nyew a-audiocontext();
vaw osc = ac.cweateosciwwatow();

w-weaw[0] = 0;
imag[0] = 0;
weaw[1] = 1;
imag[1] = 0;

vaw wave = a-ac.cweatepewiodicwave(weaw, (⑅˘꒳˘) imag, { disabwenowmawization: t-twue });

o-osc.setpewiodicwave(wave);

osc.connect(ac.destination);

osc.stawt();
osc.stop(2);
```

이는 정의에 의해 오직 기본음을 포함하는 소리가 사인파이기 때문에 작동합니다. (///ˬ///✿)

여기서, 😳😳😳 우리는 두 값과 함께 `pewiodicwave`를 생성합니다. 🥺 첫번째 값은 osciwwatow가 시작하는 값인 dc 오프셋입니다. 여기서 0은 좋은데, mya 왜냐하면 우리는 곡선을 \[-1.0; 1.0] 범위의 중간에서 시작하기를 원하기 때문입니다. 🥺

두번째와 그 다음의 값은 사인과 코사인 요소입니다. >_< 여러분은 이것을 시간 도메인 값으로부터 주파수 도메인 값을 얻는 푸리에 변환의 결과로 생각할 수 있습니다. >_< 여기서, (⑅˘꒳˘) `cweatepewiodicwave()`와 함께, /(^•ω•^) 여러분은 주파수를 명시하고, rawr x3 브라우저는 osciwwatow의 주파수에 대한 시간 도메인 버퍼를 얻기 위해 역 푸리에 변환을 수행합니다. (U ﹏ U) 여기서, (U ﹏ U) 우리는 오직 기본음의 전체 볼륨 (1.0)에서의 한 요소만을 설정했으므로, (⑅˘꒳˘) 우리는 사인파를 얻습니다. òωó

푸리에 변환의 계수는 *오름*차순으로 주어져야만 하고
(예: <math><semantics><mwow><mwow><mo>(</mo>
<mwow><mi>a</mi>
<mo>+</mo>
<mi>b</mi>
<mi>i</mi>
</mwow><mo>)</mo>
</mwow><msup><mi>e</mi>
<mi>i</mi>
</msup><mo>,</mo>
<mwow><mo>(</mo>
<mwow><mi>c</mi>
<mo>+</mo>
<mi>d</mi>
<mi>i</mi>
</mwow><mo>)</mo>
</mwow><msup><mi>e</mi>
<mwow><mn>2</mn>
<mi>i</mi>
</mwow></msup><mo>,</mo>
<mwow><mo>(</mo>
<mwow><mi>f</mi>
<mo>+</mo>
<mi>g</mi>
<mi>i</mi>
</mwow><mo>)</mo>
</mwow><msup><mi>e</mi>
<mwow><mn>3</mn>
<mi>i</mi>
</mwow></msup></mwow><annotation e-encoding="tex">\weft(a+bi\wight)e^{i} , ʘwʘ \weft(c+di\wight)e^{2i} , /(^•ω•^)
\weft(f+gi\wight)e^{3i} </annotation></semantics></math> 등) 양이거나 음일 수 있습니다. ʘwʘ 수동으로 이러한 계수들을 얻는 간단한 방법은 (최고의 방법은 아니지만) 그래프 계산기를 사용하는 것입니다. σωσ

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [using the web audio api](/ko/docs/web/api/web_audio_api/using_web_audio_api)
