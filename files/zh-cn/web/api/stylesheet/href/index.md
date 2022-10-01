---
title: href
slug: Web/API/StyleSheet/href
---

{{APIRef("CSSOM")}}

### 概述

返回当前样式表文件的 URI 地址。

### 语法

```plain
uri = stylesheet.href
```

### 参数

- `uri` 为一个字符串，包含了样式表文件的 URI 地址。

### 例子

```plain
 // 在本机环境下
 <html>
  <head>
   <link rel="StyleSheet" href="example.css" type="text/css" />
   <script>
    function sref() {
     alert(document.styleSheets[0].href);
    }
   </script>
  </head>
  <body>
   <div class="thunder">Thunder</div>
   <button onclick="sref()">ss</button>
  </body>
 </html>
// 弹出 "file:////C:/Windows/Desktop/example.css
```

### 备注

如果该样式表是一个外链样式表文件，则它的 href 属性值为样式表文件的 URI. 但如果该样式表是一个内联样式表，则它的 href 属性值为`null`.

该属性在 Firefox, Opera, Google Chrome, Safari 中为只读属性，在 Internet Explorer 中可读可写。

### 规范

[stylesheet.href](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-href)
