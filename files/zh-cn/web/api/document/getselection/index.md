---
title: DocumentOrShadowRoot.getSelection()
slug: Web/API/Document/getSelection
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`getSelection()`** property of the {{DOMxRef("DocumentOrShadowRoot")}} interface returns a {{DOMxRef("Selection")}} object representing the range of text selected by the user, or the current position of the caret.

## Syntax

```
var selection = documentOrShadowRootInstance.getSelection()
```

### Parameters

None.

### Returns

A {{DOMxRef("Selection")}} object.

## Example

```js
function foo() {
    var selObj = document.getSelection();
    alert(selObj);
    var selRange = selObj.getRangeAt(0);
    // do stuff with the range
}
```

## Notes

### String representation of the Selection object

In JavaScript, when an object is passed to a function expecting a string (like {{DOMxRef("Window.alert()")}}), the object's {{JSxRef("Object.toString", "toString()")}} method is called and the returned value is passed to the function. This can make the object appear to be a string when used with other functions when it is really an object with properties and methods.

In the above example, `selObj.toString()` is automatically called when it is passed to {{DOMxRef("Window.alert()")}}. However, attempting to use a JavaScript [String](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) property or method such as [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length) or [`substr`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr) directly on a {{DOMxRef("Selection")}} object results in an error if it does not have that property or method and may return unexpected results if it does. To use a `Selection` object as a string, call its `toString()` method directly:

```js
var selectedText = selObj.toString();
```

- `selObj` is a `Selection` object.
- `selectedText` is a string (Selected text).

### Related objects

HTML inputs provide simpler helper APIs for working with selection (see {{DOMxRef("HTMLInputElement.setSelectionRange()")}}).

Notice the difference between _selection_ and _focus_. {{DOMxRef("Document.activeElement")}} returns the focused element.

## Specifications

{{Specifications}}

## Browser Compatibility

{{Compat}}
