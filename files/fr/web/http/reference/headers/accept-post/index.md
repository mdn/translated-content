---
title: En-tête Accept-Post
short-title: Accept-Post
slug: Web/HTTP/Reference/Headers/Accept-Post
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Accept-Post`** indique quels [types de média](/fr/docs/Web/HTTP/Guides/MIME_types) sont acceptés par le serveur dans une requête {{HTTPMethod("POST")}}.
Par exemple, un serveur recevant une requête `POST` avec un type de média non pris en charge peut répondre avec {{HTTPStatus("415", "415 Unsupported Media Type")}} et un en-tête `Accept-Post` référençant un ou plusieurs types de média pris en charge.

L'en-tête doit apparaître dans les requêtes {{HTTPMethod("OPTIONS")}} vers une ressource qui prend en charge la méthode `POST`.
Un en-tête `Accept-Post` dans une réponse à n'importe quelle méthode de requête signifie implicitement qu'un `POST` est autorisé sur la ressource cible de la requête.

> [!NOTE]
> L'IANA maintient [une liste des codages de contenu officiels <sup>(angl.)</sup>](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> Les codages `bzip` et `bzip2` ne sont pas standards mais peuvent être utilisés dans certains cas, notamment pour la compatibilité avec des systèmes anciens.

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
Accept-Post: <media-type>/<subtype>
Accept-Post: <media-type>/*
Accept-Post: */*

// Liste de types de média séparés par des virgules
Accept-Post: <media-type>/<subtype>, <media-type>/<subtype>
```

> [!NOTE]
> L'en-tête `Accept-Post` définit une plage de média de la même manière que {{HTTPHeader("Accept")}}, sauf qu'il n'a pas de notion de préférence via les arguments `q` ({{Glossary("quality values", "valeurs de qualité")}}).
> Cela s'explique par le fait que `Accept-Post` est un en-tête de réponse tandis que `Accept` est un en-tête de requête.

## Directives

- `<media-type>/<subtype>`
  - : Un [type de média](/fr/docs/Web/HTTP/Guides/MIME_types) unique et précis, comme `text/html`.
- `<media-type>/*`
  - : Un type de média sans sous-type.
    Par exemple, `image/*` correspond à `image/png`, `image/svg`, `image/gif` et d'autres types d'image.
- `*/*`
  - : Tout type de média.

## Exemples

```http
Accept-Post: application/json, text/plain
Accept-Post: image/webp
Accept-Post: */*
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

La compatibilité navigateur n'est pas pertinente pour cet en-tête.
L'en-tête est envoyé par le serveur et la spécification ne définit pas le comportement du client.

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Accept-Patch")}}
- La méthode de requête {{HTTPMethod("POST")}}
