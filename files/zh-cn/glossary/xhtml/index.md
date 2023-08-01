---
title: XHTML
slug: Glossary/XHTML
---

{{GlossarySidebar}}

**XHTML**（eXtensible HyperText Markup Language，可扩展超文本标记语言）是在历史上被用来描述 [HTML](/zh-CN/docs/Web/HTML)文档的术语，这些文档是按照 {{Glossary("XML")}} 语法规则编写的。

下面的例子显示了一个 HTML 文档和相应的“XHTML”文档，以及应当搭配使用的 {{Glossary("HTTP")}} {{HTTPHeader("Content-Type")}} 标头。

### HTML 文档

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>我是 HTML 文档</p>
  </body>
</html>
```

### XHTML 文档

```xml
<!-- Content-Type: application/xhtml+xml -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>我是 XHTML 文档</p>
  </body>
</html>
```

在实践中，很少有“XHTML”文档在网络上以 `Content-Type: application/xhtml+xml` 标头提供。即使这些文件是按照 XML 语法规则编写的，它们也是以 `Content-Type: text/html` 标头提供的——因此浏览器使用 HTML 解析器而不是 XML 解析器来解析这些文件。

## 参见

- [HTML](/zh-CN/docs/Glossary/HTML)
- [HTML5](/zh-CN/docs/Glossary/HTML5)
- [SVG](/zh-CN/docs/Glossary/SVG)
- [MathML](/zh-CN/docs/Glossary/MathML)
- [XML](/zh-CN/docs/Glossary/XML)
