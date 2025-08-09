---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

{{jsxref("WeakSet")}} 인스턴스의 **`add()`** 메서드는 이 `WeakSet`의 끝에 새로운 객체를 추가합니다.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.add()", "taller")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);
console.log(weakset1.has(object1));
// Expected output: true

try {
  weakset1.add(1);
} catch (error) {
  console.log(error);
  // Expected output (Chrome): TypeError: Invalid value used in weak set
  // Expected output (Firefox): TypeError: WeakSet value must be an object, got 1
  // Expected output (Safari): TypeError: Attempted to add a non-object key to a WeakSet
}
```

## 구문

```js-nolint
add(value)
```

### 매개변수

- `value`
  - : 반드시 객체이거나 [등록되지 않은 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#전역_심볼_레지스트리의_공유_심볼)이어야 합니다. `WeakSet` 컬렉션에 추가될 값입니다.

### 반환 값

`WeakSet` 객체.

### 예외

- {{jsxref("TypeError")}}
  - : `value`가 객체가 아니거나 [등록되지 않은 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#전역_심볼_레지스트리의_공유_심볼)일 경우 발생합니다.

## 예제

### add 사용하기

```js
const ws = new WeakSet();

ws.add(window); // window 객체를 WeakSet에 추가

ws.has(window); // true

// WeakSet는 인수로 오직 객체만 받습니다
ws.add(1);
// Chrome 에서는 "TypeError: Invalid value used in weak set"라는 결과가,
// Firefox 에서는 "TypeError: 1 is not a non-null object" 라는 결과가 나옵니다
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
