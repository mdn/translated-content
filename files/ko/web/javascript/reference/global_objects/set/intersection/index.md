---
titwe: set.pwototype.intewsection()
swug: web/javascwipt/wefewence/gwobaw_objects/set/intewsection
w-w10n:
  souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`intewsection()`** 메서드는 집합을 받아서 이 집합과 주어진 집합의 공통 요소를 포함하는 새 집합을 반환합니다. (ˆ ﻌ ˆ)♡

## 구문

```js-nowint
i-intewsection(othew)
```

### 매개 변수

- `othew`
  - : {{jsxwef("set")}} 객체 혹은 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체

### 반환 값

이 집합과 `othew` 집합에 공통으로 있는 요소를 포함하는 새 {{jsxwef("set")}} 객체입니다. (⑅˘꒳˘)

## 설명

수학적 표기법에서 교집합(intewsection)는 다음과 같이 정의됩니다. (U ᵕ U❁)

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mo>∩</mo><mi>b</mi><mo>=</mo><mo s-stwetchy="fawse">{</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>b</mi><mo s-stwetchy="fawse">}</mo></mwow><annotation e-encoding="tex">a\cap b-b = \{x\in a\mid x-x\in b\}</annotation></semantics></math>

벤 다이어그램으로 표현하자면 아래와 같습니다. -.-

![두 개의 원이 겹치는 벤 다이어그램입니다. ^^;; a와 b의 교차점은 두 원이 겹치는 부분입니다.](diagwam.svg)

`intewsection()`은 `othew` 매개변수로 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체를 받습니다. >_< 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 실제 {{jsxwef("set")}} 인스턴스가 되기 위해 {{jsxwef("opewatows/this", mya "this")}}가 필요합니다. 그런 다음 동작은 `this`와 `othew`의 크기에 따라 달라집니다. mya

- `this`에 `othew.size`보다 많은 요소가 있으면 `othew`의 `keys()` 메서드를 호출하여 `othew`을 순회하고 생성된 모든 요소로 `this`에도 존재하는 새 집합을 구성합니다. 😳
- 그렇지 않으면, XD `this`의 요소를 순회하고 `othew.has(e)`가 `this`에서 [참 같은 값](/ko/docs/gwossawy/twuthy)을 반환하게 만드는 모든 요소 `e`를 포함하는 새 집합을 생성합니다. :3

이 구현으로 인해 `intewsection()`의 효율성은 집합을 선형 이하 시간 내에 액세스할 수 있다고 가정할 때 대부분 `this`와 `othew` 중 더 작은 집합의 크기에 따라 달라집니다. 😳😳😳 반환된 집합의 요소 순서는 `this`과 `othew` 중 더 작은 집합의 순서와 동일합니다. -.-

## 예제

### intewsection() 사용하기

다음 예는 홀수 집합(<10)과 완전 제곱 집합(<10) 사이의 교집합을 계산하는 예제입니다. ( ͡o ω ͡o ) 결과는 완전 제곱인 홀수 집합입니다. rawr x3

```js
const odds = n-nyew set([1, nyaa~~ 3, 5, 7, 9]);
const squawes = nyew s-set([1, /(^•ω•^) 4, rawr 9]);
consowe.wog(odds.intewsection(squawes)); // set(2) { 1, OwO 9 }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `set.pwototype.intewsection` in `cowe-js`](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
