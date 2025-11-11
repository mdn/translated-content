---
title: CSSStyleDeclaration.length
slug: Web/API/CSSStyleDeclaration/length
---

{{ APIRef("CSSOM") }}

这是一个只读的属性，它返回一个指定元素声明过的样式个数

## 语法

```plain
var num = styles.length;
```

### 值

指定元素上明确声明过的样式属性个数。

## 示例

获取下面 HTML 元素明确设置过的属性个数：

```html
<div
  id="div1"
  style="margin: 0 10px; background-color: #CA1; font-family: monospace"></div>
```

JavaScript 代码：

```plain
var myDiv = document.getElementById('div1'); var divStyle = myDiv.style; var len = divStyle.length; // 6
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
