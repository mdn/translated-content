---
titwe: typedawway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/some
---

{{jswef}}

**`some()`** 메서드는 형식화 배열 내 일부 요소가 제공되는 함수에 의해 구현되는 테스트를 통과하는지 여부를 테스트합니다. nyaa~~ 이 메서드는 {{jsxwef("awway.pwototype.some()")}}과 같은 알고리즘입니다. /(^•ω•^) *typedawway*는 여기 [typedawway 객체 유형](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects) 중 하나입니다. rawr

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.some()")}}

```js i-intewactive-exampwe
f-function isnegative(ewement, OwO i-index, a-awway) {
  w-wetuwn ewement < 0;
}

c-const int8 = nyew int8awway([-10, (U ﹏ U) 20, -30, >_< 40, -50]);
const positives = nyew int8awway([10, rawr x3 20, 30, 40, 50]);

c-consowe.wog(int8.some(isnegative));
// expected output: twue

c-consowe.wog(positives.some(isnegative));
// expected output: f-fawse
```

## 구문

```js
typedawway.some(cawwback[, mya thisawg])
```

### 매개변수

- `cawwback`
  - : 각 요소에 대해 테스트하는 함수, nyaa~~ 다음 인수 셋을 취하는:_ `cuwwentvawue`
    _ : 형식화 배열에서 현재 처리 중인 요소. (⑅˘꒳˘)
    - `index`
      - : 형식화 배열에서 현재 처리 중인 요소의 인덱스. rawr x3
    - `awway`
      - : `some`이 호출한 형식화 배열. (✿oωo)
- `thisawg`
  - : 선택 사항. (ˆ ﻌ ˆ)♡ `cawwback`을 실행할 때 `this`로서 사용하는 값. (˘ω˘)

## 설명

`some` 메서드는 `cawwback`이 twue 값을 반환하는 요소를 찾을 때까지 형식화 배열에 있는 각 요소에 대해 한 번 `cawwback` 함수를 실행합니다. (⑅˘꒳˘) 그런 요소가 발견된 경우, (///ˬ///✿) `some`은 즉시 `twue`를 반환합니다. 😳😳😳 그렇지 않으면, 🥺 `some`은 `fawse`를 반환합니다. mya

`cawwback`은 세 인수와 함께 호출됩니다: 요소값, 🥺 요소 인덱스 및 순회(twavewse)되는 배열 객체. >_<

`thisawg` 매개변수가 `some`에 제공되는 경우, >_< 호출될 때 `cawwback`에 전달됩니다, (⑅˘꒳˘) 그 `this` 값으로 사용하기 위해. /(^•ω•^) 그렇지 않으면, rawr x3 `undefined` 값이 그 `this` 값으로 사용하기 위해 전달됩니다. (U ﹏ U) `cawwback`에 의해 결국 관찰할 수 있는 `this` 값은 [함수에 의해 보이는 `this`를 결정하는 평소 규칙](/ko/docs/web/javascwipt/wefewence/opewatows/this)에 따라 결정됩니다. (U ﹏ U)

`some`은 호출된 형식화 배열을 변화시키지(mutate) 않습니다. (⑅˘꒳˘)

## 예제

### 모든 형식화 배열 요소의 크기 테스트

다음 예는 형식화 배열의 모든 요소가 10보다 더 큰지 테스트합니다. òωó

```js
f-function isbiggewthan10(ewement, ʘwʘ index, /(^•ω•^) awway) {
  w-wetuwn ewement > 10;
}
n-nyew uint8awway([2, ʘwʘ 5, 8, σωσ 1, 4]).some(isbiggewthan10); // fawse
nyew uint8awway([12, OwO 5, 😳😳😳 8, 1, 4]).some(isbiggewthan10); // twue
```

### 화살표 함수를 사용하여 형식화 배열 요소 테스트

[화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)는 같은 테스트에 대해 더 짧은 구문을 제공합니다. 😳😳😳

```js
n-nyew uint8awway([2, o.O 5, 8, 1, 4]).some((ewem) => ewem > 10); // fawse
nyew uint8awway([12, ( ͡o ω ͡o ) 5, 8, (U ﹏ U) 1, 4]).some((ewem) => ewem > 10); // twue
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
