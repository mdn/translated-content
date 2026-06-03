---
title: "HTMLAnchorElement : propriété pathname"
short-title: pathname
slug: Web/API/HTMLAnchorElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

La propriété **`pathname`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères commençant par `'/'` suivie du chemin de l'URL, sans la chaîne de requête ni le fragment (ou une chaîne vide s'il n'y a pas de chemin).

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <a id="myAnchor" href="/fr/docs/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.pathname; // retourne '/fr/docs/HTMLAnchorElement'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
