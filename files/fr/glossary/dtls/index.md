---
title: DTLS (Datagram Transport Layer Security)
slug: Glossary/DTLS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**<i lang="en">Datagram Transport Layer Security</i>** (**DTLS**) (qu'on pourrait traduire en «&nbsp;sécurité de la couche transport en datagrammes&nbsp;») est un protocole utilisé afin de sécuriser les communications basées sur des datagrammes. Ce protocole est basé sur le protocole correspondant pour les flux ({{Glossary("TLS")}}) et fournit un niveau équivalent de sécurité. DTLS étant un protocole de datagrammes, il ne garantit pas l'ordre de livraison des messages, ni même que les messages seront effectivement transmis. Toutefois, DTLS profite des avantages des protocoles de datagrammes et notamment de faibles temps de traitement et d'une latence réduite.

Ces caractéristiques sont particulièrement utiles pour les domaines où DTLS est utilisé, dont {{Glossary("WebRTC")}}. Tous les protocoles relatifs à WebRTC chiffrent leur contenu à l'aide de DTLS&nbsp;: {{Glossary("SCTP")}}, {{Glossary("RTP", "SRTP")}} et {{Glossary("STUN")}}.

## Voir aussi

- [Datagram Transport Layer Security](https://fr.wikipedia.org/wiki/Datagram_Transport_Layer_Security) sur Wikipédia
- Spécifications&nbsp;:
  - {{RFC(9147, "Le protocole Datagram Transport Layer Security (DTLS) Version 1.3")}}
  - {{RFC(6347, "Datagram Transport Layer Security (DTLS) Version 1.2")}}

- Spécifications associées&nbsp;:
  - {{RFC(5763, "Cadre pour l'établissement d'un contexte de sécurité SRTP à l'aide de DTLS")}}
  - {{RFC(5764, "Extension DTLS pour établir des clés pour le protocole SRTP (Secure Real-time Transport Protocol) sécurisé en temps réel")}}
  - {{RFC(6083, "DTLS pour le protocole SCTP (protocole de contrôle de transmission de flux)")}}
  - {{RFC(8261, "Encapsulation DTLS des paquets SCTP (protocole de contrôle de transmission de flux)")}}
  - {{RFC(7350, "DTLS comme transport pour STUN (utilitaires de traversée de session pour la traduction d'adresses réseau)")}}
  - {{RFC(7925, "Profils TLS / DTLS pour l'Internet des objets")}}
