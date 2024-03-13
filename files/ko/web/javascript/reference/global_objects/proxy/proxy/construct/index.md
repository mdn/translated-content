---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
---

{{JSRef}}

**`handler.construct()`** 메서드는 {{jsxref("Operators/new", "new")}} 연산자에 대한 트랩입니다. 결과 Proxy 객체에서 new 연산이 유효하려면 프록시를 초기화하는 데 사용되는 대상 객체 자체에 내부 `[[Construct]]` 메서드가 있어야 합니다(즉, `new target`이 유효해야 함).

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## 구문

```js
new Proxy(target, {
  construct(target, argumentsList, newTarget) {},
});
```

### 매개변수

다음 매개변수는 `construct()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체.
- `argumentsList`
  - : 생성자의 인수 목록.
- `newTarget`
  - : 원래 호출된 생성자. `p` 위.

### 반환 값

`construct` 메서드는 반드시 객체를 반환합니다.

## 설명

**`handler.construct()`** 메서드는 {{jsxref("Operators/new", "new")}} 연산자에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- 결과는 `Object`여야 합니다.

## 예제

### new 연산자 트랩하기

다음 코드는 {{jsxref("Operators/new", "new")}} 연산자를 트랩합니다.

```js
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    console.log(`called: ${argumentsList}`);
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "호출: 1"
// 10
```

다음 코드는 불변 조건을 위반합니다.

```js example-bad
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    return 1;
  },
});

new p(); // TypeError 예외 발생
```

다음 코드는 프록시를 부적절하게 초기화합니다. 프록시 초기화의 `target` 자체는 {{jsxref("Operators/new", "new")}} 연산에 대한 유효한 생성자여야 합니다.

```js example-bad
const p = new Proxy(
  {},
  {
    construct(target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError is thrown, "p" is not a constructor
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/new", "new")}} 연산자.
- {{jsxref("Reflect.construct()")}}
