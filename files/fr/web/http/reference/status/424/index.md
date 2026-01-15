---
title: 424 Failed Dependency
slug: Web/HTTP/Reference/Status/424
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`424 Failed Dependency`** indique que la méthode n'a pas pu être exécutée sur la ressource car l'action demandée dépendait d'une autre action, et que cette action a échoué.

Les serveurs web classiques ne retournent généralement pas ce code d'état, mais certains protocoles comme {{Glossary("WebDAV")}} peuvent le faire.
Par exemple, dans {{Glossary("WebDAV")}}, si une requête `PROPPATCH` est envoyée et qu'une commande échoue, alors toutes les autres commandes échoueront automatiquement avec `424 Failed Dependency`.

## Statut

```http
424 Failed Dependency
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("403", "403 Forbidden")}}
- Les codes de statut HTTP {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
