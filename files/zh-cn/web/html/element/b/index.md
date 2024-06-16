---
title: <b>：用于强调文本的元素
slug: Web/HTML/Element/b
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

**`<b>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于吸引读者注意元素内容，而这些内容本身并不具有特别重要性。它以前被称为粗体元素，大多数浏览器仍然以粗体显示文本。但是，你不应该使用 `<b>` 来设置文本样式或赋予重要性。如果你希望创建粗体文本，应该使用 CSS {{cssxref("font-weight")}} 属性。如果你希望指示某个元素特别重要，应该使用 {{HTMLElement("strong")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

- 在以下情况下使用 `<b>` 元素：摘要中的关键字、评论中的产品名称，其他通常以粗体显示的文本（但不包括任何特别重要的内容）。
- 不要将 `<b>` 元素与 {{HTMLElement("strong")}}、{{HTMLElement("em")}} 或 {{HTMLElement("mark")}} 元素混淆。{{HTMLElement("strong")}} 元素表示具有某种重要性的文本，{{HTMLElement("em")}} 元素强调文本，而 {{HTMLElement("mark")}} 元素表示具有某种关联性的文本。`<b>` 元素不会传达这种特殊的语义信息；仅在其他元素都不适用时使用它。
- 同样，不要使用 `<b>` 元素标记标题和页眉。为此，请使用 {{HTMLElement("h1")}} 到 {{HTMLElement("h6")}} 标签。此外，样式表可以更改这些元素的默认样式，而使它们*不一定*以粗体显示。
- 好的做法是在 `<b>` 元素上添加 [`class`](/zh-CN/docs/Web/HTML/Global_attributes/class) 属性来传达额外的语义信息（例如，段落中的第一个句子可以使用 `<b class="lead">`）。这样，如果你的样式需求发生变化，可以更轻松地管理 `<b>` 的多个用例，从而无需更改 HTML。
- 历史上， `<b>` 元素的目的是使文本加粗。自 HTML4 以来，样式信息已被弃用，因此 `<b>` 元素的含义已更改。
- 如果不是出于语义目的而使用 `<b>` 元素，那么你应该使用 CSS 的 {{cssxref("font-weight")}} 属性并将值设置为 `"bold"` 来使文本加粗。

## 示例

```html
<p>
  本文档描述了几个<b class="keywords">文本级</b>元素，并解释了它们在
  <b class="keywords">HTML</b> 文档中的用法。
</p>
关键字以<b>元素的默认样式显示，可能是粗体。</b>
```

### 结果

{{EmbedLiveSample("示例")}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他传达文本级语义的元素：{{HTMLElement("a")}}、{{HTMLElement("em")}}、{{HTMLElement("strong")}}、{{HTMLElement("small")}}、{{HTMLElement("cite")}}、{{HTMLElement("q")}}、{{HTMLElement("dfn")}}、{{HTMLElement("abbr")}}、{{HTMLElement("time")}}、{{HTMLElement("code")}}、{{HTMLElement("var")}}、{{HTMLElement("samp")}}、{{HTMLElement("kbd")}}、{{HTMLElement("sub")}}、{{HTMLElement("sup")}}、{{HTMLElement("i")}}、{{HTMLElement("mark")}}、{{HTMLElement("ruby")}}、{{HTMLElement("rp")}}、{{HTMLElement("rt")}}、{{HTMLElement("bdo")}}、{{HTMLElement("span")}}、{{HTMLElement("br")}}、{{HTMLElement("wbr")}}。
- [使用 \<b> 和 \<i> 元素（W3C）](https://www.w3.org/International/questions/qa-b-and-i-tags)
