---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
---

{{JSRef}}

**`Reflect.deleteProperty()`** 정적 메서드는 속성을 제거할 수 있습니다. [`delete` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)의 함수판이라고 할 수 있습니다.

{{EmbedInteractiveExample("pages/js/reflect-deleteproperty.html", "taller")}}

## 구문

```js
Reflect.deleteProperty(target, propertyKey);
```

### 매개변수

- `target`
  - : 속성을 제거할 대상 객체.
- `propertyKey`
  - : 제거할 속성의 이름.

### 반환 값

속성이 성공적으로 제거됐는지 나타내는 {{jsxref("Boolean")}}.

### Exceptions

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.deleteProperty` 메서드는 객체의 속성을 제거할 수 있습니다. 반환값은 속성의 제거 성공 여부를 나타내는 {{jsxref("Boolean")}}입니다. 비엄격 모드의 [`delete` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)와 거의 동일합니다.

## 예제

### `Reflect.deleteProperty()` 사용하기

```js
var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
obj; // { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
arr; // [1, 2, 3, , 5]

// 주어진 속성이 존재하지 않으면 true 반환
Reflect.deleteProperty({}, "foo"); // true

// 주어진 속성이 설정 불가능하면 false 반환
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- [`delete` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)
