---
title: "HTMLFontElement : propriété color"
short-title: color
slug: Web/API/HTMLFontElement/color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété obsolète **`color`** de l'interface {{DOMxRef("HTMLFontElement")}} est une chaîne de caractères qui reflète l'attribut HTML [`color`](/fr/docs/Web/HTML/Reference/Elements/font#color), contenant soit un nom de couleur, soit une couleur spécifiée au format hexadécimal #RRVVBB.

Le format de la chaîne de caractères doit respecter l'une des microsyntaxes HTML suivantes (voir [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value))&nbsp;:

| Microsyntaxe             | Description                           | Exemples                  |
| ------------------------ | ------------------------------------- | ------------------------- |
| Nom de couleur valide    | _nameOfColor (insensible à la casse)_ | `Green`, `green`, `GREEN` |
| Chaîne hexadécimale      | _#RRGGBB_                             | `#008000`                 |
| RGB en valeurs décimales | _rgb(x x x) (x entre 0 et 255)_       | `rgb(0 128 0)`            |

## Valeur

Une chaîne de caractères.

Lorsqu'on lui assigne la valeur `null`, celle‑ci est convertie en chaîne vide (`""`), donc `elt.color = null` équivaut à `elt.color = ""`.

## Exemples

```js
// Supposons qu'il existe un élément <font id="f"> dans le HTML

const f = document.getElementById("f");
f.color = "green";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLFontElement")}} à laquelle elle appartient.
