---
title: Houdini
slug: Glossary/Houdini
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{GlossarySidebar}}

Houdini 是一组赋予了开发者扩展 CSS 的能力的低阶 API，其能够拦截浏览器渲染引擎的添加样式和布局过程。Houdini 让开发者可以访问 [CSS 对象模型](/zh-CN/docs/Web/API/CSS_Object_Model)（ [CSSOM](/zh-CN/docs/Web/API/CSS_Object_Model)），使他们能够编写可被浏览器解析为 CSS 的代码。

Houdini 的好处在于，开发者无需等待 Web 标准规范定义新特性，也无需等待所有浏览器完全实现这些特性，就可以创建 CSS 特性。

尽管 Houdini 启用的许多特性可以用 JavaScript 创建，但在启用 JavaScript 之前直接与 CSSOM 交互可以提高解析速度。浏览器在应用脚本中的样式更新之前，会创建 CSSOM——包括布局、绘制和合成过程：对于更新的 JavaScript 样式，这些过程会重复执行。Houdini 代码不需要等待首次渲染周期完成，而是包含在首次周期内，从而创建可渲染、可理解的样式。

## 参见

- [Houdini API](/zh-CN/docs/Web/API/Houdini_APIs)
- [CSSOM](/zh-CN/docs/Web/API/CSS_Object_Model)
- [CSS 绘制 API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
