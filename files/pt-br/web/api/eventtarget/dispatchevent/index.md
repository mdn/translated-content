---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
---

{{APIRef("DOM")}}

Dispara um {{domxref("Event")}} para o {{domxref("EventTarget")}} especificado, invocando os {{domxref("EventListener")}}s especificados, em uma ordem apropriada. O processamento normal das regras (incluindo a captura e a fase opcional de [bubbling](https://javascript.info/bubbling-and-capturing)) aplica-se a eventos disparados manualmente com `dispatchEvent()`.

## Sintaxe

```
cancelled = !target.dispatchEvent(event)
```

- `event` é o objeto {{domxref("Event")}} a ser disparado.
- `target` é utilizado para inicializar o {{domxref("Event", "", "target")}} e determinar quais event listeners serão invocados.
- O valor retornado é `false` se ao menos um dos event handlers o qual manipulou o evento chamou {{domxref("Event.preventDefault()")}}. De outro modo, isto retorna `true`.

O método `dispatchEvent joga` `UNSPECIFIED_EVENT_TYPE_ERR` se o tipo do evento não foi especificado pela inicialização do evento antes do método ser chamado, ou se o tipo do evento for is `null` ou uma string vazia. Exceções jogadas por event handlers são reportadas como exceções não-capturáveis; os event handlers são executados em uma callstack aninhada; eles bloqueiam o chamador até que a rotina tenha sido totalmente executada, mas as execeções não se propagam para o chamador.

## Notas

`dispatchEvent` é a última fase do processo create-init-dispatch, a qual é usada para disparar eventos na implementação do event model. O evento pode ser criado utilizando o método [document.createEvent](/pt-BR/docs/Web/API/Document/createEvent) e pode ser inicializado com [initEvent](/pt-BR/docs/Web/API/Event/initEvent) ou outro método de inicialização mais específico, como [initMouseEvent](/pt-BR/docs/Web/API/MouseEvent/initMouseEvent) ou [initUIEvent](/pt-BR/docs/Web/API/UIEvent/initUIEvent).

Veja também a [referência Event object](/pt-BR/docs/Web/API/Event).

## Exemplo

Veja [Creating and triggering events](/pt-BR/docs/Web/Events/Creating_and_triggering_events).

## Especificações

- [DOM Level 2 Events: dispatchEvent](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget-dispatchEvent)
