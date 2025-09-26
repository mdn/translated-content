---
title: Function（函数）
slug: Glossary/Function
---

{{GlossarySidebar}}

**函数**（Function）是一个可以被其他代码或其自身调用的代码片段，或者是一个指向该函数的{{Glossary("variable", "变量")}} 。当函数被调用时，{{Glossary("Argument", "实际参数")}}被作为输入传递给函数，并且函数可以返回输出。在 {{glossary("JavaScript")}} 中，函数也是一个{{glossary("object", "对象")}}。

函数名是作为函数声明或函数表达式的一部分声明的{{Glossary("identifier", "标识符")}}。函数的{{Glossary("scope", "作用域")}}取决于函数名是一个声明还是表达式。

### 不同类型的函数

**匿名函数**是一个没有函数名的函数：

```js
// 使用函数表达式创建的匿名函数
(function () {});

// 使用箭头函数创建的匿名函数
() => {};
```

下面的术语不在 ECMAScript 语言规范中，只是用于区分不同类型函数的行话。

**具名函数**是具有函数名称的函数：

```js
// 函数声明
function foo() {}

// 命名函数表达式
(function bar() {});

// 箭头函数
const baz = () => {};
```

**内部函数**是函数内的另一个函数（下面例子中的 `square`）。**外部函数**是包含一个函数的函数（下面例子中的 `addSquares`）：

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

// 箭头函数
const addSquares = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
```

**递归函数**是调用自身的函数。可参考{{Glossary("Recursion", "递归")}}。

```js
function loop(x) {
  if (x >= 10) return;
  loop(x + 1);
}

// 箭头函数
const loop = (x) => {
  if (x >= 10) return;
  loop(x + 1);
};
```

**立即调用函数表达式**（{{glossary("IIFE")}}）是一种被加载到浏览器的编译器之后直接调用的函数。识别 IIFE 的方法是通过在函数声明的末尾定位额外的左和右括号。

函数表达式，不管是具名还是匿名，都可以被立即调用。

```js
(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();

(() => console.log("hello world"))();
```

声明式的函数不可以被立即调用，因为 IIFE 一定是函数表达式。

```js example-bad
function foo() {
  console.log('Hello Foo');
}();
```

如果你想进一步了解 IIFE, 可参考以下的维基百科的页面：[立即调用函数表达式](https://zh.wikipedia.org/wiki/立即调用函数表达式)

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)
- [箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
