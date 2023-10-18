---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

A interface RTCDataChannel representa um canal de rede que pode ser usado para transferências bidirecionais de dados arbitrários de ponto a ponto. Todo canal de dados está associado a {{domxref("RTCPeerConnection")}}, e cada conexão de pares pode ter até um máximo teórico de 65,534 canais de dados (o limite real pode variar de navegador para navegador).

Para criar um canal de dados e pedir a um ponto remoto para se juntar a você, chame os metodos {{domxref("RTCPeerConnection")}}'s {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}}. O interlocutor que está sendo convidado a trocar dados recebe um evento {{event("datachannel")}} (que possui o tipo {{domxref("RTCDataChannelEvent")}}) para informá-lo de que o canal de dados foi adicionado à conexão.

## Exemplo

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

dc.onmessage = function (event) {
  console.log("received: " + event.data);
};

dc.onopen = function () {
  console.log("datachannel open");
};

dc.onclose = function () {
  console.log("datachannel close");
};
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [WebRTC](/pt-BR/docs/Web/Guide/API/WebRTC)
