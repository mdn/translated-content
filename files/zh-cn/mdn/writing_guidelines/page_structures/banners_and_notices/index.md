---
title: 横幅和通知
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
---

横幅被添加到一些页面中，特别是 API 参考页面，以突出影响所描述内容使用的重要因素。例如，横幅可以强调一个特定的接口、方法或属性被废弃，并且不应该在生产代码中使用时的情况。

本文描述了最重要的横幅以及它们的使用方法。

## 如何添加横幅

横幅通过使用宏来添加，它们应当与页面的侧边栏宏一起插入到页面元数据的下方。例如，[Ink API](/zh-CN/docs/Web/API/Ink_API) 页面中插入了 `\{{SeeCompatTable}}` 宏，代表它是[实验性的](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#实验性)功能。

```md
---
title: Ink API
slug: Web/API/Ink_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Ink
---

\{{DefaultAPISidebar("Ink API")}}\{{SeeCompatTable}}
```

一个有横幅的页面通常也会有“补充性”的页面元数据。例如，一个有 `\{{SeeCompatTable}}` 的页面通常也应该添加 `experimental` 状态（如上所示），以确保它在侧边栏有合适的图标。

> [!NOTE]
> 横幅宏无需*依赖*元数据，但是其他通过宏插入的内容需要它们。例如，`\{{Compat}}` 宏依赖于元数据 `browser-compat` 的值。

## 应该添加哪些横幅

[页面类型模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types#模板)文档中包含了几种最重要的宏。简单来说：

- `\{{SeeCompatTable}}`——生成 **This is an experimental technology**（实验性）横幅，代表了这项技术是[实验性](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#实验性)的。也需要在页面元数据中添加值为 `experimental` 的 `status` 属性。
- `\{{Deprecated_Header}}`——生成 **Deprecated**（已弃用）横幅，代表这项技术的使用已经[不受鼓励](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#已弃用)。也需要在页面元数据中添加值为 `deprecated` 的 `status` 属性。
- `\{{Non-standard_Header}}`——生成 **Non-Standard**（非标准）横幅，代表这项技术的使用不是任何正式标准的一部分，即使它已经在很多浏览器中得到了实现。也需要在页面元数据中添加值为 `non-standard` 的 `status` 属性。
- `\{{SecureContext_Header}}`——生成 **Secure context**（安全上下文）横幅，代表这项技术只在[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中可用。
