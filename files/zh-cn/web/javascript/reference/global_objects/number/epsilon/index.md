---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---

{{JSRef}}

**`Number.EPSILON`** 属性表示 1 与{{jsxref("Number")}}可表示的大于 1 的最小的浮点数之间的差值。

你不必创建一个 {{jsxref("Number")}} 对象来访问这个静态属性（直接使用 `Number.EPSILON`）。

{{js_property_attributes(0, 0, 0)}}

## 描述

`EPSILON` 属性的值接近于 `2.2204460492503130808472633361816E-16`，或者 `2^-52`。

## 示例

### 测试是否相等

```js
x = 0.2;
y = 0.3;
z = 0.1;
equal = Math.abs(x - y + z) < Number.EPSILON;
```

## Polyfill

```plain
if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number")}}
