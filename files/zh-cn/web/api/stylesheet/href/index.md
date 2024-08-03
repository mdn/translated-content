---
title: StyleSheet：href 属性
slug: Web/API/StyleSheet/href
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

{{domxref("StyleSheet")}} 接口的 **`href`** 属性返回样式表的位置。

这个属性是只读的。

### 值

一个包含样式表 URL 的字符串。

### 示例

在本地的 Windows 计算机上：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>href 示例</title>
    <link rel="styleSheet" href="example.css" />
    <script>
      function sref() {
        alert(document.styleSheets[0].href);
      }
    </script>
  </head>
  <body>
    <div class="thunder">雷</div>
    <button onclick="sref()">ss</button>
  </body>
</html>
```

返回“file:////C:/Windows/Desktop/example.css”。

### 备注

如果该样式表是一个链接的样式表，则它的属性值为样式表的位置。对于内联样式表，则这个属性值为 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
