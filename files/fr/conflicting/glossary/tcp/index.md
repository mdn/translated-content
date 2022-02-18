---
title: Transmission Control Protocol (TCP)
slug: conflicting/Glossary/TCP
tags:
  - Glossary
  - Networking
  - Performance Web
  - SSL
  - Security
  - TCP
  - TLS
  - Web Performance
translation_of: Glossary/Transmission_Control_Protocol_(TCP)
original_slug: Glossary/Transmission_Control_Protocol_(TCP)
---
TCP (Transmission Control Protocol) est un protocole hôte à hôte de la couche transport permettant la communication en mode connexion entre deux ordinateurs sur un réseau IP. TCP utilise des ports virtuels pour créer une connexion virtuelle de bout en bout capable de réutiliser les connexions physiques entre deux ordinateurs. TCP encapsule les données de protocole de niveau supérieur telles que {{glossary('HTTP')}} et, {{glossary('SMTP')}} (email).

## {{glossary('TCP Handshake')}}

La négociation en trois étapes TCP, également appelée TCP handshake, négociation en TCP, et SYN-SYN-ACK, est la méthode utilisée par TCP pour établir une connexion TCP / IP sur un réseau IP. Les trois messages transmis par TCP pour négocier et démarrer une session TCP sont surnommés SYN, SYN-ACK, ACK pour **SYN**chronize, **SYN**chronize **ACK**quitment de réception et **ACK**quitement. Le mécanisme à trois messages est conçu pour les deux ordinateurs qui souhaitent échanger des informations et peuvent négocier les paramètres de la connexion avant de transmettre des données telles que des requêtes de navigateur HTTP.

## Voir aussi

- [Transport Layer Security (TLS) protocol](/fr/docs/Web/Security/Transport_Layer_Security)
- {{Glossary("HTTPS")}}
- [How browsers work](/fr/docs/Web/Performance/Populating_the_page:_how_browsers_work)
- {{Interwiki("wikipedia", "Transport Layer Security")}} on Wikipedia
