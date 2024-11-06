---
title: RTCPeerConnection.connectionState
slug: Web/API/RTCPeerConnection/connectionState
---

{{APIRef("WebRTC")}}

A propriedade **`connectionState`** do tipo somente leitura da interface {{domxref("RTCPeerConnection")}} indica o estado atual da conexão em par, devolvendo um valor em string específicado por um enum {{domxref("RTCPeerConnection")}}.

Quando o valor da propriedade muda, o evento {{event("connectionstatechange")}} é enviado para a intância {{domxref("RTCPeerConnection")}}.

## Syntax

```
var connectionState = RTCPeerConnection.connectionState;
```

### Value

O estado atual da conexão, como um valor do enum [`RTCPeerConnectionState`](#RTCPeerConnectionState_enum).

{{page("/pt-BR/docs/Web/API/RTCPeerConnection", "RTCPeerConnectionState enum", 0, 1)}}

## Example

```js
var pc = new RTCPeerConnection(configuration);

/* ... */

var connectionState = pc.connectionState;
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Lifetime of a WebRTC session](/pt-BR/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- {{event("connectionstatechange")}}
- [WebRTC](/pt-BR/docs/Web/Guide/API/WebRTC)
