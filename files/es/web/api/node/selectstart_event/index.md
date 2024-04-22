---
title: GlobalEventHandlers.onselectstart
slug: Web/API/Node/selectstart_event
---

{{ApiRef('DOM')}}{{SeeCompatTable}}

La propiedad **`GlobalEventHandlers.onselectstart`** representa el manejador de evento que es invocado cuando un evento [`selectstart`](/es/docs/Web/Reference/Events/selectstart) alcanza el objeto.

## Sintaxis

```
obj.onselectstart = function;
```

- `function` es el nombre de una función definida por el usuario, sin el sufijo () ni ningún parámetro, o una declaración de función anónima.

## Ejemplo

```html
document.onselectstart = function() { console.log("¡Selección iniciada!"); };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`selectstart`](/es/docs/Web/Reference/Events/selectstart)
- {{domxref("Document.onselectionchange")}} and [`selectionchange`](/es/docs/Web/Reference/Events/selectionchange).
