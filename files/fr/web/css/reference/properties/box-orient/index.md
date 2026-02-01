---
title: box-orient
slug: Web/CSS/Reference/Properties/box-orient
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente de la spécification. Voir la page [Utiliser les boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) pour plus d'informations à propos du standard actuel.

La propriété [CSS](/fr/docs/Web/CSS) **`box-orient`** définit si un élément organise son contenu horizontalement ou verticalement.

## Syntaxe

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

### Valeurs

- `horizontal`
  - : La boîte organise son contenu horizontalement.
- `vertical`
  - : La boîte organise son contenu verticalement.
- `inline-axis` (HTML)
  - : La boîte affiche ses enfants le long de l'axe en ligne.
- `block-axis` (HTML)
  - : La boîte affiche ses enfants le long de l'axe de bloc.

Les axes en ligne et de bloc dépendent du mode d'écriture pour l'anglais, ils correspondront, respectivement, à `horizontal` et `vertical`.

## Description

Les éléments HTML disposent par défaut leur contenu le long de l'axe en ligne. Cette propriété CSS s'appliquera uniquement aux éléments HTML pour lesquels la propriété CSS {{CSSxRef("display")}} vaut `box` ou `inline-box`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`box-orient = horizontal | vertical | inline-axis | block-axis`)}}

## Exemples

### Définir une orientation de boîte horizontale

Dans cet exemple, la propriété `box-orient` placera les deux paragraphes {{HTMLElement("p")}} sur la même ligne.

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
  display: box; /* Comme défini */

  /* Les enfants devraient s'orienter verticalement */
  -moz-box-orient: horizontal; /* Mozilla */
  -webkit-box-orient: horizontal; /* WebKit */
  box-orient: horizontal; /* Comme défini */
}
```

#### Résultat

{{EmbedLiveSample("Définir une orientation de boîte horizontale", "", 100)}}

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("box-direction")}}
- La propriété {{CSSxRef("box-pack")}}
- La propriété {{CSSxRef("box-align")}}
- La propriété {{CSSxRef("flex-direction")}}
