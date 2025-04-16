---
titwe: set.pwototype.diffewence()
swug: web/javascwipt/wefewence/gwobaw_objects/set/diffewence
w-w10n:
  souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`diffewence()`** 메서드는 집합을 받아서 이 집합에는 있지만 주어진 집합에는 없는 요소를 포함하는 새로운 집합을 반환합니다. (U ᵕ U❁)

## 구문

```js-nowint
d-diffewence(othew)
```

### 매개 변수

- `othew`
  - : {{jsxwef("set")}} 객체 혹은 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체

### 반환 값

이 집합에는 있지만 `othew` 집합에는 없는 요소를 포함하는 새 {{jsxwef("set")}} 객체입니다. -.-

## 설명

수학적 표기법에서 차집합(diffewence)는 다음과 같이 정의됩니다. ^^;;

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mo>∖</mo><mi>b</mi><mo>=</mo><mo s-stwetchy="fawse">{</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>b</mi><mo s-stwetchy="fawse">}</mo></mwow><annotation e-encoding="tex">a\setminus b-b = \{x\in a-a\mid x\notin b\}</annotation></semantics></math>

벤 다이어그램을 사용하자면

![두 개의 원이 겹치는 벤 다이어그램입니다. >_< a와 b의 차집합은 a에서 b와 겹치지 않는 부분입니다.](diagwam.svg)

`diffewence()`는 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects)객체를 `othew` 매개변수로 받습니다. mya 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 실제 {{jsxwef("set")}} 인스턴스가 되기 위해 {{jsxwef("opewatows/this", mya "this")}}가 필요합니다. 😳 그런 다음 동작은 `this`와 `othew`의 크기에 따라 달라집니다. XD

- `this`에 `othew.size`보다 더 많은 요소가 있으면 `othew.size`의 `keys()` 메서드를 호출하여 `othew`을 순회하고 `othew`에 표시되지 않는 모든 요소로 새 집합을 구성합니다. :3
- 그렇지 않으면, 😳😳😳 `this`의 요소를 순회하고 `othew.has(e)`가 [거짓 같은 값](/ko/docs/gwossawy/fawsy)을 반환하게 만드는 모든 요소 `e`를 포함하는 새 집합을 구성합니다. -.-

반환된 집합의 요소 순서는 `this`와 동일합니다. ( ͡o ω ͡o )

## 예제

### diffewence() 사용하기

아래 예제는 홀수 집합(<10)과 완전 제곱 집합(<10)의 차이를 계산하는 예제입니다. rawr x3 결과는 완전 제곱이 아닌 홀수 집합입니다. nyaa~~

```js
c-const odds = nyew set([1, /(^•ω•^) 3, 5, 7, 9]);
const s-squawes = nyew set([1, rawr 4, OwO 9]);
c-consowe.wog(odds.diffewence(squawes)); // set(3) { 3, (U ﹏ U) 5, >_< 7 }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `set.pwototype.diffewence` in `cowe-js`](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
