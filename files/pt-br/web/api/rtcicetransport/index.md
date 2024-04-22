---
title: RTCIceTransport
slug: Web/API/RTCIceTransport
---

{{APIRef("WebRTC")}}

A interface **`RTCIceTransport`** fornece informação a respeito da camada de transporte {{Glossary("ICE")}} na qual os dados estão sendo enviados e recebidos. Isso é particulamente útil se você precisa acessar as informações de estado da conexão.

## Propriedades

_A interface `RTCIceTransport` herda propriedades de sua interface pai, {{domxref("EventTarget")}}. ele também oferta as seguintes propriedades:_

- {{domxref("RTCIceTransport.component", "component")}} {{ReadOnlyInline}}
  - : O componente ICE que esta sendo usado pela transporte. O valor é uma das strings do {{domxref("RTCIceTransport")}} tipo enumerável: `{{Glossary("RTP", '"RTP"')}}` ou `"RTSP"`.
- {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} {{ReadOnlyInline}}
  - : O {{domxref("DOMString")}} indica em qual estado de recolhimento o agente ICE esta atualmente. O valor é um dos incluidos no {{domxref("RTCIceGathererState")}} tipo enumerável: `"new"`, `"gathering"`, ou `"complete"`.
- {{domxref("RTCIceTransport.role", "role")}} {{ReadOnlyInline}}
  - : Retorna uma {{domxref("DOMString")}} cujo valor é um membro do tipo enumerável {{domxref("RTCIceRole")}}: `"controlling"` ou `"controlled"`; Isso indica se o agente ICE é aquele que toma a decisão final quanto ao par candidato a ser usado ou não.
- {{domxref("RTCIceTransport.state", "state")}} {{ReadOnlyInline}}
  - : O {{domxref("DOMString")}} indica qual o atual estado do agente ICE. O valor do `state` pode ser usado para determinar se o agente ICE fez uma conecxão inicial usando uma par de candidatos viável (`"connected"`), fez a seleção final do par de candidatos (`"completed"`), ou em um estado de erro (`"failed"`), além de outros estados. Veja o tipo enumerável {{domxref("RTCIceTransportState")}} para uma lista completa de estados.

## Métodos

_Também inclui métodos da interface pai {{domxref("EventTarget")}}._

- {{domxref("RTCIceTransport.getLocalCandidates", "getLocalCandidates()")}}
  - : Retorna um array de objetos {{domxref("RTCIceCandidate")}}, cada descrevendo um dos candidatos ICE que foram reunidos para o dispositivo local até o momento. Esses são os mesmos candidatos que já foram enviados para o peer remoto, enviando um evento {{event("icecandidate")}} ao {{domxref("RTCPeerConnection")}} para transmissão.
- {{domxref("RTCIceTransport.getLocalParameters", "getLocalParameters()")}}
  - : Retorna o objeto {{domxref("RTCIceParameters")}} descrevendo o parâmetro ICE estabelecido através de uma ligação ao método {{domxref("RTCPeerConnection.setLocalDescription()")}}. Retorna `null` se os parâmetros ainda não foram recebidos.
- {{domxref("RTCIceTransport.getRemoteCandidates", "getRemoteCandidates()")}}
  - : Retorna um array de objetos {{domxref("RTCIceCandidate")}}, um para cada candidato do dispositivo remoto, que foram recebidos pelo local final da {{domxref("RTCPeerConnection")}} e entrega ao ICE através da chamada {{domxref("RTCPeerConnection.addIceCandidate()", "addIceCandidate()")}}.
- {{domxref("RTCIceTransport.getRemoteParameters", "getRemoteParameters()")}}
  - : Retorna um objeto {{domxref("RTCIceParameters")}} contendo os parâmetros ICE para o dispositivo remoto, como definido por uma chamada para {{domxref("RTCPeerConnection.setRemoteDescription()")}}. Se `setRemoteDescription()` não foi chamada ainda, o retorno será `null`.
- {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}
  - : Retorna um objeto {{domxref("RTCIceCandidatePair")}} que identifica os dois candidatos — um para cada conexão — que foram selecionados até o momento. É possível que um par melhor sejá encontrado e selecionado posteriormente; Se você precisar acompanhar isso, veja o evento {{event("selectedcandidatepairchange")}}. Se nenhum par de candidatos foi selecionado ainda o valor retornado será `null`.

## Eventos

Escute esses eventos usando {{domxref("EventTarget.addEventListener", "addEventListener()")}} ou atribuindo um _event listener_ para `oneventname` propriedade dessa interface.

- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : Enviado ao objeto {{domxref("RTCIceTransport")}} para indicar que o valor da propriedade {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} foi alterado, indicando uma mudança no processo de negociação de candidatos ICE deste transporte.
    Também esta disponível através da propriedade _event handler_ {{domxref("RTCIceTransport.ongatheringstatechange", "ongatheringstatechange")}}.
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : `Enviado para o RTCIceTransport` quando um novo, melhor par de candidatos foi selecionado para descrever a conectividade entre os dois peers. Isso pode ocorrer durante a negotiação ou a renegociação, incluindo depois de um ICE restart, que reusa os objetos `RTCIceTransport` existentes. O par de candidatos atuais pode ser obtido usando {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}.
    Também esta disponível através da propriedade _event handler_ {{domxref("RTCIceTransport.onselectedcandidatepairchange", "onselectedcandidatepairchange")}}.
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : Enviado par a instancia do `RTCIceTransport` quando o valor da propriedade {{domxref("RTCIceTransport.state", "state")}} foi alterada, indicando que o processo de recolhimento ICE mudou de estado.
    Também esta disponível através da propriedade _event handler_ {{domxref("RTCIceTransport.onstatechange", "onstatechange")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
