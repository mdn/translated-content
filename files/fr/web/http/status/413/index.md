---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
translation_of: Web/HTTP/Status/413
---
{{HTTPSidebar}}

Le code de statut de réponse **`413 Payload Too Large`** indique que la taille de l'entité fournie par la requête est supérieure aux limites définies par le serveur. Le serveur peut alors choisir de fermer la connexion ou de renvoyer un en-tête [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After).

## Statut

```
413 Payload Too Large
```

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| [RFC 7231, section 6.5.11: 413 Payload Too Large](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11) | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [`Connection`](/fr/docs/Web/HTTP/Headers/Connection)
- [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After)
