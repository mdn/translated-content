---
title: element.onbeforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
---

{{ApiRef}}

## 概述

当 HTML 文档中的[`<script>`](../HTML/Element/script)标签内的代码将要执行时触发该事件，如果这个`script`标签是用`appendChild()`等方法动态添加上去的，则不会触发该事件。

## 语法

```plain
document.onbeforescriptexecute = funcRef;
```

当`beforescriptexecute`事件触发时，`funcRef`函数就会被调用。传入参数`event`的`target`属性指向触发该事件的那个`script`元素。

## 例子

```js
function starting(e) {
  logMessage("Starting script with ID: " + e.target.id);
}

document.addEventListener("beforescriptexecute", starting, true);
```

[查看在线演示](/samples/html/currentScript.html)

## 规范

- [HTML5](http://www.whatwg.org/specs/web-apps/current-work/#the-script-element)

## 相关链接

- {{domxref("element.onafterscriptexecute")}}
- {{domxref("document.currentScript")}}
