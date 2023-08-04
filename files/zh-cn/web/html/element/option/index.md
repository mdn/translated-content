---
title: <option>
slug: Web/HTML/Element/option
---

{{HTMLSidebar}}

**HTML 元素 _`<option>`_** 用于定义在 {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} 或 {{HTMLElement("datalist")}} 元素中包含的项。`<option>` 可以在弹出窗口和 HTML 文档中的其他项目列表中表示菜单项。

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

- _[内容类别](/zh-CN/docs/Web/HTML/Content_categories)_ 无
- *允许的内容*带有最终转义字符（例如 `&eacute;`）的文本
- _标记省略_ 开始标记是必需的。如果此元素紧接着是另一个 `<option>` 元素或{{HTMLElement("optgroup")}}, 或者父元素没有其他内容，则结束标记是可选的。
- _Implicit ARIA role_ [`option`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)
- _Permitted ARIA roles_ No `role` permitted
- _允许的父元素_ A {{HTMLElement("select")}}, an {{HTMLElement("optgroup")}} or a {{HTMLElement("datalist")}} element.
- _DOM 接口_ {{domxref("HTMLOptionElement")}}

## 属性

此元素包括[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `disabled`
  - : 如果设置了这个布尔属性，则该选项不可选。浏览器通常会将这种控件显示为灰色，并且不再接受任何浏览器事件，例如鼠标点击或者焦点相关的事件。如果这个属性没有设置，而这个元素的其中一个父元素是被禁用的 {{HTMLElement("optgroup")}} 元素，则这个元素仍然是禁用的。
- `label`
  - : 这个属性是用于表示选项含义的文本。如果 **`label`** 属性没有定义，它的值就是元素文本内容。
- `selected`
  - : 这个布尔属性存在时表明这个选项是否一开始就被选中。如果 `<option>` 元素是 {{HTMLElement("select")}} 元素的子元素，并且 {{HTMLElement("select")}} 元素的 [`multiple`](/zh-CN/docs/Web/HTML/Element/select#multiple) 属性没有设置，则 {{HTMLElement("select")}} 元素中只有一个 `<option>` 元素可以拥有 `selected` 属性。
- `value`
  - : 这个属性的值表示该选项被选中时提交给表单的值。如果省略了这个属性，值就从选项元素的文本内容中获取。

## 示例

参见 {{HTMLElement("select")}} 示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他表单相关的元素： {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} 和 {{HTMLElement("meter")}}。
