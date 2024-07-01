---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
---

{{JSRef}}

제너레이터의 **`throw()`** 메서드는 현재 중단 된 위치에서 제너레이터에 `throw` 문이 삽입되는 것처럼 작동하여 제너레이터의 오류 조건을 알려주고 오류를 처리하거나 정리 작업을 수행하며 제너레이터를 종료할 수 있도록 합니다.

## 구문

<!-- We don't usually add the "generatorObject" subject for methods. However, it is necessary here, because "throw" is a keyword, so otherwise it's invalid syntax. -->

```js
generatorObject.throw(exception);
```

## 매개변수

- `exception`
  - : 발생시킬 예외입니다. 디버깅을 위해 {{jsxref("Error")}} 인스턴스(`instanceof` {{jsxref("Error")}})로 만드는 것이 유용합니다.

## 반환 값

예외가 [`try...catch`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch)에서 발생하고 제너레이터가 재개하여 더 많은 값을 yield하면 다음 두 가지 속성을 가진 객체를 반환합니다.

- `done`
  - : 불리언 값입니다.
    - 제너레이터가 제어 흐름의 끝에 도달한 경우 `true`입니다.
    - 제너레이터가 더 많은 값을 생성 할 수 있다면 `false`입니다.
- `value`
  - : 다음 yield 식에서 산출된 값입니다.

### 예외

예외가 `try...catch`에서 발생하지 않으면 `throw()`로 전달 된 `exception`은 제너레이터에서 취급하지 않습니다.

## 설명

`throw()` 메소드는 호출 될 때, 이는 현재 중단 된 위치의 제너레이터에 삽입된 `throw exception;` 문 처럼 보일 수 있습니다. `exception`은 `throw()` 메서드에 전달 된 예외입니다. 따라서 일반적인 흐름에서 `throw(exception)`을 호출하면 제너레이터가 throw됩니다. 그러나 yield 식이 `try...catch` 블록으로 감싸졌 다면, 오류를 포착할 수 있으며 제어 흐름은 오류 처리 후 재개하거나 정상적으로 종료 하도록 진행됩니다.

## 예제

### throw() 사용하기

다음 예제에서는 간단한 제너레이터와 `throw` 메서드를 사용하여 오류를 발생시키는 것을 보여 줍니다. 오류는 보통 {{jsxref("Statements/try...catch", "try...catch")}} 블록으로 처리합니다.

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error("Something went wrong"));
// "Error caught!"
// { value: 42, done: false }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/function*", "function*")}}
