---
title: <fieldset>
slug: Web/HTML/Element/fieldset
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<fieldset>`** 元素用于对表单中的控制元素进行分组（也包括 label 元素）。

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

如上述例子所示，`<fieldset>` 元素将一个 HTML 表单的一部分组成一组，内置了一个 {{htmlelement("legend")}} 元素作为 `fieldset` 的标题。这个元素有几个属性，最值得注意的是 `form`，其可以包含同一页面的 {{htmlelement("form")}} 元素的 `id`，以使 `<fieldset>` 成为这个 `<form>` 的一部分，即使 `<fieldset>` 不在其内。还有 `disabled` 属性，可将 `<fieldset>` 及其所有内容设置为不可用。

## 属性

这个元素包含[所有全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `disabled`
  - : 如果设置了这个 bool 值属性，`<fieldset>` 的所有子代表单控件也会继承这个属性。这意味着它们不可编辑，也不会随着 {{htmlelement("form")}} 一起提交。它们也不会接收到任何浏览器事件，如鼠标点击或与聚焦相关的事件。默认情况下，浏览器会将这样的控件展示为灰色。注意，{{HTMLElement("legend")}} 中的表单元素不会被禁用。
- `form`
  - : 将该值设为一个 {{HTMLElement("form")}} 元素的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 属性值以将 `<fieldset>` 设置成这个 {{HTMLElement("form")}} 的一部分。
- `name`

  - : 元素分组的名称

    > **备注：** fieldset 的标题由第一个 {{HTMLElement("legend")}} 子元素确定。

## 使用 CSS 样式

`<fieldset>` 有几种特别的样式方案。

它的 {{cssxref("display")}} 值默认为 `block`，因此建立了一个[块级格式化上下文](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)。如果将 `<fieldset>` 的 `display` 值设置为行内级别，则会表现为 `inline-block`，否则会表现为 `block`。默认情况下 `<fieldset>` 会有 `2px` `groove` 的边界围绕着内容，还有一个默认的小的内边距，还有 {{cssxref("min-inline-size", "min-inline-size: min-content")}} 。

如果其中有 {{htmlelement("legend")}} 元素，会放在块级框起始处的边界上。`<legend>` 的宽度会根据内容尽量收缩（shrink-wrap），同时也建立了一个格式化上下文。`display` 值会块级化（例如 `display: inline` 表现为 `block`）。

一个匿名的框会包围 `<fieldset>` 的内容，这个框继承了 `<fieldset>` 的一些属性。如果将 `<fieldset>` 的样式设置为 `display: grid` 或 `display: inline-grid`，那么这个匿名框也会是栅格上下文。如果将 `<fieldset>` 的样式设置为 `display: flex` 或 `display: inline-flex`，则匿名框也会是弹性盒上下文。除上述情况之外，匿名框默认建立块级格式化上下文。

你可以以任意方式自行设置 `<fieldset>` 和 `<legend>` 的样式以配合你的页面设计。

> **备注：** 截至这篇文章发出为止，Microsoft Edge 和 Google Chrome 不能在 {{HTMLElement("fieldset")}} 中使用 [flexbox](/zh-CN/docs/Glossary/Flexbox) 和 [grid](/zh-CN/docs/Web/CSS/CSS_grid_layout) 布局。[这个 GitHub issue](https://github.com/w3c/csswg-drafts/issues/321) 跟踪了这个 bug。

## 示例

### 简单的 fieldset

这个例子展示了一个非常简单的 `<fieldset>`，其中有一个 `<legend>`和一个简单的控件。

```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio" />
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('简单的 fieldset', '100%', '80') }}

### 禁用 fieldset

这个例子展示了一个被禁用的 `<fieldset>` ，其中有两个控件。注意随着 `<fieldset>` 被一起禁用的控件如何表现。

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" value="Chris" />
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="pwd" value="Wookie" />
    </div>
  </fieldset>
</form>
```

{{ EmbedLiveSample('禁用 fieldset', '100%', '110') }}

## 技术概览

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容目录</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document#sectioning_root">sectioning root</a>, <a href="/zh-CN/docs/HTML/Content_categories#form_listed">listed</a>, <a href="/zh-CN/docs/HTML/Content_categories#form-associated_content">form-associated</a> element, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>可选的{{HTMLElement("legend")}} 元素，后面是内容流（flow content）</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">默认 ARIA role</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLFieldSetElement")}}</td>
  </tr>
 </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

\[1] 在 IE11 中 disabled 的 fieldset 的子元素并不会全都被 disabled; 相关 Issues: [IE bug 817488: `input[type="file"]` not disabled inside disabled `fieldset`](https://connect.microsoft.com/IE/feedbackdetail/view/817488) and [IE bug 962368: Can still edit `input[type="text"]` within `fieldset[disabled]`](https://connect.microsoft.com/IE/feedbackdetail/view/962368/can-still-edit-input-type-text-within-fieldset-disabled).

## 参见

- {{HTMLElement("legend")}} 元素
- {{HTMLElement("input")}} 元素
- {{HTMLElement("label")}} 元素
- {{HTMLElement("form")}} 元素
