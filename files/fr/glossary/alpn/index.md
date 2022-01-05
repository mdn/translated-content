---
title: ALPN
slug: Glossary/ALPN
tags:
  - ALPN
  - Brouillon
  - Glossaire
  - NeedsContent
  - TLS
translation_of: Glossary/ALPN
original_slug: Glossaire/ALPN
---
**Application-Layer {{Glossary("Protocol")}} Negotiation** (**ALPN**) est une extension {{Glossary("TLS")}} qui indique quel protocole de couche d'application négocie la connexion chiffrée sans nécessiter d'aller-retour supplémentaires.

| Protocole                                      | Séquence d'identification                              |
| ---------------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP")}}/1.1               | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}   | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext {{Glossary("TCP")}} | `0x68 0x32 0x63` ("h2c")                               |

## Spécifications

| Spécification    | Statut   | Commentaire          |
| ---------------- | -------- | -------------------- |
| {{RFC(7301)}} | IETF RFC | Définition initiale. |

## Voir aussi

- [Identifiants ALPN enregistrés par l'IANA](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
