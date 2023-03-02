---
title: 全域屬性
slug: Web/HTML/Global_attributes
---

{{HTMLSidebar("Global_attributes")}}

**全域屬性**（Global attributes）是所有 HTML 元素共同的屬性，可以在所有的元素中使用。但在部分的元素上，屬性可能是沒有效果的。

Global attributes may be specified on all [HTML elements](/zh-TW/docs/Web/HTML/Element), _even those not specified in the standard_. That means that any non-standard elements must still permit these attributes, even though using those elements means that the document is no longer HTML5-compliant. For example, HTML5-compliant browsers hide content marked as `<foo hidden>...<foo>`, even though `<foo>` is not a valid HTML element.

In addition to the basic HTML global attributes, the following global attributes also exist:

- **`xml:lang`** and **`xml:base`** — these are inherited from the XHTML specifications and deprecated, but kept for compatibility purposes.
- The multiple [**`aria-*`**](/zh-TW/docs/Web/Accessibility/ARIA) attributes, used for improving accessibility.
- The event handler attributes: **`onabort`**, **`onautocomplete`**, **`onautocompleteerror`**, **`onblur`**, **`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncontextmenu`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragexit`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onsort`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**.

## 說明

- [`accesskey`](/zh-TW/docs/Web/HTML/Global_attributes/accesskey)
  - : Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.
- [`class`](/zh-TW/docs/Web/HTML/Global_attributes/class)
  - : Is a space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/zh-TW/docs/Web/CSS/Class_selectors) or functions like the method {{domxref("Document.getElementsByClassName()")}}.
- [`contenteditable`](/zh-TW/docs/Web/HTML/Global_attributes/contenteditable)
  - : Is an enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values: `true` or the _empty string_, which indicates that the element must be editable;
    - `false`, which indicates that the element must not be editable.
- [`contextmenu`](/zh-TW/docs/Web/HTML/Global_attributes/contextmenu)
  - : Is the [**`id`**](#id) of an {{HTMLElement("menu")}} to use as the contextual menu for this element.
- [`data-*`](/zh-TW/docs/Web/HTML/Global_attributes/data-*)
  - : Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the [HTML](/zh-TW/docs/Web/HTML) and its [DOM](/zh-TW/docs/Glossary/DOM) representation that may be used by scripts. All such custom data are available via the {{domxref("HTMLElement")}} interface of the element the attribute is set on. The {{domxref("HTMLElement.dataset")}} property gives access to them.
- [`dir`](/zh-TW/docs/Web/HTML/Global_attributes/dir)
  - : Is an enumerated attribute indicating the directionality of the element's text. It can have the following values: `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);
    - `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);
    - `auto`, which let the user agent decides. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then apply that directionality to the whole element.
- [`draggable`](/zh-TW/docs/Web/HTML/Global_attributes/draggable) {{experimental_inline}}
  - : Is an enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/zh-TW/docs/DragDrop/Drag_and_Drop). It can have the following values: `true`, which indicates that the element may be dragged
    - `false`, which indicates that the element may not be dragged.
- [`dropzone`](/zh-TW/docs/Web/HTML/Global_attributes/dropzone) {{experimental_inline}}
  - : Is an enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](/zh-TW/docs/DragDrop/Drag_and_Drop). It can have the following values: `copy`, which indicates that dropping will create a copy of the element that was dragged
    - `move`, which indicates that the element that was dragged will be moved to this new location.
    - `link`, will create a link to the dragged data.
- [`hidden`](/zh-TW/docs/Web/HTML/Global_attributes/hidden)
  - : Is a Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
- [`id`](/zh-TW/docs/Web/HTML/Global_attributes/id)
  - : Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

    > **備註：** The following 5 attributes are part of the [WHATWG HTML Microdata feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/zh-TW/docs/Web/HTML/Global_attributes/itemid) {{experimental_inline}}
  - : The unique, global identifier of an item.
- [`itemprop`](/zh-TW/docs/Web/HTML/Global_attributes/itemprop) {{experimental_inline}}
  - : Used to add properties to an item. Every HTML element may have an itemprop attribute specified, where an itemprop consists of a name and value pair.
- [`itemref`](/zh-TW/docs/Web/HTML/Global_attributes/itemref) {{experimental_inline}}
  - : Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an **itemref**. Itemref provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.
- `itemscope`{{experimental_inline}}
  - : Itemscope (usually) works along with [itemtype](/zh-TW/docs/Web/HTML/Global_attributes/itemtype) to specify that the HTML contained in a block is about a particular item. itemscope creates the Item and defines the scope of the itemtype associated with it. itemtype is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
- [`itemtype`](/zh-TW/docs/Web/HTML/Global_attributes/itemtype) {{experimental_inline}}
  - : Specifies the URL of the vocabulary that will be used to define itemprop's (item properties) in the data structure. [Itemscope](/zh-TW/docs/Web/HTML/Global_attributes/itemscope) is used to set the scope of where in the data structure the vocabulary set by itemtype will be active.
- [`lang`](/zh-TW/docs/Web/HTML/Global_attributes/lang)
  - : Participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defines in the [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt) IETF document. **xml:lang** has priority over it.

- [`slot`](/zh-TW/docs/Web/HTML/Global_attributes/slot) {{experimental_inline}}
  - : Assigns a slot in a [shadow DOM](/zh-TW/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the {{HTMLElement("slot")}} element whose {{htmlattrxref("name", "slot")}} attribute's value matches that `slot` attribute's value.
- [`spellcheck`](/zh-TW/docs/Web/HTML/Global_attributes/spellcheck) {{experimental_inline}}
  - : Is an enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values: `true`, which indicates that the element should be, if possible, checked for spelling errors;
    - `false`, which indicates that the element should not be checked for spelling errors.
- [`style`](/zh-TW/docs/Web/HTML/Global_attributes/style)
  - : Contains [CSS](/zh-TW/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the {{HTMLElement("style")}} element have mainly the purpose of allowing for quick styling, for example for testing purposes.
- [`tabindex`](/zh-TW/docs/Web/HTML/Global_attributes/tabindex)
  - : Is an integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can takes several values: a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    - `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    - a _positive value_ which means should be focusable and reachable via sequential keyboard navigation; its relative order is defined by the value of the attribute: the sequential follow the increasing number of the [**tabindex**](#tabindex). If several elements share the same tabindex, their relative order follows their relative position in the document).
- [`title`](/zh-TW/docs/Web/HTML/Global_attributes/title)
  - : Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
- [`translate`](/zh-TW/docs/Web/HTML/Global_attributes/translate)
  - : Is an enumerated attribute that is used to specify whether an element's attribute values and the values of it`s` {{domxref("Text")}} node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values: empty string and `"yes"`, which indicates that the element will be translated.
    - `"no`", which indicates that the element will not be translated.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Element")}} and {{domxref("GlobalEventHandlers")}} interfaces that allow to query most global attributes.
