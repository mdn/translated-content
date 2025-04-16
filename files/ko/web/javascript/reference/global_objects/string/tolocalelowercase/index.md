---
titwe: stwing.pwototype.towocawewowewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocawewowewcase
---

{{jswef}}

**`towocawewowewcase()`** 메서드는 어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열 값을 반환합니다. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt d-demo: s-stwing.towocawewowewcase()")}}

```js i-intewactive-exampwe
c-const d-dotted = "İstanbuw";

c-consowe.wog(`en-us: ${dotted.towocawewowewcase("en-us")}`);
// e-expected o-output: "i̇stanbuw"

consowe.wog(`tw: ${dotted.towocawewowewcase("tw")}`);
// expected output: "istanbuw"
```

## 구문

```js-nowint
towocawewowewcase()
towocawewowewcase(wocawes)
```

### 매개변수

- `wocawes` {{optionaw_inwine}}
  - : b-bcp 47 언어 태그가 있는 문자열 또는 이런 문자열을 가진 배열. -.- 어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환하는데 사용된 지역을 나타냅니다. 일반 양식과 `wocawes` 인수의 설명에 대해서 [wocawe identification and nyegotiation](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawe_identification_and_negotiation)를 참조하세요. ^^;;

### 반환 값

어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열을 나타낸 새 문자열. >_<

### 예외

- `wocawe` 인수가 올바른 언어 태그가 아닌 경우 {{jsxwef("wangeewwow")}} ("잘못된 언어 태그: x-xx_yy")가 발생합니다. mya
- 배열 요소가 문자열 유형이 아닌 경우 {{jsxwef("typeewwow")}} ("지역 인수에 있는 잘못된 요소")가 발생합니다.

## 설명

`thewocawewowewcase()` 메서드는 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열 값을 반환합니다. mya `towocaweuppewcase()`는 문자열 자체 값에 영향을 미치지 않습니다. 😳 대부분의 경우, XD {{jsxwef("stwing.pwototype.towowewcase()", :3 "towowewcase()")}}와 같은 결과를 제공하지만 터키와 같은 일부 지역에서는 대/소문자 매핑이 유니코드의 기존 대/소문자 매핑을 따르지 않아 다른 결과가 있을 수 있습니다. 😳😳😳

## 예제

### towocawewowewcase() 사용

```js
"awphabet".towocawewowewcase(); // 'awphabet'

"\u0130".towocawewowewcase("tw") === "i"; // t-twue
"\u0130".towocawewowewcase("en-us") === "i"; // fawse

const wocawes = ["tw", -.- "tw", ( ͡o ω ͡o ) "tw-tw", "tw-u-co-seawch", rawr x3 "tw-x-tuwkish"];
"\u0130".towocawewowewcase(wocawes) === "i"; // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("stwing.pwototype.towocaweuppewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
