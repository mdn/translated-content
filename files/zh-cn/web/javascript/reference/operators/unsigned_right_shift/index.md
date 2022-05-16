---
title: 无符号右移运算符（>>>）
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Unsigned_right_shift
---
{{jsSidebar("Operators")}}

**无符号右移运算符（>>>）**（零填充右移）将第一个操作数向右移动指定（二进制）位数。

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift.html")}}

## 语法

```js
a >>> b
```

## 描述

该运算符将第一个操作数向右移动指定的位数。右移的多余位将被丢弃。值为零的比特将从左侧移入。其符号位变为 `0`，因此其表示的结果始终为非负数。与其它按位运算符不同，无符号右移返回无符号 32 位整数。

对于非负数，无符号右移与有符号右移的结果相同。例如，`9 >>> 2` 与 `9 >> 2` 的结果都为 2。

```js
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

而对于负数，两者的结果则不相同。例如，`-9 >>> 2` 的结果为 1073741821，而 `-9 >> 2` 的结果为 `-3`，与前者不同。

```js
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

## 示例

### 使用无符号右移

```js
 9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南：位运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#位运算符)
- [无符号右移赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
