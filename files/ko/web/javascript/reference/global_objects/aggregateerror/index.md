---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
tags:
  - AggregateError
  - 실험적
  - 인터페이스
  - 자바스크립트
  - 클래스
translation_of: Web/JavaScript/Reference/Global_Objects/AggregateError
---
{{JSRef}}

**`AggregateError`** 객체는 다수의 에러가 한 에러로 랩핑되어야 할 때의 오류를 나타냅니다. 한 작업에서 여러개의 오류가 보고될 때 발생하는데, 대표적으로 {{JSxRef("Promise.any()")}}에 전달된 모든 promise들이 거부되었을 때 발생합니다.

## Constructor

- {{jsxref("Global_Objects/AggregateError/AggregateError", "AggregateError()")}}
  - : 새로운 `AggregateError` 객체를 생성합니다.

## Instance properties

- {{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}
  - : 에러 메시지, 기본값 `""`.
- {{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}
  - : 에러 이름, 기본값 `AggregateError`.

## Examples

### AggregateError 다루기

```js
Promise.any([
  Promise.reject(new Error("some error")),
]).catch(e => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "All Promises rejected"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
});
```

### AggregateError 발생시키기

```js
try {
  throw new AggregateError([
    new Error("some error"),
  ], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
}
```

## Specifications

| Specification                                                                                            |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('Promise.any', '#sec-aggregate-error-objects', 'AggregateError')}} |

## Browser compatibility

{{Compat("javascript.builtins.AggregateError")}}

## See also

- {{JSxRef("Error")}}
