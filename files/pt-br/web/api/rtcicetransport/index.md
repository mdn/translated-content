---
title: RTCIceTransport
slug: Web/API/RTCIceTransport
tags:
  - API
  - Audio
  - Interface
  - RTCIceTransport
  - Referencia
  - Video
  - WebRTC
  - WebRTC API
  - rtc
translation_of: Web/API/RTCIceTransport
---
<div>{{APIRef("WebRTC")}}</div>

<p><span class="seoSummary">A interface <code><strong>RTCIceTransport</strong></code> fornece informação a respeito da camada de transporte {{Glossary("ICE")}} na qual os dados estão sendo enviados e recebidos.</span> Isso é particulamente útil se você precisa acessar as informações de estado da conexão.</p>

<h2 id="Propriedades">Propriedades</h2>

<p><em>A interface <code>RTCIceTransport</code> herda propriedades de sua interface pai, {{domxref("EventTarget")}}. ele também oferta as seguintes propriedades:</em></p>

<dl>
 <dt>{{domxref("RTCIceTransport.component", "component")}} {{ReadOnlyInline}}</dt>
 <dd>O componente ICE que esta sendo usado pela transporte. O valor é uma das strings do {{domxref("RTCIceTransport")}} tipo enumerável: <code>{{Glossary("RTP", '"RTP"')}}</code> ou <code>"RTSP"</code>.</dd>
 <dt>{{domxref("RTCIceTransport.gatheringState", "gatheringState")}} {{ReadOnlyInline}}</dt>
 <dd>O {{domxref("DOMString")}} indica em qual estado de recolhimento o agente ICE esta atualmente. O valor é um dos incluidos no {{domxref("RTCIceGathererState")}} tipo enumerável: <code>"new"</code>, <code>"gathering"</code>, ou <code>"complete"</code>.</dd>
 <dt>{{domxref("RTCIceTransport.role", "role")}} {{ReadOnlyInline}}</dt>
 <dd>Retorna uma {{domxref("DOMString")}} cujo valor é um membro do tipo enumerável {{domxref("RTCIceRole")}}: <code>"controlling"</code> ou <code>"controlled"</code>; Isso indica se o agente ICE é aquele que toma a decisão final quanto ao par candidato a ser usado ou não.</dd>
 <dt>{{domxref("RTCIceTransport.state", "state")}} {{ReadOnlyInline}}</dt>
 <dd>O {{domxref("DOMString")}} indica qual o atual estado do agente ICE. O valor do <code>state</code> pode ser usado para determinar se o agente ICE fez uma conecxão inicial usando uma par de candidatos viável (<code>"connected"</code>), fez a seleção final do par de candidatos (<code>"completed"</code>), ou em um estado de erro (<code>"failed"</code>), além de outros estados. Veja o tipo enumerável {{domxref("RTCIceTransportState")}} para uma lista completa de estados.</dd>
</dl>

<h2 id="Métodos">Métodos</h2>

<p><em>Também inclui métodos da interface pai {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("RTCIceTransport.getLocalCandidates", "getLocalCandidates()")}}</dt>
 <dd>Retorna um array de objetos {{domxref("RTCIceCandidate")}}, cada descrevendo um dos candidatos ICE que foram reunidos para o dispositivo local até o momento. Esses são os mesmos candidatos que já foram enviados para o peer remoto, enviando um evento {{event("icecandidate")}} ao {{domxref("RTCPeerConnection")}} para transmissão.</dd>
 <dt>{{domxref("RTCIceTransport.getLocalParameters", "getLocalParameters()")}}</dt>
 <dd>Retorna o objeto {{domxref("RTCIceParameters")}} descrevendo o parâmetro ICE estabelecido através de uma ligação ao método {{domxref("RTCPeerConnection.setLocalDescription()")}}. Retorna <code>null</code> se os parâmetros ainda não foram recebidos.</dd>
 <dt>{{domxref("RTCIceTransport.getRemoteCandidates", "getRemoteCandidates()")}}</dt>
 <dd>Retorna um array de objetos {{domxref("RTCIceCandidate")}}, um para cada candidato do dispositivo remoto, que foram recebidos pelo local final da {{domxref("RTCPeerConnection")}} e entrega ao ICE através da chamada {{domxref("RTCPeerConnection.addIceCandidate()", "addIceCandidate()")}}.</dd>
 <dt>{{domxref("RTCIceTransport.getRemoteParameters", "getRemoteParameters()")}}</dt>
 <dd>Retorna um objeto {{domxref("RTCIceParameters")}} contendo os parâmetros ICE para o dispositivo remoto, como definido por uma chamada para {{domxref("RTCPeerConnection.setRemoteDescription()")}}. Se <code>setRemoteDescription()</code> não foi chamada ainda, o retorno será <code>null</code>.</dd>
 <dt>{{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}</dt>
 <dd>Retorna um objeto {{domxref("RTCIceCandidatePair")}} que identifica os dois candidatos — um para cada conexão — que foram selecionados até o momento. É possível que um par melhor sejá encontrado e selecionado posteriormente; Se você precisar acompanhar isso, veja o evento {{event("selectedcandidatepairchange")}}. Se nenhum par de candidatos foi selecionado ainda o valor retornado será <code>null</code>.</dd>
</dl>

<h2 id="Eventos">Eventos</h2>

<p>Escute esses eventos usando {{domxref("EventTarget.addEventListener", "addEventListener()")}} ou atribuindo um <em>event listener</em> para <code>on<em>eventname</em></code> propriedade dessa interface.</p>

<dl>
 <dt>{{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}</dt>
 <dd>Enviado ao objeto {{domxref("RTCIceTransport")}} para indicar que o valor da propriedade {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} foi alterado, indicando uma mudança no processo de negociação de candidatos ICE deste transporte.<br>
 Também esta disponível através da propriedade <em>event handler </em>{{domxref("RTCIceTransport.ongatheringstatechange", "ongatheringstatechange")}}.</dd>
 <dt>{{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}</dt>
 <dd><code>Enviado para o RTCIceTransport</code> quando um novo, melhor par de candidatos foi selecionado para descrever a conectividade entre os dois peers. Isso pode ocorrer durante a negotiação ou a renegociação, incluindo depois de um ICE restart, que reusa os objetos <code>RTCIceTransport</code> existentes. O par de candidatos atuais pode ser obtido usando {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}.<br>
 Também esta disponível através da propriedade <em>event handler </em>{{domxref("RTCIceTransport.onselectedcandidatepairchange", "onselectedcandidatepairchange")}}.</dd>
 <dt>{{domxref("RTCIceTransport.statechange_event", "statechange")}}</dt>
 <dd>Enviado par a instancia do <code>RTCIceTransport</code> quando o valor da propriedade {{domxref("RTCIceTransport.state", "state")}} foi alterada, indicando que o processo de recolhimento ICE mudou de estado.<br>
 Também esta disponível através da propriedade <em>event handler </em> {{domxref("RTCIceTransport.onstatechange", "onstatechange")}}.</dd>
</dl>

<h2 id="Especificação">Especificação</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('WebRTC 1.0', '#dom-rtcicetransport', 'RTCIceTransport')}}</td>
   <td>{{Spec2('WebRTC 1.0')}}</td>
   <td>Definição initial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<div>
  <p>{{Compat("api.RTCIceTransport")}}</p>
</div>
