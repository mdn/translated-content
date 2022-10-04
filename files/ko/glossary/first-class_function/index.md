---
title: 일급 함수
slug: Glossary/First-class_Function
---
함수를 다른 변수와 동일하게 다루는 언어는 **일급 함수**를 가졌다고 표현합니다. 예를 들어, 일급 함수를 가진 언어에서는 함수를 다른 함수에 인수로 제공하거나, 함수가 함수를 반환할 수 있으며, 변수에도 할당할 수 있습니다.

## 예제 | 변수에 함수 할당

### JavaScript

```js
const foo = function() {
   console.log("foobar");
}
// 변수를 사용해 호출
foo();
```

익명함수를 변수에 할당한 다음, 그 변수를 사용하여 끝에 괄호 `()`를 추가하여 함수를 호출했습니다.

> **참고:** **함수가 이름을 가지고 있더라도** 할당한 변수 이름을 사용해 함수를 호출할 수 있습니다. 이름을 지정하면 코드를 디버깅할 때 유용합니다. 하지만 호출하는 방식에는 영향을 미치지 않습니다.

## 예제 | 함수를 인자로 전달

### JavaScript

```js
function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// `sayHello`를 `greeting` 함수에 인자로 전달
greeting(sayHello, "JavaScript!");
```

`sayHello()` 함수를 `greeting()` 함수의 인자로 전달했습니다. 이것이 함수를 어떻게 변수처럼 다루는지 보여주는 예시입니다.

> **참고:** 다른 함수에 인자로 전달된 함수를 {{glossary("Callback function", "콜백 함수")}}라고 합니다. _`sayHello`는 콜백 함수입니다._

## 예제 | 함수 반환

### JavaScript

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
```

함수가 함수를 반환하는 예제입니다. _JavaScript에서는 함수를 변수처럼 취급하기 때문에 함수를 반환할 수 있습니다._

> **참고:** 함수를 반환하는 함수를 **고차 함수**라고 부릅니다.

다시 예제로 돌아갑시다. `sayHello` 함수를 호출했을 때 반환하는 익명함수를 호출하려면 두 가지 방법이 있습니다.

### 1- 변수 사용

```js
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc();
```

이렇게 하면 `Hello!` 메시지가 출력됩니다.

> **참고:** 만약에 `sayHello` 함수를 직접 호출하면, **반환된 함수를 호출하지않고** 함수 자체를 반환합니다. 그러므로 반환된 함수를 다른 변수에 저장하여 사용해야합니다.

### 2- 이중 괄호 사용

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
```

이중 괄호 `()()`를 사용해 반환한 함수도 호출하고 있습니다.

## 더 배우기

### 일반 지식

- 위키백과 [일급 객체](https://ko.wikipedia.org/wiki/%EC%9D%BC%EA%B8%89_%EA%B0%9D%EC%B2%B4)
