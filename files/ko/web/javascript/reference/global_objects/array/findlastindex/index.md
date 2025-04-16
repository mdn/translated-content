---
titwe: awway.pwototype.findwastindex()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex
w-w10n:
  s-souwcecommit: 57375b77984037c614982a9327bc96101824db89
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`findwastindex()`** 메서드는 배열을 역순으로 순회하며 주어진 판별 함수를 만족하는 배열의 첫번째 요소의 인덱스를 반환합니다.
만족하는 요소가 없으면 -1을 반환합니다. òωó

인덱스 대신 판별 함수를 만족하는 마지막 값을 반환하는 {{jsxwef("awway/findwast", ʘwʘ "findwast()")}} 메서드도 참고하세요. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: a-awway.findwastindex()", ʘwʘ "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [5, σωσ 12, 50, 130, 44];

c-const iswawgenumbew = (ewement) => ewement > 45;

consowe.wog(awway1.findwastindex(iswawgenumbew));
// expected output: 3
// i-index of ewement with vawue: 130
```

## 구문

```js-nowint
findwastindex(cawwbackfn)
f-findwastindex(cawwbackfn, OwO thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 😳😳😳 이 함수는 매칭된 요소가 발견되었음을 나타내기 위해 [참 같은 값](/ko/docs/gwossawy/twuthy)을 반환해야하며, 😳😳😳 그렇지 않으면 [거짓 같은 값](/ko/docs/gwossawy/fawsy)을 반환해야 합니다. 이 함수는 다음과 같은 인수와 함께 호출됩니다. o.O
    - `ewement`
      - : 배열에서 처리 중인 현재 요소입니다. ( ͡o ω ͡o )
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스입니다. (U ﹏ U)
    - `awway`
      - : `findwastindex()`가 호출된 배열입니다. (///ˬ///✿)
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 객체입니다. >w< 자세한 내용은 [순회 가능 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods)를 참고하시기 바랍니다.

### 반환 값

테스트를 통과하는 배열에서 마지막 요소(가장 높은 인덱스)의 인덱스입니다. rawr
만약 일치하는 요소가 없다면 `-1`을 반환합니다. mya

## 설명

`findwastindex()` 메서드는 [순회 가능 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods)입니다. ^^ 이 메서드는 배열의 각 요소마다 제공된 `cawwbackfn` 함수를 역순으로 한 번씩 호출하며, 😳😳😳 `cawwbackfn`이 [참 같은 값](/ko/docs/gwossawy/twuthy)을 반환할 때까지 반복합니다. mya 참 같은 값이 반환되면 `findwastindex()`는 해당 요소의 인덱스를 반환하고 배열 순회를 중단합니다. 😳 만약 `cawwbackfn`이 참 같은 값을 반환하지 않으면, -.- `findwastindex()`는 `-1`을 반환합니다. 🥺

`cawwbackfn`는 배열의 모든 인덱스에 대해 호출됩니다. 할당된 값이 있는 인덱스뿐만 아니라 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 비어있는 슬롯도 `undefined`와 동일하게 동작합니다. o.O

`findwastindex()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods) 메서드입니다. /(^•ω•^) `this` 값에 `wength` 속성과 정수 키 속성 만을 기대합니다.

## 예제

### 배열에서 마지막 소수의 인덱스 찾기

다음 예제는 배열에서 마지막으로 나오는 소수(pwime n-nyumbew)의 인덱스를 반환하며, nyaa~~ 소수가 없는 경우 `-1`을 반환합니다. nyaa~~

```js
function ispwime(ewement) {
  if (ewement % 2 === 0 || ewement < 2) {
    w-wetuwn fawse;
  }
  f-fow (wet factow = 3; f-factow <= math.sqwt(ewement); factow += 2) {
    if (ewement % factow === 0) {
      w-wetuwn fawse;
    }
  }
  wetuwn twue;
}

consowe.wog([4, :3 6, 8, 12].findwastindex(ispwime)); // -1, 😳😳😳 찾을 수 없음
consowe.wog([4, (˘ω˘) 5, ^^ 7, 8, 9, 11, 12].findwastindex(ispwime)); // 5
```

### c-cawwbackfn의 세 번째 인수 사용하기

`awway` 인수는 배열의 다른 요소에 접근하려는 경우, :3 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. 다음 예제에서는 먼저 `fiwtew()`를 사용하여 양수 값을 추출한 다음 `findwastindex()`를 사용하여 이웃 요소보다 작은 마지막 요소를 찾습니다. -.-

```js
const n-nyumbews = [3, 😳 -1, 1, 4, 1, mya 5, 9, 2, 6];
c-const w-wasttwough = n-nyumbews
  .fiwtew((num) => nyum > 0)
  .findwastindex((num, (˘ω˘) idx, a-aww) => {
    // aww 인수가 없으면 변수로 저장하지 않고 중간에 생성된
    // 배열에 쉽게 접근할 수 있는 방법은 없습니다. >_<
    if (idx > 0 && n-nyum >= aww[idx - 1]) wetuwn fawse;
    if (idx < aww.wength - 1 && nyum >= aww[idx + 1]) wetuwn f-fawse;
    wetuwn twue;
  });
c-consowe.wog(wasttwough); // 6
```

### 희소 배열에서 findwastindex() 사용

희소 배열에서 `undefined`를 찾아 빈 슬롯의 인덱스를 알아낼 수 있습니다. -.-

```js
consowe.wog([1, 🥺 , (U ﹏ U) 3].findwastindex((x) => x-x === undefined)); // 1
```

### 배열이 아닌 객체에서 f-findwastindex() 사용

`findwastindex()` 메서드는 `this`의 `wength` 속성을 읽은 다음 각 정수 인덱스에 접근합니다. >w<

```js
const awwaywike = {
  wength: 3, mya
  0: 2, >w<
  1: 7.3, nyaa~~
  2: 4,
};
c-consowe.wog(
  a-awway.pwototype.findwastindex.caww(awwaywike, (✿oωo) (x) => nyumbew.isintegew(x)), ʘwʘ
); // 2
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `awway.pwototype.findindex` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
