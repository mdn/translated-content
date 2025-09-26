---
title: Node.baseURI
slug: Web/API/Node/baseURI
---

{{APIRef("DOM")}}

**`Node.baseURI`** 是只读属性，返回一个节点的绝对基址 URL。

当浏览器要获取绝对 URL 时，就需要用基 URL 去解析相对 URL。例如，解析 HTML {{HTMLElement("img")}} 元素的 `src` 属性时，或者 处理 XML `xlink:href` 属性时—。

一般情况下，基 URL 是 document 的 location，但是它受诸多方面因素的影响，例如 HTML 的 {{HTMLElement("base")}} 元素和 XML [`xml:base`](/zh-CN/docs/Web/API/Node/baseURI) 属性。

## 语法

```plain
var baseURI = node.baseURI;
```

- `baseURI` 是一个 {{ domxref("DOMString") }} 代表当前 {{domxref("Node", "节点")}} 所在文档的基 URI。如果无法获取则可能返回 `null` 。
- `node.baseURI` 是只读的。
- `node.baseURI` 可能会随时间发生变化。

## 概述

### 文档的基 URL

_document_ 的默认基 URL 是文档的地址（浏览器显示的地址，可以通过{{domxref("window.location")}} 获取），但是可以通过如下方法修改：

- 当在文档中找到一个 {{HTMLElement("base")}} 标签时；
- 当一个文档被动态创建时。

详细信息请参阅 [HTML Living standard 中关于基 URL 的章节](https://developers.whatwg.org/urls.html#base-urls) 。

可以通过 `{{domxref("document")}}.baseURI` 获取文档的基 URL。注意检查文档的基 URL 可能会每次请求返回不同的结果，因为 {{HTMLElement("base")}} 标签或文档的 location 可能被改变了。

### 元素的基 URL

元素的基 URL 一般和其所在的文档相同。

如果文档中有 [`xml:base`](/zh-CN/docs/Web/API/Node/baseURI) 属性（不要在 HTML 文档中这样做），在 `node.baseURI` 计算基 URL 时，会把 `xml:base` 属性考虑进去。参考 [xml:base](/zh-CN/docs/Web/API/Node/baseURI) 来了解更多。

可以通过 `{{domxref("element")}}.baseURI` 获取某个元素的基 URL。

## 规范

[DOM Level 3 Core: baseURI](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-baseURI)

## 参考

- {{HTMLElement("base")}} 元素（HTML）
- [`xml:base`](/zh-CN/docs/Web/API/Node/baseURI) 属性（XML 文档）
- {{domxref("Node.baseURIObject")}} - a variant of this API for Mozilla add-ons and internal code. Returns the base URL as an `nsIURI`.
