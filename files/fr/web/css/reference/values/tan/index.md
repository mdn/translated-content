---
title: Fonction CSS `tan()`
short-title: tan()
slug: Web/CSS/Reference/Values/tan
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`tan()`** est une fonction trigonométrique qui renvoie la tangente d'un nombre, qui est une valeur comprise entre `−infinity` et `infinity`. La fonction contient un calcul unique qui doit se résoudre soit à un nombre ({{CSSxRef("&lt;number&gt;")}}), soit à un angle ({{CSSxRef("angle")}}) en interprétant le résultat de l'argument comme des radians.

## Syntaxe

```css
/* Valeurs unique de type <angle> */
width: calc(100px * tan(45deg));
width: calc(100px * tan(0.125turn));
width: calc(100px * tan(0.785398163rad));

/* Valeurs unique de type <number> */
width: calc(100px * tan(0.5773502));
width: calc(100px * tan(1.732 - 1));

/* Autres valeurs */
width: calc(100px * tan(pi / 3));
width: calc(100px * tan(e));
```

### Paramètres

La fonction `tan(angle)` n'accepte qu'une seule valeur comme paramètre.

- `angle`
  - : Un calcul qui se résout à un nombre ({{CSSxRef("&lt;number&gt;")}}) ou à un angle ({{CSSxRef("angle")}}). Lors de la spécification de nombres sans unité, ils sont interprétés comme un nombre de radians, représentant un angle ({{CSSxRef("angle")}}).

### Valeur de retour

La tangente d'un `angle` retourne toujours un nombre compris entre `−∞` et `+∞`.

- Si `angle` est `infinity`, `-infinity` ou `NaN`, le résultat est `NaN`.
- Si `angle` est `0⁻`, le résultat est `0⁻`.
- Si `angle` est l'une des valeurs d'asymptote (comme `90deg`, `270deg`, etc.), le résultat est _explicitement indéfini_. Les auteur·ice·s _ne doivent pas_ se fier à ce que `tan()` retourne une valeur particulière pour ces entrées.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Dessiner des parallélogrammes

La fonction `tan()` peut être utilisée pour dessiner un parallélogramme avec une boîte englobante donnée.

#### HTML

```html
<div class="parallelogram"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
.parallelogram {
  --w: 400;
  --h: 200;
  --angle: 30deg;
  position: relative;
  width: calc(1px * var(--w));
  height: calc(1px * var(--h));
}
.parallelogram::before {
  content: "";
  position: absolute;
  width: calc(100% - 100% * var(--h) / var(--w) * tan(var(--angle)));
  height: 100%;
  transform-origin: 0 100%;
  transform: skewX(calc(0deg - var(--angle)));
  background-color: red;
}
```

#### Résultat

{{EmbedLiveSample("Dessiner des parallélogrammes", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("sin()")}}
- La fonction {{CSSxRef("cos()")}}
- La fonction {{CSSxRef("asin()")}}
- La fonction {{CSSxRef("acos()")}}
- La fonction {{CSSxRef("atan()")}}
- La fonction {{CSSxRef("atan2()")}}
- [Utiliser l'arithmétique typée CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
