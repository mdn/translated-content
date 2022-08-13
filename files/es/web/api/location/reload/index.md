---
title: 'Location: reload()'
slug: Web/API/Location/reload
tags:
  - API
  - HTML
  - HTML DOM
  - Location
  - Method
  - Referencia
  - metodo
translation_of: Web/API/Location/reload
---
{{ APIRef("HTML DOM") }}

El metodo **`location.reload()`** carga de nuevo la URL actual, como lo hace el boton de Refresh de los navegadores.

La recarga puede estar bloqueada y arrojar un `SECURITY_ERROR` {{domxref("DOMException")}} . Esto sucede si el {{Glossary("origin")}} de la llamada `location.reload()` difiere del origen de la página que posee el objeto { {domxref("Location")}}. Consulta [Same-origin policy](/es/docs/Web/Security/Same-origin_policy) para mayor información.

## Syntax

    location.reload();

## Ejemplo

### HTML

```html
<button id="reload">Click para recargar</button>
```

### JavaScript

```js
const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});
```

## Especificaciones

| Specification                                                                                                    | Status                           | Comment                                          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| {{SpecName('HTML WHATWG', "history.html#dom-location-reload", "Location.reload()")}} | {{Spec2('HTML WHATWG')}} | No change from {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#dom-location-reload", "Location.reload()")}} | {{Spec2('HTML5 W3C')}}     | Initial definition.                              |

## Compatibilidad del navegador

{{Compat("api.Location.reload")}}

## Ver también

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.assign()")}} and {{domxref("Location.replace()")}}.
