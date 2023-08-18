---
title: Iteration protocols
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{jsSidebar("More")}}

**순회 프로토콜**은 새로운 내장 객체 또는 구문이 아닌 프로토콜입니다. 이러한 프로토콜은 몇 가지 규칙에 따라 모든 객체에서 구현될 수 있습니다.

프로토콜은 [순회 가능 프로토콜](#순회_가능_프로토콜)과 [순회자 프로토콜](#순회자_프로토콜)로 두 가지가 있습니다.

## 순회 가능 프로토콜

**순회 가능 프로토콜**을 사용하면 JavaScript 객체를 {{jsxref("Statements/for...of", "for...of")}} 구조에서 반복되는 값과 같은 순회 동작을 정의하거나 사용자 지정할 수 있습니다. {{jsxref("Object")}}와는 달리 {{jsxref("Array")}} 또는 {{jsxref("Map")}}과 같은 일부 내장 유형은 기본 순회 동작이 있는 [내장 순회 가능](#내장_순회_가능) 항목입니다.

**순회 가능**이 되기위해 객체는 반드시 `@@iterator` 메서드를 구현해야 합니다. 즉, 객체(또는 [프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)의 객체 중 하나)에 상수 {{jsxref("Symbol.iterator")}}를 통해 이용할 수 있는 `@@iterator` 키가 있는 속성이 있어야 합니다.

- `[Symbol.iterator]`
  - : [순회자 프로토콜](#순회자_프로토콜)을 준수하는 객체를 반환하는 인수가 없는 함수.

객체를 순회해야 할 때마다(예: {{jsxref("Statements/for...of", "for...of")}} 루프 시작 시) `@@iterator` 메서드는 인수 전달 없이 호출되고, 반환된 **순회자**는 반복할 값을 가져오는 데 사용됩니다.

이 인수가 없는 함수는, 순회 가능 객체의 메서드로 호출됩니다. 따라서 함수 내에서 `this` 키워드를 사용하여 순회 가능 객체의 속성에 접근하고 순회 중에 제공할 항목을 결정할 수 있습니다.

이 함수는 평범한 함수이거나 제너레이터 함수일 수 있고, 호출 시 순회자 객체가 반환됩니다. 제너레이터 함수 내에서 각 항목은 `yield`를 사용하여 제공될 수 있습니다.

## 순회자 프로토콜

**순회자 프로토콜**은 유한하거나 무한한 일련의 값을 생성하는 표준 방법을 정의하고, 모든 값이 생성되었을 때 잠재적으로 반환 값을 정의합니다.

객체는 다음 의미 체계를 사용하여 `next()` 메서드를 구현할 때 순회자가 됩니다.

- `next()`
  - : 0개 또는 1개의 인수를 허용하고 `IteratorResult` 인터페이스(아래 참조)를 준수하는 객체를 반환하는 함수입니다. 내장 언어 기능(`for...of` 등)이 순회자를 사용할 때 객체가 아닌 값(`false` 또는 `undefined` 등)이 반환되면 {{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`)가 발생합니다.

모든 순회자 프로토콜 메서드(`next()`, `return()`, 그리고 `throw()`)는 `IteratorResult` 인터페이스를 구현하는 객체를 반환해야 합니다. 다음 속성이 반드시 있어야 합니다.

- `done` {{optional_inline}}

  - : 불리언 값으로, 순회자가 시퀀스에서 다음 값을 생성할 수 있는 경우엔 `false`입니다. (이는 `done` 속성을 지정하지 않는 것과 같습니다.)

    순회자가 시퀀스를 완료한 경우에 이 값은 `true`입니다. 이때 `value`는 순회자의 반환 값을 선택적으로 지정합니다.

- `value` {{optional_inline}}
  - : 순회자가 반환하는 모든 JavaScript 값입니다. `done`이 `true`이면 생략할 수 있습니다.

실제로 두 속성이 모두 엄격하게 요구되진 않습니다. 속성이 없는 객체가 반환되면 사실상 `{ done: false, value: undefined }`와 동일합니다.

순회자가 `done: true`로 결과를 반환하면 `next()`에 대한 모든 후속 호출도 `done: true`를 반환할 것으로 예상되지만 이는 언어 수준에서 강제되지 않습니다.

`next` 메서드는 메서드 본문에서 사용할 수 있는 값을 받을 수 있습니다. 내장 언어 기능은 어떠한 값도 전달하지 않습니다. [제너레이터](/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)의 `next` 메서드로 전달된 값은 해당 `yield` 표현식의 값이 됩니다.

순회자는 선택적으로 <strong>`return(value)`</strong>와 **`throw(exception)`** 메서드를 구현할 수 있습니다. 이 메서드는 호출될 때 호출자가 순회를 완료했으며, 필요한 정리(예: 데이터베이스 연결 닫기)를 수행할 수 있음을 순회자에게 알립니다.

- `return(value)` {{optional_inline}}
  - : 0개 또는 1개의 인수를 허용하고 `IteratorResult` 인터페이스를 준수하는 객체를 반환하는 함수입니다. 일반적으로 `value`는 전달된 `vlaue`와 같고 `done`은 `true`입니다. 이 메서드를 호출하면 순회자에게 호출자가 더 이상 `next()`를 호출을 할 의도가 없으며, 정리 작업을 수행할 수 있음을 알립니다.
- `throw(exception)` {{optional_inline}}
  - : 0개 또는 1개의 인수를 허용하고 `IteratorResult` 인터페이스를 준수하는 객체를 반환하는 함수입니다. 일반적으로 `done`은 `true`입니다. 이 메서드를 호출하면 순회자에게 호출자가 오류 조건을 감지했음을 알리며, `exception`은 일반적으로 {{jsxref("Error")}} 인스턴스입니다.

> **참고:** 특정 객체가 순회자 프로토콜을 구현하는지 여부를 반사적으로(즉, 실제로 `next()`를 호출하고 반환된 결과를 확인하지 않고는) 알 수 없습니다.

순회자를 순회 가능으로 만드는 것은 매우 쉽습니다. `this`를 반환하는 `[@@iterator]()` 메서드를 구현하기만 하면 됩니다.

```js
// 순회자 프로토콜과 순회 가능을 모두 만족
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

이러한 객체를 순회 가능 순회자라고 합니다. 이렇게 하면 순회 가능을 기대하는 다양한 구문에서 순회자를 사용할 수 있습니다. 따라서 순회 가능을 구현하지 않고 순회자 프로토콜을 구현하는 것은 거의 유용하지 않습니다. (실제로 거의 모든 구문과 API는 순회자가 아니라 순회 가능을 기대합니다.) [제너레이터 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)가 그 예입니다.

```js
const aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof aGeneratorObject.next);
// "function" — next 메서드(올바른 결과를 반환)가 있으므로 순회자입니다.

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function" — @@iterator 메서드(올바른 순회자를 반환)가 있으므로 순회 가능입니다.

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true — @@iterator 메서드는 자신(순회자)을 반환하므로 순회 가능 순회자입니다.
```

모든 내장 순회자는 `this`를 반환하는 `[@@iterator]()` 메서드를 구현하는 {{jsxref("Iterator", "Iterator.prototype")}}에서 상속되었기 때문에 내장 순회자도 순회 가능입니다.

그러나 가능하다면 `iterable[Symbol.iterator]`가 [`Set.prototype[@@iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)처럼 항상 처음부터 시작하는 별개의 반복자를 반환하는 것이 좋습니다.

## 비동기 순회자와 비동기 순회 가능 프로토콜

**비동기 순회자**와 **비동기 순회 가능** 프로토콜 이라는 비동기 순회에 사용되는 또 다른 프로토콜 쌍이 있습니다. 순회 가능과 순회자 프로토콜과 비교했을 때 매우 유사한 인터페이스를 가지고 있고, 순회자 메서드 호출의 각 반환 값이 프로미스로 래핑된다는 점만 다릅니다.

객체는 다음 메서드를 구현할 때 비동기 순회 가능 프로토콜을 구현합니다.

- [`[Symbol.asyncIterator]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : 비동기 순회자 프로토콜을 준수하는 객체를 반환하는 인수가 없는 함수입니다.

객체는 다음 메서드를 구현할 때 비동기 순회자 프로토콜을 구현합니다.

- `next()`
  - : 0개 또는 1개의 인수를 허용하고 프로미스를 반환하는 함수입니다. 프로미스는 `IteratorResult` 인터페이스를 준수하는 객체로 이행되며, 속성은 동기 순회자와 동일한 의미 체계를 갖습니다.
- `return(value)` {{optional_inline}}
  - : 0개 또는 1개의 인수를 허용하고 프로미스를 반환하는 함수입니다. 프로미스는 `IteratorResult` 인터페이스를 준수하는 객체로 이행되며, 속성은 동기 순회자와 동일한 의미 체계를 갖습니다.
- `throw(exception)` {{optional_inline}}
  - : 0개 또는 1개의 인수를 허용하고 프로미스를 반환하는 함수입니다. 프로미스는 `IteratorResult` 인터페이스를 준수하는 객체로 이행되며, 속성은 동기 순회자와 동일한 의미 체계를 갖습니다.

## 언어와 순회 프로토콜 간의 상호 작용

언어는 순회 가능과 순회자를 생성하거나 소비하는 API를 지정합니다.

### 내장 순회 가능

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, 그리고 [`Intl.Segmenter.prototype.segment()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)에서 반환된 [`Segments`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)는 각각의 `prototype` 객체가 `@@iterator` 메서드를 구현하기 때문에 모두 내장 순회 가능입니다. 또한 [`인수`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체와 {{domxref("NodeList")}}와 같은 일부 DOM 컬렉션 유형도 순회 가능입니다. [`ReadableStream`](/ko/docs/Web/API/ReadableStream)은 이 문서를 작성할 당시의 유일한 내장 비동기 순회 가능입니다.

[제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/function*)는 순회 가능 순회자인 [제너레이터 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)를 반환합니다. [비동기 제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function*)는 비동기 순회 가능 순회자인 [비동기 제너레이터 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)를 반환합니다.

내장 순회 가능에서 반환된 순회자는 실제로 모두 앞서 언급한 `[Symbol.iterator]() { return this; }` 메서드를 사용하여 순회 가능 순회자로 만드는 공통 클래스(현재 노출되어있지 않음)를 상속받습니다. 앞으로 이러한 내장 순회자는 `next()` 메서드 외에 추가적으로 순회자 프로토콜에서 필요한 [도우미 메서드](https://github.com/tc39/proposal-iterator-helpers)를 가지고 있을 수 있습니다. 그래픽 콘솔에 로그하여 순회자의 프로토타입 체인을 검사해볼 수 있습니다.

```
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> 모든 배열 순회자가 공유하는 프로토타입입니다.
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> 모든 내장 순회자가 공유하는 프로토타입입니다.
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> Object.prototype 입니다.
```

### 순회 가능을 허용하는 내장 API

순회 가능을 허용하는 많은 API가 있습니다. 몇 가지 예는 다음과 같습니다.

- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
- {{jsxref("Set/Set", "Set()")}}
- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Array.from()")}}

```js
const myObj = {};

new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

### 순회 가능을 기대하는 구문

{{jsxref("Statements/for...of", "for...of")}} 루프, [배열 및 매개변수 전개](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{jsxref("Operators/yield*", "yield*")}}, 그리고 [배열 구조 분해](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)와 같은 일부 명령문과 표현식에는 순회 가능이 필요합니다.

```js
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

console.log([..."abc"]); // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
console.log(a); // "a"
```

내장 구문이 순회자를 순회하고 마지막 결과의 `done`이 `false`(즉, 순회자가 더 많은 값을 생성할 수 있음)이지만 더 이상 값이 필요하지 않은 경우 `return` 메서드가 있는경우, 해당 메서드가 호출됩니다. 예를 들어 `break` 또는 `return`이 `for...of` 루프에서 발생하거나 모든 식별자가 배열 구조 분해에 이미 바인딩된 경우에 이러한 상황이 발생할 수 있습니다.

```js
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        console.log("Returning", i);
        if (i === 3) return { done: true, value: i };
        return { done: false, value: i };
      },
      return() {
        console.log("Closing");
        return { done: true };
      },
    };
  },
};

const [b] = obj;
// Returning 1
// Closing

const [a, b, c] = obj;
// Returning 1
// Returning 2
// Returning 3
// 이미 끝에 도달했기 때문에(마지막 호출이 `done: true`를 반환)
// `return`이 호출되지 않습니다.

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

[비동기 제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function*) ([동기 제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/function*)는 아님)의 [`for await...of`](/ko/docs/Web/JavaScript/Reference/Statements/for-await...of) 루프와 [`yield*`](/ko/docs/Web/JavaScript/Reference/Operators/yield*)는 비동기 순회 가능과 상호 작용하는 유일한 방법입니다. `for...of`, 배열 전개 등을 동기 순회 가능도 아닌 비동기 순회 가능과 사용하면(즉, `[@@asyncIterator]()`는 있지만 `[@@iterator]()`는 없음) TypeError(x is not iterable.)가 발생합니다.

### 잘못 구성된 순회 가능

순회 가능의 `@@iterator` 메서드가 순회자 객체를 반환하지 않으면 잘못 구성된 순회 가능으로 간주됩니다.

이렇게 사용하면 런타임 오류 또는 버그가 발생할 수 있습니다.

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## 예제

### 사용자 정의 순회 가능

여러분은 다음과 같이 여러분만의 순회 가능을 만들 수 있습니다.

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...myIterable]); // [1, 2, 3]
```

### 간단한 순회자

순회자는 본래 stateful입니다. 위의 예와 같이 [제너레이터 함수](/ko/docs/Web/JavaScript/Reference/Statements/function*)로 정의하지 않으면, 여러분은 상태를 클로저에 캡슐화하고 싶을 것입니다.

```js
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### 무한 순회자

```js
function idMaker() {
  let index = 0;
  return {
    next() {
      return {
        value: index++,
        done: false,
      };
    },
  };
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### 제너레이터로 순회자 정의하기

```js
function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### 클래스로 순회자 정의하기

상태 캡슐화는 [프라이빗 속성](/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields)으로도 수행할 수 있습니다.

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // 각 순회자에 대해 새 색인을 사용하세요.
    // 이렇게 하면 break 사용 또는 동일한 순회 가능의 중첩 루프와 같은
    // 사소한 상황에서 순회 가능에 대한 여러 반복이 안전해집니다.
    let index = 0;

    return {
      // 참고: 화살표 함수를 사용하면 `this`가 `next()` 대신
      // `[@@iterator]()` 중 하나를 가리킬 수 있습니다.
      next: () => {
        if (index < this.#data.length) {
          return { value: this.#data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

### 내장 순회 가능 덮어쓰기

예를 들어 {{jsxref("String")}}은 내장 순회 가능 객체입니다.

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String`의 [기본 순회자](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)는 다음과 같이 문자열의 코드 포인트를 하나씩 반환합니다.

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

여러분은 여러분만의 `@@iterator`를 제공하여 순회 동작을 재정의할 수 있습니다.

```js
// auto-boxing을 피하기 위해 명시적으로 String 객체를 구성해야 합니다.
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // 단일 요소(문자열 "bye")를 반환하는 순회자 객체
    next() {
      return this._first
        ? { value: "bye", done: (this._first = false) }
        : { done: true };
    },
    _first: true,
  };
};
```

`@@iterator` 재정의가 순회 프로토콜을 사용하는 내장 생성 동작에 어떤 영향을 미치는지 확인해보세요.

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

## 명세서

{{Specifications}}

## 같이 보기

- [순회자와 제너레이터](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
