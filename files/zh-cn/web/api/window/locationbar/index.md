---
title: Window.locationbar
slug: Web/API/Window/locationbar
---

{{APIRef}}

## 概要

返回一个可以检查 visibility 属性的 `locationbar` 对象。

## 语法

```plain
objRef = window.locationbar
```

## 示例

以下完整的 HTML 示例显示了使用 locationbar 对象的 visible 属性的方式。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Various DOM Tests</title>

    <script>
      var visible = window.locationbar.visible;
    </script>
  </head>
  <body>
    <p>Various DOM Tests</p>
  </body>
</html>
```

## 规范

{{Specifications}}

## 相关链接

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}}, {{domxref("window.personalbar")}}, {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}
