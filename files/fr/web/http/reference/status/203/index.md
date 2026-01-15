---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Reference/Status/203
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`203 Non-Authoritative Information`** indique que la requête a réussi, mais qu'un _{{Glossary("Proxy server", "mandataire")}} transformant_ a modifié les en-têtes ou le contenu inclus de la réponse {{HTTPStatus("200")}} (`OK`) du serveur d'origine.

L'objectif de ce code de statut est de permettre aux mandataires transformants d'informer les clients lorsque des modifications ont été appliquées à des réponses réussies, car cela peut influencer les décisions concernant le contenu par la suite.
Les transformations des messages peuvent signifier des modifications des en-têtes pour indiquer qu'une ressource provient d'un miroir ou d'une sauvegarde, mais peuvent aussi signifier la modification du contenu d'une manière présumée souhaitable pour le client.
Ces modifications peuvent inclure le filtrage de logiciels malveillants, la transcodification de formats, le filtrage de la vie privée ou d'autres indications au client concernant de futures requêtes.

La réponse `203` est similaire à la valeur [`214`](/fr/docs/Web/HTTP/Reference/Headers/Warning#codes_davertissements) `Transformation Applied` de l'en-tête obsolète {{HTTPHeader("Warning")}}, qui peut s'appliquer aux réponses avec n'importe quel code de statut.

## Statut

```http
203 Non-Authoritative Information
```

## Exemples

### Réception d'une réponse de message filtré

Dans cet exemple, un·e utilisateur·ice envoie une requête `GET` pour le contenu avec l'identifiant `123` à `exemple.com`.

```http
GET /comments/123 HTTP/1.1
Host: exemple.com
```

Un mandataire a modifié le message selon des règles de filtrage de logiciels malveillants pour des pièces jointes connues comme dangereuses.
Le contenu de la réponse a été modifié, remplaçant la valeur de `attachment_url` par un lien vers des informations sur le filtrage appliqué&nbsp;:

```http
HTTP/1.1 203 Non-Authoritative Information
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json
Content-Length: 123

{
  "comment": "Découvrez ma bio !",
  "attachment_url": "https://exemple.com/attachment-unavailable-faq"
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le code de statut HTTP {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- L'en-tête HTTP {{HTTPHeader("Warning")}}
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
