---
title: En-tête d'entité
slug: Glossary/Entity_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

> [!WARNING]
> La spécification HTTP/1.1 actuelle ne fait plus référence aux entités, aux en-têtes d'entité ou au corps d'entité. Certains des champs sont désormais appelés champs {{Glossary("Representation header", "d'en-tête de représentation")}}.

Un en-tête d'entité est un {{Glossary("HTTP_header", "en-tête HTTP")}} qui décrit le {{Glossary("HTTP content", "contenu")}} d'un message HTTP (c'est-à-dire les métadonnées sur le corps du message). Les en-têtes d'entité incluent&nbsp;: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, etc. Les en-têtes d'entité peuvent être présents à la fois dans les requêtes et les réponses HTTP.

Dans l'exemple suivant, {{HTTPHeader("Content-Length")}} est un en-tête d'entité, tandis que {{HTTPHeader("Host")}} et {{HTTPHeader("User-Agent")}} sont des {{Glossary("Request header", "en-têtes de requête")}}&nbsp;:

```http
POST /mon-formulaire.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:144.0) Gecko/20100101 Firefox/144.0
Content-Length: 128
```

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Representation header", "En-tête de représentation")}}
