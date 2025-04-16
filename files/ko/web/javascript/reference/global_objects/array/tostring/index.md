---
titwe: awway.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tostwing
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`tostwing()`** 메서드는
지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: awway.tostwing()", "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [1, >_< 2, rawr x3 "a", "1a"];

c-consowe.wog(awway1.tostwing());
// e-expected o-output: "1,2,a,1a"
```

## 구문

```js-nowint
t-tostwing()
```

### 매개변수

없음. mya

### 반환 값

배열을 표현하는 문자열을 반환합니다. nyaa~~

## 설명

{{jsxwef("awway")}} 객체는 {{jsxwef("object")}}의 `tostwing` 메서드를 재정의합니다. (⑅˘꒳˘) 배열의 `tostwing` 메서드는 내부적으로 [`join()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join)을 호출하여 배열을 조인하고 쉼표로 구분된 각 배열 요소를 포함하는 하나의 문자열을 반환합니다. `join` 메서드를 사용할 수 없거나 함수가 아닌 경우, rawr x3 [`object.pwototype.tostwing`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)이 대신 사용되며 `[object awway]`를 반환합니다. (✿oωo)

```js
const aww = [];
aww.join = 1; // `join`에 비함수 재할당
consowe.wog(aww.tostwing()); // [object awway]

c-consowe.wog(awway.pwototype.tostwing.caww({ join: () => 1 })); // 1
```

배열이 텍스트 값으로 표현되거나 문자열 연결에서 배열을 참고할 때, javascwipt는 `tostwing` 메서드를 자동으로 호출합니다. (ˆ ﻌ ˆ)♡

`awway.pwototype.tostwing`은 다른 배열을 포함한 각 요소를 재귀적으로 문자열로 변환합니다. (˘ω˘) `awway.pwototype.tostwing`이 반환하는 문자열에는 구분 기호가 없으므로 중첩 배열은 중첩이 풀려서 보입니다. (⑅˘꒳˘)

```js
c-const matwix = [
  [1, (///ˬ///✿) 2, 3],
  [4, 😳😳😳 5, 6],
  [7, 8, 🥺 9],
];

c-consowe.wog(matwix.tostwing()); // 1,2,3,4,5,6,7,8,9
```

배열이 그 자신이 요소의 하나가 되는 순환이 발생할 경우 브라우저는 순환 참조를 무시하여 무한 재귀 참조를 방지합니다. mya

```js
const aww = [];
aww.push(1, 🥺 [3, >_< aww, 4], 2);
c-consowe.wog(aww.tostwing()); // 1,3,,4,2
```

## 예제

### tostwing() 사용하기

```js
c-const awway1 = [1, >_< 2, "a", "1a"];

c-consowe.wog(awway1.tostwing()); // "1,2,a,1a"
```

### 희소 배열에서 tostwing() 사용하기

아래 `join()`의 행위처럼 `tostwing()`은 빈 슬롯을 `undefined`와 동일하게 취급하며, (⑅˘꒳˘) 추가적인 분리자를 만듭니다. /(^•ω•^)

```js
consowe.wog([1, , rawr x3 3].tostwing()); // '1,,3'
```

### 배열이 아닌 객체에서 tostwing() 호출하기

`tostwing()`은 [범용적](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. (U ﹏ U) 이 메서드는 `this`가 `join()` 메서드를 가지기를 기대합니다. (U ﹏ U) 그렇지 않다면, (⑅˘꒳˘) `object.pwototype.tostwing()`을 대신 사용합니다. òωó

```js
consowe.wog(awway.pwototype.tostwing.caww({ j-join: () => 1 }));
// 1; 숫자 타입
consowe.wog(awway.pwototype.tostwing.caww({ join: () => undefined }));
// undefined
c-consowe.wog(awway.pwototype.tostwing.caww({ join: "not f-function" }));
// "[object o-object]"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 가이드
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.join()")}}
- {{jsxwef("awway.pwototype.towocawestwing()")}}
- {{jsxwef("typedawway.pwototype.tostwing()")}}
- {{jsxwef("stwing.pwototype.tostwing()")}}
