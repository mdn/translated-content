---
title: "HTMLAreaElement : propriété pathname"
short-title: pathname
slug: Web/API/HTMLAreaElement/pathname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`pathname`** est une chaîne de caractères contenant un `'/'` initial suivi du chemin de l'URL, sans inclure la chaîne de requête ni le fragment (ou une chaîne vide s'il n'y a pas de chemin).

Le chemin est {{Glossary("Percent-encoding", "encodé en pourcentage")}} lors de l'écriture, mais n'est pas décodé lors de la lecture.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <area id="myArea" href="/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.pathname; // retourne '/fr/docs/Web/API/HTMLAreaElement'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
