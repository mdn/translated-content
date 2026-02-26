---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`200 OK`** indique qu'une requête a réussi.
Une réponse `200 OK` est mise en cache par défaut.

Une réponse `200 OK` a une signification et un format différents selon la méthode de requête HTTP utilisée.
Voici comment cela varie selon les méthodes&nbsp;:

- {{HTTPMethod("GET")}}&nbsp;: la ressource a été récupérée et est transmise dans le corps du message.
- {{HTTPMethod("HEAD")}}&nbsp;: l'ensemble des en-têtes est présent dans la réponse, celle-ci n'a pas de corps.
- {{HTTPMethod("POST")}}&nbsp;: la ressource qui décrit le résultat d'une action est transmise dans le corps du message.
- {{HTTPMethod("TRACE")}}&nbsp;: le corps du message contient le message de requête reçu par le serveur.

Bien que cela soit possible, les requêtes {{HTTPMethod("PUT")}} ou {{HTTPMethod("DELETE")}} réussies ne retournent souvent pas une réponse `200 OK`.
Il est plus courant de voir {{HTTPStatus("201", "201 Created")}} si la ressource est téléversée ou créée pour la première fois, ou {{HTTPStatus("204", "204 No Content")}} lors de la suppression réussie d'une ressource.

## Statut

```http
200 OK
```

## Exemples

### Réception d'un `200 OK` pour une requête `GET`

Dans cet exemple, une requête `GET` réussie vers `https://exemple.com` retourne une réponse `200 OK`.
La réponse inclut des en-têtes de représentation et un corps de message contenant le contenu HTML&nbsp;:

```http
HTTP/1.1 200 OK
Accept-Ranges: bytes
Age: 294510
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Etag: "3147526947"
Expires: Fri, 28 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECAcc (nyd/D10E)
X-Cache: HIT
Content-Length: 1256

<!doctype html>
<!-- Le contenu HTML commence ici -->
```

### Réception d'un `200 OK` pour une requête `POST` lors de la soumission d'un formulaire

En supposant qu'un formulaire existe pour envoyer des données à un point de terminaison de gestion des abonnements à `http://exemple.com/subscribe`.
Une requête `POST` pour abonner un·e utilisateur·ice pourrait ressembler à ceci&nbsp;:

```http
POST /subscribe HTTP/1.1
Host: exemple.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Sandra%20Smith&email=sandra.smith%40exemple.com
```

Dans cet exemple, une réponse avec un statut `200 OK` pourrait ressembler à ceci&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Abonnement utilisateur en attente. Un courriel de confirmation a été envoyé.",
  "subscription": {
    "name": "Sandra Smith",
    "email": "sandra.smith@exemple.com",
    "id": 123,
    "feed": "default"
  }
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Glossaire&nbsp;: {{Glossary("Idempotent")}}
