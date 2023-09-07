---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
---

{{jsSidebar("Errors")}}

## 메세지

```
    TypeError: "x" is not a constructor
    TypeError: Math is not a constructor
    TypeError: JSON is not a constructor
    TypeError: Symbol is not a constructor
    TypeError: Reflect is not a constructor
    TypeError: Intl is not a constructor
    TypeError: SIMD is not a constructor
    TypeError: Atomics is not a constructor
```

## 오류 유형

{{jsxref("TypeError")}}

## 뭐가 잘못된 거죠?

객체 혹은 변수를 생성자로 사용하려고 했습니다, 하지만 객체(혹은 변수)가 생성자가 아닙니다. 생성자가 무엇인지에 대한 자세한 정보는 {{Glossary("constructor")}} 혹은 [`new` operator](/ko/docs/Web/JavaScript/Reference/Operators/new) 를 참조하시기 바랍니다.

{{jsxref("String")}} 혹은 {{jsxref("Array")}}와 같이 `new`,를 사용하여 생성할 수 있는 전역 객체들이 있습니다. 하지만 일부 전역 객체들은 그렇지 않고 속성과 메서드가 정적입니다. 다음의 자바스크립트 표준 내장 객체들은 생성자가 아닙니다: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("SIMD")}}, {{jsxref("Atomics")}}.

[Generator functions](/ko/docs/Web/JavaScript/Reference/Statements/function*) 또한 생성자로 사용될 수 없습니다.

## 예시

### 유효하지 않은 경우

```js example-bad
var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {}
var obj = new f();
// TypeError: f is not a constructor
```

### car 생성자

자동차(car) 객체를 만들고자 한다고 가정합니다. 이 객체의 타입을 `car`라 하고 make, model, and year 세 개의 프로퍼티를 갖습니다. 이를 위해 다음과 같은 함수를 작성할 것입니다:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

이제 다음과 같이 `mycar` 라 불리는 객체를 생성할 수 있습니다:

```js
var mycar = new Car("Eagle", "Talon TSi", 1993);
```

### 프라미스 이용

즉시 실행되는 프라미스를 반환하는 경우에는 *새로운 Promise(...)*를 생성할 필요가 없습니다.

아래는 올바른 방법이 아닙니다([프라미스 생성자](/ko/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor)가 제대로 호출되고 있지 않습니다). `TypeError: this is not a constructor` 예외를 던지게 됩니다:

```js example-bad
return new Promise.resolve(true);
```

대신, [Promise.resolve()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) 혹은 [Promise.reject()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) [정적 메서드](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>)를 사용하십시오:

```js
// This is legal, but unnecessarily long:
return new Promise((resolve, reject) => {
  resolve(true);
});

// Instead, return the static method:
return Promise.resolve(true);
return Promise.reject(false);
```

## 같이 보기

- {{Glossary("constructor")}}
- [`new` operator](/ko/docs/Web/JavaScript/Reference/Operators/new)
