---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.clz32()`** 函数返回一个数字在转换成 32 无符号整形数字的二进制形式后，开头的 0 的个数，比如 `1000000` 转换成 32 位无符号整形数字的二进制形式后是 `00000000000011110100001001000000`, 开头的 0 的个数是 12 个，则 `Math.clz32(1000000)` 返回 `12`.

## 语法

```plain
Math.clz32 (x)
```

### 参数

- x
  - : 一个数字。

## 描述

"clz32" 是 CountLeadingZeroes32 的缩写。

如果 `x` 不是数字类型，则它首先会被转换成数字类型，然后再转成 32 位无符号整形数字。

如果转换后的 32 位无符号整形数字是 `0`, 则返回 `32`, 因为此时所有位上都是 `0`.

`NaN`, `Infinity`, `-Infinity` 这三个数字转成 32 位无符号整形数字后都是 `0`.

这个函数主要用于那些编译目标为 JS 语言的系统中，比如 Emscripten.

## 示例

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

const stuff = [
  NaN,
  Infinity,
  -Infinity,
  0,
  -0,
  false,
  null,
  undefined,
  "foo",
  {},
  [],
];
stuff.every((n) => Math.clz32(n) === 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

## 计算前导 1 的个数

目前 javascript 尚未提供 `Math.clon` 函数来计算前导 1 的个数（之所以叫“clon”而非“clo”，是因为“clo”与“clz”太过相似，特别对那些母语不是英语的人来说），但是你可以通过将一个数取反并将其作为 `Math.clz32` 的参数来实现 clon 函数。其中的原理非常简单，因为对 1 取反是 0，反之亦然，所以用 `Math.clz32` 计算前导 0 的个数就变成计算前导 1 的个数。

先看以下代码：

```js
const a = 32776; // 00000000000000001000000000001000（16 个前导 0）
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111（对 32776 取反，0 个前导 0）
Math.clz32(b); // 0（这与 a 中有多少个前导 0 等价）
```

通过以上方法，`clon` 函数可以定义如下：

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

现在，我们可以进一步实现计算“尾随 0”和“尾随 1”的个数了。下面的 `ctrz` 函数将第一个 1 之后的高数位全部置为 1 然后取反，再用 `Math.clz32` 求得尾随 0 的个数。

```js
var clz = Math.clz32;
function ctrz(integer) {
  // 计算尾随 0 个数
  // 1. 将第一个 1 之后的高数位全部置为 1
  // 00000000000000001000000000001000 => 11111111111111111111111111111000
  integer |= integer << 16;
  integer |= integer << 8;
  integer |= integer << 4;
  integer |= integer << 2;
  integer |= integer << 1;
  // 2. 然后，对该数取反，此时低位的 1 的个数即为所求
  return (32 - clz(~integer)) | 0; // `| 0` 用于保证结果为整数
}
function ctron(integer) {
  // 计算尾随 1 个数
  // JavaScript 中没有移位补 1 的运算符
  // 所以下面的代码是最快的
  return ctrz(~integer);
  /* 为了看起来比较对称，你也可以使用以下代码：
       // 1. 将第一个 0 之后的高数位全部置为 0
       integer &= (integer << 16) | 0xffff;
       integer &= (integer << 8 ) | 0x00ff;
       integer &= (integer << 4 ) | 0x000f;
       integer &= (integer << 2 ) | 0x0003;
       integer &= (integer << 1 ) | 0x0001;
       // 2. 然后，对该数取反，此时低位的 0 的个数即为所求
       return 32 - clon(~integer) |0;
    */
}
```

将以上函数改写成 ASM.JS 模块——然后，你就可以去跟别人炫耀了！ASM.JS 就是用来干这个的。

```js
var countTrailsMethods = (function (stdlib, foreign, heap) {
  "use asm";
  var clz = stdlib.Math.clz32;
  function ctrz(integer) {
    // 计算尾随 0 个数
    integer = integer | 0; // 确保是整数
    // 1. 将第一个 1 之后的高数位全部置为 1
    // ASMjs 中不允许^=、&=、和 |=
    integer = integer | (integer << 16);
    integer = integer | (integer << 8);
    integer = integer | (integer << 4);
    integer = integer | (integer << 2);
    integer = integer | (integer << 1);
    // 2. 然后，对该数取反，此时低位的 1 的个数即为所求
    return (32 - clz(~integer)) | 0;
  }
  function ctron(integer) {
    // 计算尾随 1 个数
    integer = integer | 0; // 确保是整数
    return ctrz(~integer) | 0;
  }
  // 蛋疼的是，ASM.JS 必须使用糟糕的 object 类型：
  // unfourtunately, ASM.JS demands slow crummy objects:
  return { a: ctrz, b: ctron };
})(window, null, null);
var ctrz = countTrailsMethods.a;
var ctron = countTrailsMethods.b;
```

## Polyfill

这个 polyfill 效率最高。

```js
if (!Math.clz32)
  Math.clz32 = (function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0; // 将 x 转换为 Uint32 类型
      if (asUint === 0) {
        return 32;
      }
      return (31 - ((log(asUint) / LN2) | 0)) | 0; // “| 0”相当于 Math.floor
    };
  })(Math.log, Math.LN2);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
