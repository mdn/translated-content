---
title: Fonction CSS `exp()`
short-title: exp()
slug: Web/CSS/Reference/Values/exp
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`exp()`** est une fonction exponentielle qui prend un nombre en argument et retourne la constante mathématique `e` élevée à la puissance du nombre donné.

La constante mathématique [`e`](<https://fr.wikipedia.org/wiki/E_(nombre)>) est la base des logarithmes naturels, et est approximativement `2,718281828459045`.

La fonction `exp(number)` contient un calcul qui retourne la même valeur que {{CSSxRef("pow", "pow(e, number)")}}.

## Syntaxe

```css
/* Valeur de type <number> */
width: calc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36.8px */
width: calc(100px * exp(0)); /* 100px * 1 = 100px */
width: calc(100px * exp(1)); /* 100px * 2.718281828459045 = 271.8px */
```

### Paramètres

La fonction `exp(number)` n'accepte qu'une seule valeur comme paramètre.

- `number`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}). Représente la valeur à élever à la puissance de `e`.

### Valeur de retour

Retourne un nombre ({{CSSxRef("&lt;number&gt;")}}) non négatif représentant e<sup>nombre</sup>, qui est le résultat du calcul de `e` élevé à la puissance du nombre (`number`).

- Si `number` est `-Infinity`, les résultat est `0`.
- Si `number` est `0`, le résultat est `1`.
- Si `number` est `1`, le résultat est `e` (c'est-à-dire `2.718281828459045`).
- Si `number` est `Infinity`, le résultat est `Infinity`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Faire pivoter des éléments

La fonction `exp()` peut être utilisée pour faire pivoter ({{CSSxRef("transform-function/rotate", "rotate")}}) des éléments, car elle retourne un nombre ({{CSSxRef("&lt;number&gt;")}}).

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
```

#### CSS

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
  transform: rotate(calc(1turn * exp(-1))); /* 0.3678794411714423turn */
}
div.box-2 {
  transform: rotate(calc(1turn * exp(-0.75))); /* 0.4723665527410147turn */
}
div.box-3 {
  transform: rotate(calc(1turn * exp(-0.5))); /* 0.6065306597126334turn */
}
div.box-4 {
  transform: rotate(calc(1turn * exp(-0.25))); /* 0.7788007830714049turn */
}
div.box-5 {
  transform: rotate(calc(1turn * exp(0))); /* 1turn */
}
```

#### Résultat

{{EmbedLiveSample("Faire pivoter des éléments", "100%", 200)}}

### Redimensionner les titres selon un ratio fixe

La fonction `exp()` peut être utile pour des stratégies comme l'échelle modulaire CSS, qui relie toutes les tailles de police d'une page entre elles par un ratio fixe.

#### HTML

```html
<h1>En-tête 1</h1>
<h2>En-tête 2</h2>
<h3>En-tête 3</h3>
<h4>En-tête 4</h4>
<h5>En-tête 5</h5>
<h6>En-tête 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * exp(1.25)); /* 3.4903429574618414rem */
}
h2 {
  font-size: calc(1rem * exp(1)); /* 2.718281828459045rem */
}
h3 {
  font-size: calc(1rem * exp(0.75)); /* 2.117000016612675rem */
}
h4 {
  font-size: calc(1rem * exp(0.5)); /* 1.6487212707001282rem */
}
h5 {
  font-size: calc(1rem * exp(0.25)); /* 1.2840254166877414rem */
}
h6 {
  font-size: calc(1rem * exp(0)); /* 1rem */
}
```

#### Résultat

{{EmbedLiveSample("Redimensionner les titres selon un ratio fixe", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("pow()")}}
- La fonction {{CSSxRef("sqrt()")}}
- La fonction {{CSSxRef("hypot()")}}
- La fonction {{CSSxRef("log()")}}
