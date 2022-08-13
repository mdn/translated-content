---
title: HTMLSelectElement.setCustomValidity()
slug: Web/API/HTMLSelectElement/setCustomValidity
translation_of: Web/API/HTMLSelectElement/setCustomValidity
---
{{ APIRef("HTML DOM") }}

El metodo **`HTMLSelectElement.setCustomValidity()`** define el mensaje de validación personalizado para el elemento seleccionado con el mensaje especifico. Usa una string vacia para indicar que ese elemento no tiene error de validación customizado.

## Syntax

    selectElt.setCustomValidity(string);

### Parameters

- `string` is the {{domxref("DOMString")}} containing the error message.

## Specifications

| Specification                                                                                                                                | Status                           | Comment                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-cva-setcustomvalidity', 'HTMLSelectElement.setCustomValidity()')}}         | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName('HTML5 W3C')}}. |
| {{SpecName('HTML5 W3C', 'forms.html#dom-cva-setcustomvalidity', 'HTMLSelectElement.setCustomValidity()')}} | {{Spec2('HTML5 W3C')}}     | Initial definition, snapshot of {{SpecName('HTML WHATWG')}}   |

## Browser compatibility

{{Compat("api.HTMLSelectElement.setCustomValidity")}}

## See also

- [Form validation.](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation)
