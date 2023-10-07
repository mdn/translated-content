---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
---

{{jsSidebar("Statements")}}

**空语句**用来表明没有语句，尽管 JavaScript 语法希望有语句。

## 语法

```plain
;
```

## 描述

空语句是一个分号（;），表示不会执行任何语句，即使 JavaScript 语法需要一个语句。相反，当你需要多行语句，但 JavaScript 只允许一个时，可以使用[语句块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)；语句块可以将多条语句合并为一个。

## 示例

空语句有时与循环语句一起使用。以下示例使用空循环体：

```js
var arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0 /* empty statement */);

console.log(arr);
// [0, 0, 0]
```

**提示：**在使用空语句的情况下专门写上注释是个不错的主意，因为不是很容易区分空语句和普通的分号。下面的示例可能不是故意加上分号的：

```js-nolint
if (condition); // Caution, this "if" does nothing!
  killTheUniverse() // So this gets always executed!!!
```

另一个例子：[`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句不带花括号（`{}`）。如果`three`为`true`, 不会发生任何事，`four`不会执行，同时`else`从句中的`launchRocket()`函数也不会执行。

```js-nolint
if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/block", "块语句")}}
