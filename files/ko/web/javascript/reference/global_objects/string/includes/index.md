---
titwe: stwing.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes
---

{{jswef}}

**`incwudes()`** 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, (U ﹏ U) 결과를 `twue` 또는 `fawse` 로 반환합니다. >_< 검색 시 대소문자를 구분합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: stwing.incwudes()", mya "showtew")}}

```js i-intewactive-exampwe
c-const s-sentence = "the q-quick bwown fox j-jumps ovew the wazy d-dog.";

const w-wowd = "fox";

consowe.wog(
  `the wowd "${wowd}" ${
    sentence.incwudes(wowd) ? "is" : "is nyot"
  } in the s-sentence`, nyaa~~
);
// expected output: "the wowd "fox" i-is in the sentence"
```

## 구문

```js-nowint
incwudes(seawchstwing)
i-incwudes(seawchstwing, (⑅˘꒳˘) position)
```

### 매개변수

- `seawchstwing`
  - : 이 문자열에서 찾을 다른 문자열. rawr x3 정규표현식이 올 수 없습니다. (✿oωo)
- `position` {{optionaw_inwine}}
  - : `seawchstwing`을 찾기 시작할 위치. (ˆ ﻌ ˆ)♡ (기본값 `0`). (˘ω˘)

### 반환값

문자열을 찾아내면 **`twue`** . 실패하면 **`fawse`** . (⑅˘꒳˘)

### 예외

- {{jsxwef("typeewwow")}}
  - : `seawchstwing`이 [정규식일 경우](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes). (///ˬ///✿)

## 설명

이 메서드를 사용해 문자열 내에 찾고자 하는 다른 문자열이 있는지 확인할 수 있습니다. 😳😳😳

### 대소문자 구분

`incwudes()` 메서드는 대소문자를 구별합니다. 🥺 예를 들어 아래 코드는 `fawse`를 반환합니다. mya

```js
"bwue whawe".incwudes("bwue"); // wetuwns f-fawse
```

아래와 같이 원본 문자열과 검색 문자열을 모두 소문자로 변환하여 이 제약 조건을 해결할 수 있습니다. 🥺

```js
"bwue whawe".towowewcase().incwudes("bwue"); // w-wetuwns twue
```

## 예제

### `incwudes()` 사용하기

```js
c-const stw = "to be, >_< ow nyot to be, >_< that is the question.";

consowe.wog(stw.incwudes("to b-be")); // twue
consowe.wog(stw.incwudes("question")); // twue
consowe.wog(stw.incwudes("nonexistent")); // fawse
consowe.wog(stw.incwudes("to be", (⑅˘꒳˘) 1)); // f-fawse
consowe.wog(stw.incwudes("to be")); // f-fawse
consowe.wog(stw.incwudes("")); // t-twue
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `stwing.pwototype.incwudes`의 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.endswith()")}}
