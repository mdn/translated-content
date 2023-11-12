---
title: Intl.Locale.prototype.textInfo
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.textInfo`** est un accesseur qui renvoie le sens d'écriture horizontal&nbsp;: `ltr` (pour gauche à droite) ou `rtl` (pour droite à gauche) pour la locale portée par l'instance de `Locale`.

## Description

Renvoie les informations de texte associées à la locale courante selon [les éléments de disposition UTS 35](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements).

## Exemples

### Obtenir les informations textuelles d'une locale

```js
let ar = new Intl.Locale("ar");
console.log(ar.textInfo); // affiche { direction: "rtl" }
console.log(ar.textInfo.direction); // affiche "rtl"
```

```js
let es = new Intl.Locale("es");
console.log(es.textInfo); // affiche { direction: "ltr" }
console.log(es.textInfo.direction); // affiche "ltr"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
