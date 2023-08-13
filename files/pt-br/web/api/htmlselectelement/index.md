---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
---

{{APIRef("HTML DOM")}}

The **`HTMLSelectElement`** interface represents a {{HTMLElement("select")}} HTML Element. These elements also share all of the properties and methods of other HTML elements via the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600, 120)}}

## Properties

_This interface inherits the properties of {{domxref("HTMLElement")}}, and of {{domxref("Element")}} and {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.autofocus")}}
  - : A {{jsxref("Boolean")}} reflecting the [`autofocus`](/pt-BR/docs/Web/HTML/Element/select#autofocus) HTML attribute, which indicates whether the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
- {{domxref("HTMLSelectElement.disabled")}}
  - : A {{jsxref("Boolean")}} reflecting the [`disabled`](/pt-BR/docs/Web/HTML/Element/select#disabled) HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks.
- {{domxref("HTMLSelectElement.form")}}{{ReadOnlyInline}}
  - : An {{domxref("HTMLFormElement")}} referencing the form that this element is associated with. If the element is not associated with of a {{HTMLElement("form")}} element, then it returns `null`.
- {{domxref("HTMLSelectElement.labels")}}{{ReadOnlyInline}}
  - : A {{domxref("NodeList")}} of {{HTMLElement("label")}} elements associated with the element.
- {{domxref("HTMLSelectElement.length")}}
  - : An `unsigned long` The number of {{HTMLElement("option")}} elements in this `select` element.
- {{domxref("HTMLSelectElement.multiple")}}
  - : A {{jsxref("Boolean")}} reflecting the [`multiple`](/pt-BR/docs/Web/HTML/Element/select#multiple) HTML attribute, which indicates whether multiple items can be selected.
- {{domxref("HTMLSelectElement.name")}}
  - : A {{domxref("DOMString")}} reflecting the [`name`](/pt-BR/docs/Web/HTML/Element/select#name) HTML attribute, containing the name of this control used by servers and DOM search functions.
- {{domxref("HTMLSelectElement.options")}}{{ReadOnlyInline}}
  - : An {{domxref("HTMLOptionsCollection")}} representing the set of {{HTMLElement("option")}} elements contained by this element.
- {{domxref("HTMLSelectElement.required")}}
  - : A {{jsxref("Boolean")}} reflecting the [`required`](/pt-BR/docs/Web/HTML/Element/select#required) HTML attribute, which indicates whether the user is required to select a value before submitting the form.
- {{domxref("HTMLSelectElement.selectedIndex")}}
  - : A `long` reflecting the index of the first selected {{HTMLElement("option")}} element. The value `-1` indicates no element is selected.
- {{domxref("HTMLSelectElement.selectedOptions")}}{{ReadOnlyInline}}
  - : An {{domxref("HTMLCollection")}} representing the set of {{HTMLElement("option")}} elements that are selected.
- {{domxref("HTMLSelectElement.size")}}
  - : A `long` reflecting the [`size`](/pt-BR/docs/Web/HTML/Element/select#size) HTML attribute, which contains the number of visible items in the control. The default is 1, unless `multiple` is true, in which case it is 4.
- {{domxref("HTMLSelectElement.type")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} represeting the form control's type. When `multiple` is `true`, it returns `"select-multiple"`; otherwise, it returns `"select-one"`.
- {{domxref("HTMLSelectElement.validationMessage")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} representing a localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (`willValidate` is false), or it satisfies its constraints.
- {{domxref("HTMLSelectElement.validity")}}{{ReadOnlyInline}}
  - : A {{domxref("ValidityState")}} reflecting the validity state that this control is in.
- {{domxref("HTMLSelectElement.value")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form control (the first selected option). Returns the value attribute of the option element or if it is missing, the text attribute.
- {{domxref("HTMLSelectElement.willValidate")}}{{ReadOnlyInline}}
  - : A {{jsxref("Boolean")}} that indicates whether the button is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.

## Methods

_This interface inherits the methods of {{domxref("HTMLElement")}}, and of {{domxref("Element")}} and {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.add()")}}
  - : Adds an element to the collection of `option` elements for this `select` element.
- {{domxref("HTMLSelectElement.blur()")}}
  - : Removes input focus from this element. _This method is now implemented on {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.checkValidity()")}}
  - : Checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable {{event("invalid")}} event at the element (and returns `false`).
- {{domxref("HTMLSelectElement.focus()")}}
  - : Gives input focus to this element. _This method is now implemented on {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.item()")}}
  - : Gets an item from the options collection for this {{HTMLElement("select")}} element. You can also access an item by specifying the index in array-style brackets or parentheses, without calling this method explicitly.
- {{domxref("HTMLSelectElement.namedItem()")}}
  - : Gets the item in the options collection with the specified name. The name string can match either the `id` or the `name` attribute of an option node. You can also access an item by specifying the name in array-style brackets or parentheses, without calling this method explicitly.
- {{domxref("HTMLSelectElement.remove()")}}
  - : Removes the element at the specified index from the options collection for this select element.
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
  - : Sets the custom validity message for the selection element to the specified message. Use the empty string to indicate that the element does _not_ have a custom validity error.

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

var select = document.getElementById("s");

// return the index of the selected option
console.log(select.selectedIndex); // 1

// return the value of the selected option
console.log(select.options[select.selectedIndex].value); // Second
```

A better way to track changes to the user's selection is to watch for the {{event("change")}} event to occur on the `<select>`. This will tell you when the value changes, and you can then update anything you need to. See [the example provided](/pt-BR/docs/Web/Events/change#Example_Change_event_on_a_select) in the documentation for the `change` event for details.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- The {{HTMLElement("select")}} HTML element, which implements this interface.
