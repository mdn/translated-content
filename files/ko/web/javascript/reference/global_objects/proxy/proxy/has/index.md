---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
---

{{JSRef}}

**`handler.has()`** 메서드는 {{jsxref("Operators/in", "in")}} 연산자에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-has.html", "taller")}}

## 구문

```js
new Proxy(target, {
  has(target, prop) {},
});
```

### 매개 변수

다음 매개변수는 `has()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체
- `prop`
  - : 존재 여부를 확인할 속성의 이름 또는 {{jsxref("Symbol")}}

### 반환 값

`has()` 메서드는 불리언 값을 반환합니다.

## 설명

**`handler.has()`** 메서드는 {{jsxref("Operators/in", "in")}} 연산자에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- 속성 쿼리: `foo in proxy`
- 상속된 속성 쿼리: `foo in Object.create(proxy)`
- `with` 확인: `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- 속성이 대상 객체의 구성할 수 없는 자체 속성으로 존재하는 경우, 속성이 존재하지 않는 것으로 보고될 수 없습니다.
- 속성이 대상 객체의 자체 속성으로 존재하고 대상 객체가 확장될 수 없는 경우, 속성이 존재하지 않는 것으로 보고될 수 없습니다.

## 예제

### in 연산자 트랩

다음 코드는 {{jsxref("Operators/in", "in")}} 연산자를 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p); // "called: a"
// true
```

다음 코드는 불변 조건을 위반합니다.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/in", "in")}} 연산자
- {{jsxref("Reflect.has()")}}
