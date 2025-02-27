---
title: Set.prototype.intersection()
slug: Web/JavaScript/Reference/Global_Objects/Set/intersection
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`intersection()`** 메서드는 집합을 받아서 이 집합과 주어진 집합의 공통 요소를 포함하는 새 집합을 반환합니다.

## 구문

```js-nolint
intersection(other)
```

### 매개 변수

- `other`
  - : {{jsxref("Set")}} 객체 혹은 [유사 집합](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체

### 반환 값

이 집합과 `other` 집합에 공통으로 있는 요소를 포함하는 새 {{jsxref("Set")}} 객체입니다.

## 설명

수학적 표기법에서 교집합(intersection)는 다음과 같이 정의됩니다.

<math display="block"><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cap B = \{x\in A\mid x\in B\}</annotation></semantics></math>

벤 다이어그램으로 표현하자면 아래와 같습니다.

![두 개의 원이 겹치는 벤 다이어그램입니다. A와 B의 교차점은 두 원이 겹치는 부분입니다.](diagram.svg)

`intersection()`은 `other` 매개변수로 [유사 집합](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체를 받습니다. 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 실제 {{jsxref("Set")}} 인스턴스가 되기 위해 {{jsxref("Operators/this", "this")}}가 필요합니다. 그런 다음 동작은 `this`와 `other`의 크기에 따라 달라집니다.

- `this`에 `other.size`보다 많은 요소가 있으면 `other`의 `keys()` 메서드를 호출하여 `other`을 순회하고 생성된 모든 요소로 `this`에도 존재하는 새 집합을 구성합니다.
- 그렇지 않으면, `this`의 요소를 순회하고 `other.has(e)`가 `this`에서 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환하게 만드는 모든 요소 `e`를 포함하는 새 집합을 생성합니다.

이 구현으로 인해 `intersection()`의 효율성은 집합을 선형 이하 시간 내에 액세스할 수 있다고 가정할 때 대부분 `this`와 `other` 중 더 작은 집합의 크기에 따라 달라집니다. 반환된 집합의 요소 순서는 `this`과 `other` 중 더 작은 집합의 순서와 동일합니다.

## 예제

### intersection() 사용하기

다음 예는 홀수 집합(<10)과 완전 제곱 집합(<10) 사이의 교집합을 계산하는 예제입니다. 결과는 완전 제곱인 홀수 집합입니다.

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Set.prototype.intersection` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
