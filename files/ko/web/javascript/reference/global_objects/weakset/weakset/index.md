---
title: WeakSet() 생성자
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
l10n:
  sourceCommit: d6f92678c704b5bf4807e69bb7a234446dd33575
---

{{JSRef}}

**`WeakSet()`** 생성자는 {{jsxref("WeakSet")}} 객체를 생성합니다.

## 구문

```js-nolint
new WeakSet()
new WeakSet(iterable)
```

> [!NOTE]
> `WeakSet()`은 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}}가 발생합니다.

### 매개변수

- `iterable` {{optional_inline}}
  - : 만약 [순회 가능한 객체](/ko/docs/Web/JavaScript/Reference/Statements/for...of)가 매개변수로 주어진다면, 모든 해당 객체가 새로운 `WeakSet`에 추가됩니다. `null`은 `undefined`로 취급합니다.

## 예제

### WeakSet 객체 사용하기

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // foo 를 set에서 제거
ws.has(foo); // false, foo는 이미 삭제되었습니다
ws.has(bar); // true, bar는 유지 중입니다
```

명심하실 점은 `foo !== bar`라는 점입니다. 둘은 서로 비슷한 객체지만 **같은 객체가 아닙니다**. 그래서 두 객체 모두 set에 추가 가능합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("WeakSet")}}
