---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
---

{{JSRef}}

**`isPrototypeOf()`** 메소드는 해당 객체가 다른 객체의 프로토타입 체인에 속한 객체인지 확인하기 위해 사용됩니다.

> **참고:** `isPrototypeOf` 는 {{jsxref("Operators/instanceof", "instanceof")}} 연산자와 다릅니다. "`object instanceof AFunction`" 표현식에서는 `object` 의 프로토타입 체인을 AFunction 자체가 아니라 `AFunction.prototype` 에 대해 확인을 합니다.

## 구문

```js
prototypeObj.isPrototypeOf(obj);
```

### 매개변수

- `object`
  - : 프로토타입 체인을 가지고 있는 객체가 검색될 것 입니다.

## 설명

`isPrototypeOf` 메소드는 또 다른 객체의 프로토타입 체인에 해당 객체가 존재하는지 여부를 확인할수 있습니다.

예를들어, 다음의 프로토타입체인을 고려해봅시다.

```js
function Fee() {
  // ...
}

function Fi() {
  // ...
}
Fi.prototype = new Fee();

function Fo() {
  // ...
}
Fo.prototype = new Fi();

function Fum() {
  // ...
}
Fum.prototype = new Fo();
```

실행되고 나면 **Fum** 인스턴스의 프로토타입체인이 **Fi**의 프로토타입과 연결되어있는지를 확인할 필요가 있습니다. 다음과 같은 방법으로 확인할 수 있습니다:

```js
var fum = new Fum();
// ...

if (Fi.prototype.isPrototypeOf(fum)) {
  // do something safe
}
```

이 메소드는 {{jsxref("Operators/instanceof", "instanceof")}} 연산자와 함께 특정 프로토타입으로부터 상속된 객체만 작동하게 하려는(예를 들어 특정 메소드나 속성이 객체에 있다는걸 보장하려는 때) 코드에서 특히 쓸모가 많다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
