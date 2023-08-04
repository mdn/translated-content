---
title: 일급 함수
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

프로그래밍 언어는 해당 언어의 함수들이 다른 변수처럼 다루어질 때 **일급 함수**를 가진다고 합니다.
예를 들어, 일급 함수를 가진 언어에서 함수는 다른 함수들에 전달인자로 제공되고, 다른 함수에 의해 반환될 수 있으며, 변수에 값으로서 할당될 수 있습니다.

## 예제

### 변수에 함수 할당

```js
const foo = () => {
  console.log("foobar");
};
foo(); // 변수를 사용해 호출
// foobar
```

{{glossary("Variable", "변수")}}에 '익명함수'를 할당한 다음, 끝에 괄호 `()`를 추가하면서 함수를 호출할 해당 변수를 사용합니다.

> **참고:** 함수가 이름을 가지고 있더라도, 변수 이름을 사용하여 함수를 호출할 수 있습니다.
> 함수에 이름을 지정하는 것은 코드를 디버깅할 때 도움이 됩니다.
> _하지만 함수를 호출하는 방식에는 영향을 미치지 않을 것입니다._

### 함수에 전달인자로 전달

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// `sayHello`를 전달인자로 `greeting` 함수에 전달
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

`sayHello()` 함수를 `greeting()` 함수에 전달인자로 전달하는데, 이것은 함수를 값으로서 어떻게 다루는지 설명합니다.

> **참고:** 다른 함수에 전달인자로 전달하는 함수를 {{glossary("Callback function", "콜백 함수")}}라고 합니다. `sayHello`는 콜백 함수입니다.

### 함수 반환

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

이번 예제에서, 다른 함수로부터 함수를 반환합니다.
자바스크립트에서 함수들은 값들로서 다루어질 수 있기 때문에 함수를 반환할 수 있습니다.

> **참고:** 함수를 반환하거나 다른 함수들을 전달인자로서 사용하는 함수를 '고차 함수'라고 합니다.

## 같이 보기

- [일급 함수](https://en.wikipedia.org/wiki/First-class_function) 위키피디아
- [MDN Web Docs 용어 사전](/ko/docs/Glossary)

  - {{glossary("Callback function", "콜백 함수")}}
  - {{glossary("Function", "함수")}}
  - {{glossary("Variable", "변수")}}
