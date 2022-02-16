---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
translation_of: Web/HTTP/Status/203
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`203 Non-Authoritative Information`** indique que la requête a réussi mais que le contenu a été modifié entre la réponse [`200`](/fr/docs/Web/HTTP/Status/200) (`OK`) du serveur original par un [proxy](/fr/docs/Glossary/Proxy_server) transformant.

La réponse 203 est similaire au code d'en-tête [`214` (Transformation Applied)](/fr/docs/Web/HTTP/Headers/Warning#Warning_codes) [`Warning`](/fr/docs/Web/HTTP/Headers/Warning), qui a l'avantage d'être applicable à tout code de statut.

## Statut

```
203 Non-Authoritative Information
```

## Spécifications

| Spécification                                                                        | Titre                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| [RFC 7231, section 6.3.4: 203 Non-Authoritative Information](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4) | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [`200`](/fr/docs/Web/HTTP/Status/200)
- [Serveur proxy](/fr/docs/Glossary/Proxy_server)
- [`Warning`](/fr/docs/Web/HTTP/Headers/Warning)
