---
title: En-tête Age
short-title: Age
slug: Web/HTTP/Reference/Headers/Age
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Age`** indique le temps, en secondes, pendant lequel un objet est resté dans un cache proxy.

La valeur de l'en-tête est généralement proche de zéro.
Si la valeur est `0`, l'objet a probablement été récupéré depuis le serveur d'origine&nbsp;; sinon, la valeur est généralement calculée comme la différence entre la date courante du proxy et l'en-tête général {{HTTPHeader("Date")}} inclus dans la réponse HTTP.

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
Age: <delta-seconds>
```

## Directives

- `<delta-seconds>`
  - : Un entier positif indiquant le temps en secondes pendant lequel la ressource a été stockée dans un cache proxy.

## Exemple

```http
Age: 24
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Cache-Control")}}
- L'en-tête HTTP {{HTTPHeader("Expires")}}
