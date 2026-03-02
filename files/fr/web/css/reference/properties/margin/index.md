---
title: margin
slug: Web/CSS/Reference/Properties/margin
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`margin`** définit la [zone de marge](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_marge) sur les quatre côtés d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: margin")}}

```css interactive-example-choice
margin: 1em;
```

```css interactive-example-choice
margin: 5% 0;
```

```css interactive-example-choice
margin: 10px 50px 20px;
```

```css interactive-example-choice
margin: 10px 50px 20px 0;
```

```css interactive-example-choice
margin: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-left")}}

## Syntaxe

```css
/* La propriété s'applique aux quatre côtés */
margin: 1em;
margin: -3px;

/* vertical | horizontal */
margin: 5% auto;

/* haut | horizontal | bas */
margin: 1em auto 2em;

/* haut | droit | bas | gauche */
margin: 2px 1em 0 auto;

/* Valeurs de fonction anchor-size() */
margin: 5% anchor-size(width);
margin: calc(anchor-size(width) / 4) 1em 0
  anchor-size(--my-anchor self-inline, 50px);

/* Valeurs avec un mot-clé */
margin: auto;

/* Valeurs globales */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

La propriété `margin` peut être définie avec une, deux, trois ou quatre valeurs. Chaque valeur est une {{CSSxRef("&lt;length&gt;")}}, une {{CSSxRef("&lt;percentage&gt;")}} ou le mot-clé `auto`. Les valeurs négatives rapprochent l'élément de ses voisins plus que la valeur par défaut ne le permettrait.

- Avec **une** valeur, celle-ci s'applique aux **quatre côtés**.
- Avec **deux** valeurs, la première s'applique en **haut et en bas**, la seconde à **gauche et à droite**.
- Avec **trois** valeurs, la première s'applique en **haut**, la deuxième à **droite et à gauche**, la troisième en **bas**.
- Avec **quatre** valeurs, elles s'appliquent en **haut**, **à droite**, **en bas** et **à gauche** dans cet ordre (sens des aiguilles d'une montre).

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de la marge en valeur fixe.
    - Pour les éléments positionnés par ancre, la fonction {{CSSxRef("anchor-size()")}} donne une longueur ({{CSSxRef("&lt;length&gt;")}}) relative à la largeur ou la hauteur de l'élément ancre associé (voir [Définir la marge d'un élément selon la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_marge_dun_élément_selon_la_taille_de_lancre)).

- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille de la marge en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Le navigateur choisit une marge adaptée. Par exemple, dans certains cas, cette valeur peut être utilisée pour centrer un élément.

## Description

Cette propriété permet de définir une marge sur les quatre côtés d'un élément. Les marges créent un espace supplémentaire _autour_ d'un élément, contrairement à {{CSSxRef("padding")}}, qui crée un espace supplémentaire _à l'intérieur_ de l'élément.

Les marges haute et basse n'ont aucun effet sur les éléments en ligne _non [remplacés](/fr/docs/Glossary/Replaced_elements)_, comme {{HTMLElement("span")}} ou {{HTMLElement("code")}}.

### Centrage horizontal

Vous pouvez centrer horizontalement un élément dans son parent en appliquant `margin: 0 auto;`.

Une méthode plus courante pour centrer un élément horizontalement consiste à utiliser `display: flex;` et [`justify-content: center;`](/fr/docs/Web/CSS/Reference/Properties/justify-content) sur un conteneur, ce qui [centre ses enfants flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items).

### Fusion des marges

Les marges haute et basse des éléments sont parfois fusionnées en une seule marge qui est égale à la plus grande des deux marges. Voir [Maîtriser la fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing) pour plus d'informations.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<div class="centre">Cet élément est centré</div>

<div class="externe">Cet élément est positionné en dehors de son conteneur</div>
```

#### CSS

```css
.centre {
  margin: auto;
  background: lime;
  width: 66%;
}

.externe {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple", "100%", 120)}}

### Autres exemples

```css
margin: 5%; /* tous les côtés avec une marge de 5% */

margin: 10px; /* tous les côtés avec une marge de 10px */

margin: 1.6em 20px; /* haut et bas à 1.6em     */
/* gauche et droite à 20px */

margin: 10px 3% 1em; /* haut à 10px de marge */
/* gauche et droite à 3% de marge */
/* bas à 1em de marge */

margin: 10px 3px 30px 5px; /* haut à 10px de marge */
/* droite à 3px de marge */
/* bas à 30px de marge */
/* gauche à 5px de marge */

margin: 1em auto; /* marge de 1em en haut et en bas       */
/* la boîte est centrée horizontalement */

margin: auto; /* boîte centrée horizontalement */
/* marge nulle en haut et en bas */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- Les propriétés {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("margin-block")}} et {{CSSxRef("margin-inline")}}
- [Maîtriser la fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
