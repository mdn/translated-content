---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Application-Layer [Protocol](/fr/docs/Glossary/Protocol) Negotiation** (**ALPN**) est une extension [TLS](/fr/docs/Glossary/TLS) (definie dans la [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301)) qui indique quel protocole de couche d'application négocie la connexion chiffrée sans nécessiter d'aller-retour supplémentaires.

| Protocole                                          | Séquence d'identification                              |
| -------------------------------------------------- | ------------------------------------------------------ |
| [HTTP](/fr/docs/Glossary/HTTP)/1.1                 | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| [HTTP 2](/fr/docs/Glossary/HTTP_2)                 | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext [TCP](/fr/docs/Glossary/TCP) | `0x68 0x32 0x63` ("h2c")                               |
| [HTTP 3](/fr/docs/Glossary/HTTP_3)                 | `0x68 0x33` ("h3")                                     |

## Voir aussi

- [Performance resource timing `nextHopProtocol`](/fr/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) property
- [PerformanceObserver API](/fr/docs/Web/API/PerformanceObserver)
- [Identifiants ALPN enregistrés par l'IANA](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
