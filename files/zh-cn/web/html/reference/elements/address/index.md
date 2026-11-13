---
title: <address>：联系人地址元素
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

**`<address>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示其包含的 HTML 内容提供了与个人、团体或组织联系的信息。

{{InteractiveExample("HTML Demo: &lt;address&gt;", "tabbed-standard")}}

```html interactive-example
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:jim@example.com">jim@example.com</a><br />
  <a href="tel:+14155550132">+1 (415) 555‑0132</a>
</address>
```

```css interactive-example
a[href^="mailto"]::before {
  content: "📧 ";
}

a[href^="tel"]::before {
  content: "📞 ";
}
```

由 `<address>` 元素内容提供的联系信息应根据上下文采用适当的格式，并可能包含所需的各种类型的联系方式，如实体地址、URL、电子邮件地址、电话号码、社交媒体账号、地理位置等。`<address>` 元素应当包含联系信息所指的个人、群体或组织的名称。

`<address>` 可以在多种场景下使用，例如在页面头部提供企业的联系方式，或在 {{HTMLElement("article")}} 内嵌入 `<address>` 元素来标注文章作者的联系信息。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

- 当表示一个和联系信息无关的任意的地址时，请改用 {{HTMLElement("p")}} 元素而不是 `<address>` 元素。
- 这个元素不能包含除联系信息之外的任何信息，比如出版日期（这应当被包含在 {{HTMLElement("time")}} 元素之中）。
- 通常，`<address>` 元素可以放在 {{HTMLElement("footer")}} 元素之中（如果存在的话）。

## 示例

此示例演示了如何使用 `<address>` 表示一篇文章的作者的联系信息。

```html
<address>
  你可以通过
  <a href="http://www.example.com/contact">www.example.com</a><br />
  与作者联系。如果你发现了任何错误，请<a href="mailto:webmaster@example.com"
    >联系网站管理员</a
  >。<br />
  你也可以前来访问：美国加利福尼亚州山景城伊芙琳大道东 331 号 Mozilla
  基金会，邮编：94041
</address>
```

### 结果

{{EmbedLiveSample("示例", "300", "200")}}

虽然 `<address>` 元素看起来只是使用了 {{HTMLElement("i")}} 或者 {{HTMLElement("em")}} 元素的默认样式来渲染其中的文本，但是当处理联系信息时使用它更为合适，因为它表达了额外的语义信息。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >，但不允许嵌套 <code>&#x3C;address></code> 元素，不允许包含标题内容（{{HTMLElement("hgroup")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}）、章节内容({{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("section")}}、{{HTMLElement("nav")}}）以及 {{HTMLElement("header")}} 或 {{HTMLElement("footer")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >的元素，但始终排除 <code>&#x3C;address></code> 元素（按照逻辑对称性原则，如果 <code>&#x3C;address></code> 标签作为父级，不能有嵌套的 <code>&#x3C;address></code> 元素，那么相同的 <code>&#x3C;address></code> 内容也不能有 <code>&#x3C;address></code> 标签作为其父级）。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        {{domxref("HTMLElement")}} 在 Gecko 2.0（Firefox 4）之前，Gecko 使用 {{domxref("HTMLSpanElement")}} 接口实现此元素
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 与章节相关的其他元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("footer")}}、{{HTMLElement("section")}}、{{HTMLElement("header")}}；
- [HTML 文档的章节和大纲](/zh-CN/docs/Web/HTML/Reference/Elements/Heading_Elements)。
