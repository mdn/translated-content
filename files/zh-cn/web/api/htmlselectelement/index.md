---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement`** 接口表示一个 {{HTMLElement("select")}} HTML 元素。这个元素也通过 {{domxref("HTMLElement")}} 接口从其他 HTML 元素共享所有属性和方法。

{{InheritanceDiagram(600, 120)}}

## 属性

_这个接口从 {{domxref("HTMLElement")}}，{{domxref("Element")}} 和 {{domxref("Node")}} 继承属性。_

- {{domxref("HTMLSelectElement.autofocus")}}
  - : A {{jsxref("Boolean")}} reflecting the {{htmlattrxref("autofocus", "select")}} HTML attribute, which indicates whether the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
- {{domxref("HTMLSelectElement.disabled")}}
  - : A {{jsxref("Boolean")}} reflecting the {{htmlattrxref("disabled", "select")}} HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks.
- {{domxref("HTMLSelectElement.form")}}{{ReadOnlyInline}}
  - : An {{domxref("HTMLFormElement")}} referencing the form that this element is associated with. If the element is not associated with of a {{HTMLElement("form")}} element, then it returns `null`.
- {{domxref("HTMLSelectElement.labels")}}{{ReadOnlyInline}}
  - : A {{domxref("NodeList")}} of {{HTMLElement("label")}} elements associated with the element.
- {{domxref("HTMLSelectElement.length")}}
  - : An `unsigned long` The number of {{HTMLElement("option")}} elements in this `select` element.
- {{domxref("HTMLSelectElement.multiple")}}
  - : A {{jsxref("Boolean")}} reflecting the {{htmlattrxref("multiple", "select")}} HTML attribute, which indicates whether multiple items can be selected.
- {{domxref("HTMLSelectElement.name")}}
  - : A {{domxref("DOMString")}} reflecting the {{htmlattrxref("name", "select")}} HTML attribute, containing the name of this control used by servers and DOM search functions.
- {{domxref("HTMLSelectElement.options")}}{{ReadOnlyInline}}
  - : An {{domxref("HTMLOptionsCollection")}} representing the set of {{HTMLElement("option")}} ({{domxref("HTMLOptionElement")}}) elements contained by this element.
- {{domxref("HTMLSelectElement.required")}}
  - : A {{jsxref("Boolean")}} reflecting the {{htmlattrxref("required", "select")}} HTML attribute, which indicates whether the user is required to select a value before submitting the form.
- {{domxref("HTMLSelectElement.selectedIndex")}}
  - : A `long` reflecting the index of the first selected {{HTMLElement("option")}} element. The value `-1` indicates no element is selected.
- {{domxref("HTMLSelectElement.selectedOptions")}}{{ReadOnlyInline}}
  - : An {{domxref("HTMLCollection")}} representing the set of {{HTMLElement("option")}} elements that are selected.
- {{domxref("HTMLSelectElement.size")}}
  - : A `long` reflecting the {{htmlattrxref("size", "select")}} HTML attribute, which contains the number of visible items in the control. The default is 1, unless `multiple` is `true`, in which case it is 4.
- {{domxref("HTMLSelectElement.type")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} represeting the form control's type. When `multiple` is `true`, it returns `"select-multiple"`; otherwise, it returns `"select-one"`.
- {{domxref("HTMLSelectElement.validationMessage")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} representing a localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (`willValidate` is false), or it satisfies its constraints.
- {{domxref("HTMLSelectElement.validity")}}{{ReadOnlyInline}}
  - : A {{domxref("ValidityState")}} reflecting the validity state that this control is in.
- {{domxref("HTMLSelectElement.value")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form control. Returns the `value` property of the first selected option element if there is one, otherwise the empty string.
- {{domxref("HTMLSelectElement.willValidate")}}{{ReadOnlyInline}}
  - : A {{jsxref("Boolean")}} that indicates whether the button is a candidate for constraint validation. It is `false` if any conditions bar it from constraint validation.

## 方法

_这个接口从 {{domxref("HTMLElement")}}，{{domxref("Element")}} 和 {{domxref("Node")}} 继承属性。_

- {{domxref("HTMLSelectElement.add()")}}
  - : Adds an element to the collection of `option` elements for this `select` element.
- {{domxref("HTMLSelectElement.blur()")}}{{Deprecated_Inline}}
  - : Removes input focus from this element. _This method is now implemented on {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.checkValidity()")}}
  - : Checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable {{domxref("HTMLInputElement/invalid_event", "invalid")}} event at the element (and returns `false`).
- {{domxref("HTMLSelectElement.focus()")}}{{Deprecated_Inline}}
  - : Gives input focus to this element. _This method is now implemented on {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.item()")}}
  - : Gets an item from the options collection for this {{HTMLElement("select")}} element. You can also access an item by specifying the index in array-style brackets or parentheses, without calling this method explicitly.
- {{domxref("HTMLSelectElement.namedItem()")}}
  - : Gets the item in the options collection with the specified name. The name string can match either the `id` or the `name` attribute of an option node. You can also access an item by specifying the name in array-style brackets or parentheses, without calling this method explicitly.
- {{domxref("HTMLSelectElement.remove()")}}
  - : Removes the element at the specified index from the options collection for this `select` element.
- {{domxref("HTMLSelectElement.reportValidity()")}}
  - : This method reports the problems with the constraints on the element, if any, to the user. If there are problems, it fires a cancelable {{domxref("HTMLInputElement/invalid_event", "invalid")}} event at the element, and returns `false`; if there are no problems, it returns `true`.
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
  - : Sets the custom validity message for the selection element to the specified message. Use the empty string to indicate that the element does _not_ have a custom validity error.

## 事件

使用 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 或给下面接口的 `oneventname` 属性分配一个监听程序来监听这些事件：

- {{domxref("HTMLElement/input_event", "input")}} 事件
  - : 当 {{HTMLElement("input")}}, {{HTMLElement("select")}}, 或 {{HTMLElement("textarea")}} 元素的 `value` 改变时触发该事件。

## 示例

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

A better way to track changes to the user's selection is to watch for the {{domxref("HTMLElement/change_event", "change")}} event to occur on the `<select>`. This will tell you when the value changes, and you can then update anything you need to. See [the example provided](/zh-CN/docs/Web/API/HTMLElement/change_event#select_element) in the documentation for the `change` event for details.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("select")}} HTML 元素
