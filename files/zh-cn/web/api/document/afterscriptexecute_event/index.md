---
title: element.onafterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
---

{{ApiRef}}

## 概述

当 HTML 文档中的{{HTMLElement("script")}}标签内的代码执行完毕时触发该事件，如果这个`script`标签是用`appendChild()`等方法动态添加上去的，则不会触发该事件。

## 语法

```plain
document.onafterscriptexecute = funcRef;
```

当`afterscriptexecute`事件触发时，`funcRef`函数就会被调用。传入参数`event`的`target`属性指向触发该事件的那个`script`元素。

## 例子

```js
function finished(e) {
  logMessage("Finished script with ID: " + e.target.id);
}

document.addEventListener("afterscriptexecute", finished, true);
```

[查看在线演示](/samples/html/currentScript.html)

## 规范

- [HTML5](http://www.whatwg.org/specs/web-apps/current-work/#the-script-element)

## 相关链接

- {{domxref("element.onbeforescriptexecute")}}
- {{domxref("document.currentScript")}}
