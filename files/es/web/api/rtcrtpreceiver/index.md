---
title: RTCRtpReceiver
slug: Web/API/RTCRtpReceiver
---

{{APIRef("WebRTC")}}

La interfaz **`RTCRtpReceiver`** de la [WebRTC API](/es/docs/Web/API/WebRTC_API) gestiona la recepción y decodificación de los datos para una {{domxref("MediaStreamTrack")}} a una {{domxref("RTCPeerConnection")}}.

## Propiedades

- {{domxref("RTCRtpReceiver.track")}} {{readonlyinline}}
  - : Devuelve el {{domxref("MediaStreamTrack")}} asociado con la instancia actual de `RTCRtpReceiver`
- {{domxref("RTCRtpReceiver.rtcpTransport")}} {{readonlyinline}}
  - : Devuelve la instancia {{domxref("RTCDtlsTransport")}} en la que se envía y se recibe el RTCP.
- {{domxref("RTCRtpReceiver.transport")}} {{readonlyinline}}
  - : Devuelve la instancia {{domxref("RTCDtlsTransport")}} en la que se reciben los medios para la pista del receptor.

## Métodos

- {{domxref("RTCRtpReceiver.getContributingSources()")}}
  - : Devuelve un array de instancia {{domxref("RTCRtpContributingSource")}} para cada identificador CSRC (fuente contribuyente) identificador recibido actual `RTCRtpReceiver` en los últimos 10 segundos.
- {{domxref("RTCRtpReceiver.getParameters()")}}
  - : Devuelve un objeto `RTCRtpParameters` que contiene información sobre cómo se van a decodificar los datos de RTC.
- {{domxref("RTCRtpReceiver.getStats()")}}
  - : Devuelve un {{jsxref("Promise")}} cuyo controlador de cumplimiento recibe un
    {{domxref("RTCStatsReport")}} que contiene estadísticas sobre los flujos entrantes y sus dependencias.
- {{domxref("RTCRtpReceiver.getSynchronizationSources()")}}
  - : Devuelve un arreglo que incluye una instancia {{domxref("RTCRtpSynchronizationSource")}} para cada identificador SSRC (fuente de sincronización) único recibido por el `RTCRtpReceiver` actual en los últimos diez segundos.

## Métodos estáticos

- {{domxref("RTCRtpReceiver.getCapabilities()")}}
  - : Devuelve la visión más optimista de las capacidades del sistema para recibir medios de comunicación del tipo dado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [WebRTC](/es/docs/Web/API/WebRTC_API)
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpSender")}}
- {{domxref("RTCPeerConnection.getStats()")}}
