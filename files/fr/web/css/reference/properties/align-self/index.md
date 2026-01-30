---
title: align-self
slug: Web/CSS/Reference/Properties/align-self
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`align-self`** permet d'écraser la valeur de {{CSSxRef("align-items")}} d'un élément de grille ou de flex. En grille, elle aligne l'élément à l'intérieur de la {{Glossary("Grid Areas", "zone de grille")}}. En flexbox, elle aligne l'élément sur {{Glossary("cross axis", "l'axe transversal")}}.

Cette propriété ne s'applique pas aux boîtes de niveau bloc ni aux cellules de tableau. Si la marge sur l'axe transversal d'un élément flex est `auto`, alors `align-self` est ignorée.

{{InteractiveExample("Démonstration CSS&nbsp;: align-self")}}

```css interactive-example-choice
align-self: stretch;
```

```css interactive-example-choice
align-self: center;
```

```css interactive-example-choice
align-self: start;
```

```css interactive-example-choice
align-self: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Un</div>
    <div>Deux</div>
    <div>Trois</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
align-self: auto;
align-self: normal;

/* Alignement géométrique */
/* align-self ne gère pas les valeurs left et right */
align-self: center;
align-self: start;
align-self: end;
align-self: self-start;
align-self: self-end;
align-self: flex-start;
align-self: flex-end;
align-self: anchor-center;

/* Alignement selon la ligne de base */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Les objets dimensionnés avec 'auto' sont étirés pour remplir le conteneur */

/* Alignement avec gestion du dépassement */
align-self: safe center;
align-self: unsafe center;

/* Valeurs globales */
align-self: inherit;
align-self: initial;
align-self: revert;
align-self: revert-layer;
align-self: unset;
```

### Valeurs

- `auto`
  - : La valeur est calculée par rapport à celle de {{CSSxRef("align-items")}}.
- `normal`
  - : L'effet de ce mot-clé dépend du mode de disposition utilisé :
    - Pour une disposition absolue, ce mot-clé est synonyme de `start` pour les boîtes remplacées positionnées de façon absolue, il est synonyme de _stretch_ pour les autres boîtes positionnées de façon absolue.
    - Pour une disposition absolue et des positions statiques, ce mot-clé est synonyme de `stretch`.
    - Pour les éléments flexibles, ce mot-clé est synonyme de `stretch`.
    - Pour les éléments de grille, ce mot-clé conduit à un comportement similaire à celui de `stretch`, sauf pour les boîtes avec un {{Glossary("aspect ratio", "rapport d'aspect")}} ou une taille intrinsèque où il se comporte comme `start`.
    - Cette propriété ne s'applique pas aux boîtes qui sont des blocs ou aux cellules d'un tableau.

- `self-start`
  - : Les éléments sont alignés dans l'axe perpendiculaire à l'axe principal pour que le bord correspondant soit aligné avec le bord du conteneur au début de l'axe.
- `self-end`
  - : Les éléments sont alignés dans l'axe perpendiculaire à l'axe principal pour que le bord correspondant soit aligné avec le bord du conteneur à la fin de l'axe.
- `flex-start`
  - : Le bord de l'élément flexible, au début de l'axe perpendiculaire à l'axe principal, est aligné avec le bord au début de l'axe perpendiculaire pour la ligne flexible.
- `flex-end`
  - : Le bord de l'élément flexible, à la fin de l'axe perpendiculaire à l'axe principal, est aligné avec le bord à la fin de l'axe perpendiculaire pour la ligne flexible.
- `center`
  - : La boîte définies par les marges est centrée sur la ligne de l'axe perpendiculaire à l'axe principal de la ligne. Si l'élément est plus grand que le conteneur dans ce sens, il dépassera également de chaque côté.
- `baseline first baseline`
  `last baseline`
  - : Indique l'alignement par rapport à la ligne de base.
    Si besoin, la valeur `first baseline` est remplacée par `start` et `last baseline` est remplacée par `end`.
- `stretch`
  - : Si la somme des dimensions des éléments sur l'axe perpendiculaire à l'axe principal est inférieure à la dimension du conteneur et que l'élément est dimensionné automatiquement, celui-ci est agrandi (tout en respectant les éventuelles contraintes dictées par {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} ou autres) afin que l'ensemble des éléments remplissent le conteneur sur cet axe.
- `anchor-center`
  - : Dans le cas des éléments [positionnés par ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning), aligne l'élément au centre de l'élément ancre associé dans la direction de bloc. Voir [Centrer sur l'ancre avec `anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrer_sur_lancre_avec_anchor-center).
- `safe`
  - : Si la taille d'un élément dépasse du conteneur avec l'alignement fourni par la valeur, l'élément sera en réalité aligné comme si la valeur `start` avait été utilisée.
- `unsafe`
  - : Quelle que soit les tailles relatives des objets par rapport au conteneur, la valeur indiquant l'alignement sera respectée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<section>
  <div>Élément #1</div>
  <div>Élément #2</div>
  <div>Élément #3</div>
</section>
```

### CSS

```css
section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Alignement des boîtes dans une grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- La propriété {{CSSxRef("align-items")}}
- La propriété {{CSSxRef("justify-self")}}
- La propriété {{CSSxRef("place-self")}}
