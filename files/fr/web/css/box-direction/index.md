---
title: box-direction
slug: Web/CSS/box-direction
---

{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente. La propriété `-moz-box-direction` ne peut être utilisée que dans des composants XUL tandis que la propriété `box-direction` a été remplacée par la propriété standard `flex-direction`. Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations sur ce qui doit être utilisé à la place.

La propriété [CSS](/fr/docs/Web/CSS) **`box-direction`** définit si une boîte doit organiser son contenu dans la direction normale (de haut en bas ou de gauche à droite).

```css
/* Valeurs avec un mot-clé */
box-direction: normal;
box-direction: reverse;

/* Valeurs globales */
box-direction: inherit;
box-direction: initial;
box-direction: revert;
box-direction: revert-layer;
box-direction: unset;
```

## Syntaxe

La propriété `box-direction` est paramétrée avec l'un des mots-clés suivants.

### Valeurs

- `normal`
  - : La boîte répartit son contenu à partir du début (le côté gauche si la boîte est orientée horizontalement ou le côté haut si la boîte est orientée verticalement).
- `reverse`
  - : La boîte répartit son contenu à partir de la fin (le côté droit si la boîte est orientée horizontalement ou le côté bas si la boîte est orientée verticalement).

## Notes

Le bord de la boîte désigné par `start` pour l'alignement dépend de l'orientation de la boîte&nbsp;:

- Pour les éléments horizontaux, `start` correspond au bord haut.
- Pour les éléments verticaux, `start` correspond au bord gauche.

Le bord opposé au bord `start` est désigné par `end`.

Si la direction de l'élément est définie grâce à l'attribut `dir`, la déclaration est ignorée.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.exemple {
  /* du bas vers le haut */
  -moz-box-direction: reverse; /* Mozilla */
  -webkit-box-direction: reverse; /* WebKit */
  box-direction: reverse;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`box-orient`](/fr/docs/Web/CSS/box-orient)
- [`box-pack`](/fr/docs/Web/CSS/box-pack)
- [`box-align`](/fr/docs/Web/CSS/box-align)
- [`flex-direction`](/fr/docs/Web/CSS/flex-direction)
