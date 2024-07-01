---
title: Proxy() constructor
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
---

{{JSRef}}

**`Proxy`** 생성자는 {{jsxref("Proxy")}} 객체를 만드는 데 사용됩니다.

## 구문

```js
new Proxy(target, handler);
```

> **참고:** `Proxy()`는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 만들 수 있습니다. `new` 없이 호출하려고 하면 {{jsxref("TypeError")}}가 발생합니다.

### 매개변수

- `target`

  - : `Proxy`로 래핑할 대상 객체입니다. 네이티브 배열, 함수 또는 다른 프록시를 포함한 모든 종류의 객체가 될 수 있습니다.

- `handler`
  - : 작업이 수행될 때 프록시의 동작을 정의하는 속성이 함수인 객체입니다.

## 설명

`Proxy()` 생성자를 사용하여 새 `Proxy` 객체를 만듭니다. 이 생성자는 두 가지 필수 인수를 사용합니다.

- `target`은 프록시를 만들려는 대상 개체입니다.
- `handler`는 작업이 수행될 때 프록시의 동작을 정의하는 속성이 함수인 객체입니다.

빈 핸들러는 거의 모든 면에서 대상 객체와 똑같은 동작을 하는 프록시가 생성되며, `handler` 객체에서 함수의 집합을 정의하여 프록시의 특정 동작을 커스텀할 수 있습니다. 예를 들어, `get()`을 정의하여 대상 [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)의 사용자 정의 버전을 제공할 수 있습니다.

### Handler 함수

이 섹션에서는 정의할 수 있는 모든 처리기 함수를 나열합니다. 처리기 함수는 기본 대상 객체에 대한 호출을 가로채기 때문에 **트랩**(**traps**)이라고도 합니다.

- {{JSxRef("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}
  - : 함수 호출에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}
  - : {{JSxRef("Operators/new", "new")}} 연산자에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : {{JSxRef("Object.defineProperty")}}에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : {{JSxRef("Operators/delete", "delete")}} 연산자에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/get", "handler.get()")}}
  - : 속성 값을 가져오기(get) 위한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor",
    "handler.getOwnPropertyDescriptor()")}}
  - : {{JSxRef("Object.getOwnPropertyDescriptor")}}에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : {{JSxRef("Object.getPrototypeOf")}}에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/has", "handler.has()")}}
  - : {{JSxRef("Operators/in", "in")}} 연산자에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : {{JSxRef("Object.isExtensible")}}에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : {{JSxRef("Object.getOwnPropertyNames")}}와 {{JSxRef("Object.getOwnPropertySymbols")}}에 대한 트랩
- {{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions",
    "handler.preventExtensions()")}}
  - : {{JSxRef("Object.preventExtensions")}}에 대한 트랩
- {{JSxRef("Global_Objects/Proxy/Proxy/set", "handler.set()")}}
  - : 속성 값 설정(set)에 대한 트랩.
- {{JSxRef("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : {{JSxRef("Object.setPrototypeOf")}}에 대한 트랩.

## 예제들

### 선택적 프록시 속성 접근자

이 예제의 대상 객체는 `notProxied`와 `proxied` 속성을 가지고 있습니다. 우리는 `proxied`에 대해 다른 값을 반환하는 처리기를 정의하고 다른 모든 액세스는 대상 객체를 통해 수행되도록 할 것입니다.

```js
const target = {
  notProxied: "original value",
  proxied: "original value",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied); // "replaced value"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript Guided의 `Proxy`와 `Reflect`](/ko/docs/Web/JavaScript/Guide/Meta_programming)
- {{jsxref("Global_Objects/Reflect", "Reflect")}}
