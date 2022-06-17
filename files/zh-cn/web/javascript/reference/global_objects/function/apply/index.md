---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
tags:
  - Function
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Function/apply
---
{{JSRef}}

`apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或一个[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)）的形式提供的参数。

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## 语法

```js
apply(thisArg)
apply(thisArg, argsArray)
```

### 参数

- `thisArg`

  - : 在 `func` 函数运行时使用的 `this` 值。请注意，`this` 可能不是该方法看到的实际值：如果这个函数处于{{jsxref("Strict_mode", "非严格模式", "", 1)}}下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象，原始值会被包装。

- `argsArray` {{optional_inline}}

  - : 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 `func` 函数。如果该参数的值为 {{jsxref("null")}} 或  {{jsxref("undefined")}}，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。[浏览器兼容性](#浏览器兼容性)请参阅本文底部内容。

### 返回值

调用有指定 **`this`** 值和参数的函数的结果。

## 描述

> **备注：** 虽然这个函数的语法与 {{jsxref("Function.call", "call()")}} 几乎相同，但根本区别在于，`call()` 接受一个**参数列表**，而 `apply()` 接受一个**参数的单数组**。

> **备注：** 当第一个参数为 {{jsxref("null")}} 或  {{jsxref("undefined")}} 时，可以使用数组[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)实现类似的结果。

在调用一个存在的函数时，你可以为其指定一个 `this` 对象。`this` 指当前对象，也就是正在调用这个函数的对象。使用 `apply`，你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

`apply` 与 {{jsxref("Function.call", "call()")}} 非常相似，不同之处在于提供参数的方式。`apply` 使用参数数组而不是一组参数列表。`apply` 可以使用数组字面量（array literal），如 `fun.apply(this, ['eat', 'bananas'])`，或数组对象，如 `fun.apply(this, new Array('eat', 'bananas'))`。

你也可以使用 {{jsxref("Functions/arguments", "arguments")}} 对象作为 `argsArray` 参数。`arguments` 是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的参数。这样，你在使用 apply 函数的时候就不需要知道被调用对象的所有参数。你可以使用 arguments 来把所有的参数传递给被调用对象。被调用对象接下来就负责处理这些参数。

从 ECMAScript 第 5 版开始，可以使用任何种类的类数组对象，就是说只要有一个 `length` 属性和 `(0..length-1)` 范围的整数属性。例如现在可以使用 {{domxref("NodeList")}} 或一个自己定义的类似 `{'length': 2, '0': 'eat', '1': 'bananas'}` 形式的对象。

> **备注：** 许多较旧的浏览器，包括 Chrome <17 以及 Internet Explorer <9 不接受类数组对象。如果传入类数组对象，它们会抛出异常。

## 示例

### 用 `apply` 将数组各项添加到另一个数组

我们可以使用 `push` 将元素追加到数组中。由于 push 接受可变数量的参数，所以也可以一次追加多个元素。

但是，如果 `push` 的参数是数组，它会将该数组作为单个元素添加，而不是将这个数组内的每个元素添加进去，因此我们最终会得到一个数组内的数组。如果不想这样呢？`concat` 符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。然而我们需要将元素追加到现有数组......那么怎么做好？难道要写一个循环吗？别当然不是！

`apply` 正派上用场！

```js
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### 使用 `apply` 和内置函数

对于一些需要写循环以遍历数组各项的需求，我们可以用 `apply` 完成以避免循环。

下面是示例，我们将用 `Math.max`/`Math.min` 求得数组中的最大/小值。

```js
// 找出数组中最大/小的数字
const numbers = [5, 6, 2, 3, 7];

// 使用 Math.min/Math.max 以及 apply 函数时的代码
let max = Math.max.apply(null, numbers); // 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..)
let min = Math.min.apply(null, numbers);

// 对比：简单循环算法
max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min)
    min = numbers[i];
}
```

注意：如果按上面方式调用 `apply`，有超出 JavaScript 引擎参数长度上限的风险。一个方法传入过多参数（比如一万个）时的后果在不同 JavaScript 引擎中表现不同。（JavaScriptCore 引擎中有被硬编码的[参数个数上限：65536](https://bugs.webkit.org/show_bug.cgi?id=80797)）。

这是因为此限制（实际上也是任何用到超大栈空间的行为的自然表现）是不明确的。一些引擎会抛出异常，更糟糕的是其他引擎会直接限制传入到方法的参数个数，导致参数丢失。比如：假设某个引擎的方法参数上限为 4（实际上限当然要高得多），这种情况下，上面的代码执行后，真正被传递到 `apply`的参数为 `5, 6, 2, 3` ，而不是完整的数组。

如果你的参数数组可能非常大，那么推荐使用下面这种混合策略：将数组切块后循环传入目标方法：

```js
function minOfArray(arr) {
  let min = Infinity;
  let QUANTUM = 32768;

  for (let i = 0, len = arr.length; i < len; i += QUANTUM) {
    const submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

let min = minOfArray([5, 6, 2, 3, 7]);
```

### 使用 apply 来链接构造器

你可以使用 apply 来链接一个对象{{jsxref("Operators/new", "构造器", "", 1)}}，类似于 Java。在接下来的例子中我们会创建一个全局 {{jsxref("Global_Objects/Function")}} 对象的 `construct` 方法 ，来使你能够在构造器中使用一个类数组对象而非参数列表。

```js
Function.prototype.construct = function (aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

使用示例：

```js
function MyConstructor(arguments) {
  for (let nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

let myArray = [4, 'Hello world!', false];
let myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'
```

> **备注：** 这个非原生的 `Function.construct` 方法无法和一些原生构造器（例如 {{jsxref("Global_Objects/Date", "Date")}}）一起使用。在这种情况下你必须使用 {{jsxref("Function.prototype.bind")}} 方法。例如，想象有如下一个数组要用在 Date 构造器中：`[2012, 11, 4]`；这时你需要这样写：`new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` ——无论如何这不是最好的实现方式并且也许不该用在任何生产环境中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Functions/arguments", "arguments")}} 对象
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions")}}
- {{jsxref("Reflect.apply()")}}
- {{jsxref("Operators/Spread_syntax", "Spread syntax", "", 1)}}