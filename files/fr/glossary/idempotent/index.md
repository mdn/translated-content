---
title: Idempotente
slug: Glossary/Idempotent
---

Une méthode HTTP est **idempotente** si une requête identique peut être faite une ou plusieurs fois de suite avec le même effet, tout en laissant le serveur dans le même état. En d'autres termes, une méthode idempotente ne doit pas avoir d'effets secondaires (sauf dans la tenue de statistiques). Implémentées correctement, les méthodes {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} et {{HTTPMethod("DELETE")}} sont idempotentes, mais pas la méthode {{HTTPMethod("POST")}}. Toutes les méthodes {{glossary("Safe","sécurisées")}} sont également idempotentes.

L'idempotence implique que seul l'état réel du serveur est pris en compte et le code d'état renvoyé par chaque requête peut différer : le premier appel d'un {{HTTPMethod("DELETE")}} retournera probablement un code {{HTTPStatus("200")}}, tandis que les lancements successifs retourneront probablement un code {{HTTPStatus("404")}}. Une autre implication, {{HTTPMethod("DELETE")}} étant idempotente, les développeurs ne doivent pas implémenter d'API RESTful avec une fonctionnalité de suppression de la dernière entrée utilisant la méthode DELETE.

À noter : l'idempotence d'une méthode n'est pas garantie par le serveur et certaines applications peuvent incorrectement rompre la contrainte d'idempotence.

`GET /pageX HTTP/1.1` est idempotente. Appelée plusieurs fois de suite, le client obtient les mêmes résultats :

```
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
```

`POST /add_row HTTP/1.1` n'est pas idempotente ; si elle est appelée plusieurs fois, elle ajoute plusieurs lignes :

```
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> ajoute une 2nde ligne
POST /add_row HTTP/1.1   -> ajoute une 3ème ligne
```

`DELETE /idX/delete HTTP/1.1` est idempotente, même si le code d'état renvoyé peut changer entre les demandes :

```
DELETE /idX/delete HTTP/1.1   -> Retourne 200 si idX existe
DELETE /idX/delete HTTP/1.1   -> Retourne 404 comme il vient d'être supprimé
DELETE /idX/delete HTTP/1.1   -> Retourne 404
```

## Voir aussi

### Culture générale

- Définition d'[idempotent](https://tools.ietf.org/html/rfc7231#section-4.2.2) dans la spécification HTTP (en).

### Savoir technique

- Description de méthodes idempotentes courantes : {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}
- Description d'une méthode non idempotente courante : {{HTTPMethod("POST")}}
