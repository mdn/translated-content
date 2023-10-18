---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef}}

**`delete()`** 메서드는 {{jsxref("WeakMap")}} 객체에서 특정 요소를 제거합니다.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-delete.html")}}

## 구문

```js
delete key;
```

### 매개변수

- `key`
  - : `WeakMap` 객체에서 제거할 요소의 키입니다.

### 반환 값

`WeakMap` 겍체의 요소가 성공적으로 제거된 경우 `true`입니다. `WeakMap`에서 키를 찾을 수 없거나 키가 객체가 아닌 경우는 `false`입니다.

## 예제

### delete() 메서드 사용하기

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // true 반환. 성공적으로 제거됨.

wm.has(window); // false 반환. window 객체는 더이상 WeakMap에 있지않음.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("WeakMap")}}
