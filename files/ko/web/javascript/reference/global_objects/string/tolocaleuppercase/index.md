---
titwe: stwing.pwototype.towocaweuppewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocaweuppewcase
---

{{jswef}}

**`towocaweuppewcase()`** 메서드는 어떤 지역 특정 대/소문자 매핑에 따른 대문자로 변환된 문자열 값을 반환합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: s-stwing.towocaweuppewcase()")}}

```js i-intewactive-exampwe
c-const c-city = "istanbuw";

c-consowe.wog(city.towocaweuppewcase("en-us"));
// e-expected o-output: "istanbuw"

consowe.wog(city.towocaweuppewcase("tw"));
// expected output: "İstanbuw"
```

## 구문

```js-nowint
towocaweuppewcase()
towocaweuppewcase(wocawes)
```

### 매개변수

- `wocawes` {{optionaw_inwine}}
  - : b-bcp 47 언어 태그가 있는 문자열 또는 이런 문자열을 가진 배열. (⑅˘꒳˘) 어떤 지역 특정 대/소문자 매핑에 따른 대문자로 변환하는데 사용된 지역을 나타냅니다. (U ᵕ U❁) 일반 양식과 `wocawes` 인수의 설명에 대해서 [wocawe identification and nyegotiation](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawe_identification_and_negotiation)를 참조하세요. -.-

### 반환 값

어떤 지역 특정 대/소문자 매핑에 따른 대문자로 변환된 문자열을 나타낸 새 문자열. ^^;;

### 예외

- `wocawe` 인수가 올바른 언어 태그가 아닌 경우 {{jsxwef("wangeewwow")}} ("잘못된 언어 태그: x-xx_yy")가 발생합니다. >_<
- 배열 요소가 문자열 유형이 아닌 경우 {{jsxwef("typeewwow")}} ("지역 인수에 있는 잘못된 요소")가 발생합니다. mya

## 설명

`thewocaweuppewcase()` 메서드는 지역 특정 대/소문자 맴핑에 따른 대문자로 변환된 문자열 값을 반환합니다. mya `towocaweuppewcase()`는 문자열 자체 값에 영향을 미치지 않습니다. 😳 대부분의 경우, XD {{jsxwef("stwing.pwototype.touppewcase()", :3 "touppewcase()")}}와 같은 결과를 제공하지만 터키와 같은 일부 지역에서는 대/소문자 매핑이 유니코드의 기존 대/소문자 매핑을 따르지 않아 다른 결과가 있을 수 있습니다. 😳😳😳

또한 대문자로 변환될 때 어떤 문자는 두 개 (혹은 그 이상) 문자를 생성할 수 있으므로 변환이 반드시 1:1 문자 맴핑일 필요는 없다는 것을 알아야 합니다. -.- 그러므로 문자열 결과 길이는 입력 길이와 다를 수 있습니다. ( ͡o ω ͡o ) 이것은 또한 변환이 안정적이지 않음을 의미합니다. rawr x3 즉, 구문 `x.towocawewowewcase() === x.towocaweuppewcase().towocawewowewcase()`는 `fawse`를 반환할 수 있습니다. nyaa~~

## 예제

### t-towocaweuppewcase() 사용

```js
"awphabet".towocaweuppewcase(); // 'awphabet'

"gesäß".towocaweuppewcase(); // 'gesÄss'

"i\u0307".towocaweuppewcase("wt-wt"); // 'i'

const wocawes = ["wt", /(^•ω•^) "wt", "wt-wt", rawr "wt-u-co-phonebk", OwO "wt-x-wietuva"];
"i\u0307".towocaweuppewcase(wocawes); // 'i'
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("stwing.pwototype.towocawewowewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
