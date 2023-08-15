---
title: box-flex-group
slug: Web/CSS/box-flex-group
---

{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente de la spécification. Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) pour plus d'informations.

La propriété [CSS](/fr/docs/Web/CSS) **`box-flex-group`** permet d'affecter un élément fils de la boîte flexible à un groupe.

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

Les éléments flexibles sont affectés à des groupes. Le premier groupe sera désigné par l'indice 1 et les groupes suivants par 2, 3, et ainsi de suite. Lorsque l'espace restant dans la boîte est réparti, le moteur prend d'abord en compte les éléments du premier groupe et répartit l'espace entre les différents éléments de ce groupe selon leurs flexibilités relatives. Une fois l'espace augmenté au maximum, le moteur passe au groupe qui suit en utilisant l'espace restant et ainsi de suite. Si, une fois l'ensemble des groupes traités, il y a encore de l'espace, celui-ci est réparti grâce à la propriété [`box-pack`](/fr/docs/Web/CSS/box-pack).

Si la boîte dépasse une fois que l'espace pour l'élément fils a été calculé, l'espace est alors retiré (chaque groupe est examiné dans l'ordre et l'espace est retiré selon la flexibilité de chaque élément). Les éléments ne sont pas réduits en deçà de leurs largeurs minimales.

## Syntaxe

Cette propriété est définie avec un entier positif ([`<integer>`](/fr/docs/Web/CSS/integer)).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans la spécification originale, `box-flex-group` pouvait être utilisée afin d'affecter des enfants flexibles à différents groupes parmi lesquels répartir l'espace flexible&nbsp;:

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

Cette propriété a uniquement été prise en charge dans les navigateurs WebKit avec un préfixe. Les versions suivantes de la spécification ne contiennent pas cette propriété. La distribution de l'espace à l'intérieur d'un conteneur flexible est désormais gérée par [`flex-basis`](/fr/docs/Web/CSS/flex-basis), [`flex-grow`](/fr/docs/Web/CSS/flex-grow), et [`flex-shrink`](/fr/docs/Web/CSS/flex-shrink).

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`box-flex`](/fr/docs/Web/CSS/box-flex)
- [`box-ordinal-group`](/fr/docs/Web/CSS/box-ordinal-group)
- [`box-pack`](/fr/docs/Web/CSS/box-pack)
