---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

**`for...of` 명령문**은 [반복 가능한 객체](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)에서 가져온 값들의 시퀀스를 대상으로 루프를 실행합니다.
반복 가능한 객체에는 {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("NodeList")}}(및 기타 DOM 컬렉션)와 같은 내장 인스턴스뿐만 아니라, [arguments](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체, [제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/function*)에서 생성된 [제너레이터](<(/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)>), 그리고 사용자 정의 iterable도 포함됩니다.

{{InteractiveExample("JavaScript Demo: for...of statement")}}

```js interactive-example
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## 구문

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : 각 반복에서 시퀀스의 값을 받습니다. [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const), [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let), [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var), [`using`](/ko/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/ko/docs/Web/JavaScript/Reference/Statements/await_using) 으로 선언할 수도있고 [`할당`](/ko/docs/Web/JavaScript/Reference/Operators/Assignment) 대상(예: 이미 선언된 변수, 객체의 속성, [`구조 분해 패턴`](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring))이 될 수도 있습니다. `var`로 선언된 변수는 루프에 국한되지 않으며, 즉 for...of 루프와 동일한 스코프에 존재합니다.
- `iterable`
  - : 반복 가능한 객체. 루프가 동작하는 값들의 시퀀스 원천입니다.
- `statement`
  - : 매 반복마다 실행되는 문. `variable`을 참조할 수 있습니다. 여러 문을 실행하려면 [`블록 문`](/ko/docs/Web/JavaScript/Reference/Statements/block)을 사용할 수 있습니다.

## 설명

`for...of` 루프는 반복 가능한 객체에서 가져온 값을 순차적으로 하나씩 처리합니다. 루프가 값에 대해 수행하는 각 동작을 **반복(iteration)** 이라고 하며, 루프가 iterable을 순회한다고 표현합니다. 각 반복에서는 현재 시퀀스 값과 관련된 문(statement)이 실행됩니다.

`for...of` 루프가 iterable을 순회할 때, 먼저 해당 iterable의 [`Symbol.iterator`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 메서드를 호출하여 이터레이터(iterator)를 얻고, 이어서 그 이터레이터의 [`next()`](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) 메서드를 반복적으로 호출하여 `variable`에 할당할 값의 시퀀스를 생성합니다.

`for...of` 루프는 이터레이터가 완료되면(`next()` 호출 결과가 `{ done: true }`인 경우) 종료됩니다. 다른 반복문과 마찬가지로, 루프 본문에서는 제어 흐름 문을 사용할 수 있습니다.

- [`break`](/ko/docs/Web/JavaScript/Reference/Statements/break): 현재 문 실행을 중단하고 루프 다음 문으로 이동합니다.
- [`continue`](/ko/docs/Web/JavaScript/Reference/Statements/continue): 현재 문 실행을 중단하고 루프의 다음 반복으로 이동합니다.

만약 `for...of` 루프가 조기에 종료된다면(예: `break` 문을 만나거나 에러가 발생한 경우), 이터레이터의 [`return()`](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) 메서드가 호출되어 필요한 정리 작업을 수행합니다.

`for...of`의 `variable` 부분에는 `=` 연산자 앞에 올 수 있는 어떤 표현식이든 사용할 수 있습니다. 루프 본문 안에서 재할당하지 않는다면 {{jsxref("const")}}를 사용할 수 있습니다(반복마다 새로운 변수가 생성되므로 반복 간에는 값이 달라질 수 있습니다). 그렇지 않다면 {{jsxref("let")}}을 사용할 수 있습니다.

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

> [!NOTE]
> 각 반복에서는 새로운 변수가 생성됩니다. 루프 본문 안에서 변수를 재할당하더라도 iterable(이 경우 배열)의 원래 값에는 영향을 주지 않습니다.

{{jsxref("using")}} 또는 {{jsxref("await using")}} 선언으로 변수를 선언하면, 루프 반복이 끝날 때마다 해당 변수가 해제(dispose)됩니다. (`await using`은 반복 종료 시 암묵적으로 `await`를 수행합니다.) 그러나 루프가 조기에 종료되면, 아직 방문되지 않은 이터레이터의 값들은 해제되지 않습니다(현재 값은 해제됨).

```js
const resources = [dbConnection1, dbConnection2, dbConnection3];

for (using dbConnection of resources) {
  dbConnection.query("...");
  // dbConnection은 여기서 해제(dispose)됩니다
}
```

여러 개의 로컬 변수를 할당하려면 [`구조 분해 할당`](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring)을 사용할 수 있고, `for (x.y of iterable)`처럼 속성 접근자를 사용해 객체의 속성에 값을 할당할 수도 있습니다.

하지만, 특별한 규칙에 따라 변수 이름으로 async는 사용할 수 없습니다. 이는 잘못된 문법입니다.

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: for-of 루프의 좌변은 'async'가 될 수 없습니다.
```

이는 for `(async of => {};;)`와 같은 올바른 코드([`for`](/ko/docs/Web/JavaScript/Reference/Statements/for))와 문법적 모호성을 피하기 위한 것입니다.

마찬가지로, `using` 선언을 사용할 때는 변수 이름을 `of`로 지정할 수 없습니다.

```js-nolint example-bad
for (using of of []); // SyntaxError
```

이는 `using`이 도입되기 전의 유효한 코드 `for (using of [])`와 문법적 모호성을 피하기 위한 것입니다.

## 예제

### 배열(Array) 반복

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### 문자열(String) 반복

문자열은 [`유니코드 코드 포인트 단위`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)로 반복됩니다.

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### 타입 배열(TypedArray) 반복

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Map 반복

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Set 반복

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### arguments 객체 반복

{{jsxref("arguments")}} 객체를 반복하여 함수에 전달된 모든 매개변수를 확인할 수 있습니다.

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3
```

### NodeList 반복

[`NodeList`](/ko/docs/Web/API/NodeList) DOM 컬렉션을 반복하여, [`<article>`](/ko/docs/Web/HTML/Reference/Elements/article) 요소의 직계 자손인 문단(paragraph)에 `read` 클래스를 추가합니다.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### 사용자 정의 반복(iterable) 객체 반복

`[Symbol.iterator]()` 메서드를 가진 객체를 사용하여 사용자 정의 반복자를 반환할 수 있습니다.

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

`[Symbol.iterator]()` 메서드가 있는 객체 반복

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

반복 가능한 이터레이터 (`자신`을 반환하는 `Symbol.iterator()` 메서드를 가진 iterator)는 `for...of`처럼 반복 가능한 구문에서 iterator를 사용할 수 있도록 하는 일반적인 방법입니다.

```js
let i = 1;

const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### 제너레이터(generator) 반복

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### 조기 종료(Early exiting)

첫 번째 루프에서 `break` 문을 실행하면 루프가 조기 종료됩니다. 이때 반복자는 아직 완료되지 않았으므로, 두 번째 루프는 첫 번째 루프가 중단된 위치에서 계속됩니다.

```js
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("이 문자열은 출력되지 않습니다.");
}
// 1

// 같은 반복기를 사용한 또 다른 루프
// 이전 루프가 멈춘 지점에서 계속 실행됩니다.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// 반복기가 모두 사용되었습니다.
// 이 루프는 반복을 실행하지 않습니다.
for (const value of iterator) {
  console.log(value);
}
// [출력 없음]
```

제너레이터는 [`return()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) 메서드를 구현하여, 루프 종료 시 제너레이터 함수를 조기 종료하도록 합니다. 이로 인해 제너레이터는 루프 간 재사용이 불가능합니다.

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("이 문자열은 출력되지 않습니다.");
}
// 1

// 생성기가 모두 사용되었습니다.
// 이 루프는 반복을 실행하지 않습니다.
for (const value of generator) {
  console.log(value);
}
// [출력 없음]
```

### for...of와 for...in의 차이

`for...in`과 `for...of` 모두 반복문이지만, 반복 대상이 다릅니다.

{{jsxref("for...in")}} 문은 객체의 [열거 가능한 속성(enumerable properties)](/ko/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)을 반복하며, `for...of` 문은 [반복 가능한 객체](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable_protocol)가 정의한 값들을 반복합니다.

다음 예제는 `for...of` 루프와 `for...in` 루프를 {{jsxref("Array")}}로 사용했을 때의 차이를 보여줍니다.

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

`iterable` 객체는 `Object.prototype`와 `Array.prototype`을 상속받았기 때문에 `objCustom`와 `arrCustom` 속성을 가지고 있습니다.

`for...in` 루프는 `iterable` 객체의 [열거 가능한 속성](/ko/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)만 로그에 출력합니다.
배열의 값 `3`, `5`, `7`이나 `"hello"`는 속성이 아니므로 로그에 나타나지 않습니다. 배열의 인덱스와 `arrCustom`, ob`jCustom 같은 실제 속성만 출력됩니다. 왜 이러한 속성들이 반복되는지 궁금하다면 [배열 반복과 for...in](/ko/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) 문서를 참고하세요.

두 번째 루프는 [`Object.hasOwn()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)로 해당 속성이 객체 고유의 속성인지 확인합니다.
고유 속성인 경우만 로그에 출력됩니다. `0`, `1`, `2`, `foo는` 고유 속성이므로 출력되고, `arrCustom`, `objCustom은` 상속 속성이므로 출력되지 않습니다.

`for...of` 루프는 배열(Array)로서 [반복 가능한 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)가 정의한 값들을 반복하고 출력합니다. 배열의 값 `3`, `5`, `7`은 출력되지만, 객체의 속성은 출력되지 않습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
