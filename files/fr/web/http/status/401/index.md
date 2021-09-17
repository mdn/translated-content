---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/401
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`401 Unauthorized`** indique que la requête n'a pas été effectuée car il manque des informations d'authentification valides pour la ressource visée.

Ce statut est envoyé avec un en-tête {{HTTPHeader("WWW-Authenticate")}} qui décrit la méthode pour s'authentifier correctement.

Ce statut est similaire à {{HTTPStatus("403")}} mais, dans ce cas, une authentification est possible.

## Statut

    401 Unauthorized

## Exemple de réponse

    HTTP/1.1 401 Unauthorized
    Date: Wed, 21 Oct 2015 07:28:00 GMT
    WWW-Authenticate: Basic realm="Access to staging site"

## Spécifications

| Spécification                                            | Titre                    |
| -------------------------------------------------------- | ------------------------ |
| {{RFC("7235", "401 Unauthorized" , "3.1")}} | HTTP/1.1: Authentication |

## Compatibilité des navigateurs

{{Compat("http/status", "401")}}

## Voir aussi

- [La gestion de l'authentification en HTTP](/fr/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
