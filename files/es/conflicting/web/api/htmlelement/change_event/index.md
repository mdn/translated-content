---
title: GlobalEventHandlers.onchange
slug: conflicting/Web/API/HTMLElement/change_event
translation_of: Web/API/GlobalEventHandlers/onchange
original_slug: Web/API/GlobalEventHandlers/onchange
---
{{ ApiRef("HTML DOM") }}

La propiedad `onchange` establece y devuelve el [event handler](/docs/Web/Guide/Events/Event_handlers "/en-US/docs/Web/Guide/DOM/Events/Event_handlers") para el evento {{event("change")}}.

## Sintaxis

```
element.onchange = handlerFunction;
var handlerFunction = element.onchange;
```

`handlerFunction` debería ser _null_ o una [Función de javascript](/es/docs/Web/JavaScript/Reference/Functions "/en-US/docs/JavaScript/Reference/Functions_and_function_scope") espeficiando el manejador para el evento.

## Notas

Mir el la págna [Manejadores de eventos DOM](/es/docs/Web/Guide/Events/Event_handlers "/en-US/docs/Web/Guide/DOM/Events/Event_handlers") para más información sobre cómo trabajar con los manejadore `on`.

Mira la documentación para el evento {{event("change")}}.

## Especificaciones

| Especificación                                                                                   | Estatus                          | Comentario |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onchange','onchange')}} | {{Spec2('HTML WHATWG')}} |            |

## Compatibilidad de navegadores

{{Compat("api.GlobalEventHandlers.onchange")}}
