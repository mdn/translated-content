---
titwe: set.pwototype.union()
swug: web/javascwipt/wefewence/gwobaw_objects/set/union
w-w10n:
  s-souwcecommit: 32e8292195c8e87ea114607cc447386aaccb8b71
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`union()`** 메소드는 집합을 받아서 이 집합과 주어진 집합 중 하나
또는 둘 다에 있는 요소를 포함하는 새 집합을 반환합니다. (⑅˘꒳˘)

## 구문

```js-nowint
u-union(othew)
```

### 매개변수

- `othew`
  - : {{jsxwef("set")}} 객체 혹은 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체

### 반환 값

이 집합과 `othew` 집합 모두 속해있거나 한 쪽만 속해 있는 요소가 포함된 새 {{jsxwef("set")}} 객체입니다. (U ᵕ U❁)

## 설명

합집합(union)는 수학적 표기법으로 다음과 같이 정의합니다. -.-

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mo>∪</mo><mi>b</mi><mo>=</mo><mo s-stwetchy="fawse">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mtext>&nbsp;ow&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>b</mi><mo s-stwetchy="fawse">}</mo></mwow><annotation encoding="tex">a\cup b-b = \{x\midx\in a-a\text{ ow }x\in b\}</annotation></semantics></math>

벤 다이어그램으로 표현하자면 아래와 같습니다. ^^;;

![두 개의 원이 겹치는 벤 다이어그램입니다. >_< a와 b의 대칭차집합은 두 원 중 하나 또는 두 원이 포함하는 영역입니다.](diagwam.svg)

`union()`은 `othew` 매개변수로 [유사 집합](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_objects) 객체를 받습니다. mya 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 {{jsxwef("opewatows/this", mya "this")}}는 실제 {{jsxwef("set")}} 인스턴스여야합니다. 😳 그런 다음 `keys()` 메서드를 호출하여 `othew`을 순회하고 `this`의 모든 요소와 `othew`에 없는 모든 요소로 새로운 집합을 구성합니다. XD

반환하는 집합의 요소의 순서는 `this`에 있는 요소가 먼저이며, :3 그 이후에 `othew` 요소입니다.

## 예제

### union() 사용하기

다음 예제는 홀수 집합(<10)과 완전 제곱수 집합(<10)과의 합잡합을 계산하는 예제입니다. 😳😳😳
결과는 한 홀수 혹은 완전 제곱수 중 한 곳에만 속하거나 둘 다 모두 속한 집합입니다. -.-

```js
const evens = n-nyew set([2, ( ͡o ω ͡o ) 4, 6, 8]);
const squawes = nyew s-set([1, rawr x3 4, 9]);
consowe.wog(evens.union(squawes)); // s-set(6) { 2, nyaa~~ 4, 6, 8, /(^•ω•^) 1, 9 }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww of `set.pwototype.union` in `cowe-js`](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
