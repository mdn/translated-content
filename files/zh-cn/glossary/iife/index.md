---
title: 立即调用函数表达式
slug: Glossary/IIFE
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**立即调用函数表达式**（IIFE）是一个在定义时就会立即执行的 {{glossary("JavaScript")}} {{glossary("function","函数")}}。IIFE 这个名字是由 Ben Alman 在[他的博客](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife)中提出的。

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

它是一种设计模式，也被称为{{glossary("Self-Executing Anonymous Function", "自执行匿名函数")}}，主要包含两部分：

1. 第一部分是一个具有词法作用域的匿名函数，并且用{{jsxref("Operators/Grouping", "圆括号运算符", "", 1)}} `()` 运算符闭合起来。这样不但阻止了外界访问自执行匿名函数中的变量，而且不会污染全局作用域。

2. 第二部分创建了一个立即执行函数表达式 `()`，通过它，JavaScript 引擎将立即执行该函数。

## 示例

### 避免污染全局命名空间

因为我们的程序可能包括很多来自不同源文件的函数和全局变量，因此限制全局变量的数量非常重要。如果我们有一些不再使用的初始化代码，我们可以使用立即调用函数表达式模式。由于我们不会再次重用代码，因此在这种情况下使用立即调用函数表达式会比使用函数声明或者函数表达式更好。

```js
(() => {
  // 初始化代码
  let firstVariable;
  let secondVariable;
})();

// firstVariable 和 secondVariable 变量在函数执行后会被丢弃
```

### 执行一个异步函数

[`async`](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function) 立即调用函数表达式允许你在比较旧的浏览器中或者 JavaScript 运行环境没有[顶层 await](/zh-CN/docs/Web/JavaScript/Reference/Operators/await#在顶层使用_await) 时使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 和 [`for-await`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of)：

```js
const getFileStream = async (url) => {
  // 具体实现
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

### 模块模式

我们也可以使用立即调用函数表达式来创建私有和公有变量、方法。对于模块模式的更复杂用法和立即调用函数表达式的其他用途，你可以参考 Addy Osmani 的《Learning JavaScript Design Patterns》这本书。

```js
const makeWithdraw = (balance) => {
  ((copyBalance) => {
    let balance = copyBalance; // 这个变量是私有的
    const doBadThings = () => {
      console.log("我要用你的钱做坏事");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "不够钱";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "我要用你的钱做坏事"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined；这个方法是私有的
const secondAccount = makeWithdraw(20); // "我要用你的钱做坏事"
console.log(secondAccount.withdraw(30)); // "不够钱"
console.log(secondAccount.withdraw(20)); // 0
```

### ES6 之前在 For 循环中使用 var

在 **ES6** 引入 **let** 和 **const** 声明和块级作用域之前，我们可以在一些旧代码中看到立即调用函数表达式的以下用法。通过 **var** 声明变量，只有函数作用域和全局作用域。假设我们创建两个按钮，分别称为“按钮 0”和“按钮 1”，并且当我们点击它们时，想让它们分别弹窗提示 0 和 1。下面的代码不能起作用：

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `按钮 ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

当点击时，按钮 0 和按钮 1 都会弹窗提示“2”，因为 `i` 是全局的，且最终的值为 2。在 ES6 之前，为了解决这个问题，我们可以使用立即调用函数表达式模式：

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `按钮 ${i}`;
  button.onclick = (function (copyOfI) {
    return () => {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

当点击时，按钮 0 和按钮 1 会分别弹窗提示 0 和 1，变量 `i` 是全局的。更简单的是使用 **let** 声明变量：

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `按钮 ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

当我们点击按钮时，这些按钮会分别弹窗提示 0 和 1。

## 参见

- 维基百科上的[立即调用函数表达式](https://zh.wikipedia.org/wiki/立即调用函数表达式)
- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("Function", "函数")}}
  - {{Glossary("Self-Executing Anonymous Function", "自执行匿名函数")}}
