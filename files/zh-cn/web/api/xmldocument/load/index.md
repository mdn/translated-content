---
title: XMLDocument.load()
slug: Web/API/XMLDocument/load
---

{{APIRef("DOM")}}

`document.load()`作为旧版的 w3c 标准 [DOM Level 3 Load & Save module](http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS) 其中的一部分。[document.async](/zh-CN/DOM/document.async) 用来表明该请求是以同步模式进行还是异步模式进行 (默认值)。从 Gecko 1.9 开始，该方法不支持跨站的文档请求。(使用 [XMLHttpRequest](/zh-CN/DOM/XMLHttpRequest) 代替)。

### 代码示例

```plain
var xmlDoc = document.implementation.createDocument("", "test", null);
function documentLoaded (e) {
    alert(new XMLSerializer().serializeToString(e.target)); // 返回一个包含 querydata.xml 内容的字符串。
}
xmlDoc.addEventListener("load", documentLoaded, false);
xmlDoc.load('querydata.xml');
```

### 相关链接

- [document.async](/zh-CN/DOM/document.async)
- [XML in Mozilla](/zh-CN/XML_in_Mozilla)

### 规范

- [Old W3C Working Draft of the DOM Level 3 Load & Save module](http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS)
