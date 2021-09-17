---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/407
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`407 Proxy Authentication Required `**indique que la requête n'a pas été appliquée à cause d'un manque d'authentification pour un  {{Glossary("proxy")}} situé entre le navigateur et le serveur qui peut accéder à la ressource demandée.

Ce code de statut est envoyé avec l'en-tête {{HTTPHeader("Proxy-Authenticate")}} qui contient les informations décrivant la façon de s'authentifier correctement.

## Statut

    407 Proxy Authentication Required

## Exemple de réponse

    HTTP/1.1 407 Proxy Authentication Required
    Date: Wed, 21 Oct 2015 07:28:00 GMT
    Proxy-Authenticate: Basic realm="Access to internal site"

## Spécifications

| Spécification                                                                    | Titre                    |
| -------------------------------------------------------------------------------- | ------------------------ |
| {{RFC("7235", "407 Proxy Authentication Required" , "3.2")}} | HTTP/1.1: Authentication |

## Compatibilité des navigateurs

{{Compat("http/status", "407")}}

## Voir aussi

- [La gestion de l'authentification en HTTP](/fr/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
