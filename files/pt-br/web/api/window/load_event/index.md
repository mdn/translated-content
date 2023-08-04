---
title: load
slug: Web/API/Window/load_event
---

```
O evento de load é acionado quando um recurso e seus recursos
dependentes terminaram de carregar.
```

## Informações Gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
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

| Property                        | Type                                             | Description                                                                                   |
| ------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/pt-BR/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                        |
| `type` {{readonlyInline}}       | [`DOMString`](/pt-BR/docs/Web/API/DOMString)     | The type of event.                                                                            |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/pt-BR/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                    |
| `cancelable` {{readonlyInline}} | [`Boolean`](/pt-BR/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                      |
| `view` {{readonlyInline}}       | [`WindowProxy`](/pt-BR/docs/Web/API/WindowProxy) | [`document.defaultView`](/pt-BR/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                            |

## Exemplo

```html
<script>
  window.addEventListener("load", function (event) {
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
