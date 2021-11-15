---
title: En-tête de réponse simple
slug: Glossary/Simple_response_header
tags:
  - En-têtes
  - Glossaire
  - HTTP
translation_of: Glossary/Simple_response_header
original_slug: Glossaire/En-tête_de_réponse_simple
---
Un _en-tête de réponse simple_ (ou un en-tête de réponse sécurisé _CORS_) est un [en-tête HTTP](/fr/docs/HTTP/Headers) qui a été sécurisé pour ne pas être filtré lorsque les réponses sont traitées par CORS, car elles sont considérées comme sûres (comme les en-têtes listés dans {{HTTPHeader("Access-Control-Expose-Headers")}}). Par défaut, la liste des réponses sûres inclut les en-têtes de réponse suivants :

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

## Exemples

### Extension de la liste des en-têtes sécurisés

Vous pouvez étendre la liste des en-têtes de réponse sécurisés CORS en utilisant l'en-tête {{HTTPHeader("Access-Control-Expose-Headers")}} :

    Access-Control-Expose-Headers: X-Custom-Header, Content-Length

## En apprendre plus

- [HTTP](/fr/docs/HTTP)
- [En-têtes HTTP](/fr/docs/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{Glossary("CORS")}}
- {{Glossary("Simple header","En-tête simple")}}
- {{Glossary("Forbidden header name","Noms d'en-tête interdits")}}
- {{Glossary("Request header","En-tête de requête")}}
