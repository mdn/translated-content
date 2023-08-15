---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
---

{{JSRef}}

**`get()`** 메서드는 `WeakMap` 객체에서 특정 요소를 반환합니다.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

## 구문

```js
get(key);
```

### 매개변수

- `key`
  - : 필수로 요구되며,`WeakMap` 객체에서 반환할 요소의 키입니다.

### 반환 값

`WeakMap` 객체의 특정 키와 연결된 요소입니다. 키를 찾을 수 없으면 {{jsxref("undefined")}}가 반환됩니다.

## 예제

### get() 메서드 사용하기

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // "foo" 반환.
wm.get("baz"); // undefined 반환.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
