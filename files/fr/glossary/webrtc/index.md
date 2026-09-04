---
title: WebRTC
slug: Glossary/WebRTC
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**<abbr>WebRTC</abbr>** (<i lang="en">Web Real-Time Communication</i> en anglais) _(communication en temps réel web)_ est une {{Glossary("API")}} appelée par les applications web de tchat vidéo, d'appels vocaux et de partage de fichiers P2P.

WebRTC est constitué principalement de ces éléments&nbsp;:

- {{DOMxRef("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : accorde l'accès à la caméra et / ou au microphone d'un appareil, et peut brancher leurs signaux à une connexion RTC.
- {{DOMxRef("RTCPeerConnection")}}
  - : configure les appels vocaux ou tchat vidéo
- {{DOMxRef("RTCDataChannel")}}
  - : fournit une méthode de définition des itinéraires de données {{Glossary("P2P", "pair-à-pair")}} entre les navigateurs

## Voir aussi

- [WebRTC](https://fr.wikipedia.org/wiki/WebRTC) sur Wikipédia
- [Guide WebRTC sur MDN](/fr/docs/Web/API/WebRTC_API)
- [Support WebRTC des navigateurs <sup>(angl.)</sup>](https://caniuse.com/rtcpeerconnection)
