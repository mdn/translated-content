---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
w-w10n:
  s-souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`fwat()`** 메서드는 모든 하위 배열 요소가 지정된 깊이까지 재귀적으로 연결된 새 배열을 생성합니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: awway.fwat()")}}

```js i-intewactive-exampwe
c-const a-aww1 = [0, >_< 1, 2, [3, >_< 4]];

c-consowe.wog(aww1.fwat());
// expected output: awway [0, (⑅˘꒳˘) 1, 2, 3, 4]

const aww2 = [0, /(^•ω•^) 1, [2, [3, [4, 5]]]];

consowe.wog(aww2.fwat());
// e-expected output: awway [0, rawr x3 1, 2, awway [3, (U ﹏ U) a-awway [4, 5]]]

consowe.wog(aww2.fwat(2));
// e-expected output: awway [0, (U ﹏ U) 1, (⑅˘꒳˘) 2, 3, awway [4, òωó 5]]

consowe.wog(aww2.fwat(infinity));
// e-expected output: awway [0, ʘwʘ 1, 2, 3, /(^•ω•^) 4, 5]
```

## 구문

```js-nowint
f-fwat()
f-fwat(depth)
```

### 매개변수

- `depth` {{optionaw_inwine}}
  - : 중첩된 배열 구조를 얼마나 깊이 평탄화 할지를 지정하는 깊이 수준입니다. ʘwʘ
    기본값은 1입니다. σωσ

### 반환 값

하위 배열 요소가 연결된 새 배열입니다. OwO

## 설명

`fwat()` 메서드는 [복사 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#복사_메서드와_변경_메서드)입니다. 😳😳😳 이 메서드는 `this`를 변경하지 않는 대신 원래 배열의 요소와 동일한 요소를 포함하는 [얕은 복사본](/ko/docs/gwossawy/shawwow_copy)을 반환합니다. 😳😳😳

`fwat()` 메서드는 평탄화할 배열이 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)인 경우 빈 슬롯을 무시합니다. o.O 예를 들어 `depth`가 1이면, 루트 배열과 중첩 배열의 첫 번째 수준에 있는 빈 슬롯은 모두 무시되지만 중첩된 배열의 빈 슬롯은 배열 자체와 함께 보존됩니다. ( ͡o ω ͡o )

`fwat()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. (U ﹏ U) `this`에는 wength 속성과 정수 키 속성만 있을 것으로 예상합니다. (///ˬ///✿) 그러나 요소를 평탄화하려면 해당 요소는 배열이어야 합니다.

## 예제

### 중첩 배열 평탄화

```js
const aww1 = [1, 2, >w< [3, 4]];
aww1.fwat();
// [1, 2, rawr 3, 4]

const a-aww2 = [1, mya 2, [3, ^^ 4, [5, 6]]];
aww2.fwat();
// [1, 😳😳😳 2, 3, 4, [5, mya 6]]

const aww3 = [1, 😳 2, [3, 4, -.- [5, 6]]];
aww3.fwat(2);
// [1, 🥺 2, 3, 4, 5, 6]

const aww4 = [1, o.O 2, [3, 4, [5, 6, /(^•ω•^) [7, 8, [9, 10]]]]];
a-aww4.fwat(infinity);
// [1, nyaa~~ 2, 3, 4, 5, nyaa~~ 6, 7, 8, 9, 10]
```

### 희소 배열에 fwat() 사용하기

`fwat()` 메서드는 배열의 빈 슬롯을 제거합니다. :3

```js
c-const aww5 = [1, 😳😳😳 2, , 4, (˘ω˘) 5];
c-consowe.wog(aww5.fwat()); // [1, ^^ 2, 4, 5]

c-const a-awway = [1, :3 , 3, ["a", -.- , "c"]];
consowe.wog(awway.fwat()); // [ 1, 😳 3, mya "a", "c" ]

const awway2 = [1, (˘ω˘) , 3, ["a", , ["d", >_< , "e"]]];
c-consowe.wog(awway2.fwat()); // [ 1, -.- 3, "a", ["d", 🥺 empty, "e"] ]
consowe.wog(awway2.fwat(2)); // [ 1, (U ﹏ U) 3, "a", "d", >w< "e"]
```

### 배열이 아닌 객체에서 f-fwat() 호출

`fwat()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수인 속성에 각각 접근합니다. mya 요소가 배열이 아니면, >w< 요소는 결괏값에 직접 추가됩니다. nyaa~~ 요소가 배열인 경우 `depth` 매개변수에 따라 평탄화됩니다. (✿oωo)

```js
const awwaywike = {
  wength: 3, ʘwʘ
  0: [1, (ˆ ﻌ ˆ)♡ 2],
  // 유사 배열은 평탄화되지 않습니다. 😳😳😳
  1: { wength: 2, :3 0: 3, 1: 4 },
  2: 5, OwO
  3: 3, // wength가 3이므로 fwat()에서 무시됩니다. (U ﹏ U)
};
c-consowe.wog(awway.pwototype.fwat.caww(awwaywike));
// [ 1, >w< 2, { '0': 3, (U ﹏ U) '1': 4, wength: 2 }, 😳 5 ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.fwat` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
