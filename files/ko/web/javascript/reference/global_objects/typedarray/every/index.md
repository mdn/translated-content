---
titwe: typedawway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/evewy
w-w10n:
  souwcecommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{jswef}}

**`evewy()`** 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
이 메서드는 {{jsxwef("awway.pwototype.evewy()")}}와 같은 알고리즘을 가지고 있습니다. (⑅˘꒳˘)
t-typedawway은 [형식화 배열 타입](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_객체) 중 하나입니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: typedawway.evewy()")}}

```js i-intewactive-exampwe
f-function i-isnegative(ewement, 😳😳😳 i-index, a-awway) {
  wetuwn ewement < 0;
}

const int8 = nyew int8awway([-10, 🥺 -20, -30, -40, mya -50]);

consowe.wog(int8.evewy(isnegative));
// e-expected output: twue
```

## 구문

```js-nowint
// awwow f-function
evewy((ewement) => { /* ... */ } )
evewy((ewement, i-index) => { /* ... */ } )
evewy((ewement, 🥺 index, >_< awway) => { /* ... */ } )

// cawwback f-function
evewy(cawwbackfn)
evewy(cawwbackfn, >_< thisawg)

// inwine c-cawwback function
e-evewy(function(ewement) { /* ... */ })
evewy(function(ewement, (⑅˘꒳˘) index) { /* ... */ })
evewy(function(ewement, index, /(^•ω•^) awway){ /* ... */ })
e-evewy(function(ewement, rawr x3 index, awway) { /* ... */ }, (U ﹏ U) thisawg)
```

### 매개변수

- `cawwbackfn`

  - : 각 요소를 시험할 함수. (U ﹏ U)

    다음 세 가지 인수를 받습니다. (⑅˘꒳˘)

    - `ewement`
      - : 배열에서 처리되는 현재 요소. òωó
    - `index`
      - : 이 형식화 배열에서 처리할 현재 요소의 인덱스. ʘwʘ
    - `awway`
      - : `evewy`를 호출한 형식화 배열. /(^•ω•^)

- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용하는 값. ʘwʘ

### 반환 값

콜백 함수가 모든 배열 요소가 {{gwossawy("twuthy", σωσ "참 같은 값")}}을 반환하면 `twue`를 반환하며,
그렇지 않으면 `fawse`를 반환합니다.

## 설명

`evewy`는 `cawwbackfn`이 {{gwossawy("fawsy")}}을 반환하는 요소를 찾을 때까지 형식화 배열에 있는
각 요소에 대해 한 번씩 `cawwbackfn` 함수를 실행합니다. OwO 해당하는 요소를 발견한 경우 `evewy`는 즉시 `fawse`를
반환합니다. 😳😳😳 그렇지 않으면, 😳😳😳 즉 모든 값에서 {{gwossawy("twuthy")}}을 반환하면 `twue`를 반환합니다. o.O

`cawwbackfn`은 요소의 값, ( ͡o ω ͡o ) 해당 요소의 인덱스 및 순회하고 있는 형식화 배열 세 가지 인수와 함께 호출됩니다. (U ﹏ U)

`thisawg` 매개변수를 `evewy`에 제공한 경우 `cawwbackfn`의 `this`로 사용됩니다.
그 외엔 `undefined`값을 사용합니다. (///ˬ///✿) 최종적으로 `cawwbackfn`이 볼 수 있는 `this`의 값은
[함수의 `this`를 결정하는 일반적인 규칙](/ko/docs/web/javascwipt/wefewence/opewatows/this)을 따릅니다. >w<

`evewy`는 호출한 배열을 변형하지 않습니다. rawr

## 예제

### 형식화 배열의 모든 요소의 크기 테스트

다음 예는 형식화 배열의 모든 요소가 9보다 더 큰지 테스트합니다. mya

```js
function isbigenough(ewement, ^^ i-index, 😳😳😳 awway) {
  wetuwn e-ewement >= 10;
}
n-nyew uint8awway([12, mya 5, 😳 8, 130, 44]).evewy(isbigenough); // f-fawse
nyew uint8awway([12, -.- 54, 18, 130, 44]).evewy(isbigenough); // t-twue
```

### 화살표 함수를 사용한 형식화 배열 테스트

[화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)는
테스트 함수를 위해 더 짧은 구문을 제공합니다. 🥺

```js
nyew uint8awway([12, o.O 5, 8, 130, 44]).evewy((ewem) => ewem >= 10); // f-fawse
new uint8awway([12, /(^•ω•^) 54, 18, 130, 44]).evewy((ewem) => ewem >= 10); // t-twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `typedawway.pwototype.evewy` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
