---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

**`SyntaxError`** 객체는 문법적으로 잘못된 코드를 해석하려고 시도할 때 발생하는 오류를 나타냅니다.
JavaScript 엔진이 코드를 구문 분석할 때 언어의 구문에 맞지 않는 토큰이나 토큰 순서를 만나면 이 에러를 발생시킵니다.

`SyntaxError`는 {{Glossary("serializable object", "직렬화 가능한 객체")}}이므로 {{domxref("structuredClone()")}}으로 복제하거나 {{domxref("Worker/postMessage()", "postMessage()")}}를 사용하여 [Worker](/ko/docs/Web/API/Worker) 간에 복사할 수 있습니다.

`SyntaxError`는 {{jsxref("Error")}}의 하위 클래스입니다.

## 생성자

- {{jsxref("SyntaxError/SyntaxError", "SyntaxError()")}}
  - : 새로운 `SyntaxError` 객체를 만듭니다.

## 인스턴스 속성

또한 부모 {{jsxref("Error")}}에서 인스턴스 속성을 상속합니다.

아래 속성은 `SyntaxError.prototype`에서 정의되었고, 모든 `SyntaxError` 인스턴스애서 공유됩니다.

- {{jsxref("Object/constructor", "SyntaxError.prototype.constructor")}}
  - : 인스턴스 객체를 생성하는 생성자 함수입니다. `SyntaxError` 인스턴스의 경우 초기 값은 {{jsxref("SyntaxError/SyntaxError", "SyntaxError")}} 생성자입니다.
- {{jsxref("Error/name", "SyntaxError.prototype.name")}}
  - : 오류 유형의 이름을 나타냅니다. `SyntaxError.prototype.name`의 경우 초기 값은 `"SyntaxError"`입니다.

## 인스턴스 메서드

부모 {{jsxref("Error")}}에서 인스턴스 메서드를 상속합니다.

## 예제

### `SyntaxError` 처리하기

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // 오류 스택
}
```

### SyntaxError 생성하기

```js
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // 오류 스택
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
