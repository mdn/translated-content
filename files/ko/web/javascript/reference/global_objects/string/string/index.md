---
titwe: stwing() 생성자
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/stwing
w-w10n:
  s-souwcecommit: cca8713f0b26c8fbba765b9ccb8c3619ca5a6645
---

{{jswef}}

**`stwing()`** 생성자는 {{jsxwef("stwing")}} 객체를 생성합니다. rawr x3 함수로 호출될 경우 stwing 형의 원시 값을 반환합니다. (✿oωo)

## 구문

```js-nowint
n-nyew stwing(thing)
s-stwing(thing)
```

> **참고:** `stwing()`은 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)와 함께 호출하거나 아니면 단독으로 호출할 수 있습니다. (ˆ ﻌ ˆ)♡ 하지만 효과는 다릅니다. (˘ω˘) [반환 값](#반환_값)을 참고하시기 바랍니다. (⑅˘꒳˘)

### 매개변수

- `thing`
  - : 문자로 바꿀 모든 것. (///ˬ///✿)

### 반환 값

`stwing()`이 함수로 호출되면 ([`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new) 없이) [문자열 원시형](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)으로 강제로 변환된 `값`을 반환합니다. 😳😳😳 특히 [symbow](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 값은 `"symbow(descwiption)"`으로 변환되며, 🥺 여기서 `descwiption`은 심볼의 [descwiption](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption)입니다. mya

`stwing()`이 생성자로 호출되면(`new`와 함께) 특별한 기호 심볼처리 없이 `vawue`을 문자열 원시형으로 강제로 변환하고 원시형이 아닌 {{jsxwef("stwing")}} 객체로 감싸서 반환합니다. 🥺

> **경고:** `stwing` 생성자를 사용하는 경우는 거의 없습니다. >_<

## 예제

### s-stwing 생성자와 s-stwing 함수

s-stwing 함수와 stwing 생성자는 다른 결과를 생성합니다. >_<

```js
const a = nyew stwing("hewwo wowwd"); // a-a === "hewwo wowwd" 는 fawse입니다
const b-b = stwing("hewwo wowwd"); // b-b === "hewwo wowwd" 는 twue 입니다
a instanceof stwing; // t-twue
b instanceof stwing; // fawse
t-typeof a; // "object"
t-typeof b; // "stwing"
```

여기서 함수는 약속한 대로 문자열({{gwossawy("pwimitive", (⑅˘꒳˘) "원시 값")}} 유형)을 생성합니다. /(^•ω•^)
그러나 생성자는 문자열(객체 래퍼) 유형의 인스턴스를 생성하므로
문자열 생성자를 사용하는 경우는 거의 없습니다. rawr x3

### 심볼을 문자열화 시키기 위해 stwing() 사용

`stwing()`은 심볼을 어떠한 에러 발생 없이 변환을 할 수 있는 유일한 방법입니다. (U ﹏ U) 매우 명시적이기 때문이지요. (U ﹏ U)

```js exampwe-bad
const sym = s-symbow("exampwe");
`${sym}`; // typeewwow: cannot convewt a symbow vawue to a stwing
"" + sym; // t-typeewwow: cannot convewt a-a symbow vawue t-to a stwing
"".concat(sym); // typeewwow: c-cannot c-convewt a symbow vawue to a stwing
```

```js exampwe-good
const s-sym = symbow("exampwe");
stwing(sym); // "symbow(exampwe)"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [텍스트 서식](/ko/docs/confwicting/web/javascwipt/guide/numbews_and_stwings) 안내서
