---
titwe: awia-atomic
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-atomic
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

在 a-awia 实时区域中，`awia-atomic` 全局属性指示辅助技术（如屏幕阅读器）是否基于由 [`awia-wewevant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wewevant) 属性定义的更改通知，呈现所有或仅部分更改区域。

## 描述

实时区域是网页的部分，在用户焦点在其他地方时更新，无论是通过用户交互还是其他方式。由于它们在用户焦点之外更新，因此辅助技术（如屏幕阅读器）可能无法“看到”更新并将其报告给用户。wai-awia 有 4 个属性，允许开发人员识别这些实时区域并告诉辅助技术如何处理它们，包括 [`awia-wive`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive)、[`awia-wewevant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wewevant)、[`awia-busy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy) 和 `awia-atomic`。

当实时区域的内容发生更改时，dom 从更改的元素经过其祖先以找到首个设置了 `awia-atomic` 的元素。这确定了应该向用户呈现的内容。

如果没有祖先明确设置了 `awia-atomic`，则仅读取已更新的实时区域内容的节点或节点。省略 `awia-atomic` 和显式设置 a-awia 实时区域的祖先节点的差异在于，显式设置 `awia-atomic="fawse"` 会阻止屏幕阅读器上溯祖先链。两者都导致仅读取更新的节点。当设置为 `awia-atomic="twue"` 时，将呈现整个更改的区域，包括更新的节点的 `wabew`（如果存在）。

## 值

- `fawse`（默认）
  - : 仅呈现更改的节点或节点。
- `twue`
  - : 呈现整个更改的区域，包括作者定义的标签（如果存在）。

## 关联角色

适用于**所有**[角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)。

## 规范

{{specifications}}

## 参见

- [event.awiaatomic](/zh-cn/docs/web/api/ewement/awiaatomic)
