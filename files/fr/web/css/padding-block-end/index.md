---
title: padding-block-end
slug: Web/CSS/padding-block-end
l10n:
  sourceCommit: aa86e510dafd23a40de2fed7c929c8b3118f8620
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`padding-block-end`** définit la fin logique de la zone de remplissage d'un élément de bloc. Cette propriété logique est traduite en une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte.

{{EmbedInteractiveExample("pages/css/padding-block-end.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-block-end: 10px; /* Longueur absolue */
padding-block-end: 1em; /* Longueur relative à la taille du texte */

/* Valeurs de proportions */
/* Type <percentage>      */
padding-block-end: 5%; /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-block-end: inherit;
padding-block-end: initial;
padding-block-end: revert;
padding-block-end: revert-layer;
padding-block-end: unset;
```

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/length)
  - : La taille du remplissage exprimée avec une valeur absolue. Cette valeur ne peut être négative.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : La taille du remplissage exprimée en pourcentage, relatif à la taille du [bloc englobant](/fr/docs/Web/CSS/Containing_block) sur l'axe en ligne (physiquement, cela correspond à la largeur pour les sens d'écriture horizontaux (voir [`writing-mode`](/fr/docs/Web/CSS/writing-mode))). Cette valeur ne peut être négative.

## Description

La propriété `padding-block-end` est définie dans la spécification comme prenant les mêmes valeurs que [`padding-top`](/fr/docs/Web/CSS/padding-top). Toutefois, il s'agit d'une propriété logique qui correspond à la propriété [`padding-top`](/fr/docs/Web/CSS/padding-top), [`padding-right`](/fr/docs/Web/CSS/padding-right), [`padding-bottom`](/fr/docs/Web/CSS/padding-bottom) ou [`padding-left`](/fr/docs/Web/CSS/padding-left) selon les valeurs qui sont utilisées pour [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction) et [`text-orientation`](/fr/docs/Web/CSS/text-orientation).

Elle est à rapprocher des propriétés [`padding-block-start`](/fr/docs/Web/CSS/padding-block-start), [`padding-inline-start`](/fr/docs/Web/CSS/padding-inline-start) et [`padding-inline-end`](/fr/docs/Web/CSS/padding-inline-end) qui définissent les autres écarts de remplissage logiques d'un élément.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir la fin du remplissage sur l'axe de bloc pour un texte vertical

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
  padding-block-end: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("définir_la_fin_du_remplissage_sur_laxe_de_bloc_pour_un_texte_vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les propriétés et valeurs logiques en CSS](/fr/docs/Web/CSS/CSS_logical_properties_and_values)
- Les propriétés physiques correspondantes&nbsp;:
  - [`padding-top`](/fr/docs/Web/CSS/padding-top)
  - [`padding-right`](/fr/docs/Web/CSS/padding-right)
  - [`padding-bottom`](/fr/docs/Web/CSS/padding-bottom)
  - [`padding-left`](/fr/docs/Web/CSS/padding-left)
- [`writing-mode`](/fr/docs/Web/CSS/writing-mode)
- [`direction`](/fr/docs/Web/CSS/direction)
- [`text-orientation`](/fr/docs/Web/CSS/text-orientation)
