---
title: 405 Method Not Allowed
slug: Web/HTTP/Reference/Status/405
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`405 Method Not Allowed`** indique que le serveur connaît la méthode de la requête, mais que la ressource ciblée ne la prend pas en charge.
Le serveur **doit** générer un en-tête {{HTTPHeader("Allow")}} dans une réponse 405, contenant la liste des méthodes actuellement supportées par la ressource ciblée.

Des permissions incorrectes côté serveur sur des fichiers ou des répertoires peuvent provoquer une réponse 405 alors que la requête aurait normalement dû réussir.

## Statut

```http
405 Method Not Allowed
```

## Exemples

### Méthode TRACE non autorisée

Les propriétaires de serveurs interdisent souvent l'utilisation de la méthode `TRACE` pour des raisons de sécurité.
L'exemple suivant montre une réponse typique où le serveur n'autorise pas l'utilisation de `TRACE`&nbsp;:

```http
TRACE / HTTP/1.1
Host: exemple.com
```

```http
HTTP/1.1 405 Method Not Allowed
Content-Length: 0
Date: Fri, 28 Jun 2024 14:30:31 GMT
Server: ECLF (nyd/D179)
Allow: GET, POST, HEAD
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Allow")}}
- Les codes de statut HTTP {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
- [Définitions des codes de statut HTTP <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#status.405)
- [Comment corriger l'erreur 405 Method Not Allowed <sup>(angl.)</sup>](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Dépannage de l'erreur HTTP 405 <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
