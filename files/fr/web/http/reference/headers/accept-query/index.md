---
title: En-tête Accept-Query
short-title: Accept-Query
slug: Web/HTTP/Reference/Headers/Accept-Query
l10n:
  sourceCommit: 346e46c6e10334bf60df2a0a4ef58ebea4c80a4e
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Accept-Query`** indique qu'une ressource prend en charge la méthode {{HTTPMethod("QUERY")}} et identifie les [types de médias](/fr/docs/Web/HTTP/Guides/MIME_types) du format de requête qu'elle accepte.
Malgré son nom, `Accept-Query` est envoyé par le serveur dans une réponse, et non par le client dans une requête&nbsp;: il indique aux clients ce qu'ils peuvent envoyer en tant que contenu d'une requête `QUERY` ultérieure.

`Accept-Query` est un champ structuré dont la valeur est une liste de plages de médias (un type de média pouvant inclure des caractères génériques), chacune représentée sous forme de chaîne de caractères ou de jeton de champ structuré et incluant éventuellement des paramètres de champ structuré.
L'ordre des types de médias dans la liste n'a pas d'importance.
Sa valeur s'applique à chaque URI sur le serveur ayant le même chemin, indépendamment du composant de requête de l'URI.
Si les requêtes vers la même ressource retournent des valeurs `Accept-Query` différentes, la valeur la plus récemment reçue et encore valide s'applique.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
// Jeton ou chaîne de caractères équivalente entre guillemets
Accept-Query: <media-type>/<subtype>
Accept-Query: "<media-type>/<subtype>"

// Jetons incluant des caractères génériques
Accept-Query: <media-type>/*
Accept-Query: */*

// Liste de plages de médias séparées par des virgules dans n'importe quel ordre, mélangeant jetons et chaînes de caractères
Accept-Query: <media-type>/<subtype>, "<media-type-2>/<subtype-2>", <media-type-3>/*

// Paramètres de type de média exprimés en tant que paramètres de champ structuré
Accept-Query: <media-type>/<subtype>;<parameter>=<value>
Accept-Query: <media-type>/<subtype>;<parameter>="<value>"
```

> [!NOTE]
> Bien que sa valeur ressemble à celle de {{HTTPHeader("Accept")}}, `Accept-Query` est un champ structuré ({{RFC("9651", "Champ de valeurs structurées pour HTTP")}}) et doit être analysé comme tel.
> En particulier, il n'a pas de notion de préférence par les arguments `q` ({{Glossary("quality values", "valeurs de qualité")}})&nbsp;: chaque plage de médias dans la liste est également acceptable, et l'ordre de la liste n'a pas d'importance.
> Cela s'explique par le fait que `Accept-Query` est un en-tête de réponse tandis que `Accept` est un en-tête de requête.

## Directives

- `<media-type>/<subtype>`
  - : Un [type de média](/fr/docs/Web/HTTP/Guides/MIME_types) avec un sous-type que la ressource accepte en tant que contenu de requête `QUERY`, tel que `application/json`.
    Exprimé en tant que jeton de champ structuré.
- `"<media-type>/<subtype>"`
  - : La même valeur exprimée en tant que chaîne de caractères de champ structuré.
    Le choix entre un jeton et une chaîne de caractères n'a aucune signification, donc les destinataires ne doivent pas traiter les deux formes différemment.
    Une chaîne de caractères est requise lorsque la plage de médias n'est pas un jeton valide, par exemple lorsque le type commence par un chiffre.
- `<media-type>/*`
  - : Un type de média qui accepte n'importe quel sous-type.
    Par exemple, `image/*` correspond à `image/png`, `image/svg`, `image/gif` et à d'autres types d'images.
- `*/*`
  - : N'importe quel type de média.
- `;<parameter>=<value>`
  - : Un paramètre de type de média, tel que `;charset="UTF-8"`, mappé à un paramètre de champ structuré sur la plage de médias précédente.
    Les valeurs des paramètres sont elles-mêmes des jetons ou des chaînes de caractères.
    La plage de médias elle-même est toujours écrite sans ses paramètres.

## Exemples

### Annoncer les formats de requête pris en charge

La réponse suivante indique que la ressource prend en charge les requêtes `QUERY` avec un contenu `application/x-www-form-urlencoded` ou `application/sql`&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: application/x-www-form-urlencoded, application/sql
```

### Utiliser des chaînes de caractères et des paramètres de type de média

Les plages de médias peuvent également être écrites sous forme de chaînes de caractères entre guillemets, et les deux formes peuvent être mélangées dans une même liste.
Ici, la ressource accepte les requêtes JSONPath et les requêtes SQL encodées en UTF-8&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: "application/jsonpath", application/sql;charset="UTF-8"
```

Comme la réponse dépend du contenu de la requête `QUERY`, un serveur peut également envoyer un en-tête {{HTTPHeader("Vary")}} nommant les champs impliqués&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/csv
Accept-Query: "application/sql", "application/xslt+xml"
Vary: Accept-Query, Content-Encoding, Content-Type
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

La compatibilité des navigateurs n'est pas pertinente pour cet en-tête.
Les navigateurs n'ont pas de gestion intégrée de `Accept-Query`&nbsp;; c'est au client envoyant des requêtes `QUERY` de lire l'en-tête et de l'utiliser pour sélectionner un type de média pris en charge pour le contenu de la requête.

## Voir aussi

- La méthode de requête {{HTTPMethod("QUERY")}}
- L'en-tête {{HTTPHeader("Accept")}}
- L'en-tête {{HTTPHeader("Content-Type")}}
- L'en-tête {{HTTPHeader("Content-Location")}}
- L'en-tête {{HTTPHeader("Location")}}
- L'en-tête {{HTTPHeader("Vary")}}
- Le code de statut {{HTTPStatus("415", "415 Unsupported Media Type")}}
