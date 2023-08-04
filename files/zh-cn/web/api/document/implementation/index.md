---
title: document.implementation
slug: Web/API/Document/implementation
---

{{ApiRef}}

## 概要

返回一个和当前文档相关联的{{domxref("DOMImplementation")}}对象。

## 语法

```plain
DOMImpObj = document.implementation;
```

## 示例

```js
var modName = "HTML";
var modVer = "2.0";
var conformTest = document.implementation.hasFeature(modName, modVer);

alert("DOM " + modName + " " + modVer + " supported?: " + conformTest);

// alerts with: "DOM HTML 2.0 supported?: true" if DOM Level 2 HTML module is supported.
```

可以在[一致性章节](http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance-h2)中查看可用的一系列 DOM2 级模型名称（例如：Core, HTML, XML 等等）。

## 说明

W3C 的 DOM1 级建议值规定了一种检测浏览器对某个 DOM 模型是否支持的方法——`hasFeature` 方法（请参考上边的例子以及这篇文章 [What does your user agent claim to support?](http://www.w3.org/2003/02/06-dom-support.html)）。如果它可用的话，那么 `DOMImplementation` 接口的其他方法就可以为操作文档以外的内容提供一些服务了。例如，`DOMImplementation` 接口包含一个 `createDocumentType` 方法，它可以为实例管理的文档创建对应的 DTD 文档定义。

## 方法

| 名称                                                                                                                                | 动作 | 返回值                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---- | --------------------------- |
| {{domxref("DOMImplementation.createDocument","createDocument")}} (`namespaceURI`, `qualifiedNameStr`, {{domxref("DocumentType")}} ) |      | {{domxref("document")}}     |
| {{domxref("DOMImplementation.createDocumentType","createDocumentType")}} ( `qualifiedNameStr`, `publicId`, `systemId` )             |      | {{domxref("DocumentType")}} |
| {{domxref("DOMImplementation.createHTMLDocument","createHTMLDocument")}} ( `title` )                                                |      | {{domxref("document")}}     |
| {{domxref("DOMImplementation.getFeature","getFeature")}} ( `feature`, `version` )                                                   |      | {{domxref("DOMObject")}}    |
| {{domxref("DOMImplementation.hasFeature","hasFeature")}} ( `feature`, `version` )                                                   |      | {{domxref("Boolean")}}      |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## Gecko 引擎的特别说明

- 从 Gecko 19.0 开始{{domxref("DOMImplementation.hasFeature","hasFeature")}}方法总是返回 true。
