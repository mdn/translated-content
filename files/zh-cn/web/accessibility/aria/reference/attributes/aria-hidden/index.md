---
title: aria-hidden
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`aria-hidden` 状态指示元素是否暴露给无障碍 API。

## 描述

`aria-hidden` 属性可用于隐藏非交互内容，使其在无障碍 API 中不可见。

将 `aria-hidden="true"` 添加到一个元素会将该元素及其所有子元素从无障碍树中移除。这可以通过隐藏来改善辅助技术用户的体验：

- 纯装饰性内容，如图标或图片
- 重复的内容，如重复的文本
- 屏幕外或折叠的内容，如菜单

`aria-hidden` 属性的存在会将内容对辅助技术隐藏，但不会在视觉上隐藏任何内容。

不应该在可以获得焦点的元素上使用 `aria-hidden="true"`。此外，由于此属性会被元素的子元素继承，因此不应该添加到可获得焦点元素的父元素或祖先元素上。

> [!WARNING]
> 不要在可以获得焦点的元素上使用 `aria-hidden="true"`。

元素的隐藏状态基于其是否被渲染。渲染通常由 CSS 控制。例如，通过 CSS 将元素的 `display` 属性设置为 `none`，该元素就不会被渲染。如果元素或其任何祖先元素没有被渲染或其 `aria-hidden` 属性值设置为 true，则该元素被视为隐藏。请注意，已在元素及其子元素上声明了 `aria-hidden="true"` 的元素仍然可见，除非也被 CSS 隐藏。

在使用 `aria-hidden` 将可见渲染内容隐藏时，请谨慎使用。除非通过移除冗余或多余内容改善了辅助技术用户的体验，否则不应隐藏可见内容。只有当对辅助技术公开了相同或等同的含义和功能时，才可以将可见内容从无障碍 API 中移除。

> [!NOTE]
> 在对辅助技术隐藏可见渲染内容时，请考虑所有残障人士。并非所有辅助技术用户都有视觉障碍。如果可见内容与无障碍 API 中的文本内容不匹配，那么视力正常用户的体验将受到负面影响。

表面上，`aria-hidden="true"` 和 `role="presentation"` 及其同义词 `role="none"` 看起来相似，但每个背后的意图是不同的。

- `aria-hidden="true"` 会将整个元素从无障碍 API 中移除。
- `role="presentation"` 和 `role="none"` 会移除元素的语义含义，但仍然将其及其内容暴露给辅助技术。

当以下情况发生时，不应添加 `aria-hidden="true"`：

- HTML 中存在 [`hidden`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/hidden) 属性
- 使用 [`display: none`](/zh-CN/docs/Web/CSS/Reference/Properties/display) 隐藏了元素或元素的祖先元素
- 使用 [`visibility: hidden`](/zh-CN/docs/Web/CSS/Reference/Properties/visibility) 隐藏了元素或元素的祖先元素

在这三种情况下，添加此属性是不必要的，因为元素已经从无障碍树中移除了。使用 `display` 或 `visibility` 隐藏元素会使其在屏幕和辅助技术中不可见。

如果任何父级指定 `aria-hidden="true"`，则使用 `aria-hidden="false"` 不会重新将元素暴露给辅助技术。

## 示例

将 `aria-hidden="true"` 添加到图标中会隐藏图标字符，使其不包含在无障碍名称中。

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label">发推</span>
</button>
```

我们有一个带有 [Font Awesome 图标](https://fontawesome.com/)的按钮。我们使用 `aria-hidden="true"` 将图标从辅助技术中隐藏起来，因为将图标暴露给辅助技术可能会导致冗余，或者如果图标与可见文本内容不同，则会引起混淆。

## 值

- `false`
  - : 元素向无障碍 API 暴露，就像它被渲染了一样。
- `true`
  - : 元素从无障碍 API 中隐藏。
- `undefined`（默认值）
  - : 用户代理根据元素是否被渲染来确定元素的隐藏状态。

## 关联接口

- {{domxref("Element.ariaHidden")}}
  - : [`ariaHidden`](/zh-CN/docs/Web/API/Element/ariaHidden) 属性，属于 {{domxref("Element")}} 接口，反映了 `aria-hidden` 属性的值，指示元素是否暴露给无障碍 API。
- {{domxref("ElementInternals.ariaHidden")}}
  - : [`ariaHidden`](/zh-CN/docs/Web/API/Element/ariaHidden) 属性，属于 {{domxref("ElementInternals")}} 接口，反映了 `aria-hidden` 属性的值。

## 关联角色

用于**所有**角色

## 规范

{{Specifications}}

## 参见

- [`aria-disabled`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-modal`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- HTML [`hidden`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/hidden) 属性
- CSS {{CSSXref('display')}} 属性
- CSS {{CSSXref('visibility')}} 属性
