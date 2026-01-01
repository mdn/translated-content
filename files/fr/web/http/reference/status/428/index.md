---
title: 428 Precondition Required
slug: Web/HTTP/Reference/Status/428
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`428 Precondition Required`** indique que le serveur exige que la requête soit [conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests).

En général, une réponse 428 signifie qu'un en-tête de précondition requis comme {{HTTPHeader("If-Match")}} **est manquant**.
Lorsque l'en-tête de précondition ne **correspond pas** à l'état côté serveur, la réponse doit être {{HTTPStatus("412", "412 Precondition Failed")}}.

## Statut

```http
428 Precondition Required
```

## Exemples

### Précondition manquante dans la requête

Un client a récupéré une ressource `mon-document` depuis le serveur, l'a modifiée localement, puis tente d'envoyer le document mis à jour au serveur&nbsp;:

```http
PUT /docs/mon-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
  […]
```

L'implémentation du serveur exige que toutes les requêtes {{HTTPMethod("PUT")}} pour ce chemin ou ce type de documents soient conditionnelles et renvoie une réponse 428&nbsp;:

```http
HTTP/1.1 428 Precondition Required
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "MissingPrecondition",
  "message": "Updating documents requires a precondition header.",
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Les requêtes conditionnelles en HTTP](/fr/docs/Web/HTTP/Guides/Conditional_requests)
- Les en-têtes conditionnels&nbsp;: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Range")}}
- Le code de statut HTTP {{HTTPStatus(412)}}
