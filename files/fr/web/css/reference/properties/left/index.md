---
title: left
slug: Web/CSS/Reference/Properties/left
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`left`** participe à la définition de la position horizontale d'un [élément positionné](/fr/docs/Web/CSS/Reference/Properties/position). Cette {{Glossary("inset properties", "propriété d'encart")}} n'a aucun effet sur les éléments non positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: left")}}

```css interactive-example-choice
left: 0;
```

```css interactive-example-choice
left: 4em;
```

```css interactive-example-choice
left: 10%;
```

```css interactive-example-choice
left: 20px;
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
left: 3px;
left: 2.4em;
left: anchor(--my-anchor 50%);
left: calc(anchor-size(--my-anchor inline, 100px) * 2);

/* Valeurs proportionnelles à la largeur du bloc englobant */
/* Valeurs de type <percentage> */
left: 10%;

/* Valeur avec un mot-clé */
left: auto;

/* Valeurs globales */
left: inherit;
left: initial;
left: revert;
left: revert-layer;
left: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Une valeur {{CSSxRef("&lt;length&gt;")}} négative, nulle ou positive&nbsp;:
    - pour les éléments positionnés de façon absolue, elle représente la distance jusqu'au bord gauche du bloc englobant.
    - pour les éléments positionnés avec une ancre, la fonction {{CSSxRef("anchor()")}} se résout en une valeur {{CSSxRef("&lt;length&gt;")}} relative à la position du bord gauche ou droit de l'élément d'ancre associé (voir [Utiliser les propriétés d'encart avec des valeurs de fonction `anchor()`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#utiliser_les_propriétés_dencart_avec_des_valeurs_de_fonction_anchor)), et la fonction {{CSSxRef("anchor-size()")}} se résout en une valeur {{CSSxRef("&lt;length&gt;")}} relative à la largeur ou la hauteur de l'élément d'ancre associé (voir [Définir la position d'un élément en fonction de la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#dimensionner_les_éléments_selon_la_taille_de_lancre)).
    - pour les éléments positionnés de façon relative, elle représente la distance de déplacement de l'élément vers la droite par rapport à sa position normale.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Une valeur en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) par rapport à la largeur du bloc englobant.
- `auto`
  - : Indique que&nbsp;:
    - pour les éléments positionnés de façon absolue, la position de l'élément est basée sur la propriété {{CSSxRef("right")}}, tandis que `width: auto` est considérée comme une largeur basée sur le contenu&nbsp;; ou si `right` vaut aussi `auto`, l'élément est positionné là où il devrait l'être horizontalement s'il était un élément statique.
    - pour les éléments positionnés de façon relative, la distance de l'élément par rapport à sa position normale est basée sur la propriété {{CSSxRef("right")}}&nbsp;; ou si `right` vaut aussi `auto`, l'élément n'est pas déplacé horizontalement.

## Description

L'effet de `left` dépend de la façon dont l'élément est positionné (c'est-à-dire la valeur de la propriété {{CSSxRef("position")}})&nbsp;:

- Lorsque `position` vaut `absolute` ou `fixed`, la propriété `left` définit la distance entre la marge extérieure du bord gauche de l'élément et la bordure intérieure du bord gauche de son bloc englobant. (Le bloc englobant est l'ancêtre par rapport auquel l'élément est positionné de façon relative.) Si l'élément positionné a un [_élément d'ancre_](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using) associé et que la valeur de la propriété inclut une fonction {{CSSxRef("anchor()")}}, `left` positionne le bord gauche de l'élément positionné par rapport à la position du bord [`<anchor-side>`](/fr/docs/Web/CSS/Reference/Values/anchor#anchor-side) spécifié. La propriété `left` est [compatible](/fr/docs/Web/CSS/Reference/Values/anchor#compatibilité_des_propriétés_dencart_et_des_valeurs_anchor-side) avec les valeurs `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` et `<percentage>`.
- Lorsque `position` vaut `relative`, la propriété `left` définit la distance de déplacement du bord gauche de l'élément vers la droite par rapport à sa position normale.
- Lorsque `position` vaut `sticky`, la propriété `left` est utilisée pour calculer le rectangle de contrainte sticky.
- Lorsque `position` vaut `static`, la propriété `left` n'a _aucun effet_.

Lorsque `left` et {{CSSxRef("right")}} sont toutes deux définies, et que les contraintes de largeur ne l'empêchent pas, l'élément s'étire pour satisfaire les deux. Si l'élément ne peut pas s'étirer pour satisfaire les deux, la position de l'élément est _sur-définie_. Dans ce cas, la valeur de `left` a la priorité lorsque le conteneur est en lecture de gauche à droite&nbsp;; la valeur de `right` a la priorité lorsque le conteneur est en lecture de droite à gauche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionner des éléments

#### HTML

```html
<div id="wrap">
  <div id="exemple_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      Le seul élément englobant pour ce div est la fenêtre principale. Elle se
      positionne par rapport à elle.
    </p>
  </div>

  <div id="exemple_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>La position est relative par rapport aux voisins.</p>
  </div>

  <div id="exemple_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>
      La position est relative par rapport au div voisin mais on le retire du
      flux.
    </p>

    <div id="exemple_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>
        La position est absolue à l'intérieur d'un parent positionné de façon
        relative.
      </p>
    </div>

    <div id="exemple_5">
      <pre>
        position: absolute;
        right: 0;
        left: 0;
        top: 200px;
      </pre>
      <p>Position absolue avec à la fois gauche et droite déclarés</p>
    </div>
  </div>
</div>
```

#### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre-line;
  word-wrap: break-word;
}

#exemple_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#exemple_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#exemple_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#exemple_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
#exemple_5 {
  position: absolute;
  right: 0;
  left: 0;
  top: 100px;
  background-color: #d7ffc2;
}
```

#### Résultat

{{EmbedLiveSample("Positionner des éléments", 1200, 650)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("top")}}, {{CSSxRef("bottom")}} et {{CSSxRef("right")}}
- La propriété raccourcie {{CSSxRef("inset")}}
- Les propriétés {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} et {{CSSxRef("inset-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("inset-block")}} et {{CSSxRef("inset-inline")}}
- La propriété {{CSSxRef("position")}}
- Le module [de disposition positionnée CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
