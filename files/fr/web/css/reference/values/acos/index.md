---
title: acos()
slug: Web/CSS/Reference/Values/acos
original_slug: Web/CSS/acos
l10n:
  sourceCommit: 70ee2d938e88ea59098a51076be5acc0a0920319
---

{{CSSRef}}{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`acos()`** est une fonction trigonométrique qui renvoie le cosinus inverse d'un nombre compris entre `-1` et `1`. Cette fonction effectue un unique calcul qui renvoie le nombre correspondant de radians représentant [un angle](/fr/docs/Web/CSS/Reference/Values/angle) entre `0deg` et `180deg`.

## Syntaxe

```css
/* Valeurs numériques */
/* Type <number> */
transform: rotate(acos(-0.2));
transform: rotate(acos(2 * 0.125));

/* Autres valeurs */
transform: rotate(acos(pi / 5));
transform: rotate(acos(e / 3));
```

### Paramètres

La fonction `acos()` prend un seul paramètre.

- `number`
  - : Un nombre (une valeur de type [`<number>`](/fr/docs/Web/CSS/Reference/Values/number)) compris entre `-1` et `1`. Si la valeur fournie est `1`, le résultat de la fonction sera `0`.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

La fonction `acos()` peut être utilisée dans les transformations angulaires, par exemple avec [`rotate()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotate), car elle renvoie une valeur de type [`<angle>`](/fr/docs/Web/CSS/Reference/Values/angle).

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
  transform: rotate(acos(-0.2));
}

div.box-2 {
  transform: rotate(acos(2 * 0.125));
}

div.box-3 {
  transform: rotate(acos(pi / 5));
}

div.box-4 {
  transform: rotate(acos(e / 3));
}
```

{{EmbedLiveSample('', '100%', '200px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`sin()`](/fr/docs/Web/CSS/sin)
- [`cos()`](/fr/docs/Web/CSS/cos)
- [`tan()`](/fr/docs/Web/CSS/tan)
- [`asin()`](/fr/docs/Web/CSS/Reference/Values/asin)
- [`atan()`](/fr/docs/Web/CSS/atan)
- [`atan2()`](/fr/docs/Web/CSS/atan2)
