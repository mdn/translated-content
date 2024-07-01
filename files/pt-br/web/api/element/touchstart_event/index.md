---
title: touchstart
slug: Web/API/Element/touchstart_event
---

`O evento touchstart` é acionado quando o ponteiro de toque _(dedo ou caneta)_ é aplicado sobre à superfície de toque da tela _(toque sobre a tela no elemento alvo)_.

## Info Geral

- Especificações
  - : [Touch Events](http://w3c.github.io/touch-events/#event-touchstart)
- Interface
  - : {{domxref("TouchEvent")}}
- Bubbles
  - : Sim
- Cancelável
  - : Sim
- Alvo
  - : Documento, Elemento
- Ação Padrão
  - : undefined (indefinido)

## Propriedades

| Property                            | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}         | EventTarget  | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                                                                                                                                                       |
| `type` {{readonlyInline}}           | DOMString    | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `bubbles` {{readonlyInline}}        | Boolean      | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `cancelable` {{readonlyInline}}     | Boolean      | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `view` {{readonlyInline}}           | WindowProxy  | [`document.defaultView`](/pt-BR/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                                                                |
| `detail` {{readonlyInline}}         | long (float) | 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `touches` {{readonlyInline}}        | TouchList    | A list of [`Touch`](/pt-BR/DOM/Touch)es for every point of contact currently touching the surface.                                                                                                                                                                                                                                                                                                                                                           |
| `targetTouches` {{readonlyInline}}  | TouchList    | A list of [`Touch`](/pt-BR/DOM/Touch)es for every point of contact that is touching the surface and started on the element that is the target of the current event.                                                                                                                                                                                                                                                                                          |
| `changedTouches` {{readonlyInline}} | TouchList    | A list of [`Touch`](/pt-BR/docs/DOM/Touch)es for every point of contact which contributed to the event. For the touchstart event this must be a list of the touch points that just became active with the current event. For the touchmove event this must be a list of the touch points that have moved since the last event. For the touchend and touchcancel events this must be a list of the touch points that have just been removed from the surface. |
| `ctrlKey` {{readonlyInline}}        | boolean      | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                              |
| `shiftKey` {{readonlyInline}}       | boolean      | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                |
| `altKey` {{readonlyInline}}         | boolean      | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                  |
| `metaKey` {{readonlyInline}}        | boolean      | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                 |

## Exemplos

Os códigos de exemplos para este evento estão disponíveis nesta página dedicada: [Touch events](/pt-BR/DOM/Touch_events).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Eventos Relacionados

- {{ domxref("GlobalEventHandlers.ontouchstart","ontouchstart")}}
