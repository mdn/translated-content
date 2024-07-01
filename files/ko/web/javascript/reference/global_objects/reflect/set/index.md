---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
---

{{JSRef}}

**`Reflect.set()`** 정적 메서드는 객체 속성의 값을 설정합니다.

{{EmbedInteractiveExample("pages/js/reflect-set.html")}}

## 구문

```js
Reflect.set(target, propertyKey, value[, receiver])
```

### 매개변수

- `target`
  - : 속성의 값을 설정할 대상 객체.
- `propertyKey`
  - : 값을 설정할 속성의 이름.
- `value`
  - : 설정할 값.
- `receiver` {{optional_inline}}
  - : 속성이 설정자일 경우, `this`로 사용할 값.

### 반환 값

값 설정의 성공 여부를 나타내는 {{jsxref("Boolean")}}.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.set()` 메서드는 객체 속성의 값을 설정할 수 있습니다. 속성 추가도 할 수 있으며, 함수라는 점을 제외하면 동작 방식은 [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)와 같습니다.

## 예제

### `Reflect.set()` 사용하기

```js
// Object
var obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// 배열 자르기
Reflect.set(arr, "length", 1); // true
arr; // ["duck"];

// 매개변수를 하나만 제공하면 속성 키 이름은 문자열 "undefined", 값은 undefined
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
