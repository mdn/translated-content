---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Reference/Status/407
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`407 Proxy Authentication Required`** indique que la requête n'a pas abouti car elle ne contient pas d'identifiants d'authentification valides pour le {{Glossary("proxy server", "serveur mandataire")}} situé entre le client et le serveur qui donne accès à la ressource demandée.

Cette réponse est envoyée avec l'en-tête {{HTTPHeader("Proxy-Authenticate")}}, qui contient des informations sur la manière d'authentifier correctement les requêtes.
Le client peut répéter la requête avec un nouvel en-tête {{HTTPHeader("Proxy-Authorization")}} ou en le remplaçant.

## Statut

```http
407 Proxy Authentication Required
```

## Exemples

### Authentification du proxy

Une requête GET est effectuée vers `exemple.com/admin`&nbsp;:

```http
GET /admin HTTP/1.1
Host: exemple.com
```

Un intermédiaire informe le client que les utilisateur·ice·s doivent être authentifié·e·s et fournit des informations sur le mécanisme d'authentification&nbsp;:

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [L'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
- L'en-tête HTTP {{HTTPHeader("WWW-Authenticate")}}
- L'en-tête HTTP {{HTTPHeader("Authorization")}}
- L'en-tête HTTP {{HTTPHeader("Proxy-Authorization")}}
- L'en-tête HTTP {{HTTPHeader("Proxy-Authenticate")}}
- Les codes de statut HTTP {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
