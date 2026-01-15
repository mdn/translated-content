---
title: 409 Conflict
slug: Web/HTTP/Reference/Status/409
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`409 Conflict`** indique un conflit de requête avec l'état actuel de la ressource cible.

Dans l'édition web distante via {{Glossary("WebDAV", "WebDAV")}}, les réponses 409 sont des erreurs envoyées au client afin qu'un·e utilisateur·ice puisse résoudre le conflit et soumettre à nouveau la requête.
Par exemple, un conflit se produit si une requête pour créer la collection `/a/b/c/d/` est effectuée alors que `/a/b/c/` n'existe pas, la requête doit échouer avec un code 409.
De plus, vous pouvez recevoir une réponse 409 lors du téléversement d'un fichier plus ancien que celui déjà présent sur le serveur, ce qui provoque un conflit de gestion de versions.

Dans d'autres systèmes, les réponses 409 peuvent être utilisées pour des besoins spécifiques à l'implémentation, comme pour indiquer que le serveur a reçu plusieurs requêtes visant à mettre à jour la même ressource.

## Statut

```http
409 Conflict
```

## Exemples

### Tâches concurrentes interdites

Dans l'exemple suivant, nous souhaitons lancer un processus d'automatisation qui effectue une tâche courante dans le système&nbsp;:

```http
POST /tasks HTTP/1.1
Host: exemple.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

Dans cette implémentation, le serveur interdit l'exécution de deux tâches simultanées et retourne un code 409, offrant au client la possibilité de vérifier s'il souhaitait vraiment effectuer cette action ou lancer une autre tâche&nbsp;:

```http
HTTP/1.1 409 Conflict
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "AutomationConflict",
  "task": "emailDogOwners",
  "message": "Task locked. Cannot start a new automation since job is already running.",
  "runningTaskId": "123"
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- La méthode HTTP {{HTTPMethod("PUT")}}
