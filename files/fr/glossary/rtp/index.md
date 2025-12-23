---
title: Protocole de transport en temps réel (RTP) et Sécurisé (SRTP)
slug: Glossary/RTP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **Real-time Transport Protocol** (**RTP**, pour protocole de transport en temps réel) est un protocole réseau qui décrit comment transmettre différents médias (audio, vidéo) d'un point de terminaison à un autre en temps réel. RTP convient aux applications de diffusion vidéo, à la téléphonie sur {{Glossary("VoIP")}} comme Skype et aux technologies de conférence.

La version sécurisée de RTP, **SRTP**, est utilisée par [WebRTC](/fr/docs/Web/API/WebRTC_API) et utilise le chiffrement et l'authentification pour minimiser le risque d'attaques par déni de service et de failles de sécurité.

RTP est rarement utilisé seul&nbsp;; il est généralement associé à d'autres protocoles comme {{Glossary("RTSP")}} et {{Glossary("SDP")}}.

## Voir aussi

- [Introduction au protocole de transport en temps réel](/fr/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [RTP](https://fr.wikipedia.org/wiki/Real-time_Transport_Protocol) sur Wikipédia
- {{RFC(3550)}} (one of the documents that specify precisely how the protocol works)
