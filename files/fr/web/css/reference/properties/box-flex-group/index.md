---
title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente de la spécification. Voir la page [Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) pour plus d'informations.

La propriété [CSS](/fr/docs/Web/CSS) **`box-flex-group`** permet d'affecter un élément fils de la boîte flexible à un groupe.

Les éléments flexibles sont affectés à des groupes. Le premier groupe sera désigné par l'indice 1 et les groupes suivants par 2, 3, et ainsi de suite. Lorsque l'espace restant dans la boîte est réparti, le moteur prend d'abord en compte les éléments du premier groupe et répartit l'espace entre les différents éléments de ce groupe selon leurs flexibilités relatives. Une fois l'espace augmenté au maximum, le moteur passe au groupe qui suit en utilisant l'espace restant et ainsi de suite. Si, une fois l'ensemble des groupes traités, il y a encore de l'espace, celui-ci est réparti grâce à la propriété {{CSSxRef("box-pack")}}.

Si la boîte dépasse une fois que l'espace pour l'élément fils a été calculé, l'espace est alors retiré (chaque groupe est examiné dans l'ordre et l'espace est retiré selon la flexibilité de chaque élément). Les éléments ne sont pas réduits en deçà de leurs largeurs minimales.

## Syntaxe

```css
/* Valeur de type <integer> */
box-flex-group: 1;
box-flex-group: 5;

/* Valeurs globales */
box-flex-group: inherit;
box-flex-group: initial;
box-flex-group: unset;
```

Cette propriété est définie avec un entier positif ({{CSSxRef("&lt;integer&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`box-flex-group = <integer>`)}}

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

Cette propriété a uniquement été prise en charge dans les navigateurs WebKit avec un préfixe. Les versions suivantes de la spécification ne contiennent pas cette propriété. La distribution de l'espace à l'intérieur d'un conteneur flexible est désormais gérée par {{CSSxRef("flex-basis")}}, {{CSSxRef("flex-grow")}} et {{CSSxRef("flex-shrink")}}.

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flex")}}
- La propriété {{CSSxRef("flex-basis")}}
- La propriété {{CSSxRef("flex-grow")}}
- La propriété {{CSSxRef("flex-shrink")}}
