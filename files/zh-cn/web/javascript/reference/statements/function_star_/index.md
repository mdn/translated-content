---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
---

{{jsSidebar("Statements")}}

**`function*`** 这种声明方式 (`function`关键字后跟一个星号）会定义一个**生成器函数** (generator function)，它返回一个 {{jsxref("Global_Objects/Generator","Generator")}} 对象。

{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}

你也可以使用构造函数 {{jsxref("GeneratorFunction")}} 或 {{jsxref("Operators/function*", "function* expression")}} 定义**_生成器函数_ **。

## 语法

```plain
function* name([param[, param[, ... param]]]) { statements }
```

- `name`
  - : 函数名
- `param`
  - : 要传递给函数的一个参数的名称，一个函数最多可以有 255 个参数。
- `statements`
  - : 普通 JS 语句。

## 描述

**生成器函数**在执行时能暂停，后面又能从暂停处继续执行。

调用一个**生成器函数**并不会马上执行它里面的语句，而是返回一个这个生成器的 **迭代器** **（ [iterator](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator) ）对象**。当这个迭代器的 `next()` 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现{{jsxref("Operators/yield", "yield")}}的位置为止，{{jsxref("Operators/yield", "yield")}} 后紧跟迭代器要返回的值。或者如果用的是 {{jsxref("Operators/yield*", "yield*")}}（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。

`next()`方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 `yield` 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 `yield` 语句，即生成器函数是否已经执行完毕并返回。

调用 `next()`方法时，如果传入了参数，那么这个参数会传给**上一条执行的 yield 语句左边的变量**，例如下面例子中的`x`：

```js
function* gen() {
  yield 10;
  x = yield "foo";
  yield x;
}

var gen_obj = gen();
console.log(gen_obj.next()); // 执行 yield 10，返回 10
console.log(gen_obj.next()); // 执行 yield 'foo'，返回 'foo'
console.log(gen_obj.next(100)); // 将 100 赋给上一条 yield 'foo' 的左值，即执行 x=100，返回 100
console.log(gen_obj.next()); // 执行完毕，value 为 undefined，done 为 true
```

当在生成器函数中显式 `return` 时，会导致生成器立即变为完成状态，即调用 `next()` 方法返回的对象的 `done` 为 `true`。如果 `return` 后面跟了一个值，那么这个值会作为**当前**调用 `next()` 方法返回的 value 值。

## 示例

### 简单示例

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
```

### 生成器也可以接收参数：

```js
function* idMaker() {
  var index = arguments[0] || 0;
  while (true) yield index++;
}

var gen = idMaker(5);
console.log(gen.next().value); // 5
console.log(gen.next().value); // 6
```

### yield\* 的示例

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i); // 移交执行权
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### 传递参数

```js
function* createIterator() {
  let first = yield 1;
  let second = yield first + 2; // 4 + 2
  // first =4 是 next(4) 将参数赋给上一条的
  yield second + 3; // 5 + 3
}

let iterator = createIterator();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next(4)); // "{ value: 6, done: false }"
console.log(iterator.next(5)); // "{ value: 8, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
```

### 显式返回

```js
function* yieldAndReturn() {
  yield "Y";
  return "R"; //显式返回处，可以观察到 done 也立即变为了 true
  yield "unreachable"; // 不会被执行了
}

var gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### 生成器函数不能当构造器使用

```js
function* f() {}
var obj = new f(); // throws "TypeError: f is not a constructor"
```

### 使用迭代器遍历二维数组并转换成一维数组：

```js
function* iterArr(arr) {
  //迭代器返回一个迭代器对象
  if (Array.isArray(arr)) {
    // 内节点
    for (let i = 0; i < arr.length; i++) {
      yield* iterArr(arr[i]); // (*) 递归
    }
  } else {
    // 离开
    yield arr;
  }
}
// 使用 for-of 遍历：
var arr = ["a", ["b", "c"], ["d", "e"]];
for (var x of iterArr(arr)) {
  console.log(x); // a  b  c  d  e
}
// 或者直接将迭代器展开：
var arr = ["a", ["b", ["c", ["d", "e"]]]];
var gen = iterArr(arr);
arr = [...gen]; // ["a", "b", "c", "d", "e"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}} object
- [迭代器协议](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function declaration")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- 其他网络资源：

  - [Regenerator](http://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia — JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Hemanth.HM: The New gen of \*gen(){}](https://www.youtube.com/watch?v=ZrgEZykBHVo&list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&index=1)
  - [Task.js](http://taskjs.org/)
