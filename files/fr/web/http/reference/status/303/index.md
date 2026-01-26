---
title: 303 See Other
slug: Web/HTTP/Reference/Status/303
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de redirection](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection) HTTP **`303 See Other`** indique que le navigateur doit se rediriger vers l'URL indiquée dans l'en-tête {{HTTPHeader("Location")}} au lieu d'afficher la ressource demandée.

Ce code de réponse est souvent renvoyé à la suite de méthodes {{HTTPMethod("PUT")}} ou {{HTTPMethod("POST")}} afin que le client puisse obtenir une confirmation, ou afficher une représentation d'un objet réel (voir [HTTP range-14 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/HTTPRange-14)).
La méthode pour récupérer la ressource redirigée est toujours {{HTTPMethod("GET")}}.

## Statut

```http
303 See Other
```

## Exemples

### Réponse 303 lors de la soumission d'un formulaire

Dans cet exemple, le client envoie une requête {{HTTPMethod("POST")}} pour soumettre un formulaire à une inscription générique.

```http
POST /subscribe HTTP/1.1
Host: exemple.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Sandra%20Smith&email=sandra.smith%40exemple.com
```

Le serveur peut renvoyer une réponse avec un statut `303` et une page de confirmation dans l'en-tête {{HTTPHeader("Location")}}, afin que l'utilisateur·ice soit redirigé·e après avoir reçu la réponse.

```http
HTTP/1.1 303 See Other
Location: https://www.exemple.com/confirmation/event/123
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("302", "302 Found")}}, une redirection temporaire
- Le code de statut HTTP {{HTTPStatus("307", "307 Temporary Redirect")}}, une redirection temporaire où la méthode de la requête n'est pas modifiée
