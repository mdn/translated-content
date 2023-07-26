---
title: RTCPeerConnection.canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
l10n:
  sourceCommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{APIRef("WebRTC")}}

La propiedad de **{{domxref("RTCPeerConnection")}}** de solo lectura **`canTrickleIceCandidates`** devuelve un valor booleano que indica si el par remoto puede aceptar o no [candidatos _Trickled ICE_](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice).

**ICE trickling** (establecimiento de conectividad interactiva) es el proceso de continuar enviando candidatos después de que la oferta inicial o la respuesta ya se hayan enviado al otro par.

Esta propiedad solo se establece después de haber llamado a {{domxref("RTCPeerConnection.setRemoteDescription()")}}. Idealmente, su protocolo de señalización proporciona una forma de detectar el soporte de interactividad, por lo que no necesitara esta propiedad. Un navegador WebRTC siempre admitirá _ICE trickling_.
Si no es compatible, o no puede saberlo, puede buscar un valor falso para esta propiedad y luego esperar hasta que cambie el valor de {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} a `"completed"` antes de crear y enviar la oferta inicial. De esa forma, la oferta contiene todos los candidatos.

## Valor

Un valor booleano que es `true` si el par remoto puede aceptar candidatos _trickled ICE_ y `false` si no puede. Si no se ha establecido un par remoto, este valor es `null`.

> **Nota:** El valor de esta propiedad se determina una vez que el par local ha llamado a {{domxref("RTCPeerConnection.setRemoteDescription()")}}; el agente ICE utiliza la descripción proporcionada para determinar si el par remoto admite o no candidatos _trickled ICE_.

## Ejemplos

```js
const pc = new RTCPeerConnection();

function waitToCompleteIceGathering(pc) {
  return new Promise((resolve) => {
    pc.addEventListener(
      "icegatheringstatechange",
      (e) =>
        e.target.iceGatheringState === "complete" &&
        resolve(pc.localDescription),
    );
  });
}

// El siguiente código podría usarse para manejar una oferta de un par
// cuando no se sabe si es compatible con trickle ICE.
async function newPeer(remoteOffer) {
  await pc.setRemoteDescription(remoteOffer);
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  if (pc.canTrickleIceCandidates) return pc.localDescription;
  const answer = await waitToCompleteIceGathering(pc);
  sendAnswerToPeer(answer); //Para mirar a través del canal de señalización
}
// Manejar el error con try/catch

pc.addEventListener(
  "icecandidate",
  (e) => pc.canTrickleIceCandidates && sendCandidateToPeer(e.candidate),
);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase tambień

- [WebRTC](/es/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [Vida útil de una sesión de WebRTC](/es/docs/Web/API/WebRTC_API/Session_lifetime)
