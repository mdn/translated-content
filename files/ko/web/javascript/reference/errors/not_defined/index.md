---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
---

{{jsSidebar("Errors")}}

## 메시지

```
    ReferenceError: "x" is not defined
```

## 에러 타입

{{jsxref("ReferenceError")}}.

## 무엇이 잘못되었을까?

존재하지 않는 변수를 참조하는 곳이 있습니다. 이 변수는 선언되어야 합니다. 또는, 현재 스크립트나 {{Glossary("scope")}} 에서 사용이 가능하도록 해야합니다.

> **참고:** 라이브러리(예를 들면 jQuery와 같은)의 로딩은, 반드시 코드에서 "$"와 같은 라이브러리 변수에 접근하기 이전에 수행되어야 합니다. 라이브러리를 로딩하는 {{HTMLElement("script")}} 태그가 그 변수를 사용하는 코드보다 앞에 위치하도록 하세요.

## 예

### 선언되지 않은 변수

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

"foo" 변수는 어디에도 선언되지 않았습니다. {{jsxref("String.prototype.substring()")}} 메소드가 작동하도록 하기 위해서는 문자열을 필요로 합니다.

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### 잘못된 스코프

변수는 현재의 실행 흐름 내에서 이용 가능해야합니다. 함수 내부에 정의된 변수는 다른 외부의 함수에서는 접근할 수 없습니다. 그 때문에, 변수는 함수의 스코프 내부에서만 정의 됩니다.

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError: num1 is not defined
```

그러나, 함수는 모든 변수와 정의된 스코프 안에 정의된 함수에 접근할 수 있습니다. 따라서, 전역으로 정의된 함수는 전역에 정의된 모든 변수에도 접근할 수 있습니다.

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## 참조

- {{Glossary("Scope")}}
- [Declaring variables in the JavaScript Guide](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables)
- [Function scope in the JavaScript Guide](/ko/docs/Web/JavaScript/Guide/Functions#함수_스코프)
