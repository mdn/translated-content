---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
---

{{JSRef}} {{deprecated_header}}

**`sub()`**方法创建一个 {{HTMLElement("sub")}} HTML 元素，使字符串展示为下标。

## 语法

```plain
str.sub()
```

### 返回值

包含{{HTMLElement("sub")}} HTML 元素的字符串。

## 描述

`sub()`方法将字符串嵌入`<sub>`标签： `"<sub>str</sub>"`.

## 示例

### 使用`sub()`和`sup()`方法

下面的示例使用了`sub()`和{{jsxref("String.prototype.sup()", "sup()")}}方法来格式化字符串：

```js
var superText = 'superscript';
var subText = 'subscript';

console.log('This is what a ' + superText.sup() + ' looks like.');
// 这就是<sup>superscript</sup>的样子。

console.log('This is what a ' + subText.sub() + ' looks like.');
// 这就是<sub>subscript</sub>的样子。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("String.prototype.sup()")}}
