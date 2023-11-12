---
title: parseFloat
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
---

{{jsSidebar("Objects")}}

**`parseFloat()`** 函数解析一个参数（必要时先转换为字符串）并返回一个浮点数。

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## 语法

```plain
parseFloat(string)
```

### 参数

- `string`
  - : 需要被解析成为浮点数的值。

### 返回值

给定值被解析成浮点数。如果给定值不能被转换成数值，则会返回 {{jsxref("NaN")}}。

## 描述

`parseFloat` 是个全局函数，不属于任何对象。

- 如果 `parseFloat` 在解析过程中遇到了正号（`+`）、负号（`-` U+002D HYPHEN-MINUS）、数字（`0`-`9`）、小数点（`.`）、或者科学记数法中的指数（e 或 E）以外的字符，则它会忽略该字符以及之后的所有字符，返回当前已经解析到的浮点数。
- 第二个小数点的出现也会使解析停止（在这之前的字符都会被解析）。
- 参数首位和末位的空白符会被忽略。
- 如果参数字符串的第一个字符不能被解析成为数字，则 `parseFloat` 返回 `NaN`。
- `parseFloat` 也可以解析并返回 {{jsxref("Infinity")}}。
- `parseFloat` 解析 {{jsxref("BigInt")}} 为 {{jsxref("Number", "Numbers")}}, 丢失精度。因为末位 `n` 字符被丢弃。

考虑使用 {{jsxref("Number", "Number(<em>value</em>)")}} 进行更严谨的解析，只要参数带有无效字符就会被转换为 {{jsxref("NaN")}} 。

`parseFloat` 也可以转换一个已经定义了 `toString` 或者 `valueOf` 方法的对象，它返回的值和在调用该方法的结果上调用 `parseFloat` 值相同。

## 示例

### 示例：`parseFloat`返回正常数字

下面的例子都返回 **3.14**

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
parseFloat({
  toString: function () {
    return "3.14";
  },
});
```

### `parseFloat` 返回 NaN

下面的例子将返回`NaN`

```js
parseFloat("FF2");
```

### parseFloat 和 BigInt

以下例子均返回 `900719925474099300`，当整数太大以至于不能被转换时将失去精度。

```js
parseFloat(900719925474099267n);
parseFloat("900719925474099267n");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
