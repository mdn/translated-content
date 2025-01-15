---
title: <br>
slug: Web/HTML/Element/br
l10n:
  sourceCommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<br>`** 元素在文本中生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

从上面的示例中可以看出，在我们期望文本中断的地方都包含了一个 `<br>` 元素。`<br>` 之后的文本从文本块的下一行开始

> [!NOTE]
> 不要用 `<br>` 来增加文本之间的行间隔；请使用 {{HTMLElement("p")}} 元素来包装文本，并使用 [CSS](/zh-CN/docs/Web/CSS) {{cssxref('margin')}} 属性来控制间隔大小。

## 属性

此元素的属性包括[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

### 已弃用的属性

- `clear` {{Deprecated_Inline}}
  - : 指定换行后下一行文本开始位置。

## 使用 CSS 设置样式

`<br>` 元素包含唯一且明确的语义——在文本块中创建换行符。因此，它没有自己的尺寸或视觉输出，几乎无法设计它的样式。

你可以给 `<br>` 元素设置 {{cssxref("margin")}} 从而增加文本行之间的间距，但这是一种糟糕的做法——你应该使用为此目的而设计的 {{cssxref("line-height")}}。

## 示例

### 简单的 br 示例

在以下示例中，我们使用 `<br>` 元素在邮寄地址中间创建换行符。

```html
Mozilla Foundation<br />
1981 Landings Drive<br />
Building K<br />
Mountain View, CA 94043-0801<br />
USA
```

#### 结果

{{ EmbedLiveSample('简单的 br 示例', 640, 120) }}

## 无障碍考虑

使用 `<br>` 创建单独的文本段落不仅是糟糕的做法，而且对于借助屏幕阅读技术进行浏览的人来说也是有问题的。屏幕阅读器可能会提示该元素的存在，但不包括 `<br>` 中的任何内容。这可能会让使用屏幕阅读器的人感到困惑和沮丧。

请使用 `<p>` 元素，并使用 CSS 属性 {{cssxref("margin")}} 控制它们的间距。

## 技术概要

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容">流式内容</a>、<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a>。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>无；这是一个{{Glossary("void element","空元素")}}。</td>
  </tr>
  <tr>
   <th scope="row">标签略写</th>
   <td>必须有一个开始标签，并且一定不能有结束标签。在 XHTML 中将元素写为 <code>&lt;br /&gt;</code>。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任意可容纳<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a>的元素。</td>
  </tr>
  <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>
     <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
   </td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLBRElement")}}</td>
  </tr>
 </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("address")}} 元素
- {{HTMLElement("p")}} 元素
- {{HTMLElement("wbr")}} 元素
