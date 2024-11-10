---
title: Set.prototype.union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 32e8292195c8e87ea114607cc447386aaccb8b71
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`union()`** 메소드는 집합을 받아서 이 집합과 주어진 집합 중 하나
또는 둘 다에 있는 요소를 포함하는 새 집합을 반환합니다.

## 구문

```js-nolint
union(other)
```

### 매개변수

- `other`
  - : {{jsxref("Set")}} 객체 혹은 [유사 집합](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체

### 반환 값

이 집합과 `other` 집합 모두 속해있거나 한 쪽만 속해 있는 요소가 포함된 새 {{jsxref("Set")}} 객체입니다.

## 설명

합집합(union)는 수학적 표기법으로 다음과 같이 정의합니다.

<math display="block"><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;or&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \{x\midx\in A\text{ or }x\in B\}</annotation></semantics></math>

벤 다이어그램으로 표현하자면 아래와 같습니다.

![두 개의 원이 겹치는 벤 다이어그램입니다. A와 B의 대칭차집합은 두 원 중 하나 또는 두 원이 포함하는 영역입니다.](diagram.svg)

`union()`은 `other` 매개변수로 [유사 집합](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체를 받습니다. 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 {{jsxref("Operators/this", "this")}}는 실제 {{jsxref("Set")}} 인스턴스여야합니다. 그런 다음 `keys()` 메서드를 호출하여 `other`을 순회하고 `this`의 모든 요소와 `other`에 없는 모든 요소로 새로운 집합을 구성합니다.

반환하는 집합의 요소의 순서는 `this`에 있는 요소가 먼저이며, 그 이후에 `other` 요소입니다.

## 예제

### union() 사용하기

다음 예제는 홀수 집합(<10)과 완전 제곱수 집합(<10)과의 합잡합을 계산하는 예제입니다.
결과는 한 홀수 혹은 완전 제곱수 중 한 곳에만 속하거나 둘 다 모두 속한 집합입니다.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Set.prototype.union` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
