---
title: UDP
slug: Glossary/UDP
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

**<abbr>UDP</abbr>** (pour <i lang="en">User Datagram Protocol</i> en anglais, signifiant protocole de datagramme utilisateur) est un {{Glossary("protocol", "protocole")}} de longue date utilisé avec {{Glossary("IPv6", "IP")}} pour envoyer des données lorsque la vitesse et l'efficacité de transmission comptent plus que la sécurité et la fiabilité.

UDP utilise un modèle de [communication sans connexion](https://fr.wikipedia.org/wiki/Transmission_en_mode_sans_connexion) simple avec un minimum de mécanismes de protocole. UDP fournit des [somme de contrôle](https://fr.wikipedia.org/wiki/Somme_de_contr%C3%B4le) pour l'intégrité des données, et des [numéros de port](<https://fr.wikipedia.org/wiki/Port_(logiciel)>) pour adresser différentes fonctions à l'origine et à la destination du datagramme. Il n'existe pas de dialogues [d'établissement de connexion](https://fr.wikipedia.org/wiki/Poign%C3%A9e_de_main), et votre programme est ainsi exposé à tout [manque de fiabilité](<https://fr.wikipedia.org/wiki/Fiabilit%C3%A9_(r%C3%A9seau_informatique)>) du réseau sous-jacent&nbsp;; il n'existe aucune garantie de livraison, d'ordre ou de protection contre les doublons. Si des mécanismes de correction d'erreurs sont nécessaires au niveau de l'interface réseau, une application peut utiliser le [Transmission Control Protocol](https://fr.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) ou le [Stream Control Transmission Protocol](https://fr.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) conçus à cet effet.

UDP convient aux applications pour lesquelles le contrôle et la correction des erreurs ne sont pas nécessaires ou sont effectués dans l'application&nbsp;; l'UDP évite la surcharge de traitement associée dans la [pile de protocoles](https://fr.wikipedia.org/wiki/Pile_de_protocoles). Les applications sensibles au facteur temps utilisent souvent UDP parce que l'abandon de paquets est préférable à l'attente des paquets retardés en raison de la [retransmission <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>), ce qui peut ne pas être une option dans un [système en temps réel](https://fr.wikipedia.org/wiki/Syst%C3%A8me_temps_r%C3%A9el).

## Voir aussi

- [User Datagram Protocol](https://fr.wikipedia.org/wiki/User_Datagram_Protocol) sur Wikipédia
- [Spécification <sup>(angl.)</sup>](https://tools.ietf.org/html/rfc768)
