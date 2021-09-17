---
title: 204 No Content
slug: Web/HTTP/Status/204
tags:
  - Code de statut
  - HTTP
translation_of: Web/HTTP/Status/204
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`204 No Content`** indique que la requête a réussi mais que le client n'a pas besoin de quitter la page actuelle. Par défaut, une réponse 204 peut être mise en cache. Un en-tête {{HTTPHeader("ETag")}} est inclus pour ce type de réponse.

Généralement, ce code est renvoyé lorsque le résultat d'une requête {{HTTPMethod("PUT")}} et qu'une ressource est mise à jour, sans modifier le contenu actuel de la page affichée à l'utilisateur. Si la ressource est créée, c'est le code de statut {{HTTPStatus("201")}} `Created` qui sera renvoyé à la place. Si la page doit être actualisée avec une nouvelle page mise à jour, c'est le code de statut {{HTTPStatus("200")}} qui doit être utilisé à la place.

## Statut

    204 No Content

## Spécifications

| Spécification                                            | Titre                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "204 No Content" , "6.3.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "204")}}

## Voir aussi

- [Les verbes utilisés pour les méthodes HTTP](/fr/docs/Web/HTTP/Methods)
