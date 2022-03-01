---
title: Communication de pair-à-pair avec WebRTC
slug: Web/Guide/API/WebRTC/Peer-to-peer_communications_with_WebRTC
translation_of: Web/Guide/API/WebRTC/Peer-to-peer_communications_with_WebRTC
original_slug: WebRTC/communication-de-pair-a-pair-avec-WebRTC
---
{{SeeCompatTable}}

Les APIs WebRTC sont conçues pour permettre aux applications JavaScript de créer des connexions en temps-réel, avec des canaux audio, vidéo et/ou de données, entre utilisateurs à travers leurs navigateurs ou avec des serveurs supportant le protocole WebRTC. Il autorise aussi `navigator.mozGetUserMedia()` à accéder au microphone et à la webcam (`getUserMedia()` est en cours de standardisation par le groupe Media Capture Task, avec les APIs Recording).

La principale source des évolutions des spécifications de WebRTC sont les spécifications du W3C [WebRTC](http://dev.w3.org/2011/webrtc/editor/webrtc.html) et [getUserMedia](http://dev.w3.org/2011/webrtc/editor/getusermedia.html), ainsi que différents brouillons de IETF, principalement du [groupe de travail rtcweb](http://tools.ietf.org/wg/rtcweb/), mais aussi [mmusic](http://tools.ietf.org/wg/mmusic/), [rmcat](http://tools.ietf.org/wg/rmcat/) et quelques autres. Une grande partie de l'implémentation dans Chrome et Firefox est basée sur le code libéré par Google à [webrtc.org](http://www.webrtc.org/reference).

**NOTE**:  Les versions courantes de FlashBlock peuvent bloquer le tag HTML5 `<video>` par défaut; si c'est le cas, il faut lui dire d'autoriser le contenu de la page, ou désactiver cette option via Tools/Add-ons.

Un bon tutoriel sur les fonctionnalités de base de WebRTC peut-être trouvé sur [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webrtc/basics/). On pourra trouver sur le site [webrtc-landing](http://mozilla.github.com/webrtc-landing) une série de page de test basique.

Il est possible de faire un appel simple de personne à personne  (y compris à ceux utilisant Chrome) à [apprtc.appspot.com](https://apprtc.appspot.com/).

Un article de [Hacks](https://hacks.mozilla.org/category/webrtc/) décrit avec précision ce qu'il se passe dans une connexion `RTCPeerConnecion` ([lien](https://hacks.mozilla.org/2013/05/embedding-webrtc-video-chat-right-into-your-website/)) :

![Basics of RTCPeerConnection call setup](webRTC-BasicsOfHowItWorks2.png)

## Spécifications

| Spécification                            | Statut                               | Commentaire                       |
| ---------------------------------------- | ------------------------------------ | --------------------------------- |
| {{SpecName("Media Capture")}} | {{Spec2("Media Capture")}} | Définition de `getUserMedia` API. |
| {{SpecName("WebRTC 1.0")}}     | {{Spec2("WebRTC 1.0")}}     | Définition initiale.              |
