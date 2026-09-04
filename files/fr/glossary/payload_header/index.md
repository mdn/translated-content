---
title: En-tête de contenu (Payload header)
slug: Glossary/Payload_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **en-tête de contenu** est un {{Glossary("HTTP_header", "en-tête HTTP")}} qui décrit les informations de la charge utile liées au transport sécurisé et à la reconstruction de la ressource originale {{Glossary("Representation header", "représentation")}}, à partir d'un ou plusieurs messages. Cela inclut des informations telles que la longueur de la charge utile du message, la partie de la ressource transportée dans cette charge utile (pour un message comportant plusieurs parties), tout encodage appliqué pour le transport, les vérifications d'intégrité du message, etc.

Les en-têtes de contenu peuvent être présents dans les messages de requête et de réponse HTTP (c'est-à-dire dans tout message transportant des données de charge utile).

Les en-têtes de contenu incluent&nbsp;: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}}, et {{HTTPHeader("Transfer-Encoding")}}.

## Voir aussi

- [Liste de tous les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation header", "En-tête de représentation")}}

- [RFC 7231, section 3.3&nbsp;: Sémantique de la charge utile <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
