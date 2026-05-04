---
title: Propriété CSS `right`
short-title: right
slug: Web/CSS/Reference/Properties/right
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`right`** participe à la spécification de la position horizontale d'un [élément positionné](/fr/docs/Web/CSS/Reference/Properties/position). Cette {{Glossary("inset properties", "propriété d'encart")}} n'a aucun effet sur les éléments non positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: right")}}

```css interactive-example-choice
right: 0;
```

```css interactive-example-choice
right: 4em;
```

```css interactive-example-choice
right: 10%;
```

```css interactive-example-choice
right: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">Je suis positionné absolument.</div>
    <p>
      Autant de boue dans les rues comme si les eaux venaient de se retirer de
      la surface de la terre, et il ne serait pas étonnant de rencontrer un
      Megalosaurus, d'environ douze mètres de long, se dandinant comme un lézard
      éléphantesque sur Holborn Hill.
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
right: 3px;
right: 2.4em;
right: anchor(--my-anchor 50%);
right: anchor-size(--my-anchor height, 65px);

/* Valeurs de type <percentage> */
right: 10%;

/* Valeur avec un mot-clé */
right: auto;

/* Valeurs globales */
right: inherit;
right: initial;
right: revert;
right: revert-layer;
right: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur ({{CSSxRef("&lt;length&gt;")}}) négative, nulle ou positive&nbsp;:
    - pour _les éléments positionnés absolument_, elle représente la distance par rapport au bord droit du bloc englobant.
    - pour _les éléments positionnés par ancre_, la fonction {{CSSxRef("anchor()")}} se résout en une valeur {{CSSxRef("&lt;length&gt;")}} relative à la position du bord gauche ou droit de l'élément ancre associé (voir [Utiliser les propriétés d'encart avec les valeurs de fonction `anchor()`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#utiliser_les_propriétés_dencart_avec_des_valeurs_de_fonction_anchor)), et la fonction {{CSSxRef("anchor-size()")}} se résout en une valeur {{CSSxRef("&lt;length&gt;")}} relative à la largeur ou à la hauteur de l'élément ancre associé (voir [Définir la position de l'élément en fonction de la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_position_dun_élément_selon_la_taille_de_lancre)).
    - pour _les éléments positionnés relativement_, elle représente la distance à laquelle l'élément est déplacé vers la gauche par rapport à sa position normale.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) de la largeur du bloc englobant.
- `auto`
  - : Définit que&nbsp;:
    - pour _les éléments positionnés absolument_, la position de l'élément est basée sur la propriété {{CSSxRef("left")}}, tandis que `width: auto` est traité comme une largeur basée sur le contenu ; ou si `left` est également `auto`, l'élément est positionné là où il devrait être horizontalement s'il était un élément statique.
    - pour _les éléments positionnés relativement_, la distance de l'élément par rapport à sa position normale est basée sur la propriété {{CSSxRef("left")}}&nbsp;; ou si `left` est également `auto`, l'élément n'est pas déplacé horizontalement du tout.

## Description

L'effet de `right` dépend de la façon dont l'élément est positionné (c'est-à-dire la valeur de la propriété {{CSSxRef("position")}})&nbsp;:

- Lorsque `position` est défini sur `absolute` ou `fixed`, la propriété `right` définit la distance entre la marge extérieure du bord droit de l'élément et la bordure intérieure du bord droit de son bloc englobant. Si l'élément positionné a un [_élément ancre_](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using) associé, et que la valeur de la propriété inclut une fonction {{CSSxRef("anchor()")}}, `right` positionne le bord droit de l'élément positionné par rapport au bord [`<anchor-side>`](/fr/docs/Web/CSS/Reference/Values/anchor#anchor-side) défini. La propriété `right` est [compatible](/fr/docs/Web/CSS/Reference/Values/anchor#compatibilité_des_propriétés_dencart_et_des_valeurs_anchor-side) avec les valeurs `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` et `<percentage>`.
- Lorsque `position` est défini sur `relative`, la propriété `right` définit la distance à laquelle le bord droit de l'élément est déplacé vers la gauche par rapport à sa position normale.
- Lorsque `position` est défini sur `sticky`, la propriété `right` est utilisée pour calculer le rectangle de contrainte de sélection.
- Lorsque `position` est défini sur `static`, la propriété `right` n'a _aucun effet_.

Lorsque {{CSSxRef("left")}} et `right` sont tous deux définis, si rien ne l'empêche, l'élément s'étire pour satisfaire les deux. Si l'élément ne peut pas s'étirer pour satisfaire les deux — par exemple, si une `width` est déclarée — la position de l'élément est _sur-contrainte_. Dans ce cas, la valeur de `left` a la priorité lorsque le conteneur est de gauche à droite&nbsp;; la valeur de `right` a la priorité lorsque le conteneur est de droite à gauche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionnement absolu et relatif utilisant `right`

#### HTML

```html
<div id="relative">Positionnement relatif</div>
<div id="absolute">Positionnement absolu</div>
```

#### CSS

```css
#relative {
  width: 100px;
  height: 100px;
  background-color: #ffc7e4;
  position: relative;
  top: 20px;
  left: 20px;
}

#absolute {
  width: 100px;
  height: 100px;
  background-color: #ffd7c2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

#### Résultat

{{EmbedLiveSample("Positionnement absolu et relatif utilisant `right`", 500, 220)}}

### Déclarer à la fois `left` et `right`

Lorsque `left` et `right` sont tous deux déclarés, l'élément s'étirera pour satisfaire les deux, sauf si d'autres contraintes l'en empêchent. Si l'élément ne peut pas s'étirer ou se rétrécir pour satisfaire les deux, la position de l'élément est _sur-contrainte_. Dans ce cas, la priorité est basée sur la direction du conteneur&nbsp;: `left` a la priorité si la direction du conteneur est de gauche à droite, et `right` a la priorité si la direction du conteneur est de droite à gauche.

#### HTML

```html
<div id="parent">
  Parent
  <div id="noWidth">Pas de largeur</div>
  <div id="width">width: 100px</div>
</div>
```

#### CSS

```css
div {
  outline: 1px solid #cccccc;
}
#parent {
  width: 200px;
  height: 200px;
  background-color: #ffc7e4;
  position: relative;
}
/* déclarer à la fois left et right */
#width,
#noWidth {
  background-color: #c2ffd7;
  position: absolute;
  left: 0;
  right: 0;
}
/* déclarer une largeur */
#width {
  width: 100px;
  top: 60px;
}
```

#### Résultat

{{EmbedLiveSample("Déclarer à la fois `left` et `right`", 500, 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("top")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}
- La propriété raccourcie {{CSSxRef("inset")}}
- Les propriétés {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} et {{CSSxRef("inset-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("inset-block")}} et {{CSSxRef("inset-inline")}}
- La propriété {{CSSxRef("position")}}
- Le module [de mise en page positionnée CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
