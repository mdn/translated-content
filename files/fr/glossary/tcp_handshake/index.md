---
title: Poignée de main TCP
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{Glossary('TCP','TCP (Transmission Control Protocol)')}} utilise une **poignée de main en trois temps** (également appelée poignée de main TCP, poignée de main en trois messages, et/ou SYN-SYN-ACK) pour établir une connexion TCP/IP sur un réseau basé sur IP. De même, une **poignée de main en quatre temps** est utilisée pour terminer la connexion.

Les trois messages transmis par TCP pour négocier et démarrer une session TCP sont surnommés SYN, _SYN-ACK_ et ACK pour **SYN**chronize, **SYN**chronize-**ACK**nowledgement et **ACK**nowledge respectivement (que l'on traduirait par Synchronisation, Accusé de réception de Synchronisation et Accusé de réception). Ce mécanisme en trois messages permet à deux ordinateurs souhaitant échanger des informations de négocier les paramètres de la connexion avant de transmettre des données telles que des requêtes HTTP de navigateur.

1. L'initiateur, généralement le navigateur, envoie un paquet TCP SYNchronize à l'autre hôte, généralement le serveur.
2. Le serveur reçoit le SYN et renvoie un SYNchronize-ACKnowledgement.
3. L'initiateur reçoit le SYN-ACK du serveur et envoie un ACKnowledge. Le serveur reçoit l'ACK et la communication du connecteur TCP est établie.

Cette étape de poignée de main intervient après une {{Glossary('DNS', 'recherche DNS')}} et avant la poignée de main {{Glossary('TLS')}} lors de la création d'une connexion sécurisée. La connexion peut être terminée indépendamment par chaque côté via une poignée de main en quatre temps, où une paire de messages FIN (<i lang="en">finish</i>) et ACK est envoyée et reçue indépendamment par chaque côté.

1. L'initiateur envoie un paquet FIN à l'autre hôte.
2. L'autre hôte renvoie un paquet ACK à l'initiateur.
3. À ce stade, la connexion est à moitié fermée et l'autre hôte peut encore envoyer des données. (Par exemple, le serveur peut terminer l'envoi de données au client lorsque le client a fermé sa connexion au serveur.)
4. L'autre hôte envoie un paquet FIN à l'initiateur.
5. L'initiateur renvoie un paquet ACK à l'autre hôte.

## Voir aussi

- [Le protocole de Transport Layer Security (TLS)](/fr/docs/Web/Security/Defenses/Transport_Layer_Security)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("HTTPS")}}
- [<i lang="en">Transport Layer Security</i>](https://fr.wikipedia.org/wiki/Transport_Layer_Security) sur Wikipédia
