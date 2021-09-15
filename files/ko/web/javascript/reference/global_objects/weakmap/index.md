---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - WeakMap
  - Polyfill
browser-compat: javascript.builtins.WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap
---
{{JSRef}}

**`WeakMap`** 객체는 키를 약하게 참조하는 키/값 쌍 컬렉션입니다. 키는 객체여야 하지만 값으로는 아무 값이나 사용할 수 있습니다.

## 설명

`WeakMap`은 키로 오직 `Object` 타입만 사용할 수 있습니다. {{jsxref("Symbol")}}과 같은 {{Glossary("Primitive", "원시 값")}}은 `WeakMap`의 키로 사용할 수 없습니다.

### 'Weak'Map인 이유

JavaScript의 맵 API는 키 배열 하나, 값 배열 하나 총 두 개의 배열과 네 개의 API 메서드로 구현해볼 수 있습니다. 이 '유사' 맵에 요소를 추가하는 것은 키와 값을 각 배열의 끝에 동시에 추가해서 수행할 수 있습니다. 그 결과로, 서로 연관된 키와 값이 배열 내에서 차지하는 인덱스가 서로 일치할 것입니다. 유사 맵에서 값을 가져오는 것은 키 배열을 순회해 일치하는 키를 찾고, 그 키의 인덱스를 사용해 값 배열에서 일치하는 값을 회수하는 것으로 해낼 수 있습니다.

이와 같은 구현에는 두 가지 중요한 문제가 있습니다.

1. 요소 설정과 탐색이 *O(n)* (*n*은 맵의 키 수)입니다. 두 작업 모두 키 배열을 순회해서 맞는 키를 찾아야 하기 때문입니다.
2. 메모리 누수가 발생할 수 있습니다. 두 배열로 인해 각각의 키와 값에 대한 참조가 무한히 유지되기 때문입니다. 따라서 키를 참조하는 곳이 아무데도 없어도, 배열의 참조로 인해 키가 가비지 컬렉션의 대상이 되지 않습니다. 이는 값 배열 역시 마찬가지입니다.

반면, 내장 `WeakMap`은 키 객체의 "약한" 참조만 가지고 있습니다. 따라서 내장 `WeakMap`은 가비지 컬렉션을 방지하지 않으며, 가비지 컬렉션 시 키 참조 역시 사라집니다. 맵 내의 값 역시 "약한" 참조로서 가비지 컬렉션을 막지 않습니다. `WeakMap`은 **키가 가비지 컬렉션 되지 않았을 때만** 가치가 있는 정보를 키와 연결할 때 특히 유용한 구조입니다.

**약한 참조로 인해 `WeakMap`의 키는 열거할 수 없습니다.** 키 목록을 가져오는 메서드는 존재하지 않습니다. 그런 메서드가 존재한다면 그 구현은 가비지 컬렉션 상태에 의존하게 되므로 비결정적인 결과를 낳게 됩니다. 키의 목록이 필요하면 {{jsxref("Map")}}을 사용하세요.

## 생성자

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : 새로운 `WeakMap` 객체를 생성합니다.

## 속성

- `WeakMap.length`
  - : `length` 속성값은 0.
- {{jsxref("WeakMap.prototype")}}
  - : `WeakMap` 생성자에 대한 프로토타입을 나타냅니다. 모든 `WeakMap` 객체에 속성을 추가할 수 있습니다.

## 인스턴스 메서드

- {{jsxref("WeakMap.delete", "WeakMap.prototype.delete(key)")}}
  - : `key`에 연결된 값을 제거합니다. 이후의 `WeakMap.prototype.has(key)`는 `false`를 반환할 것입니다.
- {{jsxref("WeakMap.get", "WeakMap.prototype.get(key)")}}
  - : `key`에 연결된 값을 반환합니다. 그런 값이 없으면 {{jsxref("undefined")}}를 반환합니다.
- {{jsxref("WeakMap.has", "WeakMap.prototype.has(key)")}}
  - : `key`에 연결된 값이 `WeakMap` 객체에 존재하는지 나타내는 불리언 값을 반환합니다.
- {{jsxref("WeakMap.set", "WeakMap.prototype.set(key, value)")}}
  - : `WeakMap` 객체의 `key`에 `value`를 연결합니다. `WeakMap` 객체를 반환합니다.

## 예제

### `WeakMap` 사용하기

```js
const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function() {},
      o3 = window;

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // 값은 함수와 객체를 포함해 아무거나 가능
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 키는 아무 객체나 가능. 다른 WeakMap도 가능합니다!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, wm2에는 o2에 연결된 값이 없음
wm2.get(o3); // undefined, o3에 undefined를 연결함

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (값이 undefined지만)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### .clear() 메서드를 추가한 `WeakMap`류 클래스 구현

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [`core-js`의 `WeakMap` 폴리필](https://github.com/zloirock/core-js#weakmap)
- [JavaScript 안내서의 `WeakMap`](/ko/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
