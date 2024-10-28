---
title: HTMLFontElement：face 属性
slug: Web/API/HTMLFontElement/face
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

已过时的 **`HTMLFontElement.face`** 属性是一个反映 [`face`](/zh-CN/docs/Web/HTML/Element/font#face) HTML 属性的字符串，包含一个或多个字体名称的逗号分隔列表。

默认样式的文档文本将以客户端浏览器支持的首个字体进行渲染。如果本地系统未安装列出的任何字体，浏览器通常会默认使用该系统的比例字体或等宽字体。

字符串的格式必须遵循以下 HTML 微语法之一：

| 微语法                       | 描述                               | 示例              |
| ---------------------------- | ---------------------------------- | ----------------- |
| 一个或多个有效字体名称的列表 | _在本地系统必须存在的字体名称列表_ | `courier,verdana` |

## 值

一个字符串。

## 示例

```js
// 假设在 HTML 中存在 <font id="f"> 元素
const f = document.getElementById("f");
f.face = "arial";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("HTMLFontElement")}} 接口。
