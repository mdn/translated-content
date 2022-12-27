---
title: HTMLIFrameElement.contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
---

{{APIRef("HTML DOM")}}

**`contentWindow`** 属性返回当前[HTMLIFrameElement](/zh-CN/docs/Web/API/HTMLIFrameElement)的[Window](/zh-CN/docs/Web/API/Window)对象。你可以使用这个`Window` 对象去访问这个 iframe 的文档和它内部的 DOM. 这个是可读属性，但是它的属性像全局`Window` 一样是可以操作的。

## 关于 contentWindow 的示例

```js
var x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];

x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
