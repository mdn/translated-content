---
title: 410 Gone
slug: Web/HTTP/Status/410
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Référence(2)
translation_of: Web/HTTP/Status/410
---
{{HTTPSidebar}}

Le code de réponse d'erreur HyperText Transfer Protocol (HTTP) **`410`\*\***` Gone`\*\* est une erreur client qui indique que l'accès à la ressource visée n'est plus disponible sur le serveur d'origine et que cet état est susceptible d'être définitif.

Si vous ne savez pas si cette absence est temporaire ou permanente, il est préférable de renvoyer un code de statut {{HTTPStatus(404)}}.

> **Note :** Par défaut, une réponse 410 peut être mise en cache.

## Statut

    410 Gone

## Spécifications

| Spécification                                    | Titre                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "410 Gone" , "6.5.9")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

L'information ci-dessous provient du GitHub de MDN (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.410")}}

## Voir aussi

- {{HTTPStatus(404)}}
