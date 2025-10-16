---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement`** 接口包含关于 HTML 中以 [`<meta>`](/zh-CN/docs/Web/HTML/Reference/Elements/meta) 元素形式提供的文档的描述性元数据。该接口继承 {{domxref("HTMLElement")}} 接口中描述的所有属性和方法。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{HTMLElement("meta#charset")}}
  - : HTML 文档的字符编码。
- {{domxref("HTMLMetaElement.content")}}
  - : 文档元数据的名称/值对的“值”部分。
- {{domxref("HTMLMetaElement.httpEquiv")}}
  - : pragma 指令的名称，文档的 HTTP 响应标头。
- {{domxref("HTMLMetaElement.media")}}
  - : `theme-color` 元数据属性的媒体上下文。
- {{domxref("HTMLMetaElement.name")}}
  - : 文档元数据的名称/值对的“名称”部分。
- {{domxref("HTMLMetaElement.scheme")}} {{deprecated_inline}}
  - : 定义 {{domxref("HTMLMetaElement.content")}} 属性中值的方案。此属性已被弃用，不应在新网页上使用。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 示例

以下两个示例显示使用 `HTMLMetaElement` 接口的常规方法。详细的示例，请参阅上述[实例属性](#实例属性)部分中描述的各个属性页面。

### 设置页面描述性元数据

以下示例创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`description`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name#html_规范中定义的标准元数据名称)，`content` 属性设置文档的描述，并附加到文档 `<head>` 上。

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "<meta> 元素用于以名称/值对的形式提供文档描述性元数据，name 属性给出元数据名称，content 属性给出其值。";
document.head.appendChild(meta);
```

### 设置视口元数据

以下示例显示如何创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`viewport`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name#其他规范中定义的标准元数据名称)，`content` 属性设置视口大小，并附加到文档 `<head>` 上。

```js
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

关于设置视口的更多信息，请参见 [`<meta name="viewport">`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name/viewport)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("meta")}}
