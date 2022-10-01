---
title: focusout
slug: Web/API/Element/focusout_event
translation_of: Web/API/Element/focusout_event
original_slug: Web/Events/focusout
---
O evento `focusout` é acionado assim que o elemento perde o foco. A principal diferença entre esse evento e o evento [`blur`](</en-US/docs/Mozilla_event_reference/blur_(event)>), é que esse ultimo não gera "borbulhas".

## Informações Gerais

- Especificação
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout)
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

| Property                                 | Type                                               | Description                                |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target losing focus.                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                   | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                       | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                       | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | Event target receiving focus.              |

## Compatibilidade com navegadores

{{Compat("api.Element.focusout_event")}}

## Eventos Relcionados

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
