---
title: "HTMLAnchorElement : propriété href"
short-title: href
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

La propriété **`href`** de l'interface {{domxref("HTMLAnchorElement")}} est un {{Glossary("stringifier", "convertisseur en chaîne")}} qui retourne une chaîne de caractères contenant l'URL complète et permet de modifier la valeur de `href`.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <a id="myAnchor" href="https://developer.mozilla.org/fr/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.href; // retourne 'https://developer.mozilla.org/fr/HTMLAnchorElement'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
