---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
---

{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente de la spécification. Voir la page [Utiliser les boîtes flexibles CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) pour plus d'informations à propos du standard actuel.

La propriété [CSS](/fr/docs/Web/CSS) **`box-ordinal-group`** permet d'affecter les éléments fils d'une boîte flexible à un groupe numéroté.

```css
/* Un entier indiquant le groupe */
/* Type <integer>                */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* Valeurs globales */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

Les groupes ordinaux peuvent être utilisés avec la propriété [`box-direction`](/fr/docs/Web/CSS/box-direction) afin de contrôler l'ordre dans lequel les éléments fils apparaissent dans la boîte. Lorsque [la valeur calculée](/fr/docs/Web/CSS/computed_value) de **`box-direction`** est `normal`, une boîte affichera ses éléments en commençant par le groupe dont l'ordre est le plus faible et les disposera de gauche à droite pour les boîtes horizontales et du haut vers le bas pour les boîtes verticales. Les éléments dont l'ordre est égal seront disposés dans l'ordre dans lequel ils apparaissent. Lorsque la direction est inversée, les ordres sont gérés de la même façon, les éléments apparaîtront dans l'ordre inverse.

## Syntaxe

Cette propriété se définit avec un entier positif ([`<integer>`](/fr/docs/Web/CSS/integer)).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans d'anciennes versions de la spécification `box-ordinal-group` était incluse pour permettre de modifier l'ordre d'affichage des enfants flexibles à l'intérieur d'un conteneur flexible.

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2
  -moz-box-ordinal-group: 2
  box-ordinal-group: 2
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1
  -moz-box-ordinal-group: 1
  box-ordinal-group: 1
}
```

La propriété équivalente qui remplace celle-ci est [`order`](/fr/docs/Web/CSS/order).

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`box-flex`](/fr/docs/Web/CSS/box-flex)
- [`box-flex-group`](/fr/docs/Web/CSS/box-flex-group)
- [`box-pack`](/fr/docs/Web/CSS/box-pack)
