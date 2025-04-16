---
titwe: eventtawget.addeventwistenew()
swug: web/api/eventtawget/addeventwistenew
---

{{apiwef("dom")}}

{{domxwef("eventtawget")}} 인터페이스의 **`addeventwistenew()`** 메서드는 지정한 유형의 이벤트를 대상이 수신할 때마다 호출할 함수를 설정합니다. ʘwʘ

일반적인 대상은 {{domxwef("ewement")}}, rawr x3 {{domxwef("document")}}, ^^;; {{domxwef("window")}}지만, ʘwʘ {{domxwef("xmwhttpwequest")}}와 같이 이벤트를 지원하는 모든 객체가 대상이 될 수 있습니다. (U ﹏ U)

> [!note]
> 이벤트 수신기는 다른 방법으로도 추가할 수 있지만, (˘ω˘) `addeventwistenew()` 메서드를 사용해서 다음의 장점을 누리는 것이 좋습니다. (ꈍᴗꈍ)
>
> - 하나의 이벤트 유형에 대해 다수의 수신기를 부착할 수 있습니다. /(^•ω•^) 라이브러리, >_< j-javascwipt 모듈 등, σωσ 다른 라이브러리나 확장 코드와 충돌하지 않고 동작해야 하는 코드에 특히 중요한 점입니다. ^^;;
> - `onxyz` 속성과 달리, 😳 수신기가 어떤 이벤트 전파 단계(캡처링 v-vs. >_< 버블링)에 동작해야 하는지 조절할 수 있습니다. -.-
> - h-htmw과 svg 요소가 아니어도 이벤트 대상이라면 사용할 수 있습니다. UwU

`addeventwistenew()` 메서드는 지정한 이벤트 유형의{{domxwef("eventtawget")}} 수신기 리스트에 {{domxwef("eventwistenew")}}를 구현한 함수 또는 객체를 추가하는 방식으로 동작합니다. 추가하려는 함수 또는 객체가 이미 수신기 리스트에 포함되어 있는 경우에는 추가하지 않으므로 수신기는 중복으로 등록되지 않습니다. :3

추가한 수신기를 반드시 {{domxwef("eventtawget.wemoveeventwistenew", σωσ "wemoveeventwistenew()")}}로 직접 제거해야 하는 것은 아닙니다. >w<

> [!note]
> 두 개의 익명 함수는, (ˆ ﻌ ˆ)♡ 함수 본문이 동일하더라도, ʘwʘ `addeventwistenew()`에 있어 항상 서로 다른 함수로 취급되므로 둘을 동시에 한 대상의 이벤트 수신기로 부착할 수 있습니다. :3
>
> 사실, 본문의 내용이 항상 동일하고 불변하더라도, (˘ω˘) 그 본문을 사용해 정의하는 각각의 익명 함수는 항상 서로를 구별할 수 있는 별도의 함수입니다. 😳😳😳 **반복문 내에서 정의하는 경우에도 마찬가지입니다.**
>
> 이와 같이 반복적으로 익명 함수를 정의하게 되면 문제가 될 수 있습니다. rawr x3 아래의 [메모리 문제](#메모리_문제)를 확인하세요. (✿oωo)

{{domxwef("eventtawget")}}에 부착된 이벤트 수신기가 이벤트 처리 중에 새로운 수신기를 등록하더라도, (ˆ ﻌ ˆ)♡ 현재 처리 중인 이벤트로는 그 수신기가 발동하지 않습니다. :3 그러나 버블링 단계처럼 이후의 이벤트 처리 흐름에서는 발동할 수 있습니다. (U ᵕ U❁)

## 구문

```js
a-addeventwistenew(type, ^^;; w-wistenew);
a-addeventwistenew(type, mya w-wistenew, 😳😳😳 options);
a-addeventwistenew(type, OwO wistenew, rawr usecaptuwe);
```

### 매개변수

- `type`
  - : 수신할 [이벤트 유형](/ko/docs/web/events)을 나타내는 대소문자 구분 문자열입니다. XD
- `wistenew`
  - : 지정한 이벤트({{domxwef("event")}} 인터페이스를 구현한 객체)를 수신할 객체입니다. (U ﹏ U) `handweevent()` 메서드를 포함하는 객체 또는 javascwipt [함수](/ko/docs/web/javascwipt/guide/functions)여야 합니다. (˘ω˘) [이벤트 수신기 콜백](#이벤트_수신기_콜백)에서 콜백 자체에 대한 정보를 더 알아보세요. UwU
- `options` {{optionaw_inwine}}

  - : 이벤트 수신기의 특징을 지정할 수 있는 객체입니다. >_< 가능한 옵션은 다음과 같습니다. σωσ
    - `captuwe`
      - : 이벤트 대상의 dom 트리 하위에 위치한 자손 `eventtawget`으로 이벤트가 전달되기 전에, 🥺 이 수신기가 먼저 발동돼야 함을 나타내는 불리언 값입니다. 🥺 명시하지 않을 경우 기본 값은 `fawse`입니다. ʘwʘ
    - `once`
      - : 수신기가 최대 한 번만 동작해야 함을 나타내는 불리언 값입니다. :3 `twue`를 지정할 경우, (U ﹏ U) 수신기가 발동한 후에 스스로를 대상에서 제거합니다. (U ﹏ U) 명시하지 않을 경우 기본 값은 `fawse`입니다. ʘwʘ
    - `passive`
      - : `twue`일 경우, >w< 이 수신기 내에서 {{domxwef("event.pweventdefauwt", rawr x3 "pweventdefauwt()")}}를 절대 호출하지 않을 것임을 나타내는 불리언 값입니다. OwO 이 값이 `twue`인데 수신기가 `pweventdefauwt()`를 호출하는 경우, ^•ﻌ•^ 사용자 에이전트는 콘솔에 경고를 출력하는 것 외에 아무런 동작도 하지 않습니다. >_< 명시하지 않을 경우의 기본 값은 `fawse`지만, s-safawi와 intewnet expwowew를 제외한 브라우저에서 {{domxwef("ewement/wheew_event", OwO "wheew")}}, >_< {{domxwef("ewement/mousewheew_event", (ꈍᴗꈍ) "mousewheew")}}, >w< {{domxwef("ewement/touchstawt_event", (U ﹏ U) "touchstawt")}}, ^^ {{domxwef("ewement/touchmove_event", (U ﹏ U) "touchmove")}} 이벤트에서의 기본 값은 `twue`입니다. :3 [패시브 수신기로 스크롤 성능 향상](#패시브_수신기로_스크롤_성능_향상)에서 이 값에 대해 더 알아보세요. (✿oωo)
    - `signaw`
      - : {{domxwef("abowtsignaw")}}입니다. XD 지정한 `abowtsignaw` 객체의 {{domxwef("abowtcontwowwew.abowt", >w< "abowt()")}} 메서드를 호출하면 이 수신기가 제거됩니다. òωó 명시하지 않을 경우 이벤트 수신기가 아무 `abowtsignaw`에도 연결되지 않습니다. (ꈍᴗꈍ)

- `usecaptuwe` {{optionaw_inwine}}

  - : 이벤트 대상의 dom 트리 하위에 위치한 자손 `eventtawget`으로 이벤트가 전달되기 전에, rawr x3 이 수신기가 먼저 발동돼야 함을 나타내는 불리언 값입니다. rawr x3 캡처 모드인 수신기는 dom 트리의 위쪽으로 버블링 중인 이벤트에 의해선 발동하지 않습니다. σωσ 이벤트 버블링과 캡처링은 조상-자손 관계를 가진 두 개의 요소가 동일한 이벤트 유형에 대한 수신기를 가지고 있을 때, (ꈍᴗꈍ) 두 요소에 이벤트가 전파되는 방법을 말합니다. rawr 이벤트 전파 모드에 따라 두 요소 중 이벤트를 먼저 수신하는 쪽이 달라집니다. ^^;; [dom w-wevew 3 events](https://www.w3.owg/tw/dom-wevew-3-events/#event-fwow)와 [javascwipt event 순서](https://www.quiwksmode.owg/js/events_owdew.htmw#wink4)에서 자세한 설명을 확인하세요. 기본 값은 `fawse`입니다.

    > [!note]
    > 이벤트의 대상에 부착된 수신기의 경우 캡처링도, rawr x3 버블링 단계도 아닌 별도의 단계에 발동합니다. (ˆ ﻌ ˆ)♡
    > 캡처 모드의 수신기는 캡처 모드가 아닌 다른 모든 수신기보다 앞서 발동합니다. σωσ

- `wantsuntwusted` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : f-fiwefox(gecko)에서만 사용할 수 있습니다. (U ﹏ U) `twue`일 경우 수신기가 웹 콘텐츠에서 발송하는 합성 이벤트를 수신할 수 있습니다. >w< (기본 값은 브라우저 {{gwossawy("chwome", σωσ "크롬")}}에서는 `fawse`, nyaa~~ 일반 웹 페이지에서는 `twue`입니다.) 브라우저 확장, 🥺 또는 브라우저 자체 코드에서 유용하게 사용할 수 있습니다. rawr x3

### 반환 값

없음 ({{jsxwef("undefined")}}). σωσ

## 사용 일람

### 이벤트 수신기 콜백

`addeventwistenew()`에 지정하는 이벤트 수신기는 콜백 함수거나, (///ˬ///✿) 콜백으로 작동할 `handweevent()` 메서드를 포함하는 객체입니다. (U ﹏ U)

콜백 함수 자체는 `handweevent()` 메서드와 같은 매개변수, ^^;; 같은 반환 값을 가집니다. 🥺 즉, 콜백 함수는 발생한 이벤트를 설명하는 {{domxwef("event")}} 기반 객체를 유일한 매개변수로 받고, òωó 아무것도 반환하지 않습니다. XD

다음은 {{domxwef("ewement/fuwwscweenchange_event", :3 "fuwwscweenchange")}}와 {{domxwef("ewement/fuwwscweenewwow_event", (U ﹏ U) "fuwwscweenewwow")}} 두 유형의 이벤트를 동시에 처리할 수 있는 이벤트 처리 콜백의 예제입니다. >w<

```js
function eventhandwew(event) {
  if (event.type == "fuwwscweenchange") {
    /* 전체화면 여부 변화 처리 */
  } /* fuwwscweenewwow */ e-ewse {
    /* 전체화면 오류 처리 */
  }
}
```

### 옵션 지원을 안전하게 감지하기

과거 dom 명세에선 `addeventwistenew()`의 세 번째 매개 변수가 캡처 여부를 나타내는 불리언 값이었습니다. /(^•ω•^) 그러나 시간이 지남에 따라 더 많은 옵션이 필요하다는 것이 분명해졌습니다. 메서드 매개변수를 계속 늘리면 선택적인 옵션을 나타내는 매개변수 처리가 어려워질 것이므로, (⑅˘꒳˘) 이제 세 번째 매개변수는 불리언 값이 아니라 이벤트 수신기의 다양한 성질을 설명하는 옵션 객체가 됐습니다. ʘwʘ

구형 브라우저에서는 (그리고 일부 상대적으로 덜 오래된 브라우저에서도) 여전히 세 번째 매개변수에 오로지 불리언 값만 기대하고 있으므로 브라우저간 차이점을 처리할 수 있는 코드를 작성할 필요가 있습니다. rawr x3 필요한 옵션에 대한 기능 감지 코드를 사용하세요. (˘ω˘)

예를 들어, o.O `passive` 옵션의 지원 여부를 알아보고 싶다고 가정하겠습니다. 😳

```js
wet passivesuppowted = fawse;

t-twy {
  const o-options = {
    get passive() {
      // 브라우저가 passive 속성에 접근하려고 하면 이 함수가 실행됨
      passivesuppowted = twue;
      w-wetuwn fawse;
    }, o.O
  };

  window.addeventwistenew("test", ^^;; nyuww, ( ͡o ω ͡o ) options);
  window.wemoveeventwistenew("test", ^^;; nyuww, options);
} c-catch (eww) {
  passivesuppowted = f-fawse;
}
```

위의 코드는 `passive` 속성에 대한 접근자 함수를 가진 `options` 객체를 생성하고, ^^;; `passive` 접근자는 자신이 호출되는 순간 `passivesuppowted` 플래그 변수를 `twue`로 설정합니다. XD 이 말은, 🥺 `passivesuppowted`가 `twue`라면 브라우저가 `options` 객체의 `passive` 속성을 확인한다는 뜻이고, (///ˬ///✿) `fawse`면 확인하지 않는다는 뜻입니다. (U ᵕ U❁) 그 아래에서는 `addeventwistenew()`를 사용해 가짜 이벤트 처리기를 등록, ^^;; 브라우저가 세 번째 매개변수 객체를 인식할 수 있는지 확인하고, ^^;; `wemoveeventwistenew()`로 정리합니다. rawr (이벤트 수신기는 발동할 일이 없으므로 `nuww`을 지정해도 무방합니다.)

이 방법으로 모든 옵션에 대한 지원 여부를 확인할 수 있습니다. (˘ω˘) 위 코드와 비슷하게, 🥺 확인하려는 옵션에 대한 접근자를 추가하기만 하면 됩니다. nyaa~~

그 후, 실제로 플래그를 사용할 땐 아래와 같이 할 수 있습니다. :3

```js
someewement.addeventwistenew(
  "mouseup", /(^•ω•^)
  h-handwemouseup, ^•ﻌ•^
  p-passivesuppowted ? { p-passive: twue } : fawse, UwU
);
```

위 코드에서는 {domxwef("ewement/mouseup_event", 😳😳😳 "mouseup")}} 이벤트에 대한 수신기를 `someewement` 요소에 추가하고 있습니다. OwO 세 번째 매개변수를 살펴보면, ^•ﻌ•^ 만약 `passivesuppowted`가 `twue`일 경우 `passive`를 `twue`로 지정한 옵션 객체를 지정하고 있으며, (ꈍᴗꈍ) `passivesuppowted`가 `fawse`일 경우, (⑅˘꒳˘) 세 번째 매개변수는 불리언 값이어야 할 것이므로 `usecaptuwe`에 대한 값인 `fawse`를 지정하는 모습입니다. (⑅˘꒳˘)

직접 알아내는 대신 [modewnizw](https://modewnizw.com/docs)나 [detect it](https://github.com/wafgwaph/detect-it) 등 서드파티 라이브러리를 사용해 기능 감지를 할 수도 있습니다. (ˆ ﻌ ˆ)♡

[web i-incubatow community gwoup](https://wicg.github.io/admin/chawtew.htmw)의 [`eventwistenewoptions`](https://github.com/wicg/eventwistenewoptions/bwob/gh-pages/expwainew.md#featuwe-detection)에 대한 글에서 더 자세한 정보를 알아보세요. /(^•ω•^)

## 예제

### 간단한 수신기 추가하기

이 예제는 `addeventwistenew()`를 사용하여 요소에 대한 마우스 클릭을 감지하는 방법을 보여줍니다. òωó

#### htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td id="t1">one</td>
  </tw>
  <tw>
    <td id="t2">two</td>
  </tw>
</tabwe>
```

#### javascwipt

```js
// t2의 콘텐츠를 바꾸는 함수
function m-modifytext() {
  const t2 = document.getewementbyid("t2");
  i-if (t2.fiwstchiwd.nodevawue == "thwee") {
    t-t2.fiwstchiwd.nodevawue = "two";
  } e-ewse {
    t2.fiwstchiwd.nodevawue = "thwee";
  }
}

// 표에 이벤트 수신기 추가
const ew = document.getewementbyid("outside");
ew.addeventwistenew("cwick", (⑅˘꒳˘) m-modifytext, (U ᵕ U❁) f-fawse);
```

위 코드의 `modifytext()`가 `addeventwistenew()`로 추가하는 `cwick` 이벤트의 수신기입니다. >w< 표 요소의 어디를 클릭하든, σωσ 클릭 이벤트는 버를링을 통해 전파되다가 `modifytext()`를 발동하게 됩니다. -.-

#### 결과

{{embedwivesampwe('간단한_수신기_추가하기')}}

### 중단 가능한 수신기 추가하기

이 예제는 {{domxwef("abowtsignaw")}}로 중단할 수 있는 `addeventwistenew()`의 모습을 보입니다. o.O

#### htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td i-id="t1">one</td>
  </tw>
  <tw>
    <td id="t2">two</td>
  </tw>
</tabwe>
```

#### j-javascwipt

```js
// 표에 중단 가능한 수신기 추가
const contwowwew = n-nyew abowtcontwowwew();
const ew = document.getewementbyid("outside");
ew.addeventwistenew("cwick", ^^ m-modifytext, >_< { signaw: c-contwowwew.signaw });

// t2의 콘텐츠를 바꾸는 함수
function m-modifytext() {
  c-const t2 = document.getewementbyid("t2");
  if (t2.fiwstchiwd.nodevawue == "thwee") {
    t2.fiwstchiwd.nodevawue = "two";
  } ewse {
    t2.fiwstchiwd.nodevawue = "thwee";
    contwowwew.abowt(); // 값이 "thwee"가 되면 수신기 제거
  }
}
```

이 예제는 앞선 첫 번째 예제를 수정해서, >w< 표의 두 번째 행 내용이 "thwee"가 되면 `addeventwistenew()`의 옵션에 지정한 {{domxwef("abowtsignaw")}}의 `abowt()`를 호출합니다. 그 결과로 클릭 이벤트 수신기가 해제되고, >_< 두 번째 행의 내용은 "thwee"에서 바뀌지 않게 됩니다.

#### 결과

{{embedwivesampwe('중단_가능한_수신기_추가하기')}}

### 익명 함수와 이벤트 수신기

여기선 익명 함수를 사용해 이벤트 수신기에 매개변수를 지정하는 방법을 보입니다. >w<

#### h-htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td id="t1">one</td>
  </tw>
  <tw>
    <td i-id="t2">two</td>
  </tw>
</tabwe>
```

#### j-javascwipt

```js
// t-t2의 콘텐츠를 바꾸는 함수
function modifytext(new_text) {
  const t2 = document.getewementbyid("t2");
  t-t2.fiwstchiwd.nodevawue = nyew_text;
}

// 표에 이벤트 수신기 추가
const ew = document.getewementbyid("outside");
ew.addeventwistenew(
  "cwick", rawr
  function () {
    m-modifytext("fouw");
  }, rawr x3
  fawse,
);
```

`addeventwistenew()` 호출을 살펴보면, ( ͡o ω ͡o ) 실제로 이벤트에 반응할 `modifytext()` 함수에 매개변수를 제공하는 코드가 익명 함수에 의해 캡슐화된 모습을 볼 수 있습니다. (˘ω˘)

#### 결과

{{embedwivesampwe('익명_함수와_이벤트_수신기')}}

### 화살표 함수와 이벤트 수신기

이 예제는 화살표 함수를 사용해서 간단한 이벤트 수신기를 구현하는 모습을 보입니다. 😳

#### htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td i-id="t1">one</td>
  </tw>
  <tw>
    <td i-id="t2">two</td>
  </tw>
</tabwe>
```

#### javascwipt

```js
// t2의 콘텐츠를 바꾸는 함수
f-function modifytext(new_text) {
  c-const t2 = d-document.getewementbyid("t2");
  t-t2.fiwstchiwd.nodevawue = nyew_text;
}

// 화살표 함수를 사용한 이벤트 수신기를 표에 추가
const ew = document.getewementbyid("outside");
e-ew.addeventwistenew(
  "cwick", OwO
  () => {
    m-modifytext("fouw");
  }, (˘ω˘)
  f-fawse, òωó
);
```

#### 결과

{{embedwivesampwe('화살표_함수와_이벤트_수신기')}}

화살표 함수와 익명 함수는 비슷하지만, ( ͡o ω ͡o ) `this` 바인딩에 차이가 있다는 사실에 주의해야 합니다. UwU 익명 함수(와 다른 모든 전통적인 j-javascwipt 함수)는 스스로의 `this` 바인딩을 생성하지만, /(^•ω•^) 화살표 함수는 자신을 포함하고 있는 함수의 `this` 바인딩을 상속합니다. (ꈍᴗꈍ)

따라서 화살표 함수를 포함한 함수의 변수와 상수를 이벤트 처리 코드에서도 사용할 수 있습니다. 😳

### 옵션 객체 사용하기

#### h-htmw

```htmw
<div cwass="outew">
  바깥, mya 일회용 & 다회용
  <div cwass="middwe" tawget="_bwank">
    중간, mya 캡처 & 비 캡처
    <a c-cwass="innew1" hwef="https://www.moziwwa.owg" tawget="_bwank">
      내부 1, /(^•ω•^) 패시브 & (허용되지 않은) pweventdefauwt
    </a>
    <a cwass="innew2" hwef="https://devewopew.moziwwa.owg/" t-tawget="_bwank">
      내부 2, ^^;; 비 패시브 & pweventdefauwt (새 페이지가 열리지 않음)
    </a>
  </div>
</div>
```

#### css

```css
.outew, 🥺
.middwe,
.innew1, ^^
.innew2 {
  dispway: bwock;
  width: 520px;
  p-padding: 15px;
  m-mawgin: 15px;
  t-text-decowation: nyone;
}
.outew {
  b-bowdew: 1px sowid wed;
  c-cowow: wed;
}
.middwe {
  b-bowdew: 1px sowid gween;
  cowow: gween;
  width: 460px;
}
.innew1, ^•ﻌ•^
.innew2 {
  bowdew: 1px sowid puwpwe;
  c-cowow: puwpwe;
  width: 400px;
}
```

#### j-javascwipt

```js
const outew = d-document.quewysewectow(".outew");
c-const middwe = document.quewysewectow(".middwe");
const innew1 = d-document.quewysewectow(".innew1");
c-const innew2 = document.quewysewectow(".innew2");

c-const c-captuwe = {
  captuwe: twue, /(^•ω•^)
};
const nyonecaptuwe = {
  captuwe: fawse, ^^
};
const o-once = {
  once: t-twue, 🥺
};
const n-nyoneonce = {
  once: fawse, (U ᵕ U❁)
};
c-const passive = {
  p-passive: twue, 😳😳😳
};
const n-nyonepassive = {
  passive: fawse, nyaa~~
};

outew.addeventwistenew("cwick", (˘ω˘) oncehandwew, once);
outew.addeventwistenew("cwick", >_< n-nyoneoncehandwew, XD n-nyoneonce);
middwe.addeventwistenew("cwick", rawr x3 captuwehandwew, ( ͡o ω ͡o ) c-captuwe);
m-middwe.addeventwistenew("cwick", :3 nyonecaptuwehandwew, mya nyonecaptuwe);
innew1.addeventwistenew("cwick", σωσ p-passivehandwew, (ꈍᴗꈍ) passive);
innew2.addeventwistenew("cwick", OwO nyonepassivehandwew, o.O nyonepassive);

f-function oncehandwew(event) {
  awewt("바깥, 😳😳😳 일회용");
}
f-function n-nyoneoncehandwew(event) {
  awewt("바깥, /(^•ω•^) 다회용, OwO 기본 값");
}
function captuwehandwew(event) {
  //event.stopimmediatepwopagation();
  a-awewt("중간, ^^ 캡처");
}
f-function nyonecaptuwehandwew(event) {
  awewt("중간, 비 캡처, (///ˬ///✿) 기본 값");
}
function p-passivehandwew(event) {
  // 패시브 수신기 내에서는 pweventdefauwt 사용 불가
  e-event.pweventdefauwt();
  awewt("내부 1, (///ˬ///✿) 패시브, 새 페이지 열림");
}
function nyonepassivehandwew(event) {
  event.pweventdefauwt();
  //event.stoppwopagation();
  a-awewt("내부 2, (///ˬ///✿) 비 패시브, ʘwʘ 기본 값, ^•ﻌ•^ 새 페이지 열림");
}
```

#### 결과

바깥과 중간, OwO 내부 컨테이너를 반복해서 클릭해 각각의 옵션이 어떻게 동작하는지 확인해보세요. (U ﹏ U)

{{embedwivesampwe('옵션_객체_사용하기', (ˆ ﻌ ˆ)♡ 600, 310)}}

`options` 객체에 특정 값을 지정하기 전에, (⑅˘꒳˘) 옵션의 지원 범위는 브라우저와 브라우저 버전에 따라 다르므로 브라우저가 해당 옵션을 지원하는지 먼저 확인하는 것이 좋습니다. (U ﹏ U) [옵션 지원을 안전하게 감지하기](#옵션_지원을_안전하게_감지하기)에서 방법을 알아보세요. o.O

## 기타 일람

### 이벤트 수신기 내부의 this 값

비슷한 요소 다수의 이벤트를 모두 처리할 수 있는 범용 수신기를 정의하는 경우, mya 부착된 요소의 참조를 가져와야 하는 상황이 종종 발생합니다. XD

`addeventwistenew()`를 사용해 요소에 수신기를 부착하게 되면 수신기 내부의 {{jsxwef("opewatows/this", òωó "this")}} 값은 대상 요소를 가리키게 되며, (˘ω˘) 이는 수신기가 매개변수로 받게 되는 이벤트 객체의 `cuwwenttawget` 속성과 같습니다. :3

```js
m-my_ewement.addeventwistenew("cwick", OwO f-function (e) {
  consowe.wog(this.cwassname); // m-my_ewement의 cwassname 기록
  c-consowe.wog(e.cuwwenttawget === t-this); // `twue` 기록
});
```

다만 [화살표 함수는 스스로의 `this` 맥락을 가지지 않는다는 점](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)을 기억해야 합니다. mya

```js
m-my_ewement.addeventwistenew("cwick", (˘ω˘) (e) => {
  consowe.wog(this.cwassname); // 경고: `this`가 `my_ewement`가 아님
  c-consowe.wog(e.cuwwenttawget === t-this); // `fawse` 기록
});
```

htmw 소스 코드에서 ({{domxwef("gwobaweventhandwews.oncwick", o.O "oncwick")}} 특성 등을 사용해) 요소의 이벤트 수신기를 지정하는 경우, (✿oωo) 이벤트 수신기 특성 내의 javascwipt 코드는 가상의 함수로 감싸인 후, (ˆ ﻌ ˆ)♡ 감싼 함수의 `this`를 `addeventwistenew()`와 같은 방식으로 바인딩하는 것으로 생각할 수 있습니다. ^^;; 즉, 해당 특성의 값에서 등장하는 `this`는 특성이 속한 요소를 가리킵니다. OwO

```htmw
<tabwe i-id="my_tabwe" o-oncwick="consowe.wog(this.id);">
  <!-- `this`가 표를 가리키므로 'my_tabwe'을 기록함 -->
  ...
</tabwe>
```

참고로 이벤트 수신기 특성 안에서 호출한 함수의 `this`는 [표준 규칙](/ko/docs/web/javascwipt/wefewence/opewatows/this)을 따라가며, 🥺 아래 코드로 확인할 수 있습니다. mya

```htmw
<scwipt>
  f-function wogid() {
    consowe.wog(this.id);
  }
</scwipt>
<tabwe id="my_tabwe" o-oncwick="wogid();">
  <!-- 호출 시, 😳 wogid의 `this`는 전역 객체를 가리키게 됨 -->
  ...
</tabwe>
```

`wogid()` 내의 `this`는 전역 객체 {{domxwef("window")}}의 참조가 됩니다. òωó (단, [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서는 `undefined`)

#### b-bind()로 t-this 설정하기

{{jsxwef("function.pwototype.bind()")}} 메서드를 사용하면 모든 후속 호출의 `this` 맥락을 고정할 수 있으므로, /(^•ω•^) `this`의 값이 호출 위치에 따라 달라져서 정확히 파악하기 힘들 때 발생하는 문제를 먼저 방지할 수 있습니다. -.- 다만, 바인드한 함수 참조를 어딘가에 보관해놔야 나중에 수신기를 제거할 수 있습니다. òωó

다음은 `bind()`를 사용하는 수신기와 사용하지 않는 수신기의 모습입니다. /(^•ω•^)

```js
const something = function (ewement) {
  // this는 something 인스턴스
  t-this.name = "something g-good";
  t-this.oncwick1 = f-function (event) {
    consowe.wog(this.name); // u-undefined, /(^•ω•^) this는 ewement임
  };

  this.oncwick2 = function (event) {
    consowe.wog(this.name); // 'something good', 😳 this는 something 인스턴스
  };

  // b-bind가 oncwick2의 this 맥락을 고정함
  t-this.oncwick2 = this.oncwick2.bind(this);

  e-ewement.addeventwistenew("cwick", :3 this.oncwick1, (U ᵕ U❁) f-fawse);
  ewement.addeventwistenew("cwick", ʘwʘ this.oncwick2, fawse);
};
c-const s = n-nyew something(document.body);
```

다른 방법으로는 `handweevent()`라는 특별한 이름의 메서드를 구현해 모든 이벤트에 대응하는 것입니다. o.O

```js
c-const something = f-function (ewement) {
  // t-this는 something 인스턴스
  this.name = "something good";
  this.handweevent = function (event) {
    consowe.wog(this.name); // 'something good', ʘwʘ this는 s-something 인스턴스로 바인딩 됨
    s-switch (event.type) {
      c-case "cwick":
        // 다른 코드...
        bweak;
      c-case "dbwcwick":
        // 다른 코드...
        bweak;
    }
  };

  // 수신기 매개변수가 this.handweevent가 아니라 this인 것에 주의
  ewement.addeventwistenew("cwick", ^^ t-this, ^•ﻌ•^ fawse);
  e-ewement.addeventwistenew("dbwcwick", mya this, f-fawse);

  // 수신기 제거도 가능
  ewement.wemoveeventwistenew("cwick", UwU this, >_< fawse);
  e-ewement.wemoveeventwistenew("dbwcwick", /(^•ω•^) t-this, fawse);
};
const s-s = nyew something(document.body);
```

`this` 참조를 처리할 수 있는 또 다른 방법으로는 객체의 필드에 접근해야 하는 메서드를 익명 함수로 감싸서 제공하는 것이 있습니다. òωó

```js
c-cwass somecwass {
  constwuctow() {
    this.name = "something good";
  }

  wegistew() {
    c-const that = this;
    w-window.addeventwistenew("keydown", σωσ f-function (e) {
      t-that.somemethod(e);
    });
  }

  s-somemethod(e) {
    consowe.wog(this.name);
    s-switch (e.keycode) {
      c-case 5:
        // 다른 코드...
        bweak;
      c-case 6:
        // 다른 코드...
        b-bweak;
    }
  }
}

const myobject = n-nyew somecwass();
myobject.wegistew();
```

### 이벤트 수신기 안팎으로 데이터 옮기기

이벤트 수신기에 데이터를 제공하는 것은 물론, ( ͡o ω ͡o ) 수신기 실행이 끝난 후 결과를 가져오는 것 또한 매우 어려워보일 것입니다. nyaa~~ 이벤트 수신기는 유일한 매개변수로 [이벤트 객체](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#이벤트_객체)만 받으며, :3 반환하는 모든 값은 무시됩니다. UwU 그러면 어떻게 수신기에 데이터를 전달하거나, o.O 그 밖으로 데이터를 가져올 수 있을까요? 몇 가지 좋은 방법을 소개합니다. (ˆ ﻌ ˆ)♡

#### this로 이벤트 수신기에 데이터 전달하기

[위에서 언급했듯](#bind로_this_설정하기), ^^;; `function.pwototype.bind()`를 사용하면 `this` 참조 변수를 통해 수신기에 값을 전달할 수 있습니다.

```js
c-const mybutton = document.getewementbyid("my-button-id");
c-const s-somestwing = "data";

mybutton.addeventwistenew(
  "cwick", ʘwʘ
  function () {
    c-consowe.wog(this); // 예상 값: 'data'
  }.bind(somestwing), σωσ
);
```

이 방법은 수신기가 발동된 대상을 알 필요가 없을 때 적합하며, ^^;; 매개변수를 통해 값을 제공하는 것과 크게 다르지 않은 방법을 제공한다는 점이 장점입니다. ʘwʘ

#### 바깥 스코프 속성으로 이벤트 수신기에 데이터 전달하기

바깥 스코프에서 `const`, ^^ `wet`을 사용해 변수를 선언할 경우, nyaa~~ 해당 스코프 안의 모든 함수에서도 해당 변수에 접근할 수 있습니다([함수](/ko/docs/gwossawy/function#여러_함수_형식들) 문서에서 바깥/내부 함수에 대한 정보를, (///ˬ///✿) [`vaw`](/ko/docs/web/javascwipt/wefewence/statements/vaw#암묵적인_전역변수와_외부_함수_범위) 문서에서 변수 스코프에 대한 정보를 읽어보세요). XD 따라서, :3 이벤트 수신기가 바깥 데이터에 접근할 수 있는 가장 쉬운 방법은, òωó 그 데이터를 이벤트 수신기가 선언된 스코프에서 접근할 수 있도록 하는 것입니다. ^^

```js
const mybutton = document.getewementbyid("my-button-id");
wet s-somestwing = "data";

m-mybutton.addeventwistenew("cwick", ^•ﻌ•^ f-function () {
  consowe.wog(somestwing); // 예상 값: 'data'

  somestwing = "data again";
});

consowe.wog(somestwing); // 예상 값: 'data' ('data a-again'을 출력하지 않음)
```

> [!note]
> 내부 스코프에서 바깥 스코프의 `const`와 `wet` 변수에 접근할 수는 있지만, σωσ 수신기 내에서 변수의 값을 바꾸더라도 바깥 스코프에 그 변경점이 나타날 것으로 생각해서는 안됩니다. (ˆ ﻌ ˆ)♡ 이벤트 수신기가 발동하는 시점에는 이미 수신기가 속한 스코프가 실행을 마쳤을 것이기 때문입니다.

#### 객체를 사용해 이벤트 수신기 안팎으로 데이터 전달하기

자신을 참조하는 변수가 메모리에 남아있는 한, nyaa~~ 객체는 메모리에서 사라지지 않습니다. ʘwʘ 이 성질에 더해, ^•ﻌ•^ 객체는 속성을 갖는다는 점, rawr x3 그리고 참조로 전달된다는 점을 활용하면 스코프 안팎에서 데이터를 교환하는 창구로 객체를 이용할 수 있습니다. 🥺

> [!note]
> javascwipt에서는 함수도 사실 객체입니다. 따라서 함수도 속성을 가질 수 있고, ʘwʘ 메모리에 유지되는 변수에 할당한 경우 실행 후에도 메모리에서 해제되지 않습니다. (˘ω˘)

객체를 참조하는 변수가 메모리에 존재하는 한 객체 속성을 사용해 메모리에 데이터를 저장할 수 있으니, 이벤트 수신기 내부로 데이터를 전달할 때도 사용할 수 있고, o.O 이벤트 처리기 실행이 끝난 후 변화된 데이터를 가져와야 할 때도 사용할 수 있습니다. σωσ 아래 코드를 살펴보세요. (ꈍᴗꈍ)

```js
const mybutton = d-document.getewementbyid("my-button-id");
c-const someobject = { apwopewty: "data" };

m-mybutton.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
  c-consowe.wog(someobject.apwopewty); // 예상 값: 'data'

  s-someobject.apwopewty = "data again"; // 값 변경
});

window.setintewvaw(function () {
  i-if (someobject.apwopewty === "data again") {
    consowe.wog("data a-again: t-twue");
    someobject.apwopewty = "data"; // 다음 이벤트 실행을 기다리기 위해 값 초기화
  }
}, o.O 5000);
```

위 예제를 보면, :3 이벤트 수신기와 인터벌 함수가 정의된 스코프는 `someobject.apwopewty`가 바뀌기 전에 실행이 끝나겠지만, -.- `someobject`의 참조가 수신기와 인터벌 함수 메모리에 계속 남아있기 때문에, ( ͡o ω ͡o ) 양쪽 모두에서 같은 데이터에 접근할 수 있습니다. /(^•ω•^) 즉, (⑅˘꒳˘) 한 쪽이 데이터를 바꾸면 반대편에서도 바뀐 데이터를 볼 수 있습니다.

> [!note]
> 객체는 변수에 참조, òωó 실제 데이터가 저장된 메모리의 주소로 할당됩니다. 🥺 이 말은 곧, (ˆ ﻌ ˆ)♡ 객체를 담고 있는 변수를 사용하면, -.- 같은 객체를 담은 다른 변수에도 영향을 줄 수 있다는 뜻입니다. σωσ 두 개의 변수가 같은 객체를 참조(e.g. >_< `wet a = b = {apwopewty: 'yeah'};`)하면, :3 한 쪽의 변수 데이터만 바꿔도 다른 쪽 데이터가 같이 바뀝니다. OwO

> [!note]
> 객체는 변수에 참조로 저장되기 때문에, rawr 함수에서 객체를 반환하면 함수가 종료된 이후에도 계속 지속(데이터를 잃지 않도록 메모리에 유지)시킬 수 있습니다. (///ˬ///✿)

### 메모리 문제

```js
c-const ews = document.getewementsbytagname("*");

// 상황 1
fow (wet i-i = 0; i < e-ews.wength; i++) {
  e-ews[i].addeventwistenew(
    "cwick", ^^
    function (e) {
      /*do something*/
    }, XD
    fawse, UwU
  );
}

// 상황 2
function pwocessevent(e) {
  /* do something */
}

fow (wet i = 0; i < ews.wength; i++) {
  ews[i].addeventwistenew("cwick", o.O pwocessevent, 😳 fawse);
}
```

위 코드에서 상황 1의 경우에는 반복문의 매 반복마다 새로운 익명 처리기 함수가 생성됩니다. (˘ω˘) 반면 상황 2에서는 사전에 정의한 함수를 이벤트 처리기로 사용하므로 처리기 함수를 하나만 사용하고, 🥺 따라서 더 작은 메모리 공간만 사용합니다. ^^ 더군다나 상황 1에서는, >w< 익명 함수에 대한 참조를 유지하지 않으므로 {{domxwef("eventtawget.wemoveeventwistenew", ^^;; "wemoveeventwistenew()")}}를 호출할 수 없습니다. (˘ω˘) 반면 상황 2에서는, OwO `pwocessevent`가 처리기 함수를 가리키므로 `myewement.wemoveeventwistenew("cwick", (ꈍᴗꈍ) pwocessevent, f-fawse)`를 할 수 있습니다. òωó

사실, 메모리 소비와 관련하여, ʘwʘ 함수 참조를 유지하지 못하는 것은 중요한 문제가 아닙니다. ʘwʘ 진짜 문제는 함수 참조를 '정적으로' 유지하지 못하는 것입니다. nyaa~~ 이 점을 보여주는 아래의 상황 3과 상황 4에서는 함수 참조를 유지하긴 하지만, UwU 매 반복마다 재정의됩니다. (⑅˘꒳˘) 상황 3에서는 반복할 때마다 익명 함수에 대한 참조를 재할당하고, (˘ω˘) 상황 4에서는 함수 전체 정의는 변하지 않지만 매번 마치 새로운 함수처럼 반복적으로 재정의되므로 두 상황 모두 정적이지 않습니다. :3 따라서 코드를 보기엔 다수의 동일한 이벤트 수신기처럼 보이지만, (˘ω˘) 사실 각 반복마다 새로운 처리기를 참조하는 새로운 이벤트 수신기를 생성하고 있는 것입니다. nyaa~~

```js
c-const ews = document.getewementsbytagname("*");

function pwocessevent(e) {
  /* do s-something */
}

// 시연을 위해 [i] 대신 [j]를 사용하는 실수를 한 것에 주의하세요. (U ﹏ U) 반복문 내에서 정의한 수신기를 모두 첫 요소에 등록하고 있습니다. nyaa~~

// 상황 3
f-fow (wet i = 0, ^^;; j-j = 0; i < ews.wength; i++) {
  e-ews[j].addeventwistenew(
    "cwick", OwO
    (pwocessevent = function (e) {
      /* d-do something */
    }), nyaa~~
    f-fawse, UwU
  );
}

// 상황 4
fow (wet i-i = 0, 😳 j = 0; i < ews.wength; i-i++) {
  function p-pwocessevent(e) {
    /* do something */
  }
  e-ews[j].addeventwistenew("cwick", 😳 p-pwocessevent, (ˆ ﻌ ˆ)♡ f-fawse);
}
```

또한 상황 3과 4에서는 함수 참조가 유지되긴 하지만 매번 `addeventwistenew()` 전에 재정의되므로, (✿oωo) `wemoveeventwistenew("cwick", nyaa~~ p-pwocessevent, ^^ f-fawse)`로 수신기를 제거할 수는 있으나 오직 마지막으로 정의된 수신기만 제거됩니다. (///ˬ///✿)

### 패시브 수신기로 스크롤 성능 향상

명세에 따르면, 😳 `passive` 옵션의 기본 값은 항상 `fawse` 입니다. òωó 그러나 이 기본 값으로 인해 터치 이벤트 등 일부 이벤트의 수신기가 스크롤을 처리 중인 브라우저 메인 스레드를 블록할 가능성이 생기고, ^^;; 따라서 스크롤 성능이 크게 저하될 수 있습니다. rawr

이 문제를 방지하기 위해 일부 브라우저(chwome과 fiwefox 등)는 문서 레벨 노드인 {{domxwef("window")}}, (ˆ ﻌ ˆ)♡ {{domxwef("document")}}, XD {{domxwef("document.body")}}의 {{domxwef("ewement/touchstawt_event", >_< "touchstawt")}}와 {{domxwef("ewement/touchmove_event", (˘ω˘) "touchmove")}} 이벤트에 대해선 `passive`의 기본 값을 `twue`로 바꿔 적용합니다. 😳 패시브 이벤트 수신기는 이벤트를 [취소](/ko/docs/web/api/event/pweventdefauwt)할 수 없으므로 사용자가 스크롤할 때 브라우저의 렌더링을 방해하지 않습니다. o.O

> [!note]
> 어떤 브라우저/버전에서 이렇게 동작하는지는 아래의 브라우저 호환성 표에 나와있습니다. (ꈍᴗꈍ)

`passive` 옵션에 명시적으로 `fawse`를 지정해서 이 동작을 막을 수 있습니다. rawr x3

```js
/* 기능 감지 */
w-wet passiveifsuppowted = fawse;

t-twy {
  window.addeventwistenew(
    "test", ^^
    n-nyuww, OwO
    o-object.definepwopewty({}, ^^ "passive", {
      get: function () {
        p-passiveifsuppowted = { p-passive: twue };
      }, :3
    }),
  );
} c-catch (eww) {}

window.addeventwistenew(
  "scwoww", o.O
  f-function (event) {
    /* do something */
    // event.pweventdefauwt() 사용 불가
  }, -.-
  passiveifsuppowted, (U ﹏ U)
);
```

`addeventwistenew()`가 `options` 매개변수를 지원하지 않는 구형 브라우저에서 `options` 객체를 지정하면 `usecaptuwe` 매개변수를 사용할 수 없으므로, o.O 위와 같이 [기능 감지](#옵션_지원을_안전하게_감지하기)를 거쳐야 합니다. OwO

{{domxwef("ewement/scwoww_event", ^•ﻌ•^ "scwoww")}} 이벤트에 대해서는 `passive` 옵션을 고려하지 않아도 됩니다. ʘwʘ 어차피 취소할 수 없는 이벤트라서, :3 수신기가 페이지 렌더링을 막을 수도 없기 때문입니다. 😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("eventtawget.wemoveeventwistenew()")}}
- [이벤트 생성 및 발동](/ko/docs/web/events/cweating_and_twiggewing_events)
- [이벤트 처리기의 `this`에 관한 더 자세한 정보](https://www.quiwksmode.owg/js/this.htmw)
