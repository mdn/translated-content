---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/API/HTMLOptionElement
---
{{APIRef("HTML DOM")}}

The **`HTMLOptionElement`** interface represents {{HTMLElement("option")}} elements and inherits all classes and methods of the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

| Name                            | Type                                     | Description                                                                                                                                                                                                                                                                        |
| ------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultSelected`               | {{domxref("Boolean")}}             | Contains the initial value of the {{htmlattrxref("selected", "option")}} HTML attribute, indicating whether the option is selected by default or not.                                                                                                                |
| `disabled`                      | {{domxref("Boolean")}}             | Reflects the value of the {{htmlattrxref("disabled", "option")}} HTML attribute, which indicates that the option is unavailable to be selected. An option can also be disabled if it is a child of an {{HTMLElement("optgroup")}} element that is disabled. |
| `form`{{readonlyInline}}  | {{domxref("HTMLFormElement")}} | If the option is a descendent of a {{HTMLElement("select")}} element, then this property has the same value as the `form` property of the corresponding {{DomXref("HTMLSelectElement")}} object; otherwise, it is `null`.                                       |
| `index`{{readonlyInline}} | `long`                                   | The position of the option within the list of options it belongs to, in tree-order. If the option is not part of a list of options, like when it is part of the {{HTMLElement("datalist")}} element, the value is `0`.                                                    |
| `label`                         | {{domxref("DOMString")}}         | Reflects the value of the {{htmlattrxref("label", "option")}} HTML attribute, which provides a label for the option. If this attribute isn't specifically set, reading it returns the element's text content.                                                         |
| `selected`                      | {{domxref("Boolean")}}             | Indicates whether the option is currently selected.                                                                                                                                                                                                                                |
| `text`                          | {{domxref("DOMString")}}         | Contains the text content of the element.                                                                                                                                                                                                                                          |
| `value`                         | {{domxref("DOMString")}}         | Reflects the value of the {{htmlattrxref("value", "option")}} HTML attribute, if it exists; otherwise reflects value of the {{domxref("Node.textContent")}} property.                                                                                        |

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- Option()
  - : Is a constructor creating an `HTMLOptionElement` object. It has four values: the text to display, `text`, the value associated, `value`, the value of `defaultSelected`, and the value of `selected`. The last three values are optional.

## Specifications

| Specification                                                                                            | Status                           | Comment                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#htmloptionelement", "HTMLOptionElement")}}             | {{Spec2('HTML WHATWG')}} |                                                                                                                                                                                                     |
| {{SpecName('HTML5 W3C', "forms.html#the-option-element", "HTMLOptionElement")}} | {{Spec2('HTML5 W3C')}}     | A constructor, `Option()`, has been added. The `form` property can be the `null` value.                                                                                                             |
| {{SpecName('DOM2 HTML', 'html.html#ID-70901257', 'HTMLOptionElement')}}         | {{Spec2('DOM2 HTML')}}     | The `selected` property changed its meaning: it now indicates if the option is currently selected and no longer if it was initally selected. The `defaultSelected` property is no longer read-only. |
| {{SpecName('DOM1', 'level-one-html.html#ID-70901257', 'HTMLOptionElement')}}     | {{Spec2('DOM1')}}         | Initial definition                                                                                                                                                                                  |

## Compatibilidade com navegadores

{{Compat("api.HTMLOptionElement")}}

## See also

- The HTML element implementing this interface: {{HTMLElement("option")}}.
