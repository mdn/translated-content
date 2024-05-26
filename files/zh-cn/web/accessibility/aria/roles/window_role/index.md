---
title: ARIA：window 角色
slug: Web/Accessibility/ARIA/Roles/window_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`window` 角色定义了浏览器或应用程序窗口。

> **备注：** `window` 角色是抽象角色。它在这里是为了包括文档的完整性。不应由 Web 开发者使用。

## 描述

`window` 角色是一个抽象角色，是定义浏览器或应用程序窗口的角色的超类。目前唯一的子类为 [`dialog`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role) 角色，它具有类似于窗口的 <abbr>GUI</abbr>（图形用户界面），无论是整个原生窗口，还是只是外观像窗口的文档部分，使用 `role="dialog"` 最为合适。

## 最佳实践

请不要使用。

## 规范

{{Specifications}}

## 参见

- [ARIA：`roletype` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/roletype_role)
- [ARIA：`dialog` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role)
