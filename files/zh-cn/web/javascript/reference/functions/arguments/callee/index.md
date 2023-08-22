---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
---

{{jsSidebar("Functions")}}

**`arguments.callee`** 属性包含当前正在执行的函数。

## 描述

**`callee`** 是 `arguments` 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”) 内。

> **警告：** 在[严格模式](/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)下，第 5 版 ECMAScript (**ES5**) 禁止使用 `arguments.callee()`。当一个函数必须调用自身的时候，避免使用 `arguments.callee()`，通过`要么`给函数表达式一个名字，要么使用一个函数声明。

## 为什么 arguments.callee 从 ES5 严格模式中删除了？

(改编自 [a Stack Overflow answer by olliej](http://stackoverflow.com/a/235760/578288))

早期版本的 JavaScript 不允许使用命名函数表达式，出于这样的原因，你不能创建一个递归函数表达式。

例如，下边这个语法就是行的通的：

```js
function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

但是：

```js
[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
});
```

这个不行。为了解决这个问题， `arguments.callee` 添加进来了。然后你可以这么做

```js
[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

然而，这实际上是一个非常糟糕的解决方案，因为这 (以及其他的 `arguments`, `callee`, 和 `caller` 问题) 使得在通常的情况（你可以通过调试一些个别例子去实现它，但即使最好的代码也是次优选项，因为 (JavaScript 解释器) 做了不必要的检查）不可能实现内联和尾递归。另外一个主要原因是递归调用会获取到一个不同的 `this` 值，例如：

```js
var global = this;

var sillyFunction = function (recursed) {
  if (!recursed) {
    return arguments.callee(true);
  }
  if (this !== global) {
    alert("This is: " + this);
  } else {
    alert("This is the global");
  }
};

sillyFunction();
```

ECMAScript 3 通过允许命名函数表达式解决这些问题。例如：

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

这有很多好处：

- 该函数可以像代码内部的任何其他函数一样被调用
- 它不会在外部作用域中创建一个变量 ([除了 IE 8 及以下](http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- 它具有比访问 arguments 对象更好的性能

另外一个被废弃的特性是 `arguments.callee.caller`，具体点说则是 `Function.caller。为什么`? 额，在任何一个时间点，你能在堆栈中找到任何函数的最深层的调用者，也正如我在上面提到的，在调用堆栈有一个单一重大影响：不可能做大量的优化，或者有更多更多的困难。比如，如果你不能保证一个函数 f 不会调用一个未知函数，它就绝不可能是内联函数 f。基本上这意味着内联代码中积累了大量防卫代码：

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

如果 JavaScript 解释器不能保证所有提供的参数数量在被调用的时候都存在，那么它需要在行内代码插入检查，或者不能内联这个函数。现在在这个特殊例子里一个智能的解释器应该能重排检查而更优，并检查任何将不用到的值。然而在许多的情况里那是不可能的，也因此它不能够内联。

## 示例

### 在匿名递归函数中使用 `arguments.callee`

递归函数必须能够引用它本身。很典型的，函数通过自己的名字调用自己。然而，匿名函数 (通过 [函数表达式](/zh-CN/docs/JavaScript/Reference/Operators/function) 或者 `函数构造器 创建`) 没有名称。因此如果没有可访问的变量指向该函数，唯一能引用它的方式就是通过 `arguments.callee`。

下面的例子定义了一个函数，按流程，定义并返回了一个阶乘函数。该例并不是很实用，并且几乎都能够用 [命名函数表达式](/zh-CN/docs/JavaScript/Reference/Operators/function) 实现同样结果的例子，and there are nearly no cases where the same result cannot be achieved with .

```js
function create() {
  return function (n) {
    if (n <= 1) return 1;
    return n * arguments.callee(n - 1);
  };
}

var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
```

### 没有替代方案的 arguments.callee

当你必须要使用 Function 构造函数时，下面的例子是没有可以替代 `arguments.callee` 的方案的，因此弃用它时会产生一个 BUG (参看 [Firefox bug 725398](https://bugzil.la/725398)):

```js
function createPerson(sIdentity) {
  var oPerson = new Function("alert(arguments.callee.identity);");
  oPerson.identity = sIdentity;
  return oPerson;
}

var john = createPerson("John Smith");

john();
```

译者注：利用命名函数表达式也可以实现上述例子的同样效果

```js
function createPerson(identity) {
  function Person() {
    console.log(Person.identity);
  }
  Person.identity = identity;
  return Person;
}
var john = createPerson("John Smith");

john(); //John Smith
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Function")}}
