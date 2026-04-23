---
title: En-tête Date
short-title: Date
slug: Web/HTTP/Reference/Headers/Date
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} et {{Glossary("response header", "de réponse")}} HTTP **`Date`** contient la date et l'heure auxquelles le message a été créé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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

### Réponse avec un en-tête `Date`

Le message HTTP suivant est une réponse réussie avec le statut `200`, contenant un en-tête `Date` indiquant l'heure à laquelle le message a été créé.
Les autres en-têtes sont omis pour plus de clarté&nbsp;:

```http
HTTP/1.1 200
Content-Type: text/html
Date: Tue, 29 Oct 2024 16:56:32 GMT

<html lang="fr" …
```

### Essayer de définir la valeur du champ en JavaScript

L'en-tête `Date` est un {{Glossary("Forbidden request header", "En-tête de requête interdit")}}, donc ce code ne peut pas définir la valeur du champ `Date` du message&nbsp;:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Age")}}
