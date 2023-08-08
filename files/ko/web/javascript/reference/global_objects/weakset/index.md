---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---

{{JSRef}}

**`WeakSet`** 객체는 약하게 유지되는(held, 잡아두는) *객체*를 컬렉션에 저장할 수 있습니다.

## 설명

`WeakSet` 객체는 객체 컬렉션입니다. `WeakSet` 내 객체는 오직 한 번만 발생할 수 있습니다. 즉, `WeakSet` 컬렉션 내에서 유일합니다.

{{jsxref("Set")}} 객체와 주된 차이는 다음과 같습니다:

- `Set`과 달리, `WeakSet`은 **객체 만의 컬렉션**이며 모든 유형의 임의 값(의 컬렉션)은 아닙니다.
- `WeakSet`은 약합니다(_weak_): 컬렉션 내 객체 참조는 약하게 유지됩니다. `WeakSet` 내 저장된 객체에 다른 참조가 없는 경우, 쓰레기 수집(garbage collection)될 수 있습니다. 이는 또한 컬렉션 내 현재 저장된 객체 목록이 없음을 뜻합니다. `WeakSets`은 열거불가입니다.

## 생성자

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Creates a new `WeakSet` object.

## 인스턴스 메서드

- {{jsxref("WeakSet.add", "WeakSet.prototype.add(<var>value</var>)")}}
  - : Appends `value` to the `WeakSet` object.
- {{jsxref("WeakSet.delete", "WeakSet.prototype.delete(<var>value</var>)")}}
  - : Removes `value` from the `WeakSet`. `WeakSet.prototype.has(value)` will return `false` afterwards.
- {{jsxref("WeakSet.has", "WeakSet.prototype.has(<var>value</var>)")}}
  - : Returns a boolean asserting whether `value` is present in the `WeakSet` object or not.

## 예제

### `WeakSet` 객체 사용

```js
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false, foo가 집합에 추가되지 않았음

ws.delete(window); // 집합에서 window 제거함
ws.has(window); // false, window가 제거되었음
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
