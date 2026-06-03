---
title: En-tête If-Modified-Since
short-title: If-Modified-Since
slug: Web/HTTP/Reference/Headers/If-Modified-Since
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`If-Modified-Since`** rend la requête [conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests).
Le serveur renverra la ressource demandée, avec un status {{HTTPStatus("200")}}, seulement si elle a été modifiée pour la dernière fois après la date dans l'en-tête `If-Modified-Since`.
Si la ressource n'a pas été modifiée depuis, la réponse sera un {{HTTPStatus("304")}} sans aucun contenu; le header {{HTTPHeader("Last-Modified")}} contiendra la date de la dernière modification.

À l'inverse de {{HTTPHeader("If-Unmodified-Since")}}, `If-Modified-Since` ne peut être utilisé qu'avec un {{HTTPMethod("GET")}} ou un {{HTTPMethod("HEAD")}}.
Lorsqu'il est combiné avec {{HTTPHeader("If-None-Match")}}, il est ignoré, à moins que le serveur ne supporte pas `If-None-Match`.

Le cas d'usage le plus courant est la mise à jour d'une entité cachée qui n'a pas de {{HTTPHeader("ETag")}} associé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("ETag")}}
- Les en-têtes de requête conditionnelle {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Unmodified-Since")}}
- Les codes de statut de réponse {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}
