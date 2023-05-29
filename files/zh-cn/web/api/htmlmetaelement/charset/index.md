---
title: HTMLMetaElement.charset
slug: Web/API/HTMLMetaElement/charset
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.charset`** 属性是一个字符串，用于指定文档所使用的 {{Glossary("character_encoding", "character encoding")}}。**强烈建议不要使用非 UTF-8 字符编码**，因为这可能在提交表单或 URL 编码时产生预期外的结果。如需了解更多详细信息，请查看 [HTML 中的字符编码](/zh-CN/docs/Web/HTML/Element/meta#attr-charset)。

## 值

一个字符串。

## 示例

### 从 meta 元素中读取字符编码

下方的示例需要一个包含 `charset` 属性的 `<meta>` 元素。控制台中将会显示 `charset` 的值，即此文档的字符编码。

```js
// 指定 <meta charset="utf-8">
let meta = document.querySelector("meta[charset]");
console.log(meta.attributes["charset"].value);
// "utf-8"
```

### 创建一个 meta 元素

下方的示例创建了一个新的 `<meta>` 元素，将 `charset` 属性设置为 `utf-8` 并添加到文档的 `<head>` 中。

```js
let meta = document.createElement("meta");
meta.charset = "utf-8";
document.head.appendChild(meta);
```

## 参见

- {{HTMLElement("meta")}}
