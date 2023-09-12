---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
---

{{jsSidebar("Errors")}}

## 메시지

```
    SyntaxError: expected expression, got "x"
    SyntaxError: expected property name, got "x"
    SyntaxError: expected target, got "x"
    SyntaxError: expected rest argument name, got "x"
    SyntaxError: expected closing parenthesis, got "x"
    SyntaxError: expected '=>' after argument list, got "x"
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었나요?

특정 언어 구조를 예상했지만 무언가 다른 것이 있었습니다. 아마도, 간단한 오타일 것입니다.

## 예제

### 예상하지 못한 표현식

예를 들어, 함수를 호출할 때, 인수에서 마지막 부분에 콤마는 허용되지 않습니다. 자바스크립트는 계속해서 다른 인자가 있을 것이라고 기대하기 때문입니다.

```js-nolint example-bad
Math.max(2, 42,);
// SyntaxError: expected expression, got ')'
```

콤마를 생략하거나 다른 인수를 추가해 수정할 수 있습니다.

```js example-good
Math.max(2, 42);
Math.max(2, 42, 13 + 37);
```

## 참조

- {{jsxref("Math.max()")}}
