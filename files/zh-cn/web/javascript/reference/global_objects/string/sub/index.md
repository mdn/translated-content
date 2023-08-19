---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 值的 **`sub()`** 方法创建一个字符串，将该字符串嵌入到 {{HTMLElement("sub")}} 元素（`<sub>str</sub>`）中，这会导致该字符串显示为下标。

> **备注：** 所有 [HTML 包装器方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法) 均已弃用，仅出于兼容性目的而进行标准化。请改用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)，例如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)。

## 语法

```js-nolint
sub()
```

### 返回值

以 `<sub>` 开始标记开头的字符串，然后是文本 `str`，最后是 `</sub>` 结束标记。

## 示例

### 使用 sub() 和 sup() 方法

下面的示例使用了 `sub()` 和 {{jsxref("String.prototype.sup()", "sup()")}} 方法来格式化字符串：

```js
const superText = "superscript";
const subText = "subscript";

console.log(`This is what a ${superText.sup()} looks like.`);
// "This is what a <sup>superscript</sup> looks like."

console.log(`This is what a ${subText.sub()} looks like.`);
// "This is what a <sub>subscript</sub> looks like."
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `String.prototype.sub` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sup()")}}
