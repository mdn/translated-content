---
title: event.isChar
slug: orphaned/Web/API/UIEvent/isChar
original_slug: Web/API/UIEvent/isChar
---
{{ ApiRef() }}

> **警告：** 不要使用该属性，该属性有一个已知的 bug，就是它始终返回`false`,从不返回`true`.查看<https://bugzilla.mozilla.org/show_bug.cgi?id=312552>

### 概述

返回一个布尔值，表明该事件是否是由一个字符按键触发的。

### 语法

```
bool = event.isChar
```

### 例子

```
 if(e.isChar){
   echoInput(e.type);
 }
```

### 备注

一些常用的组合键可能会触发键盘事件，但是不会产生任何字符 (例如:CTRL + ALT + ?).在这种情况下，isChar 返回 false.isChar 常用于判断用户在一个文本输入框内输入的是否为一个字符。

### 规范

不属于任何公开的规范
