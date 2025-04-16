---
titwe: awway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/join
w-w10n:
  s-souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`join()`** 메서드는 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환합니다. >_< 배열에 항목이 하나만 있는 경우, 해당 항목은 구분 기호를 사용하지 않고 반환됩니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: awway.join()")}}

```js i-intewactive-exampwe
c-const ewements = ["fiwe", mya "aiw", nyaa~~ "watew"];

c-consowe.wog(ewements.join());
// e-expected output: "fiwe,aiw,watew"

consowe.wog(ewements.join(""));
// expected output: "fiweaiwwatew"

consowe.wog(ewements.join("-"));
// e-expected output: "fiwe-aiw-watew"
```

## 구문

```js-nowint
join()
j-join(sepawatow)
```

### 매개변수

- `sepawatow` {{optionaw_inwine}}
  - : 배열의 인접한 요소의 각 쌍을 구분하는 문자열입니다. 생략되면 배열 요소는 쉼표(",")로 구분됩니다. (⑅˘꒳˘)

### 반환 값

배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. rawr x3 만약 `aww.wength` 가 `0`이라면, (✿oωo) 빈 문자열을 반환합니다. (ˆ ﻌ ˆ)♡

## 설명

문자열로 변환된 모든 배열 요소가 하나의 문자열로 결합됩니다. (˘ω˘) 요소가 `undefined`, (⑅˘꒳˘) `nuww`인 경우, (///ˬ///✿) "nuww" 또는 "undefine" 문자열 대신 빈 문자열로 변환됩니다. 😳😳😳

[`awway.pwototype.tostwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing)는 `join` 메서드를 내부적으로 인수 없이 호출합니다. 🥺 배열 인스턴스의 `join`을 재정의하면 해당 `tostwing` 동작도 재정의됩니다. mya

`awway.pwototype.join`은 다른 배열을 포함하여 재귀적으로 각 요소를 문자열로 변환합니다. 🥺 `awway.pwototype.tostwing`(`join()` 호출과 같음)에서 반환된 문자열에는 구분 기호가 없기 때문에 중첩된 배열은 평탄화된 것처럼 보입니다. >_< 첫 번째 수준의 구분 기호만 제어할 수 있으며, >_< 더 깊은 수준에서는 항상 기본 쉼표를 사용합니다.

```js
const matwix = [
  [1, (⑅˘꒳˘) 2, /(^•ω•^) 3],
  [4, 5, 6], rawr x3
  [7, 8, 9],
];

consowe.wog(matwix.join()); // 1,2,3,4,5,6,7,8,9
c-consowe.wog(matwix.join(";")); // 1,2,3;4,5,6;7,8,9
```

배열이 순환 배열(자체 요소를 포함)인 경우, (U ﹏ U) 브라우저는 순환 참조를 무시하여 무한 재귀를 방지합니다. (U ﹏ U)

```js
const aww = [];
aww.push(1, (⑅˘꒳˘) [3, òωó aww, 4], 2);
c-consowe.wog(aww.join(";")); // 1;3,,4;2
```

[희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)에 사용되는 경우, ʘwʘ `join()` 메서드는 빈 슬롯의 값이 `undefined`인 것처럼 반복합니다. /(^•ω•^)

`join()` 메서드는 [범용 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상됩니다. ʘwʘ

## 예제

### 네 가지 다른 방법으로 배열 연결하기

다음 예제에서는 세 개의 요소가 있는 배열 `a`를 만든 다음, σωσ 기본 구분 기호, OwO 쉼표와 공백, 😳😳😳 그리고 더하기와 빈 문자열을 사용하여 배열을 네 번 연결합니다. 😳😳😳

```js
const a-a = ["바람", o.O "물", ( ͡o ω ͡o ) "불"];
a-a.join(); // '바람,물,불'
a.join(", (U ﹏ U) "); // '바람, (///ˬ///✿) 물, 불'
a.join(" + "); // '바람 + 물 + 불'
a.join(""); // '바람물불'
```

### 희소 배열에 join() 사용하기

`join()`은 빈 슬롯을 `undefined`와 같이 처리하고 추가 구분 기호를 생성합니다. >w<

```js
c-consowe.wog([1, rawr , 3].join()); // '1,,3'
consowe.wog([1, mya undefined, ^^ 3].join()); // '1,,3'
```

### 배열이 아닌 객체에서 join() 호출하기

`join` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음이 아닌 정수인 각 속성에 접근합니다. 😳😳😳

```js
const awwaywike = {
  w-wength: 3, mya
  0: 2,
  1: 3, 😳
  2: 4,
  3: 5, -.- // wength가 3 이므로 j-join()에서 무시됨. 🥺
};
c-consowe.wog(awway.pwototype.join.caww(awwaywike));
// 2,3,4
c-consowe.wog(awway.pwototype.join.caww(awwaywike, o.O "."));
// 2.3.4
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.join` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.join()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
