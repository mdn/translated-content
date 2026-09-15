---
title: ARIA：article 角色
slug: Web/Accessibility/ARIA/Reference/Roles/article_role
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

`article` 角色表示页面中的一个部分，该部分可以轻松地在页面、文档或网站上独立成篇。它通常设置在相关内容项上，例如评论、论坛帖子、报刊文章，或在同一页面中归为一组的其他条目。

```html
<div role="article">
  <h2>该部分的标题</h2>
  <p>该部分的段落。</p>
  <p>另一个段落。</p>
  用于与文章交互的控件，例如分享等。
</div>
<div role="article">…</div>
```

此示例展示了同一页面上并排显示的两个文章，它们可以采用相似的结构，并且相互关联。

> [!NOTE]
> 请使用 {{HTMLElement('article')}} 元素，而不是带有 `article` 角色的 `<div>`。**如果可用，请始终使用原生元素**

不要使用 `role="article"`，而应使用 `<article>` 元素。

```html
<article>
  <h2>该部分的标题</h2>
  <p>该部分的段落。</p>
  <p>另一个段落。</p>
  用于与文章交互的控件，例如分享等。
</article>
<article>…</article>
```

## 描述

`article` [文档结构角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles)表示文档、页面或站点中的一个部分，如果将它单独拿出来，它可以被视为一个完整的文档、页面或站点。使用一组文章部分的目的在于表明它们彼此之间的关系。

文章不被视为导航地标，但许多支持地标的辅助技术也提供了在文章之间进行导航的方式。它们还可能支持指示文章内部的嵌套关系。

文章可以嵌套，这表明嵌套的文章与其所嵌套于其中的文章直接相关，但不一定与嵌套层级之外的文章相关。具体用例请参考示例。

如果文章是 feed 的一部分，可以为它设置 [`aria-posinset`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) 和 [`aria-setsize`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) 属性，以表明这篇特定的文章在 feed 中所处的位置。

在 `application` 或其他会导致屏幕阅读器和其他辅助技术进入直通模式（pass-through mode）的部件中，可以使用 `article` 来表明这些技术应切换回将所包含的内容视为常规 Web 内容的处理方式。

不应在非语义元素上添加 `article` 角色，而应使用 {{HTMLElement('article')}} 元素。用户代理会像处理 `article` 角色那样，将其转换为相应的无障碍信息。使用 {{HTMLElement('article')}} 元素还有助于搜索引擎更好地发现页面的结构。适合使用 `role="article"`（或者更推荐 `<article>`）的场景包括：博客文章、论坛帖子、针对论坛或博客文章的评论，以及社交媒体 feed 中的条目。

### 关联的 WAI-ARIA 角色、状态和属性

- [`aria-posinset`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : 在 feed 的上下文中，基于从 1 开始的计数，表示这篇特定的文章在该 feed 中的位置。
- [`aria-setsize`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : 在 feed 的上下文中，表示该 feed 中文章条目的数量。

### 键盘交互

此角色不支持任何特定的键盘交互。

### 所需的 JavaScript 特性

- 事件处理器
  - : 此角色不需要存在任何事件处理器。
- 更改属性值
  - : 在构建 feed 时，将每个 article 角色上的 `aria-posinset` 和 `aria-setsize` 属性设置为适当的值，请注意 `aria-posinset` 从 1 开始计数。

> [!NOTE]
> **如果可用，请始终使用原生元素。** 应使用 `<article>` 元素，而不是带有 `article` 角色的 `<div>`。

## 示例

- 来自 WAI-ARIA 1.1 编写实践 feed 设计模式的[餐厅推荐 feed 展示](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed-display.html)，及其配套的独立[文档](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## 规范

{{Specifications}}

## 优先级顺序

此角色对应于 HTML 中的 {{HTMLElement('article')}} 元素，如果可能，应改用该元素。此角色不要求其子元素中必须包含任何特定的角色。它是唯一允许作为带有 [`feed`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) 角色的元素的直接子元素的角色。

## 参见

- [`feed` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`section` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- {{HTMLElement('article')}} 元素
- {{Glossary("RSS")}} 术语表定义
