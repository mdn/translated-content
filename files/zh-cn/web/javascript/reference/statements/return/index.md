---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

**`return`** 语句会终止函数执行并指定要返回给函数调用者的值。

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## 语法

```js-nolint
return;
return expression;
```

- `expression` {{optional_inline}}
  - : 要返回的值的表达式。如果忽略，则返回 `undefined`。

## 描述

`return` 语句只能在函数体内使用。当在函数体中使用 `return` 语句时，函数的执行会停止。`return` 语句在不同类型的函数中具有不同的效果：

- 在普通函数中，对该函数的调用会计算出返回值。
- 在异步函数中，生成的 promise 将以返回的值解析。
- 在生成器函数中，生成的生成器对象的 `next()` 方法返回 `{ done: true, value: returnedValue }`。
- 在异步生成器函数中，生成的异步生成器对象的 `next()` 方法返回一个已兑现的 promise，其值为 `{ done: true, value: returnedValue }`。

如果在 {{jsxref("Statements/try...catch", "try")}} 块内执行了 `return` 语句，它会首先执行 `finally` 块然后才实际返回值（如果存在）。

### 自动分号补全

语法禁止在 `return` 关键字和要返回的表达式之间存在换行符。

```js-nolint example-bad
return
a + b;
```

上述代码会被[自动分号补全（ASI）](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)转换为：

```js-nolint
return;
a + b;
```

这会使函数返回 `undefined`，而 `a + b` 表达式永远不会被计算。这可能会在[控制台中生成警告](/zh-CN/docs/Web/JavaScript/Reference/Errors/Stmt_after_return)，为避免此问题（防止 ASI），你可以使用括号：

```js-nolint
return (
  a + b
);
```

## 示例

### 中断函数

函数在调用 `return` 时立即停止执行。

```js
function counter() {
  // 无限循环
  for (let count = 1; ; count++) {
    console.log(`${count}A`); // 直到 5 为止
    if (count === 5) {
      return;
    }
    console.log(`${count}B`); // 直到 4 为止
  }
  console.log(`${count}C`); // 从不出现
}

counter();

// 输出：
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### 返回一个函数

请参阅有关[闭包](/zh-CN/docs/Web/JavaScript/Closures)的文章。

```js
function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer = magic();
answer(1337); // 56154
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [闭包](/zh-CN/docs/Web/JavaScript/Closures)
