---
title: 100 Continue
slug: Web/HTTP/Status/100
tags:
  - Code de statut
  - HTTP
  - Informational
translation_of: Web/HTTP/Status/100
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`100 Continue`** indique que, jusqu'à présent, tout est normal (OK) et que le client doit poursuivre avec la requête ou l'ignorer si celle-ci est déjà finie.

Afin que le serveur vérifie les en-têtes des requêtes, un client doit envoyer {{HTTPHeader("Expect")}} : `100-continue` comme en-tête dans la requête initiale et recevoir le code de statut  `100 Continue` comme réponse avant d'envoyer le corps de la requête.

## Statut

    100 Continue

## Spécifications

| Spécification                                            | Titre                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "100 Continue" , "6.2.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "100")}}

## Voir aussi

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
