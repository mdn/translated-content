---
title: Navigator.languages
slug: Web/API/Navigator/languages
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La propriété en lecture seule **`Navigator.languages`** renvoie un tableau de chaînes de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qui représente les langues préférées de l'utilisatrice ou de l'utilisateur. Les langues sont représentées au format défini par [la RFC 5646, aussi connu sous le nom de balise BCP 47](https://datatracker.ietf.org/doc/html/rfc5646). Les éléments du tableau sont triés par ordre de préférence, la langue préférée étant située en première.

La valeur de [`navigator.language`](/fr/docs/Web/API/Navigator/language) correspond au premier élément du tableau.

Lorsque les langues préférées sont modifiées, la valeur de cette propriété change et un évènement [`languagechange`](/fr/docs/Web/API/Window/languagechange_event) est déclenché sur l'objet [`Window`](/fr/docs/Web/API/Window).

Pour chaque requête HTTP du navigateur, l'en-tête HTTP `Accept-Language` utilise la même valeur que `navigator.languages` si on omet les champs de valeurs de qualité (`qvalues`) (par exemple `en-US;q=0.8`).

## Valeur

Un tableau de chaînes de caractères.

## Exemples

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Navigator.language`](/fr/docs/Web/API/Navigator/language)
- [`Navigator`](/fr/docs/Web/API/Navigator)
- L'évènement [`languagechange`](/fr/docs/Web/API/Window/languagechange_event)
