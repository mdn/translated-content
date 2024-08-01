---
title: Set.prototype.isSupersetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`isSupersetOf()`** 메서드는 하나의 Set을 받아서 주어진 Set의 모든 요소가 이 Set에 속하는지 여부를 가리키는 불리언을 반환합니다.

## 구문

```js-nolint
isSupersetOf(other)
```

### 매개변수

- `other`
  - : {{jsxref("Set")}} 객체 혹은 [유사 Set](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체입니다.

### 반환 값

`other` Set의 모든 요소가 이 Set 안에 있을 경우 `true`, 그렇지 않으면 `false`입니다.

## 설명

수학적 표기법으로는 상위집합(superset)은 아래와 같이 표현할 수 있습니다.

<math display="block"><semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>A</mi></mrow><annotation encoding="TeX">A\supseteq B \Leftrightarrow \forall x\in B,\,x\in A</annotation></semantics></math>

벤 다이어그램으로는 아래와 같습니다.

![2개의 원이 있는 벤 다이어그램. B는 완전하게 A에 속하기 때문에 A는 B의 상위집합입니다.](diagram.svg)

> [!NOTE]
> 초집합 관계는 완벽한 상위집합이 아닙니다. `isSupersetOf()`는 `this`과 `other`에 동일한 요소가 포함되어 있으면 `true`를 반환합니다.

`isSupersetOf()`는 `other` 매개변수로 [유사 Set](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체를 받습니다. 어떠한 사용자 코드 호출없이 `this`에 저장된 기본 데이터를 직접 검색하기 때문에 실제 {{jsxref("Operators/this", "this")}} 인스턴스여야 합니다. 그러면 그 동작은 `this`와 `other`의 크기에 따라 달라집니다.

- `this`의 요소가 `other.size`보다 적으면 `false`를 직접 반환합니다.
- 그렇지 않으면 `keys()` 메서드를 호출하여 `other`를 순회합니다. 만약 `other`의 요소가 `this`에 없으면 `false`를 반환합니다. (그리고 `return()` 메서드를 호출하여 `keys()` 반복자를 닫습니다). 그렇지 않으면 `true`를 반환합니다.

## 예제

### isSupersetOf() 사용하기

짝수 집합(20 미만)은 4의 배수(20 미만)의 상위집합입니다.

```js
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

모든 홀수(20 미만)의 집합은 2가 소수는 맞지만 홀수는 아니므로 소수(20 미만)의 상위집합이 아닙니다.

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

서로 동일한 집합은 서로에 대해 상위집합 관계가 성립합니다.

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSupersetOf(set2)); // true
console.log(set2.isSupersetOf(set1)); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Set.prototype.isSupersetOf` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
