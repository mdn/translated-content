---
title: aria-braillelabel
slug: Web/Accessibility/ARIA/Attributes/aria-braillelabel
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

全局 `aria-braillelabel` 属性定义了一个用于标记当前元素的字符串值，该字符串值旨在转换为盲文。

## 描述

全局 `aria-braillelabel` 属性类似于全局 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label)，它定义了一个用于标记当前元素的字符串值。`aria-label` 用于被屏幕阅读器读取，而 `aria-braillelabel` 属性的内容被用于转换为盲文；为用户提供对象的可识别名称的盲文形式。

`aria-braillelabel` 属性的目的是覆盖辅助技术如何在盲文中本地化和表达元素的无障碍名称。只有在没有此属性而无障碍名称在转换为盲文时无法达到用户预期的体验时，才应使用它。

在使用 `aria-braillelabel` 时，请确保：

- 应用 `aria-braillelabel` 的元素具有有效的无障碍名称。
- `aria-braillelabel` 的值具有实际内容，不是空的或仅包含空格的 Unicode 或 Unicode 盲文。
- 值与无障碍名称不同。
- `aria-braillelabel` 值被本地化以与文档语言对齐。
- 向用户说明此属性可用，特别是如果内容包含 Unicode 盲文模式，以便用户知道设置以应用用户特定的盲文翻译

> [!NOTE]
> 支持盲文的辅助技术可以将无障碍名称转换为盲文。因此，仅当无障碍名称不是你想要的用户体验时才使用 `aria-braillelabel`。

仅使用无障碍名称，例如从内容或通过 `aria-label` 获取，几乎总是更好的用户体验，因此不要使用 aria-braillelabel 来复制 aria-label。只有在无障碍名称无法提供足够的盲文表示时才使用 `aria-braillelabel`。

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png" />
</button>
```

盲文显示器可能会显示“btn \*\*\*”的盲文，而不是更详细的“btn gra 3 out of 5 stars”。

## 值

- `<string>`
  - : 值是一个字符串，一个无约束的值类型，旨在转换为盲文。

## 关联角色

适用于**所有**角色。

## 规范

{{Specifications}}

## 参见

- {{domxref("Element.ariaBrailleLabel")}}
- [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-brailleroledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)
