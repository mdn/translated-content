---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Error
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error
browser-compat: javascript.builtins.Error
---
{{JSRef}}

`Error` 객체는 런타임 오류가 발생했을 때 던져집니다.
`Error` 객체를 사용자 지정 예외의 기반 객체로 사용할 수도 있습니다.
아래 표준 내장 오류 유형을 참고하세요.

## 설명

런타임 오류는 새로운 `Error` 객체를 생성하고 던집니다.

### 오류 유형

JavaScript에는 일반적인 `Error` 생성자 외에도 여러 개의 중요 오류
생성자가 존재합니다. 클라이언트측 예외에 대해서는
[제어 흐름과 에러 처리](/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#예외처리문)를 참고하세요.

- {{jsxref("EvalError")}}
  - : 전역 함수 {{jsxref("eval", "eval()")}}에서 발생하는 오류의 인스턴스를
    생성합니다.
- {{jsxref("RangeError")}}
  - : 숫자 변수나 매개변수가 유효한 범위를 벗어났음을 나타내는 오류 인스턴스를
    생성합니다.
- {{jsxref("ReferenceError")}}
  - : 잘못된 참조를 했음을 나타내는 오류 인스턴스를 생성합니다.
- {{jsxref("SyntaxError")}}
  - : {{jsxref("eval", "eval()")}}이 코드를 분석하는 중 잘못된 구문을 만났음을
    나타내는 오류 인스턴스를 생성합니다.
- {{jsxref("TypeError")}}
  - : 변수나 매개변수가 유효한 자료형이 아님을 나타내는 오류 인스턴스를
    생성합니다.
- {{jsxref("URIError")}}
  - : {{jsxref("encodeURI", "encodeURI()")}}나 {{jsxref("decodeURI",
    "decodeURl()")}} 함수에 부적절한 매개변수를 제공했을 때 발생하는 오류의
    인스턴스를 생성합니다.
- {{JSxRef("AggregateError")}}
  - : 하나의 동작이 여러 개의 오류 발생시키는 경우(예:
    {{JSxRef("Promise.any()")}}) 여러 오류를 하나의 오류로 감싸는 인스턴스를
    만듭니다.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : JavaScript 엔진의 내부에서 오류가 발생했음을 나타내는 오류 인스턴스를
    생성합니다.

## 생성자

- {{jsxref("Error/Error", "Error()")}}
  - : 새로운 `Error` 객체를 만듭니다.

## 정적 메서드

- {{JSxRef("Error.captureStackTrace()")}}
  - : 오류 인스턴스의 {{JSxRef("Error.prototype.stack", "stack")}} 속성을 만드는
    비표준 **V8** 함수

## 인스턴스 속성

- {{jsxref("Error.prototype.message")}}
  - : 오류 메시지
- {{jsxref("Error.prototype.name")}}
  - : 오류 이름
- {{jsxref("Error.prototype.description")}}
  - : 오류를 설명하기 위한 비표준 마이크로소프트 속성.
    {{jsxref("Error.prototype.message", "message")}}와 비슷합니다.
- {{jsxref("Error.prototype.number")}}
  - : 오류 번호를 위한 비표준 마이크로소프트 속성
- {{jsxref("Error.prototype.fileName")}}
  - : 해당 오류를 발생시킨 파일의 경로를 표시하기 위한 비표준 모질라 속성
- {{jsxref("Error.prototype.lineNumber")}}
  - : 해당 오류를 발생시킨 파일의 줄 번호를 표시하기 위한 비표준 모질라 속성
- {{jsxref("Error.prototype.columnNumber")}}
  - : 해당 오류를 발생시킨 파일의 칸 번호를 표시하기 위한 비표준 모질라 속성
- {{jsxref("Error.prototype.stack")}}
  - : 스택 추적을 위한 비표준 모질라 속성

## 인스턴스 메서드

- {{jsxref("Error.prototype.toString()")}}
  - : 명시된 객체를 표현하기 위한 문자열을 반환합니다.
    {{jsxref("Object.prototype.toString()")}} 메서드를 오버라이드합니다..

## 예제

### 일반적인 오류 던지기

`Error` 객체를 생성한 후엔 대개 {{jsxref("Statements/throw",
  "throw")}} 키워드를 이용해 던집니다. {{jsxref("Statements/try...catch",
  "try...catch")}} 구문을 이용하여 오류를 처리할 수 있습니다.

```js
try {
  throw new Error("이런!");
} catch (e) {
  alert(e.name + ": " + e.message);
}
```

### 특정 오류 처리하기

오류의 {{jsxref("Object.prototype.constructor", "constructor")}} 속성을 이용해
유형을 판별, 특정 오류만 처리할 수 있습니다. 만약 최신 Javascript 엔진에서
동작하는 코드를 작성한다면 {{jsxref("Operators/instanceof",
  "instanceof")}} 키워드를 이용할 수도 있습니다.

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ": " + e.message);
  }
  // ... etc
}
```

### 사용자 정의 에러 타입

`throw new MyError()` 이후 `instanceof MyError`로 직접
만든 오류를 판별할 수 있도록 `Error`의 파생 오류 정의를
고려해보세요. 더 깔끔하고 일관적인 오류 처리 코드를 작성할 수
있습니다. StackOverflow의 ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript)를 방문해 심도 있는 논의를 읽어보세요.

#### ES6 사용자 정의 오류 클래스

> **경고:** Babel 버전 7 미만으로 사용자 정의 오류 클래스를 처리하려면 {{jsxref("Object.defineProperty()")}} 메서드를 사용해 정의해야만 합니다. 그렇지 않으면 오래된 Babel 및 다른 트랜스파일러가 [추가 설정](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) 없이 코드를 처리할 수 없습니다.

> **참고:** ES2015 클래스를 사용할 때, 일부 브라우저는 <code>CustomError</code> 생성자를 스택 트레이스에 포함합니다.

```js
class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.log(e.foo); //baz
  console.log(e.message); //bazMessage
  console.log(e.stack); //stacktrace
}
```

#### ES5 사용자 정의 오류 객체

<div class="warning"><p>프로토타입 선언을 사용하면 모든 브라우저가 <code>CustomError</code> 생성자를
스택 트레이스에 포함합니다.</p></div>

```js
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}


try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.log(e.foo); //baz
  console.log(e.message) ;//bazMessage
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
