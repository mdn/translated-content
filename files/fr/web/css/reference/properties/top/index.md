---
title: Propriété CSS `top`
short-title: top
slug: Web/CSS/Reference/Properties/top
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`top`** participe à la spécification de la position verticale d'un [élément positionné](/fr/docs/Web/CSS/Reference/Properties/position). Cette {{Glossary("inset properties", "propriété d'encart")}} n'a aucun effet sur les éléments non positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: top")}}

```css interactive-example-choice
top: 0;
```

```css interactive-example-choice
top: 4em;
```

```css interactive-example-choice
top: 10%;
```

```css interactive-example-choice
top: 20px;
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

L'effet de `top` dépend de la façon dont l'élément est positionné (c'est‑à‑dire de la valeur de la propriété {{CSSxRef("position")}})&nbsp;:

- Lorsque `position` est défini sur `absolute` ou `fixed`, la propriété `top` définit la distance entre la marge extérieure du bord supérieur de l'élément et la bordure intérieure du bord supérieur de son bloc conteneur, ou, dans le cas des [éléments positionnés par ancrage](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using) lorsque la fonction {{CSSxRef("anchor()")}} est utilisée dans la valeur, par rapport au bord [`<anchor-side>`](/fr/docs/Web/CSS/Reference/Values/anchor#anchor-side) défini. La propriété `top` est [compatible](/fr/docs/Web/CSS/Reference/Values/anchor#compatibilité_des_propriétés_dencart_et_des_valeurs_anchor-side) avec les valeurs `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` et `<percentage>`.
- Lorsque `position` est défini sur `relative`, la propriété `top` définit la distance à laquelle le bord supérieur de l'élément est déplacé en dessous de sa position normale.
- Lorsque `position` est défini sur `sticky`, la propriété `top` est utilisée pour calculer le rectangle de contrainte sticky.
- Lorsque `position` est défini sur `static`, la propriété `top` n'a _aucun effet_.

Lorsque les valeurs `top` et {{CSSxRef("bottom")}} sont toutes deux définies, il existe trois cas différents&nbsp;:

- Si `position` est défini sur `absolute` ou `fixed` et que {{CSSxRef("height")}} n'est pas définie (soit `auto`, soit `100%`), les valeurs `top` et `bottom` sont toutes deux respectées.
- Si `position` est défini sur `relative` ou si la propriété {{CSSxRef("height")}} est contrainte, la propriété `top` prime et la propriété `bottom` est ignorée.
- Si `position` est défini sur `sticky`, les valeurs `top` et `bottom` sont prises en compte. Cela signifie qu'un élément attaché peut potentiellement se déplacer vers le haut et vers le bas au sein de son bloc englobant en fonction des valeurs de ces deux propriétés, tant que la boîte de position de l'élément reste contenue dans son bloc englobant.

## Syntaxe

```css
/* Valeur de type <length> */
top: 3px;
top: 2.4em;
top: anchor(bottom);
top: anchor-size(--mon-ancre self-block, 10%);

/* Valeurs de type <percentage> */
top: 10%;

/* Valeurs avec un mot-clé */
top: auto;

/* Valeur globale */
top: inherit;
top: initial;
top: revert;
top: revert-layer;
top: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur ({{CSSxRef("&lt;length&gt;")}}) négative, nulle ou positive&nbsp;:
    - pour _les éléments positionnés absolument_, elle représente la distance par rapport au bord supérieur du bloc englobant.
    - pour _les éléments positionnés par ancre_, la fonction {{CSSxRef("anchor()")}} se résout en une valeur {{CSSxRef("&lt;length&gt;")}} relative à la position du bord supérieur ou inférieur de l'élément ancre associé (voir [Utilisation des propriétés inset avec les valeurs de fonction `anchor()`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#utiliser_les_propriétés_dencart_avec_des_valeurs_de_fonction_anchor)), et la fonction {{CSSxRef("anchor-size()")}} se résout en une valeur {{CSSxRef("&lt;length&gt;")}} relative à la largeur ou à la hauteur de l'élément ancre associé (voir [Définir la position de l'élément en fonction de la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_position_dun_élément_selon_la_taille_de_lancre)).
    - pour _les éléments positionnés relativement_, elle représente la distance que l'élément est déplacé en dessous de sa position normale.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) de la hauteur du bloc englobant.
- `auto`
  - : Définit que&nbsp;:
    - pour _les éléments positionnés absolument_, la position de l'élément est basée sur la propriété {{CSSxRef("bottom")}}, tandis que `height: auto` est traité comme une hauteur basée sur le contenu&nbsp;; ou si `bottom` est également `auto`, l'élément est positionné là où il devrait être verticalement s'il était un élément statique.
    - pour _les éléments positionnés relativement_, la distance de l'élément par rapport à sa position normale est basée sur la propriété {{CSSxRef("bottom")}} ; ou si `bottom` est également `auto`, l'élément n'est pas déplacé verticalement du tout.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Un élément positionné à 10 % du haut

```css
body {
  background: beige;
}

div {
  position: absolute;
  top: 10%;
  right: 40%;
  bottom: 20%;
  left: 15%;
  background: gold;
  border: 1px solid blue;
}
```

```html
<div>La taille de ce contenu est déterminée par la position de ses bords.</div>
```

{{EmbedLiveSample("Un élément positionné à 10 % du haut", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("bottom")}}, {{CSSxRef("left")}} et {{CSSxRef("right")}}
- La propriété raccourcie {{CSSxRef("inset")}}
- Les propriétés {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} et {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-block")}}, et la propriété raccourcie {{CSSxRef("inset-inline")}}
- La propriété {{CSSxRef("position")}}
- Le module [de disposition positionnée CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
