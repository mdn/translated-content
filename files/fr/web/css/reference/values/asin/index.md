---
title: asin()
slug: Web/CSS/Reference/Values/asin
original_slug: Web/CSS/asin
l10n:
  sourceCommit: c90f67a3864bb41ae2a3fe99c43dfbcd98268f0b
---

{{CSSRef}}{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`asin()`** est une fonction trigonométrique qui renvoie l'arc sinus d'un nombre compris entre `-1` et `1`. Cette fonction effectue un unique calcul qui renvoie le nombre correspondant de radians représentant [un angle](/fr/docs/Web/CSS/Reference/Values/angle) entre `-90deg` et `90deg`.

## Syntaxe

```css
/* Valeurs numériques */
/* Type <number> */
transform: rotate(asin(-0.2));
transform: rotate(asin(2 * 0.125));

/* Autres valeurs */
transform: rotate(asin(pi / 5));
transform: rotate(asin(e / 3));
```

### Paramètres

La fonction `asin()` prend un seul paramètre.

- `number`
  - : n nombre (une valeur de type [`<number>`](/fr/docs/Web/CSS/Reference/Values/number)) compris entre `-1` et `1`. Si la valeur fournie inférieure à `-1` ou supérieure à `1`, ou `NaN`, le résultat de la fonction sera `NaN`.

### Syntaxe formelle

{{CSSSyntax}}

## Exemple

La fonction `asin()` peut être utilisée dans les transformations angulaires, par exemple avec [`rotate()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotate), car elle renvoie une valeur de type [`<angle>`](/fr/docs/Web/CSS/Reference/Values/angle).

```html hidden
<div class="box"></div>
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
```

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}

div.box-1 {
  transform: rotate(asin(-0.2));
}

div.box-2 {
  transform: rotate(asin(2 * 0.125));
}

div.box-3 {
  transform: rotate(asin(pi / 5));
}

div.box-4 {
  transform: rotate(asin(e / 3));
}
```

{{EmbedLiveSample('', '100%', '200px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`sin`](/fr/docs/Web/CSS/sin)
- [`cos`](/fr/docs/Web/CSS/cos)
- [`tan`](/fr/docs/Web/CSS/tan)
- [`acos`](/fr/docs/Web/CSS/Reference/Values/acos)
- [`atan`](/fr/docs/Web/CSS/atan)
- [`atan2`](/fr/docs/Web/CSS/atan2)
