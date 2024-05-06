---
title: Set.prototype.symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
l10n:
  sourceCommit: b62406e1ac7ad23f8693131e9819f0e12d295194
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`symmetricDifference()`** 메서드는 하나의 Set을 받아서 이 Set과 주어진 Set 중 하나에는 있지만 둘 다에 없는 요소를 포함하는 새 Set을 반환합니다.

## 구문

```js-nolint
symmetricDifference(other)
```

### 매개변수

- `other`
  - : {{jsxref("Set")}} 객체 혹은 [유사 Set](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체입니다.

### 반환 값

이 Set과 주어진 Set 중 하나에는 있지만 둘 다에 없는 요소를 포함하는 {{jsxref("Set")}} 객체.

## 설명

수학적 표기법으로는 대칭차(symmetric difference)는 아래와 같이 표현할 수 있습니다.

<math display="block"><semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics></math>

벤 다이어그램을 사용하면 다음과 같습니다.

![겹쳐진 2개의 원이 있는 벤 다이어그램입니다. A와 B의 대칭차는 둘 다에는 포함하지 않고 두 원중 어느 한 원에만 포함되는 영역입니다.](diagram.svg)

`symmetricDifference()`는 `other` 매개변수로 [유사 Set](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) 객체를 허용합니다. 어떠한 사용자 코드 호출없이 `this`에 저장된 데이터를 직접 검색하기 때문에 {{jsxref("Operators/this", "this")}}는 실제 {{jsxref("Set")}} 인스턴스여야 합니다. 그 다음 `keys()` 메서드를 호출하여 `other`를 순회하고 `other`에서 보이지 않는 `this`의 모든 요소와 `this`에서 보이지 않는 `other`의 모든 요소로 새 집합을 구성합니다.

반환된 집합의 요소 순서는 먼저 `this`에 있는 요소, 그 다음에 `other`에 있는 요소입니다.

## 예제

### symmetricDifference() 사용하기

다음 예는 짝수 집합(<10)과 완전 제곱 집합(<10) 사이의 대칭차집합를 계산하는 예입니다. 결과는 짝수 또는 완전 제곱 중 하나이지만 둘 다 아닌 숫자 집합입니다.

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Set.prototype.symmetricDifference` in `core-js`](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
