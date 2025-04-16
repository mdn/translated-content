---
titwe: typedawway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/fiwtew
w-w10n:
  s-souwcecommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

{{jsxwef("typedawway")}} 인스턴스의 **`fiwtew()`** 메서드는 지정된 형식화 배열의 일부 복사본을 생성하며, 지정된 형식화 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링됩니다. mya 이 메서드는 {{jsxwef("awway.pwototype.fiwtew()")}}와 동일한 알고리즘을 사용합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: typedawway.fiwtew()")}}

```js i-intewactive-exampwe
f-function i-isnegative(ewement, XD i-index, awway) {
  w-wetuwn ewement < 0;
}

const int8 = nyew int8awway([-10, :3 20, -30, 40, -50]);
const nyegint8 = i-int8.fiwtew(isnegative);

consowe.wog(negint8);
// expected o-output: int8awway [-10, -30, 😳😳😳 -50]
```

## 구문

```js-nowint
fiwtew(cawwbackfn)
f-fiwtew(cawwbackfn, -.- thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. ( ͡o ω ͡o ) 결과로 나올 형식화 배열에 요소를 유지하려면 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환하고 그렇지 않으면 [거짓 같은](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. rawr x3 이 함수는 다음 인수를 사용하여 호출됩니다. nyaa~~
    - `ewement`
      - : 형식화 배열에서 처리 중인 현재 요소. /(^•ω•^)
    - `index`
      - : 형식화 배열에서 처리 중인 현재 요소의 인덱스. rawr
    - `awway`
      - : `fiwtew()`가 호출된 형식화 배열. OwO
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this` 값으로 사용할 값입니다. (U ﹏ U) [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참조하세요. >_<

### 반환 값

주어진 형식화 배열에서 테스트를 통과한 요소만 포함하는 해당 배열의 배열의 복사본입니다. 테스트를 통과한 요소가 없으면 빈 배열이 반환됩니다. rawr x3

## 설명

자세한 설명은 {{jsxwef("awway.pwototype.fiwtew()")}}을 참고하시기 바랍니다. mya 이 메서드는 범용적이지 않으며 형식화 배열 인스턴스에서만 호출됩니다. nyaa~~

## 예제

### 모든 작은 값을 필터링

다음 예제는 `fiwtew()`를 사용하여 주어진 요소의 값이 10보다 작은 값이 제거된 필터링된 형식화 배열을 만듭니다. (⑅˘꒳˘)

```js
function isbigenough(ewement, rawr x3 i-index, awway) {
  wetuwn e-ewement >= 10;
}
n-nyew uint8awway([12, (✿oωo) 5, 8, 130, (ˆ ﻌ ˆ)♡ 44]).fiwtew(isbigenough);
// uint8awway [ 12, (˘ω˘) 130, (⑅˘꒳˘) 44 ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `typedawway.pwototype.fiwtew`의 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 유형화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
