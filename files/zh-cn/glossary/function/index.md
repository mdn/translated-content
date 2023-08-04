---
title: Function（函数）
slug: Glossary/Function
---

{{GlossarySidebar}}

**function**，**函数**，是一个可以被其他代码或其自身调用的代码片段，或者是一个指向该函数的{{Glossary("variable", "变量")}} 。当函数被调用时，{{Glossary("Argument", "参数")}}被作为输入传递给函数，并且函数可以返回输出。在 {{glossary("JavaScript")}} 中，函数也是一个{{glossary("object", "对象")}}。

函数名是作为函数声明或函数表达式的一部分声明的{{Glossary("identifier", "标识符")}}。函数的{{Glossary("scope", "作用域")}}取决于函数名是一个声明还是表达式。

### 不同类型的函数

**匿名函数**是一个没有函数名的函数：

```js
function () {};
// or using the ECMAScript 2015 arrow notation
() => {};
```

**命名函数**是具有函数名称的函数：

```js
function foo() {}
// or using the ECMAScript 2015 arrow notation
const foo = () => {};
```

**内部函数**是另一个函数内的函数（下面例子中的 `square`）。外部函数是包含一个函数的函数（下面例子中的 `addSquares`）：

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
//Using ECMAScript 2015 arrow notation
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
//Using ECMAScript 2015 arrow notation
const loop = (x) => {
  if (x >= 10) return;
  loop(x + 1);
};
```

**`立即调用函数表达式`**（{{glossary("IIFE")}}）是一种被加载到浏览器的编译器之后直接调用的函数。识别 IIFE 的方法是通过在函数声明的末尾定位额外的左和右括号。

```js
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();
```

如果你想进一步了解 IIFE, 可参考以下的维基百科的页面：[Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

## 了解更多

### 技术参考

- [Functions](/zh-CN/docs/Web/JavaScript/Guide/Functions)
- [Arrow Functions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
