---
title: Navigator.language
slug: Web/API/Navigator/language
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`Navigator.language`** renvoie une chaîne de caractères qui représente la langue préférée de l'utilisatrice ou de l'utilisateur. Il s'agit généralement de la langue utilisée pour l'interface utilisateur du navigateur.

## Valeur

Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString). Le format de cette chaîne de caractères est défini par [la RFC 5646, aussi connu sous le nom de balise BCP 47](https://datatracker.ietf.org/doc/html/rfc5646). Voici quelques exemples de codes de langue valides&nbsp;: `"en"`, `"en-US"`, `"fr"`, `"fr-FR"`, `"es-ES"`, etc.

On notera que Safari pour iOS, avant la version 10.2, renvoyait le code du pays en minuscules&nbsp;: `"en-us"`, `"fr-fr"`, etc.

## Exemples

```js
if (/^en\b/.test(navigator.language)) {
  choisirLangue(window.navigator.language);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`navigator.languages`](/fr/docs/Web/API/Navigator/languages)
- [`navigator`](/fr/docs/Web/API/Navigator)
