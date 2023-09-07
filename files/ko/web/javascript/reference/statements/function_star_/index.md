---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
---

{{jsSidebar("Statements")}}

**`function*`** 선언 (끝에 별표가 있는 `function` keyword) 은 _generator function_ 을 정의하는데, 이 함수는 {{jsxref("Global_Objects/Generator","Generator")}} 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}

generator function 은 {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} 생성자와 {{jsxref("Operators/function*", "function* expression")}} 을 사용해서 정의할 수 있습니다.

## 문법

```js
    function* name([param[, param[, ... param]]]) {
       statements
    }
```

- `name`
  - : 함수명.
- `param`
  - : 함수에 전달되는 인수의 이름. 함수는 인수를 255개까지 가질 수 있다.
- `statements`
  - : 함수의 본체를 구성하는 구문들.

## 설명

Generator는 빠져나갔다가 나중에 다시 돌아올 수 있는 함수입니다. 이때 컨텍스트(변수 값)는 출입 과정에서 저장된 상태로 남아 있습니다.

Generator 함수는 호출되어도 즉시 실행되지 않고, 대신 함수를 위한 [Iterator](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterator) 객체가 반환됩니다. Iterator의 `next()` 메서드를 호출하면 Generator 함수가 실행되어 **{{jsxref("Operators/yield", "yield")}}** 문을 만날 때까지 진행하고, 해당 표현식이 명시하는 Iterator로부터의 반환값을 반환합니다. **{{jsxref("Operators/yield*", "yield*")}}** 표현식을 마주칠 경우, 다른 Generator 함수가 위임(delegate)되어 진행됩니다.

이후 `next()` 메서드가 호출되면 진행이 멈췄던 위치에서부터 재실행합니다. `next()` 가 반환하는 객체는 `yield`문이 반환할 값(yielded value)을 나타내는 `value` 속성과, Generator 함수 안의 모든 `yield` 문의 실행 여부를 표시하는 boolean 타입의 `done` 속성을 갖습니다. `next()` 를 인자값과 함께 호출할 경우, 진행을 멈췄던 위치의 `yield` 문을 `next()` 메서드에서 받은 인자값으로 치환하고 그 위치에서 다시 실행하게 됩니다.

## 예시

### 간단한 예제

```js
function* idMaker() {
  var index = 0;
  while (index < 3) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...
```

### yield\* 를 사용한 예제

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Generator 에 인자값을 넘기는 예제

```js
function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();
gen.next("pretzel"); // pretzel
gen.next("california"); // california
gen.next("mayonnaise"); // mayonnaise
```

### Generator 는 생성자로서 사용될 수 없다

```js
function* f() {}
var obj = new f(); // throws "TypeError: f is not a constructor"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 항목

- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/ko/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function declaration")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- Other web resources:

  - [Regenerator](http://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia — JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Hemanth.HM: The New gen of \*gen(){}](https://www.youtube.com/watch?v=ZrgEZykBHVo&list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&index=1)
  - [Task.js](http://taskjs.org/)
