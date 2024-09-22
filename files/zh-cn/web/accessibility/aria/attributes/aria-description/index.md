---
title: aria-description
slug: Web/Accessibility/ARIA/Attributes/aria-description
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

全局 `aria-description` 属性定义了一个字符串值，用于描述或注解当前元素。

> **备注：** `aria-description` 仍处于 W3C ARIA 1.3 编辑草案中。暂时请继续使用 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)，自 ARIA 1.1 起已获得支持。

## 描述

全局 `aria-description` 属性为开发者提供了一种机制，用于描述或注解当前元素，为辅助技术用户提供更大的上下文。

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="波士顿红袜队 2021 赛季的比赛安排">
  <h1>红袜队 2021</h1>
  <div role="grid">…</div>
</div>
```

`aria-description` 属性类似于 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label)，两者都提供了与元素关联的文本字符串，但标签应简短而简洁，而描述可以更长，因为它旨在提供更多上下文和信息。

`aria-description` 和 `aria-describedby` 属性的目的相同；两者都为设置的对象提供额外的描述性文本。如果在 DOM 中有描述性文本，请改用 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)。

只有在不希望提供可见描述的用户体验时，才应使用 `aria-description` 属性。`aria-describedby` 属性的值为包含关于对象的描述性文本的元素的 `id` 列表。当没有适当的描述性文本可以通过 `id` 引用与对象关联时，使用 `aria-description`。如果同时存在这两个属性，则 `aria-describedby` 在定义 {{glossary("accessible description")}} 属性时具有优先权。

无论是通过 `aria-description` 还是 `aria-describedby` 设置的描述内容，应为纯文本。如果内容非常长、具有语义要求或具有导航结构，请使用 [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-details)。

## 值

- `<string>`
  - : 该值是一个字符串，是一种无约束的值类型，旨在传达给辅助技术用户。

## 相关接口

- {{domxref("Element.ariaDescription")}}
  - : [`ariaDescription`](/zh-CN/docs/Web/API/Element/ariaDescription) 属性，作为 {{domxref("Element")}} 接口的一部分，反映了 `aria-description` 属性的值，该值定义了描述或注解当前元素的字符串值。

## 相关角色

在**所有**角色中使用。

## 规范

{{Specifications}}

## 参见

- [HTML `title` 属性](/zh-CN/docs/Web/HTML/Global_attributes/title)
- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-details)
