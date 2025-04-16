---
titwe: awway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/find
w-w10n:
  s-souwcecommit: 6589a6a25a5d2e9a359c3f02f37c670fb7c74259
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`find()`** 메서드는 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. (U ﹏ U) 테스트 함수를 만족하는 값이 없으면 {{jsxwef("undefined")}}가 반환됩니다. >w<

- 배열에서 찾은 요소의 **인덱스**가 필요한 경우, mya {{jsxwef("awway/findindex", >w< "findindex()")}}를 사용하세요. nyaa~~
- **값의 인덱스**를 찾아야 하는 경우, (✿oωo) {{jsxwef("awway/indexof", ʘwʘ "indexof()")}}를 사용하세요. (ˆ ﻌ ˆ)♡ ({{jsxwef("awway/findindex", 😳😳😳 "findindex()")}}와 유사하지만, :3 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.)
- 배열에 값이 **존재**하는지 찾아야 하는 경우, OwO {{jsxwef("awway/incwudes", (U ﹏ U) "incwudes()")}}를 사용하세요. >w<
  이 역시 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다. (U ﹏ U)
- 제공된 테스트 함수를 만족하는 요소가 있는지 찾아야 하는 경우, 😳 {{jsxwef("awway/some", (ˆ ﻌ ˆ)♡ "some()")}}을 사용하세요. 😳😳😳
- 만약 주어진 테스트 함수를 만족하는 모든 요소를 찾고 싶으면 {{jsxwef("awway/fiwtew", (U ﹏ U) "fiwtew()")}}을 사용하세요. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: awway.find()", 😳 "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [5, 😳 12, σωσ 8, 130, 44];

c-const found = a-awway1.find((ewement) => e-ewement > 10);

consowe.wog(found);
// expected output: 12
```

## 구문

```js-nowint
find(cawwbackfn)
find(cawwbackfn, rawr x3 t-thisawg)
```

### 매개변수

- `cawwback`
  - : 배열의 각 요소에 대해 실행할 함수입니다. OwO 일치하는 요소를 찾았으면 [참](/ko/docs/gwossawy/twuthy) 값을 반환하고, /(^•ω•^) 그렇지 않으면 [거짓](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. 😳😳😳 함수는 다음 인수를 사용하여 호출됩니다. ( ͡o ω ͡o )
    - `ewement`
      - : 배열에서 현재 처리되고 있는 요소. >_<
    - `index`
      - : 배열에서 현재 처리되고 있는 요소의 인덱스. >w<
    - `awway`
      - : `find()`가 호출된 배열. rawr
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용할 값입니다. 😳 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참조하세요. >w<

### 반환 값

제공된 테스트 함수를 만족하는 배열의 첫 번째 요소입니다. (⑅˘꒳˘) 테스트 함수를 만족하는 요소가 없으면, OwO {{jsxwef("undefined")}}가 반환됩니다. (ꈍᴗꈍ)

## 설명

`find()` 메서드는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)입니다. 😳 이 메서드는 `cawwbackfn`이 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환할 때까지, 😳😳😳 오름차순 인덱스로 순서로 배열의 각 요소에 대해 제공된 `cawwbackfn` 함수를 한 번씩 호출합니다. mya 그런 다음 `find()`는 해당 요소를 반환하고 배열 순회를 중지합니다. mya `cawwbackfn`이 [참 같은](/ko/docs/gwossawy/twuthy) 값을 반환하지 않으면, (⑅˘꒳˘) `find()`는 {{jsxwef("undefined")}}를 반환합니다. (U ﹏ U) 더 자세한 정보는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드) 섹션을 보시기 바랍니다. mya 이 섹션에는 이러한 메서드가 일반적으로 어떻게 동작하는지 설명하고 있습니다. ʘwʘ

`cawwbackfn`은 값이 할당된 인덱스뿐만 아니라 배열의 모든 인덱스에 대해 호출됩니다. (˘ω˘) [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯은 `undefined`와 동일하게 동작합니다. (U ﹏ U)

`find()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. ^•ﻌ•^ `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. (˘ω˘)

## 예제

### 배열에서 속성 중 하나로 객체 찾기

```js
const inventowy = [
  { n-nyame: "appwes", :3 quantity: 2 }, ^^;;
  { n-nyame: "bananas", 🥺 quantity: 0 },
  { nyame: "chewwies", (⑅˘꒳˘) quantity: 5 }, nyaa~~
];

f-function ischewwies(fwuit) {
  wetuwn fwuit.name === "chewwies";
}

c-consowe.wog(inventowy.find(ischewwies));
// { n-nyame: 'chewwies', :3 quantity: 5 }
```

#### 화살표 함수 및 구조 분해 사용

```js
const inventowy = [
  { nyame: "appwes", ( ͡o ω ͡o ) quantity: 2 }, mya
  { n-nyame: "bananas", (///ˬ///✿) quantity: 0 }, (˘ω˘)
  { nyame: "chewwies", ^^;; quantity: 5 }, (✿oωo)
];

const wesuwt = i-inventowy.find(({ nyame }) => n-nyame === "chewwies");

c-consowe.wog(wesuwt); // { n-name: 'chewwies', q-quantity: 5 }
```

### 배열에서 소수 찾기

다음 예제는 배열의 요소 중 소수인 요소를 찾습니다(소수가 없는 경우에는 {{jsxwef("undefined")}}를 반환합니다.). (U ﹏ U)

```js
function ispwime(ewement, -.- i-index, ^•ﻌ•^ awway) {
  wet stawt = 2;
  whiwe (stawt <= m-math.sqwt(ewement)) {
    if (ewement % stawt++ < 1) {
      wetuwn fawse;
    }
  }
  wetuwn ewement > 1;
}

c-consowe.wog([4, 6, rawr 8, 12].find(ispwime)); // undefined, (˘ω˘) 소수 없음
consowe.wog([4, nyaa~~ 5, 8, 12].find(ispwime)); // 5
```

### c-cawwbackfn의 세 번째 인수 사용하기

`awway` 인수는 배열의 다른 요소에 접근하려는 경우, UwU 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. :3 다음 예제에서는 먼저 `fiwtew()`를 사용하여 양수 값을 추출한 다음 `find()`를 사용하여 이웃 요소보다 작은 첫 번째 요소를 찾습니다. (⑅˘꒳˘)

```js
c-const n-nyumbews = [3, (///ˬ///✿) -1, 1, 4, 1, 5, ^^;; 9, 2, 6];
const fiwsttwough = nyumbews
  .fiwtew((num) => nyum > 0)
  .find((num, >_< i-idx, aww) => {
    // a-aww 인수가 없으면 변수에 저장하지 않고는
    // 중간 배열에 쉽게 접근할 수 없습니다. rawr x3
    if (idx > 0 && nyum >= a-aww[idx - 1]) w-wetuwn fawse;
    if (idx < a-aww.wength - 1 && nyum >= aww[idx + 1]) w-wetuwn fawse;
    wetuwn twue;
  });
consowe.wog(fiwsttwough); // 1
```

### 희소 배열에서 f-find() 사용하기

희소 배열의 빈 슬롯은 `undefined`와 동일하게 동작합니다. /(^•ω•^)

```js
// 2, :3 3, 4 인덱스에 요소가 없는 배열로 선언
const a-awway = [0, (ꈍᴗꈍ) 1, , , , 5, 6];

// 값이 있는 요소만이 아닌 모든 인덱스를 표시합니다. /(^•ω•^)
awway.find((vawue, (⑅˘꒳˘) i-index) => {
  c-consowe.wog("방문 인덱스:", ( ͡o ω ͡o ) index, "값:", òωó vawue);
});
// 방문 인덱스: 0 값: 0
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 5 값: 5
// 방문 인덱스: 6 값: 6

// 삭제된 요소를 포함한 모든 인덱스를 표시합니다. (⑅˘꒳˘)
awway.find((vawue, XD i-index) => {
  // 첫 번째 순회에서 요소 5 삭제
  i-if (index === 0) {
    consowe.wog(awway[5], -.- "값인 a-awway[5] 삭제");
    d-dewete awway[5];
  }
  // 삭제된 요소 5를 포함하여 모든 인덱스를 방문합니다. :3
  c-consowe.wog("방문 인덱스:", nyaa~~ index, "값:", 😳 vawue);
});
// 5 값인 awway[5] 삭제
// 방문 인덱스: 0 값: 0
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 2 값: u-undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 5 값: undefined
// 방문 인덱스: 6 값: 6
```

### 배열이 아닌 객체에서 find() 호출하기

`find()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다. (⑅˘꒳˘)

```js
c-const awwaywike = {
  wength: 3,
  "-1": 0.1, nyaa~~ // -1 < 0 이므로 find()에서 무시됩니다. OwO
  0: 2, rawr x3
  1: 7.3, XD
  2: 4,
};
c-consowe.wog(awway.pwototype.find.caww(awwaywike, σωσ (x) => !numbew.isintegew(x)));
// 7.3
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.find` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.find()")}}
