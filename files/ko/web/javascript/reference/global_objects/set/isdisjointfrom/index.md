---
title: Set.prototype.isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`isDisjointFrom()`** 메소드는 집합을 받아서 집합을 받아 이 집합이 주어진 집합과 공통 요소가 없는지 여부를 나타내는 불리언을 반환합니다.

## 구문

```js-nolint
isDisjointFrom(other)
```

### 매개 변수

- `other`
  - : {{jsxref("Set")}} 객체 혹은 [유사 집합](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체

### 반환 값

만약 `other` 집합과의 공통 요소가 없다면 `true`, 그렇지 않으면 `false`를 반환합니다.

## 설명

두 집합이 공통된 요소가 없다면 두 집합은 서로소 집합입니다. 수학적 표기법은 다음과 같습니다.

<math display="block"><semantics><mrow><mi>A</mi><mtext>&nbsp;is disjoint from&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ is disjoint from }B \Leftrightarrow A\cap B = \empty</annotation></semantics></math>

벤 다이어그램을 사용하자면 다음과 같습니다.

![두 개의 원이 있는 벤 다이어그램입니다. 두 원은 겹치는 영역이 없기 때문에 A와 B는 분리되어 있습니다.](diagram.svg)

`union()`은 `other` 매개변수로 [유사 집합](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체를 받습니다. 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 {{jsxref("Operators/this", "this")}}는 실제 {{jsxref("Set")}} 인스턴스여야합니다. 그 다음의 행동은 `this`와 `other`의 크기에 달려있습니다.

- `this`가 `other.size`보다 요소가 많다면 `other`의 `keys()` 메서드를 호출하여 `other`을 순회하고, `other`의 어떤 요소라도 `this`에 있으면 `false`를 반환합니다(그리고 `return()` 메서드를 호출하여 `keys()` 순회를 닫습니다). 그렇지 않으면 `true`를 반환합니다.
- 그렇지 않으면, `this`의 요소를 순회하고 `this`의 어떤 요소 `e`에 대해 `other.has(e)`가 [참 같은 값](/ko/docs/Glossary/Truthy) 값을 반환하는 경우 `false`를 반환합니다. 그렇지 않으면 `true`를 반환합니다.

이 구현으로 인해 `isDisjointFrom()`의 효율성은 대부분 `this`와 `other` 중 더 작은 집합의 크기에 따라 달라집니다(집합을 선형 이하 시간 내에 접근할 수 있다고 가정할 때).

## 예제

### isDisjointFrom() 사용하기

완전 제곱수의 집합(20 미만)은 소수 집합(20 미만)과 분리되어 있는데, 이는 완전 제곱수은 정의상 두 정수의 곱으로 분해할 수 있는 반면 1은 소수로 간주되지 않기 때문입니다.

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

1이 아닌 모든 완전 제곱수는 정의상 합성수이므로 완전 제곱수의 집합(20 미만)은 합성수의 집합(20 미만)과 분리되지 않습니다.

```js
const composites = new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]);
const squares = new Set([1, 4, 9, 16]);
console.log(composites.isDisjointFrom(squares)); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Set.prototype.isDisjointFrom` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
