---
title: EventTarget
slug: Web/API/EventTarget
tags:
  - API
  - DOM
  - DOM Events
  - Interface
translation_of: Web/API/EventTarget
---
{{ ApiRef("DOM Events") }}

## Resumo

`EventTarget` é uma interface DOM implementada por objetos que podem receber eventos DOM e tem que ouvir estes.

{{domxref("Element")}}, {{domxref("document")}}, e {{domxref("window")}} são os mais comuns disparadores de eventos, mas outros objetos podem disparar eventos também, por exemplo {{domxref("XMLHttpRequest")}}, {{domxref("AudioNode")}}, {{domxref("AudioContext")}} e outros.

Muitos disparadores de eventos (incluindo elements, documents, e windows) também suportam definir [event handlers](/pt-BR/docs/Web/Guide/DOM/Events/Event_handlers) através `on...` propriedades e atributos.

## Métodos

- {{domxref("EventTarget.addEventListener()")}}
  - : Registra um tratamento para um tipo específico de evento sobre o `EventTarget`.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Remove um _event listener_ do `EventTarget`.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Dispatch an event to this `EventTarget`.

## Especificações

| Especificação                                                                                                    | Status                           | Comentário                                                                                    |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#interface-eventtarget', 'EventTarget')}}                         | {{Spec2('DOM WHATWG')}} | Sem mundanças.                                                                                |
| {{SpecName('DOM3 Events', 'DOM3-Events.html#interface-EventTarget', 'EventTarget')}} | {{Spec2('DOM3 Events')}} | Alguns parâmetros agora são opcionais (`listener`), ou aceitam o valor `null` (`useCapture`). |
| {{SpecName('DOM2 Events', 'events.html#Events-EventTarget', 'EventTarget')}}             | {{Spec2('DOM2 Events')}} | Definição inicial.                                                                            |

## Compatibilidade com navegadores

{{Compat("api.EventTarget")}}

## Veja também

- [Referência de eventos](/pt-BR/docs/Web/Reference/Events) - os eventos disponíveis na plataforma.
- [Guia do desenvolvedor sobre Eventos](/pt-BR/docs/Web/Guide/DOM/Events)
- Interface {{domxref("Event")}}
