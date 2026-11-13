---
title: "HTMLFontElement : propriété face"
short-title: face
slug: Web/API/HTMLFontElement/face
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

La propriété obsolète **`face`** de l'interface {{DOMxRef("HTMLFontElement")}} est une chaîne de caractères qui reflète l'attribut HTML [`face`](/fr/docs/Web/HTML/Reference/Elements/font#face), contenant une liste séparée par des virgules d'un ou plusieurs noms de police.

Le texte du document, avec le style par défaut, est rendu avec la première police de la liste que le navigateur prend en charge. Si aucune des polices listées n'est installée localement, le navigateur utilise généralement la police proportionnelle ou la police à chasse fixe par défaut du système.

Le format de la chaîne de caractères doit respecter l'une des microsyntaxes HTML suivantes&nbsp;:

| Microsyntaxe                                               | Description                                                             | Exemples          |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- |
| Liste d'un ou plusieurs noms de famille de polices valides | _Une liste de noms de police devant être présents sur le système local_ | `courier,verdana` |

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Supposons qu'il existe un élément <font id="f"> dans le HTML

const f = document.getElementById("f");
f.face = "arial";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLFontElement")}} à laquelle elle appartient.
