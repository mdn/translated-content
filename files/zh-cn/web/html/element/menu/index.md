---
title: <menu>
slug: Web/HTML/Element/menu
---

{{HTMLSidebar}}

**HTML `<menu>` 元素**呈现了一组用户可执行或激活的命令。这既包含了可能出现在屏幕顶端的列表菜单，也包含了那些隐藏在按钮之下、当点击按钮后显示出来的文本菜单。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>. Additionally, if in the <em>list menu</em> state, palpable content. (<em>list menu</em> is the default state, unless the parent element is a {{HTMLElement("menu")}} in the <em>context menu</em> state.)</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>If the element is in the <em>list menu</em> state: <a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">flow content</a>, or alternatively, zero or more occurrences of {{HTMLElement("li")}}, {{HTMLElement("script")}}, and {{HTMLElement("template")}}.<br>
    If the element is in the <em>context menu</em> state: zero or more occurrences, in any order, of {{HTMLElement("menu")}} (<em>context menu</em> state only), {{HTMLElement("menuitem")}}, {{HTMLElement("hr")}}, {{HTMLElement("script")}}, and {{HTMLElement("template")}}.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{No_Tag_Omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{DOMxRef("HTMLMenuElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素支持[全局属性](/zh-CN/HTML/Global_attributes)，以及以下属性。

- `label` {{Deprecated_inline}}
  - : The name of the menu as shown to the user. Used within nested menus, to provide a label through which the submenu can be accessed. Must only be specified when the parent element is a {{HTMLElement("menu")}} in the _context menu_ state.
- `type`

  - : This attribute indicates the kind of menu being declared, and can be one of two values.

    - `context` {{Deprecated_inline}} : Indicates the _popup menu_ state, which represents a group of commands activated through another element. This might be as a button menu referenced by a [`menu`](/zh-CN/docs/Web/HTML/Element/button#menu) attribute of a {{HTMLElement("button")}} element, or as context menu for an element with a [`contextmenu`](/zh-CN/docs/HTML/Global_attributes#attr-contextmenu) attribute. This value is the default if the attribute is missing and the parent element is also a `<menu>` element.
    - `toolbar`: Indicates the _toolbar_ state, which represents a toolbar consisting of a series of commands for user interaction. This might be in the form of an unordered list of {{HTMLElement("li")}} elements, or, if the element has no `<li>` element children, flow content describing available commands. This value is the default if the attribute is missing.

## 使用说明

{{HTMLElement("menu")}} 和 {{HTMLElement("ul")}} 元素都呈现了无序列表元素。最主要的区别是，{{HTMLElement("ul")}} 主要是为了展示选项，而 {{HTMLElement("menu")}} 则是为了交互。

An HTML menu can be used to create context menus (typically activated by right-clicking another element) or toolbars.

[**Context menus**](#右键菜单) consist of a `<menu>` element which contains {{HTMLElement("menuitem")}} elements for each selectable option in the menu, `<menu>` elements for submenus within the menu, and {{HTMLElement("hr")}} elements for separator lines to break up the menu's content into sections. Context menus are then attached to the element they're activated from using either the associated element's [`contextmenu`](/zh-CN/docs/Web/HTML/Global_attributes#contextmenu) attribute or, for [button-activated menus](#菜单按钮) attached to {{HTMLElement("button")}} elements, the [`menu`](/zh-CN/docs/Web/HTML/Element/button#menu) attribute.

[Toolbar menus](#toolbar) consist of a `<menu>` element whose content is described in one of two ways: either as an unordered list of items represented by {{HTMLElement("li")}} elements (each representing a command or option the user can utilize), or (if there are no `<li>` elements), [flow content](/zh-CN/docs/Web/HTML/Content_categories#Flow_content) describing the available commands and options.

这个元素在 HTML4 中被弃用，但在 HTML 5.1 和 HTML living standard 中被重新推荐使用。这份文档描述的是当前 Firefox 上的实现。根据 HTML 5.1 的规定，{{HTMLElement("list")}} 元素的类型可能会更改为{{HTMLElement("toolbar")}}。

## 示例

### 右键菜单

{{Deprecated_header}}

#### HTML

```html
<!-- A <div> element with a context menu -->
<div contextmenu="popup-menu">Right-click to see the adjusted context menu</div>

<menu type="context" id="popup-menu">
  <menuitem>Action</menuitem>
  <menuitem>Another action</menuitem>
  <hr />
  <menuitem>Separated action</menuitem>
</menu>
```

#### CSS

```css
div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
```

#### 结果

{{EmbedLiveSample("右键菜单", "100%", 80)}}

### 菜单按钮

> **警告：** Menu buttons haven't been implemented in any known browsers yet. The [`type`](/zh-CN/docs/Web/HTML/Element/menu#type) attribute on the `<menu>` element is now obsolete.

> **警告：** {{HTMLElement("menuitem")}} element is obsolete.

#### HTML

```html
<!-- A button, which displays a menu when clicked. -->
<button type="menu" menu="popup-menu">Dropdown</button>

<menu type="context" id="popup-menu">
  <menuitem>Action</menuitem>
  <menuitem>Another action</menuitem>
  <hr />
  <menuitem>Separated action</menuitem>
</menu>
```

#### 结果

{{EmbedLiveSample("菜单按钮", "100%", 50)}}

### Toolbar

> **警告：** Toolbar menus haven't been implemented in any known browsers yet.

#### HTML

```html
<!-- A context menu for a simple editor,
   - containing two menu buttons. -->
<menu type="toolbar">
  <li>
    <button type="menu" menu="file-menu">File</button>
    <menu type="context" id="file-menu">
      <menuitem label="New..." onclick="newFile()">
      <menuitem label="Save..." onclick="saveFile()">
    </menu>
  </li>
  <li>
    <button type="menu" menu="edit-menu">Edit</button>
    <menu type="context" id="edit-menu">
      <menuitem label="Cut..." onclick="cutEdit()">
      <menuitem label="Copy..." onclick="copyEdit()">
      <menuitem label="Paste..." onclick="pasteEdit()">
    </menu>
  </li>
</menu>
```

#### 结果

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与列表相关的元素：{{HTMLElement("ol")}}、{{HTMLElement("ul")}} 和 {{HTMLElement("li")}}。
