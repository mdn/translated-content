---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
---

{{JSRef}}

잘 알려진 **`Symbol.iterator`** 심볼은 객체에 대응하는 기본 이터레이터를 지정합니다. [`for...of`](/ko/docs/docs/Web/JavaScript/Reference/Statements/for...of)와 같이 사용됩니다.

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}{{js_property_attributes(0,0,0)}}

## 설명

(`for..of` 루프의 시작부분과 같이) 객체가 반환될 필요가 있을때는 언제든지`@@iterator` 메서드는 인수 없이도 호출 할 수 있습니다. 반환된 **iterator**는 반복할 값을 취득하기 위해 사용됩니다.

{{jsxref("Object")}}와 같이 반복동작을 내장하고 있는 형태도 있지만 그렇지 않은 경우도 있습니다. `@@iterator` 메서드를 가지고 있는 내장형 타입은 아래와 같습니다.

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

상세한 내용은 [반복처리 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)도 확인 해 주시기 바랍니다.

## 예제

### 유저 정의 이터레이터

앞에서 기술한 바와 같이 독자적으로 이터레이터를 만드는 것이 가능합니다.

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### 비정형 이터레이터

iterable의 `@@iterator` 메서드가 이터레이터 객체를 반환하지 않는 경우 비정형 이터레이터입니다. 이와 같이 사용하는 경우 실행시 예외 혹은 예상치 못한 버그를 발생할 가능성이 있습니다.

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 정보

- [반복처리 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
