---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
tags:
  - Code de statut
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/203
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`203 Non-Authoritative Information`** indique que la requête a réussi mais que le contenu a été modifié entre la réponse {{HTTPStatus("200")}} (`OK`)  du serveur original par un {{Glossary("Proxy server", "proxy")}} transformant.

La réponse 203 est similaire au code d'en-tête [`214` (Transformation Applied)](/fr/docs/Web/HTTP/Headers/Warning#Warning_codes) {{HTTPHeader("Warning")}}, qui a l'avantage d'être applicable à tout code de statut.

## Statut

    203 Non-Authoritative Information

## Spécifications

| Spécification                                                                        | Titre                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
