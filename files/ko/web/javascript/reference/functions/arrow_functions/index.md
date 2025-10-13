---
title: 화살표 함수 표현식
slug: Web/JavaScript/Reference/Functions/Arrow_functions
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Functions")}}

화살표 함수 표현식(**화살표 함수 expression**)은 [함수 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)에 대한 간결한 대안으로, 약간의 의미적 차이와 의도적인 사용상의 제한을 가지고 있습니다.

- 화살표 함수에는 자체 {{Glossary("binding", "바인딩")}}이 [`this`](/ko/docs/Web/JavaScript/Reference/Operators/this)에 없으며, [`인수`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 또는 [`super`](/ko/docs/Web/JavaScript/Reference/Operators/super)로 사용해야 하며, [메서드](/ko/docs/Glossary/Method)로 사용하면 안 됩니다.
- 화살표 함수는 [생성자](/ko/docs/Glossary/Constructor)로 사용할 수 없습니다. [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로 호출하면 {{jsxref("TypeError")}}가 반환됩니다. [`new.target`](/ko/docs/Web/JavaScript/Reference/Operators/new.target) 키워드에 대한 액세스 권한도 없습니다.
- 화살표 함수는 함수 내부에서 [`yield`](/ko/docs/Web/JavaScript/Reference/Operators/yield)를 사용할 수 없으며 제너레이터 함수로 생성할 수 없습니다.

{{InteractiveExample("JavaScript Demo: Functions =>")}}

```js interactive-example
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
```

## 구문

```js-nolint
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

매개변수 내 [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters), [기본값 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters), [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring)이 지원되며 항상 괄호 안에 넣어야 합니다.

```js-nolint
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
```

화살표 함수는 표현식 앞에 `async` 키워드를 붙여서 [`async`](/ko/docs/Web/JavaScript/Reference/Statements/async_function)로 지정할 수 있습니다.

```js-nolint
async param => expression
async (param1, param2, ...paramN) => {
  statements
}
```

## 설명

기존의 익명 함수를 가장 간단한 화살표 함수로 단계별로 분해해 보겠습니다. 이 과정에서 각 단계는 유효한 화살표 함수입니다.

> [!NOTE]
> 기존 함수 표현식과 화살표 함수는 구문 외에도 더 많은 차이점이 있습니다. 다음 몇 개의 하위 섹션에서 두 함수의 동작 차이에 대해 자세히 소개하겠습니다.

```js-nolint
// 기존의 익명 함수
(function (a) {
  return a + 100;
});

// 1. "function"이라는 단어를 제거하고 인자와 여는 대괄호 사이에 화살표를 배치합니다.
(a) => {
  return a + 100;
};

// 2. 중괄호와 "return"이라는 단어를 제거하면 반환이 암시됩니다.
(a) => a + 100;

// 3. 매개변수의 괄호를 제거합니다.
a => a + 100;
```

위의 예에서는 매개변수 주위의 괄호와 함수 본문 주위의 중괄호를 모두 생략할 수 있습니다. 그러나 특정 경우에만 생략할 수 있습니다.

괄호는 함수에 하나의 간단한 매개변수가 있는 경우에만 생략할 수 있습니다. 매개 변수가 여러 개 있거나 없거나 기본값인 경우와 구조 분해 할당된 매개 변수 또는 나머지 매개 변수가 있는 경우 매개 변수 목록 주위에 괄호를 사용해야 합니다.

```js
// 기존의 익명 함수
(function (a, b) {
  return a + b + 100;
});

// 화살표 함수
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// 기존의 익명 함수 (매개변수가 없음)
(function () {
  return a + b + 100;
});

// 화살표 함수 (매개변수가 없음)
() => a + b + 100;
```

중괄호는 함수가 직접 표현식을 반환하는 경우에만 생략할 수 있습니다. 본문에 추가로 처리하는 구문이 있는 경우 중괄호가 필요하며 `return` 키워드도 마찬가지입니다. 화살표 함수는 무엇을 언제 반환할지 추측할 수 없습니다.

```js
// 기존의 익명 함수
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// 화살표 함수
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

화살표 함수는 항상 이름이 지정되지 않습니다. 화살표 함수가 스스로를 호출해야 하는 경우 명명된 함수 표현식을 대신 사용하세요. 화살표 함수를 변수에 할당하여 이름을 지정할 수도 있습니다.

```js
// 기존 함수
function bob(a) {
  return a + 100;
}

// 화살표 함수
const bob2 = (a) => a + 100;
```

### 함수 내부

화살표 함수는 간결한 본문이나 일반적인 블록 형태의 본문을 가질 수 있습니다.

간결한 본문에서는 암시적 반환값이 되는 단일 표현식만 지정됩니다. 블록 본문에서는 명시적인 `return` 문을 사용해야 합니다.

```js
const func = (x) => x * x;
// 간결한 본문 구문, 암시적 "반환"

const func2 = (x, y) => {
  return x + y;
};
// 블록 본문을 포함, 명시적 "반환" 필요
```

간결한 본문 구문은 `(params) => { object: literal }`을 사용하여 객체 리터럴을 반환하면 예상대로 작동하지 않습니다.

```js-nolint example-bad
const func = () => { foo: 1 };
// func()를 호출하면 정의되지 않은 값이 반환됩니다.

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

JavaScript는 화살표 뒤에 오는 토큰이 왼쪽 중괄호가 아닌 경우에만 화살표 함수에 간결한 본문이 있는 것으로 간주합니다. 중괄호({}) 안의 코드는 일련의 구문으로 파싱되며, 여기서 `foo`는 객체 리터럴의 키가 아닌 [label](/ko/docs/Web/JavaScript/Reference/Statements/label)이 됩니다.

이 문제를 해결하려면 객체 리터럴을 괄호로 묶으면 됩니다.

```js example-good
const func = () => ({ foo: 1 });
```

### 메서드로 사용할 수 없습니다

화살표 함수 표현식은 `this`가 없기 때문에 메서드가 아닌 함수에만 사용해야 합니다. 메서드로 사용하려고 하면 어떤 일이 일어나는지 살펴봅시다.

```js
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }
```

또 다른 예는 {{jsxref("Object.defineProperty()")}}와 관련된 것입니다.

```js
"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
```

[클래스](/ko/docs/Web/JavaScript/Reference/Classes)의 내부에는 `this`가 있으므로, 화살표 함수는 [클래스 필드](/ko/docs/Web/JavaScript/Reference/Classes/Public_class_fields)가 클래스의 `this` 컨텍스트 위에 닫힐 때 작동합니다. 그러면 화살표 함수 내부의 `this`가 인스턴스 (또는 [정적 필드](/ko/docs/Web/JavaScript/Reference/Classes/static)의 경우 클래스 자체)를 올바르게 가리키게 됩니다. 그러나 함수 자체의 바인딩이 아닌 [클로저](/ko/docs/Web/JavaScript/Guide/Closures)이므로 실행 컨텍스트에 따라 `this`의 값이 변경되지 않습니다.

```js
class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  };
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// 정상적인 메서드라면 이 경우에는 정의되지 않아야 합니다.
```

화살표 함수 속성은 일반 메서드와 동일하기 때문에 흔히 "자동 바인딩 메서드"라고 불립니다.

```js
class C {
  a = 1;
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.a);
  }
}
```

> [!NOTE]
> 클래스 필드는 프로토타입이 아닌 인스턴스에 정의되므로 인스턴스를 생성할 때마다 새 함수 참조가 생성되고 새 클로저가 할당되어 일반적인 언바운드 메서드보다 메모리 사용량이 늘어날 수 있습니다.

비슷한 이유로 [`call()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), [`bind()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 메서드는 화살표 함수에서 호출할 때 유용하지 않습니다. 화살표 함수는 화살표 함수가 정의된 범위를 기반으로 `this`을 설정하고 함수가 호출되는 방식에 따라 `this` 값이 변하지 않기 때문입니다.

### 인수의 바인딩이 없습니다

화살표 함수에는 자체 [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체가 없습니다. 따라서 이 예제에서 `arguments`는 둘러싸는 범위의 인수를 참조합니다.

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo의 암시적 인자 바인딩입니다. arguments[0]은 n입니다.
  return f();
}

foo(3); // 3 + 3 = 6
```

> [!NOTE]
> [strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler)에서는 `arguments`는 변수를 선언할 수 없으므로 위의 코드는 구문 오류가 됩니다. 이렇게 하면 `arguments`의 범위 지정 효과를 훨씬 더 쉽게 이해할 수 있습니다.

대부분의 경우, [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)를 사용하는 것이
`arguments` 객체를 사용하는 것보다 좋은 대안입니다.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### 생성자로 사용할 수 없습니다

화살표 함수는 생성자로 사용할 수 없으며 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 호출하면 에러가 발생합니다. 또한 [`prototype`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function) 속성이 없습니다.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

### 제너레이터로 사용할 수 없습니다

[`yield`](/ko/docs/Web/JavaScript/Reference/Operators/yield) 키워드는 화살표 함수 본문에서 사용할 수 없습니다. (화살표 함수 내에 중첩된 제너레이터 함수 내에서 사용하는 경우를 제외하고는요). 따라서 화살표 함수는 제너레이터로 사용할 수 없습니다.

### 화살표 앞 줄 바꿈

화살표 함수에는 매개변수와 화살표 사이에 줄 바꿈이 포함될 수 없습니다.

```js-nolint example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

서식을 지정하려면 아래와 같이 화살표 뒤에 줄 바꿈을 넣거나 함수 본문 주위에 괄호/중괄호를 사용할 수 있습니다. 매개변수 사이에 줄 바꿈을 넣을 수도 있습니다.

```js-nolint
const func = (a, b, c) =>
  1;

const func2 = (a, b, c) => (
  1
);

const func3 = (a, b, c) => {
  return 1;
};

const func4 = (
  a,
  b,
  c,
) => 1;
```

### 화살표의 우선 순위

화살표 함수의 화살표는 연산자가 아니지만, 화살표 함수에는 일반 함수에 비해 [연산자 우선순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence)가 다른 특수한 구문 분석 규칙이 있습니다.

```js-nolint example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

`=>`는 대부분의 연산자보다 우선순위가 낮으므로 `callback || ()`이 화살표 함수의 인수 목록으로 구문 분석되지 않도록 괄호를 사용해야 합니다.

```js example-good
callback = callback || (() => {});
```

## 예제

### 화살표 함수 사용하기

```js
// 빈 화살표 함수는 정의되지 않은 값을 반환합니다.
const empty = () => {};

(() => "foobar")();
// "foobar"를 반환합니다.
// (즉시 호출되는 함수 표현식입니다.)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// 간단한 배열 필터링, 매핑 등
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// 보다 간결한 프로미스 체인
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// 시각적으로 더 쉽게 구문 분석할 수 있는 매개변수 없는 화살표 함수
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
```

### call, bind, apply 메서드 사용하기

[`call()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), [`bind()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 메서드는 각 메서드의 범위를 설정하므로 기존 함수에서 예상되는 대로 작동합니다.

```js
const obj = {
  num: 100,
};

// globalThis에 "num"을 설정하여 사용하지 않는 방법을 표시합니다.
globalThis.num = 42;

// "this"에서 작동하는 간단한 기존 함수
const add = function (a, b, c) {
  return this.num + a + b + c;
};

console.log(add.call(obj, 1, 2, 3)); // 106
console.log(add.apply(obj, [1, 2, 3])); // 106
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 106
```

화살표 함수의 경우, `add` 함수는 기본적으로 `globalThis`(전역) 범위에서 생성되므로 `this`가 `globalThis`라고 가정합니다.

```js
const obj = {
  num: 100,
};

// globalThis에 "num"을 설정하여 선택되는 방식을 표시합니다.
globalThis.num = 42;

// 화살표 함수
const add = (a, b, c) => this.num + a + b + c;

console.log(add.call(obj, 1, 2, 3)); // 48
console.log(add.apply(obj, [1, 2, 3])); // 48
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48
```

화살표 함수를 사용하면 가장 큰 이점은 {{domxref("setTimeout()")}}, {{domxref("EventTarget/addEventListener()", "EventTarget.prototype.addEventListener()")}}와 같이 함수가 적절한 범위에서 실행되도록 하기 위해 일반적으로 일종의 클로저, `call()`, `apply()` 또는 `bind()`가 필요한 메서드에 사용할 수 있다는 것입니다.

기존 함수 표현식을 사용하면 이와 같은 코드가 예상대로 작동하지 않습니다.

```js
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // 함수는 window 범위에서 실행됩니다.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // "count" 속성이 window 범위에 없기 때문에 "NaN"을 기록합니다.
```

화살표 함수를 사용하면 `this`의 범위를 더 쉽게 보존할 수 있습니다.

```js
const obj = {
  count: 10,
  doSomethingLater() {
    // 메서드 구문은 "this"를 "obj" 컨텍스트에 바인딩합니다.
    setTimeout(() => {
      // 화살표 함수에는 자체 바인딩이 없고
      // 함수 호출로서 setTimeout은 바인딩 자체를 생성하지 않으므로
      // 외부 메서드의 "obj" 컨텍스트가 사용됩니다.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // 11을 기록합니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [함수](/ko/docs/Web/JavaScript/Guide/Functions)
- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- [`함수` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)
- [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) on hacks.mozilla.org (2015)
