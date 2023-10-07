---
title: <menu>
slug: Web/HTML/Element/menu
---

{{HTMLSidebar}}{{SeeCompatTable}}

**HTML-элемент `<menu>`** представляет группу команд, которые пользователь может выполнить или активировать. Он включает как меню-списки, которые могут отображаться в верхней части экрана, так и [контекстные меню](/ru/docs/Web/HTML/Element/menu#Context_menu), например, такие, что могут появиться под кнопкой после нажатия.

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | [Flow content](/ru/docs/Web/HTML/Content_categories#Flow_content). If the element's children include at least one {{HTMLElement("li")}} element: [Palpable content](/ru/docs/Web/Guide/HTML/Content_categories#Palpable_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | If the element is in the _list menu_ state: [flow content](/ru/docs/Web/HTML/Content_categories#Flow_content), or alternatively, zero or more occurrences of {{HTMLElement("li")}}, {{HTMLElement("script")}}, and {{HTMLElement("template")}}. (_list menu_ is the default state, unless the parent element is a {{HTMLElement("menu")}} in the _context menu_ state.)If the element is in the _context menu_ state: zero or more occurrences, in any order, of {{HTMLElement("menu")}} (_context menu_ state only), {{HTMLElement("menuitem")}}, {{HTMLElement("hr")}}, {{HTMLElement("script")}}, and {{HTMLElement("template")}}.                                                                                                                                                                                                                                                                                                                                  |
| Пропуск тегов                                              | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Допустимые родители                                        | Любой элемент, который поддерживает [основной поток](/ru/docs/Web/HTML/Content_categories#Flow_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Неявные ARIA-роли                                          | [`list`](/ru/docs/Web/Accessibility/ARIA/Roles/List_role)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Допустимые ARIA-роли                                       | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/directory_role">directory</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, [`listbox`](/ru/docs/Web/Accessibility/ARIA/Roles/listbox_role), <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/menu_role">menu</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/menubar_role">menubar</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/radiogroup_role">radiogroup</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tablist_role">tablist</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/toolbar_role">toolbar</a></code> или <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tree_role">tree</a></code> |
| DOM-интерфейс                                              | {{DOMxRef("HTMLMenuElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Атрибуты

К этому элементу применимы [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- {{HTMLAttrDef("label")}} {{Deprecated_inline}}
  - : The name of the menu as shown to the user. Used within nested menus, to provide a label through which the submenu can be accessed. Must only be specified when the parent element is a {{HTMLElement("menu")}} in the _context menu_ state.
- {{HTMLAttrDef("type")}}
  - : This attribute indicates the kind of menu being declared, and can be one of two values.\* `context` {{Deprecated_inline}} : Indicates the _popup menu_ state, which represents a group of commands activated through another element. This might be as a button menu referenced by a [`menu`](/ru/docs/Web/HTML/Element/button#menu) attribute of a {{HTMLElement("button")}} element, or as context menu for an element with a [`contextmenu`](/ru/docs/HTML/Global_attributes#attr-contextmenu) attribute. This value is the default if the attribute is missing and the parent element is also a `<menu>` element.
    - `toolbar`: Indicates the _toolbar_ state, which represents a toolbar consisting of a series of commands for user interaction. This might be in the form of an unordered list of {{HTMLElement("li")}} elements, or, if the element has no `<li>` element children, [flow content](/ru/docs/Web/HTML/Content_categories#Flow_content) describing available commands. This value is the default if the attribute is missing.

## Примечания по использованию

The {{HTMLElement("menu")}} and {{HTMLElement("ul")}} elements both represent an unordered list of items. The key difference is that {{HTMLElement("ul")}} primarily contains items for display, whilst {{HTMLElement("menu")}} is intended for interactive items, to act on.

An HTML menu can be used to create context menus (typically activated by right-clicking another element) or toolbars.

**[Context menus](#context_menu)** consist of a `<menu>` element which contains {{HTMLElement("menuitem")}} elements for each selectable option in the menu, `<menu>` elements for submenus within the menu, and {{HTMLElement("hr")}} elements for separator lines to break up the menu's content into sections. Context menus are then attached to the element they're activated from using either the associated element's [`contextmenu`](/ru/docs/Web/HTML/Global_attributes#contextmenu) attribute or, for [button-activated menus](#button_menu) attached to {{HTMLElement("button")}} elements, the [`menu`](/ru/docs/Web/HTML/Element/button#menu) attribute.

**[Toolbar menus](#toolbar)** consist of a `<menu>` element whose content is described in one of two ways: either as an unordered list of items represented by {{HTMLElement("li")}} elements (each representing a command or option the user can utilize), or (if there are no `<li>` elements), [flow content](/ru/docs/Web/HTML/Content_categories#Flow_content) describing the available commands and options.

This element was deprecated in HTML4, but reintroduced in HTML5.1 and the HTML living standard. This document describes the current Firefox implementation. Type 'list' is likely to change to 'toolbar' according to HTML5.1.

## Примеры

### Context menu

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

#### Result

{{EmbedLiveSample("Context_menu", "100%", 80)}}

### Menu button

> **Предупреждение:** Menu buttons haven't been implemented in any known browsers yet. The [`type`](/ru/docs/Web/HTML/Element/menu#type) attribute on the `<menu>` element is now obsolete.

> **Предупреждение:** {{HTMLElement("menuitem")}} element is obsolete.

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

#### Result

{{EmbedLiveSample("Menu_button", "100%", 50)}}

### Toolbar

> **Предупреждение:** Toolbar menus haven't been implemented in any known browsers yet.

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

#### Result

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## Specifications

| Specification                                                                         | Status                   | Comment                                                 |
| ------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "grouping-content.html#the-menu-element", "&lt;menu&gt;")}} | {{Spec2("HTML WHATWG")}} | No change from latest snapshot, {{SpecName("HTML5.3")}} |
| {{SpecName("HTML5.1", "interactive-elements.html#the-menu-element", "&lt;menu&gt;")}} | {{Spec2("HTML5.1")}}     |                                                         |

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("hr")}}, and the obsolete {{HTMLElement("dir")}}.
