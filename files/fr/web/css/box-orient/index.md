---
title: box-orient
slug: Web/CSS/box-orient
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-orient
---
{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (_flexbox_) et sera remplacée dans une prochaine version.

La propriété CSS **`box-orient`** définit si un élément organise son contenu horizontalement ou verticalement.

Pour plus de détails, se référer à la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) qui décrit les différentes propriétés des boîtes flexibles.

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

Ainsi, les éléments XUL {{XULElem("box")}} et {{XULElem("hbox")}} disposent leurs contenus horizontalement par défaut alors que  {{XULElem("vbox")}} organise son contenu de façon verticale par défaut.

Les éléments HTML disposent leurs contenus selon l'axe _inline_ par défaut. Cette propriété CSS ne s'applique qu'aux éléments HTML pour lesquels la propriété {{cssxref("display")}} vaut {{cssxref("box")}} ou {{cssxref("inline-box")}}.

## Syntaxe

### Valeurs

- `horizontal`
  - : La boîte organise son contenu horizontalement.
- `vertical`
  - : La boîte organise son contenu verticalement.
- `inline-axis` (HTML)
  - : La boîte organise son contenu (ses éléments-fils) dans le sens de l'axe de lecture (axe _inline_).
- `block-axis` (HTML)
  - : La boîte organise son contenu (ses éléments-fils) dans le sens perpendiculaire à l'axe de lecteur (axe _block_).

Les axes _inline_ et _block_ dépendent du mode d'écriture (pour l'anglais, ils correspondront, respectivement, à `horizontal` et `vertical`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div.exemple {
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */
  display: box; /* On utilise les boîtes */

  -moz-box-orient: horizontal; /* Mozilla */
  -webkit-box-orient: horizontal; /* WebKit */
  box-orient: horizontal; /* spécifié */
}
```

### HTML

```html
<div class="exemple">
  <p>Je serai à gauche de mon voisin.</p>
  <p>Et moi à droite de mon voisin.</p>
</div>
```

### Résultat

On aura les deux paragraphes situés côte à côte.

{{EmbedLiveSample("Exemples")}}

## Notes

Pour les éléments XUL, si l'orientation est définie avec l'attribut {{XULAttr("orient")}} cette propriété est ignorée.

## Spécifications

- [Brouillon de travail pour le module des boîtes flexibles (W3C)](https://www.w3.org/TR/css3-flexbox/) {{Note("L'état actuel de cette spécification ne reflète pas l'implémentation de Gecko ou WebKit.")}}
- [Ancienne version de la spécification.](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) {{Note("Les implémentations de WebKit et Gecko reflètent cette version de la spécification.")}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-orient")}}

## Voir aussi

- {{cssxref("box-direction")}},
- {{cssxref("box-pack")}},
- {{cssxref("box-align")}},
- {{cssxref("flex-direction")}}.
