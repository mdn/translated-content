---
title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente de la spécification. Voir la page [Utiliser les boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) pour plus d'informations à propos du standard actuel.

La propriété [CSS](/fr/docs/Web/CSS) **`box-ordinal-group`** permet d'affecter les éléments fils d'une boîte flexible à un groupe numéroté.

Les groupes ordinaux peuvent être utilisés avec la propriété {{CSSxRef("box-direction")}} afin de contrôler l'ordre dans lequel les éléments fils apparaissent dans la boîte. Lorsque [la valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing) de **`box-direction`** est `normal`, une boîte affichera ses éléments en commençant par le groupe dont l'ordre est le plus faible et les disposera de gauche à droite pour les boîtes horizontales et du haut vers le bas pour les boîtes verticales. Les éléments dont l'ordre est égal seront disposés dans l'ordre dans lequel ils apparaissent. Lorsque la direction est inversée, les ordres sont gérés de la même façon, les éléments apparaîtront dans l'ordre inverse.

## Syntaxe

```css
/* Valeurs de type <integer> */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* Valeurs globales */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

La propriété `box-ordinal-group` est définie comme tout entier positif ({{CSSxRef("&lt;integer&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`box-ordinal-group = <integer>`)}}

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

La propriété équivalente qui remplace celle-ci est {{CSSxRef("order")}}.

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flex")}}
- La propriété {{CSSxRef("flex-basis")}}
- La propriété {{CSSxRef("flex-grow")}}
- La propriété {{CSSxRef("flex-shrink")}}
