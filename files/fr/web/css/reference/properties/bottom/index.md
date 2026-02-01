---
title: bottom
slug: Web/CSS/Reference/Properties/bottom
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`bottom`** participe à la définition de la position verticale d'un [élément positionné](/fr/docs/Web/CSS/Reference/Properties/position). Cette {{Glossary("inset properties", "propriété d'encart")}} n'a aucun effet sur les éléments qui ne sont pas positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: bottom")}}

```css interactive-example-choice
bottom: 0;
```

```css interactive-example-choice
bottom: 4em;
```

```css interactive-example-choice
bottom: 10%;
```

```css interactive-example-choice
bottom: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">J'ai une position absolue.</div>
    <p>
      Il y a autant de boue dans les rues que si les eaux venaient à peine de se
      retirer de la surface de la terre, et il ne serait pas étonnant de croiser
      un Mégalosaure, long d'une douzaine de mètres, se dandinant comme un
      lézard éléphantesque dans Holborn Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
bottom: 3px;
bottom: 2.4em;
bottom: calc(anchor(--my-anchor 50%) + 5px);
bottom: anchor-size(width);

/* <percentage> de la hauteur du bloc englobant */
bottom: 10%;

/* Valeurs avec un mot-clé */
bottom: auto;

/* Valeurs globales */
bottom: inherit;
bottom: initial;
bottom: revert;
bottom: revert-layer;
bottom: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Une valeur {{CSSxRef("&lt;length&gt;")}} négative, nulle ou positive&nbsp;:
    - pour les _éléments positionnés de façon absolue_, cela représente la distance jusqu'au bord inférieur du bloc englobant.
    - pour les _éléments positionnés de façon relative_, cela représente la distance avec laquelle l'élément est déplacé au-dessus de sa position normale.
    - pour les _éléments positionnés par ancre_, la fonction {{CSSxRef("anchor()")}} retourne une valeur {{CSSxRef("&lt;length&gt;")}} relative à la position du bord supérieur ou inférieur de l'élément ancre associé (voir [Utiliser les propriétés d'encart avec des valeurs de fonction `anchor()`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#utiliser_les_propriétés_dencart_avec_des_valeurs_de_fonction_anchor)), et la fonction {{CSSxRef("anchor-size()")}} retourne une valeur {{CSSxRef("&lt;length&gt;")}} relative à la largeur ou à la hauteur de l'élément ancre associé (voir [Définir la position d'un élément en fonction de la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#dimensionner_les_éléments_selon_la_taille_de_lancre)).

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) de la hauteur du bloc englobant.
- `auto`
  - : Définit que&nbsp;:
    - pour les _éléments positionnés de façon absolue_, la position de l'élément est basée sur la propriété {{CSSxRef("top")}}, tandis que `height: auto` est traitée comme une hauteur basée sur le contenu&nbsp;; ou si `top` vaut aussi `auto`, l'élément est positionné là où il devrait l'être verticalement s'il était un élément statique.
    - pour les _éléments positionnés de façon relative_, la distance de l'élément par rapport à sa position normale est basée sur la propriété {{CSSxRef("top")}}&nbsp;; ou si `top` vaut aussi `auto`, l'élément n'est pas déplacé verticalement.

## Description

L'effet de `bottom` dépend de la façon dont l'élément est positionné (c'est-à-dire la valeur de la propriété {{CSSxRef("position")}})&nbsp;:

- Lorsque `position` vaut `absolute` ou `fixed`, la propriété `bottom` définit la distance entre le bord extérieur de la [marge inférieure](/fr/docs/Web/CSS/Guides/Box_model/Introduction) de l'élément et le bord extérieur du remplissage inférieur du bloc englobant, ou, dans le cas des [éléments positionnés par ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using) lorsque la fonction {{CSSxRef("anchor()")}} est utilisée dans la valeur, par rapport à la position du bord [`<anchor-side>`](/fr/docs/Web/CSS/Reference/Values/anchor#anchor-side) défini. La propriété `bottom` est [compatible](/fr/docs/Web/CSS/Reference/Values/anchor#compatibilité_des_propriétés_dencart_et_des_valeurs_anchor-side) avec les valeurs `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` et `<percentage>`.
- Lorsque `position` vaut `relative`, la propriété `bottom` définit la distance avec laquelle le bord inférieur de l'élément est déplacé au-dessus de sa position normale.
- Lorsque `position` vaut `sticky`, la propriété `bottom` est utilisée pour calculer le rectangle de contrainte de collage.
- Lorsque `position` vaut `static`, la propriété `bottom` n'a _aucun effet_.

Lorsque {{CSSxRef("top")}} et `bottom` sont tous deux définis, que `position` vaut `absolute` ou `fixed`, _et_ que {{CSSxRef("height")}} n'est pas définie (soit `auto` soit `100%`), les distances `top` et `bottom` sont toutes deux prises en compte. Dans toutes les autres situations, si {{CSSxRef("height")}} est contrainte d'une quelconque manière ou si `position` vaut `relative`, la propriété `top` prévaut et la propriété `bottom` est ignorée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionner en absolu et en fixe

Dans l'exemple qui suit, on illustre la différence de comportement de la propriété `bottom` lorsque {{CSSxRef("position")}} vaut `absolute` ou lorsqu'elle vaut `fixed`. When the regular text becomes taller than the viewable portion of the page (that is, the browser window's viewport), blocks positioned with `position:absolute` scroll with the page, while blocks positioned with `position:fixed` don't.

#### HTML

```html
<p>
  Voici <br />un<br />grand<br />grand,<br />grand,
  <br />grand,<br />grand,<br />grand<br />contenu.
</p>
<div class="fixe"><p>Fixe</p></div>
<div class="absolu"><p>Absolu</p></div>
```

#### CSS

```css
p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgb(55 55 55 / 20%);
  border: 1px solid blue;
}

.absolu {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixe {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

#### Résultat

{{EmbedLiveSample("Exemples", 500, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("top")}}, {{CSSxRef("left")}} et {{CSSxRef("right")}}
- La propriété raccourcie {{CSSxRef("inset")}}
- Les propriétés {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} et {{CSSxRef("inset-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("inset-block")}} et {{CSSxRef("inset-inline")}}
- La propriété {{CSSxRef("position")}}
- Le module [de la mise en page positionnée CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
