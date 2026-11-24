---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

**Application-Layer Protocol Negotiation** (**ALPN**) es una extensión de {{Glossary("TLS")}} (definida en [RFC 7301](https://www.rfc-editor.org/info/rfc7301/)) que permite identificar qué protocolo de capa de aplicación se negocia en la conexión cifrada, sin necesidad de viajes de ida y vuelta adicionales.

| Protocolo                                   | Secuencia de identificación                            |
| ------------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}            | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}            | `0x68 0x32` ("h2")                                     |
| HTTP/2 sobre {{Glossary("TCP")}} sin cifrar | `0x68 0x32 0x63` ("h2c")                               |
| {{Glossary("HTTP 3", "HTTP/3")}}            | `0x68 0x33` ("h3")                                     |

## Véase también

- Propiedad [`nextHopProtocol` de Performance resource timing](/es/docs/Web/API/PerformanceResourceTiming/nextHopProtocol)
- [PerformanceObserver API](/es/docs/Web/API/PerformanceObserver)
- [Identificadores ALPN registrados en la IANA](https://www.iana.org/assignments/tls-extensiontype-values#alpn-protocol-ids)
