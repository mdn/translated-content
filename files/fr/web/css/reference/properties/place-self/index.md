---
title: Propriété CSS `place-self`
short-title: place-self
slug: Web/CSS/Reference/Properties/place-self
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`place-self`** permet d'aligner un élément individuel à la fois dans les directions bloc et en ligne (c'est-à-dire les propriétés {{CSSxRef("align-self")}} et {{CSSxRef("justify-self")}}). Cette propriété s'applique aux boîtes de niveau bloc, aux boîtes positionnées absolument et aux éléments de grille. Si la deuxième valeur n'est pas présente, la première valeur est également utilisée pour elle.

{{InteractiveExample("Démonstration CSS&nbsp;: place-self")}}

```css interactive-example-choice
place-self: stretch center;
```

```css interactive-example-choice
place-self: center start;
```

```css interactive-example-choice
place-self: start end;
```

```css interactive-example-choice
place-self: end center;
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
  width: 220px;
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
/* Alignement géométrique */
place-self: auto center;
place-self: normal start;
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: anchor-center;

/* Alignement relatif à la ligne de base */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Valeurs globales */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: revert-layer;
place-self: unset;
```

### Valeurs

- `auto`
  - : Calcule la valeur en fonction de la propriété {{CSSxRef("align-items")}} du parent.
- `normal`
  - : L'effet de ce mot-clé dépend du mode de mise en page dans lequel nous nous trouvons&nbsp;:
    - Dans les mises en page en position absolue, le mot-clé se comporte comme `start` sur les boîtes positionnées absolument _remplacées_, et comme `stretch` sur _toutes les autres_ boîtes positionnées absolument.
    - Dans la position statique des mises en page en position absolue, le mot-clé se comporte comme `stretch`.
    - Pour les éléments flexibles, le mot-clé se comporte comme `stretch`.
    - Pour les éléments de grille, ce mot-clé conduit à un comportement similaire à celui de `stretch`, sauf pour les boîtes avec un {{Glossary("aspect ratio", "rapport d'aspect")}} ou une taille intrinsèque où il se comporte comme `start`.
    - La propriété ne s'applique pas aux boîtes de niveau bloc et aux cellules de tableau.

- `self-start`
  - : Aligne les éléments de manière à ce qu'ils épousent le bord du conteneur d'alignement correspondant au côté de début de l'élément dans l'axe transversal.
- `self-end`
  - : Aligne les éléments de manière à ce qu'ils épousent le bord du conteneur d'alignement correspondant au côté de fin de l'élément dans l'axe transversal.
- `flex-start`
  - : Le bord de marge de début transversal de l'élément flexible est aligné avec le bord de début transversal de la ligne.
- `flex-end`
  - : Le bord de marge de fin transversal de l'élément flexible est aligné avec le bord de fin transversal de la ligne.
- `center`
  - : La boîte de marge de l'élément flexible est centrée dans la ligne sur l'axe transversal. Si la taille transversale de l'élément est plus grande que celle du conteneur flexible, elle débordera également dans les deux directions.
- `baseline`, `first baseline`, `last baseline`
  - : Définit la participation à l'alignement sur la première ou la dernière ligne de base&nbsp;: aligne la ligne de base d'alignement du premier ou du dernier ensemble de lignes de base de la boîte avec la ligne de base correspondante dans l'ensemble partagé de première ou dernière ligne de base de toutes les boîtes de son groupe de partage de lignes de base.
    L'alignement de repli pour `first baseline` est `start`, celui pour `last baseline` est `end`.
- `stretch`
  - : Si la taille combinée des éléments le long de l'axe transversal est inférieure à la taille du conteneur d'alignement et que l'élément est de taille `auto`, sa taille est augmentée de manière égale (et non proportionnelle), tout en respectant les contraintes imposées par {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (ou fonctionnalité équivalente), de sorte que la taille combinée de tous les éléments de taille `auto` remplisse exactement le conteneur d'alignement le long de l'axe transversal.
- `anchor-center`
  - : Dans le cas des éléments [positionnés par ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning), aligne l'élément au centre de l'élément d'ancrage associé dans la direction bloc et en ligne. Voir [Centrer sur l'ancre en utilisant `anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrer_sur_lancre_avec_anchor-center).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Démonstration simple

Dans l'exemple suivant, nous avons une grille de 2 x 2. Initialement, le conteneur de la grille a des valeurs de {{CSSxRef("justify-items")}} et {{CSSxRef("align-items")}} de `stretch` — les valeurs par défaut — ce qui fait que les éléments de la grille s'étendent sur toute la largeur de leurs cellules.

Les deuxième, troisième et quatrième éléments de la grille se voient ensuite attribuer différentes valeurs de `place-self`, pour montrer comment celles-ci remplacent les placements par défaut. Ces valeurs font que les éléments de la grille ne s'étendent que sur la largeur/hauteur de leur contenu, et s'alignent à différentes positions dans leurs cellules, dans les directions bloc et en ligne.

#### HTML

```html
<article class="container">
  <span>Premier</span>
  <span>Deuxième</span>
  <span>Troisième</span>
  <span>Quatrième</span>
</article>
```

#### CSS

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
}

span:nth-child(2) {
  place-self: start center;
}

span:nth-child(3) {
  place-self: center start;
}

span:nth-child(4) {
  place-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}
```

#### Résultat

{{EmbedLiveSample("Démonstration simple", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("align-self")}}
- La propriété {{CSSxRef("justify-self")}}
- [Concept de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Alignement des boîtes dans une grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
