---
title: document.writeln
slug: Web/API/Document/writeln
---

{{ ApiRef() }}

### 概述

向文档中写入一串文本，并紧跟着一个换行符。

### 语法

```
document.writeln(line);
```

### 参数

- `line` 为包含文本的字符串

### 示例

```
document.writeln("<p>enter password:</p>");
```

### 备注

**document.writeln** 和 [document.write](/zh-CN/DOM/document.write) 一样，但是会添加一个换行符。

> **备注：** **document.writeln** (like **document.write**) does not work in XHTML documents (you'll get a "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) error on the error console). This is the case if opening a local file with a .xhtml file extension or for any document served with an application/xhtml+xml MIME type. More information is available in the [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

### 规范

[writeln](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-35318390)
