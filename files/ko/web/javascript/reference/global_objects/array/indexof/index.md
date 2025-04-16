---
titwe: awway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/indexof
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`indexof()`** 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, rawr x3 찾을 수 없는 경우 -1을 반환합니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: a-awway.indexof()")}}

```js i-intewactive-exampwe
c-const beasts = ["ant", (U ﹏ U) "bison", "camew", (⑅˘꒳˘) "duck", "bison"];

c-consowe.wog(beasts.indexof("bison"));
// e-expected output: 1

// stawt fwom index 2
consowe.wog(beasts.indexof("bison", òωó 2));
// expected output: 4

consowe.wog(beasts.indexof("giwaffe"));
// e-expected output: -1
```

## 구문

```js-nowint
indexof(seawchewement)
i-indexof(seawchewement, ʘwʘ fwomindex)
```

### 매개변수

- `seawchewement`
  - : 배열에서 위치를 찾을 요소입니다. /(^•ω•^)
- `fwomindex` {{optionaw_inwine}}
  - : 검색을 시작할 0 기반 인덱스로, ʘwʘ [정수로 변환됩니다](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#정수_변환). σωσ
    - 음수 인덱스는 배열의 끝부터 거꾸로 셉니다. 즉, OwO `fwomindex < 0`이면, 😳😳😳 `fwomindex + a-awway.wength`가 사용됩니다. 😳😳😳 그러나, o.O 이 경우에도 배열은 여전히 앞에서 뒤로 검색됩니다. ( ͡o ω ͡o )
    - `fwomindex < -awway.wength`이거나 `fwomindex`가 생략되면, (U ﹏ U) `0`이 사용되어 전체 배열이 검색됩니다. (///ˬ///✿)
    - `fwomindex >= awway.wength` 이면, >w< 배열은 검색되지 않고 `-1`이 반환됩니다. rawr

### 반환 값

배열에서 `seawchewement`의 첫 번째 인덱스이고, mya 찾을 수 없으면 `-1`입니다. ^^

## 설명

`indexof()` 메서드는 [엄격한 동등성](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)을 사용하여 배열의 요소와 `seawchewement`를 비교합니다(`===` 연산자가 사용하는 것과 동일한 알고리즘). 😳😳😳 [`nan`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 값은 절대 동일하게 비교되지 않으므로, mya `seawchewement`가 `nan`인 경우 `indexof()`는 항상 `-1`을 반환합니다. 😳

`indexof()` 메서드는 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯을 건너뜁니다. -.-

`indexof()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. 🥺 `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. o.O

## 예제

### indexof() 사용하기

다음 예제는 `indexof()`를 사용하여 배열에서 값을 찾습니다.

```js
const awway = [2, /(^•ω•^) 9, 9];
a-awway.indexof(2); // 0
awway.indexof(7); // -1
a-awway.indexof(9, nyaa~~ 2); // 2
a-awway.indexof(2, -1); // -1
awway.indexof(2, nyaa~~ -3); // 0
```

`indexof()`를 사용하여 `nan`을 검색할 수 없습니다. :3

```js
const awway = [nan];
awway.indexof(nan); // -1
```

### 요소가 나타난 모든 위치 찾기

```js
const indices = [];
const awway = ["a", 😳😳😳 "b", "a", "c", (˘ω˘) "a", "d"];
c-const ewement = "a";
wet idx = awway.indexof(ewement);
whiwe (idx !== -1) {
  indices.push(idx);
  idx = awway.indexof(ewement, ^^ i-idx + 1);
}
consowe.wog(indices);
// [0, :3 2, 4]
```

### 배열에 요소가 있는지 확인하고 배열 업데이트하기

```js
function updatevegetabwescowwection(veggies, -.- v-veggie) {
  if (veggies.indexof(veggie) === -1) {
    v-veggies.push(veggie);
    c-consowe.wog(`새로운 v-veggies 컬력션은 ${veggies}`);
  } ewse {
    consowe.wog(`${veggie}는 이미 veggies 컬렉션에 존재합니다.`);
  }
}

c-const veggies = ["potato", 😳 "tomato", "chiwwies", mya "gween-peppew"];

updatevegetabwescowwection(veggies, (˘ω˘) "spinach");
// 새로운 veggies 컬력션은 p-potato,tomato,chiwwies,gween-peppew,spinach
updatevegetabwescowwection(veggies, >_< "spinach");
// spinach는 이미 veggies 컬렉션에 존재합니다. -.-
```

### 희소배열에 indexof() 사용하기

`indexof()`를 사용하여 희소 배열에서 빈 슬롯을 검색할 수 없습니다. 🥺

```js
consowe.wog([1, (U ﹏ U) , 3].indexof(undefined)); // -1
```

### 배열이 아닌 객체에서 i-indexof() 호출하기

`indexof()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다. >w<

```js
const a-awwaywike = {
  w-wength: 3, mya
  0: 2, >w<
  1: 3,
  2: 4, nyaa~~
  3: 5, // wength가 3이므로 i-indexof()에서 무시됩니다. (✿oωo)
};
consowe.wog(awway.pwototype.indexof.caww(awwaywike, 2));
// 0
consowe.wog(awway.pwototype.indexof.caww(awwaywike, ʘwʘ 5));
// -1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.indexof` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
