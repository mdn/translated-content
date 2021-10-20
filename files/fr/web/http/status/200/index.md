---
title: 200 OK
slug: Web/HTTP/Status/200
tags:
  - Code de statut
  - HTTP
translation_of: Web/HTTP/Status/200
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`200 OK`** indique la réussite d'une requête. Une réponse 200 peut être mise en cache par défaut.

La signification de la réussite dépend de la méthode de requête HTTP :

- {{HTTPMethod("GET")}} : la ressource a été récupérée et est transmise dans le corps du message.
- {{HTTPMethod("HEAD")}} : l'en-tête entier est dans le corps du message.
- {{HTTPMethod("POST")}} : la ressource qui décrit le résultat d'une action est transmise dans le corps du message.
- {{HTTPMethod("TRACE")}} : le corps du message contient le message de requête reçu par le serveur.

La plupart du temps, le résultat d'une requête réussie avec la méthode {{HTTPMethod("PUT")}} ou  {{HTTPMethod("DELETE")}} n'est pas `200` `OK` mais plutôt {{HTTPStatus("204")}} `No Content` (ou {{HTTPStatus("201")}} `Created` lorsque la ressource est envoyée pour la première fois).

## Statut

    200 OK

## Spécifications

| Spécification                                    | Titre                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "200 OK" , "6.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "200")}}

## Voir aussi

- [Les verbes utilisés pour les méthodes HTTP](/fr/docs/Web/HTTP/Methods)
