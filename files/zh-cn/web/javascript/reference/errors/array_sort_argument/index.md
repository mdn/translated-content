---
title: "TypeError: invalid Array.prototype.sort argument"
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
---

{{jsSidebar("Errors")}}

## 信息

```plain
TypeError: invalid Array.prototype.sort argument (Firefox)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

{{jsxref("Array.prototype.sort()")}} 的参数预期为 {{jsxref("undefined")}} 或者是一个比较操作数的函数。

## 示例

### 无效的

```js example-bad
[1, 3, 2].sort(5); // TypeError

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || "asc"); // TypeError
```

### 有效的

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || "asc"]); // [1, 2, 3]
```

## 相关

- {{jsxref("Array.prototype.sort()")}}
