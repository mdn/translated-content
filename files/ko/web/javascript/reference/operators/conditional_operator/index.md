---
title: 조건 (삼항) 연산자
slug: Web/JavaScript/Reference/Operators/Conditional_operator
---

{{jsSidebar("Operators")}}

**조건 (삼항) 연산자**는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다. 앞에서부터 조건문, 물음표(`?`), 조건문이 참({{Glossary("truthy")}})일 경우 실행할 표현식, 콜론(`:`), 조건문이 거짓({{Glossary("falsy")}})일 경우 실행할 표현식이 배치됩니다. 해당 연산자는 [`if...else`](/ko/docs/Web/JavaScript/Reference/Statements/if...else)문의 대체재로 빈번히 사용됩니다.

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## 구문

```js
condition ? exprIfTrue : exprIfFalse;
```

### 매개변수

- `condition`
  - : 조건문으로 사용되는 표현식
- `exprIfTrue`
  - : `condition`이 {{Glossary("truthy")}}한 값으로 평가될 경우 실행되는 표현식 (`true`와 같거나, `true`로 치환될 수 있는 값)
- `exprIfFalse`
  - : `condition`이 {{Glossary("falsy")}}한 값으로 평가될 경우 실행되는 표현식 (`false`와 같거나, `false`로 치환될 수 있는 값)

## 설명

`false` 이외의 falsy한 표현식에는 `null`, `NaN`, `0`, 비어있는 문자열 (`""`), 그리고 `undefined`가 있습니다. `condition`이 이 중 하나일 경우 조건 연산자의 결괏값은 `exprIfFalse` 표현식을 실행한 결괏값입니다.

## 예제

### 간단한 예제

```js
var age = 26;
var beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### null 값 처리하기

`null`일 수 있는 값을 처리할 때 흔히 사용됩니다:

```js
let greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### 연결된 조건문 처리하기

조건 연산자는 아래와 같이 연결해 사용할 수 있습니다. 이는 연결된 `if … else if … else if … else`와 유사합니다.

```js
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}
```

위 코드는 아래의 연결된 `if … else`와 동등합니다.

```js
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
