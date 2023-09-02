---
title: window.document
slug: Web/API/Window/document
---

{{ ApiRef() }}

**`window.document`** 返回当前窗口内的文档节点（{{domxref("document")}}）

> **备注：** 从 Firefox 3 和 IE7 开始，访问其他页面内的文档节点会受到同源策略的影响。

## 语法

```js
doc = window.document;
```

## 参数

- `doc`是一个指向{{domxref("document")}}对象的引用

## 例子

```html
<!doctype html>
<html>
  <head>
    <title>Hello, World!</title>
  </head>
  <body>
    <script type="text/javascript">
      var doc = window.document;
      alert(doc.title); // 弹出：Hello, World!
    </script>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
