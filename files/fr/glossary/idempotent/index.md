---
title: Idempotente
slug: Glossary/Idempotent
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

Une méthode HTTP est **idempotente** si l'effet prévu sur le serveur d'une seule requête est le même que l'effet de plusieurs requêtes identiques.

La spécification HTTP définit plusieurs méthodes et leur sémantique, y compris si elles sont idempotentes ou non. Toutes les méthodes {{Glossary("Safe/HTTP", "safe")}} sont idempotentes, de même que {{HTTPMethod("PUT")}} et {{HTTPMethod("DELETE")}}. Les méthodes {{HTTPMethod("POST")}} et {{HTTPMethod("PATCH")}} ne sont pas garanties idempotentes.

Un client peut retenter en toute sécurité une requête utilisant une méthode idempotente, par exemple lorsqu'il existe un doute sur le fait que la requête a bien atteint le serveur. Si plusieurs requêtes identiques atteignent le serveur, tant que la méthode est idempotente, cela ne pose pas de problème.

La spécification HTTP définit l'idempotence uniquement en termes de l'effet _prévu_ du client sur le serveur. Par exemple, une requête `POST` a pour intention d'envoyer des données au serveur, tandis qu'une requête `DELETE` a pour intention de supprimer une ressource sur le serveur. En pratique, il revient au serveur de veiller à ce que les routes qu'il expose respectent ces sémantiques.

> [!NOTE]
> Les serveurs sont fortement encouragés à respecter la sémantique définie par la spécification HTTP, mais celle-ci ne l'impose pas. Rien n'empêche un serveur d'exposer un point de terminaison non idempotent sous une méthode HTTP idempotente, même si cela peut surprendre les clients.

À garder à l'esprit&nbsp;:

- Une requête avec une méthode idempotente ne signifie pas nécessairement qu'elle n'a _aucun_ effet secondaire sur le serveur, seulement que le client n'en a pas l'intention&nbsp;: par exemple, le serveur peut enregistrer l'heure de chaque requête reçue.
- La réponse renvoyée par chaque requête peut différer&nbsp;: par exemple, le premier appel à {{HTTPMethod("DELETE")}} retournera probablement un {{HTTPStatus("200")}}, tandis que les suivants retourneront probablement un {{HTTPStatus("404")}}.

## Exemples

`GET /pageX HTTP/1.1` est idempotente, car il s'agit d'une méthode sûre (lecture seule). Des appels successifs peuvent retourner des données différentes au client si les données sur le serveur ont été modifiées entre-temps.

`POST /add_row HTTP/1.1` n'est pas idempotente&nbsp;: si elle est appelée plusieurs fois, elle ajoute plusieurs lignes&nbsp;:

```http
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Ajoute une 2<sup>e</sup> ligne
POST /add_row HTTP/1.1   -> Ajoute une 3<sup>e</sup> ligne
```

`DELETE /idX/delete HTTP/1.1` est idempotente, même si le code d'état renvoyé peut changer entre les requêtes&nbsp;:

```http
DELETE /idX/delete HTTP/1.1   -> Retourne 200 si idX existe
DELETE /idX/delete HTTP/1.1   -> Retourne 404 car il vient d'être supprimé
DELETE /idX/delete HTTP/1.1   -> Retourne 404
```

## Voir aussi

- Définition d'[idempotent](https://tools.ietf.org/html/rfc7231#section-4.2.2) dans la spécification HTTP (en).
- Description de méthodes idempotentes courantes : {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}
- Description d'une méthode non idempotente courante : {{HTTPMethod("POST")}}
