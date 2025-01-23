---
title: "TypeError: invalid Array.prototype.sort argument"
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
l10n:
  sourceCommit: d311eaee27eef2a590de711bb545b741044cb9b8
---

{{jsSidebar("Errors")}}

JavaScript 异常“invalid Array.prototype.sort argument”会在 {{jsxref("Array.prototype.sort()")}} 方法（以及其相关方法：{{jsxref("Array.prototype.toSorted()")}}、{{jsxref("TypedArray.prototype.sort()")}}、{{jsxref("TypedArray.prototype.toSorted()")}}）的参数既不是 {{jsxref("undefined")}} 也不是用于比较其操作数的函数时触发。

## 消息

```plain
TypeError: The comparison function must be either a function or undefined（基于 V8）

TypeError: invalid Array.prototype.sort argument (Firefox)
TypeError: non-function passed to Array.prototype.toSorted (Firefox)
TypeError: invalid %TypedArray%.prototype.sort argument (Firefox)

TypeError: Array.prototype.sort requires the comparator argument to be a function or undefined (Safari)
TypeError: Array.prototype.toSorted requires the comparator argument to be a function or undefined (Safari)
TypeError: TypedArray.prototype.sort requires the comparator argument to be a function or undefined (Safari)
TypeError: TypedArray.prototype.toSorted requires the comparator argument to be a function or undefined (Safari)
```

## 错误类型

{{jsxref("TypeError")}}

## 什么地方出错了？

{{jsxref("Array.prototype.sort()")}} 方法（以及其相关方法：{{jsxref("Array.prototype.toSorted()")}}、{{jsxref("TypedArray.prototype.sort()")}}、{{jsxref("TypedArray.prototype.toSorted()")}}）的参数应为 {{jsxref("undefined")}} 或用于比较其操作数的函数。

## 示例

### 无效示例

```js example-bad
[1, 3, 2].sort(5); // TypeError
students.toSorted("name"); // TypeError
```

### 有效示例

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]
[1, 3, 2].sort((a, b) => a - b); // [1, 2, 3]
students.toSorted((a, b) => a.name.localeCompare(b.name));
```

## 参见

- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
