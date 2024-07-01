---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
---

{{APIRef("Broadcast Channel API")}}

A interface **`BroadcastChannel`** representa um canal com um nome em que qualquer {{glossary("browsing context")}} (contexto de navegação) de uma determinada {{glossary("origin")}} (origem) pode assinar. Permite a comunicação entre diferentes documentos (em diferentes janelas, abas, frames ou iframes) da mesma _origin_. As mensagens são transmitidas através de um evento {{event("message")}} acionado em todos objetos do tipo `BroadcastChannel` que estão ouvindo o canal.

{{AvailableInWorkers}}

## Construtor

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : Cria um objeto, no qual faz o vínculo com um canal nomeado.

## Propriedades

_Essa interface também herda propriedades de seu pai, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.name")}}
  - : Retorna um {{domxref("DOMString")}}, o nome do canal.

### Event handlers

- {{domxref("BroadcastChannel.onmessage")}}
  - : Uma propriedade {{event("Event_handlers", "event handler")}} que específica a função a ser executada quando um evento {{event("message")}} é acionado a este objeto.
- {{domxref("BroadcastChannel.onmessageerror")}}
  - : Uma chamada {{event("Event_handlers", "event handler")}} quando um {{domxref("MessageEvent")}} do tipo {{domxref("MessageError")}} é disparado - isto é, quando recebe uma mensagem que não pode ser desserializada.

## Métodos

_Essa interface também herda métodos de seu pai, {{domxref("EventTarget")}}._

- {{domxref("BroadcastChannel.postMessage()")}}
  - : Envia a mensagem, de qualquer tipo de objeto, para cada objeto `BroadcastChannel` ouvindo o mesmo canal.
- {{domxref("BroadcastChannel.close()")}}
  - : Fecha o objeto do canal, indicando que ele não receberá novas mensagens e eventualmente será descartado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Outra forma mais pesada de comunicação entre _browser contexts_: {{domxref("ServiceWorker")}}.
- [Visão geral de Broadcast Channel API](/pt-BR/docs/Web/API/Broadcast_Channel_API)
