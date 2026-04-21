---
title: En-tête Accept-Patch
short-title: Accept-Patch
slug: Web/HTTP/Reference/Headers/Accept-Patch
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Accept-Patch`** indique quels [types de média](/fr/docs/Web/HTTP/Guides/MIME_types) le serveur est capable de comprendre dans une requête {{HTTPMethod("PATCH")}}.
Par exemple, un serveur recevant une requête `PATCH` avec un type de média non pris en charge peut répondre avec {{HTTPStatus("415", "415 Unsupported Media Type")}} et un en-tête `Accept-Patch` référençant un ou plusieurs types de média pris en charge.

L'en-tête doit apparaître dans les requêtes {{HTTPMethod("OPTIONS")}} vers une ressource qui prend en charge la méthode `PATCH`.
Un en-tête `Accept-Patch` dans une réponse à n'importe quelle méthode de requête signifie implicitement qu'un `PATCH` est autorisé sur la ressource cible de la requête.

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
Accept-Patch: <media-type>/<subtype>
Accept-Patch: <media-type>/*
Accept-Patch: */*

// Liste de types de média séparés par des virgules
Accept-Patch: <media-type>/<subtype>, <media-type>/<subtype>
```

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
Accept-Patch: application/json
Accept-Patch: application/json, text/plain
Accept-Patch: text/plain;charset=utf-8
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

La compatibilité navigateur n'est pas pertinente pour cet en-tête.
Le serveur envoie l'en-tête, et la spécification ne définit pas le comportement du client.

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Accept-Post")}}
- La réponse {{HTTPStatus("415", "415 Unsupported Media Type")}}
- La méthode de requête {{HTTPMethod("PATCH")}}
