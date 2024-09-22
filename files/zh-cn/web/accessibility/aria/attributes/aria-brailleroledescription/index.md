---
title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

全局 `aria-brailleroledescription` 属性定义了一个人类可读的、作者本地化的缩写描述，用于指定一个元素的角色，旨在转换为盲文。

## 描述

盲文不是字母和数字的一对一转译，而是包括各种缩写、缩略词和代表单词的字符（称为词符）。

`aria-brailleroledescription` 属性允许提供 [`aria-roledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) 值的缩写版本，这是一个人类可读的、作者本地化的元素角色描述，用于改进盲文界面的用户体验，而不是将长角色描述转换为盲文。

基本上，`aria-brailleroledescription` 的值是 `aria-roledescription` 属性的缩写版本，用于转换为盲文。

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

大多数辅助技术，如屏幕阅读器，将以上内容读作“slide, welcome to my talk. Image, Me.”。盲文辅助技术将在盲文中呈现“sld welcome to my talk gra me”。语义 {{HTMLElement('article')}} 通过 `aria-roledescription` 属性被赋予“slide”角色；“slide”是规范中未定义的角色，但是是演示文稿中幻灯片的常见角色。在盲文中，角色呈现为“sld”。“gra”是“graphic”的简称，在盲文中表示“image”角色的缩写。

`aria-brailleroledescription` 属性应仅用于澄清非交互式容器角色（如“group”或“region”）的目的，或者在盲文环境中提供微件的更具体描述。

由于 `aria-brailleroledescription` 属性覆盖了辅助技术如何在盲文中本地化和表达角色的名称，不合适的值将阻止用户在盲文界面上理解和与元素交互。

只有当存在 [`aria-roledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) 时才使用 `aria-brailleroledescription`。然而，如果 `aria-roledescription` 值在盲文中有效，则不需要该属性的盲文版本。通常情况下，只有在 `aria-roledescription` 对盲文太冗长时才使用 `aria-brailleroledescription`。

一些需要记住的规则：

- 只将 `aria-brailleroledescription` 应用于具有有效 ARIA 角色或具有隐式角色语义的元素。
- 如果存在 `aria-brailleroledescription`，则其值必须为非空、非 null 的值，并且与 `aria-roledescription` 值不同，后者又与 ARIA 显式角色或隐式语义角色不同。
- 避免使用 Unicode 盲文模式。如果必须使用，请确保 `aria-brailleroledescription` 值包含除 Unicode 盲文模式、空白字符和盲文模式点 0 之外的内容。
- 确保该值始终针对文档的语言进行本地化。

> [!WARNING]
> 如果内容仅为 Unicode 盲文模式，则该值将不会根据用户的首选翻译表进行翻译。

> [!NOTE]
> 不要使用 `aria-brailleroledescription` 复制 `aria-roledescription`。只有当 `aria-roledescription` 无法提供足够的盲文表示时才包含此属性。

如果 `aria-brailleroledescription` 的值满足以下情况，将不会向盲文用户显示：

- 值为空，或仅包含空白字符或空的盲文模式：点 0（U+2800）。
- 应用了属性的元素具有禁止使用 `aria-brailleroledescription` 的显式或隐式 WAI-ARIA 角色，包括 `generic` 角色。
- 应用了属性的元素没有有效的 `aria-roledescription`。

> [!NOTE]
> 请使用辅助技术的日常用户进行网站和应用程序测试，包括盲文读者，以确保你的内容在盲文中有意义。

## 值

- `<string>`
  - : 该值是一个字符串，一个无约束的值类型，旨在转换为盲文

## 关联角色

适用于**所有**角色（除了 [`generic`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/generic_role)）。

## 规范

{{Specifications}}

## 参见

- {{domxref("Element.ariaBrailleRoleDescription")}}
- [`aria-roledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/zh-CN/docs/Web/API/Element/ariaRoleDescription)
