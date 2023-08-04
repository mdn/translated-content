---
title: <b>
slug: Web/HTML/Element/b
---

**HTML 提醒注意（Bring Attention To）元素（`<b>`）**用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。这个元素过去被认为是**粗体（Boldface）元素**，并且大多数浏览器仍然将文字显示为粗体。尽管如此，你不应将 `<b>` 元素用于显示粗体文字；替代方案是使用 CSS {{cssxref("font-weight")}} 属性来创建粗体文字。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">标签略写</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任意可容纳 <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a> 的元素</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素只包含[全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 使用说明

- `<b>` 应用场合如：摘要中的关键字、评论中的产品名称，或其他典型的应该加粗显示的文字（除此之外无其他特别强调）。
- 不要将\<b>元素与 {{HTMLElement("strong")}}、{{HTMLElement("em")}}或{{HTMLElement("mark")}}元素混淆。 {{HTMLElement("strong")}}元素表示某些重要性的文本，{{HTMLElement("em")}}强调文本，而{{HTMLElement("mark")}}元素表示某些相关性的文本。 `<b>`元素不传达这样的特殊语义信息；仅在没有其他合适的元素时使用它。
- 类似的，也不要用 `<b>` 元素来标记标题。如果需要表示标题，请使用 {{HTMLElement("h1")}} 到 {{HTMLElement("h6")}} 标签。此外，可以通过样式表来改变这些元素的的默认样式，结果就是它们并*不一定*都是粗体。
- 通过在 `<b>` 元素上添加 [`class`](/zh-CN/docs/Web/HTML/Global_attributes#class) 属性来表示额外的语义信息是一个很好的方式（例如 `<b class="lead">` 来表示段落中的第一句）。这可以在样式需要变动的情况下更轻松地处理不同应用场合的 `<b>` 元素，无须改动 HTML。
- 以前 `<b>` 元素的意思就是让文本变成粗体。但从 HTML4 开始，不赞成标签表示带样式信息，于是 `<b>` 元素的含义发生了变化。
- 如果不是出于语义目的而使用 `<b>` 元素，那么让文本显示粗体更好的方式是使用将 CSS 的 {{cssxref("font-weight")}} 属性设置为 `"bold"`。

## 例子

```html
<p>
  This article describes several <b>text-level</b> elements. It explains their
  usage in an <b>HTML</b> document.
</p>
Keywords are displayed with the default style of the
<b> element, likely in bold.</b>
```

### 结果

This article describes several **text-level** elements. It explains their usage in an **HTML** document.

Keywords are displayed with the default style of the \<b> element, likely in bold.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- Others elements conveying [text-level semantics](/zh-CN/docs/HTML/Text_level_semantics_conveying_elements): {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Using \<b> and \<i> elements (W3C)](http://www.w3.org/International/questions/qa-b-and-i-tags)

{{HTMLSidebar}}
