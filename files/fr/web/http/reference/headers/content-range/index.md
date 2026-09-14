---
title: En-tête Content-Range
short-title: Content-Range
slug: Web/HTTP/Reference/Headers/Content-Range
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Content-Range`** est utilisé dans les [requêtes de plage](/fr/docs/Web/HTTP/Guides/Range_requests) pour indiquer où le contenu du corps de la réponse se situe par rapport à une ressource complète.

Il doit uniquement être inclus dans {{HTTPStatus("206", "206 Partial Content")}} ou {{HTTPStatus("416", "416 Range Not Satisfiable")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Response header", "En-tête de réponse")}},
        {{Glossary("Content header", "En-tête de contenu")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête autorisé CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Range: <unit> <range>/<size>
Content-Range: <unit> <range>/*
Content-Range: <unit> */<size>
```

## Directives

- `<unit>`
  - : L'unité pour définir les plages.
    Actuellement, seul `bytes` est pris en charge.
- `<range>`
  - : Une plage au format `<range-start>-<range-end>`, où `<range-start>` et `<range-end>` sont des entiers représentant respectivement la position de début et de fin (indexée à partir de zéro et incluse) de la plage dans l'unité donnée.
    `*` est utilisé dans une réponse {{HTTPStatus("416", "416 Range Not Satisfiable")}} pour indiquer que la valeur n'est pas une plage.
- `<size>`
  - : La longueur totale du document (ou `*` si inconnue).

## Exemples

### Réponse avec contenu partiel

Cette réponse {{HTTPStatus("206", "206 Partial Content")}} montre une réponse partielle, avec le `Content-Range` indiquant qu'elle contient les 1024 premiers octets d'un fichier de 146515 octets.

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(contenu binaire)
```

### Plage non satisfaisable

Si le serveur ne peut pas satisfaire la requête de plage demandée, il doit répondre avec le statut {{HTTPStatus("416", "416 Range Not Satisfiable")}}, et le `Content-Range` doit indiquer `*` pour la plage ainsi que la taille totale de la ressource.

```http
HTTP/2 416

Content-Range: bytes */67589
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [sur les requêtes de plage HTTP](/fr/docs/Web/HTTP/Guides/Range_requests)
- Les en-têtes {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}}
- L'en-tête {{HTTPHeader("Content-Type")}}
- Les codes de statut {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}}
