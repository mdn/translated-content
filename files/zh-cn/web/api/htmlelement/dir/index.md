---
title: HTMLElement.dir
slug: Web/API/HTMLElement/dir
---

{{ APIRef("HTML DOM") }}

### 概述

**`dir`**属性用于获取或设置当前元素的元素内容的文本书写方向。

### 语法

```
var CurrentWritingDirection = elementNodeReference.dir;
elementNodeReference.dir = NewWritingDirection;
```

`CurrentWritingDirection`是一个字符串，表示当前元素的元素内容的文本书写方向。NewWritingDirection 是一个变量，表示当前元素新的文本书写方向。

**dir** 的值可以是**`ltr`, 表示从左到右**, 和**`rtl`, 表示从右到左**.

### 例子

```
var parg = document.getElementById("para1");
parg.dir = "rtl";
// 改变一个元素的元素内容的文本书写方向。
```

### 备注

元素的文本书写方向是指文本的排列顺序 (目的是为了支持其他不同语言的系统). 阿拉伯语和希伯来语是典型的使用 rtl 排列顺序的语言。

一个图像文件也可以将 `dir` 属性设置为 `"rtl"`,这样的话，它的 `title` 和 `alt` 属性文字会按"rtl"顺序来显示。

当表格的`dir`属性设置为"rtl"时，那么该表格的所有列将从右到左排列。

> **备注：** 在 Gecko 7.0 之前，该属性的返回值不一定都是小写的。从 Gecko 7.0 开始，该属性的返回值全部为小写字母，这也是规范中所规定的。

### 规范

[W3C DOM Level 2 HTML: dir](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-52460740)
