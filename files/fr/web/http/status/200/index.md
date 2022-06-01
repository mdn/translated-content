---
title: 200 OK
slug: Web/HTTP/Status/200
translation_of: Web/HTTP/Status/200
browser-compat: http.status.200
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`200 OK`** indique la réussite d'une requête. Une réponse 200 peut être mise en cache par défaut.

La signification de la réussite dépend de la méthode de requête HTTP&nbsp;:

- [`GET`](/fr/docs/Web/HTTP/Methods/GET)&nbsp;: la ressource a été récupérée et est transmise dans le corps du message.
- [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD)&nbsp;: l'ensemble des en-têtes est présent dans la réponse, celle-ci n'a pas de corps.
- [`POST`](/fr/docs/Web/HTTP/Methods/POST)&nbsp;: la ressource qui décrit le résultat d'une action est transmise dans le corps du message.
- [`TRACE`](/fr/docs/Web/HTTP/Methods/TRACE)&nbsp;: le corps du message contient le message de requête reçu par le serveur.

La plupart du temps, le résultat d'une requête réussie avec la méthode [`PUT`](/fr/docs/Web/HTTP/Methods/PUT) ou [`DELETE`](/fr/docs/Web/HTTP/Methods/DELETE) n'est pas `200` `OK` mais plutôt [`204 No Content`](/fr/docs/Web/HTTP/Status/204) (ou [`201 Created`](/fr/docs/Web/HTTP/Status/201) lorsque la ressource est envoyée pour la première fois).

## Statut

```
200 OK
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les verbes utilisés pour les méthodes HTTP](/fr/docs/Web/HTTP/Methods)
