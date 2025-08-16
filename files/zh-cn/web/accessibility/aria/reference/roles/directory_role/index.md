---
title: ARIA：directory 角色
slug: Web/Accessibility/ARIA/Reference/Roles/directory_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`directory` 角色用于表示一组成员的引用列表，例如静态目录。

> [!WARNING]
> `directory` 角色已在 ARIA 1.2 中弃用

## 描述

`directory` 角色代表一个静态目录（无论是有序或无序的）。这包括使用列表构建的目录，同时也包括嵌套列表。然而，动态目录可能改用 `tree` 角色。

已弃用的 `directory` 角色曾用于表示一组成员的引用列表，例如静态目录。请改用 [`list`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) 角色，或者更好的做法是采用 {{HTMLElement('ul')}} 或 {{HTMLElement('ol')}} 元素，因为使用 `directory` 并不会为辅助技术用户提供任何额外的好处。

## 规范

{{Specifications}}

## 参见

- [`list` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- {{HTMLElement('ul')}} 元素
- {{HTMLElement('ol')}} 元素
