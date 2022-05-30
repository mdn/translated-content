---
title: 回调函数
slug: Glossary/Callback_function
tags:
  - Callback
  - 回调函数
  - CodingScripting
  - Glossary
translation_of: Glossary/Callback_function
---
被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。

例如：

```js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

以上示例为{{glossary("synchronous","同步")}}回调，它是立即执行的。

然而需要注意的是，回调函数经常被用于在一个{{glossary("asynchronous","异步")}}操作完成后执行代码，它们被称为异步回调。一个常见的例子是在 promise 末尾添加的 [`.then`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 内执行回调函数（在 promise 被兑现或拒绝时执行）。这个结构常用于许多现代的 web API，例如 [`fetch()`](/zh-CN/docs/Web/API/fetch)。

## 参见

- 维基百科上的{{interwiki("wikipedia", "回调函数", "回调函数")}}
