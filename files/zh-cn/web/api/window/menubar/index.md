---
title: Window.menubar
slug: Web/API/Window/menubar
---

{{ APIRef() }}

## 概要

返回一个可以检测 visibility 属性的 `menubar` 对象。

## 语法

```plain
objRef = window.menubar
```

## 示例

以下完整的 HTML 示例显示了使用 locationbar 对象的 visible 属性的方式。

```html
<html>
  <head>
    <title>Various DOM Tests</title>
    <script>
      var visible = window.menubar.visible;
    </script>
  </head>
  <body>
    <p>Various DOM Tests</p>
  </body>
</html>
```

## 规范

{{Specifications}}

## 相关链接：

[window.locationbar](/zh-CN/DOM/window.locationbar), [window.personalbar](/zh-CN/DOM/window.personalbar), [window.scrollbars](/zh-CN/DOM/window.scrollbars), [window.statusbar](/zh-CN/DOM/window.statusbar), [window.toolbar](/zh-CN/DOM/window.toolbar)
