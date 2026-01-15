---
title: En-tête de réponse sûr pour le CORS
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **en-tête de réponse simple** (ou un en-tête de réponse sécurisé [_CORS_](/fr/docs/Web/HTTP/Guides/CORS)) est un [en-tête HTTP](/fr/docs/Web/HTTP/Reference/Headers) qui a été sécurisé pour ne pas être filtré lorsque les réponses sont traitées par CORS, car elles sont considérées comme sûres.

Par défaut, la liste des réponses sûres inclut les en-têtes de réponse suivants&nbsp;:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

## Exemples

### Extension de la liste des en-têtes sécurisés

Vous pouvez étendre la liste des en-têtes de réponse sécurisés CORS en utilisant l'en-tête {{HTTPHeader("Access-Control-Expose-Headers")}}&nbsp;:

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## Voir aussi

- [HTTP](/fr/docs/Web/HTTP)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- Termes de glossaire associés&nbsp;:
  - {{Glossary("CORS")}}
  - {{Glossary("CORS-safelisted_request_header","En-tête de requête sûr pour le CORS")}}
  - {{Glossary("Forbidden header name","Noms d'en-tête interdits")}}
  - {{Glossary("Request header","En-tête de requête")}}
