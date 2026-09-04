---
title: <option>：HTML 选项元素
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: c10cfb6daba8fe6fc5366f2e1ca1bd32de8a537f
---

**`<option>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于定义包含在 {{HTMLElement("select")}}、{{HTMLElement("optgroup")}} 或 {{HTMLElement("datalist")}} 元素中的一项。因此，`<option>` 可表示弹出菜单中的条目，以及 HTML 文档中其他项目列表中的条目。

{{InteractiveExample("HTML 演示：&lt;option&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">选择一只宠物：</label
><select id="pet-select">
  <option value="">--请选择一个选项--</option>
  <option value="dog">狗</option>
  <option value="cat">猫</option>
  <option value="hamster">仓鼠</option>
  <option value="parrot">鹦鹉</option>
  <option value="spider">蜘蛛</option>
  <option value="goldfish">金鱼</option>
</select>
```

```css interactive-example
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- [`disabled`](/zh-CN/docs/Web/HTML/Reference/Attributes/disabled)
  - : 如果设置了这个布尔属性，则该选项不可被选中。浏览器通常会将这样的控件显示为灰色，并且不会接收任何浏览事件，例如鼠标点击或与焦点相关的事件。如果未设置该属性，当某个父元素是被禁用的 {{HTMLElement("optgroup")}} 时，该元素仍然会被禁用。
- `label`
  - : 该属性是用于指示此选项含义的标签文本。如果未定义 `label` 属性，其值将取自元素的文本内容。
- `selected`
  - : 如果存在，该布尔属性表示此选项在初始时被选中。如果该 `<option>` 元素属于一个未设置 [`multiple`](/zh-CN/docs/Web/HTML/Reference/Elements/select#multiple) 属性的 {{HTMLElement("select")}} 元素，则在该 {{HTMLElement("select")}} 中只能有一个 `<option>` 具有 `selected` 属性。
- `value`
  - : 该属性的内容表示当此选项被选中时，随表单一起提交的值。如果省略该属性，其值将取自该 option 元素的文本内容。

## 使用 CSS 进行样式设置

对 `<option>` 元素的样式定制在历史上一直非常受限。[可自定义的 select 元素](/zh-CN/docs/Learn_web_development/Extensions/Forms/Customizable_select)介绍了能够对其进行完整自定义的新特性，使其像任何常规 DOM 元素一样可被样式化。

### 旧版 option 样式

在不支持现代自定义功能的浏览器中（或在无法使用这些功能的旧代码库中），`<option>` 元素可用的样式取决于浏览器和操作系统。根据不同的操作系统，Firefox 和 Chromium 会遵循所属 `<select>` 的 {{cssxref("font-size")}}。Chromium 可能还允许设置 {{cssxref("color")}}、{{cssxref("background-color")}}、{{cssxref("font-family")}}、{{cssxref("font-variant")}} 和 {{cssxref("text-align")}}。

关于旧版 `<option>` 样式的更多细节，请参阅我们的[高级表单样式指南](/zh-CN/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)。

## 示例

示例请参见 {{HTMLElement("select")}}。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        在传统的 <code>&lt;select&gt;</code> 元素中，只允许文本内容，可能包含转义字符（例如 <code>&#x26;eacute;</code>）。在<a href="/zh-CN/docs/Learn_web_development/Extensions/Forms/Customizable_select">可自定义的 select 元素</a>中，<code>&lt;option&gt;</code> 元素可以包含任意内容。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        开始标签是必需的。如果该元素后面紧跟另一个 <code>&#x3C;option></code> 元素或一个 {{HTMLElement("optgroup")}}，或者父元素中没有更多内容，则结束标签是可选的。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        {{HTMLElement("select")}}、{{HTMLElement("optgroup")}} 或 {{HTMLElement("datalist")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与表单相关的元素：{{HTMLElement("form")}}、{{HTMLElement("legend")}}、{{HTMLElement("label")}}、{{HTMLElement("button")}}、{{HTMLElement("select")}}、{{HTMLElement("datalist")}}、{{HTMLElement("optgroup")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("textarea")}}、{{HTMLElement("input")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}} 和 {{HTMLElement("meter")}}。
- [可自定义的 select 元素](/zh-CN/docs/Learn_web_development/Extensions/Forms/Customizable_select)
