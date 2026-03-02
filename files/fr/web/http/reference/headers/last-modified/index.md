---
title: En-tête Last-Modified
short-title: Last-Modified
slug: Web/HTTP/Reference/Headers/Last-Modified
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Last-Modified`** contient la date et l'heure auxquelles le serveur d'origine estime que la ressource a été modifiée pour la dernière fois.
Il est utilisé comme validateur dans les [requêtes conditionnelles](/fr/docs/Web/HTTP/Guides/Conditional_requests) ({{HTTPHeader("If-Modified-Since")}} ou {{HTTPHeader("If-Unmodified-Since")}}) pour déterminer si une ressource demandée est identique à celle déjà stockée par le client.
Il est moins précis qu'un {{HTTPHeader("ETag")}} pour déterminer le contenu d'un fichier, mais peut être utilisé comme mécanisme de rechange si les ETags ne sont pas disponibles.

`Last-Modified` est également utilisé par les [robots d'indexation](/fr/docs/Glossary/Crawler) pour ajuster la fréquence d'exploration, par les navigateurs pour la [mise en cache heuristique](/fr/docs/Web/HTTP/Guides/Caching#mise_en_cache_heuristique), et par les systèmes de gestion de contenu (CMS) pour afficher la date de dernière modification du contenu.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}, {{Glossary("Representation header", "en-tête de représentation")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé CORS")}}
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- `<day-name>`
  - : L'un des mots `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` ou `Sun` (sensible à la casse).
- `<day>`
  - : Numéro de jour à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;23&nbsp;».
- `<month>`
  - : L'un des mots `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (sensible à la casse).
- `<year>`
  - : Numéro d'année à 4 chiffres, par exemple «&nbsp;1990&nbsp;» ou «&nbsp;2018&nbsp;».
- `<hour>`
  - : Numéro d'heure à 2 chiffres, par exemple «&nbsp;09&nbsp;» ou «&nbsp;23&nbsp;».
- `<minute>`
  - : Numéro de minute à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- `<second>`
  - : Numéro de seconde à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- GMT
  - : Temps sur le Méridien de Greenwich. Les dates HTTP sont toujours exprimées en GMT, jamais en heure locale.

## Exemples

```http
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Etag")}}
- Le guide [des requêtes conditionnelles HTTP](/fr/docs/Web/HTTP/Guides/Conditional_requests)
- Les en-têtes de requête conditionnelle {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}}
- Les codes de statut de réponse {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}
