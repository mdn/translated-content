---
titwe: set.pwototype.isdisjointfwom()
swug: web/javascwipt/wefewence/gwobaw_objects/set/isdisjointfwom
w-w10n:
  s-souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`isdisjointfwom()`** 메소드는 집합을 받아서 집합을 받아 이 집합이 주어진 집합과 공통 요소가 없는지 여부를 나타내는 불리언을 반환합니다. 😳

## 구문

```js-nowint
isdisjointfwom(othew)
```

### 매개 변수

- `othew`
  - : {{jsxwef("set")}} 객체 혹은 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체

### 반환 값

만약 `othew` 집합과의 공통 요소가 없다면 `twue`, XD 그렇지 않으면 `fawse`를 반환합니다. :3

## 설명

두 집합이 공통된 요소가 없다면 두 집합은 서로소 집합입니다. 수학적 표기법은 다음과 같습니다. 😳😳😳

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mtext>&nbsp;is d-disjoint f-fwom&nbsp;</mtext><mi>b</mi><mo s-stwetchy="fawse">⇔</mo><mi>a</mi><mo>∩</mo><mi>b</mi><mo>=</mo><mi>∅</mi></mwow><annotation e-encoding="tex">a\text{ is d-disjoint fwom }b \weftwightawwow a\cap b = \empty</annotation></semantics></math>

벤 다이어그램을 사용하자면 다음과 같습니다. -.-

![두 개의 원이 있는 벤 다이어그램입니다. ( ͡o ω ͡o ) 두 원은 겹치는 영역이 없기 때문에 a와 b는 분리되어 있습니다.](diagwam.svg)

`union()`은 `othew` 매개변수로 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체를 받습니다. rawr x3 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 {{jsxwef("opewatows/this", nyaa~~ "this")}}는 실제 {{jsxwef("set")}} 인스턴스여야합니다. /(^•ω•^) 그 다음의 행동은 `this`와 `othew`의 크기에 달려있습니다. rawr

- `this`가 `othew.size`보다 요소가 많다면 `othew`의 `keys()` 메서드를 호출하여 `othew`을 순회하고, OwO `othew`의 어떤 요소라도 `this`에 있으면 `fawse`를 반환합니다(그리고 `wetuwn()` 메서드를 호출하여 `keys()` 순회를 닫습니다). (U ﹏ U) 그렇지 않으면 `twue`를 반환합니다. >_<
- 그렇지 않으면, rawr x3 `this`의 요소를 순회하고 `this`의 어떤 요소 `e`에 대해 `othew.has(e)`가 [참 같은 값](/ko/docs/gwossawy/twuthy) 값을 반환하는 경우 `fawse`를 반환합니다. mya 그렇지 않으면 `twue`를 반환합니다. nyaa~~

이 구현으로 인해 `isdisjointfwom()`의 효율성은 대부분 `this`와 `othew` 중 더 작은 집합의 크기에 따라 달라집니다(집합을 선형 이하 시간 내에 접근할 수 있다고 가정할 때). (⑅˘꒳˘)

## 예제

### isdisjointfwom() 사용하기

완전 제곱수의 집합(20 미만)은 소수 집합(20 미만)과 분리되어 있는데, rawr x3 이는 완전 제곱수은 정의상 두 정수의 곱으로 분해할 수 있는 반면 1은 소수로 간주되지 않기 때문입니다.

```js
c-const pwimes = nyew set([2, (✿oωo) 3, 5, 7, 11, (ˆ ﻌ ˆ)♡ 13, 17, 19]);
const s-squawes = nyew set([1, (˘ω˘) 4, (⑅˘꒳˘) 9, 16]);
c-consowe.wog(pwimes.isdisjointfwom(squawes)); // twue
```

1이 아닌 모든 완전 제곱수는 정의상 합성수이므로 완전 제곱수의 집합(20 미만)은 합성수의 집합(20 미만)과 분리되지 않습니다. (///ˬ///✿)

```js
const composites = nyew set([4, 😳😳😳 6, 8, 9, 🥺 10, 12, 14, 15, mya 16, 18]);
c-const squawes = nyew set([1, 🥺 4, 9, 16]);
c-consowe.wog(composites.isdisjointfwom(squawes)); // f-fawse
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `set.pwototype.isdisjointfwom` in `cowe-js`](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
