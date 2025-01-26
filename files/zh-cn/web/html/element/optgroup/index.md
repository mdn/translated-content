---
title: <optgroup>
slug: Web/HTML/Element/optgroup
---

{{HTMLSidebar}}

**HTML 元素 `<optgroup>` **为{{HTMLElement("select")}} 元素中的选项创建分组。

{{EmbedInteractiveExample("pages/tabbed/optgroup.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>0 或多个 {{HTMLElement("option")}} 元素</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>开始标签是必须的。当该元素后面也跟着一个 &lt;optgroup&gt; 元素，或该元素的父元素没有其他内容时，结束标签可省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>一个 {{HTMLElement("select")}} 元素。</td>
  </tr>
  <tr>
   <th scope="row">Implicit ARIA role</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>No <code>role</code> permitted</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLOptGroupElement")}}</td>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Optgroup elements may not be nested.

## 属性

这个元素包含 [global attributes](/zh-CN/docs/Web/HTML/Global_attributes)。

- `disabled`
  - : 如果设置了这个布尔值，则不能选择这个选项组中的任何选项。通常浏览器会置灰这样的控件，它不接受任何浏览器事件，如鼠标点击或者焦点相关的事件。
- `label`
  - : 选项组的名字，浏览器用以在用户界面中标记选项。使用这个元素时必须加上这个属性。

## 示例

```html
<select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他表单相关的元素：{{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} 和 {{HTMLElement("meter")}}。
