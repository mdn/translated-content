---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> [!NOTE]
> 在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下访问 `arguments.callee` 会抛出 {{jsxref("TypeError")}}。若一个函数必须引用自身，请为[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)命名，或使用[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)。

**`arguments.callee`** 数据属性包含 arguments 所属的当前正在执行的函数。

## 值

对当前正在执行的函数的引用。

{{js_property_attributes(1, 0, 1)}}

> **备注：** `callee` 是仅存在于具有简单参数的非严格函数（在这种情况下 `arguments` 对象也是[自动同步](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments#通过索引赋值)的）的数据属性。否则，它是一个访问器属性，其 getter 和 setter 都会抛出 {{jsxref("TypeError")}}。

## 描述

`callee` 是 `arguments` 对象的一个属性。它可以用于引用某个函数的函数体内当前正在执行的函数。这在函数的名称未知时很有用，例如在没有名称的函数表达式（也称为“匿名函数”）内。

（以下内容大部分改编自 [olliej 在 Stack Overflow 上的回答](https://stackoverflow.com/a/235760/578288)）

早期版本的 JavaScript 不允许使用具名函数表达式，出于这样的原因，你不能创建递归函数表达式。

例如，以下语法是有效的：

```js
function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

但是：

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : /* 这里该怎么写？*/ (n - 1) * n;
});
```

这个就不行。为了解决这个问题，`arguments.callee` 被添加了进来。然后你可以这么做：

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

然而，`arguments.callee` 的设计存在很多问题。第一个问题是递归调用会得到不同的 `this` 值。例如：

```js
const global = this;

const sillyFunction = function (recursed) {
  if (this !== global) {
    console.log("this 是", this);
  } else {
    console.log("this 是 global");
  }

  if (!recursed) {
    return arguments.callee(true);
  }
};

sillyFunction();
// this 是 global
// this 是 [object Arguments]
```

此外，`arguments.callee` 的引用使得在一般情况下无法实现内联和尾递归优化。（你可以通过追踪个别的例子等方法来实现它，但即使是最好的代码也是次优选项，因为做了本来是不需要的检查。）

ECMAScript 3 通过允许具名函数表达式解决了这些问题。例如：

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

这有很多好处：

- 该函数可以像代码内部的任何其他函数一样被调用
- 它不会在外部作用域中创建变量（[除了 IE 8 及以下](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope)）
- 它具有比访问 arguments 对象更好的性能

严格模式禁用了其他泄露堆栈信息的属性，比如函数的 [`caller`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) 属性。这是因为检查调用堆栈有一个重大影响：它使大量的优化变得不再可能，或者变得更加困难。比如，如果你不能保证一个函数 `f` 不会调用一个未知函数，那就无法内联优化 `f`。

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

如果 JavaScript 解释器不能保证所有提供的参数在被调用时都是数字，那么它需要在内联代码之前插入对所有参数的检查，否则无法内联该函数。这意味着任何可能微不足道的内联调用的地方都会积累大量的守卫。现在，在这个特殊例子中，智能的解释器应该能重排检查而使其更优，且不会检查任何没有使用到的值。然而在许多的情况下这是不可能的，因而无法进行内联优化。

## 示例

### 在匿名递归函数中使用 arguments.callee

递归函数必须能够引用它本身。通常，函数通过自己的名字调用自己。然而，匿名函数（通过[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)或者 [`Function` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)创建）没有名称。因此如果没有可访问的变量指向该函数，唯一能引用它自身的方式就是通过 `arguments.callee`。

下面的示例定义了一个函数，该函数又定义并返回了一个阶乘函数。该示例并不实用，且几乎所有情况下都能用[具名函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)实现同样结果。

```js
function create() {
  return function (n) {
    if (n <= 1) {
      return 1;
    }
    return n * arguments.callee(n - 1);
  };
}

const result = create()(5); // 返回 120（5 * 4 * 3 * 2 * 1）
```

### 使用 Y 组合子的匿名函数递归

虽然函数表达式现在可以被命名，但[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)始终是匿名的，这意味着它们无法在没有被赋值给变量的情况下引用自身。幸运的是，在 Lambda 演算中有一个非常好的解决方案，它允许一个函数既是匿名的又是自引用的。这个技术被称为 [Y 组合子](https://zh.wikipedia.org/wiki/不动点组合子#Y组合子)。在这里我们不会解释它是*如何工作*的，而仅介绍*如何使用*。

```js
// Y 组合子：工具函数！
const Y = (hof) => ((x) => x(x))((x) => hof((y) => x(x)(y)));

console.log(
  [1, 2, 3, 4, 5].map(
    // 将高阶函数包装在 Y 组合子中
    // “factorial”不是函数的名称：它是作为参数引入的
    Y((factorial) => (n) => (n <= 1 ? 1 : factorial(n - 1) * n)),
  ),
);
// [ 1, 2, 6, 24, 120 ]
```

> [!NOTE]
> 此方法为每一次迭代创建一个新的闭包，这可能会显著增加内存的使用量。这里只是为了演示这种可能性，但应该在生产环境中避免。请改用临时变量或具名函数表达式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
