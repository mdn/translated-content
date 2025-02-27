---
title: HTMLMetaElement：name 属性
slug: Web/API/HTMLMetaElement/name
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.name`** 属性用于联合 {{domxref("HTMLMetaElement.content")}} 定义文档元数据的名称/值对。`name` 属性定义元数据的名称，`content` 属性定义值。

## 值

一个字符串。

## 示例

### 读取 meta 元素的元数据名称

以下示例查询文档中第一个 `<meta>` 元素，`name` 值输出到控制台，显示为文档指定的[关键词](/zh-CN/docs/Web/HTML/Element/meta/name#html_规范中定义的标准元数据名称)：

```js
// 假设 <meta name="keywords" content="documentation, HTML, web technologies">
const meta = document.querySelector("meta");
console.log(meta.name);
// "keywords"
```

### 使用 `author` 元数据创建 meta 元素

以下示例创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`author`](/zh-CN/docs/Web/HTML/Element/meta/name#html_规范中定义的标准元数据名称)，`content` 属性设置文档的作者，并把元素附加到文档 `<head>` 上。

```js
let meta = document.createElement("meta");
meta.name = "author";
meta.content = "Franz Kafka";
document.head.appendChild(meta);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("meta")}}
- [name 属性的可能值](/zh-CN/docs/Web/HTML/Element/meta/name#html_规范中定义的标准元数据名称)
