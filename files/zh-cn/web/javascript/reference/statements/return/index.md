---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

**`return`** 语句终止函数的执行，并返回一个指定的值给函数调用者。

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## 语法

```js-nolint
return [expression]
```

- `expression`
  - : 要返回的值的表达式。如果忽略，则返回 `undefined`。

## 描述

当在函数体中使用 `return` 语句时，函数将会停止执行。如果指定一个值，则该值会被返回给函数调用者。例如，以下函数返回其参数 `x` 的平方，其中 `x` 是数字。

```js
function square(x) {
  return x * x;
}
const demo = square(3);
// demo will equal 9
```

如果省略该值，则返回 `undefined`。

下面的 return 语句都会终止函数的执行：

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### 自动插入分号

[自动插入分号（ASI）](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)规则会影响 `return` 语句。在 `return` 关键字和被返回的表达式之间不允许使用换行符。

```js-nolint
return
a + b;
```

根据 ASI，被转换为：

```js
return;
a + b;
```

控制台会警告“unreachable code after return statement”。

> **备注：** 从 Firefox 40 开始，如果在 `return` 语句后发现不可达的代码，控制台会显示一个警告。

为了避免这个问题（防止 ASI），你可以使用括号：

```js-nolint
return (
  a + b
);
```

## 示例

### 中断一个函数的执行

函数将会在 `return` 语句执行后立即中止。

```js
function counter() {
  for (let count = 1; ; count++) {
    // 无限循环
    console.log(`${count}A`); // 执行 5 次
    if (count === 5) {
      return;
    }
    console.log(`${count}B`); // 执行 4 次
  }
  console.log(`${count}C`); // 永远不会执行
}

counter();

// Output:
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

参见关于[闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)的文章。

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
