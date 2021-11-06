---
title: 403 Forbidden
slug: Web/HTTP/Status/403
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/403
---
{{HTTPSidebar}}

Le code de statut d'erreur de réponse HTTP **`403 Forbidden`** indique qu'un serveur comprend la requête mais refuse de l'autoriser.

Ce statut est similaire au statut {{HTTPStatus("401")}}, mais dans ce cas, la ré-authentification ne changera rien. L'accès est définitivement interdit et est lié à la logique de l'application, par exemple manque d'une permission d'accès à une ressource.

## Statut

    403 Forbidden

## Exemple de réponse

    HTTP/1.1 403 Forbidden
    Date: Wed, 21 Oct 2015 07:28:00 GMT

## Spécifications

| Spécification                                            | Titre                           |
| -------------------------------------------------------- | ------------------------------- |
| {{RFC("7231", "403 Forbidden" , "6.5.3")}} | HTTP/1.1: Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "403")}}

## Voir aussi

- {{HTTPStatus("401")}}
