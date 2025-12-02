---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Application-Layer Protocol Negotiation** (**ALPN**) est une extension {{Glossary("TLS")}} (definie dans la [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301)) qui indique quel protocole de couche d'application négocie la connexion chiffrée sans nécessiter d'aller-retour supplémentaires.

| Protocole                               | Séquence d'identification                              |
| --------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}        | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}        | `0x68 0x32` ("h2")                                     |
| HTTP/2 en clair sur {{Glossary("TCP")}} | `0x68 0x32 0x63` ("h2c")                               |
| {{Glossary("HTTP 3", "HTTP/3")}}        | `0x68 0x33` ("h3")                                     |

## Voir aussi

- La propriété [`nextHopProtocol` de l'API Performance Resource Timing](/fr/docs/Web/API/PerformanceResourceTiming/nextHopProtocol)
- [L'API PerformanceObserver](/fr/docs/Web/API/PerformanceObserver)
- [Identifiants ALPN enregistrés par l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
