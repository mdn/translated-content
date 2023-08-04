---
title: readystatechange
slug: Web/API/Document/readystatechange_event
---

{{ApiRef}}

O evento `readystatechange` é ativado quando o atributo [`readyState`](/pt-BR/docs/Web/API/Document/readyState) de um documento é alterado.

## Informações gerais

- Especificação
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness)
- Interface
  - : Event
- Propaga
  - : Não
- Cancelável
  - : Não
- Alvo
  - : Document
- Ação Padrão
  - : Nenhuma.

## Propriedades

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Exemplo

```js
// alternativa ao DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
};
```

## Compatibilidade com navegadores

Este evento tem sido suportado pelo Internet Explorer há várias versões, e pode ser usada como uma alternativa para o evento [`DOMContentLoaded`](</pt-BR/docs/Mozilla_event_reference/DOMContentLoaded_(event)>) (veja a seção [cross-browser fallback](/pt-BR/docs/Web/Events/DOMContentLoaded#Cross-browser_fallback)).

## Eventos Relacionados

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
