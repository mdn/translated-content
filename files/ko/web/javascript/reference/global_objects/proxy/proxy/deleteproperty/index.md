---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
---

{{JSRef}}

**`handler.deleteProperty()`** 메서드는 {{jsxref("Operators/delete", "delete")}} 연산자에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html", "taller")}}

## 구문

```js
new Proxy(target, {
  deleteProperty(target, property) {},
});
```

### 매개 변수

다음 매개변수는 `deleteProperty()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체
- `property`
  - : 삭제할 이름 또는 속성의 {{jsxref("Symbol")}}입니다.

### 반환 값

`deleteProperty()` 메서드는 속성이 성공적으로 삭제되었는지를 나타내는 {{jsxref("Boolean", "불리언")}}을 반환합니다.

## 설명

**`handler.deleteProperty()`** 메서드는 {{jsxref("Operators/delete", "delete")}} 연산자에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- 속성 삭제: `delete proxy[foo]`와
  `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- 속성이 대상 객체의 구성할 수 없는 자체 속성으로 존재하는 경우, 속성을 삭제할 수 없습니다.

## 예제들

### delete 연산자 가로채기

다음 코드는 {{jsxref("Operators/delete", "delete")}} 연산자를 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    deleteProperty(target, prop) {
      if (!(prop in target)) {
        console.log(`property not found: ${prop}`);
        return false;
      }
      delete target[prop];
      console.log(`property removed: ${prop}`);
      return true;
    },
  },
);

p.a = 10;
console.log("a" in p); // true

const result1 = delete p.a; // "property removed: a"
console.log(result1); // true
console.log("a" in p); // false

const result2 = delete p.a; // "property not found: a"
console.log(result2); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/delete", "delete")}} 연산자
- {{jsxref("Reflect.deleteProperty()")}}
