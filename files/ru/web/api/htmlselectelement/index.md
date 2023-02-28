---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/API/HTMLSelectElement
---

{{APIRef("HTML DOM")}}

The **`HTMLSelectElement`** interface represents a {{HTMLElement("select")}} HTML Element. These elements also share all of the properties and methods of other HTML elements via the {{domxref("HTMLElement")}} interface.

## Properties

_This interface inherits the properties of {{domxref("HTMLElement")}}, and of {{domxref("Element")}} and {{domxref("Node")}}._

| Name                                                                                                                      | Type                                             | Description                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref("HTMLSelectElement.autofocus", "autofocus")}}                                                  | {{jsxref("Boolean")}}                     | Reflects the {{htmlattrxref("autofocus", "select")}} HTML attribute, which indicates whether the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.  |
| {{domxref("HTMLSelectElement.disabled", "disabled")}}                                                  | {{jsxref("Boolean")}}                     | Reflects the {{htmlattrxref("disabled", "select")}} HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks.                                                                                                                                                                                              |
| {{domxref("HTMLSelectElement.form", "form")}} {{readonlyInline}}                                     | {{domxref("HTMLFormElement")}}         | Returns the form that this element is associated with. If the element is not associated with of a {{HTMLElement("form")}} element, then it returns `null`.                                                                                                                                                                                                           |
| {{domxref("HTMLSelectElement.labels", "labels")}} {{readonlyInline}}                                 | {{domxref("NodeList")}}                 | Returns a list of label elements associated with this select element.                                                                                                                                                                                                                                                                                                         |
| {{domxref("HTMLSelectElement.length", "length")}}                                                          | `unsigned long`                                  | The number of {{HTMLElement("option")}} elements in this `select` element.                                                                                                                                                                                                                                                                                             |
| {{domxref("HTMLSelectElement.multiple", "multiple")}}                                                  | {{jsxref("Boolean")}}                     | Reflects the {{htmlattrxref("multiple", "select")}} HTML attribute, which indicates whether multiple items can be selected.                                                                                                                                                                                                                                     |
| {{domxref("HTMLSelectElement.name", "name")}}                                                              | {{domxref("DOMString")}}                 | Reflects the {{htmlattrxref("name", "select")}} HTML attribute, containing the name of this control used by servers and DOM search functions.                                                                                                                                                                                                                       |
| {{domxref("HTMLSelectElement.options", "options")}} {{readonlyInline}}                             | {{domxref("HTMLOptionsCollection")}} | The set of {{HTMLElement("option")}} elements contained by this element.                                                                                                                                                                                                                                                                                               |
| {{domxref("HTMLSelectElement.required", "required")}}                                                  | {{jsxref("Boolean")}}                     | Reflects the {{htmlattrxref("required", "select")}} HTML attribute, which indicates whether the user is required to select a value before submitting the form.                                                                                                                                                      |
| {{domxref("HTMLSelectElement.selectedIndex", "selectedIndex")}}                                      | `long`                                           | Reflects the index of the first selected {{HTMLElement("option")}} element. The value `-1` indicates no element is selected.                                                                                                                                                                                                                                           |
| {{domxref("HTMLSelectElement.selectedOptions", "selectedOptions")}} {{readonlyInline}}         | {{domxref("HTMLCollection")}}         | Set of options that are selected.                                                                                                                                                                                                                                                                                                                                             |
| {{domxref("HTMLSelectElement.size", "size")}}                                                              | `long`                                           | Reflects the {{htmlattrxref("size", "select")}} HTML attribute, which contains the number of visible items in the control. The default is 1, unless `multiple` is true, in which case it is 4.                                                                                                                                                                      |
| {{domxref("HTMLSelectElement.type", "type")}} {{readonlyInline}}                                     | {{domxref("DOMString")}}                 | The form control's type. When `multiple` is `true`, it returns `"select-multiple"`; otherwise, it returns `"select-one"`.                                                                                                                                                                                                                                                     |
| {{domxref("HTMLSelectElement.validationMessage", "validationMessage")}} {{readonlyInline}} | {{domxref("DOMString")}}                 | Localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (`willValidate` is false), or it satisfies its constraints.                                                                                                            |
| {{domxref("HTMLSelectElement.validity", "validity")}} {{readonlyInline}}                         | {{domxref("ValidityState")}}             | The validity state that this control is in.                                                                                                                                                                                                                                                                                                                                   |
| {{domxref("HTMLSelectElement.value", "value")}}                                                          | {{domxref("DOMString")}}                 | The value of the form control (the first selected option).                                                                                                                                                                                                                                                                                                                    |
| {{domxref("HTMLSelectElement.willValidate", "willValidate")}}{{readonlyInline}}                  | {{jsxref("Boolean")}}                     | Indicates whether the button is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.                                                                                                                                                                                                                                       |

## Methods

_This interface inherits the methods of {{domxref("HTMLElement")}}, and of {{domxref("Element")}} and {{domxref("Node")}}._

| Name                                                                                                 | Description                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref("HTMLSelectElement.add()", "add()")}}                                     | Adds an element to the collection of `option` elements for this `select` element.                                                                                                                                                                                                        |
| blur()                                                                      | Removes input focus from this element. _This method is now implemented on {{domxref("HTMLElement")}}_.                                                                                                                                                                         |
| {{domxref("HTMLSelectElement.checkValidity()", "checkValidity()")}}             | Checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable {{event("invalid")}} event at the element (and returns `false`).                                                              |
| focus()                                                                     | Gives input focus to this element. _This method is now implemented on {{domxref("HTMLElement")}}_.                                                                                                                                                                             |
| {{domxref("HTMLSelectElement.item()", "item()")}}                                     | Gets an item from the options collection for this {{HTMLElement("select")}} element. You can also access an item by specifying the index in array-style brackets or parentheses, without calling this method explicitly.                                                          |
| {{domxref("HTMLSelectElement.namedItem()", "namedItem()")}}                     | Gets the item in the options collection with the specified name. The name string can match either the `id` or the `name` attribute of an option node. You can also access an item by specifying the name in array-style brackets or parentheses, without calling this method explicitly. |
| {{domxref("HTMLSelectElement.remove()", "remove()")}}                             | Removes the element at the specified index from the options collection for this select element.                                                                                                                                                                                          |
| {{domxref("HTMLSelectElement.setCustomValidity()", "setCustomValidity()")}} | Sets the custom validity message for the selection element to the specified message. Use the empty string to indicate that the element does _not_ have a custom validity error.                                                                                                          |

## Example

### Get information about the selected option

```js
/* assuming we have the following HTML
<select id='s'>
    <option>First</option>
    <option selected>Second</option>
    <option>Third</option>
</select>
*/

var select = document.getElementById('s');

// return the index of the selected option
console.log(select.selectedIndex); // 1

// return the value of the selected option
console.log(select.options[select.selectedIndex].value) // Second
```

A better way to track changes to the user's selection is to watch for the {{event("change")}} event to occur on the `<select>`. This will tell you when the value changes, and you can then update anything you need to. See [the example provided](/ru/docs/Web/Events/change#Example_Change_event_on_a_select) in the documentation for the `change` event for details.

## Specifications

| Specification                                                                                            | Status                           | Comment                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#htmlselectelement', 'HTMLSelectElement')}}             | {{Spec2('HTML WHATWG')}} | Since the latest snapshot, {{SpecName('HTML5 W3C')}}, it adds the `autocomplete` property and the `reportValidity()` method.                                                                                                                                                                                                                                                                       |
| {{SpecName('HTML5 W3C', 'forms.html#htmlselectelement', 'HTMLSelectElement')}} | {{Spec2('HTML5 W3C')}}     | Is a snapshot of {{SpecName("HTML WHATWG")}}. It adds the `autofocus`, `form`, `required`, `labels`, `selectedOptions`, `willValidate`, `validity` and `validationMessage` properties. The `tabindex` property and the `blur()` and `focus()` methods have been moved to {{domxref("HTMLElement")}}. The methods `item()`, `namedItem()`, `checkValidity()` and `setCustomValidity()`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-94282980', 'HTMLSelectElement')}}         | {{Spec2('DOM2 HTML')}}     | `options` now returns an {{domxref("HTMLOptionsCollection")}}. `length` now returns an `unsigned long`.                                                                                                                                                                                                                                                                                       |
| {{SpecName('DOM1', 'level-one-html.html#ID-94282980', 'HTMLSelectElement')}}     | {{Spec2('DOM1')}}         | Initial definition.                                                                                                                                                                                                                                                                                                                                                                                       |

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("select")}} HTML element, which implements this interface.
