---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
---

{{JSRef}}

**`Reflect.defineProperty()`** 정적 메서드는 {{jsxref("Object.defineProperty()")}}와 같은 동작을 하지만 {{jsxref("Boolean")}}을 반환합니다.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## 구문

```js
Reflect.defineProperty(target, propertyKey, attributes);
```

### 매개변수

- `target`
  - : 속성을 정의할 대상 객체.
- `propertyKey`
  - : 정의하거나 수정할 속성의 이름.
- `attributes`
  - : 정의하거나 수정하는 속성을 기술하는 객체.

### 반환 값

속성이 성공적으로 정의됐는지 나타내는 {{jsxref("Boolean")}}.

### 예외

`target`이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.

## 설명

`Reflect.defineProperty` 메서드는 객체에 속성을 정교하게 추가하거나 수정할 수 있습니다. 자세한 내용은 유사한 메서드인 {{jsxref("Object.defineProperty")}}를 참고하세요. `Object.defineProperty`는 성공 시 대상 객체를 반환하고 실패하면 {{jsxref("TypeError")}}를 던지지만, `Reflect.defineProperty`는 성공 여부를 나타내는 {{jsxref("Boolean")}}을 반환합니다.

## 예제

### `Reflect.defineProperty()` 사용하기

```js
var obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
obj.x; // 7
```

### 속성 정의의 성공 여부 알아내기

{{jsxref("Object.defineProperty")}}는 성공 시 객체를 반환하고, 실패 시 {{jsxref("TypeError")}}를 던지므로 속성 정의 과정에 발생할 수 있는 오류를 [`try...catch`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch) 블록으로 잡아야 합니다. 반면 `Reflect.defineProperty`는 성공 여부를 나타내는 {{jsxref("Boolean")}}을 반환하므로, 간단하게 [`if...else`](/ko/docs/Web/JavaScript/Reference/Statements/if...else) 블록만 사용하면 됩니다.

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // 성공
} else {
  // 실패
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
