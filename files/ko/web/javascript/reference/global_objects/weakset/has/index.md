---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

{{jsxref("WeakSet")}}인스턴스의 **`has()`** 메서드는 어떤 객체가 이 `WeakSet`에 있는지 여부를 가리키는 부울을 반환합니다.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.has()")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};
const object2 = {};

weakset1.add(object1);

console.log(weakset1.has(object1));
// Expected output: true

console.log(weakset1.has(object2));
// Expected output: false
```

## 구문

```js-nolint
has(value)
```

### 매개변수

- `value`
  - : 이 `WeakSet`에서 존재를 시험할 값

### 반환 값

이 `WeakSet`에서 특정 값의 요소가 존재한다면 `true`를 반환하며, 그렇지 않을 경우에는 `false`를 반환합니다.
`value`가 객체가 아니거나 혹은 [등록되지 않은 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#전역_심볼_레지스트리의_공유_심볼)일 경우 언제나 `false`를 반환합니다.

## 예제

### `has()` 메서드 사용하기

```js
const ws = new WeakSet();
const obj = {};
ws.add(window);

ws.has(window); // true 반환
ws.has(obj); // false 반환

// 등록되지 않은 symbol 저장
const sym = Symbol("foo");
ws.add(sym);
ws.add(Symbol.iterator);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
