---
title: 406 Not Acceptable
slug: Web/HTTP/Reference/Status/406
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`406 Not Acceptable`** indique que le serveur n'a pas pu produire une réponse correspondant à la liste des valeurs acceptables définies dans les en-têtes de [négociation de contenu proactive](/fr/docs/Web/HTTP/Guides/Content_negotiation#négociation_de_contenu_menée_par_le_serveur) de la requête et que le serveur n'a pas souhaité fournir une représentation par défaut.

Les en-têtes de négociation de contenu incluent&nbsp;:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

Un serveur peut retourner des réponses qui diffèrent des en-têtes d'acceptation de la requête.
Dans ce cas, une réponse {{HTTPStatus("200")}} avec une ressource par défaut qui ne correspond pas à la liste des valeurs acceptables de négociation de contenu du client peut être préférable à l'envoi d'une réponse 406.

Si un serveur retourne un 406, le corps du message doit contenir la liste des représentations disponibles pour la ressource, permettant à l'utilisateur·ice de choisir, bien qu'aucune méthode standard pour cela ne soit définie.

## Statut

```http
406 Not Acceptable
```

## Exemples

### Type de contenu non disponible

La requête suivante suppose que `www.example.com/docs/doc1` supporte l'envoi d'un document en tant que `application/rtf`&nbsp;:

```http
GET /docs/doc1 HTTP/1.1
Host: example.com
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
