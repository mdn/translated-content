---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---

{{JSRef}}

**`Number.parseInt()`** 静态方法解析一个字符串参数并返回一个指定基数的整数。

{{InteractiveExample("JavaScript Demo: Number.parseInt()", "taller")}}

```js interactive-example
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Expected output: 1500

console.log(roughScale("321", 2));
// Expected output: 0
```

## 语法

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### 参数

- `string`
  - : 要被解析的值，会被[强制转化为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)。字符串开头的空白符将会被忽略。
- `radix` {{optional_inline}}

  - : `2` 到 `36` 之间的整数，表示 `string` 的*基数*（数学记数系统中的基）。

    如果 `radix` 为 `undefined` 或 `0`，则 `radix` 将被默认设置为 `10`，除非该数字以码元对 `0x` 或 `0X` 开头，在这种情况下，`radix` 将被默认设置为 `16`。

### 返回值

从给定的 `string` 中解析出的一个整数。

如果 `radix` 小于 `2` 或大于 `36`，或第一个非空白字符不能转换为数字，则返回 {{jsxref("NaN")}}。

## 示例

### Number.parseInt 与 parseInt 对比

这个方法和全局的 {{jsxref("parseInt", "parseInt()")}} 函数具有相同的功能：

```js
Number.parseInt === parseInt; // true
```

其目的是对全局变量进行模块化，另见 {{jsxref("parseInt", "parseInt()")}} 获取更多详情和示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.parseInt` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseInt", "parseInt()")}}
