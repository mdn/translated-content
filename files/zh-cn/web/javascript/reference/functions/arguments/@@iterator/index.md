---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
---

{{jsSidebar("Functions")}}

**`@@iterator`** 属性的初始值是和 {{jsxref("Array.prototype.values")}} 属性的初始值相同的对象。

## 语法

```plain
arguments[Symbol.iterator]()
```

## 示例

### 使用`for...of`循环的迭代

```js
function f() {
  // 你的浏览器必须支持 for..of 循环
  // 以及 for 循环中的 let 区域变量
  for (let letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- {{jsxref("Array.prototype.values()")}}
