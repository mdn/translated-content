---
title: align-items
slug: Web/CSS/Reference/Properties/align-items
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`align-items`** permet de définir la valeur de {{CSSxRef("align-self")}} sur tous les enfants directs en groupe. En flexbox, elle contrôle l'alignement des éléments sur {{Glossary("cross axis", "l'axe transversal")}}. En mise en page grille, elle contrôle l'alignement des éléments sur l'axe de bloc à l'intérieur de leurs {{Glossary("grid areas", "zones de grille")}}.

L'exemple interactif ci-dessous utilise la mise en page en grille pour illustrer certaines des valeurs de cette propriété.

{{InteractiveExample("Démonstration CSS&nbsp;: align-items")}}

```css interactive-example-choice
align-items: stretch;
```

```css interactive-example-choice
align-items: center;
```

```css interactive-example-choice
align-items: start;
```

```css interactive-example-choice
align-items: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Mots-clés de base */
align-items: normal;
align-items: stretch;

/* Alignement géométrique */
/* align-items ne gère pas les valeurs left et right */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;

/* Alignement par rapport à la ligne de base */
align-items: first;
align-items: first baseline;
align-items: last baseline;

/* Gestion du dépassement (pour l'alignement géométrique uniquement) */
align-items: safe center;
align-items: unsafe center;

/* Valeurs globales */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### Valeurs

- `normal`
  - : L'effet obtenu avec ce mot-clé dépend du mode de disposition utilisé&nbsp;:
    - Pour les éléments positionnés de façon absolue, ce mot-clé est synonyme de `start` pour les éléments remplacés, pour les autres éléments positionnés de façon absolue, il est synonyme de `stretch`.
    - Pour les éléments avec une position statique sur une disposition absolue, ce mot-clé se comporte comme `stretch`.
    - Pour les éléments flexibles, ce mot-clé est synonyme de `stretch`.
    - Pour les éléments de grille, ce mot-clé conduit à un comportement similaire à celui de `stretch`, sauf pour les boîtes avec un {{Glossary("aspect ratio", "rapport d'aspect")}} ou une taille intrinsèque où il se comporte comme `start`.
    - Cette propriété ne s'applique pas aux boîtes en bloc ou aux cellules de tableaux.

- `center`
  - : Les boîtes de marge des éléments flexibles sont centrées dans la ligne sur l'axe transversal. Si la taille transversale d'un élément est supérieure à celle du conteneur flexible, il débordera également dans les deux directions.

- `start`
  - : Les éléments sont alignés sur le bord au début du conteneur selon l'axe de bloc.

- `end`
  - : Les éléments sont alignés sur le bord à la fin du conteneur selon l'axe de bloc.

- `self-start`
  - : Les éléments sont accolés au bord du début du conteneur dans l'axe de bloc.

- `self-end`
  - : Les éléments sont accolés au bord à la fin du conteneur dans l'axe de bloc.

- `baseline`, `first baseline`, `last baseline`
  - : Tous les éléments flexibles sont alignés afin que [leurs différentes lignes de base <sup>(angl.)</sup>](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) soient alignées. L'élément pour lequel on a la plus grande distance entre la marge et la ligne de base est aligné sur le bord de la ligne courante.

- `stretch`
  - : Les éléments flexibles sont étirés afin que la taille de la boîte de marge sur l'axe en bloc est la même que celle de la ligne sur laquelle l'élément se trouve, tout en respectant les contraintes de hauteur et de largeur.

- `anchor-center`
  - : Dans le cas des éléments [positionnés par ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning), aligne les éléments au centre de l'élément ancre associé dans la direction de bloc. Voir [Centrer sur l'ancre avec `anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrer_sur_lancre_avec_anchor-center).

- `safe`
  - : Ce mot-clé est utilisé avec un mot-clé d'alignement. Si la taille d'un des éléments dépasse du conteneur avec la valeur d'alignement indiquée, l'alignement sera réalisé avec la valeur `start` à la place.

- `unsafe`
  - : Ce mot-clé est utilisé avec un mot-clé d'alignement. Quelle que soit la taille relative et l'éventuel dépassement de l'élément par rapport au conteneur, la valeur indiquée pour l'alignement est respectée.

Il existe également deux valeurs qui ont été définies pour le flexbox, car elles sont basées sur les concepts d'[axes du modèle flex](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox#aparté_sur_le_modèle_flex), et fonctionnent aussi en mise en page grille&nbsp;:

- `flex-start`
  - : Utilisé uniquement en disposition flexible, aligne les éléments flexibles contre le bord de début principal ou le bord de début transversal du conteneur flexible. Lorsqu'il est utilisé en dehors d'un contexte de formatage flexible, cette valeur se comporte comme `start`.

- `flex-end`
  - : Utilisé uniquement en disposition flexible, aligne les éléments flexibles contre le bord de fin principal ou le bord de fin transversal du conteneur flexible. Lorsqu'il est utilisé en dehors d'un contexte de formatage flexible, cette valeur se comporte comme `end`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, il y a un conteneur avec six enfants. Un menu déroulant {{HTMLElement("select")}} permet d'alterner la valeur de {{CSSxRef("display")}} du conteneur entre `grid` et `flex`. Un second menu permet de changer la valeur de la propriété `align-items` du conteneur.

### CSS

Nous appliquons un style au conteneur et aux éléments de façon à obtenir deux lignes ou rangées d'éléments. Nous avons défini les classes `.flex` et `.grid`, qui seront appliquées au conteneur avec JavaScript. Elles définissent la valeur de {{CSSxRef("display")}} du conteneur, et changent ses couleurs de fond et de bordure pour fournir un indicateur supplémentaire que la disposition a changé. Les six éléments flexibles ont chacun une couleur de fond différente, le 4<sup>e</sup> élément occupe deux lignes et le 6<sup>e</sup> élément a une police agrandie.

```css
.flex,
.grid {
  height: 200px;
  width: 500px;
  align-items: initial; /* Change la valeur dans l'exemple interactif */
  border: solid 5px transparent;
  gap: 3px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: #8c8c9f;
  border-color: magenta;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  background-color: #9f8c8c;
  border-color: slateblue;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}
```

```css hidden
select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}

div > div {
  box-sizing: border-box;
  border: 2px solid white;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### HTML

Nous incluons un conteneur {{HTMLElement("div")}} avec six enfants `<div>` imbriqués. Le HTML du formulaire et le JavaScript qui modifient la classe du conteneur ont été masqués pour plus de concision.

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4<br />ligne 2</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>
```

```html hidden
<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", 260, 290)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("align-self")}}
- La propriété {{CSSxRef("align-content")}}
- La propriété {{CSSxRef("justify-items")}}
- La propriété raccourcie {{CSSxRef("place-items")}}
- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Alignement des boîtes dans une grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- Le module [de disposition des boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [de disposition des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
