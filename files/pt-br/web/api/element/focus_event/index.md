---
title: focus
slug: Web/API/Element/focus_event
---

O evento `focus` é acionado assim que um elemento recebe um foco. O grande diferencial entre este evento e o evento [`focusin`](/pt-BR/docs/Mozilla_event_reference/focusin), é que esse segundo "borbulha".

## Informações Gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focus)
- Interface
  - : {{ domxref("FocusEvent") }}
- Borbulha
  - : Não
- Cancelável
  - : Não
- Alvo
  - : Element
- Ação Padrão
  - : Nenhuma.

> **Nota:** Note: The interface was {{ domxref("Event") }} prior to Gecko 24. ({{ bug(855741) }})

## Propriedades

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target (DOM element)                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | null                                       |

## Eventos Delegados

Existem 2 maneiras diferentes de implementações delegados a partir de um evento: por meio da utilização do evento `focusin` que todos os browsers atuais suportam tão tecnologia (todos exceto o Firefox), ou por setando o parâmetro "useCapture" do elemento [`addEventListener`](/pt-BR/docs/DOM/element.addEventListener) como `true`:

{{ EmbedLiveSample('Event_delegation', '', '', '', 'Web/Events/blur') }}

(Exemplo de codigo do evento [blur (event)](/pt-BR/docs/Web/Events/blur))

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Eventos Relacionais

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
