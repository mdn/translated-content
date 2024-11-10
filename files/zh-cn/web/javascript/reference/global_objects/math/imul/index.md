---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
---

{{JSRef}}

该函数将两个参数分别转换为 32 位整数，相乘后返回 32 位结果，类似 C 语言的 32 位整数相乘。

{{EmbedInteractiveExample("pages/js/math-imul.html")}}

## 语法

```plain
var product = Math.imul(a, b)
```

### 参数

- `a`
  - : 被乘数。
- `b`
  - : 乘数。

### 返回值

类似 C 语言 32 位整数相乘的结果。

## 描述

`Math.imul()` 可以进行类似 C 语言的 32 位整数相乘。该特性对于一些项目比如 [Emscripten](http://en.wikipedia.org/wiki/Emscripten) 很有用。因为 `imul()` 是 `Math` 的静态方法，所以用法是 `Math.imul()`，而不是新创建的 `Math` 对象的方法 (`Math` 不是构造函数)。如果使用 JavaScript 浮点数做为 `imul` 的参数，会有性能损失。这是因为相乘前 imul 会将浮点数转换为整数，相乘后会将整数重新转换为浮点数，这两步转换的开销是比较大的。imul 存在的原因是在 AsmJS(目前为止唯一一种环境) 下它是快速的。AsmJS 使 JIST-optimizers 更容易实现 JavaScript 内部的整数。现代浏览器中，唯一能体现出 imul 性能优越的场景是两个 Number 内部以整数的形式相乘 (仅在 AsmJS 下可行)。

## 示例

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); // -8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); //-5
Math.imul(0xfffffffe, 5); //-10
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Math.imul` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- 维基百科上的 [Emscripten](https://zh.wikipedia.org/wiki/Emscripten) 词条
