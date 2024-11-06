---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
---

{{JSRef}}

**`has()`** 메서드는 지정된 키를 가진 요소가 `WeakMap` 객체에 존재하는지를 나타내는 불리언 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-has.html")}}

## 구문

```js
has(key);
```

### 매개변수

- `key`
  - : 필수로 요구되며, `WeakMap` 객체에서 존재 여부를 테스트할 요소의 키입니다.

### 반환 값

- 불리언
  - : `WeakMap` 객체에 지정된 키를 가진 요소가 있으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

## 예제

### has 메서드 사용하기

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // true 반환
wm.has("baz"); // false 반환
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
