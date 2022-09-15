---
title: load
slug: Web/API/Window/load_event
translation_of: Web/API/Window/load_event
original_slug: Web/Events/load
---
```
O evento de load é acionado quando um recurso e seus recursos
dependentes terminaram de carregar.
```

## Informações Gerais

- Especificação
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
- Interface
  - : UIEvent
- Bubbles
  - : Não
- Cancelavel
  - : Não
- Alvo
  - : Window
- Ação Padrão
  - : Nenhuma.

## Propriedades

| Property                              | Type                                                                                                                                                            | Description                                                                                                                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/pt-BR/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | The event target (the topmost target in the DOM tree).                                                                                                                                                                |
| `type` {{readonlyInline}}       | [`DOMString`](/pt-BR/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | The type of event.                                                                                                                                                                                                    |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/pt-BR/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event normally bubbles or not.                                                                                                                                                                            |
| `cancelable` {{readonlyInline}} | [`Boolean`](/pt-BR/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event is cancellable or not.                                                                                                                                                                              |
| `view` {{readonlyInline}}       | [`WindowProxy`](/pt-BR/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/pt-BR/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                                                                                                                                | 0.                                                                                                                                                                                                                    |

## Exemplo

```html
<script>
  window.addEventListener("load", function(event) {
    console.log("Todos os recursos terminaram o carregamento!");
  });
</script>
```

## Eventos Relacionados

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
