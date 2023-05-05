---
title: Window.scrollbars
slug: Web/API/Window/scrollbars
---

{{ APIRef() }}

### 概要

返回可以检查其可见性的滚动条对象。

### 语法

```plain
objRef = window.scrollbars
```

### 示例

下面的 HTML 示例展示了如何使用 window\.scrollbars 对象的 visible 属性。

```plain
<!doctype html>
<html>
<head>
  <title>Various DOM Tests</title>
  <script>
    var visibleScrollbars = window.scrollbars.visible;
  </script>
</head>
<body>
  <p>Various DOM Tests</p>
</body>
</html>
```

### 规范

{{Specifications}}

### 参见

- [window.locationbar](/zh-CN/DOM/window.locationbar)
- [window.menubar](/zh-CN/DOM/window.menubar)
- [window.personalbar](/zh-CN/DOM/window.personalbar)
- [window.statusbar](/zh-CN/DOM/window.statusbar)
- [window.toolbar](/zh-CN/DOM/window.toolbar)
