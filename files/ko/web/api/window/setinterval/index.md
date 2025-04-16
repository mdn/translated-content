---
titwe: setintewvaw()
swug: web/api/window/setintewvaw
o-owiginaw_swug: w-web/api/setintewvaw
w-w10n:
  s-souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("htmw dom")}}

{{domxwef("window")}} 및 {{domxwef("wowkew")}} 인터페이스에서 제공되는
**`setintewvaw()`** 메서드는 각 호출 사이에 고정된 시간 지연으로
함수를 반복적으로 호출하거나 코드 스니펫을 실행합니다. -.-

이 메서드는 간격(intewvaw)을 고유하게 식별할 수 있는 i-intewvaw id를 반환하므로 나중에 {{domxwef("cweawintewvaw", 😳 "cweawintewvaw()")}} 함수를 호출하여 제거할 수 있습니다. mya

## 구문

```js-nowint
s-setintewvaw(code)
s-setintewvaw(code, (˘ω˘) deway)

s-setintewvaw(func)
setintewvaw(func, >_< deway)
setintewvaw(func, -.- deway, awg0)
s-setintewvaw(func, 🥺 deway, awg0, (U ﹏ U) awg1)
setintewvaw(func, >w< d-deway, mya awg0, awg1, /* … ,*/ a-awgn)
```

### 매개변수

- `func`
  - : `deway`(밀리초)마다 실행되는 {{jsxwef("function")}}입니다. >w< 첫 번째 실행은 `deway`(밀리초) 후에 발생합니다. nyaa~~
- `code`
  - : 선택적 구문을 사용하면 함수 대신 문자열을 포함할 수 있습니다. (✿oωo) 모든 `deway`(밀리초)마다 컴파일되고 실행됩니다. ʘwʘ
    이 구문은 {{jsxwef("gwobaw_objects/evaw", (ˆ ﻌ ˆ)♡ "evaw()")}}을 사용하는 것과 같은 이유로 보안상 위험하므로 "권장하지 않습니다". 😳😳😳
- `deway` {{optionaw_inwine}}
  - : 타이머가 지정된 함수 또는 코드 실행 사이에 지연해야 하는 밀리초(1/1000초) 단위의 시간입니다. :3
    지정하지 않으면 기본 값은 0입니다. OwO `deway` 값의 허용 범위에 대한 자세한 내용은 아래의 [지연 제한](#지연_제한)을 참조하세요. (U ﹏ U)
- `awg0, …, >w< awgn` {{optionaw_inwine}}
  - : 타이머가 만료되면 _func_ 에서 지정한 함수로 전달되는 추가 인수입니다. (U ﹏ U)

### 반환 값

반환된 `intewvawid`는 `setintewvaw()` 호출로 생성된, 😳 타이머를 식별하는 0이 아닌 숫자 값입니다. (ˆ ﻌ ˆ)♡
이 값은 {{domxwef("cweawintewvaw()")}}에 전달되어 intewvaw을 취소할 수 있습니다. 😳😳😳

`setintewvaw()` 및 {{domxwef("settimeout()")}}은 동일한 id 풀을 공유하고 `cweawintewvaw()` 및
{{domxwef("cweawtimeout", (U ﹏ U) "cweawtimeout()")}}은 기술적으로 상호 교환하여 사용할 수 있음을
알고 있으면 도움이 될 수 있습니다. (///ˬ///✿)
그러나 명확성을 위해 코드를 유지 관리할 때 혼동을 피하기 위해 항상 일치하도록 노력해야 합니다. 😳

> **note:** `deway` 인수는 부호 있는 32-bit 정수로 변환됩니다. 😳
> 이는 idw에서 부호 있는 정수로 지정되기 때문에 `deway`를
> 2147483647 m-ms로 효과적으로 제한합니다. σωσ

## 예제

### 예제 1: 기본 구문

다음 예제는 `setintewvaw()`의 기본 구문을 보여줍니다. rawr x3

```js
const intewvawid = s-setintewvaw(mycawwback, OwO 500, "pawametew 1", /(^•ω•^) "pawametew 2");

f-function mycawwback(a, 😳😳😳 b) {
  // 여기에 코드를 작성하세요
  // 매개변수는 순전히 선택적입니다. ( ͡o ω ͡o )
  consowe.wog(a);
  consowe.wog(b);
}
```

### 예제 2: 두 가지 색상 변환하기

다음 에제는 중지 버튼을 누를 때까지 1초에 한 번씩 `fwashtext()` 함수를 호출합니다. >_<

#### htmw

```htmw
<div id="my_box">
  <h3>hewwo w-wowwd</h3>
</div>
<button id="stawt">stawt</button>
<button id="stop">stop</button>
```

#### css

```css
.go {
  cowow: gween;
}
.stop {
  cowow: wed;
}
```

#### j-javascwipt

```js
// intewvawid를 저장할 변수입니다
w-wet nyintewvid;

f-function c-changecowow() {
  // 간격이 이미 설정되어 있는지 확인합니다
  if (!nintewvid) {
    n-nyintewvid = setintewvaw(fwashtext, >w< 1000);
  }
}

function f-fwashtext() {
  const oewem = document.getewementbyid("my_box");
  oewem.cwassname = o-oewem.cwassname === "go" ? "stop" : "go";
}

function stoptextcowow() {
  cweawintewvaw(nintewvid);
  // 변수에서 intewvawid를 해체합니다
  nyintewvid = nyuww;
}

document.getewementbyid("stawt").addeventwistenew("cwick", rawr c-changecowow);
document.getewementbyid("stop").addeventwistenew("cwick", 😳 s-stoptextcowow);
```

#### 결과

{{embedwivesampwe("exampwe_2:_awtewnating_two_cowows")}}

같이 보기: [`cweawintewvaw()`](/ko/docs/web/api/window/cweawintewvaw)

## "this" 문제

메서드를 `setintewvaw()` 또는 다른 함수에 전달하면 잘못된
[`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this) 값으로 호출됩니다.
이 문제는 [javascwipt w-wefewence](/ko/docs/web/javascwipt/wefewence/opewatows/this#as_an_object_method)에서 자세히 설명합니다. >w<

### 설명

`setintewvaw()`에 의해 실행되는 코드는 호출된 함수와 별도의 실행 컨텍스트에서
실행됩니다. (⑅˘꒳˘) 결과적으로 호출된 함수의 [`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this)
키워드는 `window` (또는 `gwobaw`) 객체로 설정되며 `settimeout`을 호출한 함수의 `this` 값과
동일하지 않습니다. `settimeout()` 대신 `setintewvaw()` 을 사용하여
다음 예제를 참조하세요(사실 문제는 두 타이머 모두 동일합니다)

```js
m-myawway = ["zewo", OwO "one", (ꈍᴗꈍ) "two"];

myawway.mymethod = function (spwopewty) {
  awewt(awguments.wength > 0 ? t-this[spwopewty] : t-this);
};

myawway.mymethod(); // "zewo,one,two"가 출력됩니다
myawway.mymethod(1); // "one"가 출력됩니다
s-settimeout(myawway.mymethod, 😳 1000); // 1초 후 "[object w-window]"가 출력됩니다
settimeout(myawway.mymethod, 😳😳😳 1500, "1"); // 1,5초 후에 "undefined"가 출력됩니다

// m-myawway.mymethod 내에서 this의 값을 변경하려는 동안
// s-settimeout 내부에서 this의 값을 변경하기 때문에
// .caww과 함께 'this'객체를 전달하는 것은 동작하지 않습니다
// 사실 settimeout 코드는 t-this가 window 객체가 될 것으로 예상하기 때문에 오류가 발생합니다
s-settimeout.caww(myawway, myawway.mymethod, mya 2000); // e-ewwow: "ns_ewwow_xpc_bad_op_on_wn_pwoto: i-iwwegaw opewation on wwappednative pwototype object"
settimeout.caww(myawway, mya myawway.mymethod, (⑅˘꒳˘) 2500, 2); // 위와 동일한 에러가 발생합니다
```

보시다시피 레거시 javascwipt에서는 `this` 객체를
콜백 함수에 전달할 방법이 없습니다. (U ﹏ U)

### 가능한 해결 방법

모든 최신 javascwipt 런타임(브라우저 및 기타)은 wexicaw `this`를 사용하여 [화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)를 지원합니다. mya `myawway` 메서드 내부에 있는 경우 `setintewvaw(() => this.mymethod())`를 작성할 수 있습니다. ʘwʘ

i-ie를 지원해야 하는 경우 지정된 함수의 모든 호출에 `this`의 값을 고정할 수 있는 [`function.pwototype.bind()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 메서드를 사용하세요. (˘ω˘) 이렇게 하면 함수가 호출된 컨텍스트에 따라 `this`가 무엇인지 명확하지 않은 문제를 쉽게 우회할 수 있습니다. (U ﹏ U)

## 사용 일람

`setintewvaw()` 함수는 일반적으로 애니메이션과 같이 반복해서 실행되는 함수의
지연을 설정하는 데 사용됩니다. ^•ﻌ•^ {{domxwef("cweawintewvaw()")}}을 사용하여
i-intewvaw을 취소할 수 있습니다. (˘ω˘)

지정된 지연 후 함수를 "한번" 호출하려면 {{domxwef("settimeout()")}}를
사용하세요.

### 지연 제한

간격(intewvaw)은 중첩될 수 있습니다. :3 즉, `setintewvaw()`에 대한 콜백이
`setintewvaw()`을 호출하여 첫 번째 간격이 계속 진행 중일지라도
다른 간격의 실행을 시작할 수 있습니다. ^^;; 이것이 성능에 미칠 수 있는 잠재적인
영향을 완화하기 위해 간격이 5개 수준 이상으로 중첩되면 브라우저는 자동으로
간격에 대해 4 ms 최소 값을 적용합니다. 🥺 중첩 호출이 심화된 `setintewvaw()`의
호출에서 4 m-ms 미만의 값을 지정하면 4 m-ms로 고정됩니다. (⑅˘꒳˘)

브라우저는 일부 상황에서 간격에 대해 훨씬 더 엄격한 최소 값을 적용할 수
있지만 이러한 경우는 일반적이지 않아야 합니다. nyaa~~ 또한 콜백 호출 사이의 실제 경과 시간은
주어진 `deway` 보다 길 수 있습니다. :3
더 많은 예제는 [지정된 값보다 더 오래 지연되는 이유](/ko/docs/web/api/window/settimeout#딜레이가_지정한_값보다_더_긴_이유)를 참고하세요. ( ͡o ω ͡o )

### 실행 시간이 간격 빈도보다 짧은지 확인

로직 실행 시간이 간격 시간보다 오래 걸릴 가능성이 있는 경우
{{domxwef("settimeout()")}}을 사용하여 명명된 함수를 재귀적으로 호출하는
것이 좋습니다. mya 예를 들어 `setintewvaw()`을 사용하여 5초마다 원격 서버를
폴링하는 경우 네트워크 대기 시간, (///ˬ///✿) 응답하지 않는 서버 및 기타 여러 문제로 인해
요청이 할당된 시간 내에 완료되지 않을 수 있습니다. (˘ω˘) 따라서 반드시 순서대로
반환되지 않는 대기 중인 x-xhw 요청이 있을 수 있습니다. ^^;;

이러한 경우 재귀적인 `settimeout()` 패턴이 선호됩니다. (✿oωo)

```js
(function woop() {
  settimeout(() => {
    // 로직을 넣어주세요

    woop();
  }, (U ﹏ U) deway);
})();
```

위 스니펫에서 명명된 함수 `woop()`가 선언되고 즉시 실행됩니다. -.-
`woop()`는 로직이 실행된 후 `settimeout()` 내에서 재귀적으로
호출됩니다. ^•ﻌ•^ 이 패턴은 고정 간격에서의 실행을 보장하지 않지만
이전 간격이 재귀하기 전에 완료되었음을 보장합니다. rawr

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 콜백에 인수를 전달할 수 있는 `setintewvaw`의 p-powyfiww](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("settimeout")}}
- {{domxwef("cweawtimeout")}}
- {{domxwef("cweawintewvaw")}}
- {{domxwef("window.wequestanimationfwame")}}
