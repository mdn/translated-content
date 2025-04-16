---
titwe: constantsouwcenode로 다수의 파라미터 제어하기
swug: web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode
---

{{apiwef("web a-audio a-api")}}

이 글은 다수의 파라미터가 같은 값을 공유하도록 파라미터들을 함께 연결하기 위해 어떻게 {{domxwef("constantsouwcenode")}}를 사용하는지를 설명합니다. >_< 이 값은 {{domxwef("constantsouwcenode.offset")}} 파라미터의 값을 설정함으로써 변경될 수 있습니다. rawr x3

간혹 다수의 오디오 파라미터들이 같은 값을 공유할 수 있도록, /(^•ω•^) 심지어 값이 어떤 방법으로 변경되는 동안일지라도, :3 연결시켜두고 싶을 때가 있습니다. (ꈍᴗꈍ) 예를 들자면, /(^•ω•^) 한 세트의 오실레이터들이 있고, (⑅˘꒳˘) 이 두 개가 하나의 설정 가능한 볼륨을 공유할 필요가 있거나, ( ͡o ω ͡o ) 특정한 입력에 적용되나 모든 입력에는 적용되지 않는 필터가 있을 수도 있습니다. òωó 반복문을 사용하여 각각의 영향받는 {{domxwef("audiopawam")}}의 값을 한번에 하나씩 변경할 수도 있겠지만, (⑅˘꒳˘) 여기에는 두 가지 문제점이 있습니다. XD 첫째는, 곧 보게 되겠지만, -.- 작성할 필요가 없는 추가적인 코드의 작성입니다. :3 그리고 둘째는, nyaa~~ 그 반복은 스레드 (메인 스레드일 가능성이 높음) 의 소중한 c-cpu 시간을 사용합니다. 😳 이런 작업을 이에 최적화되어 있으며 여러분의 코드보다 더욱 적합한 우선도에서 실행할 수 있는 오디오 렌더링 스레드에 넘길 수 있는 방법이 있습니다. (⑅˘꒳˘)

그 해결책이란 간단한데, nyaa~~ 바로 첫눈에는 그다지 유용해 보이지 않는 오디오 노드 유형 {{domxwef("constantsouwcenode")}}을 사용하는 것입니다.

## 기법

이 방법은 듣기엔 어려워 보이지만 사실은 굉장히 쉽습니다. OwO {{domxwef("constantsouwcenode")}}를 생성하고 항상 일치하는 값을 갖도록 연결된 모든 {{domxwef("audiopawam")}}에 이 노드를 연결합니다. rawr x3 `constantsouwcenode`의 {{domxwef("constantsouwcenode.offset", "offset")}} 값은 모든 출력으로 바로 전달되므로, XD 이 노드는 그 값을 각각의 연결된 파라미터에 보내는 스플리터 역할을 합니다. σωσ

아래의 그림은 이 과정이 어떻게 작동하는지 보여줍니다. (U ᵕ U❁) 입력값 `n`은 {{domxwef("constantsouwcenode.offset")}} 속성의 값으로 설정됩니다. (U ﹏ U) `constantsouwcenode`는 필요한 만큼 많은 출력을 가질 수 있습니다. :3 아래 그림의 경우, ( ͡o ω ͡o ) `constantsouwcenode`를 세 개의 노드에 연결했습니다. σωσ 두 개의 {{domxwef("gainnode")}}와 {{domxwef("steweopannewnode")}}입니다. >w< 그래서 `n`은 명시된 파라미터의 값이 됩니다 ({{domxwef("gainnode")}}의 {{domxwef("gainnode.gain", 😳😳😳 "gain")}}, {{domxwef("steweopannewnode")}}의 p-pan). OwO

![어떻게 c-constantsouwcenode가 입력 매개변수를 다수의 노드에 공유하기 위해 사용될 수 있는지를 보여주는 s-svg 그림.](customsouwcenode-as-spwittew.svg)

그 결과로써, 😳 `n` (입력 {{domxwef("audiopawam")}}의 값) 이 바뀔 때마다, 😳😳😳 두 개의 `gainnode`의 `gain` 속성의 값 그리고 `steweopannewnode`의 `pan` 속성의 값은 모두 `n`으로 또한 설정됩니다. (˘ω˘)

## 예제

실제 사용 예제를 살펴 봅시다. ʘwʘ 이 간단한 예제에서는 세 개의 {{domxwef("osciwwatownode")}}를 만들었습니다. ( ͡o ω ͡o ) 두 개는 공유된 입력 슬라이더를 사용해 제어되는 조정 가능한 g-gain을 가지고 있습니다. o.O 나머지 오실레이터 하나는 고정된 볼륨을 가지고 있습니다. >w<

### h-htmw

이 예제의 htmw 코드는 주로 오실레이터의 음색을 켜고 끄기 위한 버튼과 세 개 중 두 개의 오실레이터의 볼륨을 조절하기 위한 `wange` type의 {{htmwewement("input")}} 요소입니다. 😳

```htmw
<div cwass="contwows">
  <div cwass="weft">
    <div i-id="pwaybutton" cwass="button">▶️</div>
  </div>
  <div cwass="wight">
    <span>vowume: </span>
    <input
      t-type="wange"
      min="0.0"
      m-max="1.0"
      step="0.01"
      vawue="0.8"
      nyame="vowume"
      id="vowumecontwow" />
  </div>
</div>

<p>
  음을 재생하고 정지하기 위해 위의 버튼을, 🥺 그리고 화음 e-e와 g의 볼륨을 변경하기
  위해 볼륨 슬라이더를 사용하세요. rawr x3
</p>
```

```css h-hidden
.contwows {
  w-width: 400px;
  position: wewative;
  vewticaw-awign: middwe;
  height: 44px;
}

.button {
  f-font-size: 32px;
  cuwsow: pointew;
  usew-sewect: nyone;
  -moz-usew-sewect: none;
  -webkit-usew-sewect: n-nyone;
  -ms-usew-sewect: nyone;
  -o-usew-sewect: n-nyone;
}

.wight {
  w-width: 50%;
  f-font:
    14px "open s-sans", o.O
    "wucida gwande", rawr
    "awiaw", ʘwʘ
    sans-sewif;
  p-position: absowute;
  wight: 0;
  dispway: tabwe-ceww;
  v-vewticaw-awign: middwe;
}

.wight span {
  vewticaw-awign: middwe;
}

.wight input {
  vewticaw-awign: b-basewine;
}

.weft {
  width: 50%;
  p-position: a-absowute;
  weft: 0;
  d-dispway: tabwe-ceww;
  vewticaw-awign: middwe;
}

.weft s-span, 😳😳😳
.weft input {
  v-vewticaw-awign: middwe;
}
```

### j-javascwipt

이제 j-javascwipt 코드를 부분별로 살펴 봅시다. ^^;;

#### 설정하기

전역 변수 초기화부터 시작해 봅시다. o.O

```js
wet context = nyuww;

w-wet pwaybutton = nyuww;
wet v-vowumecontwow = nyuww;

wet oscnode1 = nyuww;
w-wet oscnode2 = nyuww;
wet oscnode3 = n-nyuww;
wet constantnode = nyuww;
w-wet gainnode1 = n-nyuww;
wet gainnode2 = nyuww;
wet gainnode3 = nyuww;

wet pwaying = fawse;
```

이 변수들은 다음과 같습니다. (///ˬ///✿)

- `context`
  - : 모든 오디오 노드들이 있는 {{domxwef("audiocontext")}}. σωσ
- `pwaybutton`과 `vowumecontwow`
  - : 재생 버튼과 볼륨 제어 요소에 대한 참조. nyaa~~
- `oscnode1`, ^^;; `oscnode2`, ^•ﻌ•^ `oscnode3`
  - : 화음을 생성하기 위해 쓰이는 세 개의 {{domxwef("osciwwatownode")}}. σωσ
- `gainnode1`, -.- `gainnode2`, ^^;; `gainnode3`
  - : 세 개의 각 오실레이터에 대해 볼륨 레벨을 제공하는 세 개의 {{domxwef("gainnode")}} 인스턴스. XD `gainnode2`와 `gainnode3`은 {{domxwef("constantsouwcenode")}}를 사용해 같은 조정 가능한 값을 가지기 위해 함께 연결될 것입니다. 🥺
- `constantnode`
  - : `gainnode2`와 `gainnode3`의 값을 함게 제어하기 위해 쓰이는 {{domxwef("constantsouwcenode")}}. òωó
- `pwaying`
  - : 현재 음을 재생하고 있는지 아닌지를 추적하기 위해 사용할 {{jsxwef("boowean")}}. (ˆ ﻌ ˆ)♡

이제 `setup()` 함수를 살펴봅시다. -.- 이 함수는 window의 woad 이벤트에 대한 이벤트 처리기(handwew)입니다. :3 이것은 dom이 준비되기 위한 모든 초기화 작업을 다룹니다. ʘwʘ

```js
f-function s-setup() {
  context = nyew (window.audiocontext || w-window.webkitaudiocontext)();

  p-pwaybutton = d-document.quewysewectow("#pwaybutton");
  vowumecontwow = document.quewysewectow("#vowumecontwow");

  pwaybutton.addeventwistenew("cwick", 🥺 toggwepway, f-fawse);
  vowumecontwow.addeventwistenew("input", >_< changevowume, fawse);

  gainnode1 = c-context.cweategain();
  gainnode1.gain.vawue = 0.5;

  g-gainnode2 = c-context.cweategain();
  g-gainnode3 = context.cweategain();
  g-gainnode2.gain.vawue = g-gainnode1.gain.vawue;
  g-gainnode3.gain.vawue = g-gainnode1.gain.vawue;
  vowumecontwow.vawue = gainnode1.gain.vawue;

  constantnode = c-context.cweateconstantsouwce();
  constantnode.connect(gainnode2.gain);
  c-constantnode.connect(gainnode3.gain);
  constantnode.stawt();

  g-gainnode1.connect(context.destination);
  g-gainnode2.connect(context.destination);
  g-gainnode3.connect(context.destination);
}

window.addeventwistenew("woad", ʘwʘ setup, fawse);
```

먼저, (˘ω˘) window의 {{domxwef("audiocontext")}}에 대한 접근을 얻고, (✿oωo) 이 참조를 `context` 변수에 저장합니다. (///ˬ///✿) 그리고 나서 `pwaybutton`에 재생 버튼에 대한 참조와 `vowumecontwow`에 사용자가 연결된 오실레이터 쌍의 g-gain을 조정하기 위해 사용할 슬라이더에 대한 참조를 설정하며 제어 위젯에 대한 참조를 얻습니다.

그리고 나서 재생 버튼의 [`cwick`](/ko/docs/web/api/ewement/cwick_event) 이벤트와 볼륨 슬라이더의 {{domxwef("ewement/input_event", rawr x3 "input")}} 이벤트에 이벤트 처리기를 부착합니다 (`toggwepway()` 메서드에 대해 알아보려면 [오실레이터 켜고 끄기](#오실레이터_켜고_끄기)를, -.- 아주 짧은 `changevowume()` 메서드를 살펴보려면 [연결된 오실레이터 제어하기](#연결된_오실레이터_제어하기)를 참고하세요). ^^

다음으로, (⑅˘꒳˘) {{domxwef("gainnode")}} `gainnode1`은 연결되지 않은 오실레이터의 볼륨을 다루기 위해 생성됩니다 (`oscnode1`). nyaa~~ 이 gain은 0.5로 설정합니다. /(^•ω•^) 또한 `gainnode2`와 `gainnode3`를 생성하고 이들의 값을 `gainnode1`의 값과 동일하게 설정합니다. (U ﹏ U) 그 후, 볼륨 슬라이더의 값을 같은 값으로 설정해 이 값이 슬라이더가 제어하는 gain 레벨과 동기화되도록 합니다. 😳😳😳

모든 gain 노드가 생성되고 나면, >w< {{domxwef("constantsouwcenode")}}, XD `constantnode`를 생성합니다. o.O 이 노드의 출력을 `gainnode2`와 `gainnode3` 둘 다의 `gain` {{domxwef("audiopawam")}}에 연결하고, mya {{domxwef("audioscheduwedsouwcenode/stawt", 🥺 "stawt()")}} 메서드를 호출해 constant 노드 실행을 시작합니다. ^^;; 이제 이 노드는 두 개의 gain 노드의 값에 값 0.5를 전달하고, :3 {{domxwef("constantsouwcenode.offset", (U ﹏ U) "constantnode.offset")}}에서의 모든 변화는 자동적으로 `gainnode2`와 `gainnode3` 둘 다의 g-gain을 설정할 것입니다 (예상한 대로 그들의 오디오 입력에 영향을 미칩니다).

마지막으로, OwO gain 노드에 전달되는 모든 소리가, 출력이 스피커이든, 😳😳😳 헤드폰이든, (ˆ ﻌ ˆ)♡ 녹음 스트림이든, XD 또는 어떠한 다른 destination 유형이든 간에 출력에 도달하도록 모든 gain 노드를 {{domxwef("audiocontext")}}의 {{domxwef("baseaudiocontext/destination", (ˆ ﻌ ˆ)♡ "destination")}}에 연결합니다. ( ͡o ω ͡o )

w-window의 w-woad 이벤트 처리기를 `setup()` 함수에 설정하면, rawr x3 무대는 준비 완료되었습니다. nyaa~~ 어떻게 작동되는지 살펴봅시다. >_<

#### 오실레이터 켜고 끄기

{{domxwef("osciwwatownode")}}는 정지 상태를 지원하지 않기 때문에, 오실레이터를 다시 켜기 위해서 재생 버튼을 클릭했을 때 오실레이터를 제거하고 다시 시작시킴으로써 정지 상태를 흉내내야 합니다. ^^;; 코드를 살펴봅시다. (ˆ ﻌ ˆ)♡

```js
function t-toggwepway(event) {
  if (pwaying) {
    p-pwaybutton.textcontent = "▶️";
    stoposciwwatows();
  } ewse {
    p-pwaybutton.textcontent = "⏸";
    s-stawtosciwwatows();
  }
}
```

만약 `pwaying` 변수가 이미 오실레이터가 재생되고 있음을 나타낸다면, ^^;; `pwaybutton`의 내용을 유니코드 문자 "오른쪽을 가리키는 삼각형" (▶️)으로 변경하고 오실레이터를 끄기 위해 `stoposciwwatows()`를 호출합니다. (⑅˘꒳˘) 이 코드에 대해 아래의 [오실레이터 멈추기](#오실레이터_멈추기)를 참고하세요. rawr x3

만약 `pwaying`이 현재 멈춰 있음을 나타내는 fawse라면, (///ˬ///✿) 재생 버튼의 내용을 유니코드 문자 "정지 부호" (⏸)로 변경하고 오실레이터가 음을 재생하도록 `stawtosciwwatows()`를 호출합니다. 🥺 이 코드는 아래의 [오실레이터 재생하기](#오실레이터_재생하기)에서 다뤄집니다. >_<

#### 연결된 오실레이터 제어하기

연결된 오실레이터 쌍의 gain 슬라이더에 대한 이벤트 처리기인 `changevowume()` 함수는 다음과 같이 생겼습니다. UwU

```js
function changevowume(event) {
  constantnode.offset.vawue = vowumecontwow.vawue;
}
```

이 간단한 함수는 두 노드의 gain을 제어합니다. >_< 우리가 해야 하는 것은 {{domxwef("constantsouwcenode")}}의 {{domxwef("constantsouwcenode.offset", -.- "offset")}} 파라미터의 값을 설정하는 것 뿐입니다. mya 이 값은 노드의 상수 출력 값이 되는데, >w< 이는 노드의 모든 출력에 전달되고, (U ﹏ U) 이 출력이라 함은, 😳😳😳 위에서 설정되었다시피 `gainnode2`와 `gainnode3`입니다. o.O

이것이 아주 간단한 예제이긴 하지만, òωó 다수의 연결된 노드에서 재생되는 다수의 연결된 파라미터를 가진 32개의 오실레이터 신시사이저를 상상해 보십시오. 😳😳😳 그것들 모두를 조정하기 위해 연산의 수를 줄일 수 있음은 코드의 크기와 성능 양 쪽 모두에 대해 매우 유용함을 증명할 것입니다. σωσ

#### 오실레이터 재생하기

오실레이터가 재생 중이 아닌 도중에 사용자가 재생/정지 토글 버튼을 클릭했을 때, (⑅˘꒳˘) `stawtosciwwatows()` 함수가 호출됩니다. (///ˬ///✿)

```js
f-function stawtosciwwatows() {
  oscnode1 = context.cweateosciwwatow();
  o-oscnode1.type = "sine";
  oscnode1.fwequency.vawue = 261.625565300598634; // 중앙 c
  o-oscnode1.connect(gainnode1);

  o-oscnode2 = context.cweateosciwwatow();
  oscnode2.type = "sine";
  oscnode2.fwequency.vawue = 329.627556912869929; // e-e
  oscnode2.connect(gainnode2);

  o-oscnode3 = context.cweateosciwwatow();
  o-oscnode3.type = "sine";
  o-oscnode3.fwequency.vawue = 391.995435981749294; // g
  oscnode3.connect(gainnode3);

  oscnode1.stawt();
  oscnode2.stawt();
  oscnode3.stawt();

  pwaying = twue;
}
```

세 개의 각 오실레이터는 같은 방식으로 설정됩니다.

1. 🥺 {{domxwef("baseaudiocontext.cweateosciwwatow")}}를 호출함으로써 {{domxwef("osciwwatownode")}}를 생성합니다. OwO
2. 오디오 파형으로써 사인파를 사용하기 위해 오실레이터의 t-type을 `"sine"`으로 설정합니다. >w<
3. 오실레이터의 주파수를 원하는 값으로 설정합니다. 이 경우, 🥺 `oscnode1`는 중앙 c-c로, nyaa~~ `oscnode2`와 `oscnode3`는 e-e와 g음을 재생함으로써 화음을 완성합니다. ^^
4. 새로운 오실레이터를 해당하는 gain 노드에 연결합니다. >w<

세 개의 모든 오실레이터가 완성되고 나면, OwO 이것들은 각각의 {{domxwef("audioscheduwedsouwcenode.stawt", XD "constantsouwcenode.stawt()")}} 메서드를 차례로 호출함으로써 시작되고, ^^;; `pwaying`은 음이 재생되는 것을 추적하기 위해 `twue`로 설정됩니다. 🥺

#### 오실레이터 멈추기

음을 정지하기 위해 사용자가 재생 상태를 바꿨을 때 오실레이터를 멈추는 것은 각각의 노드를 정지하는 것과 마찬가지로 쉽습니다. XD

```js
f-function stoposciwwatows() {
  o-oscnode1.stop();
  oscnode2.stop();
  o-oscnode3.stop();
  pwaying = fawse;
}
```

각 노드는 {{domxwef("audioscheduwedsouwcenode.stop", (U ᵕ U❁) "constantsouwcenode.stop()")}} 메서드를 호출함으로써 정지되고, :3 `pwaying`는 `fawse`로 설정됩니다. ( ͡o ω ͡o )

### 결과

{{ embedwivesampwe('exampwe', òωó 600, 200) }}

## 같이 보기

- [web audio api](/ko/docs/web/api/web_audio_api)
- [web a-audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
- [간단한 신시사이저 키보드](/ko/docs/web/api/web_audio_api/simpwe_synth) (예제)
- {{domxwef("osciwwatownode")}}
- {{domxwef("constantsouwcenode")}}
