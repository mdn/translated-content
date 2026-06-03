---
title: WeakMap() constructor
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
l10n:
  sourceCommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{JSRef}}

**`WeakMap()`** 생성자는 {{jsxref("WeakMap")}} 객체를 생성합니다.

## 구문

```js-nolint
new WeakMap()
new WeakMap(iterable)
```

> [!NOTE]
> `WeakMap()`은 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}}가 발생합니다.

### 매개변수

- `iterable`
  - : [`Array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array) 또는 [@@iterator](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) 메서드(첫 번째 요소가 `WeakMap` 키로 사용될 값이고 두 번째 요소가 해당 키에 연결할 값인 두 요소 배열과 같은 객체를 생성하는 이터레이터 객체를 반환)를 시행하는 다른 이터러블 객체. 각 키-값 쌍은 새로운 `WeakMap`에 추가됩니다. null은 undefined으로 취급합니다.

## 예제

### WeakMap 사용하기

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // 값은 함수나 객체처럼 어떤 것이든 가능합니다
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 키와 값은 어떤 객체라도 가능합니다. 심지어 WeakMap도 됩니다

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, wm2에서 o2에 해당하는 키가 없습니다
wm2.get(o3); // undefined, set 값이기 때문입니다

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (값 자체가 'undefined' 일지라도)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [JavaScript 가이드에서 `WeakMap`](/ko/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
