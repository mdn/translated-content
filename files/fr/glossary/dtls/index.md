---
title: DTLS (Datagram Transport Layer Security)
slug: Glossary/DTLS
l10n:
  sourceCommit: cdb0dad4aeabda32b85c397f5e45304f95edc0d1
---

{{GlossarySidebar}}

**<i lang="en">Datagram Transport Layer Security</i>** (**DTLS**) (qu'on pourrait traduire en «&nbsp;sécurité de la couche transport en datagrammes&nbsp;») est un protocole utilisé afin de sécuriser les communications basées sur des datagrammes. Ce protocole est basé sur le protocole correspondant pour les flux, [TLS](/fr/docs/Glossary/TLS), et fournit un niveau équivalent de sécurité.

DTLS étant un protocole de datagrammes, il ne garantit pas l'ordre de livraison des messages, ni même que les messages seront effectivement transmis. Toutefois, DTLS profite des avantages des protocoles de datagrammes et notamment de faibles temps de traitement et d'une latence réduite.

Ces caractéristiques sont particulièrement utiles pour les domaines où DTLS est utilisé, dont [WebRTC](/fr/docs/Glossary/WebRTC). Tous les protocoles relatifs à WebRTC chiffrent leur contenu à l'aide de DTLS&nbsp;: [SCTP](/fr/docs/Glossary/SCTP), [SRTP](/fr/docs/Glossary/RTP), et [STUN](/fr/docs/Glossary/STUN).

## Voir aussi

- [La page Wikipédia sur DTLS](https://fr.wikipedia.org/wiki/Datagram_Transport_Layer_Security)
- Les spécifications directes&nbsp;:

  - [La RFC 9147 qui définit le protocole DTLS en version 1.3 (en anglais)](https://datatracker.ietf.org/doc/html/rfc9147)
  - [La RFC 6347 qui définit le protocole DTLS en version 1.3 (en anglais)](https://datatracker.ietf.org/doc/html/rfc6347)

- Les spécifications connexes&nbsp;:

  - [La RFC 5763 dressant le cadre pour utiliser SRTP avec DTLS (en anglais)](https://datatracker.ietf.org/doc/html/rfc5763)
  - [La RFC 5764 spécifiant une extension DTLS pour l'établissement des clés pour SRTP (en anglais)](https://datatracker.ietf.org/doc/html/rfc5764)
  - [La RFC 6083 dressant le cadre pour utiliser SCTP avec DTLS (en anglais)](https://datatracker.ietf.org/doc/html/rfc6083)
  - [La RFC 8261 spécifiant l'encapsulation des paquets SCTP avec DTLS (en anglais)](https://datatracker.ietf.org/doc/html/rfc8261)
  - [La RFC 7350 spécifiant l'utilisation de STUN avec DTLS (en anglais)](https://datatracker.ietf.org/doc/html/rfc7350)
  - [La RFC 7925 pour les profils TLS / DTLS pour l'Internet des objets (en anglais)](https://datatracker.ietf.org/doc/html/rfc7925)
