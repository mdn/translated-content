---
title: document.documentURIObject
slug: orphaned/Web/API/Document/documentURIObject
original_slug: Web/API/Document/documentURIObject
---
{{ ApiRef() }}

### 概述

该属性返回一个[`nsIURI`](../../Article_not_found?uri=zh-cn/XPCOM_Interface_Reference/nsIURI&ident=nsIURI) 对象，值为当前文档的 URI.

该属性只能在拥有 UniversalXPConnect 特权的代码中运行，比如扩展中的代码。如果是 web 页面中的代码，则该属性默认不存在，必须开启 UniversalXPConnect 特权才可用。

使用特权代码必须小心，不要在一个 non-wrapped 的 content 对象上使用该属性 (比如一个[`XPCNativeWrapper`](/zh-CN/XPCNativeWrapper)方法处理过的`wrappedJSObject`). 查看 {{ Bug("324464") }} 了解详情

### 语法

```plain
var uri = doc.documentURIObject;
```

### 例子

```plain
// 检测 Firefox 当前标签中的页面的 URI 协议是否为'http',
// 下面的代码必须运行在 browser.xul 上下文上。
var uriObj = content.document.documentURIObject;
var uriPort = uriObj.port;

if (uriObj.schemeIs('http')) {
  ...
}
```

### 规范

不属于任何公开的规范。
