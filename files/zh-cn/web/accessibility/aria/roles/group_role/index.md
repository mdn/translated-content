---
title: ARIA：group 角色
slug: Web/Accessibility/ARIA/Roles/group_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`group` 角色用于标识无需被辅助技术所包含的页面摘要或目录中的 UI 对象。

## 描述

`group` 文档结构角色最接近于 HTML 的 {{HTMLElement('fieldset')}} 元素，与 [`region`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/region_role) 相比，它用于标识无需包含在页面摘要或目录中的 UI 对象。

`group` 角色应该用于各项之间能形成具有相关性功能的逻辑集合，例如在 [`tree`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tree_role) 中的子元素，它们之间形成了一种层级关系，或在 [`directory`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/directory_role) 中具有相同容器的一组项目。

当在 [`list`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/list_role) 的上下文中使用时，`group` 的子元素仅限 [`listitem`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listitem_role) 元素。此时，建议使用多个有序或无序列表（{{HTMLElement('ol')}} 或 {{HTMLElement('ul')}}），并嵌套 {{HTMLElement('li')}} 子元素。

当在 [`listbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role) 的上下文中使用时，唯一允许的子元素是 {{HTMLElement('option')}} 元素。在这种情况下，建议使用 {{HTMLElement('select')}}、{{HTMLElement('option')}} 和 {{HTMLElement('optgroup')}}。

`group` 元素可以嵌套使用。

`group` 角色不应用于页面的主要可感知部分。如果某个部分足够重要而需要包含在页面的目录中，应使用 `region` 角色或标准的[地标角色](/zh-CN/docs/Web/Accessibility/ARIA/Roles#3._地标角色)。

当 `group` 角色添加到某个元素时，浏览器会向具有无障碍访问技术的产品发送一个可访问的 group event，这样便可通知用户。

## 用例

以下 HTML 代码在 `tree` 视图中使用了 `group` role：

```html
<div id="tree1" role="tree" tabindex="-1">
  <div
    id="animals"
    class="groupHeader"
    role="presentation"
    aria-owns="animalGroup"
    aria-expanded="true">
    <img role="presentation" tabindex="-1" src="images/treeExpanded.gif" />
    <span role="treeitem" tabindex="0">Animals</span>
  </div>
  <div id="animalGroup" role="group">
    <div id="birds" role="treeitem">
      <span tabindex="-1">Birds</span>
    </div>
    <div
      id="cats"
      class="groupHeader"
      role="presentation"
      aria-owns="catGroup"
      aria-expanded="false">
      <img role="presentation" tabindex="-1" src="images/treeContracted.gif" />
      <span role="treeitem" tabindex="0">Cats</span>
    </div>
    <div id="catGroup" role="group">
      <div id="siamese" role="treeitem">
        <span tabindex="-1">Siamese</span>
      </div>
      <div id="tabby" role="treeitem">
        <span tabindex="-1">Tabby</span>
      </div>
    </div>
  </div>
</div>
```

以下用例在包含了 [`menuitem`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role) 的 drop-down [`menu`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menu_role) 中使用了 `group` role：

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">Inbox</li>
    <li role="menuitem">Archive</li>
    <li role="menuitem">Trash</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Custom Folder 1</li>
    <li role="menuitem">Custom Folder 2</li>
    <li role="menuitem">Custom Folder 3</li>
  </ul>
  <ul role="group">
    <li role="menuitem">New Folder</li>
  </ul>
</div>
```

此 menu 也能使用 {{HTMLElement('select')}} 及 {{HTMLElement('option')}} 元素构成，此时 `group` role 类似于 {{HTMLElement('optgroup')}} 元素。

## 规范

{{Specifications}}

## 相关文档

- The {{HTMLElement('fieldset')}} Element
- [ARIA: `section` role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `row` role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA: `select` role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/select_role)
- [ARIA: `toolbar` role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
