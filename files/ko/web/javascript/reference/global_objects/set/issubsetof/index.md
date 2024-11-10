---
title: Set.prototype.isSubsetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`isSubsetOf()`** 메서드는 하나의 집합을 받아서 이 집합의 모든 요소가 주어진 집합에 있는지 여부를 나타내는 불리언을 반환합니다.

## 구문

```js-nolint
isSubsetOf(other)
```

### 매개변수

- `other`
  - : {{jsxref("Set")}} 객체 혹은 [유사 Set](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체입니다.

### 반환 값

이 Set에 모든 요소가 `other` Set에 있다면 `true`를 반환하며, 그렇지 않으면 `false`를 반환합니다.

## 설명

수학적 표기법으로 부분집합(subset)은 아래와 같이 표현할 수 있습니다.

<math display="block"><semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B \Leftrightarrow \forall x\in A,\,x\in B</annotation></semantics></math>

벤 다이어그램을 사용하자면 아래와 같습니다.

![두 개의 원이 있는 벤 다이어그램입니다. A는 B에 완전히 포함되므로 A는 B의 부분 집합입니다.](diagram.svg)

> [!NOTE]
> 부분집합 관계는 적절한 부분집합이 아니므로 `isSubsetOf()`는 `this`과 `other`에 동일한 요소가 포함되어 있으면 `true`를 반환합니다.

`isSubsetOf()`는 [유사 Set](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체를 `other` 매개변수로 받습니다. 사용자 코드를 호출하지 않고 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 실제 {{jsxref("Operators/this", "this")}} 인스턴스여야 합니다. 그러면 그 동작은 `this`와 `other`의 크기에 따라 달라집니다.

- `this`에 `other.size`보다 많은 요소가 있으면 `false`를 바로 반환합니다.
- 그렇지 않으면 `this`의 요소를 순회하고 `this`의 요소 `e`로 인해 `other.has(e)`가 [거짓같은 값](/ko/docs/Glossary/Falsy) 값을 반환하는 경우 `false`를 반환합니다. 그렇지 않으면 `true`를 반환합니다.

## 예제

### isSubsetOf() 사용하기

4의 배수(<20)의 Set은 짝수 Set(<20)의 부분집합입니다.

```js
const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
console.log(fours.isSubsetOf(evens)); // true
```

소수(<20)의 Set은 홀수(<20) Set의 부분집합이 아닙니다. 2는 소수지만 홀수가 아니기 때문입니다.

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(primes.isSubsetOf(odds)); // false
```

완전 동일한 Set은 서로에게 부분집합입니다.

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSubsetOf(set2)); // true
console.log(set2.isSubsetOf(set1)); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Set.prototype.isSubsetOf` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
