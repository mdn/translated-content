---
title: RTCPeerConnection.connectionState
slug: Web/API/RTCPeerConnection/connectionState
translation_of: Web/API/RTCPeerConnection/connectionState
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

{{page("/en-US/docs/Web/API/RTCPeerConnection", "RTCPeerConnectionState enum", 0, 1)}}

## Example

```js
var pc = new RTCPeerConnection(configuration);

/* ... */

var connectionState = pc.connectionState;
```

## Specifications

| Specification                                                                                                                                    | Status                           | Comment                |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------- |
| {{ SpecName('WebRTC 1.0', '#widl-RTCPeerConnection-connectionState', 'RTCPeerConnection.connectionState') }} | {{ Spec2('WebRTC 1.0') }} | Initial specification. |

## Compatibilidade com navegadores

{{Compat("api.RTCPeerConnection.connectionState")}}

## See also

- [Lifetime of a WebRTC session](/pt-BR/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- {{event("connectionstatechange")}}
- [WebRTC](/pt-BR/docs/Web/Guide/API/WebRTC)
