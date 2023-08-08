---
title: 迭代协议
slug: Web/JavaScript/Reference/Iteration_protocols
---

{{jsSidebar("More")}}

**迭代协议**并不是新的内置实现或语法，而是*协议*。这些协议可以被任何遵循某些约定的对象来实现。

迭代协议具体分为两个协议：[可迭代协议](#可迭代协议)和[迭代器协议](#迭代器协议)。

## 可迭代协议

**可迭代协议**允许 JavaScript 对象定义或定制它们的迭代行为，例如，在一个 {{jsxref("Statements/for...of", "for..of")}} 结构中，哪些值可以被遍历到。一些内置类型同时是[内置的可迭代对象](#内置的可迭代对象)，并且有默认的迭代行为，比如 {{jsxref("Array")}} 或者 {{jsxref("Map")}}，而其他内置类型则不是（比如 {{jsxref("Object")}}）。

要成为**可迭代**对象，该对象必须实现 **`@@iterator`** 方法，这意味着对象（或者它[原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)上的某个对象）必须有一个键为 `@@iterator` 的属性，可通过常量 {{jsxref("Symbol.iterator")}} 访问该属性：

- `[Symbol.iterator]`
  - : 一个无参数的函数，其返回值为一个符合[迭代器协议](#迭代器协议)的对象。

当一个对象需要被迭代的时候（比如被置入一个 {{jsxref("Statements/for...of", "for...of")}} 循环时），首先，会不带参数调用它的 `@@iterator` 方法，然后使用此方法返回的**迭代器**获得要迭代的值。

值得注意的是调用此无参数函数时，它将作为对可迭代对象的方法进行调用。因此，在函数内部，`this` 关键字可用于访问可迭代对象的属性，以决定在迭代过程中提供什么。

此函数可以是普通函数，也可以是生成器函数，以便在调用时返回迭代器对象。在此生成器函数的内部，可以使用 `yield` 提供每个条目。

## 迭代器协议

**迭代器协议**定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

只有实现了一个拥有以下语义（semantic）的 **`next()`** 方法，一个对象才能成为迭代器：

- `next()`
  - : 无参数或者接受一个参数的函数，并返回符合 `IteratorResult` 接口的对象（见下文）。如果在使用迭代器内置的语言特征（例如 `for...of`）时，得到一个非对象返回值（例如 `false` 或 `undefined`），将会抛出 {{jsxref("TypeError")}}（`"iterator.next() returned a non-object value"`）。

所有迭代器协议的方法（`next()`、`return()` 和 `throw()`）都应返回实现 `IteratorResult` 接口的对象。它必须有以下属性：

- `done` {{optional_inline}}

  - : 如果迭代器能够生成序列中的下一个值，则返回 `false` 布尔值。（这等价于没有指定 `done` 这个属性。）

    如果迭代器已将序列迭代完毕，则为 `true`。这种情况下，`value` 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。

- `value` {{optional_inline}}
  - : 迭代器返回的任何 JavaScript 值。`done` 为 `true` 时可省略。

实际上，两者都不是严格要求的；如果返回没有任何属性的对象，则实际上等价于 `{ done: false, value: undefined }`。

如果一个迭代器返回一个 `done: true` 的结果，则对任何 `next()` 的后续调用也返回 `done: true`，尽管这在语言层面不是强制的。

`next` 方法可以接受一个值，该值将提供给方法体。任何内置的语言特征都将不会传递任何值。传递给[生成器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator) `next` 方法的值将成为相应 `yield` 表达式的值。

可选地，迭代器也实现了 **`return(value)`** 和 **`throw(exception)`** 方法，这些方法在调用时告诉迭代器，调用者已经完成迭代，并且可以执行任何必要的清理（例如关闭数据库连接）。

- `return(value)` {{optional_inline}}
  - : 无参数或者接受一个参数的函数，并返回符合 `IteratorResult` 接口的对象，其 `value` 通常等价于传递的 `value`，并且 `done` 等于 `true`。调用这个方法表明迭代器的调用者不打算调用更多的 `next()`，并且可以进行清理工作。
- `throw(exception)` {{optional_inline}}
  - : 无参数或者接受一个参数的函数，并返回符合 `IteratorResult` 接口的对象，通常 `done` 等于 `true`。调用这个方法表明迭代器的调用者监测到错误的状况，并且 `exception` 通常是一个 {{jsxref("Error")}} 实例。

> **备注：** 无法通过反射的方法确定（例如，没有实际调用 `next()` 并验证返回的结果）一个特定的对象是否实现了迭代器协议。

很容易使一个迭代器也可迭代：只需实现 `[@@iterator]()` 方法，并返回它的 `this`。

```js
// Satisfies both the Iterator Protocol and Iterable
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

这种对象被称为*可迭代迭代器*。这样做可以让期望可迭代对象的各类语法使用此类迭代器——因此，在不实现可迭代协议的情况下，仅实现迭代器协议的作用很小。（事实上，几乎所有的语法和 API 都期待*可迭代对象，而不是迭代器*。）[生成器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)是一个例子：

```js
const aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof aGeneratorObject.next);
// "function"——它有 next 方法（返回正确的值），所以它是迭代器

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function"——它有 @@iterator 方法（返回正确的迭代器），所以它是可迭代的

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true——它的 @@iterator 方法返回自身（一个迭代器），所以它是一个可迭代的迭代器
```

然而，可能的情况下，`iterable[Symbol.iterator]` 最好返回总是从头开始的不同的迭代器，像 [`Set.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator) 做的那样。

## 异步迭代器和异步可迭代协议

还有一对用于异步迭代的协议，命名为**异步迭代器**和**异步可迭代**协议。它们与可迭代和迭代器协议有着非常类似的接口，只是从调用迭代器方法的每个返回值都包装在一个 promise 中。

当对象实现以下方法时，它会实现异步可迭代协议：

- [`[Symbol.asyncIterator]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : 返回对象的无参数函数，并且符合异步迭代器协议。

当对象实现以下方法时，它会实现异步迭代器协议：

- `next()`
  - : 无参数或者接受一个参数的函数，并返回 promise。promise 兑现为一个对象，该对象符合 `IteratorResult` 接口，并且这些属性与同步迭代器有着相同的语义。
- `return(value)` {{optional_inline}}
  - : 无参数或者接受一个参数的函数，并返回 promise。promise 兑现为一个对象，该对象符合 `IteratorResult` 接口，并且这些属性与同步迭代器有着相同的语义。
- `throw(exception)` {{optional_inline}}
  - : 无参数或者接受一个参数的函数，并返回 promise。promise 兑现为一个对象，该对象符合 `IteratorResult` 接口，并且这些属性与同步迭代器有着相同的语义。

## 语言和迭代协议之间的交互

JavaScript 语言指定了产生或使用可迭代对象和迭代器的 API。

### 内置的可迭代对象

{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}}、{{jsxref("Set")}} 以及 {{jsxref("Intl.Segments")}} 都是内置的可迭代对象，因为它们的每个 `prototype` 对象都实现了 `@@iterator` 方法。此外，[`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 对象和一些 DOM 集合类型，如 {{domxref("NodeList")}} 也是可迭代的。目前，没有内置的异步可迭代对象。

[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)返回[生成器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)，它们是可迭代的迭代器。[异步生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)返回[异步生成器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)，它们是异步可迭代的迭代器。

从内置迭代返回的迭代器实际上都继承了一个公共类（目前尚未暴露），该类实现了上述 `[Symbol.iterator]() { return this; }` 方法，使它们都是可迭代的迭代器。将来，除了迭代器协议要求的 `next()` 方法外，这些内置迭代器可能还有其他[辅助方法](https://github.com/tc39/proposal-iterator-helpers)。你可以通过在图形控制台中记录迭代器的原型链来检查它。

```
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> This is the prototype shared by all array iterators
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> This is the prototype shared by all built-in iterators
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> This is Object.prototype
```

### 接受可迭代对象的内置 API

有许多 API 接受可迭代对象。一些例子，包括：

- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
- {{jsxref("Set/Set", "Set()")}}
- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}

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

### 期待迭代对象的语法

一些语句和表达式期望可迭代对象，例如 {{jsxref("Statements/for...of", "for...of")}} 循环、[数组和参数扩展](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、{{jsxref("Operators/yield*", "yield*")}} 和[数组解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)：

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

当内置语法迭代迭代器，并且最后的结果中 `done` 为 `false`（即迭代器能够生成更多值）但不需要更多值时，如果存在，将调用 `return` 方法。例如，如果在 `for...of` 循环中遇到 `break` 或 `return`，或者数组解构中的标识符只是有限个的，则可能会发生这种情况。

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
// Already reached the end (the last call returned `done: true`),
// so `return` is not called

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

[异步生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)（但不是[同步生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)）中的 [`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of) 循环和 [`yield*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*) 是与异步迭代交互的唯一方式。在不是同步迭代的异步迭代对象（即它有 `[@@asyncIterator]()` 但没有 `[@@iterator]()`）上使用 `for...of`、数组展开等将抛出 `TypeError：x is not iterable`。

### 不符合标准的可迭代对象

如果一个可迭代对象的 `@@iterator` 方法不能返回迭代器对象，那么可以认为它是一个*不符合标准的*（Non-well-formed）可迭代对象。

使用这样的可迭代对象很可能会导致如下的运行时异常，或者不可预料的表现：

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## 示例

### 自定义可迭代对象

你可以像这样创建自己的可迭代对象：

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

### 简单迭代器

迭代器本质上是有状态的。如果你不将其定义为[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)（如上例所示），你可能需要将状态封装在闭包中。

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

const it = makeIterator(["yo", "ya"]);\

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### 无穷迭代器

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

### 使用生成器定义一个可迭代对象

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

### 使用类定义一个可迭代对象

状态封装也可以对[私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields)进行。

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      // Note: using an arrow function allows `this` to point to the
      // one of `[@@iterator]()` instead of `next()`
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

### 重写内置的可迭代对象

例如，{{jsxref("String")}} 是一个内置的可迭代对象：

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String` 的[默认迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)会逐个地返回字符串的代码点：

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"
console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

你可以提供我们自己的 `@@iterator` 重新定义迭代行为：

```js
// need to construct a String object explicitly to avoid auto-boxing
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next() {
      return this._first
        ? { value: "bye", done: (this._first = false) }
        : { done: true };
    },
    _first: true,
  };
};
```

注意，如何使用迭代协议重新定义 `@@iterator` 以影响内置结构的行为：

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

## 参见

- [`function*` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
- [在 ECMAScript 规范中的迭代](https://tc39.es/ecma262/#sec-iteration)
