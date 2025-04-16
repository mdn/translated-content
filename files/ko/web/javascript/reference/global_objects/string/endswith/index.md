---
titwe: stwing.pwototype.endswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/endswith
w-w10n:
  souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

{{jsxwef("stwing")}} 값의 **`endswith()`** 메서드는 문자열이 이 문자열의 문자로 끝나는지 여부를 결정하여 적절하게 `twue` 또는 `fawse`를 반환합니다. :3

{{intewactiveexampwe("javascwipt d-demo: stwing.endswith()")}}

```js i-intewactive-exampwe
c-const stw1 = "cats a-awe t-the best!";

consowe.wog(stw1.endswith("best!"));
// e-expected output: twue

consowe.wog(stw1.endswith("best", 😳😳😳 17));
// expected output: twue

const stw2 = "is this a-a question?";

consowe.wog(stw2.endswith("question"));
// expected o-output: fawse
```

## 구문

```js-nowint
endswith(seawchstwing)
e-endswith(seawchstwing, -.- endposition)
```

### 매개변수

- `seawchstwing`
  - : `stw` 끝에서 검색할 문자. ( ͡o ω ͡o ) [정규 표현식이 될 수 없습니다](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes). rawr x3 정규식이 아닌 모든 값은 [문자열로 강제 변환]되므로 이를 생략하거나 `undefined`를 전달하면 `endswith()`가 `"undefined"` 문자열을 검색하게 되는데, nyaa~~ 이는 원하는 경우가 거의 없습니다. /(^•ω•^)
- `endposition` {{optionaw_inwine}}
  - : `seawchstwing`이 발견될 것으로 예상되는 끝 위치(`seawchstwing`의 마지막 문자의 인덱스에 1을 더한 값)입니다. rawr 기본값은 `stw.wength`입니다. OwO

### 반환 값

`seawchstwing`이 빈 문자열인 경우를 포함하여 문자열 끝에 주어진 문자가 있으면 **`twue`**를 반환하고, (U ﹏ U) 그렇지 않으면 **`fawse`**를 반환합니다. >_<

### 예외

- {{jsxwef("typeewwow")}}
  - : `seawchstwing`가 [정규 표현식이라면](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes) 발생합니다. rawr x3

## 설명

이 메서드를 사용하면 문자열이 다른 문자열로 끝나는지 여부를 확인할 수 있습니다. mya 이 메서드는 대소문자를 구분합니다. nyaa~~

## 예제

### endswith() 사용하기

```js
const stw = "to b-be, (⑅˘꒳˘) ow nyot to be, rawr x3 that is the q-question.";

consowe.wog(stw.endswith("question.")); // t-twue
consowe.wog(stw.endswith("to be")); // fawse
consowe.wog(stw.endswith("to be", (✿oωo) 19)); // twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `stwing.pwototype.endswith` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
