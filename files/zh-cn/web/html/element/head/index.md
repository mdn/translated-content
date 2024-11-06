---
title: <head>：文档元数据（头部）元素
slug: Web/HTML/Element/head
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<head>`** 元素包含机器可读的文档相关信息（{{glossary("metadata", "元数据")}}），如文档的[标题](/zh-CN/docs/Web/HTML/Element/title)、[脚本](/zh-CN/docs/Web/HTML/Element/script)和[样式表](/zh-CN/docs/Web/HTML/Element/style)。

> **备注：** `<head>` 主要保存供机器处理的信息，而非人类可读信息。对于人类可见的信息，如顶级标题和列出的作者，请参见 {{HTMLElement("header")}} 元素。

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `profile` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 由{{Glossary("whitespace", "空白字符")}}分隔的一个或多个元数据配置文件的 {{glossary("URI")}}。

## 示例

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>文档标题</title>
  </head>
</html>
```

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <p>
          如果文档是 {{HTMLElement("iframe")}} <a href="/zh-CN/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a> 文档，或者标题信息可从更高级别的协议（如 HTML 电子邮件中的主题行）中获得，则允许包含零个或多个元数据内容元素。
        </p>
        <p>
          否则，可包含一个或多个元数据内容元素，其中 {{HTMLElement("title")}} 元素恰好有一个。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        如果 <code>&#x3C;head></code> 元素内的第一个内容是一个元素，则可以省略开始标记。<br />
        如果 <code>&#x3C;head></code> 元素后的第一个内容不是空格符或注释，则可以省略结束标记。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>一个 {{HTMLElement("html")}} 元素，作为它的第一个子元素。</td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有相应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 可用于 `<head>` 内部的元素：

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
