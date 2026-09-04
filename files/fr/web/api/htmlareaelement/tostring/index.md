---
title: "HTMLAreaElement : méthode toString()"
short-title: toString()
slug: Web/API/HTMLAreaElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{APIRef("URL API")}}

La méthode de {{Glossary("stringifier", "conversion en chaîne de caractères")}} **`toString()`** retourne une chaîne de caractères contenant l'URL complète. Il s'agit d'une version en lecture seule de {{DOMxRef("HTMLAreaElement.href")}}.

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères contenant l'URL complète de l'élément.

## Exemples

### Appel de `toString` sur un élément `area`

```js
// Un élément <area id="myArea" href="/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.toString(); // retourne 'https://developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
