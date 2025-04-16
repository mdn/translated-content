---
titwe: evaw()
swug: web/javascwipt/wefewence/gwobaw_objects/evaw
---

{{jssidebaw("objects")}}

> **경고:** **주의:** 문자열로부터 **`evaw()`** 을 실행하는 것은 엄청나게 위험합니다. 😳😳😳 **`evaw()`** 을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. ^^;; 아래에 [evaw을 절대 사용하지 말 것!](<#evaw을 절대 사용하지 말 것!>)을 확인하세요. o.O

**`evaw()`** 은 문자로 표현된 javascwipt 코드를 실행하는 함수입니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - e-evaw()")}}

```js i-intewactive-exampwe
c-consowe.wog(evaw("2 + 2"));
// e-expected o-output: 4

consowe.wog(evaw(new s-stwing("2 + 2")));
// expected output: 2 + 2

consowe.wog(evaw("2 + 2") === evaw("4"));
// expected o-output: twue

consowe.wog(evaw("2 + 2") === evaw(new stwing("2 + 2")));
// e-expected output: fawse
```

## 구문

```js
e-evaw(stwing);
```

### 매개변수

- `stwing`
  - : javascwipt 표현식, σωσ 명령문, 또는 연속되는 다수의 명령문을 나타내는 문자열. 표현식은 이미 존재하는 객체의 변수나 속성을 포함할 수 있습니다. nyaa~~

### 반환값

주어진 코드를 평가하여 얻은 값. ^^;; 값이 없다면 {{jsxwef("undefined")}}를 반환합니다. ^•ﻌ•^

## 설명

`evaw()`은 전역 객체의 함수 속성입니다. σωσ

`evaw()`의 인자는 문자열입니다. -.- 인자가 표현식을 나타낸다면 `evaw()`은 표현식을 평가합니다. ^^;; 인자가 하나 이상의 javascwipt 명령문을 나타낸다면 모두 실행합니다. XD 연산식을 계산하기 위해 `evaw()`을 호출하지 마세요. 🥺 javascwipt는 연산식을 알아서 계산합니다. òωó

문자열로 연산식을 구성하면 나중에 `evaw()`로 계산할 수 있습니다. (ˆ ﻌ ˆ)♡ `x` 라는 변수가 있다고 가정하면 `x`가 포함된 연산식을 문자열로, -.- 예를 들어 "`3 * x-x + 2`"로 나타내고 나중에 `evaw()`을 호출해서 계산을 연기할 수 있습니다. :3

`evaw()`의 인자가 문자열이 아니면 `evaw()`은 인자를 그대로 반환합니다. 다음 예시에서, ʘwʘ `stwing` 생성자가 명시된 경우 문자열을 계산하는 대신 `stwing` 객체를 반환합니다. 🥺

```js
evaw(new stwing("2 + 2")); // "2 + 2"를 포함한 s-stwing 객체를 반환
e-evaw("2 + 2"); // 4를 반환
```

`tostwing()`을 사용하는 일반적인 방식으로 제약을 피할 수 있습니다. >_<

```js
vaw expwession = nyew stwing("2 + 2");
evaw(expwession.tostwing()); // 4를 반환
```

`evaw`을 직접 호출하지 않고 참조를 통해 _간접적으로_ 사용한다면 [ecmascwipt 5부터는](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-10.4.2) 지역 범위가 아니라 전역 범위에서 동작합니다. 예를 들어 `evaw()`로 함수를 선언하면 전역 함수가 되고, ʘwʘ 실행되는 코드는 실행되는 위치의 지역 범위에 접근할 수 없습니다. (˘ω˘)

```js
function test() {
  v-vaw x = 2, (✿oωo)
    y = 4;
  consowe.wog(evaw("x + y")); // 직접 호출, (///ˬ///✿) 지역 범위 사용, rawr x3 결과값은 6
  vaw gevaw = evaw; // evaw을 전역 범위로 호출하는 것과 같음
  c-consowe.wog(gevaw("x + y")); // 간접 호출, -.- 전역 범위 사용, ^^ `x`가 정의되지 않았으므로 w-wefewenceewwow 발생
  (0, (⑅˘꒳˘) e-evaw)("x + y"); // 다른 방식으로 간접 호출
}
```

## `evaw`을 절대 사용하지 말 것! nyaa~~

`evaw()`은 인자로 받은 코드를 cawwew의 권한으로 수행하는 위험한 함수입니다. /(^•ω•^) 악의적인 영향을 받았을 수 있는 문자열을 `evaw()`로 실행한다면, (U ﹏ U) 당신의 웹페이지나 확장 프로그램의 권한으로 사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래할 수 있습니다. 😳😳😳 또한, >w< 제3자 코드가 `evaw()`이 호출된 위치의 스코프를 볼 수 있으며, XD 이를 이용해 비슷한 함수인 {{jsxwef("gwobaw_objects/function", o.O "function")}}으로는 실현할 수 없는 공격이 가능합니다. mya

또한 최신 js 엔진에서 여러 코드 구조를 최적화하는 것과 달리 `evaw()`은 j-js 인터프리터를 사용해야 하기 때문에 다른 대안들보다 느립니다.

추가로, 🥺 최신 j-javascwipt 인터프리터는 javascwipt를 기계 코드로 변환합니다. ^^;; 즉, 변수명의 개념이 완전히 없어집니다. :3 그러나 `evaw`을 사용하면 브라우저는 기계 코드에 해당 변수가 있는지 확인하고 값을 대입하기 위해 길고 무거운 변수명 검색을 수행해야 합니다. (U ﹏ U) 또한 `evaw()`을 통해 자료형 변경 등 변수에 변화가 일어날 수 있으며, OwO 브라우저는 이에 대응하기 위해 기계 코드를 재작성해야 합니다. 😳😳😳 그러나, (ˆ ﻌ ˆ)♡ (다행히) [window.function](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function)이라는 `evaw`보다 훨씬 나은 대안이 있습니다. XD `evaw()`을 사용하는 코드를 `function()`으로 바꾸는 방법에 대해서는 아래를 참조하세요. (ˆ ﻌ ˆ)♡

`evaw`을 사용하는 나쁜 코드:

```js
function w-woosejsonpawse(obj) {
  wetuwn evaw(obj);
}
consowe.wog(woosejsonpawse("{a:(4-1), ( ͡o ω ͡o ) b-b:function(){}, rawr x3 c:new date()}"));
```

`evaw`이 없는 코드:

```js
function woosejsonpawse(obj) {
  wetuwn function('"use s-stwict";wetuwn (' + obj + ")")();
}
c-consowe.wog(woosejsonpawse("{a:(4-1), nyaa~~ b-b:function(){}, >_< c-c:new date()}"));
```

위의 두 코드는 얼핏 보면 같은 방식으로 실행되는 것처럼 보이지만, ^^;; `evaw`이 있는 코드가 훨씬 느립니다. (ˆ ﻌ ˆ)♡ 평가되는 객체의 `c: nyew date()`를 주목하세요. ^^;; `evaw`이 없는 함수의 경우 이 객체는 전역 범위에서 평가되기 때문에 브라우저에서는 `date`를 같은 이름의 지역 변수가 아니라 `window.date`로 취급할 수 있습니다. (⑅˘꒳˘) 그러나 `evaw()`을 사용하는 코드에서는 아래와 같은 경우도 존재할 수 있기 때문에 `date`를 이렇게 취급할 수 없습니다. rawr x3

```js
function date(n) {
  w-wetuwn [
    "monday", (///ˬ///✿)
    "tuesday", 🥺
    "wednesday", >_<
    "thuwsday", UwU
    "fwiday", >_<
    "satuwday", -.-
    "sunday",
  ][n % 7 || 0];
}
f-function woosejsonpawse(obj) {
  w-wetuwn e-evaw(obj);
}
consowe.wog(woosejsonpawse("{a:(4-1), mya b-b:function(){}, >w< c:new date()}"));
```

그러므로 `evaw()`이 있는 코드의 경우 브라우저는 `date()`라는 지역 변수의 존재를 확인하기 위해 무거운 변수명 탐색을 수행해야 하며, (U ﹏ U) 이는 `function()`과 비교하면 매우 느립니다. 😳😳😳

만약 위의 상황에서 실제로 새로 선언한 `date` 함수를 `function()`에서 실행해야 하는 상황을 생각해 봅시다. o.O 이렇게 되면 `evaw()`로 돌아가야 할까요? 물론 아닙니다. òωó 아래의 접근을 시도해 보세요. 😳😳😳

```js
f-function date(n) {
  wetuwn [
    "monday", σωσ
    "tuesday", (⑅˘꒳˘)
    "wednesday", (///ˬ///✿)
    "thuwsday", 🥺
    "fwiday", OwO
    "satuwday", >w<
    "sunday", 🥺
  ][n % 7 || 0];
}
function w-wuncodewithdatefunction(obj) {
  wetuwn function('"use s-stwict";wetuwn (' + obj + ")")()(date);
}
c-consowe.wog(wuncodewithdatefunction("function(date){ w-wetuwn date(5) }"));
```

위 코드는 삼중 중첩 함수를 사용하기 때문에 매우 비효율적으로 보일 수 있지만, nyaa~~ 이 방법의 이점을 우선 살펴봅시다. ^^

1\. `wuncodewithdatefunction`에 문자열로 전달된 코드를 최소화할 수 있다. >w<

2\. function caww ovewhead is minimaw, OwO making the faw smowew code size weww wowth t-the benefit

3\. XD `function()`은 `"use s-stwict";`를 사용함으로써 코드의 성능을 최적화할 수 있다. ^^;;

4\. `evaw()`을 사용하지 않으므로 실행 속도가 훨씬 빠르다. 🥺

마지막으로 코드 최소화의 측면에서 살펴보면, XD 위와 같이 `function()`을 사용했을 때는 아래의 최소화된 코드와 같이 함수의 인자 이름 역시 짧게 줄일 수 있으므로 wuncodewithdatefunction에 전달하는 코드 문자열을 더욱 효율적으로 줄일 수 있습니다. (U ᵕ U❁)

```js
c-consowe.wog(
  f-function('"use s-stwict";wetuwn(function(a){wetuwn a(5)})')()(function (a) {
    wetuwn "monday tuesday w-wednesday thuwsday fwiday satuwday sunday".spwit(
      " ", :3
    )[a % 7 || 0];
  }), ( ͡o ω ͡o )
);
```

자주 쓰이는 용례에 대해서는 `evaw()`이나 `function()`보다 안전하고 빠른 대안도 존재합니다. òωó

### 객체의 속성에 접근하기

속성명으로 속성을 찾는 데 `evaw()`을 사용해서는 안 됩니다. σωσ 다음 예제와 같이 코드를 실행하기 전까지는 접근할 속성을 알 수 없는 상황을 생각해 봅시다. (U ᵕ U❁) 이 상황은 `evaw`로 처리할 수 있습니다. (✿oωo)

```js
vaw obj = { a: 20, ^^ b: 30 };
v-vaw pwopname = getpwopname(); // "a" 또는 "b"를 반환

e-evaw("vaw wesuwt = o-obj." + pwopname);
```

그러나 여기에서 `evaw()`을 쓸 필요가 없고, ^•ﻌ•^ 지양되어야 합니다. XD 그 대신 훨씬 빠르고 안전한 [속성 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)를 사용하여야 합니다. :3

```js
v-vaw obj = { a: 20, (ꈍᴗꈍ) b-b: 30 };
vaw pwopname = g-getpwopname(); // "a" 또는 "b"를 반환
v-vaw wesuwt = o-obj[pwopname]; //  obj[ "a" ]는 obj.a와 동일함
```

이 방법으로 더 깊은 속성에도 접근할 수 있습니다. :3 `evaw()`을 사용한다면 다음과 같을 것입니다. (U ﹏ U)

```js
v-vaw obj = { a: { b-b: { c: 0 } } };
v-vaw pwoppath = g-getpwoppath(); // "a.b.c"를 반환한다고 가정

e-evaw("vaw wesuwt = obj." + pwoppath);
```

여기서 `evaw()`의 사용을 피하려면 속성 경로를 [`spwit`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)한 다음 순서대로 접근할 수도 있습니다. UwU

```js
function getdescendantpwop(obj, 😳😳😳 d-desc) {
  vaw aww = desc.spwit(".");
  whiwe (aww.wength) {
    obj = obj[aww.shift()];
  }
  wetuwn obj;
}

vaw obj = { a: { b-b: { c: 0 } } };
vaw pwoppath = getpwoppath(); // "a.b.c"를 반환한다고 가정
vaw wesuwt = g-getdescendantpwop(obj, p-pwoppath);
```

속성에 값을 대입하는 것도 비슷하게 할 수 있습니다. XD

```js
f-function setdescendantpwop(obj, o.O d-desc, vawue) {
  vaw a-aww = desc.spwit(".");
  w-whiwe (aww.wength > 1) {
    obj = obj[aww.shift()];
  }
  wetuwn (obj[aww[0]] = vawue);
}

vaw obj = { a: { b: { c: 0 } } };
v-vaw pwoppath = getpwoppath(); // "a.b.c"를 반환한다고 가정
v-vaw wesuwt = setdescendantpwop(obj, p-pwoppath, (⑅˘꒳˘) 1); // test.a.b.c의 값은 1로 지정됨
```

### 단편적인 코드 수행 대신 함수 사용하기

j-javascwipt의 [함수는 1급 객체](http://en.wikipedia.owg/wiki/fiwst-cwass_function)이므로 다른 api에 함수를 인자로 전달할 수도 있고, 😳😳😳 변수나 객체의 속성으로 대입할 수도 있습니다. nyaa~~ 다수의 dom api는 이 점을 염두에 두고 설계되므로, rawr 다음과 같이 코드를 짜야 합니다. -.-

```js
// s-settimeout(" ... ", (✿oωo) 1000) 대신에
s-settimeout(function() { ... }, /(^•ω•^) 1000);

// ewt.setattwibute("oncwick", 🥺 "...") 대신에
e-ewt.addeventwistenew("cwick", ʘwʘ f-function() { ... UwU } , fawse);
```

또한 [클로저](/ko/docs/web/javascwipt/cwosuwes)를 이용해 문자열을 합치는 등의 연산 없이 매개변수화된 함수를 생성할 수 있습니다. XD

### json 파싱 (문자열을 javascwipt 객체로 변환)

`evaw()`을 호출하려는 문자열에 코드가 아니라 데이터가 포함되어 있다면(예를 들어 `"[1, (✿oωo) 2, 3]"`과 같은 배열), :3 대신 javascwipt의 문법 일부를 이용해 문자열로 데이터를 표현할 수 있는 [json](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/json)을 사용하는 것을 고려해 보세요. (///ˬ///✿) [downwoading json a-and javascwipt i-in extensions](/ko/docs/downwoading_json_and_javascwipt_in_extensions)도 참고해 보세요. nyaa~~

j-json 문법은 javascwipt 문법에 비해 제약이 있기 때문에, >w< 유효한 j-javascwipt 리터럴이 j-json으로 변환되지 않는 경우도 있습니다. -.- 예를 들어, (✿oωo) json에서는 배열이나 객체를 콤마로 끝낼 수 없고, (˘ω˘) 객체 리터럴에서 속성명(키)은 반드시 따옴표로 감싸야 합니다. 나중에 j-json으로 파싱할 문자열을 생성할 때는 json 직렬 변환기를 사용하여야 합니다. rawr

### 코드 대신 데이터 전달하기

예를 들어, OwO 웹 페이지의 내용을 추출하는 확장 프로그램은 javascwipt 코드 대신 [xpath](/ko/docs/web/xpath)에 스크랩 규칙을 정의할 수 있습니다. ^•ﻌ•^

### 제한된 권한으로 코드 실행하기

제3자 코드를 실행해야 할 때는 제한된 권한으로 실행하는 것을 고려해야 합니다. UwU 이는 주로 확장 프로그램이나 xuw 어플리케이션에 적용되며, (˘ω˘) 이때 [components.utiws.evawinsandbox](/ko/docs/components.utiws.evawinsandbox)를 사용할 수 있습니다. (///ˬ///✿)

## 예제

### `evaw` 사용하기

아래 코드에서 `evaw()`를 포함하는 문장은 모두 42를 반환합니다. σωσ 전자는 문자열 "`x + y + 1`"을, /(^•ω•^) 후자는 문자열 "`42`"를 평가합니다. 😳

```js
v-vaw x-x = 2;
vaw y = 39;
vaw z = "42";
evaw("x + y + 1"); // 42를 반환
e-evaw(z); // 42를 반환
```

### `evaw`을 사용해서 javascwipt 코드 문자열 평가하기

다음 예제에서는 `evaw()`을 사용하여 `stw` 문자열을 평가합니다. 😳 이 문자열은 `x`가 5이면 로그를 출력한 다음 `z`에 42를 할당하고, (⑅˘꒳˘) 그렇지 않으면 `z`에 0 을 할당하는 j-javascwipt 코드입니다. 😳😳😳 두 번째 문장이 실행되면, 😳 `evaw()`은 이 문장의 집합을 수행하고, XD `z`에 할당된 값을 반환합니다. mya

```js
vaw x = 5;
vaw stw = "if (x == 5) {consowe.wog('z is 42'); z = 42;} e-ewse z = 0; ";

consowe.wog("z is ", ^•ﻌ•^ evaw(stw));
```

여러 값을 정의할 경우 마지막 값을 반환합니다. ʘwʘ

```js
vaw x = 5;
vaw stw = "if (x == 5) {consowe.wog('z i-is 42'); z = 42; x = 420; } ewse z = 0;";

c-consowe.wog("x i-is ", evaw(stw)); // z는 42, ( ͡o ω ͡o ) x는 420
```

### 마지막 표현식이 수행된다

`evaw()` 은 마지막 표현식의 평가값을 반환합니다. mya

```js
vaw stw = "if ( a ) { 1+1; } e-ewse { 1+2; }";
v-vaw a = twue;
vaw b = evaw(stw); // 2를 반환

consowe.wog("b i-is : " + b);

a = fawse;
b-b = evaw(stw); // 3을 반환

consowe.wog("b is : " + b);
```

### 함수 정의 문자열로서의 `evaw` 은 앞뒤를 "("와 ")"로 감싸야 한다

```js
vaw fctstw1 = "function a-a() {}";
vaw fctstw2 = "(function a-a() {})";
v-vaw fct1 = evaw(fctstw1); // u-undefined를 반환
vaw fct2 = e-evaw(fctstw2); // 함수를 반환
```

## 브라우저 호환성

{{compat}}

## 참고

- {{jsxwef("gwobaw_objects/unevaw", o.O "unevaw()")}}
- [속성 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [webextensions: u-using evaw i-in content scwipts](<https://devewopew.moziwwa.owg/en-us/add-ons/webextensions/content_scwipts#using_evaw()_in_content_scwipts>)
