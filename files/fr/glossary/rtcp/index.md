---
title: RTCP (RTP Control Protocol)
slug: Glossary/RTCP
l10n:
  sourceCommit: 5abb200b37e5b6fe5f85132bb3d6dcc3aa4a6f4c
---

{{GlossarySidebar}}

Le **protocole de contrôle RTP** (ou <i lang="en">RTP Control Protocol</i> en anglais, qui donne l'acronyme **RTCP**) est un protocole partenaire du protocole [RTP](/fr/docs/Glossary/RTP). RTCP est utilisé pour la collecte d'informations statistiques et le contrôle d'une session de diffusion média RTP.

Ces deux protocoles permettent de séparer, sur le plan logique et fonctionnel, les paquets de contrôle et de statistiques du flux média, tout en utilisant la couche de transmission des paquets sous-jacente pour transmettre les signaux RTCP ainsi que le contenu média et RTP.

RTCP transmet des paquets de contrôle à intervalle régulier à l'ensemble des participants d'une session RTP en utilisant le même mécanisme que celui utilisé pour la transmission des paquets de données. C'est le protocole sous-jacent qui gère le multiplexage des paquets de données et de contrôle, il pourra éventuellement utiliser des ports réseau distincts pour chaque type de paquet.

## Voir aussi

- [Introduction au protocole de transport en temps réel](/fr/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [La page Wikipédia sur RTCP](https://fr.wikipedia.org/wiki/Real-time_Transport_Control_Protocol)
- [La section 6 de la RFC 3550 qui définit ce protocole (en anglais)](https://datatracker.ietf.org/doc/html/rfc3550#section-6)
