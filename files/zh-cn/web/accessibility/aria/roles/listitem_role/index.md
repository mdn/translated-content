---
title: 'ARIA: listitem role'
slug: Web/Accessibility/ARIA/Roles/listitem_role
---

ARIA `listitem` 角色可用于标识项目列表中的项目。它通常与 `list` 角色结合使用，用于标识列表容器。

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## 描述

任何由外部容器和内部元素列表组成的内容都可以分别使用 `list` 和 `listitem` 容器识别为辅助技术。

关于应该使用哪些元素来标记 `list` 和 `listitem` 没有硬性规定，但是您应该确保 `listitem` 在列表的上下文中有意义，例如购物清单、食谱步骤、行车路线。

> **警告：** 如果可能，您应该使用适当的语义化 HTML 元素来标记 `list` 及其 `listitem`，如 {{HTMLElement("ul")}}、{{HTMLElement("ol")}} 和 {{HTMLElement("li")}}。有关完整示例，请参阅 [最佳实践](#best_practices)。

### 关联的 WAI-ARIA 角色、状态和属性

- [list](/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role)
  - : 项目列表。角色为 `list` 的元素必须有一个或多个角色为 `listitem` 的元素作为子元素，一个或多个角色为 `group` 的元素具有一个或多个具有 `listitem` 角色的元素作为子元素。
- [group](/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : 相关对象的集合，在嵌套在列表中时仅限于列表项，其重要性不足以在页面目录中拥有自己的位置。

### 键盘交互

无

### 所需的 JavaScript 功能

无

## 示例

[ARIA Lists](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — Scott O'Hara 的一些有用的例子和想法

## 最佳实践

仅在必要时使用 `role="list"` 和 `role="listitem"`。例如，无法控制 HTML 但能够在之后动态使用 JavaScript 提升无障碍的时候。

与 HTML {{HTMLElement("ol")}} 和 {{HTMLElement("ul")}} 不同，ARIA `list` 角色不区分有序列表和无序列表。如果可能，您应该使用适当的语义 HTML 元素来标记列表（{{HTMLElement("ol")}} 和 {{HTMLElement("ul")}}）和列表项（{{HTMLElement("li")}})。例如，我们上面的例子应该改写如下：

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

或者如果列表项的顺序很重要，则使用有序列表：

```html
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
```

> **备注：** ARIA `list` / `listitem` 角色不区分有序列表和无序列表。

> **备注：** 如果要标记将用作选项卡式界面的项目列表，则应改为使用 `tab`、`tabpanel` 和 `tablist` 角色。

## 规范

{{Specifications}}

## 屏幕阅读器支持

TBD

## 参见

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- {{HTMLElement("ul")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("li")}}
- [ARIA: list role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role)
- [ARIA: group role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/zh-CN/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/zh-CN/docs/Web/Accessibility/ARIA/Roles")}}

</section>
