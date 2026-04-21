---
title: 417 Expectation Failed
slug: Web/HTTP/Reference/Status/417
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`417 Expectation Failed`** indique que l'attente définie dans l'en-tête {{HTTPHeader("Expect")}} de la requête n'a pas pu être satisfaite.
Après avoir reçu une réponse 417, le client doit répéter la requête sans l'en-tête `Expect`, en incluant le fichier dans le corps de la requête sans attendre une réponse {{HTTPStatus("100")}}.
Voir la documentation de l'en-tête {{HTTPHeader("Expect")}} pour plus de détails.

## Statut

```http
417 Expectation Failed
```

## Exemples

### Attentes pas prises en charge

La requête PUT suivante envoie des informations sur un téléversement de fichier prévu vers un serveur.
Le client utilise un en-tête `Expect: 100-continue` et aucun corps de requête pour éviter d'envoyer des données sur le réseau qui pourraient entraîner une erreur telle qu'une réponse {{HTTPStatus("405")}}, {{HTTPStatus("401")}} ou {{HTTPStatus("403")}}&nbsp;:

```http
PUT /videos HTTP/1.1
Host: uploads.exemple.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Dans cette implémentation serveur, les attentes ne sont pas prises en charge et la présence d'un en-tête `Expect` avec n'importe quelle valeur entraîne une réponse 417&nbsp;:

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

Le client répond en effectuant une requête sans attentes et avec le {{Glossary("HTTP Content", "contenu")}} dans le corps de la requête&nbsp;:

```http
PUT /videos HTTP/1.1
Host: uploads.exemple.com
Content-Type: video/h264
Content-Length: 1234567890987

[…]
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("100", "100 Continue")}}
- L'en-tête HTTP {{HTTPHeader("Expect")}}
