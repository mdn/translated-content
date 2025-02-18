---
title: 空语句
slug: Web/JavaScript/Reference/Statements/Empty
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Statements")}}

**空语句**用于不提供任何语句，尽管 JavaScript 语法期望提供一个语句。

{{InteractiveExample("JavaScript Demo: Statement - Empty")}}

```js interactive-example
const array1 = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < array1.length; array1[i++] = 0 /* empty statement */);

console.log(array1);
// Expected output: Array [0, 0, 0]
```

## 语法

```js-nolint
;
```

## 描述

空语句由分号（`;`）组成，表示即使 JavaScript 语法要求提供语句，也不执行任何语句。

相反的情况是，你希望有多个语句，但 JavaScript 只允许一个语句，可以使用[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)来实现，它将多个语句组合成一个语句。

## 示例

### 循环体

空语句有时用于循环语句中。请参阅以下示例，其中循环体为空：

```js-nolint
const arr = [1, 2, 3];

// 将所有数组值赋值为 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* 空语句 */ ;

console.log(arr);
// [0, 0, 0]
```

### 非刻意使用

*刻意*使用空语句时，最好在代码中添加注释说明，因为空语句很难与普通的分号区分开来。

在下面的示例中，这种用法可能并非有意为之：

```js-nolint example-bad
if (condition);      // 注意，这个“if”不会产生任何作用！
  killTheUniverse(); // 所以这一行总是会执行！！！
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)
