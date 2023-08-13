---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
---

{{jsSidebar("Operators")}}

`yield` 키워드는 제너레이터 함수 ({{jsxref("Statements/function*", "function*")}} 또는 [레거시 generator](/ko/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function) 함수)를 중지하거나 재개하는데 사용됩니다.

## 문법

```js-nolint
[rv] = yield [expression];
```

- `expression`
  - : 제너레이터 함수에서 [제너레이터 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)을 통해 반환할 값을 정의합니다. 값이 생략되면, `undefined를 반환합니다.`
- `rv`
  - : 제너레이터 실행을 재개 하기 위해서, optional value을 제너레이터의 `next()` 메서드로 전달하여 반환합니다.

## 설명

`yield 키워드`는 제너레이터 함수의 실행을 중지시키거나 그리고 `yield` 키워드 뒤에오는 표현식\[expression]의 값은 제너레이터의 caller로 반환된다. 제너레이터 버전의 `return` 키워드로 생각 할 수 있다.

`yield` 키워드는 실질적으로 value 와 done 이라는 두 개의 속성을 가진 `IteratorResult` 객체를 반환한다. `value` 속성은 `yield` 표현(expression)의 실행 결과를 나타내고, `done` 속성은 제너레이터 함수가 완전히 종료되었는지 여부를 불린(Boolean) 형태로 보여줍니다.

yield 표현식에서 중지되면 ,제너레이터의 next()가 메서드가 호출될 때까지 제너레이터의 코드 실행이 중지된다. 제너레이터의 next()메서드를 호출할 때마다 제너레이터는 실행을 재개하며 그리고 다음의 같은 경우에 진행될 때 실행된다:

- `yield 는` 제너레이터가 한번 멈추게 하고 제너레이터의 새로운 값을 반환한다. 다음번의 next()가 호출된 후, yield 이후에 선언된 코드가 바로 실행된다.
- {{jsxref("Statements/throw", "throw")}}는 제네레이터에서 예외를 설정할 때 사용된다. 예외가 발생할 경우 제너레이터의 전체적으로 실행이 중지되고, 그리고 다시 켜는 것이 일반적으로 실행됩니다.
- 제너레이터 함수가 종료가 되었다; 이 경우, 제너레이터 실행이 종료되고 `IteratorResult` 는 `caller` 로 값이 {{jsxref("undefined")}}이고 done의 값이 true 로 리턴한다.
- {{jsxref("Statements/return", "return")}} 문에 도달했다. 이 경우에는, 이 값이 종료되고 `IteratorResult` 는 `caller` 로 `return` 문에 의해 반환되는 값과 done의 값이 true 로 리턴한다.

만약에 optional value가 제너레이터의 next() 메서드로 전달되면, optional value는 제너레이터의 현재 yield의 연산으로 반환되는 값이 된다.

generator 코드 경로, yield연산자, {{jsxref("Generator.prototype.next()")}}에 이르기까지 새로운 시작 값을 지정할 수 있는 능력과 제네레이터는 커다란 힘과 제어를 제공한다.

## 예시

다음 코드는 제너레이터 함수의 선언의 예시이다.

```js
function* foo() {
  var index = 0;
  while (index <= 2)
    // when index reaches 3,
    // yield's done will be true
    // and its value will be undefined;
    yield index++;
}
```

제너레이터 함수가 정의되면 , 아래 코드와 보여지는 것처럼 iterator로 만들어 사용할 수 있다.

```js
var iterator = foo();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [The Iterator protocol](/ko/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}
