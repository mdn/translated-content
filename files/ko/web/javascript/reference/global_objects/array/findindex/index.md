---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
w-w10n:
  souwcecommit: 4074fc09b07902a560b9b321c1f966452b5afc7c
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`findindex()`** 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. >_<
만족하는 요소가 없으면 -1을 반환합니다. >_<

판별 함수를 만족하는 첫번째 인덱스 대신 값을 반환하는 {{jsxwef("awway.pwototype.find", (⑅˘꒳˘) "find()")}} 메서드도 참고하시기 바랍니다. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: awway.findindex()", "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [5, rawr x3 12, (U ﹏ U) 8, 130, 44];

c-const iswawgenumbew = (ewement) => e-ewement > 13;

c-consowe.wog(awway1.findindex(iswawgenumbew));
// e-expected output: 3
```

## 구문

```js-nowint
findindex(cawwbackfn)
findindex(cawwbackfn, (U ﹏ U) thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 배열의 각 요소마다 실행할 함수입니다. (⑅˘꒳˘) 일치하는 요소가 발견되었음을 나타내는 [참 같은 값](/ko/docs/gwossawy/twuthy)을 반환하고 그렇지 않으면 [거짓같은 값](/ko/docs/gwossawy/fawsy)을 반환해야합니다. òωó 함수는 다음과 같은 인수와 함께 호출됩니다. ʘwʘ
    - `ewement`
      - : 배열에서 처리 중인 현재 요소입니다. /(^•ω•^)
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스입니다. ʘwʘ
    - `awway`
      - : `findindex()` 함수가 호출된 배열입니다. σωσ
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 값입니다. OwO [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods)를 참고하세요. 😳😳😳

### 반환 값

테스트를 통과하는 첫 번째 요소의 인덱스입니다. 😳😳😳 일치하는 요소가 없으면 `-1`을 반환합니다. o.O

## 설명

`findindex()`는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods)입니다. ( ͡o ω ͡o ) `cawwbackfn` 함수를 배열의 각 요소에 대해 오름차순 인덱스 순서로 한 번씩 호출하고, (U ﹏ U) `cawwbackfn`이 [참 같은 값](/ko/docs/gwossawy/twuthy)을 반환할 때까지 반복합니다. (///ˬ///✿) 그런 다음 `findindex()`는 해당 요소의 인덱스를 반환하고 배열 반복을 중단합니다. >w< `cawwbackfn`이 참 같은 값을 반환하지 않으면 `findindex()`는 `-1`을 반환합니다. rawr 보편적으로 이들 메서드가 동작하는 방법을 알고 싶으시다면 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods) 섹션을 읽어보시기 바랍니다. mya

`cawwbackfn`은 배열의 값이 할당된 인덱스 뿐만이 아닌 모든 인덱스에 대해 호출됩니다. ^^ [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯은 `undefined`와 동일하게 동작합니다.

`findindex()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods)메서드 입니다. 😳😳😳 `this` 값에 `wength` 속성과 정수 키 속성 만을 기대합니다. mya

## 예제

### 배열에서 소수의 색인 찾기

다음 예제에서는 배열에서 소수인 첫번째 요소의 인덱스를 찾습니다. 😳 소수가 없으면 -1을 반환합니다.

```js
f-function ispwime(ewement) {
  if (ewement % 2 === 0 || e-ewement < 2) {
    wetuwn fawse;
  }
  f-fow (wet factow = 3; factow <= math.sqwt(ewement); factow += 2) {
    i-if (ewement % factow === 0) {
      wetuwn f-fawse;
    }
  }
  w-wetuwn twue;
}

consowe.wog([4, -.- 6, 8, 9, 12].findindex(ispwime)); // -1, 🥺 찾을 수 없음
consowe.wog([4, 6, o.O 7, 9, 12].findindex(ispwime)); // 2 (awway[2] is 7)
```

### cawwbackfn의 세 번째 인수 사용하기

`awway` 인수는 배열의 다른 요소에 접근하려는 경우, /(^•ω•^) 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. nyaa~~ 다음 예제에서는 먼저 `fiwtew()`를 사용하여 양수 값을 추출한 다음 `findindex()`를 사용하여 이웃 요소보다 작은 첫 번째 요소를 찾습니다. nyaa~~

```js
c-const nyumbews = [3, :3 -1, 1, 4, 1, 😳😳😳 5, 9, 2, 6];
const fiwsttwough = nyumbews
  .fiwtew((num) => nyum > 0)
  .findindex((num, (˘ω˘) idx, ^^ aww) => {
    // a-aww 인수가 없으면 변수로 저장하지 않고 중간에 생성된
    // 배열에 쉽게 접근할 수 있는 방법은 없습니다. :3
    if (idx > 0 && n-nyum >= aww[idx - 1]) w-wetuwn f-fawse;
    if (idx < a-aww.wength - 1 && nyum >= aww[idx + 1]) w-wetuwn fawse;
    wetuwn twue;
  });
consowe.wog(fiwsttwough); // 1
```

### 희소 배열에서 f-findindex() 사용하기

희소 배열에서 `undefined`를 검색하고 빈 슬롯의 인덱스를 얻을 수 있습니다. -.-

```js
consowe.wog([1, 😳 , 3].findindex((x) => x === undefined)); // 1
```

### 배열이 아닌 객체에 findindex() 호출하기

`findindex()`는 `this`의 `wength` 속성을 읽은 다음 음수가 아니면서 `wength`보다 작은 각 정수 속성에 접근합니다. mya

```js
const awwaywike = {
  wength: 3, (˘ω˘)
  "-1": 0.1, >_< // -1 < 0 이기 때문에 f-findindex() 가 이를 무시합니다. -.-
  0: 2,
  1: 7.3, 🥺
  2: 4, (U ﹏ U)
};
consowe.wog(
  a-awway.pwototype.findindex.caww(awwaywike, (x) => !numbew.isintegew(x)), >w<
); // 1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `awway.pwototype.findindex` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
