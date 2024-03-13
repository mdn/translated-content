---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

{{JSRef}}

**`set()`** 메서드는 지정된 키와 값을 가진 새 요소를 `WeakMap` 객체에 추가합니다.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## 구문

```js
set(key, value);
```

### 매개변수

- `key`
  - : 필수로 요구되며, 반드시 `object`여야 합니다. `WeakMap` 객체에 추가할 요소의 키입니다.
- `value`
  - : 필수로 요구되며, 임의의 값입니다. `WeakMap` 객체에 추가할 요소의 값입니다.

### 반환 값

`WeakMap` 객체입니다.

## 예제

### set() 메서드 사용하기

```js
const wm = new WeakMap();
const obj = {};

// WeakMap에 새 요소를 추가합니다
wm.set(obj, "foo").set(window, "bar"); // 체인가능

// WeakMap 요소 업데이트
wm.set(obj, "baz");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
