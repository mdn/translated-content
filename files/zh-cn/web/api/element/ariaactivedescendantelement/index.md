---
title: Element：ariaActiveDescendantElement 属性
slug: Web/API/Element/ariaActiveDescendantElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaActiveDescendantElement`** 属性表示当焦点位于 [`composite`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) 微件、[`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`group`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) 或 [`application`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) 上时当前活动的元素。

[`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 页面提供了关于如何使用该属性和对应特性的更多信息。

## 值

表示活动后代元素的 {{domxref("HTMLElement")}} 子类；如果没有活动后代元素，则为 `null`。

## 描述

该属性是使用 [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性的灵活替代方案。与 `aria-activedescendant` 不同，赋给此属性的元素不必具有 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。

定义了元素的 [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 属性时，该属性会反映它，但仅限引用的 `id` 值与有效作用域内元素匹配的情况。设置此属性会清除对应的属性。有关反射元素引用和作用域的更多信息，请参阅《反射属性》指南中的[反射元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#反射元素引用)。

## 示例

### 获取活动后代元素

本示例展示如何使用 `ariaActiveDescendantElement` 获取当前活动后代元素。

#### HTML

HTML 定义了一个用于选择不同街道类型的列表框：它由带有 [`listbox` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)的 {{htmlelement("div")}} 元素及其嵌套的各选项 `<div>` 组成。活动后代最初通过 `aria-activedescendant` 设为 `id` 为 `avenue` 的元素。

```html
<div id="streetType" role="listbox" aria-activedescendant="avenue">
  <div>街道</div>
  <div id="avenue">大道</div>
  <div>小巷</div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

以下代码首先检查是否支持 `ariaActiveDescendantElement`。若支持，则使用 {{domxref("Element.getAttribute()")}} 记录 `aria-activedescendant` 的值（被引用元素的 `id`）、属性元素及该元素的文本内容。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// 检测 ariaActiveDescendantElement 功能
if ("ariaActiveDescendantElement" in Element.prototype) {
  log(`getAttribute(): ${streetType.getAttribute("aria-activedescendant")}`);
  log(`ariaActiveDescendantElement: ${streetType.ariaActiveDescendantElement}`);
  log(`文本：${streetType.ariaActiveDescendantElement?.textContent.trim()}`);
} else {
  log("浏览器不支持 ariaActiveDescendantElement");
}
```

#### 结果

下面的日志显示以上代码的输出。`aria-activedescendant` 属性返回的值应为 `"avenue"`，关联元素应为 `HTMLDivElement` 元素，且该元素的文本应为“大道”。

{{EmbedLiveSample("获取活动后代元素","100%","190px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性
- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
- [反射元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#反射元素引用)*属性反射*指南
