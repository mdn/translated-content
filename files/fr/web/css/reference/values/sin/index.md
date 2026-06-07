---
title: Fonction CSS `sin()`
short-title: sin()
slug: Web/CSS/Reference/Values/sin
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`sin()`** est une fonction trigonométrique qui retourne le sinus d'un nombre, qui est une valeur comprise entre `-1` et `1`. La fonction contient un seul calcul qui doit se résoudre soit en un nombre ({{CSSxRef("&lt;number&gt;")}}), soit en un angle ({{CSSxRef("angle")}}) en interprétant le résultat de l'argument comme des radians. C'est-à-dire que `sin(45deg)`, `sin(0.125turn)` et `sin(3.14159 / 4)` représentent tous la même valeur, environ `0.707`.

{{InteractiveExample("Démonstration CSS&nbsp;: sin()")}}

```css interactive-example-choice
transform: translateX(calc(cos(0deg) * 140px))
  translateY(calc(sin(0deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(90deg) * 140px))
  translateY(calc(sin(90deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(135deg) * 140px))
  translateY(calc(sin(135deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(180deg) * 140px))
  translateY(calc(sin(180deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(-45deg) * 140px))
  translateY(calc(sin(-45deg) * -140px));
```

```html interactive-example
<div class="circle">
  <span class="dot" id="example-element"></span>
</div>
```

```css interactive-example
:root {
  --radius: 140px;
  --dot-size: 10px;
}
.circle {
  display: grid;
  place-content: center;
  margin: 0 auto;
  width: calc(var(--radius) * 2);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666666;
  background-image:
    radial-gradient(black var(--dot-size), transparent var(--dot-size)),
    linear-gradient(135deg, blue, deepskyblue, lightgreen, lavender, honeydew);
}
.dot {
  display: block;
  width: var(--dot-size);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666666;
  background-color: #ff6666;
  transform: translateX(calc(cos(0deg) * var(--radius)))
    translateY(calc(sin(0deg) * var(--radius) * -1));
}
```

## Syntaxe

```css
/* Un seule valeur <angle> */
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* Un seule valeur <number> */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* Autres valeurs */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### Paramètres

La fonction `sin(angle)` n'accepte qu'une seule valeur comme paramètre.

- `angle`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}) ou en un angle ({{CSSxRef("angle")}}). Lorsqu'on définit des nombres sans unité, ils sont interprétés comme un nombre de radians, représentant un angle ({{CSSxRef("angle")}}).

### Valeur de retour

Le sinus d'un `angle` retourne toujours un nombre compris entre `−1` et `1`.

- Si `angle` est `infinity`, `-infinity` ou `NaN`, le résultat est `NaN`.
- Si `angle` est `0⁻`, le résultat est `0⁻`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Changer la taille des boîtes

Dans cet exemple, `sin(30deg)` retourne `0.5`, ce qui donne à la boîte une largeur de `50px` et une hauteur de `50px`.

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### Contrôler la durée de l'animation

Un autre cas d'utilisation est de contrôler la durée de l'animation ({{CSSxRef("animation-duration")}}), en réduisant la durée en fonction de la valeur du sinus. Dans ce cas, la durée de l'animation est de `1s`.

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("cos()")}}
- La fonction {{CSSxRef("tan()")}}
- La fonction {{CSSxRef("asin()")}}
- La fonction {{CSSxRef("acos()")}}
- La fonction {{CSSxRef("atan()")}}
- La fonction {{CSSxRef("atan2()")}}
