---
title: Selection.deleteFromDocument()
slug: Web/API/Selection/deleteFromDocument
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

> **备注：** The **`Selection.deleteFromDocument()`** method deletes the actual text being represented by a selection object from the document's DOM.

## Syntax

```
sel.deleteFromDocument()
```

### Parameters

_None._

## Examples

A user selects the (imaginary) text "ve two ea" from "Rabbits have two ears." on a web page. The user then clicks a button that executes the JavaScript snippet `window.getSelection().deleteFromDocument()`. The document's text becomes "Rabbits hars."

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
