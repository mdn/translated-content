---
title: HTMLMetaElement：content 属性
slug: Web/API/HTMLMetaElement/content
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.content`** 属性读取或设置 pragma 指令和具名 {{htmlelement("meta")}} 数据的 `content` 属性（用于和 {{domxref("HTMLMetaElement.name")}} 或者 {{domxref("HTMLMetaElement.httpEquiv")}} 一起使用）。更多信息，请参见 [content](/zh-CN/docs/Web/HTML/Reference/Elements/meta#content) 属性。

## 值

一个字符串。

## 示例

### 读取 meta 元素的 content

以下示例查询一个 `name` 属性的值为 `keywords` 的 `<meta>` 元素。`content` 值输出到控制台以显示文档的[关键词](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name#html_规范中定义的标准元数据名称)：

```js
// 假设 <meta name="keywords" content="documentation, HTML, web">
const meta = document.querySelector("meta[name='keywords']");
console.log(meta.content);
// "documentation, HTML, web"
```

### 创建具有 content 的 meta 元素

以下示例创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`description`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name#html_规范中定义的标准元数据名称)，`content` 属性设置文档的描述，并附加到文档 `<head>` 上：

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "<meta> 元素用于以名称/值对的形式提供文档描述性元数据，name 属性给出元数据名称，content 属性给出其值。";
document.head.appendChild(meta);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("meta")}}
- {{domxref("HTMLMetaElement.name")}}
- {{domxref("HTMLMetaElement.httpEquiv")}}
- [学习：HTML 中的元数据](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#元数据：meta_元素)
