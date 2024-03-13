---
title: event.defaultPrevented
slug: Web/API/Event/defaultPrevented
---

{{ APIRef("DOM") }}

## 概述

返回一个布尔值，表明当前事件是否调用了 {{ domxref("event.preventDefault()") }}方法。

> **备注：** 你应该使用该属性来代替以前的非标准的已经被废弃的`getPreventDefault()`方法 (查看[Firefox bug 691151](https://bugzil.la/691151)).

## 语法

```js
bool = event.defaultPrevented;
```

## 示例

```js
if (e.defaultPrevented) {
  /* 事件的默认动作已被取消*/
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
