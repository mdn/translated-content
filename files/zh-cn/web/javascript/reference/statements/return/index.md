---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

**`return`** 语句用于终止函数执行，并指定要返回给调用函数的值。

{{InteractiveExample("JavaScript Demo: Statement - Return")}}

```js interactive-example
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0
```

## 语法

```js-nolint
return;
return expression;
```

- `expression` {{optional_inline}}
  - : 待返回其值的表达式。如果省略，则返回 `undefined`。

## 描述

`return` 语句只能在函数体内使用。当 `return` 出现在函数体内部时，该函数的执行将会停止。`return` 语句在不同类型的函数中具有不同的效果：

- 在普通函数中，对该函数的调用会返回其返回值。
- 在异步函数中，生成的 promise 将以返回的值敲定。
- 在生成器函数中，生成的生成器对象的 `next()` 方法将返回 `{ done: true, value: 返回的值 }`。
- 在异步生成器函数中，生成的异步生成器对象的 `next()` 方法返回一个已兑现的 promise，其值为 `{ done: true, value: 返回的值 }`。

如果在 {{jsxref("Statements/try...catch", "try")}} 块内执行了 `return` 语句，它会首先执行 `finally` 块然后才实际返回值（如果存在）。

### 自动分号补全

语法禁止在 `return` 关键字和要返回的表达式之间使用换行符。

```js-nolint example-bad
return
a + b;
```

上述代码会被[自动分号补全（ASI）](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)转换为：

```js-nolint
return;
a + b;
```

这会使函数返回 `undefined`，而 `a + b` 表达式永远不会被计算。这可能会在[控制台中生成警告](/zh-CN/docs/Web/JavaScript/Reference/Errors/Stmt_after_return)。

为避免此问题（防止 ASI），你可以使用括号：

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
