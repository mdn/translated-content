---
title: document.mozFullScreen
slug: Web/API/Document/fullscreen
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

过时的{{domxref("Document")}}接口的 **`fullscreen`** 只读属性报告文档当前是否以全屏模式显示内容。

虽然这个属性是只读的，但如果修改它，它不会抛出 (即使在严格模式下);setter 是一个非操作，它将被忽略。

> **备注：** 由于不推荐使用此属性，您可以通过检查{{DOMxRef("document.fullscreenelement")}}是否为 **`null`** 来确定文档上是否启用全屏模式。

### 概述

返回一个布尔值，表明当前文档是否处于全屏模式。

### 语法

```
var isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;
```

### 例子

```js
function isDocumentInFullScreenMode() {
  // 过去由 F11 触发的那种浏览器全屏模式和 HTML5 中内容的全屏模式是不一样的
  return (
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  );
}
```

### 备注

查看[使用全屏模式](/zh-CN/docs/Web/API/Fullscreen_API)来了解更多相关内容。

### 浏览器兼容性

{{Compat}}
