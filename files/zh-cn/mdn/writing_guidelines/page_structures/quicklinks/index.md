---
title: 快速链接
slug: MDN/Writing_guidelines/Page_structures/Quicklinks
---

{{MDNSidebar}}

MDN 支持在页面中添加快速链接；这些框是包含到 MDN 上的其他页面或站外页面链接的可分层列表。本文描述了如何创建快速链接框。

## 快速链接语法

页面的快速链接是通过创建一个 ID 为“Quick_links”的 {{HTMLElement("section")}} 块来提供的。然后，将要放入快速链接框中的内容放在 section 内。这些链接需要格式化为 {{HTMLElement("ol")}} 有序列表（可以嵌套）。你可以通过使用编辑器工具栏中的编号列表按钮来实现这一点。例如，你的快速链接 HTML 可能如下所示：

```html
<section id="Quick_links">
  <ol>
    <li><a href="http://docs.ckeditor.com/">CKEditor 文档站点</a></li>
    <li>
      <a href="http://mxr.mozilla.org/">MXR：Mozilla 源代码交叉引用</a>
    </li>
    <li class="toggle">
      <details>
        <summary>风格指南</summary>
        <ol>
          <li>
            <a href="http://www.economist.com/research/StyleGuide/"
              >经济学人风格指南</a
            >
          </li>
          <li>
            <a href="https://www.amazon.com/gp/product/0226104036/"
              >芝加哥风格手册</a
            >
          </li>
          <li>
            <a href="http://www.answers.com/library/Dictionary"
              >Answers.com 字典</a
            >
          </li>
          <li>
            <a href="http://www.wsu.edu/~brians/errors/">英语中的常见错误</a>
          </li>
        </ol>
      </details>
    </li>
  </ol>
</section>
```

需要注意的重要事项：

- **应该**使用有序列表。
- 你可以通过在同一个 {{HTMLElement("li")}} 块**内部**使用包含另一个有序列表的 {{HTMLElement("details")}} 来创建嵌套列表。

## 使用宏创建快速链接

值得注意的是，你可以（而且通常**应该**）使用宏来生成快速链接。每当你需要在多个页面上使用相同的快速链接集时，你都应该将它们转换为宏。

你的宏可以是简单或复杂的（若有必要）；它需要输出类似于上面的[快速链接语法](#快速链接语法)中所示的 HTML。

### 标准快速链接宏

这里列出了我们用于生成快速链接的标准宏。

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs)
  - : 生成 CSS 参考页面的标准快速链接。
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs)
  - : 生成 HTML 参考页面的标准快速链接。
- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)
  - : 使用当前页面（或指定页面）的子页面作为目标创建一组快速链接。这将创建最多两层的分层列表。页面的标题将被用作链接文本，摘要则被用作提示。
