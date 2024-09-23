---
title: aria-disabled
slug: Web/Accessibility/ARIA/Attributes/aria-disabled
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

`aria-disabled` 状态表示该元素是可感知的，但被禁用，因此不可编辑或其他可操作。

## 描述

当 `aria-disabled` 属性设置为 `true` 时，它表示该元素及其所有可聚焦的子元素被视为处于禁用状态。此声明将告知使用辅助技术（如屏幕阅读器）的人，这些元素不应被编辑或以其他方式操作。

与 HTML 的 [`disabled`](/zh-CN/docs/Web/HTML/Element/input#disabled) 布尔属性不同，后者会将表单控件语义上标识为禁用状态，改变其样式以反映该状态，并抑制所有功能，使元素的值无法参与表单提交，而 `aria-disabled="true"` <strong>仅仅</strong> 在语义上暴露这些元素为禁用状态。Web 开发者必须手动确保在暴露为禁用状态时，这些元素的功能被抑制。

当需要禁用本地 HTML 表单控件时，开发者需要指定 `disabled` 属性，因为它提供了禁用控件的所有一般预期功能。然而，有时可能需要将元素暴露为禁用状态，但仍可供用户通过 <kbd>Tab</kbd> 键进行导航。这样可以提高其可发现性，因为这些元素不会从网页的焦点顺序中移除，`aria-disabled` 不会改变这些元素的聚焦性，也不会默认通过浏览器样式使其变得暗淡，使其更易于阅读。一些例子包括：

- 与不可折叠的手风琴面板关联的头部按钮元素。
- 在页面焦点顺序中重要但当前操作不可用的按钮——例如，提交表单。
- 在菜单小部件中临时不活动的项目，否则将通过标准键盘导航被跳过。

在这些情况下，用户可能希望通过标准键盘导航找到这些元素，尽管该控件的功能被移除或“禁用”。开发者仍需要使用 JavaScript 完全禁用元素的功能，并改变元素的外观，以便视觉用户知道它被禁用了。

> [!NOTE]
> 被禁用的状态适用于设置 `aria-disabled="true"` 的元素及其所有可聚焦的子元素。在使用此属性于容器元素时需谨慎。特别是在一个容器可能同时包含表单控件和链接的情况下——意图可能是将表单控件暴露为禁用状态，但<strong>不</strong>要将链接标识为“禁用”。

使用 `aria-disabled` 属性的另一个原因是如果你创建了需要标记为禁用的自定义控件，但并没有使用允许 `disabled` 属性的元素。例如，在以下代码片段中，使用 `<div>` 创建了一个自定义按钮，该按钮需要标记为禁用。然而，`<div>` 元素并不期望或尊重 `disabled` 属性——即使它被赋予了 `role="button"` 来改变其暴露的 ARIA 角色。需要使用 `aria-disabled` 属性来禁用此类自定义控件。

```html
<div role="button" aria-disabled="true" tabindex="-1">编辑</div>
```

类似于需要使用 JavaScript 确保设置 `aria-disabled="true"` 的元素不可操作，该元素还需要样式调整。与 HTML 的 `disabled` 属性相反，指定它会应用 `:disabled` 用户代理样式，而添加 `aria-disabled="true"` 则不会。可以使用 [属性选择器](/zh-CN/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]` 来样式化元素。

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

如果你故意使用 `aria-disabled` 属性，以使表单控件保持在页面的键盘焦点顺序中，特别是如果该元素表示所有用户都应该能够感知的重要内容，那么可能需要使用仍然符合颜色对比要求的样式。例如，一个禁用的按钮/标题，介绍一个不可折叠的手风琴面板，是仍需可读的内容。

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

[`forced-colors` 媒体查询](/zh-CN/docs/Web/CSS/@media/forced-colors) 检测用户代理是否启用了强制颜色模式；如果是，文本和边框颜色都设置为 [系统颜色 `greyText`](/zh-CN/docs/Web/CSS/system-color#syntax)。

另一件需要注意的事，当使用 `aria-disabled` 而不是本地 HTML 属性时，ARIA 属性将需要手动样式，以便在 Windows 高对比度模式下直观地传达该元素被禁用。

> [!NOTE]
> 如果你使用 CSS 的 [`pointer-events: none;`](/zh-CN/docs/Web/CSS/pointer-events) 使元素不可点击，请确保也使用 JavaScript 禁用交互。`pointer-events: none;` 会阻止鼠标点击，但不会防止通过键盘激活元素。

```js
function onClick(event) {
  event.preventDefault();
}

function toggleDisabled(element, status, update) {
  if (status) {
    //element.input.disabled = false;
    element.setAttribute("aria-disabled", "false");
    update.textContent = "该元素现在已启用。";
    element.addEventListener("click", onClick);
  } else {
    //element.input.disabled = true;
    element.setAttribute("aria-disabled", "true");
    update.textContent = "该元素现在已禁用。";
    element.removeEventListener("click", onClick);
  }
}
```

在将 `aria-disabled="true"` 切换到 `"false"` 时，使用 JavaScript 来：

1. 切换值为 `false`（或完全移除属性），
2. 启用该元素，以及
3. 让用户知道控件现在已启用。

如果你仅使用 CSS 通过属性选择器样式化禁用状态，则选择器将不再匹配，禁用样式将不再生效。

## 值

- `true`

  - : 该元素已禁用

- `false`
  - : 该元素未禁用

## 相关接口

- {{domxref("Element.ariaDisabled")}}
  - : [`ariaDisabled`](/zh-CN/docs/Web/API/Element/ariaDisabled) 属性是 {{domxref("Element")}} 接口的一部分，反映 `aria-disabled` 属性的值，表示该元素是可感知的，但被禁用，因此不可编辑或其他可操作。
- {{domxref("ElementInternals.ariaDisabled")}}
  - : [`ariaDisabled`](/zh-CN/docs/Web/API/ElementInternals/ariaDisabled) 属性是 {{domxref("ElementInternals")}} 接口的一部分，反映 `aria-disabled` 属性的值。

## 相关角色

用于角色：

- [`application`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`button`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`composite`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`group`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`input`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/input_role)
- [`link`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`scrollbar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role)

继承到角色：

- [`checkbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`listbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menu`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitemcheckbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`radiogroup`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`row`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`select`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/select_role)
- [`slider`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tablist`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`toolbar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tree`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
- [`treeitem`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## 规范

{{Specifications}}

## 参见

- [使禁用按钮更具包容性](https://css-tricks.com/making-disabled-buttons-more-inclusive/) by Sandrina Pereira
- [使用强制颜色的新标准为 Windows 高对比度样式化](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- [`disabled`](/zh-CN/docs/Web/HTML/Attributes/disabled)
- {{domxref("Element.ariaDisabled")}}
- {{domxref("ElementInternals.ariaDisabled")}}
- [`aria-hidden`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-readonly`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
