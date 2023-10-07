---
title: focusin
slug: Web/API/Element/focusin_event
---

O evento `focusin` é acionado no momento em que o elemento receba o foco. A grande diferença entre esse evento e o evento [`focus`](</pt-BR/docs/Mozilla_event_reference/focus_(event)>), é que apenas o `focusin` delega o seu evento para o elemento pai (conhecido como bubbling ou deletegate).

## Informações Gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusIn)
- Interface
  - : {{domxref("FocusEvent")}}
- Borbulha
  - : Sim
- Cancelável
  - : Não
- Alvo
  - : Element
- Ação Padrão
  - : Nenhuma.

## Propriedades

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target losing focus.                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | Event target receiving focus.              |

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Eventos Relacionais

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
