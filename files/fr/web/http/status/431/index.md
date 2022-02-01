---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
translation_of: Web/HTTP/Status/431
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`431 Request Header Fields Too Large`** indique que le serveur n'est pas disposé à traiter la requête, car les [en-têtes HTTP](/fr/docs/Web/HTTP/Headers) sont trop grands. La requête peut être renvoyée une fois que les en-têtes de la requête auront été réduits.

Ce code peut être utilisé lorsque la taille totale occupée par les en-têtes est trop importante ou lorsqu'un seul en-tête est trop grand. Utiliser le corps de la réponse pour indiquer plus précisément la nature de l'erreur peut aider la partie cliente à diagnostiquer. Il peut également être utile de préciser le ou les en-têtes concernés afin que l'utilisatrice ou l'utilisateur puisse corriger le problème (par exemple en supprimant les cookies).

Les serveurs produiront généralement ce statut si&nbsp;:

- L'URL contenue dans l'en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) est trop longue
- La requête contient de trop nombreux [cookies](/fr/docs/Web/HTTP/Cookies)

## Statut

```
431 Request Header Fields Too Large
```

## Spécifications

| Spécification                                                                    | Titre                        |
| -------------------------------------------------------------------------------- | ---------------------------- |
| [RFC 6585, section 5: 431 Request Header Fields Too Large](https://datatracker.ietf.org/doc/html/rfc6585#section-5) | Additional HTTP Status Codes |

## Voir aussi

- [`414 URI Too Long`](/fr/docs/Web/HTTP/Status/414)
- [En-tête de requête](/fr/docs/Glossary/Request_header)
