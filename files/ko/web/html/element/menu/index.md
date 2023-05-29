---
title: <menu>
slug: Web/HTML/Element/menu
---

{{HTMLSidebar}}{{SeeCompatTable}}

**HTML `<menu>` 요소**는 사용자가 수행하거나 하는 명령 묶음을 말합니다. 이것은 스크린 위에 나오는 목록 메뉴와 눌려진 버튼 아래에 나오는 것과 같은 맥락 메뉴를 포함합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >. Additionally, if in the <em>list menu</em> state, palpable content.
        (<em>list menu</em> is the default state, unless the parent element is a
        {{HTMLElement("menu")}} in the <em>context menu</em> state.)
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        If the element is in the <em>list menu</em> state:
        <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content"
          >flow content</a
        >, or alternatively, zero or more occurrences of
        {{HTMLElement("li")}}, {{HTMLElement("script")}}, and
        {{HTMLElement("template")}}.<br />If the element is in the
        <em>context menu</em> state: zero or more occurrences, in any order, of
        {{HTMLElement("menu")}} (<em>context menu</em> state only),
        {{HTMLElement("menuitem")}}, {{HTMLElement("hr")}},
        {{HTMLElement("script")}}, and
        {{HTMLElement("template")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parent elements</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## 속성

이 요소는 [전역 속성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("label")}}
  - : 사용자에게 보여지는 메뉴의 이름입니다. Used within nested menus, to provide a label through which the submenu can be accessed. Must only be specified when the parent element is a {{HTMLElement("menu")}} in the _context menu_ state.
- {{htmlattrdef("type")}}

  - : This attribute indicates the kind of menu being declared, and can be one of two values.

    - `context`: The _context menu_ state, which represents a group of commands activated through another element. This might be through the {{htmlattrxref("menu", "button")}} attribute of a {{HTMLElement("button")}}, or an element with a [`contextmenu`](/ko/docs/HTML/Global_attributes#attr-contextmenu) attribute. When nesting {{HTMLElement("menu")}} elements directly within one another, this is the missing value default if the parent is already in this state.
    - `list`: The _list menu_ state, which represents a series of commands for user interaction. This is the missing value default, except where the parent element is a {{HTMLElement("menu")}} in the _context menu_ state.

## Examples

### Example 1

```html
<!-- A button, which displays a menu when clicked. -->
<button type="menu" menu="dropdown-menu">
  Dropdown
</button>

<menu type="context" id="dropdown-menu">
  <menuitem label="Action">
  <menuitem label="Another action">
  <hr>
  <menuitem label="Separated action">
</menu>
```

### Result

{{EmbedLiveSample('Example_1')}}

### Example 2

```html
<!-- A context menu for a simple editor, containing two menu buttons. -->
<menu>
  <li>
    <button type="menu" value="File" menu="file-menu">
    <menu type="context" id="file-menu">
      <menuitem label="New..." onclick="newFile()">
      <menuitem label="Save..." onclick="saveFile()">
    </menu>
  </li>
  <li>
    <button type="menu" value="Edit" menu="edit-menu">
    <menu type="context" id="edit-menu">
      <menuitem label="Cut..." onclick="cutEdit()">
      <menuitem label="Copy..." onclick="copyEdit()">
      <menuitem label="Paste..." onclick="pasteEdit()">
    </menu>
  </li>
</menu>
```

### Result

{{EmbedLiveSample('Example_2')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- Other list-related HTML Elements: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}} and the obsolete {{HTMLElement("dir")}}.
- The [`contextmenu`](/ko/docs/HTML/Global_attributes#attr-contextmenu) [global attribute](/ko/docs/HTML/Global_attributes) can be used on an element to refer to the `id` of a `menu` with the `context` {{htmlattrxref("type","menu")}}.
