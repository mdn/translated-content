---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
---

{{JSSidebar("Errors")}}

## 메세지

```
  SyntaxError: Unexpected identifier after numeric literal (Edge)
  SyntaxError: identifier starts immediately after numeric literal (Firefox)
  SyntaxError: Unexpected number (Chrome)
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

{{Glossary("식별자", "식별자")}}라고 불리는 변수의 이름은 반드시 지켜야 하는 특정 규칙을 따라야 합니다.

자바스크립트의 식별자는 반드시 문자, 언더스코어(\_), 또는 달러 표시($)로 시작돼야 합니다. 숫자로 시작될 수 없습니다. 글자 뒤에만 숫자(0-9)가 올 수 있습니다.

## 예제

### 숫자로 시작하는 변수 이름

자바스크립트에서 변수 이름은 숫자로 시작될 수 없습니다. 아래 예제는 에러가 발생합니다:

```js example-bad
var 1life = 'foo';
// SyntaxError: identifier starts immediately after numeric literal

var foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.foo);
// SyntaxError: identifier starts immediately after numeric literal
```

숫자가 뒤에 오도록 변수 이름을 변경해야 합니다.

```js example-good
var life1 = "foo";
var foo = life1;
```

## 같이 보기

- [문법](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)
- [변수](/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#%EB%B3%80%EC%88%98)([JavaScript Guide](/ko/docs/Web/JavaScript/Guide))
