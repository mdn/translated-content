---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
---

{{CSSRef}}

La propriété **`padding-inline-start`** définit le décalage avec le début de la zone de remplissage d'un élément selon le mode d'écriture, la direction et l'orientation du texte.

{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}

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

- [`<length>`](/fr/docs/Web/CSS/length)
  - : La taille de la zone de remplissage exprimée de façon absolue. Les valeurs négatives sont interdites.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : La taille de la zone de remplissage exprimée de façon relative à la _taille en ligne_ (<i lang="en">inline</i> en anglais) du bloc englobant. Les valeurs négatives sont interdites.

## Description

Selon sa définition dans la spécification, la propriété `padding-inline-start` peut prendre les mêmes valeurs que la propriété [`padding-top`](/fr/docs/Web/CSS/padding-top). Toutefois, elle peut en réalité correspondre à la propriété physique [`padding-top`](/fr/docs/Web/CSS/padding-top), [`padding-right`](/fr/docs/Web/CSS/padding-right) ou [`padding-left`](/fr/docs/Web/CSS/padding-left) selon les valeurs définies pour [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction) et [`text-orientation`](/fr/docs/Web/CSS/text-orientation).

Les autres parties du remplissage sont définies grâce aux propriétés [`padding-block-start`](/fr/docs/Web/CSS/padding-block-start), [`padding-block-end`](/fr/docs/Web/CSS/padding-block-end) et [`padding-inline-end`](/fr/docs/Web/CSS/padding-inline-end).

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

  - [`padding-top`](/fr/docs/Web/CSS/padding-top)
  - [`padding-right`](/fr/docs/Web/CSS/padding-right)
  - [`padding-bottom`](/fr/docs/Web/CSS/padding-bottom)
  - [`padding-left`](/fr/docs/Web/CSS/padding-left)

- [`writing-mode`](/fr/docs/Web/CSS/writing-mode)
- [`direction`](/fr/docs/Web/CSS/direction)
- [`text-orientation`](/fr/docs/Web/CSS/text-orientation)
