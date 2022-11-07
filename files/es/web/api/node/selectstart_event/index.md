---
title: GlobalEventHandlers.onselectstart
slug: Web/API/Node/selectstart_event
translation_of: Web/API/GlobalEventHandlers/onselectstart
original_slug: Web/API/Document/selectstart_event
---

{{ApiRef('DOM')}}{{SeeCompatTable}}

La propiedad **`GlobalEventHandlers.onselectstart`** representa el manejador de evento que es invocado cuando un evento {{event("selectstart")}} alcanza el objeto.

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

| Especificación                                                                               | Estado                               | Observaciones      |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('Selection API','','GlobalEventHandlers.onselectstart')}} | {{Spec2('Selection API')}} | Definición inicial |

## Compatibilidad con navegadores

{{Compat("api.GlobalEventHandlers.onselectstart")}}

## Ver también

- {{event("selectstart")}}
- {{domxref("Document.onselectionchange")}} and {{event('selectionchange')}}.
