---
title: 411 Length Required
slug: Web/HTTP/Reference/Status/411
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`411 Length Required`** indique que le serveur a refusé d'accepter la requête sans en-tête {{HTTPHeader("Content-Length")}} défini.

> [!NOTE]
> Selon la spécification, lors de l'envoi de données en plusieurs fragments, l'en-tête `Content-Length` est absent et il est nécessaire d'ajouter la longueur du fragment courant au format hexadécimal.
> Pour plus de détails, se référer à la page sur l'en-tête {{HTTPHeader("Transfer-Encoding")}}.

## Statut

```http
411 Length Required
```

## Exemples

### Requête POST fragmentée

La requête suivante est envoyée en fragments, ce qui est la méthode par défaut pour envoyer des données dans certains cas, comme lors de [l'écriture dans des flux <sup>(angl.)</sup>](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback)&nbsp;:

```http
POST /translate/de HTTP/1.1
Host: api.exemple.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

Dans ce cas, le serveur attend une requête en une seule partie avec un en-tête {{HTTPHeader("Content-Length")}} et retourne une réponse 411&nbsp;:

```http
HTTP/1.1 411 Length Required
Content-Type: application/json
Content-Length: 110

{
  "message": "Requests must have a content length header.",
  "documentation": "http://api/exemple.com/docs/errors",
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Content-Length")}}
- L'en-tête HTTP {{HTTPHeader("Transfer-Encoding")}}
