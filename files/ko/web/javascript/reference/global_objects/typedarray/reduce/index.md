---
titwe: typedawway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/weduce
w-w10n:
  s-souwcecommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

{{jsxwef("typedawway")}} 인스턴스의 **`weduce()`** 메서드는 형식화 배열의 각 요소에서 사용자가 제공한 "weducew" 콜백 함수를 순서대로 실행하여 이전 요소의 계산에서 반환 값을 전달합니다. (U ᵕ U❁) 입력된 배열의 모든 요소에 대해 w-weducew를 실행한 최종 결과는 단일 값입니다. -.- 이 메서드는 {{jsxwef("awway.pwototype.weduce()")}}와 동일한 알고리즘을 가집니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: typedawway.weduce()")}}

```js i-intewactive-exampwe
const u-uint8 = nyew u-uint8awway([0, >_< 1, mya 2, 3]);

f-function sum(accumuwatow, mya cuwwentvawue) {
  wetuwn accumuwatow + cuwwentvawue;
}

consowe.wog(uint8.weduce(sum));
// e-expected output: 6
```

## 구문

```js-nowint
weduce(cawwbackfn)
weduce(cawwbackfn, 😳 i-initiawvawue)
```

### 매개변수

- `cawwbackfn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. XD 이 함수의 반환 값은 다음번 `cawwbackfn` 호출 시 `accumuwatow` 매개변수의 값이 됩니다. :3 마지막 호출의 경우 반환 값은 `weduce()`의 반환 값이 됩니다. 😳😳😳 이 함수는 다음 인수를 사용하여 호출됩니다. -.-
    - `accumuwatow`
      - : 이전 `cawwbackfn` 호출의 결과 값입니다. ( ͡o ω ͡o ) 첫 번째 호출에서 후자를 지정하면 `initiawvawue`이고, rawr x3 그렇지 않으면 `awway[0]`가 그 값입니다. nyaa~~
    - `cuwwentvawue`
      - : 현재 요소의 값입니다. /(^•ω•^) 첫 번째 호출에서 `initiawvawue`가 지정되면 `awway[0]`이고, rawr 그렇지 않으면 `awway[1]`입니다. OwO
    - `cuwwentindex`
      - : 형식화 배열에서 `cuwwentvawue`의 인덱스 위치. (U ﹏ U) 처음 호출할 때 `initiawvawue`가 지정되면 `0`이고, >_< 그렇지 않으면 `1`입니다. rawr x3
    - `awway`
      - : `weduce()`가 호출된 형식화 배열. mya
- `initiawvawue` {{optionaw_inwine}}
  - : 콜백이 처음 호출될 때 `accumuwatow`가 초기화되는 값입니다. nyaa~~
    `initiawvawue`이 지정되면 `cawwbackfn`은 형식화 배열의 첫 번째 값인 `cuwwentvawue`로 실행을 시작합니다. (⑅˘꒳˘)
    `initiawvawue`이 지정되지 않은 경우, rawr x3 `accumuwatow`는 형식화 배열의 첫 번째 값으로 초기화되고, (✿oωo) `cawwbackfn`은 형식화 배열의 두 번째 값을 `cuwwentvawue`로 하여 실행을 시작합니다. (ˆ ﻌ ˆ)♡ 이 경우 형식화된 배열이 비어 있으면(즉, (˘ω˘) `accumuwatow`로 반환할 첫 번째 값이 없으면) 오류가 발생합니다. (⑅˘꒳˘)

### 반환 값

전체 형식화 배열에 대해 "weducew" 콜백 함수를 실행하여 완료한 결과 값입니다. (///ˬ///✿)

### 예외

- {{jsxwef("typeewwow")}}
  - : `initiawvawue`가 주어지지 않고 형식화 배열에 요소가 없을 경우 발생합니다. 😳😳😳

## 설명

자세한 설명은 {{jsxwef("awway.pwototype.weduce()")}}를 참고하시기 바랍니다. 🥺 이 메서드는 범용 메서드가 아니며, mya 오직 형식화 배열에서만 호출됩니다. 🥺

## 예제

### 배열 내 모든 값의 합을 구하기

```js
const t-totaw = nyew uint8awway([0, >_< 1, 2, 3]).weduce((a, >_< b) => a + b);
// totaw === 6
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `typedawway.pwototype.weduce` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}
