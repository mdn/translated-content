---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
---

{{JSRef}} {{deprecated_header}}

**`sup()`**方法创建 一个{{HTMLElement("sup")}}HTML 元素，使字符串显示为上标。

## 语法

```plain
str.sup()
```

### 返回值

包含{{HTMLElement("sup")}} HTML 元素的字符串。

## 描述

`sup()` 方法将字符串嵌入 `<sup>` 标签中：`"<sup>str</sup>"`.

## 示例

### 使用`sub()`和`sup()`方法

下面的示例使用了{{jsxref("String.prototype.sub()", "sub()")}}和`sup()`方法来格式化字符串：

```js
var superText = 'superscript';
var subText = 'subscript';

console.log('This is what a ' + superText.sup() + ' looks like.');
// "这就是<sup>superscript</sup>的样子。"

console.log('This is what a ' + subText.sub() + ' looks like.');
// "这就是<sub>subscript</sub>的样子。"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("String.prototype.sub()")}}
