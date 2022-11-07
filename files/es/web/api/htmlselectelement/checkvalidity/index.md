---
title: HTMLSelectElement.checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
tags:
  - API
  - Constraint Validation API
  - HTML DOM
  - HTMLSelectElement
  - Referencia
  - metodo
translation_of: Web/API/HTMLSelectElement/checkValidity
---
{{ APIRef("HTML DOM") }}

El método **`HTMLSelectElement.checkValidity()`** comprueba si el elemento tiene restricciones y si las cumple. Si el elemento no cumple sus restricciones, el navegador lanza un evento cancelable [`invalid`](/es/docs/Web/Reference/Events/invalid) al momento y luego devuelve `false`.

## Sintaxis

```html
var result = selectElt.checkValidity();
```

## Especificaciones

| Especificación                                                                                                                       | Estado                           | Comentario                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-cva-checkvalidity', 'HTMLSelectElement.checkValidity()')}}             | {{Spec2('HTML WHATWG')}} | Sin cambios desde el último snapshot, {{SpecName('HTML5 W3C')}}. |
| {{SpecName('HTML5 W3C', 'forms.html#dom-cva-checkvalidity', 'HTMLSelectElement.checkValidity()')}} | {{Spec2('HTML5 W3C')}}     | Definición inicial, snapshot de {{SpecName('HTML WHATWG')}}    |

## Compatibilidad en navegadores

{{Compat("api.HTMLSelectElement.checkValidity")}}

## Ver también

- [Validación de restricciones.](/es/docs/HTML/HTML5/Validacion_de_restricciones)
