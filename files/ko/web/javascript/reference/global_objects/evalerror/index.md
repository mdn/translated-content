---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

**`EvalError`** 객체는 전역 {{jsxref("Global_Objects/eval", "eval()")}} 함수에 관한 오류를 나타냅니다. 이 예외는 JavaScript에 의해 더 이상 발생하지 않지만 `EvalError` 객체는 하위 호환성을 위해 남아있습니다.

`EvalError`는 {{Glossary("serializable object", "직렬화 가능한 객체")}}이기에 {{domxref("structuredClone()")}}로 복제 혹은 [Workers](/ko/docs/Web/API/Worker)간에 {{domxref("Worker/postMessage()", "postMessage()")}}를 사용하여 복사가 가능합니다.

`EvalError`는 {{jsxref("Error")}}의 하위 클래스입니다.

## 생성자

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : 새로운 `EvalError` 객체를 생성합니다.

## 인스턴스 속성

인스턴스 속성은 부모인 {{jsxref("Error")}}로부터 상속받습니다.

아래 속성은 `EvalError.prototype`에 정의되어 있으며 모든 `EvalError` 인스턴스와 공유합니다.

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : 인스턴스 객체를 생성하는 생성자 함수입니다. `EvalError` 인스턴스에서 초기 값은
    {{jsxref("EvalError/EvalError", "EvalError")}} 생성자입니다.
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : 오류의 유형에 대한 이름을 나타냅니다. `EvalError.prototype.name`의 초기 값은 `"EvalError"`입니다.

## 인스턴스 메서드

인스턴스 메서드는 부모인 {{jsxref("Error")}}로부터 상속받습니다.

## 예제

### EvalError 생성하기

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Stack of the error
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
