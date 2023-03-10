---
title: Window.ondragdrop
slug: Web/API/Window/ondragdrop
---

> **警告：** 在 Firefox 50 中已删除，并且从未在任何其他浏览器中实行。请改用现代标准的[HTML5 拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)功能。

## 摘要

一个事件处理程序，用于将拖放事件发送到窗口。

**语法**

```
window.ondragdrop = funcRef;
window.addEventListener("dragdrop", funcRef, useCapturing);
```

- funcRef
  - : 要注册的事件处理函数。

[Gecko](/zh-CN/docs/Web/API/Window/en/Gecko)([Firefox bug 112288](https://bugzil.la/112288)) 中未实现`window.ondragdrop`属性和`ondragdrop`属性，您必须使用`addEventListener`。有关详细信息，请参见[addEventListener](/zh-CN/docs/Web/API/Window/en/DOM/element.addEventListener)。

**示例**

### 在拖放时触发 alert

在此示例中，事件侦听器被添加到窗口（事件目标）。如果从外部源将选项卡，链接，标记的文本或文件拖放到此窗口上，则会触发警报。注意`event.stopPropagation()`; 阻止浏览器加载放置的标签，链接或文件。

```
<html>
<head><title>dragdroptest</title>

<script type="text/javascript">

window.addEventListener("dragdrop", testfunc, false);

function testfunc(event) {
    alert("dragdrop!");
    event.stopPropagation();
}
</script>

</head>
<body>
I am bodytext
</body>
</html>
```

**规范**

不属于规范部分。
