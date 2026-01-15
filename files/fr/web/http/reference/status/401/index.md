---
title: 401 Unauthorized
slug: Web/HTTP/Reference/Status/401
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`401 Unauthorized`** indique qu'une requête n'a pas abouti car elle ne comporte pas d'identifiants d'authentification valides pour la ressource demandée.
Ce code de statut est envoyé avec un en-tête de réponse HTTP {{HTTPHeader("WWW-Authenticate")}} qui contient des informations sur le [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification) que le serveur attend que le client fournisse pour que la requête aboutisse.

Un `401 Unauthorized` est similaire à la réponse {{HTTPStatus("403", "403 Forbidden")}}, sauf qu'un code 403 est retourné lorsqu'une requête contient des identifiants valides, mais que le client n'a pas les permissions nécessaires pour effectuer une certaine action.

## Statut

```http
401 Unauthorized
```

## Exemples

### Requête non autorisée vers une API protégée

La requête GET suivante est envoyée à l'URL `www.exemple.com/admin` qui attend des identifiants dans un en-tête {{HTTPHeader("Authorization")}}&nbsp;:

```http
GET /admin HTTP/1.1
Host: exemple.com
```

Le serveur répond avec un message 401 et un en-tête {{HTTPHeader("WWW-Authenticate")}} indiquant que la requête doit être authentifiée et que l'authentification `Bearer` (un jeton d'accès) est le [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification) autorisé&nbsp;:

```http
HTTP/1.1 401 Unauthorized
Date: Tue, 02 Jul 2024 12:18:47 GMT
WWW-Authenticate: Bearer
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [L'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
- L'entrée de glossaire {{Glossary("Challenge")}}
- L'en-tête HTTP {{HTTPHeader("WWW-Authenticate")}}
- L'en-tête HTTP {{HTTPHeader("Authorization")}}
- L'en-tête HTTP {{HTTPHeader("Proxy-Authorization")}}
- L'en-tête HTTP {{HTTPHeader("Proxy-Authenticate")}}
- Les codes de statut HTTP {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
