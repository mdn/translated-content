---
title: ARIA：marquee 角色
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`marquee` 是一种[实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)类型，包含频繁变化的非必要信息。

## 描述

`marquee` 角色将一个区域定义为一种呈现频繁变化的包含非必要信息的实时区域类型，示例包括股票行情和广告横幅；这些信息并非用户主动寻找，且可能以任意顺序呈现。`marquee` 和 [`log`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) 两种角色的主要区别在于，log 信息应以有意义的顺序（如按日期）呈现。

具有 marquee 角色的元素隐式地定义 [aria-live](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions) 取值为 `off`。

marquee 必须具有可访问名称。如果存在可见标签，请使用 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)，否则请使用 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)。

### 关联的 WAI-ARIA 角色、状态和属性

- [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : 定义辅助技术何时应通知用户内容更新。具有 `marquee` 角色的元素隐式地定义 `aria-live` 取值为 `off`，这意味着即使用户处于空闲状态，屏幕阅读器也不会指示 marquee 内部的变化。

- [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 或 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : `marquee` 必须具有可访问名称。如果存在可见标签，请使用 `aria-labelledby`，否则请使用 `aria-label`。

## 规范

{{Specifications}}

## 参见

- [ARIA：`alert` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA：`log` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA：`status` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA：`timer` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA 实时区域](/zh-CN/docs/Web/Accessibility/ARIA/Guides/Live_regions)
