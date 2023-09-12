---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
---

{{JSRef}}

**`Reflect`** 는 중간에서 가로챌 수 있는 JavaScript 작업에 대한 메서드를 제공하는 내장 객체입니다. 메서드의 종류는 [프록시 처리기](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)와 동일합니다. `Reflect`는 함수 객체가 아니므로 생성자로 사용할 수 없습니다.

## 설명

다른 대부분의 전역 객체와 다르게, `Reflect`는 생성자가 아닙니다. 따라서 함수처럼 호출하거나 [`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)로 인스턴스를 만들 수 없습니다. {{jsxref("Math")}} 객체처럼, `Reflect`의 모든 속성과 메서드는 정적입니다.

`Reflect` 객체의 정적 메서드 이름은 [프록시 처리기 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)의 이름과 같습니다.

일부 메서드는 {{jsxref("Object")}}에도 존재하는 메서드이지만 [약간의 차이](/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)가 있습니다.

## 정적 메서드

- {{jsxref("Reflect.apply()")}}
  - : 대상 함수를 주어진 매개변수로 호출합니다. {{jsxref("Function.prototype.apply()")}}도 참고하세요.
- {{jsxref("Reflect.construct()")}}
  - : 함수로 사용하는 [`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)입니다. `new target(...args)`을 호출하는 것과 같습니다. 다른 프로토타입을 지정하는 추가 기능도 가지고 있습니다.
- {{jsxref("Reflect.defineProperty()")}}
  - : {{jsxref("Object.defineProperty()")}}와 비슷합니다. {{jsxref("Boolean")}}을 반환합니다.
- {{jsxref("Reflect.deleteProperty()")}}
  - : 함수로 사용하는 [`delete` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)입니다. `delete target[name]`을 호출하는 것과 같습니다.
- {{jsxref("Reflect.get()")}}
  - : 대상 속성의 값을 반환하는 함수입니다.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : {{jsxref("Object.getOwnPropertyDescriptor()")}}와 비슷합니다. 주어진 속성이 대상 객체에 존재하면, 그 속성의 서술자를 반환합니다. 그렇지 않으면 {{jsxref("undefined")}}를 반환합니다.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : {{jsxref("Object.getPrototypeOf()")}}와 같습니다.
- {{jsxref("Reflect.has()")}}
  - : 함수로 사용하는 [`in` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/in)입니다. 자신의, 혹은 상속한 속성이 존재하는지 나타내는 {{jsxref("Boolean")}}을 반환합니다.
- {{jsxref("Reflect.isExtensible()")}}
  - : {{jsxref("Object.isExtensible()")}}과 같습니다.
- {{jsxref("Reflect.ownKeys()")}}
  - : 대상 객체의 자체 키(상속하지 않은 키) 목록을 배열로 반환합니다.
- {{jsxref("Reflect.preventExtensions()")}}
  - : {{jsxref("Object.preventExtensions()")}}와 비슷합니다. {{jsxref("Boolean")}}을 반환합니다.
- {{jsxref("Reflect.set()")}}
  - : 속성에 값을 할당하는 함수입니다. 할당 성공 여부를 나타내는 {{jsxref("Boolean")}}을 반환합니다.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : 객체의 프로토타입을 지정하는 함수입니다. 지정 성공 여부를 나타내는 {{jsxref("Boolean")}}을 반환합니다.

## 명세

{{Specifications}}

## 예제

### 객체가 특정 속성을 가지고 있는지 검사하기

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting: function () {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

### 객체 자체 키를 반환하기

```js
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### 객체에 새로운 속성 추가하기

```js
Reflect.set(duck, "eyes", "black");
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}} 전역 객체.
- {{jsxref("Proxy.handler", "handler")}} 객체.
