---
title: ARIA：listitem 角色
slug: Web/Accessibility/ARIA/Roles/listitem_role
---

ARIA `listitem` 角色可用于标识项目列表中的项目。它通常与 [`list`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/list_role) 角色（用于标识列表容器）结合使用。

```html
<section role="list">
  <div role="listitem">列表项 1</div>
  <div role="listitem">列表项 2</div>
  <div role="listitem">列表项 3</div>
</section>
```

## 描述

任何由外部容器和内部元素列表组成的内容都可以分别使用 `list` 和 `listitem` 容器识别为辅助技术。

关于应该使用哪些元素来标记列表和列表项没有硬性规定，但是你应该确保列表项在列表的上下文中有意义，例如购物清单、食谱步骤、行车路线。

> **备注：** 如果可能，你应该使用适当的语义化 HTML 元素来标记列表及列表项，如 {{HTMLElement("ul")}}、{{HTMLElement("ol")}} 和 {{HTMLElement("li")}}。有关完整示例，请参阅[最佳实践](#最佳实践)。

### 关联的 WAI-ARIA 角色、状态和属性

- [list](/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role)
  - : 项目列表。角色为 `list` 的元素必须有一个或多个角色为 `listitem` 的元素作为子元素，一个或多个角色为 `group` 的元素具有一个或多个具有 `listitem` 角色的元素作为子元素。
- [group](/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : 相关对象的集合，在嵌套在列表中时仅限于列表项，其重要性不足以在页面目录中拥有自己的位置。

## 最佳实践

仅在必要时使用 `role="list"` 和 `role="listitem"`。例如，无法控制 HTML 但能够在之后动态使用 JavaScript 提升无障碍的时候。

与 HTML {{HTMLElement("ol")}} 和 {{HTMLElement("ul")}} 不同，ARIA `list` 角色不区分有序列表和无序列表。如果可能，你应该使用适当的语义 HTML 元素来标记列表（{{HTMLElement("ol")}} 和 {{HTMLElement("ul")}}）和列表项（{{HTMLElement("li")}}）。例如，我们上面的例子应该改写如下：

```html
<ul>
  <li>列表项 1</li>
  <li>列表项 2</li>
  <li>列表项 3</li>
</ul>
```

或者如果列表项的顺序很重要，则使用有序列表：

```html
<ol>
  <li>列表项 1</li>
  <li>列表项 2</li>
  <li>列表项 3</li>
</ol>
```

> **备注：** ARIA `list` / `listitem` 角色不区分有序列表和无序列表。

> **备注：** 给列表添加 CSS 样式 `list-style: none;` 移除列表语义。添加 `role="listitem"` 获得列表语义。

> **备注：** 如果要标记将用作选项卡式界面的项目列表，则应改为使用 `tab`、`tabpanel` 和 `tablist` 角色。

## 规范

{{Specifications}}

## 参见

- [HTML `<li>` 元素](/zh-CN/docs/Web/HTML/Element/li)
- [HTML `<ul>` 元素](/zh-CN/docs/Web/HTML/Element/ul)
- [HTML `<ol>` 元素](/zh-CN/docs/Web/HTML/Element/ol)
- [ARIA：`list` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA：`group` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role)
- [无障碍对象模型](https://wicg.github.io/aom/spec/)
- [HTML 中的 ARIA](https://w3c.github.io/html-aria/)
- [ARIA 列表示例](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — by Scott O'Hara

<section id="Quick_links">

1. [**WAI-ARIA 角色**](/zh-CN/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/zh-CN/docs/Web/Accessibility/ARIA/Roles")}}

</section>
