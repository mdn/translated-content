---
title: box-flex-group
slug: Web/CSS/box-flex-group
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-flex-group
---
{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (_flexbox_) et sera remplacée dans une prochaine version.

Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations.

La propriété **`box-flex-group`** permet d'affecter un élément fils de la boîte flexible à un groupe. Pour plus de détails, se référer à la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) qui décrit les différentes propriétés des boîtes flexibles.

```css
/* Un entier désignant le groupe */
/* Type <integer>                */
box-flex-group: 1;
box-flex-group: 5;

/* Valeurs globales */
box-flex-group: inherit;
box-flex-group: initial;
box-flex-group: unset;
```

Les éléments flexibles sont affectés à des groupes. Le premier groupe sera désigné par l'indice 1 et les groupes suivants par 2, 3, et ainsi de suite. Lorsque l'espace restant dans la boîte est réparti, le moteur prend d'abord en compte les éléments du premier groupe et répartit l'espace entre les différents éléments de ce groupe selon leurs flexibilités relatives. Une fois l'espace augmenté au maximum, le moteur passe au groupe qui suit en utilisant l'espace restant et ainsi de suite. Si, une fois l'ensemble des groupes traités, il y a encore de l'espace, celui-ci est réparti grâce à la propriété {{cssxref("box-pack")}}.

Si la boîte dépasse une fois que l'espace pour l'élément fils a été calculé, l'espace est alors retiré (chaque groupe est examiné dans l'ordre et l'espace est retiré selon la flexibilité de chaque élément). Les éléments ne sont pas réduits en deçà de leurs largeurs minimales.

## Syntaxe

Cette propriété est définie avec un entier positif.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

- [Brouillon de travail pour le module des boîtes flexibles (W3C)](https://www.w3.org/TR/css3-flexbox/) {{Note("L'état actuel de cette spécification ne reflète pas l'implémentation de Gecko ou WebKit.")}}
- [Ancienne version de la spécification.](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) {{Note("Les implémentations de WebKit et Gecko reflètent cette version de la spécification.")}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-flex-group")}}

## Voir aussi

- {{cssxref("box-flex")}},
- {{cssxref("box-ordinal-group")}},
- {{cssxref("box-pack")}}.
