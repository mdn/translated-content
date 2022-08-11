---
title: 삼항 조건 연산자
slug: Web/JavaScript/Reference/Operators/Conditional_Operator
tags:
  - Conditional
  - Decision
  - JS
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - else
  - if
  - ternary
browser-compat: javascript.operators.conditional
---
{{jsSidebar("Operators")}}

**조건부 삼항 연산자**는 JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자입니다. 맨 앞에 조건문 들어가고. 그 뒤로 물음표(`?`)와 조건이 참{{Glossary("truthy")}}이라면 실행할 식이 물음표 뒤로 들어갑니다. 바로 뒤로 콜론(`:`)이 들어가며 조건이 거짓{{Glossary("falsy")}}이라면 실행할 식이 마지막에 들어갑니다. 보통 [`if`](/ko/docs/Web/JavaScript/Reference/Statements/if...else) 명령문의 단축 형태로 쓰입니다.

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## 구문

```js
    condition ? exprIfTrue : exprIfFalse
```

### 매개변수

- `condition` (조건문)
  - : 조건문으로 들어갈 표현식
- `exprIfTrue` (참일 때 실행할 식)
  - : `condition`이 {{Glossary("Truthy")}}일 때 실행되는 표현식입니다. (`true`일 때 치환될 값입니다).
- `exprIfFalse` (거짓일 때 실행할 식)
  - : `condition`이 {{Glossary("falsy")}}일 때 실행되는 표현식입니다. (`false`일 때 치환될 값입니다).

## 설명

`false`외에도 `null`,`NaN`, `0`, 비어있는 문자 값 (`""`), 그리고 `undefined`으로 조건문에 false 값으로 사용 가능 합니다. 이 값들이 조건문으로 사용된다면 `exprIfFalse`이 결과로 나오게 됩니다.

## 예제

### 간단한 예제

```js
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### null 값 처리하기

이와같이 `null` 값을 처리할 때에도 일반적으로 사용됩니다.:

```js
let greeting = person => {
  let name = person ? person.name : `stranger`
  return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"
```

### 연속된 조건문 처리하기

삼항 연산자는 `if … else if … else if … else`와 같은 "연속된 조건"을 사용할 수 있습니다.

```js
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// 위의 코드는 아래의 코드와 동일합니다.

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [if statement](/ko/docs/Web/JavaScript/Reference/Statements/if...else)
