---
title: 204 No Content
slug: Web/HTTP/Status/204
translation_of: Web/HTTP/Status/204
browser-compat: http.status.204
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`204 No Content`** indique que la requête a réussi mais que le client n'a pas besoin de quitter la page actuelle. Par défaut, une réponse 204 peut être mise en cache. Un en-tête [`ETag`](/fr/docs/Web/HTTP/Headers/ETag) est inclus pour ce type de réponse.

Généralement, ce code est renvoyé lorsque le résultat d'une requête [`PUT`](/fr/docs/Web/HTTP/Methods/PUT) et qu'une ressource est mise à jour, sans modifier le contenu actuel de la page affichée à l'utilisateur. Si la ressource est créée, c'est le code de statut [`201 Created`](/fr/docs/Web/HTTP/Status/201) qui sera renvoyé à la place. Si la page doit être actualisée avec une nouvelle page mise à jour, c'est le code de statut [`200`](/fr/docs/Web/HTTP/Status/200) qui doit être utilisé à la place.

## Statut

```
204 No Content
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les verbes utilisés pour les méthodes HTTP](/fr/docs/Web/HTTP/Methods)
