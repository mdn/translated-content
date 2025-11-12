---
title: 影子树
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

**影子树**是一组隐藏的 {{Glossary("DOM")}} 节点，其最顶层的[节点](/zh-CN/docs/Glossary/Node/DOM)是一个**影子根**。影子根是**影子 DOM** 的最顶层节点，不是常规文档的 DOM 树的一部分。

影子根通过一个特定的 DOM 节点连接到另一个节点树，这个节点被称为其**宿主**。这个宿主可能是另一个影子树的一部分，也可能是常规 DOM 树的一部分。影子根的宿主的节点树有时被称为**常规树**（light tree）。

影子树的隐藏 DOM 节点通常不受影子树外部应用的影响，反之亦然。**影子边界**是影子 DOM 结束且常规 DOM 开始的地方，可以穿越（但只能有意为之）：

- 从外部脚本访问影子树节点需要使用特殊的[影子 DOM API](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)。
- 从外部样式化影子树可以通过 [CSS 域](/zh-CN/docs/Web/CSS/Guides/Scoping)和 [CSS 影子部件](/zh-CN/docs/Web/CSS/Guides/Shadow_parts)来实现。

## 参见

- [使用影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)
- {{domxref("Element.shadowRoot")}}、{{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot")}}
- {{HTMLElement("slot")}}
- {{Glossary("accessibility_tree", "无障碍树")}}
