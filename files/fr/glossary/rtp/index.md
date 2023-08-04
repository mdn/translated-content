---
title: RTP (Real-time Transport Protocol) and SRTP (Secure RTP)
slug: Glossary/RTP
---

Le **Real-time Transport Protocol** (**RTP**) est un protocole réseau qui décrit comment transmettre divers médias (audio, vidéo) d'un point de terminaison à un autre en temps réel. RTP convient aux applications de streaming vidéo, à la téléphonie sur {{glossary ("IP")}} comme Skype et aux technologies de conférence.

La version sécurisée de RTP, **SRTP**, est utilisé par [WebRTC](/fr/docs/Web/API/WebRTC_API), et utilise le cryptage et l'authentification pour minimiser le risque d'attaques par déni de service et de failles de sécurité.

RTP est rarement utilisé seul; à la place, il est utilisé en conjonction avec d'autres protocoles comme {{glossary("RTSP")}} et {{glossary("SDP")}}.

## Apprendre plus

### Culture générale

- [Introduction au Real-time Transport Protocol](/fr/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP](https://fr.wikipedia.org/wiki/Real-time_Transport_Protocol) sur Wikipédia
- {{RFC(3550)}} (l'un des documents qui spécifie précisément le fonctionnement du protocole)
