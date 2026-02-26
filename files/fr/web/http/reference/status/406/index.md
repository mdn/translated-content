---
title: 406 Not Acceptable
slug: Web/HTTP/Reference/Status/406
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`406 Not Acceptable`** indique que le serveur n'a pas pu produire une réponse correspondant à la liste des valeurs acceptables définies dans les en-têtes de [négociation de contenu proactive](/fr/docs/Web/HTTP/Guides/Content_negotiation#négociation_de_contenu_menée_par_le_serveur) de la requête et que le serveur n'a pas souhaité fournir une représentation par défaut.

Les en-têtes de négociation de contenu incluent&nbsp;:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

Un serveur peut retourner des réponses qui diffèrent des en-têtes d'acceptation de la requête.
Dans ce cas, une réponse {{HTTPStatus("200")}} avec une ressource par défaut qui ne correspond pas à la liste des valeurs acceptables de négociation de contenu du client peut être préférable à l'envoi d'une réponse 406.

If a server returns a 406, the body of the message should contain the list of available representations for the resource, allowing the user to choose, although no standard way for this is defined.

## Statut

```http
406 Not Acceptable
```

## Exemples

### Type de contenu non disponible

La requête suivante suppose que `www.exemple.com/docs/doc1` supporte l'envoi d'un document en tant que `application/rtf`&nbsp;:

```http
GET /docs/doc1 HTTP/1.1
Host: exemple.com
Accept: application/rtf;
```

Dans cet exemple, l'implémentation du serveur ne revient pas à un type de contenu par défaut comme `text/html` ou `application/json`, mais retourne un 406 à la place&nbsp;:

```http
HTTP/1.1 406 Not Acceptable
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "UnsupportedType",
  "message": "Only 'text/html' or 'application/json' content types supported.",
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Accept")}}
- L'en-tête HTTP {{HTTPHeader("Accept-Encoding")}}
- L'en-tête HTTP {{HTTPHeader("Accept-Language")}}
- [Négociation du contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) en HTTP
