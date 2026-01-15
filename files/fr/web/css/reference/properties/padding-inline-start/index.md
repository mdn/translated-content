---
title: padding-inline-start
slug: Web/CSS/Reference/Properties/padding-inline-start
original_slug: Web/CSS/padding-inline-start
---

{{CSSRef}}

La propriété **`padding-inline-start`** définit le décalage avec le début de la zone de remplissage d'un élément selon le mode d'écriture, la direction et l'orientation du texte.

{{InteractiveExample("CSS Demo: padding-inline-start")}}

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline-start: 5em;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-inline-start: 10px; /* Une longueur absolue */
padding-inline-start: 1em; /* Relatif à la taille du texte */

/* Valeurs de proportions */
/* Type <percentage>      */
padding-inline-start: 5%; /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: unset;
```

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/Reference/Values/length)
  - : La taille de la zone de remplissage exprimée de façon absolue. Les valeurs négatives sont interdites.
- [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage)
  - : La taille de la zone de remplissage exprimée de façon relative à la _taille en ligne_ (<i lang="en">inline</i> en anglais) du bloc englobant. Les valeurs négatives sont interdites.

## Description

Selon sa définition dans la spécification, la propriété `padding-inline-start` peut prendre les mêmes valeurs que la propriété [`padding-top`](/fr/docs/Web/CSS/Reference/Properties/padding-top). Toutefois, elle peut en réalité correspondre à la propriété physique [`padding-top`](/fr/docs/Web/CSS/Reference/Properties/padding-top), [`padding-right`](/fr/docs/Web/CSS/Reference/Properties/padding-right) ou [`padding-left`](/fr/docs/Web/CSS/Reference/Properties/padding-left) selon les valeurs définies pour [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode), [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction) et [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation).

Les autres parties du remplissage sont définies grâce aux propriétés [`padding-block-start`](/fr/docs/Web/CSS/Reference/Properties/padding-block-start), [`padding-block-end`](/fr/docs/Web/CSS/Reference/Properties/padding-block-end) et [`padding-inline-end`](/fr/docs/Web/CSS/Reference/Properties/padding-inline-end).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définition de padding-inline-start avec du texte vertical

#### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;:
  - [`padding-top`](/fr/docs/Web/CSS/Reference/Properties/padding-top)
  - [`padding-right`](/fr/docs/Web/CSS/Reference/Properties/padding-right)
  - [`padding-bottom`](/fr/docs/Web/CSS/Reference/Properties/padding-bottom)
  - [`padding-left`](/fr/docs/Web/CSS/Reference/Properties/padding-left)

- [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode)
- [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction)
- [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation)
