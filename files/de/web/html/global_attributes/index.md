---
title: Globale Attribute
slug: Web/HTML/Global_attributes
tags:
  - Attribute
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Global_attributes
original_slug: Web/HTML/Globale_Attribute
---
### {{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute die alle HTML Elemente gemeinsam haben; Sie können auf alle Elemente angewendet werden, auch wenn Sie auf einige Elemente keinen Effekt haben.

Globale Attribute können für alle [HTML Elemente](/de/docs/Web/HTML/Element) festgelegt werden, _auch für jene die nicht im Standard verankert sind_. Das bedeutet, dass auch nicht standardgemäße Elemente diese Attribute erlauben müssen, auch wenn dadurch das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verstecken HTML5-konforme Browser Inhalte wie `<foo hidden>...</foo>`, obwohl `<foo>` kein gültiges HTML Element ist.

Zusätzlich zu den grundlegenden globalen HTML Attributen, gibt es noch die folgenden globalen Attribute:

- {{HTMLAttrDef("xml:lang")}} und {{HTMLAttrDef("xml:base")}} — Diese sind von der XHTML-Spezifikation abgeleitet und veraltet und gibt es nur noch aus Kompatibilitätsgründen.
- Mehrere **[`aria-*`](/de/docs/Web/Barrierefreiheit/ARIA)** Attribute, benutzt für bessere Barrierefreiheit.
- Die [Event Handler](/de/docs/Web/Guide/Events/Event_handlers) Attribute: **`onabort`**, **`onautocomplete`**, **`onautocompleteerror`**, **`onblur`**, **`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncontextmenu`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragexit`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onsort`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**.

## Liste globaler Attribute

- [{{HTMLAttrDef("accesskey")}}](/de/docs/Web/HTML/Globale_Attribute/accesskey)
  - : Bietet einen Hinweis zum Generieren eines Tastenkürzels für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das Erste verwenden, welches auf der Computertastatur vorhanden ist.
- [{{HTMLAttrDef("autocapitalize")}}](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Steuert, ob und wie Texteingaben automatisch großgeschrieben werden, wenn sie vom Benutzer eingegeben / bearbeitet werden. Es kann folgende Werte annehmen:\* `off` oder `none`, keine automatische Großschreibung wird angewendet (alle Buchstaben sind kleingeschrieben)
    - `on` oder `sentences`, der erste Buchstabe jedes Satzes ist standardmäßig ein Großbuchstabe; alle weiteren Buchstaben sind standardmäßig kleingeschrieben
    - `words`, der erste Buchstabe jedes Wortes ist standardmäßig ein Großbuchstabe; alle weiteren Buchstaben sind standardmäßig kleingeschrieben
    - `characters`, alle Buchstaben werden standardmäßig großgeschrieben.
- [{{HTMLAttrDef("class")}}](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Mit Klassen können CSS und JavaScript über die [Klassenselektoren](/de/docs/Web/CSS/Klassenselektoren) bestimmte Elemente, oder Funktionen wie die Methode {{DOMxRef("Document.getElementsByClassName()")}} auswählen und darauf zugreifen.
- [{{HTMLAttrDef("contenteditable")}}](/de/docs/Web/HTML/Global_attributes/contenteditable)
  - : Ein Aufzählungsattribut das angibt, ob das Element für den Benutzer bearbeitbar sein soll. Das Attribut muss einen der folgenden Werte annehmen:\* `true` oder eine _leere Zeichenkette_ geben an, das Element editierbar sein soll;
    - `false` gibt an, dass das Element nicht editierbar sein darf.
- [{{HTMLAttrDef("contextmenu")}}](/de/docs/Web/HTML/Global_attributes/contextmenu)
  - : Die [**`id`**](#attr-id) von einem {{HTMLElement("menu")}} welches als Kontextmenu für das Element benutzt werden soll.
- [{{HTMLAttrDef("data-*")}}](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Diese Attributklasse erlaubt es Daten zwischen [HTML](/de/docs/Web/HTML "en/HTML") und [DOM](/de/docs/DOM "en/DOM") auszutauschen und auch mit Skripten darauf zuzugreifen. Diese Daten sind in dem jeweiligen {{DOMxRef("HTMLElement")}} gespeichert und können über {{DOMxRef("HTMLElement.dataset")}} ausgelesen oder geändert werden.
- [{{HTMLAttrDef("dir")}}](/de/docs/Web/HTML/Global_attributes/dir)
  - : Ein Aufzählungsattribut das die Richtung des Elementtextes angibt. Es kann folgende Werte haben:\* `ltr`, von **links nach rechts** (englisch: _left to right_). Wird für Sprachen, die von links nach rechts geschrieben werden (z.B. deutsch) verwendet;
    - `rtl`, von **rechts nach links** (englisch: _right to left_). Wird für Sprachen, die von rechts nach links geschrieben werden (z.B. arabisch) verwendet;
    - `auto`, lässt den Browser des Nutzers entscheiden. Es benutzt einen simplen Algorithmus, indem es die Zeichen im Element einliest, bis es ein Zeichen mit einer bekannten Richtung findet und dann diese Richtung auf das gesamte Element anwendet.
- [{{HTMLAttrDef("draggable")}}](/de/docs/Web/HTML/Global_attributes/draggable)
  - : Ein Aufzählungsattribut das zeigt, ob das entsprechende Element auf einen anderen Ort gezogen werden kann. Es unterstützt die [`HTML Drag and Drop API`](/de/docs/Web/API/HTML_Drag_and_Drop_API "Die Beschreibung hierüber wurde bisher noch nicht geschrieben. Bitte überlege, mitzuwirken!"). Folgende Werte sind erlaubt:\* `true`, das Element kann _gedraggt_ werden.
    - `false`, das Element kann nicht _gedraggt_ werden.
- [{{HTMLAttrDef("dropzone")}}](/de/docs/Web/HTML/Global_attributes/dropzone) {{Experimental_Inline}}
  - : Ein Aufzählungsattribut das anzeigt, welche Arten von Inhalt auf dem Element abgelegt werden können. Es wird die [Drag and Drop API](https://developer.mozilla.org/En/DragDrop/Drag_and_Drop) verwendet. Es kann folgende Werte annehmen:\* `copy`, was anzeigt, dass eine Kopie vom abgelegten Element erstellt wird.
    - `move`, was anzeigt, dass das abgelegte Element an diese neue Stelle verschoben wird.
    - `link`, was einen Link auf das abgelegte Element erzeugt.
- [{{HTMLAttrDef("exportparts")}}](/de/docs/Web/HTML/Global_attributes/exportparts) {{Experimental_Inline}}
  - : Used to transitively export shadow parts from a nested shadow tree into a containing light tree.
- [{{HTMLAttrDef("hidden")}}](/de/docs/Web/HTML/Global_attributes/hidden)
  - : A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
- [{{HTMLAttrDef("id")}}](/de/docs/Web/HTML/Global_attributes/id)
  - : Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
- [{{HTMLAttrDef("inputmode")}}](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on {{HTMLElement("input")}} elements, but is usable on any element while in {{HTMLAttrxRef("contenteditable")}} mode.
- [{{HTMLAttrDef("is")}}](/de/docs/Web/HTML/Global_attributes/is)
  - : Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/de/docs/Web/Web_Components/Using_custom_elements) for more details).

> **Note:**The `item*` attributes are part of the [WHATWG HTML Microdata feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [{{HTMLAttrDef("itemid")}}](/de/docs/Web/HTML/Global_attributes/itemid)
  - : The unique, global identifier of an item.
- [{{HTMLAttrDef("itemprop")}}](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.
- [{{HTMLAttrDef("itemref")}}](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.
- [{{HTMLAttrDef("itemscope")}}](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` (usually) works along with {{HTMLAttrxRef("itemtype")}} to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
- [{{HTMLAttrDef("itemtype")}}](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. {{HTMLAttrxRef("itemscope")}} is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.
- [{{HTMLAttrDef("lang")}}](/de/docs/Web/HTML/Global_attributes/lang)
  - : Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](/de/docs/Web/HTML/Globale_Attribute$edit#attr-xml:lang) has priority over it.
- [{{HTMLAttrDef("part")}}](/de/docs/Web/HTML/Global_attributes/part) {{Experimental_Inline}}
  - : A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the {{CSSxRef("::part()")}} pseudo-element.
- [{{HTMLAttrDef("slot")}}](/de/docs/Web/HTML/Global_attributes/slot)
  - : Assigns a slot in a [shadow DOM](/de/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot`attribute is assigned to the slot created by the {{HTMLElement("slot")}} element whose {{HTMLAttrxRef("name", "slot")}} attribute's value matches that `slot` attribute's value.
- [{{HTMLAttrDef("spellcheck")}}](/de/docs/Web/HTML/Global_attributes/spellcheck) {{Experimental_Inline}}
  - : An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:\* `true`, which indicates that the element should be, if possible, checked for spelling errors;
    - `false`, which indicates that the element should not be checked for spelling errors.
- [{{HTMLAttrDef("style")}}](/de/docs/Web/HTML/Global_attributes/style)
  - : Contains [CSS](/de/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the {{HTMLElement("style")}} element have mainly the purpose of allowing for quick styling, for example for testing purposes.
- [{{HTMLAttrDef("tabindex")}}](/de/docs/Web/HTML/Global_attributes/tabindex)
  - : An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:\* a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    - `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    - a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](/de/docs/Web/HTML/Globale_Attribute$edit#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.
- [{{HTMLAttrDef("title")}}](/de/docs/Web/HTML/Global_attributes/title)
  - : Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
- [{{HTMLAttrDef("translate")}}](/de/docs/Web/HTML/Global_attributes/translate) {{Experimental_Inline}}

  - : An enumerated attribute that is used to specify whether an element's attribute values and the values of its {{DOMxRef("Text")}} node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:\* empty string and `"yes"`, which indicates that the element will be translated.

    - `"no"`, which indicates that the element will not be translated.

    ## Specifications| Specification | Status | Comment |

    | -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | {{SpecName("HTML WHATWG", "dom.html#global-attributes", "Global attributes")}} | {{Spec2("HTML WHATWG")}} | |
    | {{SpecName("CSS Shadow Parts", "#exposing")}} | {{Spec2("CSS Shadow parts")}} | Added the `part` and `exportparts` global attributes. |
    | {{SpecName("HTML5.3", "dom.html#global-attributes", "Global attributes")}} | {{Spec2("HTML5.3")}} | |
    | {{SpecName("HTML5.2", "dom.html#global-attributes", "Global attributes")}} | {{Spec2("HTML5.2")}} | Snapshot of {{SpecName("HTML WHATWG")}}. From {{SpecName("HTML5.1")}}, `itemid`, `itemprop`, `itemref`, `itemscope`, and `itemtype` have been added. |
    | {{SpecName("HTML5.1", "dom.html#global-attributes", "Global attributes")}} | {{Spec2("HTML5.1")}} | Snapshot of {{SpecName("HTML WHATWG")}}. From {{SpecName("HTML5 W3C")}}, `contextmenu`, `draggable`, `dropzone`, and `spellcheck` have been added. |
    | {{SpecName("HTML5 W3C", "dom.html#global-attributes", "Global attributes")}} | {{Spec2("HTML5 W3C")}} | Snapshot of {{SpecName("HTML WHATWG")}}. From {{SpecName("HTML4.01")}}, the concept of global attributes is introduced and the `dir`, `lang`, `style`, `id`, `class`, `tabindex`, `accesskey`, and `title` are now true global attributes. `xml:lang` which was initially part of XHTML, is now also part of HTML. `hidden`, `data-*`, `contenteditable`, and `translate` have been added. |
    | {{SpecName("HTML4.01")}} | {{Spec2("HTML4.01")}} | There are no global attributes defined. Several attributes that will become global attributes in subsequent specifications are defined on a subset of elements. `class` and `style` are supported on all elements but {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("title")}}. `dir` is supported on all elements but {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, and {{HTMLElement("script")}}. `id` is supported on all elements but {{HTMLElement("base")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("title")}}. `lang` is supported on all elements but {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, and {{HTMLElement("script")}}. `tabindex` is only supported on {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("button")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}. `accesskey` is only supported on {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}} and {{HTMLElement("textarea")}}. `title` is supported on all elements but {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, and {{HTMLElement("title")}}. |## Browser compatibilityThe compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <https://github.com/mdn/browser-compat-data> and send us a pull request.{{Compat("html.global_attributes")}}## See also{{DOMxRef("Element")}} and {{DOMxRef("GlobalEventHandlers")}} interfaces that allow to query most global attributes.
