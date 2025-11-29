---
title: "HTMLAreaElement : propriété href"
short-title: href
slug: Web/API/HTMLAreaElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

La propriété **`href`** est un {{Glossary("stringifier", "convertisseur en chaîne")}} qui retourne une chaîne de caractères contenant l'URL complète et permet de mettre à jour le `href`.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <area id="myArea" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.href; // retourne 'https://developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
