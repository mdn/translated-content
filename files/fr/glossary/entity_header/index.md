---
title: En-tête d'entité
slug: Glossary/Entity_header
---

Un en-tête d'entité est un {{glossary("header","en-tête HTTP")}} décrivant le contenu du corps du message. Les en-têtes d'entité sont utilisés à la fois dans les requêtes et les réponses HTTP. Des en-têtes tels que {{HTTPHeader("Content length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}} sont des en-têtes d'entité.

Même si les en-têtes d'entité ne sont ni des en-têtes de requête, ni des en-têtes de réponse, ils sont souvent inclus avec ces modalités.

Dans l'exemple suivant, {{HTTPHeader("Content-Length")}} est un en-tête d'entité, tandis que {{HTTPHeader("Host")}} et {{HTTPHeader("User-Agent")}} sont des {{glossary("Request header","en-têtes de requête")}}&nbsp;:

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Voir aussi

### Connaissance technique

- [Liste de tous les en-têtes HTTP](/fr/docs/HTTP/Headers)
