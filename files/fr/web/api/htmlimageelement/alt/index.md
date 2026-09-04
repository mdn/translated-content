---
title: "HTMLImageElement : propriété alt"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`alt`** de l'interface {{DOMxRef("HTMLImageElement")}} fournit un texte de remplacement (alternatif) à afficher lorsque l'image définie par l'élément HTML {{HTMLElement("img")}} n'est pas affichée, que ce soit à cause d'une erreur, parce que l'utilisateur·ice a désactivé le chargement des images, ou parce que l'image n'a pas encore fini de se charger. Elle reflète l'attribut de contenu [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt) de l'élément `<img>`.

Il existe des implications importantes en matière d'accessibilité lors de la fourniture d'un texte alternatif approprié, et les exigences peuvent différer selon l'objectif de l'image. Voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#rédiger_des_descriptions_alternatives_pertinentes) pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Définir l'attribut `alt`

```js
const img = new Image();
img.src = "example.png";
img.alt = "Une image d'exemple";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
