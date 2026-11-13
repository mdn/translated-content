---
title: Fonction CSS `cos()`
short-title: cos()
slug: Web/CSS/Reference/Values/cos
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`cos()`** est une fonction trigonométrique qui retourne le cosinus d'un nombre, qui est une valeur comprise entre `-1` et `1`. La fonction contient un seul calcul qui doit se résoudre soit en un nombre ({{CSSxRef("&lt;number&gt;")}}), soit en un angle ({{CSSxRef("&lt;angle&gt;")}}) en interprétant le résultat de l'argument comme des radians. Ainsi, `cos(45deg)`, `cos(0.125turn)` et `cos(3.14159 / 4)` représentent tous la même valeur, environ `0.707`.

{{InteractiveExample("Démonstration CSS&nbsp;: cos()")}}

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
/* Valeurs <angle> uniques */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* Valeurs <number> uniques */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* Autres valeurs */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));
```

### Paramètres

La fonction `cos(angle)` n'accepte qu'une seule valeur comme paramètre.

- `angle`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}) ou un angle ({{CSSxRef("angle")}}). Lors de la spécification de nombres sans unité, ils sont interprétés comme un nombre de radians, représentant un angle ({{CSSxRef("angle")}}).

### Valeur de retour

Le cosinus d'un `angle` renverra toujours un nombre compris entre `−1` et `1`.

- Si `angle` est `infinity`, `-infinity` ou `NaN`, le résultat est `NaN`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Conserver la taille d'une boîte pivotée

La fonction `cos()` peut être utilisée pour conserver la taille d'une boîte pivotée.

Lorsque l'élément est pivoté en utilisant {{CSSxRef("transform-function/rotate", "rotate()")}}, il dépasse sa taille initiale. Pour corriger cela, nous utilisons `cos()` pour mettre à jour la taille de l'élément.

Par exemple, si vous faites pivoter un carré de `100px`/`100px` de `45deg`, le losange qu'il crée est plus large et plus haut que le carré original. Pour réduire le losange dans la boîte allouée pour le carré original, vous devez réduire le losange en utilisant cette formule&nbsp;: `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. Vous devez également ajuster le {{CSSxRef("transform-origin")}} et ajouter {{CSSxRef("transform-function/translate", "translate()")}} pour corriger la position&nbsp;:

#### HTML

```html
<div class="carre-original"></div>
<div class="diamand-pivote"></div>
<div class="diamand-pivote-redimensionne"></div>
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
div.carre-original {
  width: 100px;
  height: 100px;
  background-color: blue;
}
div.diamand-pivote {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);
}
div.diamand-pivote-redimensionne {
  width: calc(100px * cos(45deg));
  height: calc(100px * cos(45deg));
  margin: calc(100px / 4 * cos(45deg));
  transform: rotate(45deg);
  transform-origin: center;
  background-color: green;
}
```

#### Résultat

{{EmbedLiveSample("Conserver la taille d'une boîte pivotée", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("sin()")}}
- La fonction {{CSSxRef("tan()")}}
- La fonction {{CSSxRef("asin()")}}
- La fonction {{CSSxRef("acos()")}}
- La fonction {{CSSxRef("atan()")}}
- La fonction {{CSSxRef("atan2()")}}
