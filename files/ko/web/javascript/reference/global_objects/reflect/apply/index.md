---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---

{{JSRef}}

**`Reflect.apply()`** 정적 메서드는 대상 함수를 주어진 매개변수로 호출합니다.

{{EmbedInteractiveExample("pages/js/reflect-apply.html")}}

## 구문

```js
Reflect.apply(target, thisArgument, argumentsList);
```

### 매개변수

- `target`
  - : 호출할 대상 함수.
- `thisArgument`
  - : 호출에서 `target`의 `this`로 사용할 값.
- `argumentsList`
  - : `target`을 호출할 때 매개변수로 전달할 배열형 객체.

### 반환 값

주어진 `this` 값과 매개변수로 대상 함수를 호출한 결과.

### 예외

`target`이 호출 가능한 객체가 아니면 {{jsxref("TypeError")}}.

## 설명

ES5에서는 {{jsxref("Function.prototype.apply()")}} 메서드를 사용해, 함수를 호출할 때 `this` 값을 지정하거나 매개변수를 배열(또는 배열형 객체)에서 넘겨줄 수 있었습니다.

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

`Reflect.apply()` 메서드를 사용해 같은 작업을 더 쉽고 유려하게 수행할 수 있습니다.

## 예제

### `Reflect.apply()` 사용하기

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
