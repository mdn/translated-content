---
title: '::first-line (:first-line)'
slug: Web/CSS/::first-line
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::first-line
---
{{CSSRef}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) **`::first-line`** applique la décoration à la première ligne d'un élément. La quantité de texte sur la première ligne dépend de nombreux facteurs, comme la largeur des éléments ou du document, mais aussi de la taille du texte. Comme tous les pseudo-éléments, les sélecteurs contenant `::first-line` ne ciblent pas un élément HTML réel.

```css
/* Sélectionne la première ligne */
/*  d'un élément <p> */
::first-line {
  color: red;
  text-transform: uppercase;
}
```

Une première ligne n'a de sens que dans une [boîte de type bloc](/fr/docs/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes), et ainsi le pseudo-élément `::first-line` n'a d'effet que sur les éléments dont {{cssxref("display")}} à une valeur de `block`, `inline-block`, `table-cell` ou `table-caption`. Dans tous les autres cas, `::first-line` n'a pas d'effet.

## Propriétés utilisables

Seul un sous-ensemble de propriétés CSS peut être utilisé dans un bloc de déclaration contenant un sélecteur CSS utilisant le pseudo-élément `::first-line` :

- Toutes les propriétés liées aux polices de caractères : {{cssxref("font")}}, {{cssxref("font-kerning")}}, {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{cssxref("font-weight")}}, {{cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}} et {{cssxref("font-family")}}
- La propriété {{cssxref("color")}}
- Toutes les propriétés liées à l'arrière-plan : {{cssxref("background-color")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}},  {{cssxref("background-attachment")}} et {{cssxref("background-blend-mode")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}} et {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} et {{cssxref("vertical-align")}}.

Comme cette liste sera étendue dans le futur, il est recommandé de ne pas utiliser d'autres propriétés dans un bloc de déclaration, de manière à ce que le CSS reste pérenne.

> **Note :** Dans CSS 2, les pseudo-éléments étaient précédés d'un seul caractère deux-points. Comme les pseudo-classes utilisaient aussi la même convention, ils n'était pas possible de les distinguer. Afin de résoudre cela, CSS 2.1 à changé la convention des pseudo-éléments. Désormais, un pseudo-élément est précédé de deux caractères deux-points, et une pseudo-classe d'un seul.
>
> Puisque de nombreux navigateurs avaient déjà mis en place la version CSS 2 dans une version publique, tous les navigateurs supportent les deux syntaxes.
>
> Si les navigateurs anciens doivent être supportés, `:first-line` est le seul choix viable ; sinon`,::first-line` est préféré.

## Syntaxe

{{csssyntax}}

## Exemples

### `text-transform`

Toutes les lettres de la première ligne de chaque paragraphe sont en majuscules.

#### CSS

```css
p::first-line {
  text-transform: uppercase;
}
```

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore.
</p>
```

#### Résultat

{{EmbedLiveSample('text-transform', 250, 100)}}

### `margin-left`

Ici, l'effet est nul car `margin-left` ne peut pas être appliquée sur ce pseudo-élément.

#### CSS

```css
p::first-line {
  margin-left: 20px;
}
```

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore.
</p>
```

#### Résultat

{{EmbedLiveSample('margin-left', 250, 100)}}

### `text-indent`

Là encore, l'effet est nul, `text-indent` ne peut pas être appliqué sur ce pseudo-élément.

#### CSS

```css
p::first-line {
  text-indent: 20px;
}
```

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore.
</p>
```

#### Résultat

{{EmbedLiveSample('text-indent', 250, 100)}}

## Spécifications

| Spécification                                                                                                    | État                                         | Commentaires                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#first-line-pseudo', '::first-line')}}             | {{Spec2('CSS4 Pseudo-Elements')}} | La définition est affinée pour indiquer où ce pseudo-élément peut correspondre. Les propriétés possibles sont généralisées (fontes, décoration, disposition en ligne et {{cssxref("opacity")}}). Définit l'héritage de `::first-letter`. |
| {{SpecName('CSS3 Text Decoration', '#text-shadow', 'text-shadow with ::first-line')}} | {{Spec2('CSS3 Text Decoration')}} | La propriété {{cssxref("text-shadow")}} peut être utilisée avec `::first-letter`.                                                                                                                                                    |
| {{SpecName('CSS3 Selectors', '#first-line', '::first-line')}}                                 | {{Spec2('CSS3 Selectors')}}         | La définition de « première ligne » a été reformulée. La syntaxe utilise désormais deux fois le caractère deux-points.                                                                                                                         |
| {{SpecName('CSS2.1', 'selector.html#first-line-pseudo', '::first-line')}}                 | {{Spec2('CSS2.1')}}                     | Aucune modification.                                                                                                                                                                                                                           |
| {{SpecName('CSS1', '#the-first-line-pseudo-element', '::first-line')}}                     | {{Spec2('CSS1')}}                     | La définition initiale qui utilise la syntaxe avec un seul caractère deux-points.                                                                                                                                                              |

## Compatibilité des navigateurs

{{Compat("css.selectors.first-line")}}

## Voir aussi

- {{cssxref("::first-letter")}}
