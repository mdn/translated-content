---
title: Iterators and generators
slug: Web/JavaScript/Guide/Iterators_and_Generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}

處理集合中的每個項目是很常見的操作，JavaScript 提供了許多迭代集合的方法，從簡單的 {{jsxref("Statements/for","for")}} 循環到 {{jsxref("Global_Objects/Array/map","map()")}} 和 {{jsxref("Global_Objects/Array/filter","filter()")}}。

Iterators 和 Generators 將迭代的概念直接帶進核心語言，並提供一個機制來客製化 {{jsxref("Statements/for...of","for...of")}} 的循環行為。

更多詳情請參考：

- {{jsxref("Iteration_protocols")}}
- {{jsxref("Statements/for...of","for...of")}}
- {{jsxref("Statements/function*","function*")}} 和 {{jsxref("Generator")}}
- {{jsxref("Operators/yield","yield")}} 和 {{jsxref("Operators/yield*","yield*")}}

## Iterators (疊代器)

在 JavaScript 中，**iterator** 是一個物件(object)，他定義一個序列，並在終止時回傳一個值。

更精確地說，iterator 是任何一個透過 `next()` 方法實現 [Iterator protocol](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) 的物件，該方法回傳具有以下兩個屬性 (property) 的物件：

- `value`
  - : 在 iteration 序列中的下一個值。
- `done`
  - : 如果序列中的最後一個值已經被消耗(使用)了，則此值為 `true` 。如果 `value` 和 `done` 一起存在， 則他是這個 iterator 的回傳值。

一旦建立 iterator 物件後，可以透過反覆呼叫 `next()` 來進行迭代。 iterator 經過迭代後，即被認為已經消耗 iterator ，因為通常只可能執行一次。在產生終止值之後，對 `next()` 的其他調用應僅繼續返回{done：true}。

The most common iterator in Javascript is the Array iterator, which simply returns each value in the associated array in sequence. While it is easy to imagine that all iterators could be expressed as arrays, this is not true. Arrays must be allocated in their entirety, but iterators are consumed only as necessary and thus can express sequences of unlimited size, such as the range of integers between 0 and Infinity.

Here is an example which can do just that. It allows creation of a simple range iterator which defines a sequence of integers from `start` (inclusive) to `end` (exclusive) spaced `step` apart. Its final return value is the size of the sequence it created, tracked by the variable iterationCount.

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex <= end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
```

Using the iterator then looks like this:

```js
let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // 5
```

> **備註：** It is not possible to know reflectively whether a particular object is an iterator. If you need to do this, use [Iterables](#Iterables).

## Generator functions

While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the {{jsxref("Statements/function*","function*")}} syntax. When called initially, generator functions do not execute any of their code, instead returning a type of iterator called a Generator. When a value is consumed by calling the generator's **next** method, the Generator function executes until it encounters the **yield** keyword.

The function can be called as many times as desired and returns a new Generator each time, however each Generator may only be iterated once.

We can now adapt the example from above. The behavior of this code is identical, but the implementation is much easier to write and read.

```js
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
```

## Iterables

An object is **iterable** if it defines its iteration behavior, such as what values are looped over in a {{jsxref("Statements/for...of", "for...of")}} construct. Some built-in types, such as {{jsxref("Array")}} or {{jsxref("Map")}}, have a default iteration behavior, while other types (such as {{jsxref("Object")}}) do not.

In order to be **iterable**, an object must implement the **@@iterator** method, meaning that the object (or one of the objects up its [prototype chain](/zh-TW/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) must have a property with a {{jsxref("Symbol.iterator")}} key.

It may be possible to iterate over an iterable more than once, or only once. It is up to the programmer to know which is the case. Iterables which can iterate only once (e.g. Generators) customarily return **this** from their **@@iterator** method, where those which can be iterated many times must return a new iterator on each invocation of **@@iterator**.

### User-defined iterables

We can make our own iterables like this:

```js
var myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

for (let value of myIterable) {
    console.log(value);
}
// 1
// 2
// 3

or

[...myIterable]; // [1, 2, 3]
```

### Built-in iterables

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} and {{jsxref("Set")}} are all built-in iterables, because their prototype objects all have a {{jsxref("Symbol.iterator")}} method.

### Syntaxes expecting iterables

Some statements and expressions are expecting iterables, for example the {{jsxref("Statements/for...of","for-of")}} loops, {{jsxref("Operators/yield*","yield*")}}.

```js
for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

[...'abc']; // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

gen().next(); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
a; // "a"
```

## Advanced generators

Generators compute their yielded values on demand, which allows them to efficiently represent sequences that are expensive to compute, or even infinite sequences as demonstrated above.

The {{jsxref("Global_Objects/Generator/next","next()")}} method also accepts a value which can be used to modify the internal state of the generator. A value passed to `next()` will be treated as the result of the last `yield` expression that paused the generator.

Here is the fibonacci generator using `next(x)` to restart the sequence:

```js
function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
```

You can force a generator to throw an exception by calling its {{jsxref("Global_Objects/Generator/throw","throw()")}} method and passing the exception value it should throw. This exception will be thrown from the current suspended context of the generator, as if the `yield` that is currently suspended were instead a `throw value` statement.

If the exception is not caught from within the generator, it will propagate up through the call to `throw()`, and subsequent calls to `next()` will result in the `done` property being `true`.

Generators have a {{jsxref("Global_Objects/Generator/return","return(value)")}} method that returns the given value and finishes the generator itself.

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}
