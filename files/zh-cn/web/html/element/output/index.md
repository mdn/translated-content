---
title: <output>
slug: Web/HTML/Element/output
---

{{HTMLSidebar}}

**HTML `<output>` 标签**表示计算或用户操作的结果。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式元素</a>，<a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语元素</a>，<a href="/zh-CN/docs/HTML/Content_categories#Form_listed">listed</a>, <a href="/zh-CN/docs/HTML/Content_categories#Form_labelable">labelable</a>, <a href="/zh-CN/docs/HTML/Content_categories#Form_resettable">resettable</a>  <a href="/zh-CN/docs/HTML/Content_categories#Form-associated_content">form-associated element</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许元素</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语元素</a></td>
  </tr>
  <tr>
   <th scope="row">省略标签</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许父元素</th>
   <td>接受任何 <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语元素</a></td>
  </tr>
  <tr>
   <th scope="row">允许 ARIA 角色</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLOutputElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个标签具有 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `for`
  - : 其他影响计算结果的标签的 ID，可以多个。
- `form`
  - : 与当前标签有关联的 form（从属的表单）。该属性的值必须是当前文档内的表单元素的 ID。如果未指明该属性，output 标签必须是一个 form 的后代标签。该属性的用处在于可以让 output 标签脱离 form 标签，存在于一个网页文档的任意位置。
- `name`
  - : name 属性。

## 例子

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="result"></output>
</form>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
