---
title: "`tabindex` HTML 全局属性"
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

**`tabindex`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)允许开发者使 HTML 元素可聚焦，允许或阻止元素按顺序获得焦点（通常使用 <kbd>Tab</kbd> 键，因此得名），并确定元素在顺序焦点导航中的相对顺序。

{{InteractiveExample("HTML 演示：tabindex", "tabbed-standard")}}

```html interactive-example
<p>点击此窗格中的任意位置，然后尝试使用 Tab 键在元素间导航。</p>

<label>Tab 键导航顺序中的第一个元素：<input type="text" /></label>

<div tabindex="0">设置了 tabindex，可通过 Tab 键导航到此元素。</div>

<div>未设置 tabindex，无法通过 Tab 键导航到此元素。</div>

<label>Tab 键导航顺序中的第三个元素：<input type="text" /></label>
```

```css interactive-example
p {
  font-style: italic;
  font-weight: bold;
}

div,
label {
  display: block;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

div:focus {
  font-weight: bold;
}
```

它接受一个整数作为值，具体行为取决于整数的值：

> [!NOTE]
> 如果 HTML 元素已渲染，并且其 `tabindex` 属性设为任意有效整数值，那么就可以通过 JavaScript（调用 [`focus()`](/zh-CN/docs/Web/API/HTMLElement/focus) 方法）或鼠标点击使该元素获得焦点。具体的 `tabindex` 值决定了能否通过顺序键盘导航（通常使用 <kbd>Tab</kbd> 键）访问该元素。

- _负值_（具体的负值并不重要，通常为 `tabindex="-1"`）表示无法通过顺序键盘导航访问该元素。

  > [!NOTE]
  > 对于不应直接通过 <kbd>Tab</kbd> 键导航到、但需要设置键盘焦点的元素，`tabindex="-1"` 可能很有用。例如，屏幕外的模态窗口在进入视野时应获得焦点，或者提交有误的表单时，表单提交错误消息应立即获得焦点。

- `tabindex="0"` 表示元素应能在顺序键盘导航中获得焦点，其顺序位于所有 `tabindex` 值为正值的元素之后。这些元素的焦点导航顺序由它们在文档源代码中的顺序决定。
- _正值_ 表示元素应能在顺序键盘导航中获得焦点，其顺序由该数值决定。也就是说，`tabindex="4"` 的元素会在 `tabindex="5"` 和 `tabindex="0"` 的元素之前、在 `tabindex="3"` 的元素之后获得焦点。如果多个元素具有相同的正 `tabindex` 值，它们之间的相对顺序由它们在文档源代码中的位置决定。`tabindex` 的最大值为 32767。
- 如果包含 `tabindex` 属性但未设置值，则由用户代理决定元素是否可聚焦。

  > [!WARNING]
  > 建议仅使用 `0` 和 `-1` 作为 `tabindex` 值。避免使用大于 `0` 的 `tabindex` 值以及会改变可聚焦 HTML 元素顺序的 CSS 属性（参见[弹性元素的排序](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)）。这样做会使依赖键盘导航或辅助技术的用户难以浏览和操作页面内容。应在编写文档时将元素按合理的顺序排列。

一些可聚焦的 HTML 元素由[用户代理](/zh-CN/docs/Glossary/User_agent)在内部将其默认 `tabindex` 值设为 `0`。这些元素包括具有 `href` 属性的 {{HTMLElement("a")}} 或 {{HTMLElement("area")}}、{{HTMLElement("button")}}、{{HTMLElement("frame")}} {{deprecated_inline}}、{{HTMLElement("iframe")}}、{{HTMLElement("input")}}、{{HTMLElement("object")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}}、SVG {{SVGElement("a")}} 元素，以及为 {{HTMLElement("details")}} 元素提供摘要的 {{HTMLElement("summary")}} 元素。除非需要改变默认行为，否则开发者不应为这些元素添加 `tabindex` 属性（例如，设置负值会将元素从焦点导航顺序中移除）。

> [!WARNING]
> 不得在 {{HTMLElement("dialog")}} 元素上使用 `tabindex` 属性。

## 无障碍考虑

避免将 `tabindex` 属性与非[交互内容](/zh-CN/docs/Web/HTML/Guides/Content_categories#交互内容)结合使用，以使本应具有交互性的内容能够通过键盘输入获得焦点。例如，使用 {{HTMLElement("div")}} 元素来表示按钮，而不是使用 {{HTMLElement("button")}} 元素。

使用非交互元素编写的交互组件不会列入[无障碍树](/zh-CN/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#无障碍_api)中。这会导致辅助技术无法导航到这些组件并对其进行操作。应使用交互元素（{{HTMLElement("a")}}、{{HTMLElement("button")}}、{{HTMLElement("details")}}、{{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} 等）以语义化的方式描述内容。这些元素具有内置的角色和状态，可向无障碍工具传达状态，否则就必须通过 [ARIA](/zh-CN/docs/Web/Accessibility/ARIA) 来管理这些信息。

- [使用 tabindex 属性 | Vispero](https://vispero.com/resources/using-the-tabindex-attribute/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)
- 反映这个属性的 {{domxref("HTMLElement.tabIndex")}}
- tabindex 的无障碍问题：请见 [不要使用大于 0 的 Tabindex | Adrian Roselli](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)。
- {{glossary("Reading order", "阅读顺序")}}
