---
title: "HTMLAreaElement : propriété coords"
short-title: coords
slug: Web/API/HTMLAreaElement/coords
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`coords`** de l'interface {{DOMxRef("HTMLAreaElement")}} définit les coordonnées de la forme de l'élément sous forme de liste de nombres à virgule flottante. Elle reflète l'attribut [`coords`](/fr/docs/Web/HTML/Reference/Elements/area#coords) de l'élément HTML {{HTMLElement("area")}}.

Si la propriété `shape` vaut `rect`, la forme est un rectangle et les quatre nombres séparés par des virgules de la chaîne indiquent les coordonnées des coins supérieur gauche et inférieur droit du rectangle. Par exemple, `0,0,200,20` définit les coordonnées `0,0` (coin supérieur gauche de l'image réactive) et `200,20` (200px depuis la gauche et 20px depuis le haut du coin supérieur gauche de l'image réactive).

Si la propriété `shape` vaut `circle`, les trois nombres séparés par des virgules représentent les coordonnées x et y du centre du cercle et le rayon.

Si la forme vaut `poly`, la chaîne se compose d'au moins 6 nombres séparés par des virgules représentant au moins 3 paires de coordonnées qui définissent les sommets du polygone.

Pour toutes les coordonnées, l'origine est le coin supérieur gauche de l'image de l'élément {{HTMLElement("map")}}.

## Valeur

Une chaîne de caractères composée d'une série de nombres séparés par des virgules.

## Exemples

```js
const areaElement = document.getElementById("circleArea");
console.log(areaElement.coords);
areaElement.coords = "25,25,25";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLAreaElement.shape")}}
- La propriété {{DOMxRef("HTMLAreaElement.alt")}}
- L'interface {{DOMxRef("HTMLMapElement")}}
- L'élément HTML {{HTMLElement("area")}}
- L'élément HTML {{HTMLElement("map")}}
- L'élément HTML {{HTMLElement("a")}}
