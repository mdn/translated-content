---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLLabelElement`** interface gives access to properties specific to {{HTMLElement("label")}} elements. It inherits from {{domxref("HTMLElement")}}.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

| Name                               | Type                                     | Description                                                                                         |
| ---------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accessKey`                        | {{domxref("DOMString")}}         | Reflects the {{htmlattrxref("accesskey", "label")}} HTML attribute.                   |
| `control` {{readonlyInline}} | {{domxref("HTMLElement")}}     | The labeled control.                                                                                |
| `form` {{readonlyInline}}    | {{domxref("HTMLFormElement")}} | The form owner of this label.                                                                       |
| `htmlFor`                          | {{domxref("DOMString")}}         | The ID of the labeled control. Reflects the {{htmlattrxref("for", "label")}} attribute. |

## Methods

_No specific method; inherits properties from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("label")}}
