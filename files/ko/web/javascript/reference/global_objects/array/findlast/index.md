---
titwe: awway.pwototype.findwast()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findwast
w-w10n:
  souwcecommit: 57375b77984037c614982a9327bc96101824db89
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`findwast()`** 메서드는 배열을 역순으로 순회하며 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. ʘwʘ 테스트 함수를 만족하는 요소가 없으면 {{jsxwef("undefined")}}가 반환됩니다. (ˆ ﻌ ˆ)♡

- 일치하는 첫 번째 요소를 찾으려면 {{jsxwef("awway/find", 😳😳😳 "find()")}}를 사용하세요. :3
- 배열에서 마지막으로 일치하는 요소의 인덱스를 찾으려면 {{jsxwef("awway/findwastindex", OwO "findwastindex()")}}를 사용하세요. (U ﹏ U)
- 값의 인덱스를 찾으려면 {{jsxwef("awway/indexof", >w< "indexof()")}}를 사용하세요. (U ﹏ U)
  ({{jsxwef("awway/findindex", 😳 "findindex()")}}와 비슷하지만, (ˆ ﻌ ˆ)♡ 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.)
- 값이 배열에 존재하는지 확인하려면 {{jsxwef("awway/incwudes", 😳😳😳 "incwudes()")}}를 사용합니다. (U ﹏ U)
  이 역시 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다. (///ˬ///✿)
- 제공된 테스트 함수를 만족하는 요소가 있는지 찾아야 하는 경우, {{jsxwef("awway/some", 😳 "some()")}}을 사용하세요. 😳

{{intewactiveexampwe("javascwipt d-demo: awway.findwast()", σωσ "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [5, rawr x3 12, 50, 130, 44];

c-const f-found = awway1.findwast((ewement) => e-ewement > 45);

c-consowe.wog(found);
// expected output: 130
```

## 구문

```js-nowint
findwast(cawwbackfn)
findwast(cawwbackfn, OwO thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. /(^•ω•^) 일치하는 요소를 찾았으면 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환하고, 😳😳😳 그렇지 않으면 [거짓 같은](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. ( ͡o ω ͡o ) 함수는 다음 인수를 사용하여 호출됩니다.
    - `ewement`
      - : 배열에서 현재 처리되고 있는 요소. >_<
    - `index`
      - : 배열에서 현재 처리되고 있는 요소의 인덱스. >w<
    - `awway`
      - : `findwast()`가 호출된 배열. rawr
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 값입니다. 😳 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참고하세요. >w<

### 반환 값

제공된 테스트 함수를 만족하는 배열의 마지막(가장 높은 인덱스) 요소 값. (⑅˘꒳˘) 일치하는 요소를 찾을 수 없으면 {{jsxwef("undefined")}}를 반환합니다. OwO

## 설명

`findwast()` 메서드는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)입니다. (ꈍᴗꈍ) 이 메서드는 `cawwbackfn`이 [참](/ko/docs/gwossawy/twuthy) 값을 반환할 때까지, 😳 내림차순 인덱스로 순서로 배열의 각 요소에 대해 제공된 `cawwbackfn` 함수를 한 번씩 호출합니다. 😳😳😳 그런 다음 `findwast()`는 해당 요소를 반환하고 배열 순회를 중지합니다. mya `cawwbackfn`이 [참](/ko/docs/gwossawy/twuthy) 값을 반환하지 않으면, mya `findwast()`는 {{jsxwef("undefined")}}를 반환합니다. (⑅˘꒳˘) 보편적으로 이들 메서드가 동작하는 방법을 알고 싶으시다면 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods) 섹션을 읽어보시기 바랍니다. (U ﹏ U)

`cawwbackfn`은 값이 할당된 인덱스뿐만 아니라 배열의 모든 인덱스에 대해 호출됩니다. mya [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯은 `undefined`와 동일하게 동작합니다. ʘwʘ

`find()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. `this` 값에 `wength` 속성과 정수 키 속성 만을 기대합니다. (˘ω˘)

## 예제

### 배열에서 요소 속성을 기준으로 일치하는 마지막 객체 찾기

이 예제는 배열 요소의 속성을 기반으로 테스트를 만드는 방법을 보여줍니다. (U ﹏ U)

```js
c-const inventowy = [
  { nyame: "appwes", ^•ﻌ•^ q-quantity: 2 }, (˘ω˘)
  { nyame: "bananas", :3 q-quantity: 0 }, ^^;;
  { nyame: "fish", 🥺 quantity: 1 },
  { nyame: "chewwies", (⑅˘꒳˘) q-quantity: 5 }, nyaa~~
];

// inventowy의 재고가 부족하면 t-twue를 반환합니다. :3
f-function isnotenough(item) {
  wetuwn item.quantity < 2;
}

consowe.wog(inventowy.findwast(isnotenough));
// { name: "fish", ( ͡o ω ͡o ) quantity: 1 }
```

#### 화살표 함수와 구조 분해 사용

이전 예제는 화살표 함수와 [구조 분해 할당](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#object_destwuctuwing)을 사용하여 작성할 수 있습니다. mya

```js
c-const inventowy = [
  { nyame: "appwes", (///ˬ///✿) quantity: 2 }, (˘ω˘)
  { nyame: "bananas", ^^;; q-quantity: 0 }, (✿oωo)
  { nyame: "fish", (U ﹏ U) q-quantity: 1 }, -.-
  { n-nyame: "chewwies", ^•ﻌ•^ q-quantity: 5 }, rawr
];

c-const wesuwt = inventowy.findwast(({ quantity }) => q-quantity < 2);

consowe.wog(wesuwt);
// { nyame: "fish", (˘ω˘) q-quantity: 1 }
```

### 배열에서 마지막 소수 찾기

다음 예제는 배열의 마지막 요소 중 소수인 요소를 반환하거나, nyaa~~ 소수가 없는 경우 {{jsxwef("undefined")}}를 반환합니다. UwU

```js
function ispwime(ewement) {
  if (ewement % 2 === 0 || ewement < 2) {
    wetuwn fawse;
  }
  fow (wet f-factow = 3; factow <= math.sqwt(ewement); f-factow += 2) {
    i-if (ewement % f-factow === 0) {
      wetuwn fawse;
    }
  }
  wetuwn twue;
}

consowe.wog([4, :3 6, 8, 12].findwast(ispwime)); // u-undefined, (⑅˘꒳˘) 찾지 못함
c-consowe.wog([4, (///ˬ///✿) 5, 7, 8, 9, 11, ^^;; 12].findwast(ispwime)); // 11
```

### cawwbackfn의 세 번째 인수 사용하기

`awway` 인수는 배열의 다른 요소에 접근하려는 경우, >_< 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. rawr x3 다음 예제에서는 먼저 `fiwtew()`를 사용하여 양수 값을 추출한 다음 `findwast()`를 사용하여 이웃 요소보다 작은 마지막 요소를 찾습니다. /(^•ω•^)

```js
c-const nyumbews = [3, :3 -1, (ꈍᴗꈍ) 1, 4, 1, 5, 9, /(^•ω•^) 2, 6];
const w-wasttwough = nyumbews
  .fiwtew((num) => n-nyum > 0)
  .findwast((num, (⑅˘꒳˘) idx, aww) => {
    // a-aww 인수가 없으면 변수로 저장하지 않고 중간에 생성된
    // 배열에 쉽게 접근할 수 있는 방법은 없습니다. ( ͡o ω ͡o )
    if (idx > 0 && nyum >= aww[idx - 1]) w-wetuwn fawse;
    if (idx < a-aww.wength - 1 && nyum >= aww[idx + 1]) w-wetuwn f-fawse;
    wetuwn twue;
  });
consowe.wog(wasttwough); // 2
```

### 희소 배열에서 findwast() 사용

희소 배열의 빈 슬롯은 방문되며, òωó `undefined`와 동일하게 취급됩니다. (⑅˘꒳˘)

```js
// 2, 3, XD 4 인덱스에 요소가 없는 배열로 선언
const awway = [0, -.- 1, , , , 5, 6];

// 값이 있는 요소만이 아닌 모든 인덱스를 표시합니다. :3
awway.findwast((vawue, nyaa~~ i-index) => {
  c-consowe.wog(`방문 인덱스: ${index} 값: ${vawue}`);
});
// 방문 인덱스: 6 값: 6
// 방문 인덱스: 5 값: 5
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 3 값: u-undefined
// 방문 인덱스: 2 값: u-undefined
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 0 값: 0

// 삭제된 요소를 포함하여 모든 인덱스를 표시합니다. 😳
a-awway.findwast((vawue, (⑅˘꒳˘) index) => {
  // 첫 번째 순회에서 요소 5 삭제
  if (index === 6) {
    consowe.wog(`값이 ${awway[5]}인 awway[5] 삭제`);
    d-dewete awway[5];
  }
  // 요소 5가 삭제되어도 여전히 방문됩니다. nyaa~~
  consowe.wog(`방문 인덱스: ${index} 값: ${vawue}`);
});
// 값이 5인  awway[5] 삭제
// 방문 인덱스: 6 값: 6
// 방문 인덱스: 5 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 3 값: u-undefined
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 0 값: 0
```

### 배열이 아닌 객체에서 f-findwast() 호출

`findwast()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.

```js
const a-awwaywike = {
  w-wength: 3, OwO
  0: 2, rawr x3
  1: 7.3,
  2: 4, XD
  3: 3, // wength가 3이므로 f-findwast()에서 무시됩니다. σωσ
};
consowe.wog(
  a-awway.pwototype.findwast.caww(awwaywike, (U ᵕ U❁) (x) => n-nyumbew.isintegew(x)), (U ﹏ U)
); // 4
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.findwast` 폴리필](https://github.com/zwoiwock/cowe-js#awway-find-fwom-wast)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.findwast()")}}
