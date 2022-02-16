---
title: contain
slug: Web/CSS/contain
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/contain
---
{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`contain`** permet d'indiquer qu'un élément, ainsi que son contenu, sont, autant que possible, indépendants du reste de l'arbre du document. Cela permet au navigateur de recalculer la disposition, la mise en forme, la taille, les _peintures_ ou toute combinaison de ces éléments pour une zone donnée du DOM plutôt que pour la page complète.

```css
/* Valeurs avec un mot-clé */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: layout;
contain: style;
contain: paint;

/* Valeurs globales */
contain: inherit;
contain: initial;
contain: unset;
```

Cette propriété s'avère utile pour les pages qui contiennent de nombreux composants indépendants et permet de limiter la portée des règles sur le reste de la page.

> **Note :** Lorsqu'elle est appliquée avec une valeur `paint`, `strict` ou `content`, cette propriété crée :
>
> - un nouveau [bloc englobant](/fr/docs/Web/CSS/A_Propos_Du_Bloc_Conteneur) (le bloc servant de référence pour les éléments fils dont la position sera absolue ou `fixed`)
> - un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Comprendre_z-index/Empilement_de_couches)
> - un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Block_formatting_context).

## Syntaxe

### Valeurs

- `none`
  - : L'élément est affiché normalement, aucun confinement n'est appliqué.
- `strict`
  - : Toutes les règles possibles de confinement à l'exception de `style` sont appliquées. Cela correspond à `contain: size layout paint`.
- `content`
  - : Toutes les règles de confinement, à l'exception de celles pour `size` et `style`, sont appliquées à l'élément. Cela est équivalent à `contain: layout paint`.
- `size`
  - : Cette valeur indique que l'élément peut être dimensionné sans avoir à examiner les éléments descendants pour les modifications de la taille.
- `layout`
  - : Cette valeur indique qu'aucun élément en dehors de l'élément, ne peut impacter sa disposition interne et réciproquement.
- `style`
  - : Cette valeur indique que les propriétés ayant un effet sur un un élément et ses descendants voire plus sont bien limitées à l'élément englobant.
- `paint`
  - : Cette valeur indique que les éléments descendants de l'élément ne sont pas affichés en dehors de ses limites. Si un élément est en dehors de l'écran ou n'est pas visible, cette valeur assure que les éléments descendants ne sont pas visibles non plus.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                            | État                                 | Commentaires         |
| ---------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS Containment')}} | {{Spec2('CSS Containment')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.contain")}}

## Voir aussi

- La propriété CSS {{cssxref("position")}}
