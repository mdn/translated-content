---
title: Selection
slug: Web/API/Selection
tags:
  - API
  - Experimental
  - Interface
  - NeedsTranslation
  - Reference
  - Selection
  - TopicStub
translation_of: Web/API/Selection
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}A **`Selection`** object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or modification, call {{domxref("window.getSelection()")}}.

## Свойства

- {{domxref("Selection.anchorNode")}}
  - : Returns the {{domxref("Node")}} in which the selection begins.
- {{domxref("Selection.anchorOffset")}}
  - : Returns a number representing the offset of the selection's anchor within the anchorNode. If anchorNode is a text node, this is the number of characters within anchorNode preceding the anchor. If anchorNode is an element, this is the number of child nodes of the anchorNode preceding the anchor.
- {{domxref("Selection.focusNode")}}
  - : Returns the {{domxref("Node")}} in which the selection ends.
- {{domxref("Selection.focusOffset")}}
  - : Returns a number representing the offset of the selection's anchor within the focusNode. If focusNode is a text node, this is the number of characters within focusNode preceding the focus. If focusNode is an element, this is the number of child nodes of the focusNode preceding the focus.
- {{domxref("Selection.isCollapsed")}}
  - : Returns a Boolean indicating whether the selection's start and end points are at the same position.
- {{domxref("Selection.rangeCount")}}
  - : Returns the number of ranges in the selection.

## Методы

- {{domxref("Selection.getRangeAt()")}}
  - : Returns a {{domxref("Range")}} object representing one of the ranges currently selected.
- {{domxref("Selection.collapse()")}}
  - : Collapses the current selection to a single point.
- {{domxref("Selection.extend()")}}
  - : Moves the focus of the selection to a specified point.
- {{domxref("Selection.modify()")}}{{non-standard_inline}}
  - : Changes the current selection.
- {{domxref("Selection.collapseToStart()")}}
  - : Collapses the selection to the start of the first range in the selection.
- {{domxref("Selection.collapseToEnd()")}}
  - : Collapses the selection to the end of the last range in the selection.
- {{domxref("Selection.selectAllChildren()")}}
  - : Adds all the children of the specified node to the selection.
- {{domxref("Selection.addRange()")}}
  - : A {{domxref("Range")}} object that will be added to the selection.
- {{domxref("Selection.removeRange()")}}
  - : Removes a range from the selection.
- {{domxref("Selection.removeAllRanges()")}}
  - : Removes all ranges from the selection.
- {{domxref("Selection.deleteFromDocument()")}}
  - : Deletes the selection's content from the document.
- {{domxref("Selection.toString()")}}
  - : Returns a string currently being represented by the selection object, i.e. the currently selected text.
- {{domxref("Selection.containsNode()")}}
  - : Indicates if a certain node is part of the selection.

## Notes

### String representation of a selection

Calling the {{domxref("Selection.toString()")}} method returns the text contained in the selection, e.g.:

```js
var selObj = window.getSelection();
window.alert(selObj);
```

Note that using a selection object as the argument to `window.alert` will call the object's `toString` method.

### Multiple ranges in a selection

A selection object represents the {{domxref("range","ranges")}} that the user has selected. Typically, it holds only one range, accessed as follows:

```js
var selObj = window.getSelection();
var range  = selObj.getRangeAt(0);
```

- `selObj` is a Selection object
- `range` is a {{domxref("Range")}} object

As the [Selection API specification notes](http://www.w3.org/TR/selection-api/#h_note_15), the Selection API was initially created by Netscape and used multiple ranges, for instance, to allow the user to select a column from a {{HTMLElement("table")}}. However browsers other than Gecko did not implement multiple ranges, and the specification also requires the selection to always have a single range.

### Selection and input focus

Selection and input focus (indicated by {{domxref("Document.activeElement")}}) have a complex relation, that depends on the browser. In cross-browser compatible code it's better to handle them separately.

Safari and Chrome (unlike Firefox) historically focus the element containing selection when modifying the selection programmatically, but this might change in the future (see [W3C bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) and {{webkitbug("38696")}}).

### Glossary

Other key terms used in this section.

- anchor
  - : The anchor of a selection is the beginning point of the selection. When making a selection with a mouse, the anchor is where in the document the mouse button is initially pressed. As the user changes the selection using the mouse or the keyboard, the anchor does not move.
- focus of a selection
  - : The focus of a selection is the end point of the selection. When making a selection with a mouse, the focus is where in the document the mouse button is released. As the user changes the selection using the mouse or the keyboard, the focus is the end of the selection that moves. **Note:** This is not the same as the focused _element_ of the document, as returned by {{domxref("document.activeElement")}}.
- range
  - : A range is a contiguous part of a document. A range can contain entire nodes as well as portions of nodes, such as a portion of a text node. A user will normally only select a single range at a time, but it's possible for a user to select multiple ranges (e.g. by using the Control key). A range can be retrieved from a selection as a {{domxref("range")}} object. Range objects can also be created via the DOM and programmatically added or removed from a selection.

## Specifications

| Specification                                                                | Status                               | Comment                                                                                                                             |
| ---------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML Editing', '#selection', 'Selection')}}     | {{Spec2('HTML Editing')}}     | Initial (older) definition                                                                                                          |
| {{SpecName('Selection API', '#definition', 'Selection')}} | {{Spec2('Selection API')}} | The Selection API specification is based on the HTML Editing APIs specification and focuses on the Selection-related functionality. |

## Browser compatibility

{{Compat}}

## Смотрите также

- {{domxref("Window.getSelection")}}, {{domxref("Document.getSelection")}}, {{domxref("Range")}}
- HTML inputs provide simpler helper APIs for working with selection (see {{domxref("HTMLInputElement.setSelectionRange()")}})
- {{domxref("Document.activeElement")}}, {{domxref("HTMLElement.focus()")}}, and {{domxref("HTMLElement.blur()")}}

## Gecko notes

- Gecko/Firefox provide additional features, available to chrome (internal and add-on) code only. These are defined in `nsISelectionPrivate`.
- Mozilla source code: {{source("dom/webidl/Selection.webidl")}}
- {{obsolete_inline("gecko29")}} {{domxref("Selection.selectionLanguageChange()")}} used to be exposed to the web content until Firefox 29

<!---->
