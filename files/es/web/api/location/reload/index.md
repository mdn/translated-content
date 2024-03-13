---
title: "Location: reload()"
slug: Web/API/Location/reload
---

{{ APIRef("HTML DOM") }}

El metodo **`location.reload()`** carga de nuevo la URL actual, como lo hace el boton de Refresh de los navegadores.

La recarga puede estar bloqueada y arrojar un `SECURITY_ERROR` {{domxref("DOMException")}} . Esto sucede si el {{Glossary("origin")}} de la llamada `location.reload()` difiere del origen de la página que posee el objeto {{domxref("Location")}}. Consulta [Same-origin policy](/es/docs/Web/Security/Same-origin_policy) para mayor información.

## Syntax

```
location.reload();
```

## Ejemplo

### HTML

```html
<button id="reload">Click para recargar</button>
```

### JavaScript

```js
const reload = document.getElementById("reload");

reload.addEventListener("click", (_) => {
  // el _ es para indicar la ausencia de parametros
  location.reload();
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.assign()")}} and {{domxref("Location.replace()")}}.
