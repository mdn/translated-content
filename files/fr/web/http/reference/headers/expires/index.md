---
title: En-tête Expires
short-title: Expires
slug: Web/HTTP/Reference/Headers/Expires
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Expires`** contient la date/heure après laquelle la réponse est considérée comme expirée dans le contexte de la [mise en cache HTTP](/fr/docs/Web/HTTP/Guides/Caching).

La valeur `0` est utilisée pour représenter une date dans le passé, indiquant que la ressource a déjà expiré.

> [!NOTE]
> S'il y a un en-tête {{HTTPHeader("Cache-Control")}} avec la directive `max-age` ou `s-maxage` dans la réponse, l'en-tête `Expires` est ignoré.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
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
Expires: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- `<day-name>`
  - : L'un des mots `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` ou `Sun` (sensible à la casse).
- `<day>`
  - : Numéro de jour à 2 chiffres, par ex. «&nbsp;04&nbsp;» ou «&nbsp;23&nbsp;».
- `<month>`
  - : L'un des mots `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (sensible à la casse).
- `<year>`
  - : Numéro d'année à 4 chiffres, par exemple «&nbsp;1990&nbsp;» ou «&nbsp;2018&nbsp;».
- `<hour>`
  - : Numéro d'heure à 2 chiffres, par exemple «&nbsp;09&nbsp;» ou «&nbsp;23&nbsp;».
- `<minute>`
  - : Numéro d'heure à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- `<second>`
  - : Numéro de seconde à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- GMT
  - : Temps sur le Méridien de Greenwich. Les dates HTTP sont toujours exprimées en GMT, jamais en heure locale.

## Exemples

```http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [de mise en cache HTTP](/fr/docs/Web/HTTP/Guides/Caching)
- L'en-tête {{HTTPHeader("Cache-Control")}}
- L'en-tête {{HTTPHeader("Age")}}
