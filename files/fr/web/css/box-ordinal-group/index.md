---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-ordinal-group
---
{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (_flexbox_) et sera remplacée dans une prochaine version.

La propriété **`box-ordinal-group`** permet d'affecter les éléments fils d'une boîtes flexible à un groupe numéroté. Pour plus de détails, se référer à la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) qui décrit les différentes propriétés des boîtes flexibles.

Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations.

```css
/* Un entier indiquant le groupe */
/* Type <integer>                */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* Global values */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

Les groupes ordinaux peuvent être utilisés avec la propriété {{cssxref("box-direction")}} afin de contrôler l'ordre dans lequel les éléments fils apparaissent dans la boîte. Lorsque [la valeur calculée](/fr/docs/Web/CSS/computed_value) de **`box-direction`** est `normal`, une boîte affichera ses éléments en commençant par le groupe dont l'ordre est le plus faible et les disposera de gauche à droite pour les boîtes horizontales et du haut vers le bas pour les boîtes verticales. Les éléments dont l'ordre est égal seront disposés dans l'ordre dans lequel ils apparaissent. Lorsque la direction est inversée, les ordres sont gérés de la même façon, les éléments apparaîtront dans l'ordre inverse.

## Syntaxe

Cette propriété se définit avec un entier positif.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

- [Brouillon de travail pour le module des boîtes flexibles (W3C)](https://www.w3.org/TR/css3-flexbox/){{Note("L'état actuel de cette spécification ne reflète pas l'implémentation de Gecko ou WebKit.")}}
- [Ancienne version de la spécification.](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/){{Note("Les implémentations de WebKit et Gecko reflètent cette version de la spécification.")}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-ordinal-group")}}

## Voir aussi

- {{cssxref("box-flex")}},
- {{cssxref("box-flex-group")}},
- {{cssxref("box-pack")}}
