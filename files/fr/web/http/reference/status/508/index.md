---
title: 508 Loop Detected
slug: Web/HTTP/Reference/Status/508
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`508 Loop Detected`** indique que l'opération entière a échoué car elle a rencontré une boucle infinie lors du traitement d'une requête avec `Depth: infinity`.

Ce statut peut être donné dans le contexte de <i lang="en">Web Distributed Authoring and Versioning</i> ({{Glossary("WebDAV")}}).
Il a été introduit comme solution de repli pour les cas où les clients WebDAV ne prennent pas en charge les réponses {{HTTPStatus("208", "208 Already Reported")}} (lorsque les requêtes n'incluent pas explicitement un en-tête `DAV`).

## Statut

```http
508 Loop Detected
```

## Exemples

### Boucle infinie dans une recherche WebDAV

```http
PROPFIND /Coll/ HTTP/1.1
Host: exemple.com
Depth: infinity
Content-Type: application/xml; charset="utf-8"
Content-Length: 125

<?xml version="1.0" encoding="utf-8" ?>
<D:propfind xmlns:D="DAV:">
  <D:prop> <D:displayname/> </D:prop>
</D:propfind>
```

```http
HTTP/1.1 508 Loop Detected
Content-Type: application/json; charset=utf-8
Server: Microsoft-IIS/8.0
Date: Wed, 15 May 2013 02:38:57 GMT
Content-Length: 72

{
  "Message": "Please check the resources for cyclic references and try again."
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("208", "208 Already Reported")}}
