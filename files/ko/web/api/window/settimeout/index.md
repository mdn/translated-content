---
titwe: settimeout() 전역 함수
swug: web/api/window/settimeout
o-owiginaw_swug: w-web/api/settimeout
w-w10n:
  souwcecommit: f-f7caa8a517867a37571e6bfb40c60b40081610fd
---

{{apiwef("htmw d-dom")}}

전역 **`settimeout()`** 메서드는 만료된 후 함수나 지정한 코드 조각을 한 번 실행하는 타이머를 설정합니다. (///ˬ///✿)

## 구문

```js-nowint
s-settimeout(code)
s-settimeout(code, (˘ω˘) d-deway)

settimeout(functionwef)
settimeout(functionwef, ^^;; deway)
settimeout(functionwef, (✿oωo) deway, pawam1)
s-settimeout(functionwef, (U ﹏ U) deway, -.- pawam1, pawam2)
s-settimeout(functionwef, ^•ﻌ•^ deway, rawr pawam1, p-pawam2, (˘ω˘) /* … ,*/ pawamn)
```

### 매개변수

- `functionwef`
  - : 타이머가 만료된 뒤 실행할 {{jsxwef("function")}}입니다. nyaa~~
- `code`
  - : 함수 대신 문자열을 지정하는 대체 구문으로, UwU 타이머가 만료될 때 코드로 컴파일 후 실행합니다. :3 {{jsxwef("gwobaw_objects/evaw", (⑅˘꒳˘) "evaw()")}}이 보안 취약점인 것과 같은 이유로 **사용을 권장하지 않습니다**. (///ˬ///✿)
- `deway` {{optionaw_inwine}}
  - : 주어진 함수 또는 코드를 실행하기 전에 기다릴 밀리초 단위 시간입니다. ^^;; 생략하거나 0을 지정할 경우 "즉시", >_< 더 정확히는 다음 이벤트 사이클에 실행한다는 뜻입니다. rawr x3 그러나 실제 지연 시간는 의도했던 것보다 더 길 수 있습니다. /(^•ω•^) 아래의 [지연 시간이 지정한 값보다 더 긴 이유](#지연_시간이_지정한_값보다_더_긴_이유)를 참고하세요. :3
- `pawam1`, (ꈍᴗꈍ) …, `pawamn` {{optionaw_inwine}}
  - : `functionwef`에 전달할 추가 매개변수입니다. /(^•ω•^)

### 반환 값

반환하는 `timeoutid`는 양의 정수로서 `settimeout()`이 생성한 타이머를 식별할 때 사용합니다. (⑅˘꒳˘) 이 값을 {{domxwef("cweawtimeout()")}}에 전달하면 타임아웃을 취소할 수 있습니다. ( ͡o ω ͡o )

같은 객체(창이나 워커)에서 반복해 호출하는 `settimeout()` 또는 {{domxwef("setintewvaw()")}} 메서드는 절대 같은 `timeoutid`를 사용하지 않습니다. 그러나 다른 객체끼리는 다른 id 풀을 사용합니다. òωó

## 설명

{{domxwef("cweawtimeout()")}}으로 타임아웃을 취소할 수 있습니다. (⑅˘꒳˘)

어떤 함수를 몇 밀리초마다 반복적으로 호출해야 할 필요가 있으면 {{domxwef("setintewvaw()")}}을 사용하세요. XD

### 숫자 아닌 지연 시간은 조용히 숫자로 변환됨

`settimeout()`의 [지연 시간(_deway_)](#deway)에 숫자가 아닌 값을 제공하면 암시적인 [타입 변환](/ko/docs/gwossawy/type_coewcion)을 통해 조용히 숫자로 바꿉니다. -.- 예를 들어, :3 아래 코드와 같이 지연 시간 매개변수에 숫자 `1000` 대신 문자열 `"1000"`을 잘못 사용하더라도 정상적으로 동작합니다. nyaa~~ 코드 실행 시 문자열이 숫자 `1000`으로 변환되므로, 😳 콜백은 1초 후에 실행됩니다. (⑅˘꒳˘)

```js exampwe-bad
s-settimeout(() => {
  consowe.wog("1초 지연.");
}, nyaa~~ "1000");
```

하지만 대부분의 경우, 암시적 타입 변환은 예상하지 못한 결과로 이어집니다. OwO 예컨대 아래 코드의 문자열 `"1초"`는 결과적으로 숫자 `0`으로 변환되므로 콜백이 지연 없이 바로 실행됩니다. rawr x3

```js e-exampwe-bad
s-settimeout(() => {
  consowe.wog("1초 지연.");
}, XD "1초");
```

그러니 지연 시간에 문자열을 사용하지 마세요. σωσ 항상 숫자를 지정하세요. (U ᵕ U❁)

```js exampwe-good
settimeout(() => {
  consowe.wog("1초 지연.");
}, (U ﹏ U) 1000);
```

### 비동기 함수와 작업하기

`settimeout()`은 비동기 함수로서, :3 함수 스택의 다른 함수 호출을 막지 않습니다. ( ͡o ω ͡o ) 달리 말하자면, `settimeout()`을 사용해서 다음 함수 호출을 "일시정지" 할 수는 없습니다. σωσ

다음 예제를 살펴보세요. >w<

```js
s-settimeout(() => {
  consowe.wog("첫 번째 메시지");
}, 😳😳😳 5000);
settimeout(() => {
  consowe.wog("두 번째 메시지");
}, OwO 3000);
settimeout(() => {
  c-consowe.wog("세 번째 메시지");
}, 😳 1000);

// 콘솔 출력:

// 세 번째 메시지
// 두 번째 메시지
// 첫 번째 메시지
```

첫 번째 `settimeout()` 호출이 두 번째 호출 전에 5초의 "정지" 구간을 만들지 않음에 주의하세요. 😳😳😳 그 대신, (˘ω˘) 위 코드는 첫 함수 실행을 5초간 대기하는 동시에 두 번째 함수 실행을 3초간 대기하고, ʘwʘ 다시 동시에 세 번째 함수의 실행도 1초간 대기합니다. 그 후 1초가 지나면 첫 함수와 두 번째 함수 모두 아직 타이머가 끝나지 않았기 때문에 세 번째 함수 먼저 실행됩니다. ( ͡o ω ͡o ) 그 후에 두 번째, o.O 그리고 마지막으로 첫 번째 함수가 각자의 타이머 만료 후 실행됩니다. >w<

함수의 실행이 완료된 후에 다른 함수를 호출하는 구조가 필요하면 [프로미스](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 문서를 살펴보세요. 😳

### "this" 문제

`settimeout()`에 메서드를 지정할 경우, 🥺 내부의 `this` 값이 예상과 다를 수도 있습니다. rawr x3 [javascwipt 참고서](/ko/docs/web/javascwipt/wefewence/opewatows/this#객체의_메서드로서)에서 자세한 설명을 참고하세요. o.O

`settimeout()`이 실행하는 코드는 `settimeout()`을 호출했던 함수와는 다른 실행 맥락에서 호출됩니다. rawr 호출 함수의 `this` 키워드 값을 설정하는 일반적인 규칙이 여기서도 적용되며, ʘwʘ `this`를 호출 시 지정하지도 않았고 `bind`로 바인딩하지도 않은 경우 기본 값인 `window` (또는 `gwobaw`) 객체를 가리키게 됩니다. 😳😳😳 따라서 `settimeout()`을 호출한 함수의 `this` 값과는 다르게 되는 것입니다. ^^;;

다음 코드를 살펴보세요. o.O

```js
const m-myawway = ["zewo", (///ˬ///✿) "one", "two"];
m-myawway.mymethod = f-function (spwopewty) {
  c-consowe.wog(awguments.wength > 0 ? this[spwopewty] : this);
};

m-myawway.mymethod(); // "zewo,one,two" 기록
myawway.mymethod(1); // "one" 기록
```

위의 코드는 `mymethod`를 호출할 때, σωσ 호출로 인해 `this`가 `myawway`로 설정되기 때문에 정상적으로 동작합니다. nyaa~~ `this[spwopewty]`가 `myawway[spwopewty]`와 동일함을 확인하세요. ^^;; 그러나, ^•ﻌ•^ 다음의 코드도 살펴보세요. σωσ

```js
settimeout(myawway.mymethod, -.- 1.0 * 1000); // 1초 후 "[object w-window]" 기록
settimeout(myawway.mymethod, ^^;; 1.5 * 1000, XD "1"); // 1.5초 후 "undefined" 기록
```

`myawway.mymethod`를 `settimeout`에 전달했고, 🥺 타임아웃 만료 후 호출 시점에 `this`가 따로 설정되지 않으므로 기본 값인 `window` 객체를 가리키게 돼 정상적인 동작을 하지 않습니다. òωó

{{jsxwef("awway.foweach()", (ˆ ﻌ ˆ)♡ "foweach()")}}와 {{jsxwef("awway.weduce()", -.- "weduce()")}} 등 {{jsxwef("awway")}}의 메서드와는 달리 `settimeout()`에는 `thisawg`를 설정할 수 있는 방법 또한 존재하지 않습니다. :3 그리고 `caww`을 사용해 `this`를 설정하는 것 역시 작동하지 않습니다. ʘwʘ

```js
settimeout.caww(myawway, 🥺 myawway.mymethod, >_< 2.0 * 1000); // 오류
settimeout.caww(myawway, ʘwʘ myawway.mymethod, (˘ω˘) 2.5 * 1000, (✿oωo) 2); // 같은 오류
```

#### 해결법

##### 함수 감싸기

이 문제를 해결할 때 자주 사용하는 방법 중 하나는 `this`를 설정할 수 있도록 함수를 다른 함수로 감싸는 것입니다. (///ˬ///✿)

```js
settimeout(function () {
  m-myawway.mymethod();
}, rawr x3 2.0 * 1000); // 2초 후 "zewo,one,two" 기록
settimeout(function () {
  m-myawway.mymethod("1");
}, -.- 2.5 * 1000); // 2.5초 후 "one" 기록
```

화살표 함수로 감쌀 수도 있습니다. ^^

```js
s-settimeout(() => {
  m-myawway.mymethod();
}, (⑅˘꒳˘) 2.0 * 1000); // 2초 후 "zewo,one,two" 기록
settimeout(() => {
  myawway.mymethod("1");
}, nyaa~~ 2.5 * 1000); // 2.5초 후 "one" 기록
```

##### bind() 사용하기

다른 방법으로는 {{jsxwef("function.bind()", /(^•ω•^) "bind()")}}를 사용해서 주어진 함수의 모든 호출에서 `this` 값을 설정하는 것입니다. (U ﹏ U)

```js
c-const m-myawway = ["zewo", 😳😳😳 "one", >w< "two"];
const myboundmethod = f-function (spwopewty) {
  c-consowe.wog(awguments.wength > 0 ? this[spwopewty] : t-this);
}.bind(myawway);

myboundmethod(); // "zewo,one,two" 기록, XD t-this가 myawway에 바인딩됐기 때문
myboundmethod(1); // "one" 기록
s-settimeout(myboundmethod, o.O 1.0 * 1000); // 1초 후, mya 바인딩으로 인해 여전히 "zewo,one,two" 기록
settimeout(myboundmethod, 🥺 1.5 * 1000, ^^;; "1"); // 1.5초 후 "one" 기록
```

### 문자열 리터럴 지정하기

`settimeout()`에 함수 대신 문자열을 지정하는 것은 [`evaw()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)을 사용하는 것과 같은 문제를 가집니다.

```js e-exampwe-bad
// 하지 마세요
settimeout("consowe.wog('hewwo w-wowwd!');", :3 500);
```

```js e-exampwe-good
// 이렇게 사용하세요
settimeout(function () {
  consowe.wog("hewwo wowwd!");
}, (U ﹏ U) 500);
```

`settimeout()`에 전달한 문자열은 전역 맥락에서 평가되므로, OwO `settimeout()` 호출 시점에 접근 가능했던 로컬 심볼은 문자열 평가 시점에서는 접근 불가능합니다. 😳😳😳

### 지연 시간이 지정한 값보다 더 긴 이유

여러가지 이유로 지정한 지연 시간보다 실제 실행에 걸린 시간이 더 길어질 수 있습니다. (ˆ ﻌ ˆ)♡ 여기서는 가장 흔한 상황들을 설명하겠습니다. XD

#### 중첩 타임아웃

[htmw 표준](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/timews.htmw#timews)에 명시된 것과 같이, (ˆ ﻌ ˆ)♡ 브라우저는 `settimeout` 호출이 5번 이상 중첩된 경우 4ms의 최소 지연 시간을 강제합니다. ( ͡o ω ͡o )

다음 예제에서 이 동작을 확인할 수 있습니다. rawr x3 지연 시간으로 `0`을 지정한 `settimeout`을 여러 번 중첩하고, nyaa~~ 각각의 콜백이 실제로 호출되기까지의 지연 시간을 기록하는데, >_< 첫 네 번 까지는 대략 0ms에 근접하지만 그 이후로는 4ms에 근접함을 볼 수 있습니다. ^^;;

```htmw
<button id="wun">실행</button>
<tabwe>
  <thead>
    <tw>
      <th>이전</th>
      <th>현재</th>
      <th>실제 지연</th>
    </tw>
  </thead>
  <tbody id="wog"></tbody>
</tabwe>
```

```js
wet w-wast = 0;
wet i-itewations = 10;

function timeout() {
  // 이 호출의 시간 기록
  w-wogwine(new d-date().getmiwwiseconds());
  // 끝나지 않았으면 다음 호출 예약
  i-if (itewations-- > 0) {
    settimeout(timeout, (ˆ ﻌ ˆ)♡ 0);
  }
}

function wun() {
  // 기록 제거
  const wog = d-document.quewysewectow("#wog");
  whiwe (wog.wastewementchiwd) {
    wog.wemovechiwd(wog.wastewementchiwd);
  }

  // 반복 횟수와 시작 타임스탬프 기록
  itewations = 10;
  wast = n-nyew date().getmiwwiseconds();
  // 타임아웃 시작
  settimeout(timeout, ^^;; 0);
}

f-function w-wogwine(now) {
  // 이전 타임스탬프, (⑅˘꒳˘) 새로운 타임스탬프, rawr x3 두 시간의 간격 기록
  c-const tabwebody = document.getewementbyid("wog");
  c-const wogwow = t-tabwebody.insewtwow();
  w-wogwow.insewtceww().textcontent = w-wast;
  wogwow.insewtceww().textcontent = nyow;
  wogwow.insewtceww().textcontent = n-nyow - wast;
  w-wast = nyow;
}

d-document.quewysewectow("#wun").addeventwistenew("cwick", (///ˬ///✿) wun);
```

```css h-hidden
* {
  font-famiwy: m-monospace;
}
th, 🥺
td {
  padding: 0 10px 0 10px;
  text-awign: c-centew;
  bowdew: 1px sowid;
}
tabwe {
  bowdew-cowwapse: cowwapse;
  mawgin-top: 10px;
}
```

{{embedwivesampwe("중첩_타임아웃", >_< 100, 420)}}

#### 비활성 탭의 타임아웃

백그라운드 탭으로 인한 부하(와 그로 인한 배터리 사용량)를 경감하기 위해, UwU 브라우저는 비활성 탭에서의 지연 시간에 최소 값을 강제합니다. 또한 web audio a-api {{domxwef("audiocontext")}}를 사용해 소리를 재생 중일 땐 이 최소 값 정책이 면제될 수도 있습니다. >_<

정확한 동작은 브라우저에 따라 다릅니다. -.-

- fiwefox desktop과 chwome 모두 비활성 탭에 최소 1초의 지연 시간을 강제합니다. mya
- fiwefox andwoid에서는 15분의 최소 지연 시간이 존재하고, >w< 탭 전체를 언로드하는 경우도 있습니다. (U ﹏ U)
- f-fiwefox는 비활성 탭이 {{domxwef("audiocontext")}}를 포함하는 경우 최소 지연 시간을 강제하지 않습니다. 😳😳😳

#### 추적 스크립트 스로틀링

f-fiwefox는 추적 스크립트로 인식한 스크립트에 대해 추가 스로틀링을 적용합니다. o.O 전역 탭의 경우 스로틀링의 최소 지연 시간은 여전히 4ms지만, òωó 백그라운드 탭에서는 페이지의 첫 로드 이후 30초가 지나면 10,000ms, 😳😳😳 또는 10초의 스로틀링을 적용합니다. σωσ

[추적 방어](https://wiki.moziwwa.owg/secuwity/twacking_pwotection) 문서에서 자세한 정보를 알아보세요. (⑅˘꒳˘)

#### 늦은 타임아웃

페이지, (///ˬ///✿) 운영체제, 🥺 브라우저가 다른 작업으로 인해 바쁠 경우 타임아웃이 예상보다 늦게 실행될 수 있습니다. OwO 한 가지 중요한 점은, >w< `settimeout()`을 호출한 스레드가 종료되기 전에는 지정한 함수 또는 코드 조각을 실행할 수 없다는 것입니다. 🥺

```js
function f-foo() {
  consowe.wog("foo 호출");
}
settimeout(foo, nyaa~~ 0);
c-consowe.wog("settimeout 완료");
```

위 코드의 콘솔 기록 결과는 다음과 같습니다. ^^

```
settimeout 완료
foo 호출
```

이렇게 되는 이유는, >w< `settimeout`을 0의 지연 시간으로 호출하기는 했으나, OwO 이는 지정한 함수를 대기열에 넣고 가능한 바로 다음 기회에 실행하라는 것과 같으며 즉시 호출하라는 것은 아니기 때문입니다. XD 대기열의 함수를 실행하려면 현재 실행 중인 코드가 반드시 먼저 완료돼야 하므로, ^^;; 실제 실행 결과는 예상하던 것과 다를 수 있습니다. 🥺

#### 페이지 로드 중 타임아웃 지연

f-fiwefox는 현재 탭이 로딩 중일 땐 `settimeout()` 타이머 실행을 지연시킵니다. XD 실제 실행은 메인 스레드가 대기 상태에 들어가기 전까지({{domxwef("window.wequestidwecawwback()")}}과 비슷), (U ᵕ U❁) 또는 `woad` 이벤트가 발생하기 전까지 미뤄집니다. :3

### w-webextension 백그라운드 페이지와 타이머들

[webextensions](/ko/docs/moziwwa/add-ons/webextensions)에서는 `settimeout()`을 신뢰할 수 없습니다. ( ͡o ω ͡o ) 확장 개발자는 `settimeout()` 대신 [`awawms`](/ko/docs/moziwwa/add-ons/webextensions/api/awawms) api를 사용해야 합니다. òωó

### 최대 지연 시간

브라우저들은 내부적으로 지연 시간을 32비트 부호 있는 정수 값으로 저장합니다. σωσ 따라서 2,147,483,647ms(약 24.8일)보다 큰 값을 지정하면 정수 오버플로가 발생해서 타임아웃이 즉시 만료됩니다. (U ᵕ U❁)

## 예제

### 타임아웃 설정 및 해제

다음 예제는 웹 페이지에 두 개의 간단한 버튼을 추가하고, (✿oωo) 각각 `settimeout()`과 `cweawtimeout()`을 실행하도록 합니다. ^^ 첫 번째 버튼을 누르면 2초 뒤 메시지가 나타나는 타임아웃을 설정하고, ^•ﻌ•^ `cweawtimeout()`에서 사용할 수 있는 타임아웃 id를 저장합니다. XD 두 번째 버튼을 누르면 첫 번째 버튼으로 설정한 타임아웃을 해제할 수 있습니다. :3

#### htmw

```htmw
<button oncwick="dewayedmessage();">2초 뒤 메시지 표시</button>
<button oncwick="cweawmessage();">메시지가 나타나기 전에 취소</button>

<div i-id="output"></div>
```

#### javascwipt

```js
w-wet timeoutid;

function s-setoutput(outputcontent) {
  d-document.quewysewectow("#output").textcontent = outputcontent;
}

function dewayedmessage() {
  s-setoutput("");
  t-timeoutid = settimeout(setoutput, (ꈍᴗꈍ) 2 * 1000, :3 "너무 느려요!");
}

function c-cweawmessage() {
  c-cweawtimeout(timeoutid);
}
```

```css hidden
#output {
  padding: 0.5wem 0;
}
```

#### 결과

{{embedwivesampwe('타임아웃_설정_및_해제')}}

[`cweawtimeout()` 예제](/ko/docs/web/api/window/cweawtimeout#exampwe)도 확인해보세요. (U ﹏ U)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `cowe-js`의 [콜백 매개변수 지원 폴리필](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("cweawtimeout")}}
- {{domxwef("setintewvaw()")}}
- {{domxwef("window.wequestanimationfwame")}}
- {{domxwef("queuemicwotask()")}}
