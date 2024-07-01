---
title: MessageChannel
slug: Web/API/MessageChannel
---

{{APIRef("HTML DOM")}}

A interface **`MessageChannel`** da [API Channel Messaging](/pt-BR/docs/Web/API/Channel_Messaging_API) nos permite criar um novo canal de mensagem e enviar os dados através de suas duas propriedades {{domxref("MessagePort")}}.

{{AvailableInWorkers}}

## Propriedades

- {{domxref("MessageChannel.port1")}} {{readonlyInline}}
  - : Retorna port1 do canal.
- {{domxref("MessageChannel.port2")}} {{readonlyInline}}
  - : Retorna port2 do canal.

## Construtor

- {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}
  - : Retorna um novo objeto `MessageChannel` com dois novos objetos {{domxref("MessagePort")}}.

## Exemplo

No seguinte bloco de codigo, você pode ver um novo canal sendo criado usando o construtor {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}. Quando o {{HTMLElement("iframe")}} tiver carregado, nos passamos o {{domxref("MessageChannel.port2")}} para o {{HTMLElement("iframe")}} usando {{domxref("MessagePort.postMessage")}} juntamente com uma mensagem. O manipulador `handleMessage` então reponde à mensagem que foi enviada de volta do {{HTMLElement("iframe")}} (using {{domxref("MessagePort.onmessage")}}), colocando-o em um parágrafo.

```js
var channel = new MessageChannel();
var para = document.querySelector("p");

var ifr = document.querySelector("iframe");
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Hello from the main page!", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

Para um exemplo completo, veja nosso [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic) no Github ([rode online também](https://mdn.github.io/dom-examples/channel-messaging-basic/) ).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using channel messaging](/pt-BR/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
