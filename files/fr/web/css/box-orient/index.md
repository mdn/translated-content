---
title: box-orient
slug: Web/CSS/box-orient
---

{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente de la spécification. Voir la page [Utiliser les boîtes flexibles CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) pour plus d'informations à propos du standard actuel.

La propriété [CSS](/fr/docs/Web/CSS) **`box-orient`** définit si un élément organise son contenu horizontalement ou verticalement.

```css
/* Valeurs avec un mot-clé */
box-orient: horizontal;
box-orient: vertical;
box-orient: inline-axis;
box-orient: block-axis;

/* Valeurs globales */
box-orient: inherit;
box-orient: initial;
box-orient: unset;
```

## Syntaxe

### Valeurs

- `horizontal`
  - : La boîte organise son contenu horizontalement.
- `vertical`
  - : La boîte organise son contenu verticalement.
- `inline-axis` (HTML)
  - : La boîte organise son contenu (ses éléments enfants) dans le sens de l'axe de lecture (axe <i lang="en">inline</i>).
- `block-axis` (HTML)
  - : La boîte organise son contenu (ses éléments enfants) dans le sens perpendiculaire à l'axe de lecteur (axe <i lang="en">block</i>).

Les axes en ligne et de bloc dépendent du mode d'écriture (pour l'anglais, ils correspondront, respectivement, à `horizontal` et `vertical`.

## Description

Les éléments HTML disposent par défaut leur contenu le long de l'axe en ligne. Cette propriété CSS s'appliquera uniquement aux éléments HTML pour lesquels la propriété CSS [`display`](/fr/docs/Web/CSS/display) vaut `box` ou `inline-box`.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir une orientation de boîte horizontale

Dans cet exemple, la propriété `box-orient` placera les deux sections [`<p>`](/fr/docs/Web/HTML/Element/p) sur la même ligne.

#### HTML

```html
<div class="exemple">
  <p>Je serai à gauche de mon voisin.</p>
  <p>Je serai à droite de mon voisin.</p>
</div>
```

#### CSS

```css
div.exemple {
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */
  display: box; /* Comme spécifié */

  /* Les enfants devraient s'orienter verticalement */
  -moz-box-orient: horizontal; /* Mozilla */
  -webkit-box-orient: horizontal; /* WebKit */
  box-orient: horizontal; /* Comme spécifié */
}
```

#### Résultat

{{EmbedLiveSample('', '', 100)}}

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`box-direction`](/fr/docs/Web/CSS/box-direction)
- [`box-pack`](/fr/docs/Web/CSS/box-pack)
- [`box-align`](/fr/docs/Web/CSS/box-align)
- [`flex-direction`](/fr/docs/Web/CSS/flex-direction)
