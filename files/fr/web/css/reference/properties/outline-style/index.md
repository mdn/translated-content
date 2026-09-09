---
title: Propriété CSS `outline-style`
short-title: outline-style
slug: Web/CSS/Reference/Properties/outline-style
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

La propriété [CSS](/fr/docs/Web/CSS) **`outline-style`** définit le style du contour d'un élément. Un contour est une ligne tracée autour d'un élément, à l'extérieur de la bordure ({{CSSxRef("border")}}).

{{InteractiveExample("Démonstration CSS&nbsp;: outline-style")}}

```css interactive-example-choice
outline-style: none;
```

```css interactive-example-choice
outline-style: dotted;
```

```css interactive-example-choice
outline-style: solid;
```

```css interactive-example-choice
outline-style: groove;
```

```css interactive-example-choice
outline-style: inset;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un contour autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

Il est souvent plus pratique d'utiliser la propriété raccourcie {{CSSxRef("outline")}} lors de la définition de l'apparence d'un contour.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* Valeurs globales */
outline-style: inherit;
outline-style: initial;
outline-style: revert;
outline-style: revert-layer;
outline-style: unset;
```

### Valeurs

Cette propriété est définie par l'un des mots-clés suivants&nbsp;:

- `auto`
  - : Permet à l'agent utilisateur d'afficher un style de contour personnalisé.
- `none`
  - : Aucun contour n'est utilisé.
- `dotted`
  - : Le contour est une série de points.
- `dashed`
  - : Le contour est une série de segments de ligne courts.
- `solid`
  - : Le contour est une ligne unique.
- `double`
  - : Le contour est composé de deux lignes uniques. La {{CSSxRef("outline-width")}} est la somme des deux lignes et de l'espace entre elles.
- `groove`
  - : Le contour semble être gravé dans la page.
- `ridge`
  - : L'opposé de `groove`&nbsp;: le contour semble être en relief par rapport à la page.
- `inset`
  - : Le contour donne l'impression que la boîte est encastrée dans la page.
- `outset`
  - : L'opposé de `inset`&nbsp;: le contour donne l'impression que la boîte sort de la page.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le style de contour sur `auto`

La valeur `auto` indique un style de contour personnalisé, décrit dans [la spécification <sup>(angl.)</sup>](https://drafts.csswg.org/css-ui/#outline-style) comme «&nbsp;typiquement un style \[qui] est soit une valeur par défaut de l'interface utilisateur pour la plateforme, soit peut-être un style plus riche que ce qui peut être décrit en détail en CSS, par exemple, un contour à bords arrondis avec des pixels extérieurs semi-translucides qui semblent briller&nbsp;».

#### HTML

```html
<div>
  <p class="auto">Démonstration de contour</p>
</div>
```

#### CSS

```css
.auto {
  outline-style: auto; /* même résultat que "outline: auto" */
}

/* Pour rendre la démonstration plus claire */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Définir le style de contour sur `auto`")}}

### Définir le style de contour sur `dashed` et `dotted`

#### HTML

```html
<div>
  <div class="dotted">
    <p class="dashed">Démonstration de contour</p>
  </div>
</div>
```

#### CSS

```css
.dotted {
  outline-style: dotted; /* même résultat que "outline: dotted" */
}
.dashed {
  outline-style: dashed;
}

/* Pour rendre la démonstration plus claire */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Définir le style de contour sur `dashed` et `dotted`")}}

### Définir le style de contour sur `solid` et `double`

#### HTML

```html
<div>
  <div class="solid">
    <p class="double">Démonstration de contour</p>
  </div>
</div>
```

#### CSS

```css
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* Pour rendre la démonstration plus claire */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Définir le style de contour sur `solid` et `double`")}}

### Définir le style de contour sur `groove` et `ridge`

#### HTML

```html
<div>
  <div class="groove">
    <p class="ridge">Démonstration de contour</p>
  </div>
</div>
```

#### CSS

```css
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* Pour rendre la démonstration plus claire */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Définir le style de contour sur `groove` et `ridge`")}}

### Définir le style de contour sur `inset` et `outset`

#### HTML

```html
<div>
  <div class="inset">
    <p class="outset">Démonstration de contour</p>
  </div>
</div>
```

#### CSS

```css
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* Pour rendre la démonstration plus claire */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Définir le style de contour sur `inset` et `outset`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("outline")}}
- La propriété {{CSSxRef("outline-width")}}
- La propriété {{CSSxRef("outline-color")}}
